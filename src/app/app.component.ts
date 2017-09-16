import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  @ViewChild('alert')
  alert: any;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.alert._destroy2 = this.alert._destroy;
    this.alert._destroy = () => {
      const urlparts = this.router.url.split('/');
      const id = urlparts[2];
      this.router.navigateByUrl('/completed/' + id);
      this.alert._destroy2();
    };
  }
}
