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

/***/ "./src/abiertoA.js":
/*!*************************!*\
  !*** ./src/abiertoA.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"este\": () => (/* binding */ este)\n/* harmony export */ });\n\r\nconst este = () => {\r\n    var btn = document.getElementById(\"este\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"este.html\", \"_self\");\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://lab6/./src/abiertoA.js?");

/***/ }),

/***/ "./src/abiertoB.js":
/*!*************************!*\
  !*** ./src/abiertoB.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Assets_Celda_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assets/Celda.mp3 */ \"./src/Assets/Celda.mp3\");\n/* harmony import */ var _Assets_Celda_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assets/Celda.wav */ \"./src/Assets/Celda.wav\");\n/* harmony import */ var _Assets_Dungeon_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets/Dungeon.jpg */ \"./src/Assets/Dungeon.jpg\");\n/* harmony import */ var _abierto_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abierto.scss */ \"./src/abierto.scss\");\n/* harmony import */ var _abiertoA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abiertoA */ \"./src/abiertoA.js\");\n/* harmony import */ var _abiertoD__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abiertoD */ \"./src/abiertoD.js\");\n/* harmony import */ var _abiertoC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abiertoC */ \"./src/abiertoC.js\");\n \r\n \r\n\r\n \r\n\r\n\r\n\r\n\r\nwindow.onload = function(){\r\n    let x = document.createElement(\"div\");\r\n    x.setAttribute(\"id\", \"progreso\");\r\n    x.setAttribute(\"class\", \"contenedor\");\r\n    document.body.appendChild(x);\r\n    let pr = document.createElement(\"PROGRESS\");\r\n    pr.setAttribute(\"id\", \"ProgresoB\");\r\n    pr.setAttribute(\"value\", 25);\r\n    pr.setAttribute(\"max\", 100);\r\n    document.getElementById(\"progreso\").appendChild(pr);\r\n    let h1 = document.createElement(\"h1\");\r\n    h1.setAttribute = (\"id\", \"Titulo\");\r\n    let textNode = document.createTextNode(\"Se abre la reja\");\r\n    h1.appendChild(textNode);\r\n    document.body.appendChild(h1);\r\n    let h3 = document.createElement(\"h3\");\r\n    h3.setAttribute = (\"id\", \"Texto1\");\r\n    textNode = document.createTextNode(\"Abris la puerta, y salis de la celda en donde estabas, pero ahora te enuentras en la nada de un calabozo.\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"Somos libres! Bueno..., casi, necesitamos salir de aquí, ante que algo nos pase...\");\r\n    h3.appendChild(textNode);\r\n    document.body.appendChild(h3);\r\n    var audio = document.createElement('audio');\r\n    audio.id = \"Audio\"; \r\n    audio.controls = true;\r\n    audio.autoplay = true;\r\n    document.body.appendChild(audio);\r\n    var source = document.createElement('source');\r\n    source.src = \"Assets/Celda.mp3\";\r\n    source.type = \"audio/ogg\";\r\n    document.getElementById(\"Audio\").appendChild(source);\r\n    document.body.appendChild(document.createElement(\"br\"));\r\n    var img = document.createElement('img'); \r\n    img.alt = '';\r\n    img.src = 'Assets/Dungeon.jpg'; \r\n\tdocument.body.appendChild(img);\r\n    h3 = document.createElement(\"h3\");\r\n    h3.setAttribute = (\"id\", \"Texto2\");\r\n    textNode = document.createTextNode(\"Saliste, pero ahora debes de encontrar tu camino para salir de este condenado calabozo.\");\r\n    h3.appendChild(textNode);\r\n    document.body.appendChild(h3);\r\n    let detalles = document.createElement(\"details\");\r\n    detalles.setAttribute = (\"id\", \"details\");\r\n    let summary = document.createElement(\"summary\");\r\n    summary.setAttribute = (\"id\", \"summary\");\r\n    summary.innerHTML = \"¿A que dirección se dirijen?\";\r\n    let ul = document.createElement(\"ol\");\r\n    ul.setAttribute = (\"id\", \"decisiones\");\r\n    let li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion1\");\r\n    li.innerHTML = \"<div><button id = norte type=button >Norte</button>\"\r\n    ul.appendChild(li);\r\n    li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion2\");\r\n    li.innerHTML =\"<div><button id = oeste type=button >Oeste</button>\"\r\n    ul.appendChild(li);\r\n    li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion2\");\r\n    li.innerHTML =\"<div><button id = este type=button >Este</button>\"\r\n    ul.appendChild(li);\r\n    detalles.appendChild(summary);\r\n    detalles.appendChild(ul);\r\n    document.body.appendChild(detalles);\r\n    (0,_abiertoA__WEBPACK_IMPORTED_MODULE_4__.este)();\r\n    (0,_abiertoD__WEBPACK_IMPORTED_MODULE_5__.oeste)();\r\n    (0,_abiertoC__WEBPACK_IMPORTED_MODULE_6__.norte)();\r\n\r\n\r\n    \r\n\r\n\t\r\n\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack://lab6/./src/abiertoB.js?");

/***/ }),

/***/ "./src/abiertoC.js":
/*!*************************!*\
  !*** ./src/abiertoC.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"norte\": () => (/* binding */ norte)\n/* harmony export */ });\n\r\nconst norte = () => {\r\n    var btn = document.getElementById(\"norte\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"norte.html\", \"_self\");\r\n    })\r\n}\n\n//# sourceURL=webpack://lab6/./src/abiertoC.js?");

/***/ }),

/***/ "./src/abiertoD.js":
/*!*************************!*\
  !*** ./src/abiertoD.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"oeste\": () => (/* binding */ oeste)\n/* harmony export */ });\n\r\n\r\nconst oeste = () => {\r\n    var btn = document.getElementById(\"oeste\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"oeste.html\", \"_self\");\r\n    })\r\n}\n\n//# sourceURL=webpack://lab6/./src/abiertoD.js?");

/***/ }),

/***/ "./src/Assets/Celda.mp3":
/*!******************************!*\
  !*** ./src/Assets/Celda.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Assets/Celda.mp3\");\n\n//# sourceURL=webpack://lab6/./src/Assets/Celda.mp3?");

/***/ }),

/***/ "./src/Assets/Celda.wav":
/*!******************************!*\
  !*** ./src/Assets/Celda.wav ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Assets/Celda.wav\");\n\n//# sourceURL=webpack://lab6/./src/Assets/Celda.wav?");

/***/ }),

/***/ "./src/Assets/Dungeon.jpg":
/*!********************************!*\
  !*** ./src/Assets/Dungeon.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Assets/Dungeon.jpg\");\n\n//# sourceURL=webpack://lab6/./src/Assets/Dungeon.jpg?");

/***/ }),

/***/ "./src/abierto.scss":
/*!**************************!*\
  !*** ./src/abierto.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab6/./src/abierto.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/abiertoB.js");
/******/ 	
/******/ })()
;