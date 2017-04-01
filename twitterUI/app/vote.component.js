System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.votes = 0;
                }
                VoteComponent.prototype.onUpClick = function () {
                    if (this.votes == 11)
                        return;
                    this.votes += 1;
                };
                VoteComponent.prototype.onDownClick = function () {
                    if (this.votes == 9)
                        return;
                    this.votes -= 1;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "votes", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n    \n    <h1>Vote</h1>\n\n    <div [class.box]=\"true\">\n    <i class=\"glyphicon glyphicon-menu-up\" (click)=\"onUpClick()\" [class.highlighted]=\"votes==11\"></i>\n    <span>{{votes}}</span>\n    <i class=\"glyphicon glyphicon-menu-down\" (click)=\"onDownClick()\" [class.highlighted]=\"votes==9\"></i>  \n    </div>    \n    ",
                        styles: ["\n    \n    .box{\n        width:60px;\n        border:0px solid black;\n        height:200px;\n        text-align:center;\n        font-size: 50px;\n    }\n\n    .glyphicon {\n  \n    cursor:pointer;\n    }\n\n    .highlighted{\n       color:orange;\n         \n    }\n}\nspan\n{\n    font-size:45px;\n}"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map