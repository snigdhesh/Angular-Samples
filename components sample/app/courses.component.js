System.register(['angular2/core', './Autogrow.directive', './course.service'], function(exports_1, context_1) {
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
    var core_1, Autogrow_directive_1, course_service_1;
    var CourseComponents;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Autogrow_directive_1_1) {
                Autogrow_directive_1 = Autogrow_directive_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            }],
        execute: function() {
            CourseComponents = (function () {
                function CourseComponents(i) {
                    this.title = "Course List";
                    this.res = i.getCourses();
                }
                CourseComponents.prototype.changeClass = function () {
                };
                CourseComponents.prototype.divClick = function ($event) {
                    console.log("Handled by DIV", $event);
                };
                CourseComponents.prototype.isclicked = function ($event) {
                    console.log("Clicked", $event);
                };
                CourseComponents = __decorate([
                    core_1.Component({
                        selector: 'course',
                        template: "\n\n    <div class=\"row\">\n\n  <div class=\"col-sm-4\" (click)=\"divClick($event)\"><h1 class=\"display-1\">Course Component</h1>\n    <ul>\n        <li *ngFor=\"#i of res\">\n            {{i}}\n        </li>\n    </ul>      \n     <input type=\"text\" class=\"form-control\" [(ngModel)]=\"title\"/><br>\n     <label>Preview........</label>{{title}}      <br/>\n  <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"isclicked($event)\" >Submit</button>\n  <input type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"title=''\" value=\"Clear\"/>\n  </div>\n\n</div>  ",
                        directives: [Autogrow_directive_1.AutogrowDirective],
                        providers: [course_service_1.CourseService]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CourseComponents);
                return CourseComponents;
            }());
            exports_1("CourseComponents", CourseComponents);
        }
    }
});
//# sourceMappingURL=courses.component.js.map