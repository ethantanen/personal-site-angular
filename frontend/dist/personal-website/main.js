"use strict";
(self["webpackChunkpersonal_website"] = self["webpackChunkpersonal_website"] || []).push([["main"],{

/***/ 1463:
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutMeComponent": () => (/* binding */ AboutMeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _circles_circles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../circles/circles.component */ 3520);



function AboutMeComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const stack_r1 = ctx.$implicit;
    const idx_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](idx_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stack_r1.frontend || "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stack_r1.backend || "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stack_r1.framework || "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stack_r1.host || "X");
} }
class AboutMeComponent {
    constructor() {
        this.stacks = [
            { framework: 'Angular.js', backend: 'Node.js', host: 'Heroku' },
            { frontend: 'React.js', backend: 'Node.js', host: 'EC2' },
            { frontend: 'EJS', backend: 'Node.js', host: 'Heroku' },
            { framework: 'Django', host: 'Heroku' },
        ];
    }
    ngOnInit() { }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 38, vars: 1, consts: [[1, "container", "h-100"], [1, "row", "h-100", 2, "margin-top", "10%"], [1, "col-md-10", "offset-md-1"], [1, "card-deck"], [1, "card"], [1, "card-body"], [1, "card-title", "text-center"], [2, "font-size", "2.5em"], [1, "text-center"], ["src", "assets/me.jpg", 1, "img-thumbnail", "rounded", 2, "width", "50%"], [1, "table", "table-responsive", "text-center", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-circles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " About Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Hello, I'm Ethan Tanen! If I'm not coding up something saucy, I'm either making sweet music for a sad world, navigating perilous whitewater or cooling with DC's elite. This is my website! You can read my resume, checkout some of my software projects and get in touch via the contact page. Enjoy! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4)(16, "div", 5)(17, "div", 6)(18, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " About the Site ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5)(21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " The website has been an ongoing project that has undergone a series of stack changes as I learn new technologies. Below is a list of the various stacks. The list is organized with the most recent stacks on top. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "table", 10)(24, "thead")(25, "tr")(26, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Frontend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Host");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, AboutMeComponent_tr_37_Template, 11, 5, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stacks);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _circles_circles_component__WEBPACK_IMPORTED_MODULE_0__.CirclesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC1tZS5jb21wb25lbnQuc2NzcyJ9 */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-me/about-me.component */ 1463);
/* harmony import */ var _email_me_email_me_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-me/email-me.component */ 8254);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume/resume.component */ 8952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    {
        path: 'about-me', component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_0__.AboutMeComponent, children: [
            { path: '**', redirectTo: '/about-me', }
        ]
    },
    {
        path: 'email-me', component: _email_me_email_me_component__WEBPACK_IMPORTED_MODULE_1__.EmailMeComponent, children: [
            { path: '**', redirectTo: '/email-me', }
        ]
    },
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, children: [
            { path: '**', redirectTo: '/home', }
        ]
    },
    {
        path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__.ResumeComponent, children: [
            { path: '**', redirectTo: '/resume', }
        ]
    },
    { path: '**', redirectTo: 'home' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _google_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-analytics.service */ 5252);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message/message.component */ 2478);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav.component */ 5375);





class AppComponent {
    constructor(googleAnalytics) {
        this.title = 'personal-website';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_google_analytics_service__WEBPACK_IMPORTED_MODULE_0__.GoogleAnalyticsService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-nav")(1, "app-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _message_message_component__WEBPACK_IMPORTED_MODULE_1__.MessageComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-me/about-me.component */ 1463);
/* harmony import */ var _circle_circle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./circle/circle.component */ 5303);
/* harmony import */ var _circles_circles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./circles/circles.component */ 3520);
/* harmony import */ var _email_me_email_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-me/email-me.component */ 8254);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message/message.component */ 2478);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ 5375);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resume/resume.component */ 8952);
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./email.service */ 7481);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message.service */ 4206);
/* harmony import */ var _google_analytics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./google-analytics.service */ 5252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        _email_service__WEBPACK_IMPORTED_MODULE_10__.EmailService,
        _message_service__WEBPACK_IMPORTED_MODULE_11__.MessageService,
        _google_analytics_service__WEBPACK_IMPORTED_MODULE_12__.GoogleAnalyticsService,
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__.AboutMeComponent,
        _circle_circle_component__WEBPACK_IMPORTED_MODULE_3__.CircleComponent,
        _circles_circles_component__WEBPACK_IMPORTED_MODULE_4__.CirclesComponent,
        _email_me_email_me_component__WEBPACK_IMPORTED_MODULE_5__.EmailMeComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent,
        _message_message_component__WEBPACK_IMPORTED_MODULE_7__.MessageComponent,
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__.NavComponent,
        _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__.ResumeComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule] }); })();


