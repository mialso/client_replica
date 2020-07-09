(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./application/src/lazy-modules/dashboard/DashboardImpl.ts":
/*!*****************************************************************!*\
  !*** ./application/src/lazy-modules/dashboard/DashboardImpl.ts ***!
  \*****************************************************************/
/*! exports provided: getSmth, getComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSmth\", function() { return getSmth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getComponent\", function() { return getComponent; });\n/* harmony import */ var lazy_modules_feed_FeedModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazy-modules/feed/FeedModule */ \"./application/src/lazy-modules/feed/FeedModule.ts\");\n\nfunction getSmth() {\n    return 'smth';\n}\nfunction getComponent() {\n    var element = document.createElement('div');\n    element.innerHTML = 'dashboard component';\n    Object(lazy_modules_feed_FeedModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(function (feedModule) {\n        var feedButton = feedModule.getFeedButton();\n        element.appendChild(feedButton);\n    });\n    return element;\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/dashboard/DashboardImpl.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/feed/FeedModule.ts":
/*!*********************************************************!*\
  !*** ./application/src/lazy-modules/feed/FeedModule.ts ***!
  \*********************************************************/
/*! exports provided: getFeedModule, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeedModule\", function() { return getFeedModule; });\nfunction getFeedModule() {\n    return __webpack_require__.e(/*! import() | feed */ \"feed\").then(__webpack_require__.bind(null, /*! ./FeedImpl */ \"./application/src/lazy-modules/feed/FeedImpl.ts\"));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getFeedModule);\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/feed/FeedModule.ts?");

/***/ })

}]);