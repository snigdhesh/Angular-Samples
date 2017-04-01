import {Component} from 'angular2/core'
import {ZippyComponent} from './zippy.component'


@Component({
    selector: 'my-app',
    template: 
    `<h1>My First Angular 2 App</h1>
    <zippy title="Title is here">    
    <div class="body">
    This is body
    </div>
    
    </zippy>`,
    styleUrls:['app/style.css'],
    directives:[ZippyComponent]

})
export class AppComponent {
   
}
