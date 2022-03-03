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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nadar\": () => (/* binding */ nadar)\n/* harmony export */ });\n\r\n\r\nconst nadar = () => {\r\n    var btn = document.getElementById(\"nadar\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"nadar.html\", \"_self\");\r\n    });\r\n}\n\n//# sourceURL=webpack://lab6/./src/norteA.js?");

/***/ }),

/***/ "./src/norteB.js":
/*!***********************!*\
  !*** ./src/norteB.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _norte_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./norte.scss */ \"./src/norte.scss\");\n/* harmony import */ var _norteA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./norteA */ \"./src/norteA.js\");\n/* harmony import */ var _norteC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./norteC */ \"./src/norteC.js\");\n/* harmony import */ var _norteD__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./norteD */ \"./src/norteD.js\");\n \r\n\r\n\r\n\r\nwindow.onload = function(){\r\n    let x = document.createElement(\"div\");\r\n    x.setAttribute(\"id\", \"progreso\");\r\n    x.setAttribute(\"class\", \"contenedor\");\r\n    document.body.appendChild(x);\r\n    let pr = document.createElement(\"PROGRESS\");\r\n    pr.setAttribute(\"id\", \"ProgresoB\");\r\n    pr.setAttribute(\"value\", 25);\r\n    pr.setAttribute(\"max\", 100);\r\n    document.getElementById(\"progreso\").appendChild(pr);\r\n    let h1 = document.createElement(\"h1\");\r\n    h1.setAttribute = (\"id\", \"Titulo\");\r\n    let textNode = document.createTextNode(\"Caminas hacia adelante en el calabozo\");\r\n    h1.appendChild(textNode);\r\n    document.body.appendChild(h1);\r\n    let h3 = document.createElement(\"h3\");\r\n    h3.setAttribute = (\"id\", \"Texto1\");\r\n    textNode = document.createTextNode(\"En el calabozo, sigues caminando recto, mirando al tu alrededor, preguntando en donde estas.\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"Justo entonces, te das cuenta que escuchas algo, como si fuera un río, una corriente de agua en alguna parte\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"Ahí es cuenado vez en frente que hay una corriente de agua en frente de tí, y en el otro lado.\");\r\n    h3.appendChild(textNode);\r\n    document.body.appendChild(h3);\r\n    document.body.appendChild(document.createElement(\"br\"));\r\n    var img = document.createElement('img'); \r\n    img.alt = '';\r\n    img.src = 'Assets/rio.jpg'; \r\n\tdocument.body.appendChild(img);\r\n    h3 = document.createElement(\"h3\");\r\n    h3.setAttribute = (\"id\", \"Texto1\");\r\n    textNode = document.createTextNode('\"Como vamos a cruzar para el otro lado?\" Pregunta Ana. Miras al tu alrededor para ver que podes hacer.\"');\r\n    h3.appendChild(textNode);\r\n    document.body.appendChild(h3);\r\n    let detalles = document.createElement(\"details\");\r\n    detalles.setAttribute = (\"id\", \"details\");\r\n    let summary = document.createElement(\"summary\");\r\n    summary.setAttribute = (\"id\", \"summary\");\r\n    summary.innerHTML = \"¿Que decides hacer?\";\r\n    let ul = document.createElement(\"ol\");\r\n    ul.setAttribute = (\"id\", \"decisiones\");\r\n    let li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion1\");\r\n    li.innerHTML = \"<div><button id = nadar type=button>Nadar</button>\"\r\n    ul.appendChild(li);\r\n    li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion2\");\r\n    li.innerHTML =\"<div><button id = alrededor type=button>Mirar a tu alrededor</button>\"\r\n    ul.appendChild(li);\r\n    li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion2\");\r\n    li.innerHTML =\"<div><button id = volver type=button>Volver a donde estabas</button>\"\r\n    ul.appendChild(li);\r\n    detalles.appendChild(summary);\r\n    detalles.appendChild(ul);\r\n    document.body.appendChild(detalles);\r\n    (0,_norteA__WEBPACK_IMPORTED_MODULE_1__.nadar)();\r\n    (0,_norteC__WEBPACK_IMPORTED_MODULE_2__.celda)();\r\n    (0,_norteD__WEBPACK_IMPORTED_MODULE_3__.alrededor)();\r\n\r\n\r\n    \r\n\r\n\t\r\n\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack://lab6/./src/norteB.js?");

/***/ }),

/***/ "./src/norteC.js":
/*!***********************!*\
  !*** ./src/norteC.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"celda\": () => (/* binding */ celda)\n/* harmony export */ });\n\r\n\r\nconst celda = () => {\r\n    var btn = document.getElementById(\"volver\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"celda.html\", \"_self\");\r\n    });\r\n}\n\n//# sourceURL=webpack://lab6/./src/norteC.js?");

/***/ }),

/***/ "./src/norteD.js":
/*!***********************!*\
  !*** ./src/norteD.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"alrededor\": () => (/* binding */ alrededor)\n/* harmony export */ });\n\r\n\r\nconst alrededor = () => {\r\n    var btn = document.getElementById(\"alrededor\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"alrededor.html\", \"_self\");\r\n    });\r\n}\n\n//# sourceURL=webpack://lab6/./src/norteD.js?");

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