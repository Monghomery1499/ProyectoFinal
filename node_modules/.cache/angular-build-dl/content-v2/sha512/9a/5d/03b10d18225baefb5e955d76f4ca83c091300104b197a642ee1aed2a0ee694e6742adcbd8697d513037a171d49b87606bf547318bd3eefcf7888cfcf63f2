(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [routerLink]=\"['/tabs/tab1']\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Instrumentos de Viento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" *ngFor=\"let instrumento of instrumentos\">\n          <ion-card>\n            <ion-img (click)=\"playSound(instrumento)\" [src]=\"instrumento.imagen\" alt=\"\"></ion-img>\n            <ion-card-content>\n              <ion-card-subtitle><strong>{{instrumento.nombre}}</strong></ion-card-subtitle>\n              <p style=\"text-align: justify;\">{{instrumento.descrip}}</p>\n            </ion-card-content>\n            <ion-item>\n              <ion-button href=\"http://www.musicallweb.com/\"> Buy</ion-button>\n            </ion-item>\n          </ion-card>\n        </ion-col>\n  \n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab5/tab5-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab5PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageRoutingModule", function() { return Tab5PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab5.page */ "./src/app/tab5/tab5.page.ts");




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_3__["Tab5Page"]
    }
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ "./src/app/tab5/tab5.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/*! exports provided: Tab5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function() { return Tab5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab5-routing.module */ "./src/app/tab5/tab5-routing.module.ts");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab5.page */ "./src/app/tab5/tab5.page.ts");







let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab5PageRoutingModule"]
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]]
    })
], Tab5PageModule);



/***/ }),

/***/ "./src/app/tab5/tab5.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjUvdGFiNS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab5/tab5.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/*! exports provided: Tab5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5Page", function() { return Tab5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let Tab5Page = class Tab5Page {
    constructor() {
        this.instrumentos = [
            {
                nombre: 'Flauta Dulce',
                imagen: 'assets/viento/flautadulce.jpeg',
                audio: 'assets/viento/flautadulce.mp3',
                descrip: 'Es un instrumento de viento muy antiguo. Popular desde la Edad Media hasta finales del Barroco, fue quedando relegado su uso al desarrollarse la orquesta clásica, poblada de instrumentos más sonoros. '
            },
            {
                nombre: 'Clarinete',
                imagen: 'assets/viento/clarinete.png',
                audio: 'assets/viento/clarinete.mp3',
                descrip: 'El clarinete es un instrumento musical clasificado dentro de la familia viento madera formado por un tubo cilíndrico con una sola lengüeta que se fija sobre una abertura en la boquilla en el extremo superior del tubo. Por el inferior termina en un pabellón acampanado. '
            },
            {
                nombre: 'Trompa',
                imagen: 'assets/viento/contrabass.jpg',
                audio: 'assets/viento/contrabass.mp3',
                descrip: 'La trompa es un instrumento de viento-metal que tiene un carácter muy versátil y abarca una tesitura muy amplia con pocos cilindros. Además este instrumento puede emitir tanto sonidos suaves y dulces como ásperos y duros. '
            },
            {
                nombre: 'Tombon',
                imagen: 'assets/viento/trombon.jpeg',
                audio: 'assets/viento/trombon.mp3',
                descrip: 'El trombón es un instrumento de viento metal. Su sonido se produce gracias a la vibración de los labios del intérprete en la parte denominada boquilla a partir de la columna del aire. '
            },
            {
                nombre: 'Flauta de Pan',
                imagen: 'assets/viento/flautapan.png',
                audio: 'assets/viento/flautapan.mp3',
                descrip: 'La Flauta de Pan es el nombre genérico de un instrumento de viento compuesto basado en el principio de la resonancia acústica del tubo cerrado. Está formado por cañas huecas, pero existen versiones en madera, marfil, metal y plástico.1​ Se trata de un instrumento musical presente en diferentes culturas y, por ende, con distintos nombres. En griego se llamó siringa (en griego σΰριγγος, síringos) y toma su nombre actual por su asociación con el dios Pan. '
            }
        ];
    }
    playSound(instrumento) {
        let viento = new Audio();
        viento.src = instrumento.audio;
        viento.load();
        viento.play();
    }
};
Tab5Page.ctorParameters = () => [];
Tab5Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab5',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab5.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab5.page.scss */ "./src/app/tab5/tab5.page.scss")).default]
    })
], Tab5Page);



/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module-es2015.js.map