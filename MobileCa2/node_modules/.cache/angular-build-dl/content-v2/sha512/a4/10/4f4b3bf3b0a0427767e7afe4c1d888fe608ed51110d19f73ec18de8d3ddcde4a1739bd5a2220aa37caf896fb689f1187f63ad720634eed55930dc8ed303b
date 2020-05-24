(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["character-details-character-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaulthref=\"/tabs/characters\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ character?.name }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n    <ion-card>\r\n        <ion-card-content>\r\n          <ion-img [src]=\"character?.img\" style=\"width: 200px; float:left\"></ion-img>\r\n        <div class=\"content\">\r\n        <b>Character Id</b>: {{ character?.char_id }}<br>\r\n        <b>Birthday</b>: {{ character?.birthday }}<br>\r\n        <b>Status</b>: {{ character?.status }}<br>\r\n        <b>Appearence on seasons</b>: {{ character?.appearance.join(\",\") }}<br>\r\n        <b>Nickname</b>: {{ character?.nickname }}<br>\r\n        <b>Portrayed</b>: {{ character?.portrayed }}<br>\r\n        <b>Occupation</b>: {{ character?.occupation.join(\",\") }}<br>       \r\n        </div>\r\n        <ion-buttons slot=\"end\" style=\"float: right;\"> \r\n          <ion-button (click)=\"unfavourite()\" *ngIf=\"isFavourite\">      \r\n              <ion-icon name=\"heart-circle\" class=\"favourite\"></ion-icon>    \r\n          </ion-button>    \r\n          <ion-button (click)=\"favourite()\" *ngIf=\"!isFavourite\">      \r\n            <ion-icon name=\"heart-circle-outline\"  ></ion-icon>    \r\n          </ion-button>  \r\n        </ion-buttons>\r\n        </ion-card-content>\r\n    </ion-card>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/character-details/character-details-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/character-details/character-details-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CharacterDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageRoutingModule", function() { return CharacterDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character-details.page */ "./src/app/pages/character-details/character-details.page.ts");




const routes = [
    {
        path: '',
        component: _character_details_page__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailsPage"]
    }
];
let CharacterDetailsPageRoutingModule = class CharacterDetailsPageRoutingModule {
};
CharacterDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CharacterDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/character-details/character-details.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: CharacterDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageModule", function() { return CharacterDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./character-details-routing.module */ "./src/app/pages/character-details/character-details-routing.module.ts");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character-details.page */ "./src/app/pages/character-details/character-details.page.ts");







let CharacterDetailsPageModule = class CharacterDetailsPageModule {
};
CharacterDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharacterDetailsPageRoutingModule"]
        ],
        declarations: [_character_details_page__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailsPage"]]
    })
], CharacterDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/character-details/character-details.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 64px;\n  color: #c9c9c9 !important;\n}\n\n.favourite {\n  color: #3171e0 !important;\n}\n\nion-button {\n  height: 64px;\n  width: 64px;\n}\n\n.content {\n  float: left;\n  margin-top: 20px;\n}\n\nion-img {\n  width: 200px;\n  float: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhcmFjdGVyLWRldGFpbHMvQzpcXEZhY3VsIENDVFxcbW9iaWxlXFxNb2JpbGVDYTJcXE1vYmlsZUNhMlxcTW9iaWxlQ2EyL3NyY1xcYXBwXFxwYWdlc1xcY2hhcmFjdGVyLWRldGFpbHNcXGNoYXJhY3Rlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcmFjdGVyLWRldGFpbHMvY2hhcmFjdGVyLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLHlCQUF5QjtBQ0M3Qjs7QURDQTtFQUNJLHlCQUF5QjtBQ0U3Qjs7QURBQTtFQUNJLFlBQVk7RUFDWixXQUFXO0FDR2Y7O0FEQUE7RUFBUyxXQUFVO0VBQUMsZ0JBQWdCO0FDS3BDOztBREpBO0VBQ0ksWUFBWTtFQUFFLFdBQ2xCO0FDT0EiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXItZGV0YWlscy9jaGFyYWN0ZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICBjb2xvcjogI2M5YzljOSAhaW1wb3J0YW50O1xyXG4gIH1cclxuLmZhdm91cml0ZXtcclxuICAgIGNvbG9yOiAjMzE3MWUwICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gIH1cclxuXHJcbi5jb250ZW50e2Zsb2F0OmxlZnQ7bWFyZ2luLXRvcDogMjBweDt9XHJcbmlvbi1pbWd7XHJcbiAgICB3aWR0aDogMjAwcHg7IGZsb2F0OmxlZnRcclxufSIsImlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogI2M5YzljOSAhaW1wb3J0YW50O1xufVxuXG4uZmF2b3VyaXRlIHtcbiAgY29sb3I6ICMzMTcxZTAgIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNjRweDtcbiAgd2lkdGg6IDY0cHg7XG59XG5cbi5jb250ZW50IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi1pbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/character-details/character-details.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.page.ts ***!
  \*******************************************************************/
/*! exports provided: CharacterDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPage", function() { return CharacterDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/favourite.service */ "./src/app/services/favourite.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let CharacterDetailsPage = class CharacterDetailsPage {
    constructor(activatedRoute, api, favouriteService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouriteService = favouriteService;
        this.characterId = null;
        this.isFavourite = false;
        this.STORAGE_KEY = "favouriteCharacters";
    }
    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            console.log(res[0]);
            this.character = res[0];
        });
        this.favouriteService.isFavourite(this.characterId, this.STORAGE_KEY).then(isFav => {
            this.isFavourite = isFav;
        });
    }
    ;
    favourite() {
        this.favouriteService.favourite(this.characterId, this.STORAGE_KEY).then(() => {
            this.isFavourite = true;
        });
    }
    ;
    unfavourite() {
        this.favouriteService.unfavourite(this.characterId, this.STORAGE_KEY).then(() => {
            this.isFavourite = false;
        });
    }
    ;
};
CharacterDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"] }
];
CharacterDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-character-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./character-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./character-details.page.scss */ "./src/app/pages/character-details/character-details.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"]])
], CharacterDetailsPage);

;


/***/ })

}]);
//# sourceMappingURL=character-details-character-details-module-es2015.js.map