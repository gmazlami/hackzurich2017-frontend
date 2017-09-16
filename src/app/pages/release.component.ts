import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';

@Component({
    styleUrls: ['./release.component.scss'],
    templateUrl: './release.component.html'
})

export class ReleaseComponent implements OnInit {

    product: any;

    // chart.js
    lineChartData: Array<any> = [{ data: [1, 0.8, 0.5, 0.7, -0.5, -0.8], label: 'Sentiment' }];
    lineChartLabels: Array<any> = ['Before Release', 'After Release'];
    lineChartOptions: any = { responsive: true };
    lineChartLegend: Boolean = true;
    lineChartType: String = 'line';
    lineChartColors: Array<any> = [
        {
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];

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

}
