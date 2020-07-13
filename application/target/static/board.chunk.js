(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["board"],{

/***/ "./application/src/application/dashboard/services/MentionService.ts":
/*!**************************************************************************!*\
  !*** ./application/src/application/dashboard/services/MentionService.ts ***!
  \**************************************************************************/
/*! exports provided: MENTION_SERVICE_KEY, getInjectionPoint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MENTION_SERVICE_KEY\", function() { return MENTION_SERVICE_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInjectionPoint\", function() { return getInjectionPoint; });\n/* harmony import */ var general_injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/injector */ \"./application/src/general/injector.ts\");\n\nvar MENTION_SERVICE_KEY = 'MentionService';\nfunction getInjectionPoint() {\n    return general_injector__WEBPACK_IMPORTED_MODULE_0__[\"getInjectionPoint\"](MENTION_SERVICE_KEY);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getInjectionPoint());\n\n\n//# sourceURL=webpack:///./application/src/application/dashboard/services/MentionService.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/board/BoardImpl.ts":
/*!*********************************************************!*\
  !*** ./application/src/lazy-modules/board/BoardImpl.ts ***!
  \*********************************************************/
/*! exports provided: init, getComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getComponent\", function() { return getComponent; });\n/* harmony import */ var _BoardInjector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoardInjector */ \"./application/src/lazy-modules/board/BoardInjector.ts\");\n/* harmony import */ var lazy_modules_feed_FeedModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazy-modules/feed/FeedModule */ \"./application/src/lazy-modules/feed/FeedModule.ts\");\n\n\nvar boardServices;\nfunction init(services) {\n    boardServices = Object(_BoardInjector__WEBPACK_IMPORTED_MODULE_0__[\"initBoardServices\"])(services);\n}\nfunction getComponent() {\n    var element = document.createElement('div');\n    element.innerHTML = 'board';\n    Object(lazy_modules_feed_FeedModule__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(boardServices).then(function (feedModule) {\n        var feedButton = feedModule.getFeedButton();\n        element.appendChild(feedButton);\n    });\n    return element;\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/board/BoardImpl.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/board/BoardInjector.ts":
/*!*************************************************************!*\
  !*** ./application/src/lazy-modules/board/BoardInjector.ts ***!
  \*************************************************************/
/*! exports provided: boardRequiredServices, initBoardServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boardRequiredServices\", function() { return boardRequiredServices; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initBoardServices\", function() { return initBoardServices; });\n/* harmony import */ var general_services_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/services/user */ \"./application/src/general/services/user/index.ts\");\n/* harmony import */ var general_services_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! general/services/account */ \"./application/src/general/services/account/index.ts\");\nvar _a;\n\n\nvar boardRequiredServices = (_a = {},\n    _a[general_services_user__WEBPACK_IMPORTED_MODULE_0__[\"USER_SERVICE_KEY\"]] = true,\n    _a[general_services_account__WEBPACK_IMPORTED_MODULE_1__[\"ACCOUNT_SERVICE_KEY\"]] = true,\n    _a);\nvar boardOwnServices = {};\nfunction initBoardServices(services) {\n    var hasCorrectServices = Object.keys(boardRequiredServices).reduce(function (acc, serviceKey) { return acc && services[serviceKey]; }, true);\n    if (!hasCorrectServices) {\n        throw new Error('Board: wrong services');\n    }\n    return services;\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/board/BoardInjector.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/feed/FeedModule.ts":
/*!*********************************************************!*\
  !*** ./application/src/lazy-modules/feed/FeedModule.ts ***!
  \*********************************************************/
/*! exports provided: getFeedModule, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeedModule\", function() { return getFeedModule; });\n/* harmony import */ var general_services_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/services/user */ \"./application/src/general/services/user/index.ts\");\n/* harmony import */ var application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! application/dashboard/services/MentionService */ \"./application/src/application/dashboard/services/MentionService.ts\");\nvar _a;\n\n\nvar feedRequiredServices = (_a = {},\n    _a[general_services_user__WEBPACK_IMPORTED_MODULE_0__[\"USER_SERVICE_KEY\"]] = true,\n    _a[application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_1__[\"MENTION_SERVICE_KEY\"]] = true,\n    _a);\nfunction getFeedModule(services) {\n    var hasCorrectServices = Object.keys(feedRequiredServices).reduce(function (acc, serviceKey) { return acc && services[serviceKey]; }, true);\n    if (!hasCorrectServices) {\n        throw new Error('Feed: wrong services');\n    }\n    return __webpack_require__.e(/*! import() | feed */ \"feed\").then(__webpack_require__.bind(null, /*! ./FeedImpl */ \"./application/src/lazy-modules/feed/FeedImpl.ts\"));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getFeedModule);\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/feed/FeedModule.ts?");

/***/ })

}]);