(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab7-tab7-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab7/tab7.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab7/tab7.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [routerLink]=\"['/tabs/tab1']\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Musica:</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    \n    <ion-row>\n      <ion-col>\n        <ion-card>\n            <div class=\"video-cont\">\n             <h1>Clasica</h1>\n             <p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/imOd3hwgnrE\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></p>\n            </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  \n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n            <div class=\"video-cont\">\n             <h1>Salsa</h1>\n             <p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/RUV55lGPGaY\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></p>\n            </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  \n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n            <div class=\"video-cont\">\n             <h1>Vallenato</h1>\n             <p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/yry3rgGlRUw\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></p>\n            </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  \n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n            <div class=\"video-cont\">\n             <h1>Cumbia</h1>\n             <p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/z5svoighsdk\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></p>\n            </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n            <div class=\"video-cont\">\n             <h1>Rock Latino</h1>\n             <p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/5KlN9ujUw0s\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></p>\n            </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n            <div class=\"video-cont\">\n             <h1>Rock N' Roll</h1>\n             <p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/v2AC41dglnM\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></p>\n            </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row>\n      <ion-col>\n        <ion-card>\n            <div class=\"video-cont\">\n             <h1>Folklore</h1>\n             <p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/eAtP47p-jeA\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></p>\n            </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n            <div class=\"video-cont\">\n             <h1>Andina Contemporanea</h1>\n             <p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/OhXaIT5TOGs\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></p>\n            </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n \n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n            <div class=\"video-cont\">\n             <h1>Alternativa</h1>\n             <p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/QtXby3twMmI?start=30\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></p>\n            </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n \n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n            <div class=\"video-cont\">\n             <h1>POP</h1>\n             <p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/1ekZEVeXwek\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></p>\n            </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab7/tab7-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab7/tab7-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab7PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab7PageRoutingModule", function() { return Tab7PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab7_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab7.page */ "./src/app/tab7/tab7.page.ts");




const routes = [
    {
        path: '',
        component: _tab7_page__WEBPACK_IMPORTED_MODULE_3__["Tab7Page"]
    }
];
let Tab7PageRoutingModule = class Tab7PageRoutingModule {
};
Tab7PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab7PageRoutingModule);



/***/ }),

/***/ "./src/app/tab7/tab7.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab7/tab7.module.ts ***!
  \*************************************/
/*! exports provided: Tab7PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab7PageModule", function() { return Tab7PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tab7_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab7-routing.module */ "./src/app/tab7/tab7-routing.module.ts");
/* harmony import */ var _tab7_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab7.page */ "./src/app/tab7/tab7.page.ts");







let Tab7PageModule = class Tab7PageModule {
};
Tab7PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab7_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab7PageRoutingModule"]
        ],
        declarations: [_tab7_page__WEBPACK_IMPORTED_MODULE_6__["Tab7Page"]]
    })
], Tab7PageModule);



/***/ }),

/***/ "./src/app/tab7/tab7.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab7/tab7.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjcvdGFiNy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab7/tab7.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab7/tab7.page.ts ***!
  \***********************************/
/*! exports provided: Tab7Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab7Page", function() { return Tab7Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/youtube-video-player/ngx */ "./node_modules/@ionic-native/youtube-video-player/__ivy_ngcc__/ngx/index.js");



let Tab7Page = class Tab7Page {
    constructor(youtube) {
        this.youtube = youtube;
        this.music = [
            {
                title: 'Musica Clasica',
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6wLti06X_Bc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            },
            {
                title: 'Musica',
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/imOd3hwgnrE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ];
    }
    ngOnInit() {
    }
};
Tab7Page.ctorParameters = () => [
    { type: _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_2__["YoutubeVideoPlayer"] }
];
Tab7Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab7',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab7.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab7/tab7.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab7.page.scss */ "./src/app/tab7/tab7.page.scss")).default]
    })
], Tab7Page);



/***/ })

}]);
//# sourceMappingURL=tab7-tab7-module-es2015.js.map