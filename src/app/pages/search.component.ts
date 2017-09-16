import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounce } from 'lodash';
import { Subject, Observable } from 'rxjs/Rx';

@Component({
    styleUrls: ['./search.component.scss'],
    templateUrl: './search.component.html'
})

export class SearchComponent {

    searchQuery: string = null;
    products: any[] = [];

    Math: Math;
    queryUpdated$: Subject<string> = new Subject();

    constructor(private http: HttpClient) {
        this.Math = Math;

        this.queryUpdated$.debounceTime(500).subscribe(result => {
            this.submit();
        });
    }

    change(event) {
        this.searchQuery = event;
        this.queryUpdated$.next(event);
    }

    submit() {
        this.http.get('http://localhost:8081/api/products/search?query=' + this.searchQuery).subscribe(data => {
            this.products = data as any;
        });
    }

}
