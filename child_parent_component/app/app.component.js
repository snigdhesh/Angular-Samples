"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var course_component_1 = require('./course.component');
var AppComponent = (function () {
    function AppComponent() {
        this.bool = true;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n     <h2>App Component</h2>\n\n    <div [class.header]=\"bool\">\n      <h1>Heading</h1>\n    </div>\n\n    <br><br>\n\n    <div>\n        Enter name for child class <input type=\"text\" #ptext (keyup)=\"0\"/>       \n        <br><br>\n        Name from Child class is {{text_from_child}}\n    </div><br><br>\n\n <div [class.back]=\"bool\"> <course [io]=\"ptext.value\" (childEvent)=\"text_from_child=$event\"></course> </div>\n\n  ",
            styles: ["\n  .header{ background-color:#4682B4; border-radius:25px;padding:10px;}\n  .back{background-color:lightgray;padding:25px;border-radius:25px;color:black;}"],
            directives: [course_component_1.CourseComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map