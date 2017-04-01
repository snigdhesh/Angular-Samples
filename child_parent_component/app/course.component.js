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
var course_service_1 = require('./course.service');
var core_2 = require('@angular/core');
var CourseComponent = (function () {
    function CourseComponent(i) {
        this.imgLink = "http://lorempixel.com/400/300";
        this.boolean = true;
        this.color = 'blue';
        this.back = true;
        this.text = true;
        this.childEvent = new core_2.EventEmitter();
        this.course = i.getCourses();
    }
    CourseComponent.prototype.onChange = function (value) {
        this.childEvent.emit(value);
    };
    CourseComponent.prototype.toggle = function () {
        this.back = !this.back;
        this.text = !this.text;
    };
    CourseComponent.prototype.onClick = function (value) {
        console.log(value);
    };
    CourseComponent = __decorate([
        core_1.Component({
            selector: 'course',
            template: "\n    <h1>Course Component</h1>\n\n\n\n\n\n\n\n<!--sidebar begins-->\n    <div [class.sidebar]=\"boolean\">    \n        <p *ngIf=\"boolean\"> This is printed cause it's recorded as true</p>\n\n          <div [ngSwitch]=\"color\">\n             <p *ngSwitchWhen=\"'red'\">This is printed in red</p>\n             <p *ngSwitchWhen=\"'blue'\">This is printed in blue</p>            \n          </div>            \n        <p (mouseover)=\"toggle()\" [ngClass]=\"{background:back,textColor:text}\">This line is applied in css style</p>\n        <button (click)=\"toggle()\" >Toggle</button><br><br>\n\n        Enter name for parent class <input type=\"text\" #childtext (keyup)=\"onChange(childtext.value)\"/><br><br>\n        Name from parent class is {{io}}    \n     </div> \n<!--sidebar ends-->\n    \n     <img [src]=\"imgLink\"><br><br>\n     <!--  <input type=\"text\" value=\"angular\" #demoinput/>\n        <button (onload)=\"onClick(demoinput.value)\">Submit</button>-->\n        First Name <input type=\"text\" [(ngModel)]=\"fname\"/><br><br>\n        Last Name <input type=\"text\" [(ngModel)]=\"lname\"/><br><br>\n        Full Name: {{fname}} {{lname}}\n        \n        <div [class.classOne]=\"boolean\">\n        <h2>Courses</h2>\n\n        <ul>\n            <li *ngFor=\"let cor of course\">\n                {{cor}}\n            </li>\n        </ul>\n        </div>",
            styles: ["\n    .sidebar{float:right;border:1px solid black;width:1000px;height:300px;border-radius:10px;padding:10px;}\n    .classOne{color:red;font-size:30px;background-color:yellow;border-radius:20px;padding:2px;}\n    .background{background-color:black;}  \n    .textColor{color:white;}"],
            inputs: ["io"],
            outputs: ["childEvent"],
            providers: [course_service_1.CourseService]
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService])
    ], CourseComponent);
    return CourseComponent;
}());
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=course.component.js.map