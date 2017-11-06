import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { selector } from 'rxjs/operator/publish';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-demo-app',
  templateUrl: './datepicker-demo-app.component.html',
  styleUrls: ['./datepicker-demo-app.component.css']
})
export class DatepickerDemoAppComponent implements OnInit {
  form: FormGroup;
  
   constructor(private fb: FormBuilder) {}
  
   ngOnInit() {
     this.form = this.fb.group({
       date: ''
     });

     this.form.get('date').valueChanges.subscribe(
       value=>{
         console.log(value);
         var obj=value;
         console.log(obj._i);
       }
     )
   }

   
}
