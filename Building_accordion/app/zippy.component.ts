import {Component,Input} from 'angular2/core'

@Component({

    selector:'zippy',
    template:`
<div class="panel panel-default">
  <div class="panel-heading ">

   <span class="pull-right glyphicon"
   
   [ngClass]="{

        'glyphicon-chevron-down':!dis,
        'glyphicon-chevron-up':dis

   }"
  (click)="onClick()"></span>
   <h3 class="panel-title">{{title}}</h3>
  </div>
  <div *ngIf="dis" class="panel-body">
  <ng-Content select=".body"></ng-Content> 
  </div>
</div>
`

})
export class ZippyComponent{

    dis=false;
    @Input() title:string;
    

    onClick()
    {

        this.dis=!this.dis;
    }

}