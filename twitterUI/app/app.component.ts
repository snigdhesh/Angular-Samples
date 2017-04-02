import {Component} from 'angular2/core';
import{StarComponent} from './star.component'
import{VoteComponent} from './vote.component'
import{TweetComponent} from './tweet.component'

@Component({
    selector: 'my-app',
    template: 
    `<h1>My First Angular 2 App</h1>
    <vote [votes]="post.votes"></vote>
    <tweet></tweet>
    <!--<star [bool]="post.bool" [totlikes]="post.totlikes"></star>-->`,
    directives:[StarComponent,VoteComponent,TweetComponent]
})
export class AppComponent {
    post={
        totlikes:10,
        bool:"true",
        votes:10

    }

}
