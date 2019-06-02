import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiRequestorComponent } from './api-requestor/api-requestor.component';
import { ApiResultsComponent } from './api-results/api-results.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiRequestorComponent,
    ApiResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
