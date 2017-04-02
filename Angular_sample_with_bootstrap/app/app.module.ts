import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {MessageComponent} from './messages.component';
import {MessageService} from './message.service'
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,MessageComponent ],
  providers:[MessageService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
