(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed"],{

/***/ "./application/src/application/dashboard/services/MentionService.ts":
/*!**************************************************************************!*\
  !*** ./application/src/application/dashboard/services/MentionService.ts ***!
  \**************************************************************************/
/*! exports provided: mentionMe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mentionMe\", function() { return mentionMe; });\nfunction mentionMe() {\n    console.info('mentioned');\n}\n\n\n//# sourceURL=webpack:///./application/src/application/dashboard/services/MentionService.ts?");

/***/ }),

/***/ "./application/src/general/services/UserService.ts":
/*!*********************************************************!*\
  !*** ./application/src/general/services/UserService.ts ***!
  \*********************************************************/
/*! exports provided: getUserName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserName\", function() { return getUserName; });\nfunction getUserName() {\n    return 'User One';\n}\n\n\n//# sourceURL=webpack:///./application/src/general/services/UserService.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/feed/FeedImpl.ts":
/*!*******************************************************!*\
  !*** ./application/src/lazy-modules/feed/FeedImpl.ts ***!
  \*******************************************************/
/*! exports provided: getFeedButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeedButton\", function() { return getFeedButton; });\n/* harmony import */ var general_services_UserService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/services/UserService */ \"./application/src/general/services/UserService.ts\");\n/* harmony import */ var application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! application/dashboard/services/MentionService */ \"./application/src/application/dashboard/services/MentionService.ts\");\n\n\nfunction getFeedButton() {\n    var element = document.createElement('button');\n    var userName = Object(general_services_UserService__WEBPACK_IMPORTED_MODULE_0__[\"getUserName\"])();\n    element.innerHTML = \"feed button: \" + userName;\n    element.onclick = application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_1__[\"mentionMe\"];\n    return element;\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/feed/FeedImpl.ts?");

/***/ })

}]);