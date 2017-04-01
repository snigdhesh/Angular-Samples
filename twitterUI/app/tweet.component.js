System.register(['angular2/core', './star.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, star_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent(starComponent) {
                    starComponent.onClick();
                }
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "\n    <div class=\"media\">\n  <div class=\"media-left\">\n    <a href=\"#\">\n      <img class=\"media-object\" src=\"http://lorempixel.com/100/100/people?3\" alt=\"...\">\n    </a>\n  </div>\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">Vadlapudi<span id=\"auth\">@vad_author</span></h4>\n    This is body<br><star></star>\n     \n\n  </div>\n\n <div class=\"media-left\">\n    <a href=\"#\">\n      <img class=\"media-object\" src=\"http://lorempixel.com/100/100/food?1\" alt=\"...\">\n    </a>\n  </div>\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">Snigdhesh<span id=\"auth\">@Snigdhesh_author</span></h4>\n    This is body<br><star></star>\n     \n\n  </div>\n   <div class=\"media-left\">\n    <a href=\"#\">\n      <img class=\"media-object\" src=\"http://lorempixel.com/100/100/technics?2\" alt=\"...\">\n    </a>\n  </div>\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">Naga<span id=\"auth\">@Naga_author</span></h4>\n    This is body<br><star></star>\n  </div>\n</div>",
                        styles: ["\n    img{\n        border-radius:20px;\n    }\n    #auth{\n        color:#ccc;\n    }\n\n"],
                        providers: [star_component_1.StarComponent],
                        directives: [star_component_1.StarComponent]
                    }), 
                    __metadata('design:paramtypes', [star_component_1.StarComponent])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map