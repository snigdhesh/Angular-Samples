import {Component} from '@angular/core'
import {MessageService} from './message.service'

@Component({
    
    selector:'message',
    template:`<h1>Message Component</h1>
    <ul>
        <li *ngFor="let m of msg">
            {{m}}
        </li>
    </ul>`,
    
})
export class MessageComponent{

    public msg:string[];

    constructor(i:MessageService)
    {
        this.msg=i.getMessages();

    }

}