/***/ }),

/***/ 5303:
/*!********************************************!*\
  !*** ./src/app/circle/circle.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircleComponent": () => (/* binding */ CircleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const MAX_RADIUS = 150;
const MAX_COLOR = 16777215;
class CircleComponent {
    constructor() {
        const color = Math.floor(Math.random() * MAX_COLOR).toString(16);
        const radius = Math.random() * MAX_RADIUS;
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        this.style = {
            width: `${radius}px`,
            height: `${radius}px`,
            'background-color': `#${color}`,
            'border-radius': '50%',
            left: `${x}px`,
            top: `${y}px`,
            position: 'absolute',
        };
    }
}
CircleComponent.ɵfac = function CircleComponent_Factory(t) { return new (t || CircleComponent)(); };
CircleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CircleComponent, selectors: [["app-circle"]], decls: 1, vars: 1, consts: [[3, "ngStyle"]], template: function CircleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaXJjbGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3520:
/*!**********************************************!*\
  !*** ./src/app/circles/circles.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CirclesComponent": () => (/* binding */ CirclesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _circle_circle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../circle/circle.component */ 5303);



function CirclesComponent_app_circle_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-circle", 1);
} }
class CirclesComponent {
    constructor() {
        this.circleCount = Array(15);
    }
    ngOnInit() { }
}
CirclesComponent.ɵfac = function CirclesComponent_Factory(t) { return new (t || CirclesComponent)(); };
CirclesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CirclesComponent, selectors: [["app-circles"]], decls: 1, vars: 1, consts: [["style", "position: fixed; left:0; top: 0; z-index: -1 !important;", 4, "ngFor", "ngForOf"], [2, "position", "fixed", "left", "0", "top", "0", "z-index", "-1 !important"]], template: function CirclesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CirclesComponent_app_circle_0_Template, 1, 0, "app-circle", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.circleCount);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _circle_circle_component__WEBPACK_IMPORTED_MODULE_0__.CircleComponent], styles: ["div[_ngcontent-%COMP%] {\n  transform-origin: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJjaXJjbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ 8254:
/*!************************************************!*\
  !*** ./src/app/email-me/email-me.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailMeComponent": () => (/* binding */ EmailMeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../email.service */ 7481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _circles_circles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../circles/circles.component */ 3520);




class EmailMeComponent {
    constructor(emailService) {
        this.emailService = emailService;
        this.email = {
            name: '',
            msg: '',
            email: '',
            honeypot: '',
        };
    }
    sendEmail(form) {
        if (!this.email.honeypot) {
            this.emailService.send(this.email);
        }
        form.reset();
    }
}
EmailMeComponent.ɵfac = function EmailMeComponent_Factory(t) { return new (t || EmailMeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_email_service__WEBPACK_IMPORTED_MODULE_0__.EmailService)); };
EmailMeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EmailMeComponent, selectors: [["app-email-me"]], decls: 42, vars: 7, consts: [[1, "container"], [1, "row"], [1, "col-md-4", "offset-md-4", "mt-3"], [1, "col-sm-9", "offset-sm-1"], [1, "card"], [1, "card-body"], [3, "ngSubmit"], ["heroForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "required", "", "name", "name", "placeholder", "Input your name!", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nameInput", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "email"], ["type", "text", "id", "email", "required", "", "name", "email", "placeholder", "What's your email?", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["emailInput", "ngModel"], ["for", "message"], ["type", "text", "id", "message", "name", "message", "rows", "5", "required", "", "placeholder", "Say wussup!", 1, "form-control", 2, "resize", "none", 3, "ngModel", "ngModelChange"], ["msgInput", "ngModel"], [1, "form-group", "honeypot"], ["for", "honeypot"], ["type", "text", "name", "honeypot", "id", "honeypot", 1, "honeypot"], [1, "row", "h-100"], [1, "col-lg-6", "offset-md-3", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "w-50", 3, "disabled"]], template: function EmailMeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-circles");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Contact Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1)(7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EmailMeComponent_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.sendEmail(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmailMeComponent_Template_input_ngModelChange_15_listener($event) { return ctx.email.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Your name is required dawg! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 8)(20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmailMeComponent_Template_input_ngModelChange_22_listener($event) { return ctx.email.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Valid emails only! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 8)(27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "textarea", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmailMeComponent_Template_textarea_ngModelChange_29_listener($event) { return ctx.email.msg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "What? You got nothing to say???");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 19)(34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Honey!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 0)(38, "div", 22)(39, "div", 23)(40, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Send! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.email.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.email.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.email.msg);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r3.valid || _r3.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _circles_circles_component__WEBPACK_IMPORTED_MODULE_1__.CirclesComponent], styles: [".ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {\n  border-left: 5px solid #42a948;\n  \n}\n\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid #a94442;\n  \n}\n\n.honeypot[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 0;\n  width: 0;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLDhCQUFBO0VBQWdDLFVBQUE7QUFFbEM7O0FBQ0E7RUFDRSw4QkFBQTtFQUFnQyxRQUFBO0FBR2xDOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFFRiIsImZpbGUiOiJlbWFpbC1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy12YWxpZFtyZXF1aXJlZF0sXG4ubmctdmFsaWQucmVxdWlyZWQge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MmE5NDg7IC8qIGdyZWVuICovXG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXG59XG5cbi8vIG1ha2UgdGhlIGVsZW1lbnQgZGlzYXBwZWFyIVxuLmhvbmV5cG90IHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuIl19 */"] });


/***/ }),

