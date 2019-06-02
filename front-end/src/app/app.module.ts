import { BrowserModule } from '@angular/platform-browser';
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
