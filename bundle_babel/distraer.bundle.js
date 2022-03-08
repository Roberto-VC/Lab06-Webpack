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

/***/ "./src/distraerA.js":
/*!**************************!*\
  !*** ./src/distraerA.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"derecha\": () => (/* binding */ derecha)\n/* harmony export */ });\nvar derecha = function derecha() {\n  var btn = document.getElementById(\"right\");\n  btn.addEventListener(\"click\", function () {\n    window.open(\"derecha.html\", \"_self\");\n  });\n};\n\n//# sourceURL=webpack://lab6/./src/distraerA.js?");

/***/ }),

/***/ "./src/distraerB.js":
/*!**************************!*\
  !*** ./src/distraerB.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _distraer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distraer.scss */ \"./src/distraer.scss\");\n/* harmony import */ var _distraerA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distraerA */ \"./src/distraerA.js\");\n/* harmony import */ var _distraerC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distraerC */ \"./src/distraerC.js\");\n\n\n\n\nwindow.onload = function () {\n  var x = document.createElement(\"div\");\n  x.setAttribute(\"id\", \"progreso\");\n  x.setAttribute(\"class\", \"contenedor\");\n  document.body.appendChild(x);\n  var pr = document.createElement(\"PROGRESS\");\n  pr.setAttribute(\"id\", \"ProgresoB\");\n  pr.setAttribute(\"value\", 50);\n  pr.setAttribute(\"max\", 100);\n  document.getElementById(\"progreso\").appendChild(pr);\n  var h1 = document.createElement(\"h1\");\n  h1.setAttribute = (\"id\", \"Titulo\");\n  var textNode = document.createTextNode(\"Decides distraerlo\");\n  h1.appendChild(textNode);\n  document.body.appendChild(h1);\n  var h3 = document.createElement(\"h3\");\n  h3.setAttribute = (\"id\", \"Texto1\");\n  textNode = document.createTextNode(\"Decides distraer al monstruo\");\n  h3.appendChild(textNode);\n  textNode = document.createElement(\"br\");\n  h3.appendChild(textNode);\n  textNode = document.createTextNode(\"Agarras esa roca y la tiras hacia la dirección del minotauro..\");\n  h3.appendChild(textNode);\n  textNode = document.createElement(\"br\");\n  h3.appendChild(textNode);\n  textNode = document.createTextNode(\"'Hm...?' El minotauro se mueve en aquella dirección, dejantote a ti y a Ana solos.\");\n  h3.appendChild(textNode);\n  textNode = document.createElement(\"br\");\n  h3.appendChild(textNode);\n  textNode = document.createTextNode('\"Gracias que ya se fue.\" Dice Ana. \"Hey! Mira lo que esta en el piso!\"');\n  h3.appendChild(textNode);\n  textNode = document.createElement(\"br\");\n  h3.appendChild(textNode);\n  textNode = document.createTextNode(\"En el suelo, encuentras una \");\n  h3.appendChild(textNode);\n  var b = document.createElement(\"b\");\n  var i = document.createElement(\"i\");\n  textNode = document.createTextNode('llave');\n  i.appendChild(textNode);\n  b.appendChild(i);\n  h3.appendChild(b);\n  textNode = document.createTextNode(', más grande a comparación de la que esta en la celda.');\n  h3.appendChild(textNode);\n  textNode = document.createElement(\"br\");\n  h3.appendChild(textNode);\n  textNode = document.createTextNode('\"Tal vez nos ayude! Vamos\"');\n  h3.appendChild(textNode);\n  document.body.appendChild(h3);\n  var detalles = document.createElement(\"details\");\n  detalles.setAttribute = (\"id\", \"details\");\n  var summary = document.createElement(\"summary\");\n  summary.setAttribute = (\"id\", \"summary\");\n  summary.innerHTML = \"En que dirección te dirijes?\";\n  var ul = document.createElement(\"ol\");\n  ul.setAttribute = (\"id\", \"decisiones\");\n  var li = document.createElement(\"li\");\n  li.setAttribute = (\"id\", \"opcion1\");\n  li.innerHTML = \"<div><button id = left type=button>Izquierda</button>\";\n  ul.appendChild(li);\n  li = document.createElement(\"li\");\n  li.setAttribute = (\"id\", \"opcion2\");\n  li.innerHTML = \"<div><button id = right type=button>Derecha</button>\";\n  ul.appendChild(li);\n  detalles.appendChild(summary);\n  detalles.appendChild(ul);\n  document.body.appendChild(detalles);\n  (0,_distraerA__WEBPACK_IMPORTED_MODULE_1__.derecha)();\n  (0,_distraerC__WEBPACK_IMPORTED_MODULE_2__.izquierda)();\n};\n\n//# sourceURL=webpack://lab6/./src/distraerB.js?");

/***/ }),

/***/ "./src/distraerC.js":
/*!**************************!*\
  !*** ./src/distraerC.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"izquierda\": () => (/* binding */ izquierda)\n/* harmony export */ });\nvar izquierda = function izquierda() {\n  var btn = document.getElementById(\"left\");\n  btn.addEventListener(\"click\", function () {\n    window.open(\"izquierda.html\", \"_self\");\n  });\n};\n\n//# sourceURL=webpack://lab6/./src/distraerC.js?");

/***/ }),

/***/ "./src/distraer.scss":
/*!***************************!*\
  !*** ./src/distraer.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab6/./src/distraer.scss?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/distraerB.js");
/******/ 	
/******/ })()
;