/***/ 7481:
/*!**********************************!*\
  !*** ./src/app/email.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailService": () => (/* binding */ EmailService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.service */ 4206);




class EmailService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    send({ name, email, msg }) {
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.EMAIL_URL, {
            name,
            email,
            msg,
        })
            .subscribe(() => this.messageService.add('Email was successfully sent!', 'primary'), () => this.messageService.add('Unable to send email at this time. Please try again in a bit!', 'danger'));
    }
}
EmailService.ɵfac = function EmailService_Factory(t) { return new (t || EmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService)); };
EmailService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EmailService, factory: EmailService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5252:
/*!*********************************************!*\
  !*** ./src/app/google-analytics.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleAnalyticsService": () => (/* binding */ GoogleAnalyticsService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class GoogleAnalyticsService {
    constructor(router) {
        this.router = router;
        /**
        * Subscribe to all router events and manually send
        * page_view events to Google Analytics on NavigationEnd
        */
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
                gtag('event', 'page_view', {
                    page_path: event.urlAfterRedirects,
                    send_to: 'UA-150818848-1'
                });
            }
        });
    }
}
GoogleAnalyticsService.ɵfac = function GoogleAnalyticsService_Factory(t) { return new (t || GoogleAnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router)); };
GoogleAnalyticsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GoogleAnalyticsService, factory: GoogleAnalyticsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _circles_circles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../circles/circles.component */ 3520);


