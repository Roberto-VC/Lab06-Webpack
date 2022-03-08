/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/abiertoA.js":
/*!*************************!*\
  !*** ./src/abiertoA.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"este\": () => (/* binding */ este)\n/* harmony export */ });\nvar este = function este() {\n  var btn = document.getElementById(\"este\");\n  btn.addEventListener(\"click\", function () {\n    window.open(\"este.html\", \"_self\");\n  });\n};\n\n//# sourceURL=webpack://lab6/./src/abiertoA.js?");

/***/ }),

/***/ "./src/abiertoB.js":
/*!*************************!*\
  !*** ./src/abiertoB.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Assets_Celda_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assets/Celda.mp3 */ \"./src/Assets/Celda.mp3\");\n/* harmony import */ var _Assets_Celda_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assets/Celda.wav */ \"./src/Assets/Celda.wav\");\n/* harmony import */ var _Assets_Dungeon_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets/Dungeon.jpg */ \"./src/Assets/Dungeon.jpg\");\n/* harmony import */ var _abierto_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abierto.scss */ \"./src/abierto.scss\");\n/* harmony import */ var _abiertoA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abiertoA */ \"./src/abiertoA.js\");\n/* harmony import */ var _abiertoD__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abiertoD */ \"./src/abiertoD.js\");\n/* harmony import */ var _abiertoC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abiertoC */ \"./src/abiertoC.js\");\n\n\n\n\n\n\n\n\nwindow.onload = function () {\n  var x = document.createElement(\"div\");\n  x.setAttribute(\"id\", \"progreso\");\n  x.setAttribute(\"class\", \"contenedor\");\n  document.body.appendChild(x);\n  var pr = document.createElement(\"PROGRESS\");\n  pr.setAttribute(\"id\", \"ProgresoB\");\n  pr.setAttribute(\"value\", 25);\n  pr.setAttribute(\"max\", 100);\n  document.getElementById(\"progreso\").appendChild(pr);\n  var h1 = document.createElement(\"h1\");\n  h1.setAttribute = (\"id\", \"Titulo\");\n  var textNode = document.createTextNode(\"Se abre la reja\");\n  h1.appendChild(textNode);\n  document.body.appendChild(h1);\n  var h3 = document.createElement(\"h3\");\n  h3.setAttribute = (\"id\", \"Texto1\");\n  textNode = document.createTextNode(\"Abris la puerta, y salis de la celda en donde estabas, pero ahora te enuentras en la nada de un calabozo.\");\n  h3.appendChild(textNode);\n  textNode = document.createElement(\"br\");\n  h3.appendChild(textNode);\n  textNode = document.createTextNode(\"Somos libres! Bueno..., casi, necesitamos salir de aquí, ante que algo nos pase...\");\n  h3.appendChild(textNode);\n  document.body.appendChild(h3);\n  var audio = document.createElement('audio');\n  audio.id = \"Audio\";\n  audio.controls = true;\n  audio.autoplay = true;\n  document.body.appendChild(audio);\n  var source = document.createElement('source');\n  source.src = \"Assets/Celda.mp3\";\n  source.type = \"audio/ogg\";\n  document.getElementById(\"Audio\").appendChild(source);\n  document.body.appendChild(document.createElement(\"br\"));\n  var img = document.createElement('img');\n  img.alt = '';\n  img.src = 'Assets/Dungeon.jpg';\n  document.body.appendChild(img);\n  h3 = document.createElement(\"h3\");\n  h3.setAttribute = (\"id\", \"Texto2\");\n  textNode = document.createTextNode(\"Saliste, pero ahora debes de encontrar tu camino para salir de este condenado calabozo.\");\n  h3.appendChild(textNode);\n  document.body.appendChild(h3);\n  var detalles = document.createElement(\"details\");\n  detalles.setAttribute = (\"id\", \"details\");\n  var summary = document.createElement(\"summary\");\n  summary.setAttribute = (\"id\", \"summary\");\n  summary.innerHTML = \"¿A que dirección se dirijen?\";\n  var ul = document.createElement(\"ol\");\n  ul.setAttribute = (\"id\", \"decisiones\");\n  var li = document.createElement(\"li\");\n  li.setAttribute = (\"id\", \"opcion1\");\n  li.innerHTML = \"<div><button id = norte type=button >Norte</button>\";\n  ul.appendChild(li);\n  li = document.createElement(\"li\");\n  li.setAttribute = (\"id\", \"opcion2\");\n  li.innerHTML = \"<div><button id = oeste type=button >Oeste</button>\";\n  ul.appendChild(li);\n  li = document.createElement(\"li\");\n  li.setAttribute = (\"id\", \"opcion2\");\n  li.innerHTML = \"<div><button id = este type=button >Este</button>\";\n  ul.appendChild(li);\n  detalles.appendChild(summary);\n  detalles.appendChild(ul);\n  document.body.appendChild(detalles);\n  (0,_abiertoA__WEBPACK_IMPORTED_MODULE_4__.este)();\n  (0,_abiertoD__WEBPACK_IMPORTED_MODULE_5__.oeste)();\n  (0,_abiertoC__WEBPACK_IMPORTED_MODULE_6__.norte)();\n};\n\n//# sourceURL=webpack://lab6/./src/abiertoB.js?");

/***/ }),

/***/ "./src/abiertoC.js":
/*!*************************!*\
  !*** ./src/abiertoC.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"norte\": () => (/* binding */ norte)\n/* harmony export */ });\nvar norte = function norte() {\n  var btn = document.getElementById(\"norte\");\n  btn.addEventListener(\"click\", function () {\n    window.open(\"norte.html\", \"_self\");\n  });\n};\n\n//# sourceURL=webpack://lab6/./src/abiertoC.js?");

/***/ }),

/***/ "./src/abiertoD.js":
/*!*************************!*\
  !*** ./src/abiertoD.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"oeste\": () => (/* binding */ oeste)\n/* harmony export */ });\nvar oeste = function oeste() {\n  var btn = document.getElementById(\"oeste\");\n  btn.addEventListener(\"click\", function () {\n    window.open(\"oeste.html\", \"_self\");\n  });\n};\n\n//# sourceURL=webpack://lab6/./src/abiertoD.js?");

/***/ }),

/***/ "./src/Assets/Celda.mp3":
/*!******************************!*\
  !*** ./src/Assets/Celda.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Assets/Celda.mp3\");\n\n//# sourceURL=webpack://lab6/./src/Assets/Celda.mp3?");

/***/ }),

/***/ "./src/Assets/Celda.wav":
/*!******************************!*\
  !*** ./src/Assets/Celda.wav ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Assets/Celda.wav\");\n\n//# sourceURL=webpack://lab6/./src/Assets/Celda.wav?");

/***/ }),

/***/ "./src/Assets/Dungeon.jpg":
/*!********************************!*\
  !*** ./src/Assets/Dungeon.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Assets/Dungeon.jpg\");\n\n//# sourceURL=webpack://lab6/./src/Assets/Dungeon.jpg?");

/***/ }),

/***/ "./src/abierto.scss":
/*!**************************!*\
  !*** ./src/abierto.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab6/./src/abierto.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/abiertoB.js");
/******/ 	
/******/ })()
;