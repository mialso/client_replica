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

/***/ "./application/src/general/injector.ts":
/*!*********************************************!*\
  !*** ./application/src/general/injector.ts ***!
  \*********************************************/
/*! exports provided: getInjectionPoint, has, get, map, mapIfNeed, remove, clearAll, servicesArray, servicesObject, servicesMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInjectionPoint\", function() { return getInjectionPoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"has\", function() { return has; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapIfNeed\", function() { return mapIfNeed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearAll\", function() { return clearAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"servicesArray\", function() { return servicesArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"servicesObject\", function() { return servicesObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"servicesMap\", function() { return servicesMap; });\nvar dependencies = new Map();\nfunction getInjectionPoint(dependencyName) {\n    return function () { return get(dependencyName); };\n}\nfunction has(dependencyName) {\n    return dependencies.has(dependencyName);\n}\nfunction get(dependencyName) {\n    var dependency = dependencies.get(dependencyName);\n    if (!dependency) {\n        throw new Error(\"Missing dependency: \" + dependencyName);\n    }\n    return dependency;\n}\nfunction map(dependencyName, instance) {\n    if (dependencies.has(dependencyName)) {\n        // throw new Error(`Duplicate dependency: ${dependencyName}`)\n        return dependencyName;\n    }\n    dependencies.set(dependencyName, instance);\n    return dependencyName;\n}\nfunction mapIfNeed(dependencyName, instance) {\n    if (!dependencies.has(dependencyName)) {\n        dependencies.set(dependencyName, instance);\n    }\n}\nfunction remove(dependencyName) {\n    if (dependencies.has(dependencyName)) {\n        dependencies.delete(dependencyName);\n    }\n}\nfunction clearAll() {\n    dependencies.clear();\n}\nvar servicesArray = function (arr) { return arr; };\nvar servicesObject = function (arr) { return arr.reduce(function (acc, item) { return acc.set(item[0], item[1]); }, new Map()); };\nvar servicesMap = function (arr) { return arr.reduce(function (acc, item) {\n    acc[item] = true;\n    return acc;\n}, {}); };\n// export const servicesMap = <S extends string>(arr: S[]) => arr.reduce((acc, item) => acc.set(item, true), new Map<S,true>());\n\n\n//# sourceURL=webpack:///./application/src/general/injector.ts?");

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

/***/ "./application/src/lazy-modules/dashboard/DashboardImpl.ts":
/*!*****************************************************************!*\
  !*** ./application/src/lazy-modules/dashboard/DashboardImpl.ts ***!
  \*****************************************************************/
/*! exports provided: init, getSmth, getComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSmth\", function() { return getSmth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getComponent\", function() { return getComponent; });\n/* harmony import */ var lazy_modules_dashboard_DashboardInjector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazy-modules/dashboard/DashboardInjector */ \"./application/src/lazy-modules/dashboard/DashboardInjector.ts\");\n/* harmony import */ var lazy_modules_feed_FeedModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazy-modules/feed/FeedModule */ \"./application/src/lazy-modules/feed/FeedModule.ts\");\n\n\nfunction init() {\n    Object(lazy_modules_dashboard_DashboardInjector__WEBPACK_IMPORTED_MODULE_0__[\"initDashboardServices\"])();\n}\nfunction getSmth() {\n    return 'smth';\n}\nfunction getComponent() {\n    var element = document.createElement('div');\n    element.innerHTML = 'dashboard component';\n    // Feed(dashServicesMap).then((feedModule) => {\n    Object(lazy_modules_feed_FeedModule__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lazy_modules_dashboard_DashboardInjector__WEBPACK_IMPORTED_MODULE_0__[\"dashServicesArr\"]).then(function (feedModule) {\n        var feedButton = feedModule.getFeedButton();\n        element.appendChild(feedButton);\n    });\n    return element;\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/dashboard/DashboardImpl.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/dashboard/DashboardInjector.ts":
/*!*********************************************************************!*\
  !*** ./application/src/lazy-modules/dashboard/DashboardInjector.ts ***!
  \*********************************************************************/
