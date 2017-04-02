import {Component} from 'angular2/core'
import {StarComponent} from './star.component'

@Component({
    selector:'tweet',
    template:`
    <div class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object" src="http://lorempixel.com/100/100/people?3" alt="...">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">Vadlapudi<span id="auth">@vad_author</span></h4>
    This is body<br><star></star>
     

  </div>

 <div class="media-left">
    <a href="#">
      <img class="media-object" src="http://lorempixel.com/100/100/food?1" alt="...">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">Snigdhesh<span id="auth">@Snigdhesh_author</span></h4>
    This is body<br><star></star>
     

  </div>
   <div class="media-left">
    <a href="#">
      <img class="media-object" src="http://lorempixel.com/100/100/technics?2" alt="...">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">Naga<span id="auth">@Naga_author</span></h4>
    This is body<br><star></star>
  </div>
</div>`,
styles:[`
    img{
        border-radius:20px;
    }
    #auth{
        color:#ccc;
    }

`],
providers:[StarComponent],
directives:[StarComponent]
})

export class TweetComponent{
   
    constructor(starComponent:StarComponent)
    {
      starComponent.onClick();  
    }

}

