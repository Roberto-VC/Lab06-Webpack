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

/***/ "./src/oesteA.js":
/*!***********************!*\
  !*** ./src/oesteA.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _oeste_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oeste.scss */ \"./src/oeste.scss\");\n/* harmony import */ var _oesteB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oesteB */ \"./src/oesteB.js\");\n/* harmony import */ var _oesteC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oesteC */ \"./src/oesteC.js\");\n/* harmony import */ var _oesteD__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oesteD */ \"./src/oesteD.js\");\n/* harmony import */ var _oesteE__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oesteE */ \"./src/oesteE.js\");\n \r\n\r\n\r\n\r\n\r\nwindow.onload = function(){\r\n    let x = document.createElement(\"div\");\r\n    x.setAttribute(\"id\", \"progreso\");\r\n    x.setAttribute(\"class\", \"contenedor\");\r\n    document.body.appendChild(x);\r\n    let pr = document.createElement(\"PROGRESS\");\r\n    pr.setAttribute(\"id\", \"ProgresoB\");\r\n    pr.setAttribute(\"value\", 25);\r\n    pr.setAttribute(\"max\", 100);\r\n    document.getElementById(\"progreso\").appendChild(pr);\r\n    let h1 = document.createElement(\"h1\");\r\n    h1.setAttribute = (\"id\", \"Titulo\");\r\n    let textNode = document.createTextNode(\"Giras a la izquierda, y sigues ese camino en el calabozo\");\r\n    h1.appendChild(textNode);\r\n    document.body.appendChild(h1);\r\n    let h3 = document.createElement(\"h3\");\r\n    h3.setAttribute = (\"id\", \"Texto1\");\r\n    textNode = document.createTextNode(\"Decides girar para al oeste, caminando para saber si hay una manera para salir de este lugar.\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"En el pasillo, la única luz son las antorchas que estan presentes, y el ruido del agua callendo\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"Ese frío sonido es roto por unos altos pasos, que llenan el pasillo de un gran eco\");\r\n    h3.appendChild(textNode);\r\n    document.body.appendChild(h3);\r\n    document.body.appendChild(document.createElement(\"br\"));\r\n    var audio = document.createElement('audio');\r\n    audio.id = \"Audio\"; \r\n    audio.controls = true;\r\n    audio.autoplay = true;\r\n    document.body.appendChild(audio);\r\n    var source = document.createElement('source');\r\n    source.src = \"Assets/pasos.mp3\";\r\n    source.type = \"audio/ogg\";\r\n    document.getElementById(\"Audio\").appendChild(source);\r\n    h3 = document.createElement(\"h3\");\r\n    h3.setAttribute = (\"id\", \"Texto1\");\r\n    textNode = document.createTextNode('\"Que es eso?\" Te dice Ana. Justo entonces, la poca luz que hay muestra a la vista el detras de un monstruo.\"');\r\n    h3.appendChild(textNode);\r\n    document.body.appendChild(h3);\r\n    let detalles = document.createElement(\"details\");\r\n    detalles.setAttribute = (\"id\", \"details\");\r\n    let summary = document.createElement(\"summary\");\r\n    summary.setAttribute = (\"id\", \"summary\");\r\n    summary.innerHTML = '\"¡Ay! ¿Que hacermos?';\r\n    let ul = document.createElement(\"ol\");\r\n    ul.setAttribute = (\"id\", \"decisiones\");\r\n    let li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion1\");\r\n    li.innerHTML = \"<div><button id = distraer type=button>Creo una distracción y escabullirse</button>\"\r\n    ul.appendChild(li);\r\n    li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion2\");\r\n    li.innerHTML =\"<div><button id = hablar type=button>Tratar de hablar</button>\"\r\n    ul.appendChild(li);\r\n    li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion3\");\r\n    li.innerHTML =\"<div><button id = atacar type=button>Atacarlo</button>\"\r\n    ul.appendChild(li);\r\n    li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion4\");\r\n    li.innerHTML =\"<div><button id = volver type=button>Volver a donde estabas</button>\"\r\n    ul.appendChild(li);\r\n    detalles.appendChild(summary);\r\n    detalles.appendChild(ul);\r\n    document.body.appendChild(detalles);\r\n    (0,_oesteB__WEBPACK_IMPORTED_MODULE_1__.distraer)();\r\n    (0,_oesteC__WEBPACK_IMPORTED_MODULE_2__.hablar)();\r\n    (0,_oesteD__WEBPACK_IMPORTED_MODULE_3__.celda)();\r\n    (0,_oesteE__WEBPACK_IMPORTED_MODULE_4__.atacar)();\r\n\r\n\r\n    \r\n\r\n\t\r\n\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack://lab6/./src/oesteA.js?");

/***/ }),

/***/ "./src/oesteB.js":
/*!***********************!*\
  !*** ./src/oesteB.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"distraer\": () => (/* binding */ distraer)\n/* harmony export */ });\n\r\n\r\nconst distraer = () => {\r\n    var btn = document.getElementById(\"distraer\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"distraer.html\", \"_self\");\r\n    });\r\n}\n\n//# sourceURL=webpack://lab6/./src/oesteB.js?");

/***/ }),

/***/ "./src/oesteC.js":
/*!***********************!*\
  !*** ./src/oesteC.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hablar\": () => (/* binding */ hablar)\n/* harmony export */ });\n\r\n\r\nconst hablar = () => {\r\n    var btn = document.getElementById(\"hablar\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"hablar.html\", \"_self\");\r\n    });\r\n}\n\n//# sourceURL=webpack://lab6/./src/oesteC.js?");

/***/ }),

/***/ "./src/oesteD.js":
/*!***********************!*\
  !*** ./src/oesteD.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"celda\": () => (/* binding */ celda)\n/* harmony export */ });\nconst celda = () => {\r\n    var btn = document.getElementById(\"volver\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"celda.html\", \"_self\");\r\n    });\r\n}\n\n//# sourceURL=webpack://lab6/./src/oesteD.js?");

/***/ }),

/***/ "./src/oesteE.js":
/*!***********************!*\
  !*** ./src/oesteE.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"atacar\": () => (/* binding */ atacar)\n/* harmony export */ });\n\r\n\r\nconst atacar = () => {\r\n    var btn = document.getElementById(\"atacar\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"atacar.html\", \"_self\");\r\n    });\r\n}\n\n//# sourceURL=webpack://lab6/./src/oesteE.js?");

/***/ }),

/***/ "./src/oeste.scss":
/*!************************!*\
  !*** ./src/oeste.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab6/./src/oeste.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/oesteA.js");
/******/ 	
/******/ })()
;