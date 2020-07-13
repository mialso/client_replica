/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"inlineEntry": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"board":"board","dashboard":"dashboard","feed":"feed"}[chunkId]||chunkId) + ".chunk.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/src/entries/inline.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/src/application/commons/AppRequiredServices.ts":
/*!********************************************************************!*\
  !*** ./application/src/application/commons/AppRequiredServices.ts ***!
  \********************************************************************/
/*! exports provided: initRequiredServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initRequiredServices\", function() { return initRequiredServices; });\n/* harmony import */ var general_injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/injector */ \"./application/src/general/injector.ts\");\n/* harmony import */ var general_services_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! general/services/user */ \"./application/src/general/services/user/index.ts\");\n/* harmony import */ var general_services_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! general/services/account */ \"./application/src/general/services/account/index.ts\");\n/* harmony import */ var general_services_user_UserServiceImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! general/services/user/UserServiceImpl */ \"./application/src/general/services/user/UserServiceImpl.ts\");\n/* harmony import */ var general_services_account_AccountServiceImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! general/services/account/AccountServiceImpl */ \"./application/src/general/services/account/AccountServiceImpl.ts\");\nvar _a;\n\n\n\n\n\nvar appServices = (_a = {},\n    _a[general_services_user__WEBPACK_IMPORTED_MODULE_1__[\"USER_SERVICE_KEY\"]] = false,\n    _a[general_services_account__WEBPACK_IMPORTED_MODULE_2__[\"ACCOUNT_SERVICE_KEY\"]] = false,\n    _a);\nfunction initRequiredServices() {\n    var _a;\n    return _a = {},\n        _a[general_services_user__WEBPACK_IMPORTED_MODULE_1__[\"USER_SERVICE_KEY\"]] = Object(general_injector__WEBPACK_IMPORTED_MODULE_0__[\"map\"])(general_services_user__WEBPACK_IMPORTED_MODULE_1__[\"USER_SERVICE_KEY\"], new general_services_user_UserServiceImpl__WEBPACK_IMPORTED_MODULE_3__[\"UserService\"]()),\n        _a[general_services_account__WEBPACK_IMPORTED_MODULE_2__[\"ACCOUNT_SERVICE_KEY\"]] = Object(general_injector__WEBPACK_IMPORTED_MODULE_0__[\"map\"])(general_services_account__WEBPACK_IMPORTED_MODULE_2__[\"ACCOUNT_SERVICE_KEY\"], new general_services_account_AccountServiceImpl__WEBPACK_IMPORTED_MODULE_4__[\"AccountService\"]()),\n        _a;\n}\n\n\n//# sourceURL=webpack:///./application/src/application/commons/AppRequiredServices.ts?");

/***/ }),

/***/ "./application/src/entries/inline.ts":
/*!*******************************************!*\
  !*** ./application/src/entries/inline.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lazy_modules_dashboard_DashboardModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazy-modules/dashboard/DashboardModule */ \"./application/src/lazy-modules/dashboard/DashboardModule.ts\");\n/* harmony import */ var lazy_modules_board_BoardModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazy-modules/board/BoardModule */ \"./application/src/lazy-modules/board/BoardModule.ts\");\n/* harmony import */ var application_commons_AppRequiredServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! application/commons/AppRequiredServices */ \"./application/src/application/commons/AppRequiredServices.ts\");\n\n\n\nvar appServices = Object(application_commons_AppRequiredServices__WEBPACK_IMPORTED_MODULE_2__[\"initRequiredServices\"])();\nObject(lazy_modules_dashboard_DashboardModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(appServices).then(function (dashboardModule) {\n    var component = dashboardModule.getComponent();\n    document.body.appendChild(component);\n});\nObject(lazy_modules_board_BoardModule__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(appServices).then(function (board) {\n    var component = board.getComponent();\n    document.body.appendChild(component);\n});\n\n\n//# sourceURL=webpack:///./application/src/entries/inline.ts?");

/***/ }),

/***/ "./application/src/general/injector.ts":
/*!*********************************************!*\
  !*** ./application/src/general/injector.ts ***!
  \*********************************************/
/*! exports provided: getInjectionPoint, has, get, map, mapIfNeed, remove, clearAll, servicesArray, servicesObject, servicesMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInjectionPoint\", function() { return getInjectionPoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"has\", function() { return has; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapIfNeed\", function() { return mapIfNeed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearAll\", function() { return clearAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"servicesArray\", function() { return servicesArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"servicesObject\", function() { return servicesObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"servicesMap\", function() { return servicesMap; });\nvar dependencies = new Map();\nfunction getInjectionPoint(dependencyName) {\n    return function () { return get(dependencyName); };\n}\nfunction has(dependencyName) {\n    return dependencies.has(dependencyName);\n}\nfunction get(dependencyName) {\n    var dependency = dependencies.get(dependencyName);\n    if (!dependency) {\n        throw new Error(\"Missing dependency: \" + dependencyName);\n    }\n    return dependency;\n}\nfunction map(dependencyName, instance) {\n    if (dependencies.has(dependencyName)) {\n        // throw new Error(`Duplicate dependency: ${dependencyName}`)\n        return true;\n    }\n    dependencies.set(dependencyName, instance);\n    return true;\n}\nfunction mapIfNeed(dependencyName, instance) {\n    if (!dependencies.has(dependencyName)) {\n        dependencies.set(dependencyName, instance);\n    }\n}\nfunction remove(dependencyName) {\n    if (dependencies.has(dependencyName)) {\n        dependencies.delete(dependencyName);\n    }\n}\nfunction clearAll() {\n    dependencies.clear();\n}\nvar servicesArray = function (arr) { return arr; };\nvar servicesObject = function (arr) { return arr.reduce(function (acc, item) { return acc.set(item[0], item[1]); }, new Map()); };\nvar servicesMap = function (arr) { return arr.reduce(function (acc, item) {\n    acc[item] = true;\n    return acc;\n}, {}); };\n// export const servicesMap = <S extends string>(arr: S[]) => arr.reduce((acc, item) => acc.set(item, true), new Map<S,true>());\n\n\n//# sourceURL=webpack:///./application/src/general/injector.ts?");

/***/ }),

