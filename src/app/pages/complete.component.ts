import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';

@Component({
    styleUrls: ['./complete.component.scss'],
    templateUrl: './complete.component.html'
})

export class CompleteComponent implements OnInit {

    product: any;

    constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.fetchProduct(params['product']);
        });
    }

    fetchProduct(id) {
        this.http.get('http://localhost:8081/api/products/' + id).subscribe(data => {
            this.product = data as any;
        });
    }

}
