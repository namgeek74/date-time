import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DateTimeJsComponent } from './components/date-time-js/date-time-js.component';
import { DateFnsComponent } from './components/date-fns/date-fns.component';

@NgModule({
  declarations: [
    AppComponent,
    DateTimeJsComponent,
    DateFnsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
