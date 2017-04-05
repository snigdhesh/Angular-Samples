import {Component} from 'angular2/core';
import {CourseComponents} from './courses.component'
import {AuthorComponent} from './author.component'
import {StarComponent} from './star.component'

@Component({
    selector: 'my-app',
    template: `
    <h1>AppComponent</h1>
    <hr/>
    <course></course>
    <hr/>
    <author></author>
    <hr/>
    <star [isFavourite]="post.isFavourite" (change)="changeFavourite($event)"></star>`,
    directives:[CourseComponents,AuthorComponent,StarComponent]

})
export class AppComponent {
    post={
        title:"Title",
        isFavourite:true
    }

    changeFavourite($event)
    {
        console.log($event);
    }
 }
