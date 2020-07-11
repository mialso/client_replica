(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed"],{

/***/ "./application/src/lazy-modules/feed/FeedImpl.ts":
/*!*******************************************************!*\
  !*** ./application/src/lazy-modules/feed/FeedImpl.ts ***!
  \*******************************************************/
/*! exports provided: getFeedButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeedButton\", function() { return getFeedButton; });\n/* harmony import */ var general_services_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/services/user */ \"./application/src/general/services/user/index.ts\");\n/* harmony import */ var application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! application/dashboard/services/MentionService */ \"./application/src/application/dashboard/services/MentionService.ts\");\n\n\nfunction getFeedButton() {\n    var element = document.createElement('button');\n    var userName = Object(general_services_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getUserName();\n    element.innerHTML = \"feed button: \" + userName;\n    element.onclick = Object(application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().mentionMe;\n    return element;\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/feed/FeedImpl.ts?");

/***/ })

}]);