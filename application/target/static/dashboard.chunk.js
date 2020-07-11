(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./application/src/application/dashboard/services/MentionService.ts":
/*!**************************************************************************!*\
  !*** ./application/src/application/dashboard/services/MentionService.ts ***!
  \**************************************************************************/
/*! exports provided: MENTION_SERVICE_KEY, getInjectionPoint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MENTION_SERVICE_KEY\", function() { return MENTION_SERVICE_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInjectionPoint\", function() { return getInjectionPoint; });\n/* harmony import */ var general_injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/injector */ \"./application/src/general/injector.ts\");\n\nvar MENTION_SERVICE_KEY = 'MentionService';\nfunction getInjectionPoint() {\n    return general_injector__WEBPACK_IMPORTED_MODULE_0__[\"getInjectionPoint\"](MENTION_SERVICE_KEY);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getInjectionPoint());\n\n\n//# sourceURL=webpack:///./application/src/application/dashboard/services/MentionService.ts?");

/***/ }),

/***/ "./application/src/application/dashboard/services/MentionServiceImpl.ts":
/*!******************************************************************************!*\
  !*** ./application/src/application/dashboard/services/MentionServiceImpl.ts ***!
  \******************************************************************************/
/*! exports provided: MentionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MentionService\", function() { return MentionService; });\nvar MentionService = /** @class */ (function () {\n    function MentionService() {\n    }\n    MentionService.prototype.mentionMe = function () {\n        console.info('mentioned');\n    };\n    return MentionService;\n}());\n\n\n\n//# sourceURL=webpack:///./application/src/application/dashboard/services/MentionServiceImpl.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/dashboard/DashboardImpl.ts":
/*!*****************************************************************!*\
  !*** ./application/src/lazy-modules/dashboard/DashboardImpl.ts ***!
  \*****************************************************************/
/*! exports provided: init, getSmth, getComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSmth\", function() { return getSmth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getComponent\", function() { return getComponent; });\n/* harmony import */ var lazy_modules_dashboard_DashboardInjector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazy-modules/dashboard/DashboardInjector */ \"./application/src/lazy-modules/dashboard/DashboardInjector.ts\");\n/* harmony import */ var lazy_modules_feed_FeedModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazy-modules/feed/FeedModule */ \"./application/src/lazy-modules/feed/FeedModule.ts\");\n\n\nfunction init() {\n    Object(lazy_modules_dashboard_DashboardInjector__WEBPACK_IMPORTED_MODULE_0__[\"initDashboardServices\"])();\n}\nfunction getSmth() {\n    return 'smth';\n}\nfunction getComponent() {\n    var element = document.createElement('div');\n    element.innerHTML = 'dashboard component';\n    Object(lazy_modules_feed_FeedModule__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lazy_modules_dashboard_DashboardInjector__WEBPACK_IMPORTED_MODULE_0__[\"dashServicesArr\"]).then(function (feedModule) {\n        var feedButton = feedModule.getFeedButton();\n        element.appendChild(feedButton);\n    });\n    return element;\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/dashboard/DashboardImpl.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/dashboard/DashboardInjector.ts":
/*!*********************************************************************!*\
  !*** ./application/src/lazy-modules/dashboard/DashboardInjector.ts ***!
  \*********************************************************************/
/*! exports provided: dashRequiredServicesArr, dashInitedServicesArr, dashServicesArr, initDashboardServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dashRequiredServicesArr\", function() { return dashRequiredServicesArr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dashInitedServicesArr\", function() { return dashInitedServicesArr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dashServicesArr\", function() { return dashServicesArr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initDashboardServices\", function() { return initDashboardServices; });\n/* harmony import */ var general_injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/injector */ \"./application/src/general/injector.ts\");\n/* harmony import */ var general_services_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! general/services/user */ \"./application/src/general/services/user/index.ts\");\n/* harmony import */ var application_dashboard_services_MentionServiceImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! application/dashboard/services/MentionServiceImpl */ \"./application/src/application/dashboard/services/MentionServiceImpl.ts\");\n/* harmony import */ var application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! application/dashboard/services/MentionService */ \"./application/src/application/dashboard/services/MentionService.ts\");\n\n\n\n\nvar dashRequiredServicesArr = [general_services_user__WEBPACK_IMPORTED_MODULE_1__[\"USER_SERVICE_KEY\"]];\nvar dashInitedServicesArr = [application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_3__[\"MENTION_SERVICE_KEY\"]];\nvar dashServicesArr = [general_services_user__WEBPACK_IMPORTED_MODULE_1__[\"USER_SERVICE_KEY\"], application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_3__[\"MENTION_SERVICE_KEY\"]];\nfunction initDashboardServices() {\n    Object(general_injector__WEBPACK_IMPORTED_MODULE_0__[\"map\"])(application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_3__[\"MENTION_SERVICE_KEY\"], new application_dashboard_services_MentionServiceImpl__WEBPACK_IMPORTED_MODULE_2__[\"MentionService\"]());\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/dashboard/DashboardInjector.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/feed/FeedModule.ts":
/*!*********************************************************!*\
  !*** ./application/src/lazy-modules/feed/FeedModule.ts ***!
  \*********************************************************/
/*! exports provided: getFeedModule, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeedModule\", function() { return getFeedModule; });\n/* harmony import */ var general_services_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/services/user */ \"./application/src/general/services/user/index.ts\");\n/* harmony import */ var application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! application/dashboard/services/MentionService */ \"./application/src/application/dashboard/services/MentionService.ts\");\n\n\nvar feedServicesArr = [general_services_user__WEBPACK_IMPORTED_MODULE_0__[\"USER_SERVICE_KEY\"], application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_1__[\"MENTION_SERVICE_KEY\"]];\nfunction getFeedModule(x) {\n    if (x.indexOf(general_services_user__WEBPACK_IMPORTED_MODULE_0__[\"USER_SERVICE_KEY\"]) === -1) {\n        return Promise.reject(new Error('Feed: wrong dependences'));\n    }\n    return __webpack_require__.e(/*! import() | feed */ \"feed\").then(__webpack_require__.bind(null, /*! ./FeedImpl */ \"./application/src/lazy-modules/feed/FeedImpl.ts\"));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getFeedModule);\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/feed/FeedModule.ts?");

/***/ })

}]);