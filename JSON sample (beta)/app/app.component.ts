import {Component} from 'angular2/core';
import {PostService} from './post.service';
import{HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>',
    providers:[PostService,HTTP_PROVIDERS]
})
export class AppComponent {


    constructor(private _post:PostService)
    {
        this._post.getPosts().subscribe(posts =>console.log(posts));
    }

 }