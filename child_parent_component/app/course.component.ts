import { Component } from '@angular/core'
import { CourseService } from './course.service'
import {EventEmitter} from '@angular/core'
@Component({
    selector: 'course',
    template:
    `
    <h1>Course Component</h1>







<!--sidebar begins-->
    <div [class.sidebar]="boolean">    
        <p *ngIf="boolean"> This is printed cause it's recorded as true</p>

          <div [ngSwitch]="color">
             <p *ngSwitchWhen="'red'">This is printed in red</p>
             <p *ngSwitchWhen="'blue'">This is printed in blue</p>            
          </div>            
        <p (mouseover)="toggle()" [ngClass]="{background:back,textColor:text}">This line is applied in css style</p>
        <button (click)="toggle()" >Toggle</button><br><br>

        Enter name for parent class <input type="text" #childtext (keyup)="onChange(childtext.value)"/><br><br>
        Name from parent class is {{io}}    
     </div> 
<!--sidebar ends-->
    
     <img [src]="imgLink"><br><br>
     <!--  <input type="text" value="angular" #demoinput/>
        <button (onload)="onClick(demoinput.value)">Submit</button>-->
        First Name <input type="text" [(ngModel)]="fname"/><br><br>
        Last Name <input type="text" [(ngModel)]="lname"/><br><br>
        Full Name: {{fname}} {{lname}}
        
        <div [class.classOne]="boolean">
        <h2>Courses</h2>

        <ul>
            <li *ngFor="let cor of course">
                {{cor}}
            </li>
        </ul>
        </div>`,
    styles: [`
    .sidebar{float:right;border:1px solid black;width:1000px;height:300px;border-radius:10px;padding:10px;}
    .classOne{color:red;font-size:30px;background-color:yellow;border-radius:20px;padding:2px;}
    .background{background-color:black;}  
    .textColor{color:white;}`],
    inputs:[`io`],
    outputs:[`childEvent`],
    providers: [CourseService]

})
export class CourseComponent {
    public imgLink = "http://lorempixel.com/400/300";
    public boolean = true;
    public fname: string;
    public lname: string;
    public color = 'blue';
    public back = true;
    public text = true;
    public io:string;
    childEvent=new EventEmitter<string>();


    onChange(value:string)
    {
        this.childEvent.emit(value);
    }



    toggle() {
        this.back = !this.back;
        this.text = !this.text;
    }

    onClick(value) {
        console.log(value);
    }

    course;
    constructor(i: CourseService) {
        this.course = i.getCourses();
    }
}