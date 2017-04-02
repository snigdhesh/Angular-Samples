import{Component,Input} from 'angular2/core'

@Component({
    selector:'star',
    template:`
    <!--<h2>Star</h2><h3>Total likes: <span>{{totlikes}}</span></h3>-->

    <i class="glyphicon glyphicon-heart"  [class.highlight]="bool"  (click)="onClick()"></i>
    
    
    `,
    styles:[`

        .glyphicon-heart{
            color:lightgray;
            cursor:pointer;
        }
        .highlight
        {
            color:deeppink;
        }

    `]
})
export class StarComponent{

   @Input() bool=false;
   @Input() totlikes=0;


    onClick()
    {
        this.bool=!this.bool;
        this.totlikes+=this.bool ? +1 : -1;


    }




    
}