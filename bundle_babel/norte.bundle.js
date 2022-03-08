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

/***/ "./src/norteA.js":
/*!***********************!*\
  !*** ./src/norteA.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nadar\": () => (/* binding */ nadar)\n/* harmony export */ });\nvar nadar = function nadar() {\n  var btn = document.getElementById(\"nadar\");\n  btn.addEventListener(\"click\", function () {\n    window.open(\"nadar.html\", \"_self\");\n  });\n};\n\n//# sourceURL=webpack://lab6/./src/norteA.js?");

/***/ }),

/***/ "./src/norteB.js":
/*!***********************!*\
  !*** ./src/norteB.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _norte_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./norte.scss */ \"./src/norte.scss\");\n/* harmony import */ var _norteA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./norteA */ \"./src/norteA.js\");\n/* harmony import */ var _norteC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./norteC */ \"./src/norteC.js\");\n/* harmony import */ var _norteD__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./norteD */ \"./src/norteD.js\");\n\n\n\n\n\nwindow.onload = function () {\n  var x = document.createElement(\"div\");\n  x.setAttribute(\"id\", \"progreso\");\n  x.setAttribute(\"class\", \"contenedor\");\n  document.body.appendChild(x);\n  var pr = document.createElement(\"PROGRESS\");\n  pr.setAttribute(\"id\", \"ProgresoB\");\n  pr.setAttribute(\"value\", 25);\n  pr.setAttribute(\"max\", 100);\n  document.getElementById(\"progreso\").appendChild(pr);\n  var h1 = document.createElement(\"h1\");\n  h1.setAttribute = (\"id\", \"Titulo\");\n  var textNode = document.createTextNode(\"Caminas hacia adelante en el calabozo\");\n  h1.appendChild(textNode);\n  document.body.appendChild(h1);\n  var h3 = document.createElement(\"h3\");\n  h3.setAttribute = (\"id\", \"Texto1\");\n  textNode = document.createTextNode(\"En el calabozo, sigues caminando recto, mirando al tu alrededor, preguntando en donde estas.\");\n  h3.appendChild(textNode);\n  textNode = document.createElement(\"br\");\n  h3.appendChild(textNode);\n  textNode = document.createTextNode(\"Justo entonces, te das cuenta que escuchas algo, como si fuera un río, una corriente de agua en alguna parte\");\n  h3.appendChild(textNode);\n  textNode = document.createElement(\"br\");\n  h3.appendChild(textNode);\n  textNode = document.createTextNode(\"Ahí es cuenado vez en frente que hay una corriente de agua en frente de tí, y en el otro lado.\");\n  h3.appendChild(textNode);\n  document.body.appendChild(h3);\n  document.body.appendChild(document.createElement(\"br\"));\n  var img = document.createElement('img');\n  img.alt = '';\n  img.src = 'Assets/rio.jpg';\n  document.body.appendChild(img);\n  h3 = document.createElement(\"h3\");\n  h3.setAttribute = (\"id\", \"Texto1\");\n  textNode = document.createTextNode('\"Como vamos a cruzar para el otro lado?\" Pregunta Ana. Miras al tu alrededor para ver que podes hacer.\"');\n  h3.appendChild(textNode);\n  document.body.appendChild(h3);\n  var detalles = document.createElement(\"details\");\n  detalles.setAttribute = (\"id\", \"details\");\n  var summary = document.createElement(\"summary\");\n  summary.setAttribute = (\"id\", \"summary\");\n  summary.innerHTML = \"¿Que decides hacer?\";\n  var ul = document.createElement(\"ol\");\n  ul.setAttribute = (\"id\", \"decisiones\");\n  var li = document.createElement(\"li\");\n  li.setAttribute = (\"id\", \"opcion1\");\n  li.innerHTML = \"<div><button id = nadar type=button>Nadar</button>\";\n  ul.appendChild(li);\n  li = document.createElement(\"li\");\n  li.setAttribute = (\"id\", \"opcion2\");\n  li.innerHTML = \"<div><button id = alrededor type=button>Mirar a tu alrededor</button>\";\n  ul.appendChild(li);\n  li = document.createElement(\"li\");\n  li.setAttribute = (\"id\", \"opcion2\");\n  li.innerHTML = \"<div><button id = volver type=button>Volver a donde estabas</button>\";\n  ul.appendChild(li);\n  detalles.appendChild(summary);\n  detalles.appendChild(ul);\n  document.body.appendChild(detalles);\n  (0,_norteA__WEBPACK_IMPORTED_MODULE_1__.nadar)();\n  (0,_norteC__WEBPACK_IMPORTED_MODULE_2__.celda)();\n  (0,_norteD__WEBPACK_IMPORTED_MODULE_3__.alrededor)();\n};\n\n//# sourceURL=webpack://lab6/./src/norteB.js?");

/***/ }),

/***/ "./src/norteC.js":
/*!***********************!*\
  !*** ./src/norteC.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"celda\": () => (/* binding */ celda)\n/* harmony export */ });\nvar celda = function celda() {\n  var btn = document.getElementById(\"volver\");\n  btn.addEventListener(\"click\", function () {\n    window.open(\"celda.html\", \"_self\");\n  });\n};\n\n//# sourceURL=webpack://lab6/./src/norteC.js?");

/***/ }),

/***/ "./src/norteD.js":
/*!***********************!*\
  !*** ./src/norteD.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"alrededor\": () => (/* binding */ alrededor)\n/* harmony export */ });\nvar alrededor = function alrededor() {\n  var btn = document.getElementById(\"alrededor\");\n  btn.addEventListener(\"click\", function () {\n    window.open(\"alrededor.html\", \"_self\");\n  });\n};\n\n//# sourceURL=webpack://lab6/./src/norteD.js?");

/***/ }),

/***/ "./src/norte.scss":
/*!************************!*\
  !*** ./src/norte.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab6/./src/norte.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/norteB.js");
/******/ 	
/******/ })()
;