(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["board"],{

/***/ "./application/src/lazy-modules/board/BoardImpl.ts":
/*!*********************************************************!*\
  !*** ./application/src/lazy-modules/board/BoardImpl.ts ***!
  \*********************************************************/
/*! exports provided: init, getComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getComponent\", function() { return getComponent; });\n/* harmony import */ var _BoardInjector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoardInjector */ \"./application/src/lazy-modules/board/BoardInjector.ts\");\n// import Feed from 'lazy-modules/feed/FeedModule'\n\nfunction init() {\n    Object(_BoardInjector__WEBPACK_IMPORTED_MODULE_0__[\"initBoardServices\"])();\n}\nfunction getComponent() {\n    var element = document.createElement('div');\n    element.innerHTML = 'board';\n    /*\n  Feed(boardServicesArr).then((feedModule) => {\n      const feedButton = feedModule.getFeedButton();\n      element.appendChild(feedButton);\n  })\n  */\n    return element;\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/board/BoardImpl.ts?");

/***/ }),

/***/ "./application/src/lazy-modules/board/BoardInjector.ts":
/*!*************************************************************!*\
  !*** ./application/src/lazy-modules/board/BoardInjector.ts ***!
  \*************************************************************/
/*! exports provided: boardRequiredServices, boardServicesArr, initBoardServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boardRequiredServices\", function() { return boardRequiredServices; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boardServicesArr\", function() { return boardServicesArr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initBoardServices\", function() { return initBoardServices; });\n/* harmony import */ var general_services_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/services/user */ \"./application/src/general/services/user/index.ts\");\n\nvar boardRequiredServices = [general_services_user__WEBPACK_IMPORTED_MODULE_0__[\"USER_SERVICE_KEY\"]];\nvar boardServicesArr = boardRequiredServices;\nfunction initBoardServices() {\n}\n\n\n//# sourceURL=webpack:///./application/src/lazy-modules/board/BoardInjector.ts?");

/***/ })

}]);