import { Component } from 'angular2/core'
import { AutogrowDirective } from './Autogrow.directive'
import {CourseService} from './course.service'

@Component({
    selector: 'course',
    template: `

    <div class="row">

  <div class="col-sm-4" (click)="divClick($event)"><h1 class="display-1">Course Component</h1>
    <ul>
        <li *ngFor="#i of res">
            {{i}}
        </li>
    </ul>      
     <input type="text" class="form-control" [(ngModel)]="title"/><br>
     <label>Preview........</label>{{title}}      <br/>
  <button type="button" class="btn btn-default btn-lg" (click)="isclicked($event)" >Submit</button>
  <input type="button" class="btn btn-default btn-lg" (click)="title=''" value="Clear"/>
  </div>

</div>  `,
    directives: [AutogrowDirective],
    providers:[CourseService]
})
export class CourseComponents {

    public title:string="Course List";
   

    changeClass()
    {
 
        
    }

    divClick($event)
    {
        console.log("Handled by DIV",$event);
    }

    isclicked($event)
    {
        console.log("Clicked",$event);
    }

    res:string[];
    constructor(i:CourseService)
    {
        this.res=i.getCourses();
    }
  

}