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

/***/ "./src/hadaA.js":
/*!**********************!*\
  !*** ./src/hadaA.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hada_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hada.scss */ \"./src/hada.scss\");\n/* harmony import */ var _hadaB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hadaB */ \"./src/hadaB.js\");\n/* harmony import */ var _hadaC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hadaC */ \"./src/hadaC.js\");\n \r\n\r\n\r\nwindow.onload = function(){\r\n    let x = document.createElement(\"div\");\r\n    x.setAttribute(\"id\", \"progreso\");\r\n    x.setAttribute(\"class\", \"contenedor\");\r\n    document.body.appendChild(x);\r\n    let pr = document.createElement(\"PROGRESS\");\r\n    pr.setAttribute(\"id\", \"ProgresoB\");\r\n    pr.setAttribute(\"value\", 0);\r\n    document.getElementById(\"progreso\").appendChild(pr);\r\n    let h1 = document.createElement(\"h1\");\r\n    h1.setAttribute = (\"id\", \"Titulo\");\r\n    let textNode = document.createTextNode(\"Y ves en contacto a un hada\");\r\n    h1.appendChild(textNode);\r\n    document.body.appendChild(h1);\r\n    let h3 = document.createElement(\"h3\");\r\n    h3.setAttribute = (\"id\", \"Texto1\");\r\n    textNode = document.createTextNode(\"Finalmente despertaste! Estaba muy preocupado por tí.\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"El hada estaba viendote direactemene.\");\r\n    h3.appendChild(textNode);\r\n    document.body.appendChild(h3);\r\n    var img = document.createElement('img'); \r\n    img.alt = '';\r\n    img.src = 'Assets/Hadita.png'; \r\n\tdocument.body.appendChild(img);\r\n    h3 = document.createElement(\"h3\");\r\n    h3.setAttribute = (\"id\", \"Texto2\");\r\n    textNode = document.createTextNode(\"Me llamo Ana. Desperte contigo en este lugar, y no se que paso y por que estamos aquí!\");\r\n    h3.appendChild(textNode);\r\n    document.body.appendChild(h3);\r\n    img = document.createElement('img'); \r\n    img.alt = '';\r\n    img.src = 'Assets/Calabozo.jpg'; \r\n\tdocument.body.appendChild(img);\r\n    h3 = document.createElement(\"h3\");\r\n    h3.setAttribute = (\"id\", \"Texto3\");\r\n    document.body.appendChild(h3);\r\n    textNode = document.createTextNode(\"No tengo idea en donde estamos, y tenemos que salir de aquí! Tal vez tu puedes hacer algo?\");\r\n    h3.appendChild(textNode);\r\n    let detalles = document.createElement(\"details\");\r\n    detalles.setAttribute = (\"id\", \"details\");\r\n    let summary = document.createElement(\"summary\");\r\n    summary.setAttribute = (\"id\", \"summary\");\r\n    summary.innerHTML = \"¿Que eliges hacer?\";\r\n    let ul = document.createElement(\"ol\");\r\n    ul.setAttribute = (\"id\", \"decisiones\");\r\n    let li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion1\");\r\n    li.innerHTML = \"<div><button id = fuerza type=button>Usar fuerza bruta</button>\"\r\n    ul.appendChild(li);\r\n    li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion2\");\r\n    li.innerHTML = \"<div><button id = buscar type=button>Buscar algo para abrir la reja</button>\"\r\n    ul.appendChild(li);\r\n    detalles.appendChild(summary);\r\n    detalles.appendChild(ul);\r\n    document.body.appendChild(detalles);\r\n    (0,_hadaB__WEBPACK_IMPORTED_MODULE_1__.fuerza)();\r\n    (0,_hadaC__WEBPACK_IMPORTED_MODULE_2__.buscar)();\r\n\r\n    \r\n\r\n\t\r\n\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack://lab6/./src/hadaA.js?");

/***/ }),

/***/ "./src/hadaB.js":
/*!**********************!*\
  !*** ./src/hadaB.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fuerza\": () => (/* binding */ fuerza)\n/* harmony export */ });\n\r\n\r\nconst fuerza = () => {\r\n    var btn = document.getElementById(\"fuerza\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"fuerza.html\", \"_self\");\r\n    });\r\n}\n\n//# sourceURL=webpack://lab6/./src/hadaB.js?");

/***/ }),

/***/ "./src/hadaC.js":
/*!**********************!*\
  !*** ./src/hadaC.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buscar\": () => (/* binding */ buscar)\n/* harmony export */ });\n\r\n\r\nconst buscar = () => {\r\n    var btn = document.getElementById(\"buscar\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"buscar.html\", \"_self\");\r\n    });\r\n}\n\n//# sourceURL=webpack://lab6/./src/hadaC.js?");

/***/ }),

/***/ "./src/hada.scss":
/*!***********************!*\
  !*** ./src/hada.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab6/./src/hada.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/hadaA.js");
/******/ 	
/******/ })()
;