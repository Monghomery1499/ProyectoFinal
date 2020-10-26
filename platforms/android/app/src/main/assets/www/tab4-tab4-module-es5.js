(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab4Tab4PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [routerLink]=\"['/tabs/tab1']\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Instrumentos de Percusión</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" *ngFor=\"let instrumento of instrumentos\">\n          <ion-card>\n            <ion-img (click)=\"playSound(instrumento)\" [src]=\"instrumento.imagen\" alt=\"\"></ion-img>\n            <ion-card-content>\n              <ion-card-subtitle><strong>{{instrumento.nombre}}</strong></ion-card-subtitle>\n              <p style=\"text-align: justify;\">{{instrumento.descrip}}</p>\n            </ion-card-content>\n            <ion-item>\n              <ion-button href=\"http://www.musicallweb.com/\"> Buy</ion-button>\n            </ion-item>\n          </ion-card>\n        </ion-col>\n  \n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/tab4/tab4-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab4/tab4-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab4PageRoutingModule */

    /***/
    function srcAppTab4Tab4RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function () {
        return Tab4PageRoutingModule;
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


      var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab4.page */
      "./src/app/tab4/tab4.page.ts");

      var routes = [{
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
      }];

      var Tab4PageRoutingModule = function Tab4PageRoutingModule() {
        _classCallCheck(this, Tab4PageRoutingModule);
      };

      Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab4PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab4/tab4.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab4/tab4.module.ts ***!
      \*************************************/

    /*! exports provided: Tab4PageModule */

    /***/
    function srcAppTab4Tab4ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function () {
        return Tab4PageModule;
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


      var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab4-routing.module */
      "./src/app/tab4/tab4-routing.module.ts");
      /* harmony import */


      var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab4.page */
      "./src/app/tab4/tab4.page.ts");

      var Tab4PageModule = function Tab4PageModule() {
        _classCallCheck(this, Tab4PageModule);
      };

      Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab4PageRoutingModule"]],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
      })], Tab4PageModule);
      /***/
    },

    /***/
    "./src/app/tab4/tab4.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab4/tab4.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab4Tab4PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/tab4/tab4.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab4/tab4.page.ts ***!
      \***********************************/

    /*! exports provided: Tab4Page */

    /***/
    function srcAppTab4Tab4PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4Page", function () {
        return Tab4Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Tab4Page = /*#__PURE__*/function () {
        function Tab4Page() {
          _classCallCheck(this, Tab4Page);

          this.instrumentos = [{
            nombre: 'Bateria',
            imagen: 'assets/percusion/bateria.jpg',
            audio: 'assets/percusion/bateria.mp3',
            descrip: 'La batería es un instrumento musical que pertenece a la familia de percusión. Este equipo estándar se usa en la música pop, el blues, el jazz, el rock, el heavy metal (en casi todos los géneros musicales), convirtiéndose, por tanto, en un instrumento indispensable para muchas agrupaciones musicales. '
          }, {
            nombre: 'Bongos',
            imagen: 'assets/percusion/bongo.jpeg',
            audio: 'assets/percusion/bongo.mp3',
            descrip: 'El bongó es un instrumento membranófono conformado por un juego de dos tambores pequeños hechos de madera ligeramente troncocónicos, uno más pequeño que el otro, unidos por una pieza de madera. '
          }, {
            nombre: 'Congas',
            imagen: 'assets/percusion/congas.jpeg',
            audio: 'assets/percusion/congas.mp3',
            descrip: 'La congal​ o tumbadora es un instrumento membranófono de percusión de raíces africanas, que fue desarrollado en Cuba. Además de su importancia dentro de la percusión en la música afrocubana, la conga se convirtió en un instrumento fundamental en la interpretación de otros ritmos «latinos» como la salsa, el merengue y la timba cubana.. '
          }];
        }

        _createClass(Tab4Page, [{
          key: "playSound",
          value: function playSound(instrumento) {
            var sonido = new Audio();
            sonido.src = instrumento.audio;
            sonido.load();
            sonido.play();
          }
        }]);

        return Tab4Page;
      }();

      Tab4Page.ctorParameters = function () {
        return [];
      };

      Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab4',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab4.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab4.page.scss */
        "./src/app/tab4/tab4.page.scss"))["default"]]
      })], Tab4Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab4-tab4-module-es5.js.map