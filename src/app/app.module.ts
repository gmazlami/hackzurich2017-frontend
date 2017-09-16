import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompleteComponent } from './pages/complete.component';
import { ReleaseComponent } from './pages/release.component';
import { OrderComponent } from './pages/order.component';
import { VoucherComponent } from './pages/voucher.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './pages/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { JasperoAlertsModule } from '@jaspero/ng2-alerts';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    OrderComponent,
    ReleaseComponent,
    CompleteComponent,
    VoucherComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    JasperoAlertsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
