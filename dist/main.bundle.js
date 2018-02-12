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

module.exports = "<main>\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.less")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_Router__ = __webpack_require__("../../../Router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_resume_resume_component__ = __webpack_require__("../../../../../src/app/components/dashboard/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_projects_projects_component__ = __webpack_require__("../../../../../src/app/components/dashboard/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/dashboard/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_homepage_login_page_login_page_component__ = __webpack_require__("../../../../../src/app/components/homepage/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_homepage_guest_enter_guest_enter_component__ = __webpack_require__("../../../../../src/app/components/homepage/guest-enter/guest-enter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_homepage_homepage_navigation_homepage_navigation_component__ = __webpack_require__("../../../../../src/app/components/homepage/homepage-navigation/homepage-navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_homepage_login_page_signup_page_signup_page_component__ = __webpack_require__("../../../../../src/app/components/homepage/login-page/signup-page/signup-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_homepage_login_page_login_form_login_form_component__ = __webpack_require__("../../../../../src/app/components/homepage/login-page/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_homepage_welcomepage_welcomepage_component__ = __webpack_require__("../../../../../src/app/components/homepage/welcomepage/welcomepage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_homepage_homepage_component__["a" /* HomepageComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_15__components_homepage_welcomepage_welcomepage_component__["a" /* WelcomepageComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_homepage_login_page_login_page_component__["a" /* LoginPageComponent */], children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__components_homepage_login_page_login_form_login_form_component__["a" /* LoginFormComponent */] },
                    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_13__components_homepage_login_page_signup_page_signup_page_component__["a" /* SignupPageComponent */] }
                ] },
            { path: 'guestenter', component: __WEBPACK_IMPORTED_MODULE_11__components_homepage_guest_enter_guest_enter_component__["a" /* GuestEnterComponent */] }
        ] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: 'user', component: __WEBPACK_IMPORTED_MODULE_5__components_dashboard_resume_resume_component__["a" /* ResumeComponent */] },
            { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_6__components_dashboard_projects_projects_component__["a" /* ProjectsComponent */] }
        ] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_dashboard_resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_dashboard_projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_dashboard_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_homepage_login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_homepage_guest_enter_guest_enter_component__["a" /* GuestEnterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_homepage_homepage_navigation_homepage_navigation_component__["a" /* HomepageNavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_homepage_login_page_signup_page_signup_page_component__["a" /* SignupPageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_homepage_login_page_login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_homepage_welcomepage_welcomepage_component__["a" /* WelcomepageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_Router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logout-btn\">\n  <button type=\"button\" name=\"button\" class=\"btn btn-success\"><img src=\"http://flaticons.net/gd/makefg.php?i=icons/Mobile%20Application/Logout.png&r=255&g=255&b=255\"/> <span routerLink='/'> Logout</span></button>\n</div>\n\n <app-navigation></app-navigation>\n <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logout-btn {\n  position: fixed;\n  right: 0;\n  top: 5%;\n  z-index: 2;\n}\n.logout-btn button {\n  border-radius: 0;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  background-color: #5bc995;\n  border: 0;\n}\n.logout-btn button:hover {\n  padding-right: 40px;\n}\n.logout-btn img {\n  height: 25px;\n  padding-right: 20px;\n}\n@media screen and (max-width: 400px) {\n  .logout-btn {\n    top: 0;\n    right: -10px;\n  }\n  .logout-btn span {\n    display: none;\n  }\n  .logout-btn:hover span {\n    display: inline;\n  }\n  .logout-btn:focus span {\n    display: none;\n    text-decoration: underline;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"menu\" tabindex=\"0\">\n\t<div class=\"smartphone-menu-trigger\"></div>\n  <header class=\"avatar\">\n\t\t<img src=\"https://lh3.googleusercontent.com/-fsPXAtkuEmQ/VSOXf3MdcCI/AAAAAAAAAv4/4DQ3SRDqnRY/w2009-h2012/20141219_113950.jpg\" />\n    <h2>Iliyaz Syed</h2>\n  </header>\n\t<ul>\n    <li tabindex=\"0\" class=\"icon-dashboard\"  routerLinkActive=\"active\" routerLink = \"../dashboard/user\"><span>Resume</span></li>\n    <li tabindex=\"0\" class=\"icon-customers\" routerLinkActive=\"active\" routerLink = \"../dashboard/projects\"><span>Projects</span></li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/navigation/navigation.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu {\n  background: #5bc995;\n  height: 100vh;\n  width: 240px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  outline: none;\n}\n.menu .avatar {\n  background: rgba(0, 0, 0, 0.1);\n  padding: 2em 0.5em;\n  text-align: center;\n}\n.menu .avatar img {\n  width: 100px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 4px solid #5bc995;\n  -webkit-box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);\n          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);\n}\n.menu .avatar h2 {\n  font-weight: normal;\n  margin-bottom: 0;\n}\n.menu ul {\n  list-style: none;\n  padding: 0.5em 0;\n  margin: 0;\n}\n.menu ul li {\n  padding: 1em 1em 1em 3em;\n  font-size: 0.95em;\n  font-weight: regular;\n  background-repeat: no-repeat;\n  background-position: left 15px center;\n  background-size: auto 20px;\n  -webkit-transition: all 0.15s linear;\n  transition: all 0.15s linear;\n  cursor: pointer;\n}\n.menu ul li.icon-dashboard {\n  background-image: url('http://flaticons.net/icons/Education/Graduate-01.png');\n}\n.menu ul li.icon-customers {\n  background-image: url('http://adlertalent.com/wp-content/uploads/2016/04/icon-professional-training-white.png');\n}\n.menu ul li:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.menu ul li:focus {\n  outline: none;\n}\n@media screen and (max-width: 900px) and (min-width: 400px) {\n  .menu {\n    width: 90px;\n  }\n  .menu .avatar {\n    padding: 0.5em;\n    position: relative;\n  }\n  .menu .avatar img {\n    width: 60px;\n  }\n  .menu .avatar h2 {\n    opacity: 0;\n    position: absolute;\n    top: 50%;\n    left: 100px;\n    margin: 0;\n    min-width: 200px;\n    border-radius: 4px;\n    background: rgba(0, 0, 0, 0.4);\n    -webkit-transform: translate3d(-20px, -50%, 0);\n            transform: translate3d(-20px, -50%, 0);\n    -webkit-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out;\n  }\n  .menu .avatar:hover h2 {\n    opacity: 1;\n    -webkit-transform: translate3d(0px, -50%, 0);\n            transform: translate3d(0px, -50%, 0);\n  }\n  .menu ul li {\n    height: 60px;\n    background-position: center center;\n    background-size: 30px auto;\n    position: relative;\n  }\n  .menu ul li span {\n    opacity: 0;\n    position: absolute;\n    background: rgba(0, 0, 0, 0.5);\n    padding: 0.2em 0.5em;\n    border-radius: 4px;\n    top: 50%;\n    left: 80px;\n    -webkit-transform: translate3d(-15px, -50%, 0);\n            transform: translate3d(-15px, -50%, 0);\n    -webkit-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out;\n  }\n  .menu ul li span:before {\n    content: '';\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: 50%;\n    left: -5px;\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-right: 5px solid rgba(0, 0, 0, 0.5);\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n  }\n  .menu ul li:hover span {\n    opacity: 1;\n    -webkit-transform: translate3d(0px, -50%, 0);\n            transform: translate3d(0px, -50%, 0);\n  }\n}\n@media screen and (max-width: 400px) {\n  .menu {\n    width: 230px;\n    -webkit-box-shadow: 0 0 0 100em rgba(0, 0, 0, 0);\n            box-shadow: 0 0 0 100em rgba(0, 0, 0, 0);\n    -webkit-transform: translate3d(-230px, 0, 0);\n            transform: translate3d(-230px, 0, 0);\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n  }\n  .menu .smartphone-menu-trigger {\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    left: 100%;\n    background: #5bc995;\n  }\n  .menu .smartphone-menu-trigger:before,\n  .menu .smartphone-menu-trigger:after {\n    content: '';\n    width: 50%;\n    height: 2px;\n    background: #fff;\n    border-radius: 10px;\n    position: absolute;\n    top: 45%;\n    left: 50%;\n    -webkit-transform: translate3d(-50%, -50%, 0);\n            transform: translate3d(-50%, -50%, 0);\n  }\n  .menu .smartphone-menu-trigger:after {\n    top: 55%;\n    -webkit-transform: translate3d(-50%, -50%, 0);\n            transform: translate3d(-50%, -50%, 0);\n  }\n  .menu ul li {\n    padding: 1em 1em 1em 3em;\n    font-size: 1.2em;\n  }\n  .menu:focus {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-box-shadow: 0 0 0 100em rgba(0, 0, 0, 0.6);\n            box-shadow: 0 0 0 100em rgba(0, 0, 0, 0.6);\n  }\n  .menu:focus .smartphone-menu-trigger {\n    pointer-events: none;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/components/dashboard/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/navigation/navigation.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "  <main>\n    <div class=\"main-content\">\n      <h1 style=\"text-align:center;color:#5bc995;\">Projects</h1>\n      <h1></h1>\n    </div>\n  </main>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/projects/projects.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
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

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/components/dashboard/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/projects/projects.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container\">\n    <h1 style=\"text-align:center;color:#5bc995;\">Resume</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/resume/resume.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
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

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resume',
            template: __webpack_require__("../../../../../src/app/components/dashboard/resume/resume.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/resume/resume.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/homepage/guest-enter/guest-enter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"main-content guest\" style=\"max-width:80%;\">\n<button type=\"button\" name=\"button\" class=\"btn btn-outline-success form-control enter-btn btn-lg\" routerLink='/dashboard/user'>Enter As Guest</button>\n </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/homepage/guest-enter/guest-enter.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".guest button:hover {\n  background-color: #5bc995;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/homepage/guest-enter/guest-enter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestEnterComponent; });
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

var GuestEnterComponent = /** @class */ (function () {
    function GuestEnterComponent() {
    }
    GuestEnterComponent.prototype.ngOnInit = function () {
    };
    GuestEnterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-guest-enter',
            template: __webpack_require__("../../../../../src/app/components/homepage/guest-enter/guest-enter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/homepage/guest-enter/guest-enter.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], GuestEnterComponent);
    return GuestEnterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage-navigation/homepage-navigation.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"menu\" tabindex=\"0\">\n\t<div class=\"smartphone-menu-trigger\"></div>\n\t<ul>\n\t\t<li tabindex=\"0\"\n\t\t\t class=\"icon-welcome\"\n\t\t\t routerLinkActive=\"active\"\n\t\t\t\trouterLink = \"\"\n\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\" ><span>Welcome!</span></li>\n    <li tabindex=\"0\"\n\t\t    class=\"icon-dashboard\"\n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\trouterLink = \"/login\"><span>Login</span></li>\n    <li tabindex=\"0\"\n\t\t    class=\"icon-customers\"\n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t routerLink = \"/guestenter\" ><span>Enter As Guest</span></li>\n\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage-navigation/homepage-navigation.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu {\n  background: #5bc995;\n  height: 100vh;\n  width: 240px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  outline: none;\n}\n.menu ul {\n  list-style: none;\n  padding: 0.5em 0;\n  margin: 0;\n  margin-top: 110%;\n}\n.menu ul li {\n  padding: 1em 1em 1em 3em;\n  font-size: 0.95em;\n  font-weight: regular;\n  background-repeat: no-repeat;\n  background-position: left 15px center;\n  background-size: auto 20px;\n  -webkit-transition: all 0.15s linear;\n  transition: all 0.15s linear;\n  cursor: pointer;\n}\n.menu ul li.icon-dashboard {\n  background-image: url('http://flaticons.net/icons/Education/Graduate-01.png');\n}\n.menu ul li.icon-customers {\n  background-image: url('http://adlertalent.com/wp-content/uploads/2016/04/icon-professional-training-white.png');\n}\n.menu ul li.icon-welcome {\n  background-image: url('http://hfhkp.org/wp-content/uploads/2014/12/habitat-icon-white.png');\n}\n.menu ul li:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.menu ul li:focus {\n  outline: none;\n}\n@media screen and (max-width: 900px) and (min-width: 400px) {\n  .menu {\n    width: 90px;\n  }\n  .menu ul {\n    margin-top: 190%;\n  }\n  .menu ul li {\n    height: 60px;\n    background-position: center center;\n    background-size: 30px auto;\n    position: relative;\n  }\n  .menu ul li span {\n    opacity: 0;\n    position: absolute;\n    background: rgba(0, 0, 0, 0.5);\n    padding: 0.2em 0.5em;\n    border-radius: 4px;\n    top: 50%;\n    left: 80px;\n    -webkit-transform: translate3d(-15px, -50%, 0);\n            transform: translate3d(-15px, -50%, 0);\n    -webkit-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out;\n  }\n  .menu ul li span:before {\n    content: '';\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: 50%;\n    left: -5px;\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-right: 5px solid rgba(0, 0, 0, 0.5);\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n  }\n  .menu ul li:hover span {\n    opacity: 1;\n    -webkit-transform: translate3d(0px, -50%, 0);\n            transform: translate3d(0px, -50%, 0);\n  }\n}\n@media screen and (max-width: 400px) {\n  .main-content {\n    margin-top: 10%;\n    width: 80%;\n  }\n  .menu {\n    width: 230px;\n    -webkit-box-shadow: 0 0 0 100em rgba(0, 0, 0, 0);\n            box-shadow: 0 0 0 100em rgba(0, 0, 0, 0);\n    -webkit-transform: translate3d(-230px, 0, 0);\n            transform: translate3d(-230px, 0, 0);\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n  }\n  .menu .smartphone-menu-trigger {\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    left: 100%;\n    background: #5bc995;\n  }\n  .menu .smartphone-menu-trigger:before,\n  .menu .smartphone-menu-trigger:after {\n    content: '';\n    width: 50%;\n    height: 2px;\n    background: #fff;\n    border-radius: 10px;\n    position: absolute;\n    top: 45%;\n    left: 50%;\n    -webkit-transform: translate3d(-50%, -50%, 0);\n            transform: translate3d(-50%, -50%, 0);\n  }\n  .menu .smartphone-menu-trigger:after {\n    top: 55%;\n    -webkit-transform: translate3d(-50%, -50%, 0);\n            transform: translate3d(-50%, -50%, 0);\n  }\n  .menu ul {\n    margin-top: 90%;\n  }\n  .menu ul li {\n    padding: 1em 1em 1em 3em;\n    font-size: 1.2em;\n  }\n  .menu:focus {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-box-shadow: 0 0 0 100em rgba(0, 0, 0, 0.6);\n            box-shadow: 0 0 0 100em rgba(0, 0, 0, 0.6);\n  }\n  .menu:focus .smartphone-menu-trigger {\n    pointer-events: none;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage-navigation/homepage-navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageNavigationComponent; });
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

var HomepageNavigationComponent = /** @class */ (function () {
    function HomepageNavigationComponent() {
    }
    HomepageNavigationComponent.prototype.ngOnInit = function () {
    };
    HomepageNavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage-navigation',
            template: __webpack_require__("../../../../../src/app/components/homepage/homepage-navigation/homepage-navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/homepage/homepage-navigation/homepage-navigation.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageNavigationComponent);
    return HomepageNavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-homepage-navigation></app-homepage-navigation>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
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

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/homepage/homepage.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/homepage/login-page/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\t<div class=\"main-content\">\n   <form (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">User Name</label>\n    <input type=\"text\"\n           class=\"form-control\"\n           placeholder=\"Enter Name\"\n           ngModel\n           name=\"userName\"\n           required\n           #Uname='ngModel'>\n   <div *ngIf='!Uname.valid && Uname.touched' class=\"errorPopUp\">\n      <span>Please enter a valid Username</span>\n   </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\"\n           class=\"form-control\"\n           placeholder=\"Password\"\n           ngModel\n           name=\"password\"\n           required\n           #Upass=\"ngModel\">\n  <div *ngIf='!Upass.valid && Upass.touched' class=\"errorPopUp\">\n    <span>Please enter a valid Password</span>\n  </div>\n  </div>\n  <button type=\"submit\"\n          class=\"btn btn-success \"\n          [disabled]='!form.valid'\n\t\t\t\t\t >\n\t\tSubmit\n\t</button>\n</form>\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/homepage/login-page/login-form/login-form.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\ninput.ng-valid.ng-touched {\n  border: 1px solid green;\n}\nlabel {\n  color: #067502;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/homepage/login-page/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent() {
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.onSubmit = function () {
        console.log(this.signUpForm);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], LoginFormComponent.prototype, "signUpForm", void 0);
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/components/homepage/login-page/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/homepage/login-page/login-form/login-form.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/homepage/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container myContainer\">\n<ul class=\"nav nav-tabs MyTabs\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLink = '/login'\n       routerLinkActive = 'active'\n       [routerLinkActiveOptions] ={exact:true}\n    ><span>Login </span><img src=\"http://www.ecovadis.com/wp-content/themes/ecovadis/images/Icon-user.png\"/></a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLink='/login/signup'\n       routerLinkActive='active'><span>sign up </span><img src=\"http://trans.mfgtrade.com/images/large-icon-user.png\"/></a>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/homepage/login-page/login-page.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".myContainer {\n  background-color: pink;\n  position: relative;\n  height: 70vh;\n  width: 50vw;\n  top: 15vh;\n  padding: 0;\n  background-color: #5bc995;\n  border-radius: 0 0px 10px 10px;\n}\n.myContainer .MyTabs {\n  background-color: #5bc995;\n  border: 0;\n  background-color: #b5ffe0;\n}\n.myContainer .MyTabs li {\n  background-color: #5bc995;\n}\n.myContainer .MyTabs li .active {\n  border: 0;\n  -webkit-box-shadow: 0px 0px 0px;\n          box-shadow: 0px 0px 0px;\n  background-color: #5bc995;\n}\n.myContainer .MyTabs li a {\n  color: white;\n  padding: 1vw 4vw;\n  cursor: pointer;\n  border: 0;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.myContainer .MyTabs li a img {\n  width: 20px;\n}\n@media screen and (max-width: 900px) and (min-width: 400px) {\n  .myContainer {\n    width: 75vw;\n  }\n}\n@media screen and (max-width: 400px) {\n  .myContainer {\n    width: 90vw;\n  }\n  .MyTabs li a {\n    padding: 1vw 4vw;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/homepage/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
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

var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent() {
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-page',
            template: __webpack_require__("../../../../../src/app/components/homepage/login-page/login-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/homepage/login-page/login-page.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/homepage/login-page/signup-page/signup-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"main-content\">\n   <form (ngSubmit)=\"onSubmit(newUserform)\" #newUserform=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">User Name</label>\n    <input type=\"text\"\n           class=\"form-control\"\n           placeholder=\"Enter Name\"\n           ngModel\n           name=\"NewName\"\n           required\n           #NUname='ngModel'>\n   <div *ngIf='!NUname.valid && NUname.touched' class=\"errorPopUp\">\n      <span>Please enter a valid Username</span>\n   </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email</label>\n    <input type=\"email\"\n           class=\"form-control\"\n           placeholder=\"Enter Email\"\n           ngModel\n           email\n           name=\"NewEmail\"\n           required\n           #NUemail='ngModel'>\n   <div *ngIf='!NUemail.valid && NUemail.touched' class=\"errorPopUp\">\n      <span>Please enter a valid Email</span>\n   </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\"\n           class=\"form-control\"\n           placeholder=\"NewPassword\"\n           ngModel\n           name=\"password\"\n           required\n           #NUpass=\"ngModel\">\n  <div *ngIf='!NUpass.valid && NUpass.touched' class=\"errorPopUp\">\n    <span>Please enter a valid Password</span>\n  </div>\n  </div>\n  <button type=\"submit\"\n          class=\"btn btn-success\"\n          [disabled]='!newUserform.valid'\n\t\t\t\t\t >\n\t\tSubmit\n\t</button>\n</form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/homepage/login-page/signup-page/signup-page.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\ninput.ng-valid.ng-touched {\n  border: 1px solid green;\n}\nlabel {\n  color: #067502;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/homepage/login-page/signup-page/signup-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupPageComponent = /** @class */ (function () {
    function SignupPageComponent() {
    }
    SignupPageComponent.prototype.ngOnInit = function () {
    };
    SignupPageComponent.prototype.onSubmit = function () {
        console.log(this.signUpForm);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('newUserform'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], SignupPageComponent.prototype, "signUpForm", void 0);
    SignupPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup-page',
            template: __webpack_require__("../../../../../src/app/components/homepage/login-page/signup-page/signup-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/homepage/login-page/signup-page/signup-page.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupPageComponent);
    return SignupPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/homepage/welcomepage/welcomepage.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <h3 class=\"text-center\" style=\"position:fixed; width:30vw; top:30vh;left:35vw; color:#5bc995;\">Welcome to my Angular app.<br>Please <span style=\"color:#067502; cursor:pointer\" routerLink='/login'>Login</span> or visit as a <span style=\"color:#067502; cursor:pointer\" routerLink='/guestenter'>Guest</span></h3>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/homepage/welcomepage/welcomepage.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/homepage/welcomepage/welcomepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomepageComponent; });
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

var WelcomepageComponent = /** @class */ (function () {
    function WelcomepageComponent() {
    }
    WelcomepageComponent.prototype.ngOnInit = function () {
    };
    WelcomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcomepage',
            template: __webpack_require__("../../../../../src/app/components/homepage/welcomepage/welcomepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/homepage/welcomepage/welcomepage.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomepageComponent);
    return WelcomepageComponent;
}());



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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
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