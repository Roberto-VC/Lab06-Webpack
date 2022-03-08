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

/***/ "./src/derechaA.js":
/*!*************************!*\
  !*** ./src/derechaA.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Assets_salida4_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assets/salida4.jpg */ \"./src/Assets/salida4.jpg\");\n/* harmony import */ var _derecha_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./derecha.scss */ \"./src/derecha.scss\");\n/* harmony import */ var _derechaB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./derechaB */ \"./src/derechaB.js\");\n\n\n\n\nwindow.onload = function () {\n  var x = document.createElement(\"div\");\n  x.setAttribute(\"id\", \"progreso\");\n  x.setAttribute(\"class\", \"contenedor\");\n  document.body.appendChild(x);\n  var pr = document.createElement(\"PROGRESS\");\n  pr.setAttribute(\"id\", \"ProgresoB\");\n  pr.setAttribute(\"value\", 75);\n  pr.setAttribute(\"max\", 100);\n  document.getElementById(\"progreso\").appendChild(pr);\n  var h1 = document.createElement(\"h1\");\n  h1.setAttribute = (\"id\", \"Titulo\");\n  var textNode = document.createTextNode(\"Giras a la derecha\");\n  h1.appendChild(textNode);\n  document.body.appendChild(h1);\n  var h3 = document.createElement(\"h3\");\n  h3.setAttribute = (\"id\", \"Texto1\");\n  textNode = document.createTextNode(\"De las dos direcciones, giras para la derecha, y te dirijes en esa dirección. \");\n  h3.appendChild(textNode);\n  textNode = document.createElement(\"br\");\n  h3.appendChild(textNode);\n  textNode = document.createTextNode(\"Sigues directo y encuentras otra reja, más grande.\");\n  h3.appendChild(textNode);\n  document.body.appendChild(h3);\n  document.body.appendChild(document.createElement(\"br\"));\n  var img = document.createElement('img');\n  img.alt = '';\n  img.src = _Assets_salida4_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  document.body.appendChild(img);\n  h3 = document.createElement(\"h3\");\n  h3.setAttribute = (\"id\", \"Texto2\");\n  textNode = document.createTextNode(\"Ahí se te ocurre usar la llave que encontraste en el piso, así que la agarras y la usas \");\n  h3.appendChild(textNode);\n  textNode = document.createElement(\"br\");\n  h3.appendChild(textNode);\n  textNode = document.createTextNode(\"Abrís la rejas, y pasa al otro lado. Ahí enuenctras una puerta. Y la abres.\");\n  h3.appendChild(textNode);\n  document.body.appendChild(h3);\n  var detalles = document.createElement(\"details\");\n  detalles.setAttribute = (\"id\", \"details\");\n  var summary = document.createElement(\"summary\");\n  summary.setAttribute = (\"id\", \"summary\");\n  summary.innerHTML = \"Epilogo\";\n  var ul = document.createElement(\"ul\");\n  ul.setAttribute = (\"id\", \"decisiones\");\n  var li = document.createElement(\"li\");\n  li.setAttribute = (\"id\", \"opcion1\");\n  li.innerHTML = \"<div><button id = epilogo type=button onclick>Epilogo</button>\";\n  ul.appendChild(li);\n  detalles.appendChild(summary);\n  detalles.appendChild(ul);\n  document.body.appendChild(detalles);\n  (0,_derechaB__WEBPACK_IMPORTED_MODULE_2__.cambio)();\n};\n\n//# sourceURL=webpack://lab6/./src/derechaA.js?");

/***/ }),

/***/ "./src/derechaB.js":
/*!*************************!*\
  !*** ./src/derechaB.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cambio\": () => (/* binding */ cambio)\n/* harmony export */ });\nvar cambio = function cambio() {\n  var btn = document.getElementById(\"epilogo\");\n  btn.addEventListener(\"click\", function () {\n    window.open(\"muerte.html\", \"_self\");\n  });\n};\n\n//# sourceURL=webpack://lab6/./src/derechaB.js?");

/***/ }),

/***/ "./src/Assets/salida4.jpg":
/*!********************************!*\
  !*** ./src/Assets/salida4.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Assets/salida4.jpg\");\n\n//# sourceURL=webpack://lab6/./src/Assets/salida4.jpg?");

/***/ }),

/***/ "./src/derecha.scss":
/*!**************************!*\
  !*** ./src/derecha.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab6/./src/derecha.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/derechaA.js");
/******/ 	
/******/ })()
;