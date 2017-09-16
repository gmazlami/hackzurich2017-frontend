import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';

@Component({
    styleUrls: ['./order.component.scss'],
    templateUrl: './order.component.html'
})

export class OrderComponent implements OnInit {

    product: any;
    orderUpdated$: Subject<string> = new Subject();
    orderNumber: string;
    verified: Boolean = false;

    constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
        this.orderUpdated$.debounceTime(500).subscribe(result => {
            this.verifyPurchase();
        });
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.fetchProduct(params['product']);
        });
    }

    change(event) {
        this.orderNumber = event;
        this.orderUpdated$.next(event);
    }

    fetchProduct(id) {
        this.http.get('http://localhost:8081/api/products/' + id).subscribe(data => {
            this.product = data[0] as any;
        });
    }

    verifyPurchase() {
        setTimeout(() => {
            this.verified = true;
        }, 1000);
    }

}
