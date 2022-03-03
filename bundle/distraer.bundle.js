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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"derecha\": () => (/* binding */ derecha)\n/* harmony export */ });\n\r\n\r\nconst derecha = () => {\r\n    var btn = document.getElementById(\"right\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"derecha.html\", \"_self\");\r\n    });\r\n}\n\n//# sourceURL=webpack://lab6/./src/distraerA.js?");

/***/ }),

/***/ "./src/distraerB.js":
/*!**************************!*\
  !*** ./src/distraerB.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _distraer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distraer.scss */ \"./src/distraer.scss\");\n/* harmony import */ var _distraerA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distraerA */ \"./src/distraerA.js\");\n/* harmony import */ var _distraerC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distraerC */ \"./src/distraerC.js\");\n \r\n\r\n\r\nwindow.onload = function(){\r\n    let x = document.createElement(\"div\");\r\n    x.setAttribute(\"id\", \"progreso\");\r\n    x.setAttribute(\"class\", \"contenedor\");\r\n    document.body.appendChild(x);\r\n    let pr = document.createElement(\"PROGRESS\");\r\n    pr.setAttribute(\"id\", \"ProgresoB\");\r\n    pr.setAttribute(\"value\", 50);\r\n    pr.setAttribute(\"max\", 100);\r\n    document.getElementById(\"progreso\").appendChild(pr);\r\n    let h1 = document.createElement(\"h1\");\r\n    h1.setAttribute = (\"id\", \"Titulo\");\r\n    let textNode = document.createTextNode(\"Decides distraerlo\");\r\n    h1.appendChild(textNode);\r\n    document.body.appendChild(h1);\r\n    let h3 = document.createElement(\"h3\");\r\n    h3.setAttribute = (\"id\", \"Texto1\");\r\n    textNode = document.createTextNode(\"Decides distraer al monstruo\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"Agarras esa roca y la tiras hacia la dirección del minotauro..\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"'Hm...?' El minotauro se mueve en aquella dirección, dejantote a ti y a Ana solos.\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode('\"Gracias que ya se fue.\" Dice Ana. \"Hey! Mira lo que esta en el piso!\"');\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"En el suelo, encuentras una \");\r\n    h3.appendChild(textNode);\r\n    let b = document.createElement(\"b\");\r\n    let i = document.createElement(\"i\");\r\n    textNode = document.createTextNode('llave');\r\n    i.appendChild(textNode);\r\n    b.appendChild(i);\r\n    h3.appendChild(b);\r\n    textNode = document.createTextNode(', más grande a comparación de la que esta en la celda.');\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode('\"Tal vez nos ayude! Vamos\"');\r\n    h3.appendChild(textNode);\r\n    document.body.appendChild(h3);\r\n    let detalles = document.createElement(\"details\");\r\n    detalles.setAttribute = (\"id\", \"details\");\r\n    let summary = document.createElement(\"summary\");\r\n    summary.setAttribute = (\"id\", \"summary\");\r\n    summary.innerHTML = \"En que dirección te dirijes?\";\r\n    let ul = document.createElement(\"ol\");\r\n    ul.setAttribute = (\"id\", \"decisiones\");\r\n    let li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion1\");\r\n    li.innerHTML = \"<div><button id = left type=button>Izquierda</button>\"\r\n    ul.appendChild(li);\r\n    li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion2\");\r\n    li.innerHTML = \"<div><button id = right type=button>Derecha</button>\"\r\n    ul.appendChild(li);\r\n    detalles.appendChild(summary);\r\n    detalles.appendChild(ul);\r\n    document.body.appendChild(detalles);\r\n    (0,_distraerA__WEBPACK_IMPORTED_MODULE_1__.derecha)();\r\n    (0,_distraerC__WEBPACK_IMPORTED_MODULE_2__.izquierda)();\r\n\r\n\r\n    \r\n\r\n\t\r\n\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack://lab6/./src/distraerB.js?");

/***/ }),

/***/ "./src/distraerC.js":
/*!**************************!*\
  !*** ./src/distraerC.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"izquierda\": () => (/* binding */ izquierda)\n/* harmony export */ });\n\r\nconst izquierda = () => {\r\n    var btn = document.getElementById(\"left\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"izquierda.html\", \"_self\");\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://lab6/./src/distraerC.js?");

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