/***/ "./application/src/general/services/account/AccountServiceImpl.ts":
/*!************************************************************************!*\
  !*** ./application/src/general/services/account/AccountServiceImpl.ts ***!
  \************************************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AccountService\", function() { return AccountService; });\nvar AccountService = /** @class */ (function () {\n    function AccountService() {\n    }\n    AccountService.prototype.getAccountId = function () {\n        return 'some_account_id';\n    };\n    return AccountService;\n}());\n\n\n\n//# sourceURL=webpack:///./application/src/general/services/account/AccountServiceImpl.ts?");

/***/ }),

/***/ "./application/src/general/services/account/index.ts":
/*!***********************************************************!*\
  !*** ./application/src/general/services/account/index.ts ***!
  \***********************************************************/
/*! exports provided: ACCOUNT_SERVICE_KEY, getInjectionPoint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACCOUNT_SERVICE_KEY\", function() { return ACCOUNT_SERVICE_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInjectionPoint\", function() { return getInjectionPoint; });\n/* harmony import */ var general_injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/injector */ \"./application/src/general/injector.ts\");\n\nvar ACCOUNT_SERVICE_KEY = 'AccountService';\nfunction getInjectionPoint() {\n    return general_injector__WEBPACK_IMPORTED_MODULE_0__[\"getInjectionPoint\"](ACCOUNT_SERVICE_KEY);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getInjectionPoint());\n\n\n//# sourceURL=webpack:///./application/src/general/services/account/index.ts?");

/***/ }),

/***/ "./application/src/general/services/user/UserServiceImpl.ts":
/*!******************************************************************!*\
  !*** ./application/src/general/services/user/UserServiceImpl.ts ***!
  \******************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserService\", function() { return UserService; });\nvar UserService = /** @class */ (function () {\n    function UserService() {\n    }\n    UserService.prototype.getUserName = function () {\n        return 'User One';\n    };\n    return UserService;\n}());\n\n\n\n//# sourceURL=webpack:///./application/src/general/services/user/UserServiceImpl.ts?");

/***/ }),

/***/ "./application/src/general/services/user/index.ts":
/*!********************************************************!*\
  !*** ./application/src/general/services/user/index.ts ***!
  \********************************************************/
/*! exports provided: USER_SERVICE_KEY, getInjectionPoint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_SERVICE_KEY\", function() { return USER_SERVICE_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInjectionPoint\", function() { return getInjectionPoint; });\n/* harmony import */ var general_injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/injector */ \"./application/src/general/injector.ts\");\n\nvar USER_SERVICE_KEY = 'UserService';\nfunction getInjectionPoint() {\n    return general_injector__WEBPACK_IMPORTED_MODULE_0__[\"getInjectionPoint\"](USER_SERVICE_KEY);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getInjectionPoint());\n\n\n//# sourceURL=webpack:///./application/src/general/services/user/index.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/board/BoardModule.ts":
/*!***********************************************************!*\
  !*** ./application/src/lazy-modules/board/BoardModule.ts ***!
  \***********************************************************/
/*! exports provided: getBoard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBoard\", function() { return getBoard; });\nfunction getBoard(services) {\n    return __webpack_require__.e(/*! import() | board */ \"board\").then(__webpack_require__.bind(null, /*! ./BoardImpl */ \"./application/src/lazy-modules/board/BoardImpl.ts\")).then(function (board) {\n        board.init(services);\n        return board;\n    });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getBoard);\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/board/BoardModule.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/dashboard/DashboardModule.ts":
/*!*******************************************************************!*\
  !*** ./application/src/lazy-modules/dashboard/DashboardModule.ts ***!
  \*******************************************************************/
/*! exports provided: getDashboard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDashboard\", function() { return getDashboard; });\nfunction getDashboard(services) {\n    return __webpack_require__.e(/*! import() | dashboard */ \"dashboard\").then(__webpack_require__.bind(null, /*! ./DashboardImpl */ \"./application/src/lazy-modules/dashboard/DashboardImpl.ts\")).then(function (dashboard) {\n        dashboard.init(services);\n        return dashboard;\n    });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getDashboard);\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/dashboard/DashboardModule.ts?");

/***/ })

/******/ });