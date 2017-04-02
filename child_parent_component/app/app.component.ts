import { Component } from '@angular/core';
import { CourseComponent } from './course.component'

@Component({
  selector: 'my-app',
  template: `
     <h2>App Component</h2>

    <div [class.header]="bool">
      <h1>Heading</h1>
    </div>

    <br><br>

    <div>
        Enter name for child class <input type="text" #ptext (keyup)="0"/>       
        <br><br>
        Name from Child class is {{text_from_child}}
    </div><br><br>

 <div [class.back]="bool"> <course [io]="ptext.value" (childEvent)="text_from_child=$event"></course> </div>

  `,
  styles: [`
  .header{ background-color:#4682B4; border-radius:25px;padding:10px;}
  .back{background-color:lightgray;padding:25px;border-radius:25px;color:black;}`],
  directives: [CourseComponent]
})
export class AppComponent {
  public bool = true;
  public text_from_child:string;
}
