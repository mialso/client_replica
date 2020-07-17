(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed"],{

/***/ "./application/src/application/dashboard/services/MentionService.ts":
/*!**************************************************************************!*\
  !*** ./application/src/application/dashboard/services/MentionService.ts ***!
  \**************************************************************************/
/*! exports provided: MENTION_SERVICE_KEY, getInjectionPoint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MENTION_SERVICE_KEY\", function() { return MENTION_SERVICE_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInjectionPoint\", function() { return getInjectionPoint; });\n/* harmony import */ var general_injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/injector */ \"./application/src/general/injector.ts\");\n\nvar MENTION_SERVICE_KEY = 'MentionService';\nfunction getInjectionPoint() {\n    return general_injector__WEBPACK_IMPORTED_MODULE_0__[\"getInjectionPoint\"](MENTION_SERVICE_KEY);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getInjectionPoint());\n\n\n//# sourceURL=webpack:///./application/src/application/dashboard/services/MentionService.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/feed/FeedImpl.ts":
/*!*******************************************************!*\
  !*** ./application/src/lazy-modules/feed/FeedImpl.ts ***!
  \*******************************************************/
/*! exports provided: getFeedButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeedButton\", function() { return getFeedButton; });\n/* harmony import */ var general_services_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/services/user */ \"./application/src/general/services/user/index.ts\");\n/* harmony import */ var application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! application/dashboard/services/MentionService */ \"./application/src/application/dashboard/services/MentionService.ts\");\n\n\nfunction getFeedButton() {\n    var element = document.createElement('button');\n    var userName = Object(general_services_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getUserName();\n    //const userSurname = UserService().getUserSurname();\n    element.innerHTML = \"feed button: \" + userName;\n    // Mention service should be initailized WHERE???\n    element.onclick = Object(application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().mentionMe;\n    return element;\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/feed/FeedImpl.ts?");

/***/ })

}]);