import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {OverlayModule} from 'angular-io-datepicker';
import {DatePickerModule} from 'angular-io-datepicker';

import { AppComponent } from './app.component';
import { DatepickerDemoAppComponent } from './datepicker-demo-app/datepicker-demo-app.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerDemoAppComponent
  ],
  imports: [
    BrowserModule,
    //OverlayModule,
    DatePickerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
