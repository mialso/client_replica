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
/*! exports provided: MentionService, mentionHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MentionService\", function() { return MentionService; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mentionHelper\", function() { return mentionHelper; });\nvar MentionService = /** @class */ (function () {\n    function MentionService() {\n    }\n    MentionService.prototype.mentionMe = function () {\n        console.info('mentioned');\n    };\n    return MentionService;\n}());\n\nfunction mentionHelper() {\n    return 'some help';\n}\n\n\n//# sourceURL=webpack:///./application/src/application/dashboard/services/MentionServiceImpl.ts?");

/***/ }),

/***/ "./application/src/general/resolver.ts":
/*!*********************************************!*\
  !*** ./application/src/general/resolver.ts ***!
  \*********************************************/
/*! exports provided: resolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolve\", function() { return resolve; });\nfunction resolve(moduleId) {\n    return __webpack_require__(\"./application/src/lazy-modules lazy recursive ^\\\\.\\\\/.*$\")(\"./\" + moduleId);\n}\n\n\n//# sourceURL=webpack:///./application/src/general/resolver.ts?");

/***/ }),

/***/ "./application/src/lazy-modules lazy recursive ^\\.\\/.*$":
/*!*********************************************************************!*\
  !*** ./application/src/lazy-modules lazy ^\.\/.*$ namespace object ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./board/BoardImpl\": [\n\t\t\"./application/src/lazy-modules/board/BoardImpl.ts\",\n\t\t9,\n\t\t\"board-BoardImpl_module\"\n\t],\n\t\"./board/BoardImpl.ts\": [\n\t\t\"./application/src/lazy-modules/board/BoardImpl.ts\",\n\t\t9,\n\t\t\"board-BoardImpl_module\"\n\t],\n\t\"./board/BoardInjector\": [\n\t\t\"./application/src/lazy-modules/board/BoardInjector.ts\",\n\t\t9,\n\t\t\"board-BoardInjector_module\"\n\t],\n\t\"./board/BoardInjector.ts\": [\n\t\t\"./application/src/lazy-modules/board/BoardInjector.ts\",\n\t\t9,\n\t\t\"board-BoardInjector_module\"\n\t],\n\t\"./board/BoardModule\": [\n\t\t\"./application/src/lazy-modules/board/BoardModule.ts\",\n\t\t9\n\t],\n\t\"./board/BoardModule.ts\": [\n\t\t\"./application/src/lazy-modules/board/BoardModule.ts\",\n\t\t9\n\t],\n\t\"./board/tsconfig.json\": [\n\t\t\"./application/src/lazy-modules/board/tsconfig.json\",\n\t\t3,\n\t\t\"board-tsconfig-json_module\"\n\t],\n\t\"./dashboard/DashboardImpl\": [\n\t\t\"./application/src/lazy-modules/dashboard/DashboardImpl.ts\",\n\t\t9,\n\t\t\"dashboard-DashboardImpl_module\"\n\t],\n\t\"./dashboard/DashboardImpl.ts\": [\n\t\t\"./application/src/lazy-modules/dashboard/DashboardImpl.ts\",\n\t\t9,\n\t\t\"dashboard-DashboardImpl_module\"\n\t],\n\t\"./dashboard/DashboardInjector\": [\n\t\t\"./application/src/lazy-modules/dashboard/DashboardInjector.ts\",\n\t\t9,\n\t\t\"dashboard-DashboardInjector_module\"\n\t],\n\t\"./dashboard/DashboardInjector.ts\": [\n\t\t\"./application/src/lazy-modules/dashboard/DashboardInjector.ts\",\n\t\t9,\n\t\t\"dashboard-DashboardInjector_module\"\n\t],\n\t\"./dashboard/DashboardModule\": [\n\t\t\"./application/src/lazy-modules/dashboard/DashboardModule.ts\",\n\t\t9\n\t],\n\t\"./dashboard/DashboardModule.ts\": [\n\t\t\"./application/src/lazy-modules/dashboard/DashboardModule.ts\",\n\t\t9\n\t],\n\t\"./dashboard/tsconfig.json\": [\n\t\t\"./application/src/lazy-modules/dashboard/tsconfig.json\",\n\t\t3,\n\t\t\"dashboard-tsconfig-json_module\"\n\t],\n\t\"./feed\": [\n\t\t\"./application/src/lazy-modules/feed/index.ts\",\n\t\t9,\n\t\t\"feed_module\"\n\t],\n\t\"./feed/\": [\n\t\t\"./application/src/lazy-modules/feed/index.ts\",\n\t\t9,\n\t\t\"feed_module\"\n\t],\n\t\"./feed/FeedImpl\": [\n\t\t\"./application/src/lazy-modules/feed/FeedImpl.ts\",\n\t\t9,\n\t\t\"feed-FeedImpl_module\"\n\t],\n\t\"./feed/FeedImpl.ts\": [\n\t\t\"./application/src/lazy-modules/feed/FeedImpl.ts\",\n\t\t9,\n\t\t\"feed-FeedImpl_module\"\n\t],\n\t\"./feed/index\": [\n\t\t\"./application/src/lazy-modules/feed/index.ts\",\n\t\t9,\n\t\t\"feed_module\"\n\t],\n\t\"./feed/index.ts\": [\n\t\t\"./application/src/lazy-modules/feed/index.ts\",\n\t\t9,\n\t\t\"feed_module\"\n\t],\n\t\"./feed/tsconfig.json\": [\n\t\t\"./application/src/lazy-modules/feed/tsconfig.json\",\n\t\t3,\n\t\t\"feed-tsconfig-json_module\"\n\t],\n\t\"./out/FeedModule\": [\n\t\t\"./application/src/lazy-modules/out/FeedModule.ts\",\n\t\t9\n\t],\n\t\"./out/FeedModule.ts\": [\n\t\t\"./application/src/lazy-modules/out/FeedModule.ts\",\n\t\t9\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn Promise.all(ids.slice(2).map(__webpack_require__.e)).then(function() {\n\t\treturn __webpack_require__.t(id, ids[1])\n\t});\n}\nwebpackAsyncContext.keys = function webpackAsyncContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackAsyncContext.id = \"./application/src/lazy-modules lazy recursive ^\\\\.\\\\/.*$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./application/src/lazy-modules_lazy_^\\.\\/.*$_namespace_object?");

/***/ }),

