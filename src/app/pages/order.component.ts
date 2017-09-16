import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './order.component.html'
})

export class OrderComponent implements OnInit {

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
        this.product = data[0] as any;
      });
    }

    verifyPurchase(orderNumber: number) {

    }

}
