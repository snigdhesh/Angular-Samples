import {Component,Input} from 'angular2/core'


@Component({
    selector:'vote',
    template:`
    
    <h1>Vote</h1>

    <div [class.box]="true">
    <i class="glyphicon glyphicon-menu-up" (click)="onUpClick()" [class.highlighted]="votes==11"></i>
    <span>{{votes}}</span>
    <i class="glyphicon glyphicon-menu-down" (click)="onDownClick()" [class.highlighted]="votes==9"></i>  
    </div>    
    `,
    styles:[`
    
    .box{
        width:60px;
        border:0px solid black;
        height:200px;
        text-align:center;
        font-size: 50px;
    }

    .glyphicon {
  
    cursor:pointer;
    }

    .highlighted{
       color:orange;
         
    }
}
span
{
    font-size:45px;
}`]
   
})
export class VoteComponent{
    @Input() votes=0;   
   onUpClick()
   {
       if(this.votes==11)
        return;
        this.votes+=1;   }
      
    onDownClick()
    {
        if(this.votes==9)
        return;
        this.votes-=1;    
    }
}