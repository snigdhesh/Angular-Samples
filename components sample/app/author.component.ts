import {Component} from 'angular2/core'
import {AuthorService} from './author.service'
@Component ({
    selector:'author',
    template:`<h1>Author Component</h1>
    <label>Authors</label>
    <ul>
        <li *ngFor="#i of auth">
            {{i}}
        </li>
    </ul>
    `,
providers:[AuthorService]
})
    


export class AuthorComponent{
auth:string[];

constructor(authorService:AuthorService)
{
    this.auth=authorService.getAuthors();
}

}