/***/ "./application/src/lazy-modules/dashboard/DashboardImpl.ts":
/*!*****************************************************************!*\
  !*** ./application/src/lazy-modules/dashboard/DashboardImpl.ts ***!
  \*****************************************************************/
/*! exports provided: init, getSmth, getComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSmth\", function() { return getSmth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getComponent\", function() { return getComponent; });\n/* harmony import */ var lazy_modules_dashboard_DashboardInjector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazy-modules/dashboard/DashboardInjector */ \"./application/src/lazy-modules/dashboard/DashboardInjector.ts\");\n/* harmony import */ var lazy_modules_out_FeedModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazy-modules/out/FeedModule */ \"./application/src/lazy-modules/out/FeedModule.ts\");\n\n\nfunction init() {\n    Object(lazy_modules_dashboard_DashboardInjector__WEBPACK_IMPORTED_MODULE_0__[\"initDashboardServices\"])();\n}\nfunction getSmth() {\n    return 'smth';\n}\nfunction getComponent() {\n    var element = document.createElement('div');\n    element.innerHTML = 'dashboard component';\n    Object(lazy_modules_out_FeedModule__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(function (feedModule) {\n        var feedButton = feedModule.getFeedButton();\n        element.appendChild(feedButton);\n    });\n    return element;\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/dashboard/DashboardImpl.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/dashboard/DashboardInjector.ts":
/*!*********************************************************************!*\
  !*** ./application/src/lazy-modules/dashboard/DashboardInjector.ts ***!
  \*********************************************************************/
/*! exports provided: initDashboardServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initDashboardServices\", function() { return initDashboardServices; });\n/* harmony import */ var general_injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/injector */ \"./application/src/general/injector.ts\");\n/* harmony import */ var application_dashboard_services_MentionServiceImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! application/dashboard/services/MentionServiceImpl */ \"./application/src/application/dashboard/services/MentionServiceImpl.ts\");\n/* harmony import */ var application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! application/dashboard/services/MentionService */ \"./application/src/application/dashboard/services/MentionService.ts\");\n\n\n\nfunction initDashboardServices() {\n    Object(general_injector__WEBPACK_IMPORTED_MODULE_0__[\"map\"])(application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_2__[\"MENTION_SERVICE_KEY\"], new application_dashboard_services_MentionServiceImpl__WEBPACK_IMPORTED_MODULE_1__[\"MentionService\"]());\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/dashboard/DashboardInjector.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/out/FeedModule.ts":
/*!********************************************************!*\
  !*** ./application/src/lazy-modules/out/FeedModule.ts ***!
  \********************************************************/
/*! exports provided: getFeedModule, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeedModule\", function() { return getFeedModule; });\n/* harmony import */ var general_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/resolver */ \"./application/src/general/resolver.ts\");\n\nfunction getFeedModule() {\n    return Object(general_resolver__WEBPACK_IMPORTED_MODULE_0__[\"resolve\"])('feed');\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getFeedModule);\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/out/FeedModule.ts?");

/***/ })

}]);