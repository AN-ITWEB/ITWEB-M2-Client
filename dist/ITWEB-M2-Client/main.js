(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.component */ "./src/app/_directives/modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"]; });




/***/ }),

/***/ "./src/app/_directives/modal.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/modal.component.ts ***!
  \************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
//http://jasonwatmore.com/post/2018/05/25/angular-6-custom-modal-window-dialog-box
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jw-modal',
            template: "<div class=\"jw-modal\">\n            <div class=\"jw-modal-body\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div class=\"jw-modal-background\"></div>"
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.service */ "./src/app/_services/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_0__["ModalService"]; });




/***/ }),

/***/ "./src/app/_services/modal.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/modal.service.ts ***!
  \********************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
//http://jasonwatmore.com/post/2018/05/25/angular-6-custom-modal-window-dialog-box
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    return ModalService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\r\n<div>\r\n    <!-- <nav>\r\n        <a [routerLink]=\"['/home']\">Home</a>\r\n    </nav> -->\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular5-social-login */ "./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular5_social_login__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// Configs 
function getAuthServiceConfigs() {
    var config = new angular5_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"]([
        {
            id: angular5_social_login__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular5_social_login__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginProvider"]("157615515171213")
        },
        {
            id: angular5_social_login__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular5_social_login__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginProvider"]("396889746308-1choukjth13ep88uthmjkd8u0dqm40el.apps.googleusercontent.com")
        },
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["routing"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                angular5_social_login__WEBPACK_IMPORTED_MODULE_11__["SocialLoginModule"]
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_9__["ModalService"],
                {
                    provide: angular5_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");


var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    // { path: '', component: AppComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body { padding: 2em; }\r\n\r\n/* Shared */\r\n\r\n.loginBtn {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  width: 13em;\r\n  margin: 0.2em;\r\n  padding: 0 15px 0 46px;\r\n  border: none;\r\n  text-align: left;\r\n  line-height: 34px;\r\n  white-space: nowrap;\r\n  border-radius: 0.2em;\r\n  font-size: 16px;\r\n  color: #FFF;\r\n}\r\n\r\n.loginBtn:before {\r\n  content: \"\";\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 100%;\r\n}\r\n\r\n.loginBtn:focus {\r\n  outline: none;\r\n}\r\n\r\n.loginBtn:active {\r\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n}\r\n\r\n/* Facebook */\r\n\r\n.loginBtn--facebook {\r\n  background-color: #4C69BA;\r\n  background-image: linear-gradient(#4C69BA, #3B55A0);\r\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\r\n  text-shadow: 0 -1px 0 #354C8C;\r\n}\r\n\r\n.loginBtn--facebook:before {\r\n  border-right: #364e92 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\r\n}\r\n\r\n.loginBtn--facebook:hover,\r\n.loginBtn--facebook:focus {\r\n  background-color: #5B7BD5;\r\n  background-image: linear-gradient(#5B7BD5, #4864B1);\r\n}\r\n\r\n/* Google */\r\n\r\n.loginBtn--google {\r\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n  background: #DD4B39;\r\n}\r\n\r\n.loginBtn--google:before {\r\n  border-right: #BB3F30 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n}\r\n\r\n.loginBtn--google:hover,\r\n.loginBtn--google:focus {\r\n  background: #E74B37;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"owner.id == ''\" style=\"text-align: right\">\r\n  <button class=\"loginBtn loginBtn--facebook\" (click)=\"socialSignIn('facebook')\">\r\n    Login with Facebook\r\n  </button>\r\n  <button class=\"loginBtn loginBtn--google\" (click)=\"socialSignIn('google')\">\r\n    Login with Google\r\n  </button>\r\n</div>\r\n<h1 style=\"text-align: center\">Welcome back {{owner.Name}}</h1>\r\n<div *ngFor=\"let program of programs; let i = index\">\r\n<h3>Owner {{program.Owner.Name}}</h3>\r\n  <table>\r\n    <thead>\r\n        <th>Exercise</th>\r\n        <th>Description</th>\r\n        <th>Set</th>\r\n        <th>RepsTime</th>\r\n        <th>Completed</th>\r\n        <th>Action</th>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let exercise of program.Exercises; let j = index\">\r\n            <td>{{exercise.Exercise}}</td>\r\n            <td>{{exercise.Description}}</td>\r\n            <td>{{exercise.Set}}</td>\r\n            <td>{{exercise.RepsTime}}</td>\r\n            <td *ngIf=\"program.Owner.id==id\"> \r\n              <mat-slide-toggle color=\"primary\" [(ngModel)]=\"programs[i].Exercises[j].Logged\" (click)=\"toggleClicked(program._id, exercise.id, i, j)\">\r\n              </mat-slide-toggle>\r\n            </td>\r\n            <td *ngIf=\"program.Owner.id!=id\"> \r\n              <mat-slide-toggle color=\"primary\" [(ngModel)]=\"programs[i].Exercises[j].Logged\" (click)=\"toggleClicked(program._id, exercise.id, i, j)\" disabled>\r\n              </mat-slide-toggle>\r\n            </td>\r\n            <td style=\"text-align: center;\">\r\n              <a  (click)=\"removeExercise($event, program._id, exercise.id)\"> \r\n                <img src=\"https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Close-512.png\" style=\"width:25px;height:25px;\"/>\r\n              </a>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div *ngIf=\"program.Owner.id==owner.id\">\r\n    <button (click)=\"openModal({id: 'custom-modal-1', programId: program._id});\">Create Exercise</button>\r\n    <button (click)=\"removeProgram($event, program._id)\">Remove Program!</button>\r\n  </div>\r\n  \r\n</div>\r\n<div  *ngIf=\"owner.id != ''\">\r\n  <h3>Create new program</h3>\r\n  <button (click)=\"createProgram()\">Create Program</button>\r\n</div>\r\n\r\n\r\n<jw-modal id=\"custom-modal-1\">\r\n  <h1>Add new exercise</h1>\r\n  <p>Exercise name: <input type=\"text\" [(ngModel)]=\"modalExerciseText\" /></p>\r\n  <p>Description: <input type=\"text\" [(ngModel)]=\"modalDescriptionText\" /></p>\r\n  <p>Set: <input type=\"text\" [(ngModel)]=\"modalSetText\" /></p>\r\n  <p>Reps/Time: <input type=\"text\" [(ngModel)]=\"modalRepsTimeText\" /></p>\r\n  <button (click)=\"closeModal('custom-modal-1');\">Cancle</button>\r\n  <button (click)=\"addExerciseModal('custom-modal-1');\">Add exercise</button>\r\n</jw-modal>\r\n\r\n<jw-modal id=\"not-logged-in-modal\">\r\n  <h1>Please log in</h1>\r\n  <button (click)=\"closeModal('not-logged-in-modal');\">Ok</button>\r\n</jw-modal>\r\n\r\n<jw-modal id=\"no-access-modal\">\r\n  <h1>No Access</h1>\r\n  <button (click)=\"closeModal('no-access-modal');\">Ok</button>\r\n</jw-modal>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular5-social-login */ "./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular5_social_login__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(modalService, http, socialAuthService) {
        this.modalService = modalService;
        this.http = http;
        this.socialAuthService = socialAuthService;
        this.displayedColumns = ['Exercise', 'Description', 'Set', 'RepsTime'];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.url = process.env.NODE_ENV !== "development" ? "https://itweb-m2-api.herokuapp.com/programs" : 'http://localhost:3000/programs';
        this.url = 'http://localhost:3000/programs';
        this.http.get(this.url).subscribe(function (data) {
            console.log(data);
            _this.programs = data;
        });
        this.owner = {
            id: "",
            Name: "",
            token: ""
        };
    };
    HomeComponent.prototype.openModal = function (obj) {
        this.currentProgramId = obj.programId;
        this.modalService.open(obj.id);
    };
    HomeComponent.prototype.openModalBasic = function (id) {
        this.modalService.open(id);
    };
    HomeComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
        this.resetModalTexts();
    };
    HomeComponent.prototype.addExerciseModal = function (id) {
        var _this = this;
        var exercise;
        exercise = { id: "", Exercise: this.modalExerciseText, Description: this.modalDescriptionText, Set: this.modalSetText, RepsTime: this.modalRepsTimeText, Logged: false };
        var obj = { programId: this.currentProgramId, exercise: exercise };
        this.http.post(this.url + '/AddExercise', obj, this.generateHttpHeaders()).subscribe(function (data) {
            for (var i = 0; i < _this.programs.length; i++) {
                var program = _this.programs[i];
                if (program._id == _this.currentProgramId) {
                    _this.programs[i] = data;
                }
            }
            console.log(data);
        }, function (error) {
            console.log('Error: ', error);
            _this.openModalBasic('no-access-modal');
        });
        this.modalService.close(id);
        this.resetModalTexts();
    };
    HomeComponent.prototype.toggleClicked = function (programId, exerciseId, i, j) {
        var Logged = !this.programs[i].Exercises[j].Logged;
        var obj = { Logged: Logged, programId: programId, exerciseId: exerciseId };
        this.http.patch(this.url + '/UpdateLogged', obj, this.generateHttpHeaders()).subscribe(function (data) {
            console.log("Patched Logged info", data);
        }, function (error) {
            console.log('Error: ', error);
            // this.openModalBasic('no-access-modal')
            // this.programs[i].Exercises[j].Logged = !this.programs[i].Exercises[j].Logged
        });
    };
    HomeComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular5_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular5_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            _this.owner = {
                id: userData.id,
                Name: userData.name,
                token: userData.idToken
            };
        });
    };
    HomeComponent.prototype.generateHttpHeaders = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.owner.token
            })
        };
    };
    HomeComponent.prototype.resetModalTexts = function () {
        this.modalExerciseText = "";
        this.modalDescriptionText = "";
        this.modalSetText = "";
        this.modalRepsTimeText = "";
    };
    HomeComponent.prototype.removeProgram = function ($event, programId) {
        var _this = this;
        console.log("Trying to remove program: ", programId);
        this.http.delete(this.url + '/' + programId, this.generateHttpHeaders()).subscribe(function (data) {
            console.log("Removed program: ", data);
            _this.programs = _this.programs.filter(function (program) { return program._id !== programId; });
        }, function (error) {
            console.log('Error: ', error);
            _this.openModalBasic('no-access-modal');
        });
    };
    HomeComponent.prototype.createProgram = function () {
        var _this = this;
        if (!this.checkIfLoggedIn())
            return;
        var obj = { Owner: this.owner, Exercises: [] };
        this.http.post(this.url + '/', obj, this.generateHttpHeaders()).subscribe(function (data) {
            console.log(data);
            _this.programs.push(data);
        }, function (error) {
            console.log('Error: ', error);
            _this.openModalBasic('no-access-modal');
        });
    };
    HomeComponent.prototype.removeExercise = function ($event, programId, exerciseId) {
        var _this = this;
        console.log("Trying to remove exercise with programId: ", programId, " And ExerciseID: ", exerciseId);
        var obj = { programId: programId, exerciseId: exerciseId };
        this.http.post(this.url + '/RemoveExercise', obj, this.generateHttpHeaders()).subscribe(function (data) {
            console.log(data);
            _this.removeExerciseFromModel(programId, exerciseId);
        }, function (error) {
            console.log('Error: ', error);
            _this.openModalBasic('no-access-modal');
        });
    };
    HomeComponent.prototype.removeExerciseFromModel = function (programId, exerciseId) {
        for (var i = 0; i < this.programs.length; i++) {
            var program = this.programs[i];
            if (program._id == programId) {
                for (var j = 0; j < program.Exercises.length; j++) {
                    if (program.Exercises[j].id == exerciseId) {
                        this.programs[i].Exercises.splice(j, 1);
                    }
                }
            }
        }
    };
    HomeComponent.prototype.checkIfLoggedIn = function () {
        if (this.owner == null) {
            this.openModalBasic("not-logged-in-modal");
            return false;
        }
        return true;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], angular5_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Sources\ITWEB-M2-Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map