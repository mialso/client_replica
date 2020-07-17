(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["board"],{

/***/ "./application/src/lazy-modules/board/BoardImpl.ts":
/*!*********************************************************!*\
  !*** ./application/src/lazy-modules/board/BoardImpl.ts ***!
  \*********************************************************/
/*! exports provided: init, getComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getComponent\", function() { return getComponent; });\n/* harmony import */ var lazy_modules_board_BoardInjector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazy-modules/board/BoardInjector */ \"./application/src/lazy-modules/board/BoardInjector.ts\");\n/* harmony import */ var lazy_modules_out_FeedModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazy-modules/out/FeedModule */ \"./application/src/lazy-modules/out/FeedModule.ts\");\n\n\nfunction init() {\n    Object(lazy_modules_board_BoardInjector__WEBPACK_IMPORTED_MODULE_0__[\"initBoardServices\"])();\n}\nfunction getComponent() {\n    var element = document.createElement('div');\n    element.innerHTML = 'board';\n    Object(lazy_modules_out_FeedModule__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(function (feedModule) {\n        var feedButton = feedModule.getFeedButton();\n        element.appendChild(feedButton);\n    });\n    return element;\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/board/BoardImpl.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/board/BoardInjector.ts":
/*!*************************************************************!*\
  !*** ./application/src/lazy-modules/board/BoardInjector.ts ***!
  \*************************************************************/
/*! exports provided: initBoardServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initBoardServices\", function() { return initBoardServices; });\nfunction initBoardServices() {\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/board/BoardInjector.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/out/FeedModule.ts":
/*!********************************************************!*\
  !*** ./application/src/lazy-modules/out/FeedModule.ts ***!
  \********************************************************/
/*! exports provided: getFeedModule, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeedModule\", function() { return getFeedModule; });\n// import {resolve} from \"general/resolver\";\n/*\nexport function getFeedModule(): Promise<FeedModule> {\n    return resolve<FeedModule>('feed')\n}\n*/\nfunction getFeedModule() {\n    return __webpack_require__.e(/*! import() | feed */ \"feed\").then(__webpack_require__.bind(null, /*! ../feed/FeedImpl */ \"./application/src/lazy-modules/feed/FeedImpl.ts\"));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getFeedModule);\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/out/FeedModule.ts?");

/***/ })

}]);