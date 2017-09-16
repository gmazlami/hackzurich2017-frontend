import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';

@Component({
    selector: 'tweet',
    templateUrl: './tweet.component.html'
})

export class TweetComponent {

    @Input()
    tweet: any;

}
