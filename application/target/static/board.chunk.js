(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["board"],{

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeedModule\", function() { return getFeedModule; });\n/* harmony import */ var general_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/resolver */ \"./application/src/general/resolver.ts\");\n\nfunction getFeedModule() {\n    return Object(general_resolver__WEBPACK_IMPORTED_MODULE_0__[\"resolve\"])('feed');\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getFeedModule);\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/out/FeedModule.ts?");

/***/ })

}]);