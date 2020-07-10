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

/***/ "./application/src/general/injector.ts":
/*!*********************************************!*\
  !*** ./application/src/general/injector.ts ***!
  \*********************************************/
/*! exports provided: getInjectionPoint, has, get, map, mapIfNeed, remove, clearAll, servicesArray, servicesObject, servicesMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInjectionPoint\", function() { return getInjectionPoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"has\", function() { return has; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapIfNeed\", function() { return mapIfNeed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearAll\", function() { return clearAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"servicesArray\", function() { return servicesArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"servicesObject\", function() { return servicesObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"servicesMap\", function() { return servicesMap; });\nvar dependencies = new Map();\nfunction getInjectionPoint(dependencyName) {\n    return function () { return get(dependencyName); };\n}\nfunction has(dependencyName) {\n    return dependencies.has(dependencyName);\n}\nfunction get(dependencyName) {\n    var dependency = dependencies.get(dependencyName);\n    if (!dependency) {\n        throw new Error(\"Missing dependency: \" + dependencyName);\n    }\n    return dependency;\n}\nfunction map(dependencyName, instance) {\n    if (dependencies.has(dependencyName)) {\n        throw new Error(\"Duplicate dependency: \" + dependencyName);\n    }\n    dependencies.set(dependencyName, instance);\n    return dependencyName;\n}\nfunction mapIfNeed(dependencyName, instance) {\n    if (!dependencies.has(dependencyName)) {\n        dependencies.set(dependencyName, instance);\n    }\n}\nfunction remove(dependencyName) {\n    if (dependencies.has(dependencyName)) {\n        dependencies.delete(dependencyName);\n    }\n}\nfunction clearAll() {\n    dependencies.clear();\n}\nvar servicesArray = function (arr) { return arr; };\nvar servicesObject = function (arr) { return arr.reduce(function (acc, item) { return acc.set(item[0], item[1]); }, new Map()); };\nvar servicesMap = function (arr) { return arr.reduce(function (acc, item) {\n    acc[item] = true;\n    return acc;\n}, {}); };\n// export const servicesMap = <S extends string>(arr: S[]) => arr.reduce((acc, item) => acc.set(item, true), new Map<S,true>());\n\n\n//# sourceURL=webpack:///./application/src/general/injector.ts?");

/***/ }),

/***/ "./application/src/general/services/UserService.ts":
/*!*********************************************************!*\
  !*** ./application/src/general/services/UserService.ts ***!
  \*********************************************************/
/*! exports provided: USER_SERVICE_KEY, getInjectionPoint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_SERVICE_KEY\", function() { return USER_SERVICE_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInjectionPoint\", function() { return getInjectionPoint; });\n/* harmony import */ var general_injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/injector */ \"./application/src/general/injector.ts\");\n\nvar USER_SERVICE_KEY = 'UserService';\nfunction getInjectionPoint() {\n    return general_injector__WEBPACK_IMPORTED_MODULE_0__[\"getInjectionPoint\"](USER_SERVICE_KEY);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getInjectionPoint());\n\n\n//# sourceURL=webpack:///./application/src/general/services/UserService.ts?");

/***/ }),

/***/ "./application/src/general/services/UserServiceImpl.ts":
/*!*************************************************************!*\
  !*** ./application/src/general/services/UserServiceImpl.ts ***!
  \*************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserService\", function() { return UserService; });\nvar UserService = /** @class */ (function () {\n    function UserService() {\n    }\n    UserService.prototype.getUserName = function () {\n        return 'User One';\n    };\n    return UserService;\n}());\n\n\n\n//# sourceURL=webpack:///./application/src/general/services/UserServiceImpl.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/board/BoardImpl.ts":
/*!*********************************************************!*\
  !*** ./application/src/lazy-modules/board/BoardImpl.ts ***!
  \*********************************************************/
