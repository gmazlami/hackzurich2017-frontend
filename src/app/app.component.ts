import { Component, OnInit } from '@angular/core';
import * as pushpad from 'pushpad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';

  options: any = {
    duration: 0
  };

  ngOnInit() {

  }
}
