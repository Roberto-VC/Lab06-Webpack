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

/***/ "./src/esteA.js":
/*!**********************!*\
  !*** ./src/esteA.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _este_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./este.scss */ \"./src/este.scss\");\n/* harmony import */ var _esteB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esteB */ \"./src/esteB.js\");\n \r\n\r\nwindow.onload = function(){\r\n    let x = document.createElement(\"div\");\r\n    x.setAttribute(\"id\", \"progreso\");\r\n    x.setAttribute(\"class\", \"contenedor\");\r\n    document.body.appendChild(x);\r\n    let pr = document.createElement(\"PROGRESS\");\r\n    pr.setAttribute(\"id\", \"ProgresoB\");\r\n    pr.setAttribute(\"value\", 25);\r\n    pr.setAttribute(\"max\", 100);\r\n    document.getElementById(\"progreso\").appendChild(pr);\r\n    let h1 = document.createElement(\"h1\");\r\n    h1.setAttribute = (\"id\", \"Titulo\");\r\n    let textNode = document.createTextNode(\"Giras a la derecha y caminas para el este\");\r\n    h1.appendChild(textNode);\r\n    document.body.appendChild(h1);\r\n    let h3 = document.createElement(\"h3\");\r\n    h3.setAttribute = (\"id\", \"Texto1\");\r\n    textNode = document.createTextNode(\"Caminas para el este y sigues recto, pero al seguir caminando, descubrees que realmente no lleva a ninguna parte.\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode('Solo hay una pared. \"Hay que volver a donde estabamos.\" Te dice Ana.');\r\n    h3.appendChild(textNode);\r\n    document.body.appendChild(h3);\r\n    var img = document.createElement('img'); \r\n    img.alt = '';\r\n    img.src = 'Assets/pared.jpg'; \r\n\tdocument.body.appendChild(img);\r\n    let detalles = document.createElement(\"details\");\r\n    detalles.setAttribute = (\"id\", \"details\");\r\n    let summary = document.createElement(\"summary\");\r\n    summary.setAttribute = (\"id\", \"summary\");\r\n    summary.innerHTML = \"¿A que dirección se dirijen?\";\r\n    let ul = document.createElement(\"ul\");\r\n    ul.setAttribute = (\"id\", \"decisiones\");\r\n    let li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion1\");\r\n    li.innerHTML = \"<div><button id = celda type=button>Volver</button>\"\r\n    ul.appendChild(li);\r\n    detalles.appendChild(summary);\r\n    detalles.appendChild(ul);\r\n    document.body.appendChild(detalles);\r\n    (0,_esteB__WEBPACK_IMPORTED_MODULE_1__.cambio)();\r\n};\r\n\r\n\n\n//# sourceURL=webpack://lab6/./src/esteA.js?");

/***/ }),

/***/ "./src/esteB.js":
/*!**********************!*\
  !*** ./src/esteB.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cambio\": () => (/* binding */ cambio)\n/* harmony export */ });\n\r\nconst cambio = () => {\r\n    var btn = document.getElementById(\"celda\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"celda.html\", \"_self\");\r\n    });\r\n}\n\n//# sourceURL=webpack://lab6/./src/esteB.js?");

/***/ }),

/***/ "./src/este.scss":
/*!***********************!*\
  !*** ./src/este.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab6/./src/este.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/esteA.js");
/******/ 	
/******/ })()
;