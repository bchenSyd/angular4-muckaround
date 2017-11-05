webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"header\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <div class=\"logo\"></div>\n</div>\n\n<div class=\"main-content\" >\n  <h1>Root Component</h1>\n  <app-child [user]=\"currentUser\" [systemNotification]=\"systemNotification\"></app-child>\n  <button (click)=\"onChangeData()\">Change Data</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.header .logo {\n  height: 150px;\n  width: 150px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/angular.svg") + ");\n}\n.main-content {\n  font-size: 20px;\n  min-height: 200px;\n  padding: 10px;\n  border: 1px red solid;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_service__ = __webpack_require__("../../../../../src/app/logger.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(logger) {
        this.logger = logger;
        this.title = 'angular4';
        this.currentUser = {
            name: 'bochen',
            age: 35,
        };
        this.systemNotification = 'welcome to angular4';
    }
    AppComponent.prototype.onChangeData = function () {
        var random = Math.floor(Math.random() * 100);
        this.currentUser.name = 'bochen-' + random;
        // if you comment out below line, changes to currentUser won't take effect on dom
        // child.doCheck return false, nest gets skipped
        // because child @input hasn't changed, nor its own binding changes
        // this.systemNotification = 'sys-notification => ' + random;
    };
    AppComponent.prototype.ngOnInit = function () {
        // Properties are resolved and things like
        // this.mapWindow and this.mapControls
        // had a chance to resolve from the
        // two child components <map-window> and <map-controls>
        this.logger.log('parent ngOnInit');
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.logger.log('parent  ngDoCheck');
    };
    AppComponent.prototype.ngOnChanges = function (changes) {
        this.logger.log('parent ngOnChanges');
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.logger.log('parent ngOnDestroy');
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        // Component content has been initialized
    };
    AppComponent.prototype.ngAfterContentChecked = function () {
        // Component content has been Checked
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        // Component views are initialized
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        // Component views have been checked
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.less")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__logger_service__["a" /* LoggerService */]],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush // CheckOnce;
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__logger_service__["a" /* LoggerService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__child_child_component__ = __webpack_require__("../../../../../src/app/child/child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__child_nested_nested_component__ = __webpack_require__("../../../../../src/app/child/nested/nested.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__child_child_component__["a" /* ChildComponent */],
                __WEBPACK_IMPORTED_MODULE_5__child_nested_nested_component__["a" /* NestedComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/child/child.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"child\">\n  <h2>Child Component</h2>\n  <div>\n    <div>\n      <label for=\"\">User.Name</label>\n      <input name=\"name\" type=\"text\"  [(ngModel)]=\"user.name\" />\n    </div>\n    <div>\n      <label *ngIf=\"showAge\">age:{{user.age}}</label>\n    </div>\n\n    <br/>\n    <div>\n      <label for=\"\">System Notification</label>\n      <input name=\"name\" type=\"text\" [(ngModel)]=\"systemNotification\" />\n    </div>\n    <div>\n        <label for=\"\">show Age: </label>\n        <input name=\"show_age\" type=\"radio\" [(ngModel)]=\"showAge\" [value]=\"true\"/><label>Yes</label>\n        <input name=\"show_age\" type=\"radio\" [(ngModel)]=\"showAge\" [value]=\"false\"/><label>No</label>\n      </div>\n      <app-nested></app-nested>\n  </div>\n\n  <button (click)=\"showData()\">Show Data</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/child/child.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".child {\n  margin: 10px;\n  padding: 10px;\n  border: 1px cyan solid;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/child/child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_service__ = __webpack_require__("../../../../../src/app/logger.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChildComponent = (function () {
    function ChildComponent(logger) {
        this.logger = logger;
        // changes to ownProp will always cause doCheck return false;
        this.showAge = false;
    }
    ChildComponent.prototype.showData = function () {
        alert(JSON.stringify({
            user: this.user,
            systemNotification: this.systemNotification,
            showAge: this.showAge,
        }));
    };
    ChildComponent.prototype.ngDoCheck = function () {
        this.logger.log('child  ngDoCheck');
    };
    ChildComponent.prototype.ngOnInit = function () {
        this.logger.log('child ngOnInit');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ChildComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ChildComponent.prototype, "systemNotification", void 0);
    ChildComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-child',
            template: __webpack_require__("../../../../../src/app/child/child.component.html"),
            styles: [__webpack_require__("../../../../../src/app/child/child.component.less")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__logger_service__["a" /* LoggerService */]],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__logger_service__["a" /* LoggerService */]])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "../../../../../src/app/child/nested/nested.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NestedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_service__ = __webpack_require__("../../../../../src/app/logger.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NestedComponent = (function () {
    function NestedComponent(logger) {
        this.logger = logger;
        this.condition = true;
        this.types = [{
                name: 'component',
                value: 0
            },
            {
                name: 'directive',
                value: 1
            },
            {
                name: 'service',
                value: 2
            }];
        this.selectedType = 0;
    }
    NestedComponent.prototype.ngOnInit = function () {
    };
    NestedComponent.prototype.ngDoCheck = function () {
        this.logger.log('nested DoCheck');
    };
    NestedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-nested',
            template: "<div style=\"border:1px blue solid; padding:5px; margin: 5px;\">\n                <h2>nested component</h2>\n                <select name=\"type\" [(ngModel)]=\"selectedType\">\n                  <option *ngFor=\"let t of types\" [ngValue]=\"t.value\">\n                    {{t.name}}\n                  </option>\n                </select>\n                <div *ngIf=\"selectedType === 1\" >you selected directive</div>\n             </div>",
            providers: [__WEBPACK_IMPORTED_MODULE_1__logger_service__["a" /* LoggerService */]],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__logger_service__["a" /* LoggerService */]])
    ], NestedComponent);
    return NestedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function (txt) {
        console.log(txt);
    };
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "../../../../../src/assets/angular.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "angular.87d90936f653de60412b.svg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map