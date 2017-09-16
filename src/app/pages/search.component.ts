import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    styleUrls: ['./search.component.scss'],
    templateUrl: './search.component.html'
})

export class SearchComponent {

    searchQuery: string = null;
    products: any[] = [];

    Math: Math;

    constructor(private http: HttpClient) {
        this.Math = Math;
    }

    submit() {
        this.http.get('http://localhost:8081/api/products/search?query=' + this.searchQuery).subscribe(data => {
            this.products = data as any;
        });
    }

}
