import {Component,Input,EventEmitter,Output} from 'angular2/core'


@Component({
    selector:'star',
    template:`
    <h1>Star Component</h1>
   
         <p> <span class="glyphicon"
          [class.glyphicon-star]="isFavourite"
          [class.glyphicon-star-empty]="!isFavourite"
          (click)="classChange()"></span></p>   
       
    `})
export class StarComponent{
@Input() isFavourite:boolean=false;
@Output() change =new EventEmitter();

classChange()
{
    this.isFavourite=!this.isFavourite;
    this.change.emit({newvalue:this.isFavourite});
}


}