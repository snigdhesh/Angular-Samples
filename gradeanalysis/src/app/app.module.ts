import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {PieComponent} from './pie.component';
import {BarComponent} from './bar.component';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
