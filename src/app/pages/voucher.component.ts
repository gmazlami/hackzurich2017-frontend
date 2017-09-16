import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';

@Component({
    styleUrls: ['./voucher.component.scss'],
    templateUrl: './voucher.component.html'
})

export class VoucherComponent implements OnInit {

    contract: any;
    Math: Math;

    constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
        this.Math = Math;
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.fetchProduct(params['product']);
        });
    }

    fetchProduct(id) {
        this.http.get('http://localhost:8081/api/contracts/' + id).subscribe(data => {
            this.contract = data as any;
        });
    }

}
