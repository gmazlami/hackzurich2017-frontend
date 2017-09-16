import { SearchComponent } from './pages/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    routing,
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    SearchComponent
  ]
})

export class AppModule { }