/*! exports provided: dashRequiredServicesArr, dashInitedServicesArr, dashServicesArr, dashServices, dashServicesMap, initDashboardServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dashRequiredServicesArr\", function() { return dashRequiredServicesArr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dashInitedServicesArr\", function() { return dashInitedServicesArr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dashServicesArr\", function() { return dashServicesArr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dashServices\", function() { return dashServices; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dashServicesMap\", function() { return dashServicesMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initDashboardServices\", function() { return initDashboardServices; });\n/* harmony import */ var general_injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/injector */ \"./application/src/general/injector.ts\");\n/* harmony import */ var general_services_UserServiceImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! general/services/UserServiceImpl */ \"./application/src/general/services/UserServiceImpl.ts\");\n/* harmony import */ var application_dashboard_services_MentionServiceImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! application/dashboard/services/MentionServiceImpl */ \"./application/src/application/dashboard/services/MentionServiceImpl.ts\");\n/* harmony import */ var general_services_UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! general/services/UserService */ \"./application/src/general/services/UserService.ts\");\n/* harmony import */ var application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! application/dashboard/services/MentionService */ \"./application/src/application/dashboard/services/MentionService.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar _a;\n\n\n\n\n\nvar dashRequiredServicesArr = [general_services_UserService__WEBPACK_IMPORTED_MODULE_3__[\"USER_SERVICE_KEY\"]];\nvar dashInitedServicesArr = [application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_4__[\"MENTION_SERVICE_KEY\"]];\nvar dashServicesArr = __spreadArrays(dashInitedServicesArr, dashRequiredServicesArr);\nvar dashServices = Object(general_injector__WEBPACK_IMPORTED_MODULE_0__[\"servicesArray\"])([general_services_UserService__WEBPACK_IMPORTED_MODULE_3__[\"USER_SERVICE_KEY\"], application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_4__[\"MENTION_SERVICE_KEY\"]]);\nvar dashServicesMap = (_a = {},\n    _a[general_services_UserService__WEBPACK_IMPORTED_MODULE_3__[\"USER_SERVICE_KEY\"]] = true,\n    _a[application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_4__[\"MENTION_SERVICE_KEY\"]] = true,\n    _a);\nfunction initDashboardServices() {\n    Object(general_injector__WEBPACK_IMPORTED_MODULE_0__[\"map\"])(general_services_UserService__WEBPACK_IMPORTED_MODULE_3__[\"USER_SERVICE_KEY\"], new general_services_UserServiceImpl__WEBPACK_IMPORTED_MODULE_1__[\"UserService\"]());\n    Object(general_injector__WEBPACK_IMPORTED_MODULE_0__[\"map\"])(application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_4__[\"MENTION_SERVICE_KEY\"], new application_dashboard_services_MentionServiceImpl__WEBPACK_IMPORTED_MODULE_2__[\"MentionService\"]());\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/dashboard/DashboardInjector.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/feed/FeedModule.ts":
/*!*********************************************************!*\
  !*** ./application/src/lazy-modules/feed/FeedModule.ts ***!
  \*********************************************************/
/*! exports provided: getFeedModule, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeedModule\", function() { return getFeedModule; });\n/* harmony import */ var general_services_UserService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/services/UserService */ \"./application/src/general/services/UserService.ts\");\n/* harmony import */ var application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! application/dashboard/services/MentionService */ \"./application/src/application/dashboard/services/MentionService.ts\");\nvar _a;\n\n\nvar feedServicesArr = [general_services_UserService__WEBPACK_IMPORTED_MODULE_0__[\"USER_SERVICE_KEY\"], application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_1__[\"MENTION_SERVICE_KEY\"]];\n// const feedServicesArr = servicesArray([USER_SERVICE_KEY, MENTION_SERVICE_KEY])\n// const feedServicesMap = servicesMap([USER_SERVICE_KEY, MENTION_SERVICE_KEY])\nvar feedServicesMap = (_a = {},\n    _a[general_services_UserService__WEBPACK_IMPORTED_MODULE_0__[\"USER_SERVICE_KEY\"]] = true,\n    _a[application_dashboard_services_MentionService__WEBPACK_IMPORTED_MODULE_1__[\"MENTION_SERVICE_KEY\"]] = true,\n    _a);\nfunction getFeedModule(x) {\n    if (x[0] !== general_services_UserService__WEBPACK_IMPORTED_MODULE_0__[\"USER_SERVICE_KEY\"]) {\n        return Promise.reject(new Error('Feed: wrong dependences'));\n    }\n    return __webpack_require__.e(/*! import() | feed */ \"feed\").then(__webpack_require__.bind(null, /*! ./FeedImpl */ \"./application/src/lazy-modules/feed/FeedImpl.ts\"));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getFeedModule);\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/feed/FeedModule.ts?");

/***/ })

}]);