/*! exports provided: init, getComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getComponent\", function() { return getComponent; });\n/* harmony import */ var lazy_modules_feed_FeedModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazy-modules/feed/FeedModule */ \"./application/src/lazy-modules/feed/FeedModule.ts\");\n/* harmony import */ var _BoardInjector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardInjector */ \"./application/src/lazy-modules/board/BoardInjector.ts\");\n\n\nfunction init() {\n    Object(_BoardInjector__WEBPACK_IMPORTED_MODULE_1__[\"initBoardServices\"])();\n}\nfunction getComponent() {\n    var element = document.createElement('div');\n    element.innerHTML = 'board';\n    // Feed(boardServicesMap).then((feedModule) => {\n    Object(lazy_modules_feed_FeedModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_BoardInjector__WEBPACK_IMPORTED_MODULE_1__[\"boardServicesArr\"]).then(function (feedModule) {\n        var feedButton = feedModule.getFeedButton();\n        element.appendChild(feedButton);\n    });\n    return element;\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/board/BoardImpl.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/board/BoardInjector.ts":
/*!*************************************************************!*\
  !*** ./application/src/lazy-modules/board/BoardInjector.ts ***!
  \*************************************************************/
/*! exports provided: boardServicesArr, boardServicesMap, initBoardServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boardServicesArr\", function() { return boardServicesArr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boardServicesMap\", function() { return boardServicesMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initBoardServices\", function() { return initBoardServices; });\n/* harmony import */ var general_injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/injector */ \"./application/src/general/injector.ts\");\n/* harmony import */ var general_services_UserService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! general/services/UserService */ \"./application/src/general/services/UserService.ts\");\n/* harmony import */ var general_services_UserServiceImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! general/services/UserServiceImpl */ \"./application/src/general/services/UserServiceImpl.ts\");\nvar _a;\n\n\n\nvar boardServicesArr = [general_services_UserService__WEBPACK_IMPORTED_MODULE_1__[\"USER_SERVICE_KEY\"]];\n// export const boardServicesMap = servicesMap([USER_SERVICE_KEY])\nvar boardServicesMap = (_a = {},\n    _a[general_services_UserService__WEBPACK_IMPORTED_MODULE_1__[\"USER_SERVICE_KEY\"]] = true,\n    _a);\nfunction initBoardServices() {\n    Object(general_injector__WEBPACK_IMPORTED_MODULE_0__[\"map\"])(general_services_UserService__WEBPACK_IMPORTED_MODULE_1__[\"USER_SERVICE_KEY\"], new general_services_UserServiceImpl__WEBPACK_IMPORTED_MODULE_2__[\"UserService\"]());\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/board/BoardInjector.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/feed/FeedModule.ts":
/*!*********************************************************!*\
  !*** ./application/src/lazy-modules/feed/FeedModule.ts ***!
  \*********************************************************/
/*! exports provided: getFeedModule, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeedModule\", function() { return getFeedModule; });\n/* harmony import */ var general_services_UserService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/services/UserService */ \"./application/src/general/services/UserService.ts\");\n/* harmony import */ var application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! application/dashboard/services/MentionService */ \"./application/src/application/dashboard/services/MentionService.ts\");\nvar _a;\n\n\nvar feedServicesArr = [general_services_UserService__WEBPACK_IMPORTED_MODULE_0__[\"USER_SERVICE_KEY\"], application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_1__[\"MENTION_SERVICE_KEY\"]];\n// const feedServicesArr = servicesArray([USER_SERVICE_KEY, MENTION_SERVICE_KEY])\n// const feedServicesMap = servicesMap([USER_SERVICE_KEY, MENTION_SERVICE_KEY])\nvar feedServicesMap = (_a = {},\n    _a[general_services_UserService__WEBPACK_IMPORTED_MODULE_0__[\"USER_SERVICE_KEY\"]] = true,\n    _a[application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_1__[\"MENTION_SERVICE_KEY\"]] = true,\n    _a);\nfunction getFeedModule(x) {\n    if (!x[general_services_UserService__WEBPACK_IMPORTED_MODULE_0__[\"USER_SERVICE_KEY\"]]) {\n        return Promise.reject(new Error('Feed: wrong dependences'));\n    }\n    return __webpack_require__.e(/*! import() | feed */ \"feed\").then(__webpack_require__.bind(null, /*! ./FeedImpl */ \"./application/src/lazy-modules/feed/FeedImpl.ts\"));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getFeedModule);\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/feed/FeedModule.ts?");

/***/ })

}]);