class HomeComponent {
    constructor() { }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 19, vars: 0, consts: [[1, "row", "h-100", 2, "margin-top", "10%"], [1, "col-md-6", "offset-md-3"], [1, "card", "text-center"], [1, "card-body", 2, "margin-top", "10%"], [1, "card-title"], [2, "font-size", "2.5em"], [1, "card-body", 2, "margin-top", "8%"], ["href", "\n             mailTo:\n             ethantanen@yahoo.com"], ["href", "https://github.com/ethantanen"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-circles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Ethan $ Tanen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Developer, Musician, Outdoorsman");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "ethantanen@yahoo.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " GitHub: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "www.github.com/ethantanen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } }, dependencies: [_circles_circles_component__WEBPACK_IMPORTED_MODULE_0__.CirclesComponent], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxNSU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 4206:
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class MessageService {
    constructor() {
        this.messages = [];
    }
    add(msg, type) {
        const id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this.messages.push({ msg, id, type });
        setTimeout(() => {
            this.messages = this.messages.filter((msg) => msg.id !== id);
        }, 6000);
    }
    poll() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
            setInterval(() => observer.next(this.messages), 1000);
        });
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2478:
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageComponent": () => (/* binding */ MessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../message.service */ 4206);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function MessageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2)(3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const msg_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("alert alert-dismissible fade show alert-", msg_r1.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", msg_r1.msg, " ");
} }
class MessageComponent {
    constructor(msgService) {
        this.messages = [];
        msgService.poll().subscribe((msgs) => {
            this.messages = msgs;
        });
    }
    ngOnInit() { }
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService)); };
MessageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["app-message"]], decls: 1, vars: 1, consts: [["role", "alert", 3, "class", 4, "ngFor", "ngForOf"], ["role", "alert"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MessageComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5375:
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function NavComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7)(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", link_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1.name, " ");
} }
class NavComponent {
    constructor() {
        this.links = [
            { path: '/home', name: 'Home' },
            { path: '/about-me', name: 'About' },
            { path: '/resume', name: 'Resume' },
            { path: '/email-me', name: 'Email Me' },
        ];
    }
    ngOnInit() { }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 8, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-expanded", "false", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item", 3, "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "routerLinkActive"], [1, "nav-link", 3, "routerLink"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ethan $ Tanen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavComponent_li_7_Template, 3, 3, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: [".navbar[_ngcontent-%COMP%] {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgY29sb3I6IGJsdWU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 8952:
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeComponent": () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _circles_circles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../circles/circles.component */ 3520);



function ResumeComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const school_r7 = ctx.$implicit;
    const idx_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](idx_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](school_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](school_r7.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](school_r7.gpa);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](school_r7.degree);
} }
function ResumeComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Coming Soon!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const cert_r9 = ctx.$implicit;
    const idx_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](idx_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cert_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cert_r9.date);
} }
function ResumeComponent_div_54_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bullet_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bullet_r14);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function ResumeComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "div", 6)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ResumeComponent_div_54_li_7_Template, 2, 1, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const job_r11 = ctx.$implicit;
    const idx_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, idx_r12 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", job_r11.company, " - ", job_r11.location, " - ", job_r11.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", job_r11.bullets);
} }
function ResumeComponent_li_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r15);
} }
function ResumeComponent_li_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const webDevSkill_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](webDevSkill_r16);
} }
function ResumeComponent_li_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const softwareEngSkill_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](softwareEngSkill_r17);
} }
function ResumeComponent_div_99_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r20);
} }
function ResumeComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43)(1, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ResumeComponent_div_99_li_2_Template, 2, 1, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ele_r18 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 1, ctx_r6.allSkills.sort(), ele_r18 - 5, ele_r18));
} }
const _c1 = function () { return [5, 10, 15, 20, 25, 30]; };
class ResumeComponent {
    constructor() {
        this.schools = [
            {
                name: 'Colorado College',
                date: 'May 2019',
                gpa: '3.6',
                degree: 'Bachelor of the Arts (Computer Science)',
            },
            {
                name: 'Woodrow Wilson Senior High School',
                date: 'May 2015',
                gpa: '3.6',
                degree: 'GED',
            },
        ];
        this.certifications = [
            { name: 'AWS Certified Cloud Practitioner', date: '2019-2021' },
        ];
        this.workExperience = [
            {
                title: 'Full Stack Software Developer',
                company: 'Ventera',
                date: '2019-Present',
                location: 'Reston, VA',
                bullets: [
                    'Develop and support new features for the Patient Assessment portion of the iQIES project',
                    'Diagnose and address issues that arise in the production environment for the iQIES project',
                    ' Assist in onboarding new developers to the iQIES project by introducing them to the technologies and business logic necessary to contribute to the project',
                    'Gain experience developing software in the Amazon Cloud using Ventera’s sandbox environments',
                ],
            },
            {
                title: 'Intern',
                company: 'Ventera',
                date: 'Summer of 2018',
                location: 'Reston, VA',
                bullets: [
                    'Implemented RESTful file sharing API using Node.js',
                    'Practiced AGILE and UCD',
                    'Implemented personal website using the MEEN stack',
                    'Implemented digital concierge that leveraged a series of AWS services including EC2, S3, DynamoDB, Lex, Polly and Lambda',
                ],
            },
            {
                title: 'Groundskeeper',
                company: 'Colorado College',
                date: 'Summer of 2017',
                location: 'Colorado Springs, CO',
                bullets: [
                    'Maintained grounds using sustainable landscaping techniques',
                    'Converted plots to native and xeric plants to reduce Colorado College’s water consumption',
                ],
            },
            {
                title: 'Baker',
                company: "Loback's Bakery",
                date: 'Summer of 2016',
                location: 'Buena Vista, CO',
                bullets: [
                    'Oversaw baking of fresh donuts and bread at 5:00 am daily',
                    'Worked with product sales in the afternoon',
                ],
            },
            {
                title: 'Whitewater Kayak Instructor',
                company: 'Camp Kabeyun',
                date: 'Summers of 2013-2015, 2019',
                location: 'Alton Bay, NH',
                bullets: [
                    'In Camp Responsibilities: Working with boys 7-15 on interpersonal skills, conflict resolution and maintaining emotional and physical wellbeing',
                    'Out of Camp Responsibilities: Guiding boys ages 7-15 down whitewater rivers ranging in difficulty from easy (Class I-II) to difficult (Class III-IV) while teaching essential kayak maneuvers and basic whitewater hydrology',
                ],
            },
            {
                title: 'Floor Manager/Salesmen',
                company: 'Bethesda Pet Shoppe',
                date: 'Sept.-June, 2010-2015',
                bullets: [
                    'Live Animal Care: feeding animals, cleaning enclosures, separating sexes, facilitating customer (predominantly children) interactions with the animals',
                    'Educated customers on the specificities of animal care',
                    'Product sales',
                ],
            },
        ];
        this.skills = {
            languages: ['JavaScript', 'Python', 'Java', 'C', 'SQL', 'Bash'],
            webDevelopment: [
                'HTML',
                'CSS',
                'Node.js',
                'React.js',
                'Angular 2',
                'Redux.js',
            ],
            softwareEngineering: [
                'Agile',
                'Git',
                'Docker',
                'Consul',
                'Jenkins',
                'AWS',
                'Kong',
                'Vault',
                'Google Cloud',
            ],
            other: [
                'Vim',
                'VS Code',
                'Atom',
                'Express.js',
                'Swagger',
                'EC2',
                'SQS',
                'Lambda',
                'Postgres',
                'Polly',
                'Lex',
                'Bootstrap',
            ],
        };
        this.allSkills = Object.keys(this.skills).reduce((acc, ele) => [
            ...acc,
            ...this.skills[ele],
        ], []);
    }
    ngOnInit() { }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 103, vars: 20, consts: [[1, "text-center", "mt-3", "mb-3"], [1, "row"], [1, "col-lg-12"], [1, "card-deck"], [1, "card", "text-center"], [1, "card-body"], [1, "card-title"], [1, "table", "table-responsive", "text-center", "table-hover"], ["scope", "col"], ["scope", "col", 2, "white-space", "nowrap"], [4, "ngFor", "ngForOf"], [1, "table", "table-responsive", "table-hover"], [1, "row", "mt-3"], [1, "card"], [1, "card-title", "text-center"], ["id", "carouselExampleControls", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item", "active", "true", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], [1, "carousel-control-prev-icon"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "next", 1, "carousel-control-next"], [1, "carousel-control-next-icon"], [1, "card-body", "text-center"], [1, "col-lg-4"], [1, "list-group", "list-group-flush"], [1, "list-group-item", 2, "white-space", "nowrap"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-primary", "mt-3"], ["id", "exampleModal", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header", "text-center"], [1, "col-11", "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "col-1", "close"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "col-md-2", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["scope", "row"], ["active", "true", 1, "carousel-item", 3, "ngClass"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "list-group-item"], [1, "col-md-2"], ["class", "list-group-item", "style", "white-space:nowrap;", 4, "ngFor", "ngForOf"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-circles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 7)(12, "thead")(13, "tr")(14, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Grad. Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "GPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Degree");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ResumeComponent_tr_25_Template, 11, 5, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 4)(27, "div", 5)(28, "div", 6)(29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "table", 11)(32, "thead")(33, "tr")(34, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ResumeComponent_tr_43_Template, 9, 3, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 12)(45, "div", 2)(46, "div", 3)(47, "div", 13)(48, "div", 5)(49, "div", 14)(50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 15)(53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, ResumeComponent_div_54_Template, 8, 8, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 13)(60, "div", 22)(61, "div", 6)(62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Technology Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 1)(65, "div", 23)(66, "ul", 24)(67, "li", 25)(68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Soft. Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, ResumeComponent_li_70_Template, 2, 1, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](71, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 23)(73, "ul", 24)(74, "li", 25)(75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, ResumeComponent_li_77_Template, 2, 1, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](78, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 23)(80, "ul", 24)(81, "li", 25)(82, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Soft. Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, ResumeComponent_li_84_Template, 2, 1, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](85, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " More Skills! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 28)(89, "div", 29)(90, "div", 30)(91, "div", 31)(92, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "More Software Skills!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "button", 33)(95, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 35)(98, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, ResumeComponent_div_99_Template, 4, 5, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 37)(101, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.schools);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.certifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.workExperience);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](71, 7, ctx.skills.languages, 0, 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](78, 11, ctx.skills.webDevelopment, 0, 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](85, 15, ctx.skills.softwareEngineering, 0, 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c1));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _circles_circles_component__WEBPACK_IMPORTED_MODULE_0__.CirclesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bWUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    EMAIL_URL: 'https://www.ethantanen.com/email',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map