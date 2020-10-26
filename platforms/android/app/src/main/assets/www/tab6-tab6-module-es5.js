(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab6-tab6-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab6/tab6.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab6/tab6.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab6Tab6PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [routerLink]=\"['/tabs/tab1']\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Instrumentos de Teclas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" *ngFor=\"let instrumento of instrumentos\">\n          <ion-card>\n            <ion-img (click)=\"playSound(instrumento)\" [src]=\"instrumento.imagen\" alt=\"\"></ion-img>\n            <ion-card-content>\n              <ion-card-subtitle><strong>{{instrumento.nombre}}</strong></ion-card-subtitle>\n              <p style=\"text-align: justify;\">{{instrumento.descrip}}</p>\n            </ion-card-content>\n            <ion-item>\n              <ion-button href=\"http://www.musicallweb.com/\" > Buy</ion-button>\n            </ion-item>\n          </ion-card>\n        </ion-col>\n  \n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/tab6/tab6-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab6/tab6-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab6PageRoutingModule */

    /***/
    function srcAppTab6Tab6RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab6PageRoutingModule", function () {
        return Tab6PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tab6_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab6.page */
      "./src/app/tab6/tab6.page.ts");

      var routes = [{
        path: '',
        component: _tab6_page__WEBPACK_IMPORTED_MODULE_3__["Tab6Page"]
      }];

      var Tab6PageRoutingModule = function Tab6PageRoutingModule() {
        _classCallCheck(this, Tab6PageRoutingModule);
      };

      Tab6PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab6PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab6/tab6.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab6/tab6.module.ts ***!
      \*************************************/

    /*! exports provided: Tab6PageModule */

    /***/
    function srcAppTab6Tab6ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab6PageModule", function () {
        return Tab6PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _tab6_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab6-routing.module */
      "./src/app/tab6/tab6-routing.module.ts");
      /* harmony import */


      var _tab6_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab6.page */
      "./src/app/tab6/tab6.page.ts");

      var Tab6PageModule = function Tab6PageModule() {
        _classCallCheck(this, Tab6PageModule);
      };

      Tab6PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tab6_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab6PageRoutingModule"]],
        declarations: [_tab6_page__WEBPACK_IMPORTED_MODULE_6__["Tab6Page"]]
      })], Tab6PageModule);
      /***/
    },

    /***/
    "./src/app/tab6/tab6.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab6/tab6.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab6Tab6PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjYvdGFiNi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/tab6/tab6.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab6/tab6.page.ts ***!
      \***********************************/

    /*! exports provided: Tab6Page */

    /***/
    function srcAppTab6Tab6PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab6Page", function () {
        return Tab6Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Tab6Page = /*#__PURE__*/function () {
        function Tab6Page() {
          _classCallCheck(this, Tab6Page);

          this.instrumentos = [{
            nombre: 'Acordeón',
            imagen: 'assets/teclas/Acordion.jpeg',
            audio: 'assets/teclas/Acordion.mp3',
            descrip: ' El acordeón es un instrumento musical armónico de viento, constituido por un fuelle, un diapasón y dos cajas armónicas de madera. En sus dos extremos el fuelle está cerrado por las cajas de madera. La parte de la mano derecha del acordeón tiene además un "diapasón" con una disposición de teclas que pueden ser como el de un piano (acordeón a piano) o teclas redondas (también llamadas botones) (acordeón cromático.  '
          }, {
            nombre: 'Órgano',
            imagen: 'assets/teclas/organo.png',
            audio: 'assets/teclas/organo.mp3',
            descrip: 'El órgano es un instrumento musical que produce sonido al conducir aire insuflado por medio de una turbina con un fuelle a través de unos tubos preseleccionados desde un teclado. '
          }, {
            nombre: 'Piano',
            imagen: 'assets/teclas/piano.png',
            audio: 'assets/teclas/piano.mp3',
            descrip: 'El piano es un instrumento musical armónico clasificado como instrumento de percusión y de cuerdas percutidas por el sistema de clasificación tradicional, y según la clasificación de Hornbostel-Sachs es un cordófono simple.  '
          }];
        }

        _createClass(Tab6Page, [{
          key: "playSound",
          value: function playSound(instrumento) {
            var sonido = new Audio();
            sonido.src = instrumento.audio;
            sonido.load();
            sonido.play();
          }
        }]);

        return Tab6Page;
      }();

      Tab6Page.ctorParameters = function () {
        return [];
      };

      Tab6Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab6',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab6.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab6/tab6.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab6.page.scss */
        "./src/app/tab6/tab6.page.scss"))["default"]]
      })], Tab6Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab6-tab6-module-es5.js.map