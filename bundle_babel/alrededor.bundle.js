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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ahogar\": () => (/* binding */ ahogar)\n/* harmony export */ });\nvar ahogar = function ahogar() {\n  var btn = document.getElementById(\"agua\");\n  btn.addEventListener(\"click\", function () {\n    window.open(\"ahogar.html\", \"_self\");\n  });\n};\n\n//# sourceURL=webpack://lab6/./src/alrededorA.js?");

/***/ }),

/***/ "./src/alrededorB.js":
/*!***************************!*\
  !*** ./src/alrededorB.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _alrededor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alrededor.scss */ \"./src/alrededor.scss\");\n/* harmony import */ var _alrededorA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alrededorA */ \"./src/alrededorA.js\");\n/* harmony import */ var _alrededorC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alrededorC */ \"./src/alrededorC.js\");\n\n\n\n\nwindow.onload = function () {\n  var x = document.createElement(\"div\");\n  x.setAttribute(\"id\", \"progreso\");\n  x.setAttribute(\"class\", \"contenedor\");\n  document.body.appendChild(x);\n  var pr = document.createElement(\"PROGRESS\");\n  pr.setAttribute(\"id\", \"ProgresoB\");\n  pr.setAttribute(\"value\", 50);\n  pr.setAttribute(\"max\", 100);\n  document.getElementById(\"progreso\").appendChild(pr);\n  var h1 = document.createElement(\"h1\");\n  h1.setAttribute = (\"id\", \"Titulo\");\n  var textNode = document.createTextNode(\"Decides investigar a tu alrededor\");\n  h1.appendChild(textNode);\n  document.body.appendChild(h1);\n  var h3 = document.createElement(\"h3\");\n  h3.setAttribute = (\"id\", \"Texto1\");\n  textNode = document.createTextNode(\"Miras al rededor si hay algo que te ayuda a cruzar al otro lado del agua\");\n  h3.appendChild(textNode);\n  textNode = document.createElement(\"br\");\n  h3.appendChild(textNode);\n  textNode = document.createTextNode(\"Ahí te encuentras con bote que estas ahí. Agarras ese bote, y lo empujas\");\n  h3.appendChild(textNode);\n  document.body.appendChild(h3);\n  document.body.appendChild(document.createElement(\"br\"));\n  var img = document.createElement('img');\n  img.alt = '';\n  img.src = 'Assets/bote.jpg';\n  document.body.appendChild(img);\n  h3 = document.createElement(\"h3\");\n  h3.setAttribute = (\"id\", \"Texto1\");\n  textNode = document.createTextNode(\"Al subirte de al bote, te mueves al otro, pero al llegar a la mitad, sientes mover el bote.\");\n  h3.appendChild(textNode);\n  textNode = document.createElement(\"br\");\n  h3.appendChild(textNode);\n  textNode = document.createTextNode(\"Escuchas una voz cantando hermosa viniendo del agua.\");\n  h3.appendChild(textNode);\n  textNode = document.createElement(\"br\");\n  h3.appendChild(textNode);\n  textNode = document.createTextNode(\"'Que voz más hermosa...' dice Ana\");\n  h3.appendChild(textNode);\n  document.body.appendChild(h3);\n  var audio = document.createElement('audio');\n  audio.id = \"Audio\";\n  audio.controls = true;\n  audio.autoplay = true;\n  document.body.appendChild(audio);\n  var source = document.createElement('source');\n  source.src = \"Assets/cantar.mp3\";\n  source.type = \"audio/ogg\";\n  document.getElementById(\"Audio\").appendChild(source);\n  document.body.appendChild(document.createElement(\"br\"));\n  var detalles = document.createElement(\"details\");\n  detalles.setAttribute = (\"id\", \"details\");\n  var summary = document.createElement(\"summary\");\n  summary.setAttribute = (\"id\", \"summary\");\n  summary.innerHTML = \"¿Que decides hacer?\";\n  var ul = document.createElement(\"ol\");\n  ul.setAttribute = (\"id\", \"decisiones\");\n  var li = document.createElement(\"li\");\n  li.setAttribute = (\"id\", \"opcion1\");\n  li.innerHTML = \"<div><button id = agua type=button>Mirar al agua</button>\";\n  ul.appendChild(li);\n  li = document.createElement(\"li\");\n  li.setAttribute = (\"id\", \"opcion2\");\n  li.innerHTML = \"<div><button id = ignorar type=button>Ignorar y seguir adelante</button>\";\n  ul.appendChild(li);\n  li = document.createElement(\"li\");\n  detalles.appendChild(summary);\n  detalles.appendChild(ul);\n  document.body.appendChild(detalles);\n  (0,_alrededorA__WEBPACK_IMPORTED_MODULE_1__.ahogar)();\n  (0,_alrededorC__WEBPACK_IMPORTED_MODULE_2__.ignorar)();\n};\n\n//# sourceURL=webpack://lab6/./src/alrededorB.js?");

/***/ }),

/***/ "./src/alrededorC.js":
/*!***************************!*\
  !*** ./src/alrededorC.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ignorar\": () => (/* binding */ ignorar)\n/* harmony export */ });\nvar ignorar = function ignorar() {\n  var btn = document.getElementById(\"ignorar\");\n  btn.addEventListener(\"click\", function () {\n    window.open(\"ignorar.html\", \"_self\");\n  });\n};\n\n//# sourceURL=webpack://lab6/./src/alrededorC.js?");

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