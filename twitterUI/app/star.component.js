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
    var StarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StarComponent = (function () {
                function StarComponent() {
                    this.bool = false;
                    this.totlikes = 0;
                }
                StarComponent.prototype.onClick = function () {
                    this.bool = !this.bool;
                    this.totlikes += this.bool ? +1 : -1;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], StarComponent.prototype, "bool", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], StarComponent.prototype, "totlikes", void 0);
                StarComponent = __decorate([
                    core_1.Component({
                        selector: 'star',
                        template: "\n    <!--<h2>Star</h2><h3>Total likes: <span>{{totlikes}}</span></h3>-->\n\n    <i class=\"glyphicon glyphicon-heart\"  [class.highlight]=\"bool\"  (click)=\"onClick()\"></i>\n    \n    \n    ",
                        styles: ["\n\n        .glyphicon-heart{\n            color:lightgray;\n            cursor:pointer;\n        }\n        .highlight\n        {\n            color:deeppink;\n        }\n\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StarComponent);
                return StarComponent;
            }());
            exports_1("StarComponent", StarComponent);
        }
    }
});
//# sourceMappingURL=star.component.js.map