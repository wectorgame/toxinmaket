/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
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
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.js","vendors~analytics~main","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/fonts/Montserrat-Regular.ttf":
/*!*********************************************!*\
  !*** ./assets/fonts/Montserrat-Regular.ttf ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3cd786652b8a2e9d41f210cb1a527ff6.ttf\");\n\n//# sourceURL=webpack:///./assets/fonts/Montserrat-Regular.ttf?");

/***/ }),

/***/ "./img/Logo.png":
/*!**********************!*\
  !*** ./img/Logo.png ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6d44891a7d159091e555d26b81eccb82.png\");\n\n//# sourceURL=webpack:///./img/Logo.png?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Post */ \"./models/Post.js\");\n/* harmony import */ var _img_Logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/Logo.png */ \"./img/Logo.png\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n/* import json from './assets/json.json'\r\nimport xml from './assets/data.xml'\r\nimport csv from './assets/data.csv' */\r\n\r\n\r\nconst post = new _models_Post__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Toxinmaket post title', _img_Logo_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\nconsole.log('Post to String:', post.toString())\r\njquery__WEBPACK_IMPORTED_MODULE_0__('pre').addClass('code').html(post.toString())\r\n/* console.log('JSON:', json)\r\nconsole.log('XML:', xml)\r\n\r\nconsole.log('CSV:',csv) */\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./models/Post.js":
/*!************************!*\
  !*** ./models/Post.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\nclass Post{\r\n    constructor(title, img){\r\n        this.title = title\r\n        this.img = img\r\n        this.date = new Date()\r\n    }\r\n    toString(){\r\n        JSON.stringify({\r\n            title: this.title,\r\n            date: this.date.toJSON,\r\n            img: this.img\r\n        },null, 2)\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack:///./models/Post.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/montserrat.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/montserrat.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/fonts/Montserrat-Regular.ttf */ \"./assets/fonts/Montserrat-Regular.ttf\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@font-face{\\r\\n    font-family: 'Montserrat';\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('truetype');\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/montserrat.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/style.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_montserrat_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./montserrat.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/montserrat.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_montserrat_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    box-sizing: border-box;\\r\\n    font-family: 'Montserrat', sans-serif;\\r\\n}\\r\\n\\r\\na {\\r\\n    text-decoration: none;\\r\\n    color: rgba(31, 32, 65, 0.75);\\r\\n}\\r\\n\\r\\n.container {\\r\\n    width: 1440px;\\r\\n    height: auto;\\r\\n    margin: auto;\\r\\n    background-color: gray;\\r\\n\\r\\n\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n\\r\\n    display: flex;\\r\\n    background-color: #ffff;\\r\\n    margin: 1rem;\\r\\n\\r\\n}\\r\\n\\r\\n.nav-img {\\r\\n    \\r\\n    display: flex;\\r\\n    align-self: center;\\r\\n    padding: 15px 284px 15px 140px;\\r\\n\\r\\n\\r\\n\\r\\n}\\r\\n\\r\\n.menu-list {\\r\\n    display: flex;\\r\\n\\r\\n    list-style: none;\\r\\n    text-align: center;\\r\\n    line-height: 17px;\\r\\n    font-size: 14px;\\r\\n    font-style: normal;\\r\\n    background-color: #ffff;\\r\\n}\\r\\n\\r\\n.active,\\r\\n.menu-list ul li:hover {\\r\\n    color: rgba(31, 32, 65, 0.75);\\r\\n    font-weight: bold;\\r\\n\\r\\n}\\r\\n\\r\\n.menu-list li {\\r\\n\\r\\n    color: rgba(31, 32, 65, 0.5);\\r\\n    padding: 26px 10px;\\r\\n}\\r\\n\\r\\n.not-active {\\r\\n\\r\\n    color: rgba(31, 32, 65, 0.5);\\r\\n}\\r\\n\\r\\n.sub-menu-1 {\\r\\n    display: none;\\r\\n    list-style: none;\\r\\n    width: 70px;\\r\\n}\\r\\n\\r\\n.nav-services:hover .sub-menu-1 {\\r\\n    display: block;\\r\\n    position: absolute;\\r\\n    background: #eee;\\r\\n    margin-top: 5px;\\r\\n    margin-left: -5px;\\r\\n\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.btn {\\r\\n    display: block;\\r\\n    text-align: center;\\r\\n    margin: 20px;\\r\\n    padding: 0 20px 0 20px;\\r\\n    text-transform: uppercase;\\r\\n    border-radius: 1rem;\\r\\n    border: 2px solid #BC9CFF;\\r\\n    font-weight: bold;\\r\\n    font-size: 12px;\\r\\n    line-height: 15px;\\r\\n\\r\\n}\\r\\n\\r\\n.btn1 {\\r\\n    color: #BC9CFF;\\r\\n    background: #ffff;\\r\\n}\\r\\n\\r\\n.btn2 {\\r\\n    color: #ffff;\\r\\n    background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);\\r\\n}\\r\\n\\r\\n.office {\\r\\n    display: flex;\\r\\n    color: rgba(31, 32, 65, 0.5);\\r\\n\\r\\n    border-left: 2px solid rgba(31, 32, 65, 0.05);\\r\\n\\r\\n    margin: 13px 0 13px 21px;\\r\\n    padding: 13px 0 13px 20px;\\r\\n\\r\\n    font-size: 14px;\\r\\n    line-height: 17px;\\r\\n\\r\\n\\r\\n}\\r\\n\\r\\n.footer-widgets {\\r\\n    display: flex;\\r\\n    padding-top: 100px;\\r\\n    background-color: #fff;\\r\\n    margin: 1rem;\\r\\n}\\r\\n\\r\\n.footer-group1 {\\r\\n    width: 260px;\\r\\n    margin-left: 140px;\\r\\n}\\r\\n.footer-descp{\\r\\n    font-size: 14px;\\r\\n    line-height: 24px;\\r\\n    margin-top: 20px;\\r\\n    color: rgba(31, 32, 65, 0.75);\\r\\n}\\r\\n\\r\\n.footer-widgets ul {\\r\\n    list-style: none;\\r\\n    margin: 20px;\\r\\n    margin-top: 0;\\r\\n    margin-left: 46px;\\r\\n}\\r\\n\\r\\n.footer-widgets ul>li {\\r\\n    margin-top: 0;\\r\\n}\\r\\n\\r\\n.footer-widgets li {\\r\\n    margin: 20px;\\r\\n\\r\\n}\\r\\n.footer-group2{\\r\\n    width: 260px;\\r\\n}\\r\\n.footer-header {\\r\\n    color: rgb(31, 32, 65);\\r\\n    font-weight: bold;\\r\\n    font-size: 12px;\\r\\n    line-height: 15px;\\r\\n\\r\\n    text-transform: uppercase;\\r\\n\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/style.css?");

/***/ })

/******/ });