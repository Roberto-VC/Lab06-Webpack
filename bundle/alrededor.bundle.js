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

/***/ "./src/alrededorA.js":
/*!***************************!*\
  !*** ./src/alrededorA.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ahogar\": () => (/* binding */ ahogar)\n/* harmony export */ });\n\r\nconst ahogar = () => {\r\n    var btn = document.getElementById(\"agua\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"ahogar.html\", \"_self\");\r\n    })\r\n}\n\n//# sourceURL=webpack://lab6/./src/alrededorA.js?");

/***/ }),

/***/ "./src/alrededorB.js":
/*!***************************!*\
  !*** ./src/alrededorB.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _alrededor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alrededor.scss */ \"./src/alrededor.scss\");\n/* harmony import */ var _alrededorA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alrededorA */ \"./src/alrededorA.js\");\n/* harmony import */ var _alrededorC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alrededorC */ \"./src/alrededorC.js\");\n \r\n\r\n\r\nwindow.onload = function(){\r\n    let x = document.createElement(\"div\");\r\n    x.setAttribute(\"id\", \"progreso\");\r\n    x.setAttribute(\"class\", \"contenedor\");\r\n    document.body.appendChild(x);\r\n    let pr = document.createElement(\"PROGRESS\");\r\n    pr.setAttribute(\"id\", \"ProgresoB\");\r\n    pr.setAttribute(\"value\", 50);\r\n    pr.setAttribute(\"max\", 100);\r\n    document.getElementById(\"progreso\").appendChild(pr);\r\n    let h1 = document.createElement(\"h1\");\r\n    h1.setAttribute = (\"id\", \"Titulo\");\r\n    let textNode = document.createTextNode(\"Decides investigar a tu alrededor\");\r\n    h1.appendChild(textNode);\r\n    document.body.appendChild(h1);\r\n    let h3 = document.createElement(\"h3\");\r\n    h3.setAttribute = (\"id\", \"Texto1\");\r\n    textNode = document.createTextNode(\"Miras al rededor si hay algo que te ayuda a cruzar al otro lado del agua\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"Ahí te encuentras con bote que estas ahí. Agarras ese bote, y lo empujas\");\r\n    h3.appendChild(textNode);\r\n    document.body.appendChild(h3);\r\n    document.body.appendChild(document.createElement(\"br\"));\r\n    var img = document.createElement('img'); \r\n    img.alt = '';\r\n    img.src = 'Assets/bote.jpg'; \r\n\tdocument.body.appendChild(img);\r\n    h3 = document.createElement(\"h3\");\r\n    h3.setAttribute = (\"id\", \"Texto1\");\r\n    textNode = document.createTextNode(\"Al subirte de al bote, te mueves al otro, pero al llegar a la mitad, sientes mover el bote.\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"Escuchas una voz cantando hermosa viniendo del agua.\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"'Que voz más hermosa...' dice Ana\");\r\n    h3.appendChild(textNode);\r\n    document.body.appendChild(h3);\r\n    var audio = document.createElement('audio');\r\n    audio.id = \"Audio\"; \r\n    audio.controls = true;\r\n    audio.autoplay = true;\r\n    document.body.appendChild(audio);\r\n    var source = document.createElement('source');\r\n    source.src = \"Assets/cantar.mp3\";\r\n    source.type = \"audio/ogg\";\r\n    document.getElementById(\"Audio\").appendChild(source);\r\n    document.body.appendChild(document.createElement(\"br\"));\r\n    let detalles = document.createElement(\"details\");\r\n    detalles.setAttribute = (\"id\", \"details\");\r\n    let summary = document.createElement(\"summary\");\r\n    summary.setAttribute = (\"id\", \"summary\");\r\n    summary.innerHTML = \"¿Que decides hacer?\";\r\n    let ul = document.createElement(\"ol\");\r\n    ul.setAttribute = (\"id\", \"decisiones\");\r\n    let li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion1\");\r\n    li.innerHTML = \"<div><button id = agua type=button>Mirar al agua</button>\"\r\n    ul.appendChild(li);\r\n    li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion2\");\r\n    li.innerHTML =\"<div><button id = ignorar type=button>Ignorar y seguir adelante</button>\"\r\n    ul.appendChild(li);\r\n    li = document.createElement(\"li\");\r\n    detalles.appendChild(summary);\r\n    detalles.appendChild(ul);\r\n    document.body.appendChild(detalles);\r\n    (0,_alrededorA__WEBPACK_IMPORTED_MODULE_1__.ahogar)();\r\n    (0,_alrededorC__WEBPACK_IMPORTED_MODULE_2__.ignorar)();\r\n\r\n\r\n    \r\n\r\n\t\r\n\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack://lab6/./src/alrededorB.js?");

/***/ }),

/***/ "./src/alrededorC.js":
/*!***************************!*\
  !*** ./src/alrededorC.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ignorar\": () => (/* binding */ ignorar)\n/* harmony export */ });\n\r\nconst ignorar = () => {\r\n    var btn = document.getElementById(\"ignorar\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"ignorar.html\", \"_self\");\r\n    });\r\n}\n\n//# sourceURL=webpack://lab6/./src/alrededorC.js?");

/***/ }),

/***/ "./src/alrededor.scss":
/*!****************************!*\
  !*** ./src/alrededor.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab6/./src/alrededor.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/alrededorB.js");
/******/ 	
/******/ })()
;