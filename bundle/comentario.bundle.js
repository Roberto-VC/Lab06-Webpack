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

/***/ "./src/comentarioA.js":
/*!****************************!*\
  !*** ./src/comentarioA.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cambio\": () => (/* binding */ cambio)\n/* harmony export */ });\n\r\n\r\nconst cambio = () => {\r\n    var btn = document.getElementById(\"indice\");\r\n    btn.addEventListener(\"click\", function() {\r\n        window.open(\"./index.html\", \"_self\");\r\n    });\r\n}\n\n//# sourceURL=webpack://lab6/./src/comentarioA.js?");

/***/ }),

/***/ "./src/comentarioB.js":
/*!****************************!*\
  !*** ./src/comentarioB.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _comentario_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comentario.scss */ \"./src/comentario.scss\");\n/* harmony import */ var _Assets_credits_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assets/credits.mp3 */ \"./src/Assets/credits.mp3\");\n/* harmony import */ var _comentarioA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comentarioA */ \"./src/comentarioA.js\");\n \r\n\r\n\r\nwindow.onload = function(){\r\n    let heade = document.createElement(\"HEADER\");\r\n    heade.setAttribute(\"id\", \"myHeader\");\r\n    document.body.appendChild(heade);\r\n    let h2 = document.createElement(\"h2\");\r\n    h2.setAttribute = (\"id\", \"nombre\");\r\n    let textNode = document.createTextNode(\"Creado por Roberto Vallecillos\");\r\n    h2.appendChild(textNode);\r\n    document.getElementById(\"myHeader\").appendChild(h2);\r\n    let x = document.createElement(\"div\");\r\n    x.setAttribute(\"id\", \"progreso\");\r\n    x.setAttribute(\"class\", \"contenedor\");\r\n    document.body.appendChild(x);\r\n    let pr = document.createElement(\"PROGRESS\");\r\n    pr.setAttribute(\"id\", \"ProgresoB\");\r\n    pr.setAttribute(\"value\", 0);\r\n    pr.setAttribute(\"max\", 100);\r\n    document.getElementById(\"progreso\").appendChild(pr);\r\n    let atr = document.createElement(\"attribute\");\r\n    atr.setAttribute(\"id\", \"article\");\r\n    document.body.appendChild(atr);\r\n    let h1 = document.createElement(\"h1\");\r\n    h1.setAttribute = (\"id\", \"Titulo\");\r\n    textNode = document.createTextNode(\"Beneficios del UX Design\");\r\n    h1.appendChild(textNode);\r\n    document.getElementById(\"article\").appendChild(h1);\r\n    let h3 = document.createElement(\"h4\");\r\n    h3.setAttribute = (\"id\", \"Texto1\");\r\n    textNode = document.createTextNode(\"Una de las cosas mas importantes del UX design, es la vieja frase 'El tiempo es dinero'\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"Proyectos que han sido abandonados, o han tenido que ser arreglados, son muchos, y se pierde mucho dinero en cosas\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"que podían haber estado bien desde el principio\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"Un mal diseño hace que los clientes huyan y no vuelva, haciendo ese dinero que se pierda \");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"Y se gasta mas arreglando eso en vez en ingresos en vez de algo hecho bueno desde el principio\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createElement(\"br\");\r\n    h3.appendChild(textNode);\r\n    textNode = document.createTextNode(\"Lo más importante no es sea maravillosa, moderna, o que sea excitante. Lo imporante es tener a los clientes en la mente, y que esto peinsen que sea bueno\");\r\n    document.getElementById(\"article\").appendChild(h3);\r\n    var fig = document.createElement('fig');\r\n    fig.setAttribute(\"id\", \"UX\");\r\n    document.getElementById(\"article\").appendChild(fig);\r\n    var img = document.createElement('img'); \r\n    img.alt = '';\r\n    img.src = 'Assets/UX.jpeg'; \r\n\tdocument.getElementById(\"UX\").appendChild(img);\r\n    var caption = document.createElement(\"FIGCAPTION\");\r\n    caption.innerHTML = \"Si al UX design\";\r\n    document.getElementById(\"article\").appendChild(img);\r\n    let detalles = document.createElement(\"details\");\r\n    detalles.setAttribute = (\"id\", \"details\");\r\n    let summary = document.createElement(\"summary\");\r\n    summary.setAttribute = (\"id\", \"summary\");\r\n    summary.innerHTML = \"Opciones\";\r\n    let ul = document.createElement(\"ol\");\r\n    ul.setAttribute = (\"id\", \"decisiones\");\r\n    let li = document.createElement(\"li\");\r\n    li.setAttribute = (\"id\", \"opcion1\");\r\n    li.innerHTML = \"<div><button id = indice type=button>Volver al indice</button>\"\r\n    ul.appendChild(li);\r\n    detalles.appendChild(summary);\r\n    detalles.appendChild(ul);\r\n    document.getElementById(\"article\").appendChild(detalles);\r\n    let foot = document.createElement(\"FOOTER\");\r\n    foot.setAttribute(\"id\", \"myFooter\");\r\n    document.body.appendChild(foot);\r\n    h2 = document.createElement(\"h2\");\r\n    h2.setAttribute = (\"id\", \"clase\");\r\n    textNode = document.createTextNode(\"Sistemas y tecnologías web\");\r\n    h2.appendChild(textNode);\r\n    document.getElementById(\"myFooter\").appendChild(h2);\r\n    var audio = document.createElement('audio');\r\n    audio.id = \"Audio\"; \r\n    audio.controls = true;\r\n    audio.autoplay = true;\r\n    document.body.appendChild(audio);\r\n    var source = document.createElement('source');\r\n    source.src = _Assets_credits_mp3__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n    source.type = \"audio/ogg\";\r\n    document.getElementById(\"Audio\").appendChild(source);\r\n    (0,_comentarioA__WEBPACK_IMPORTED_MODULE_2__.cambio)();\r\n};\r\n\r\n\n\n//# sourceURL=webpack://lab6/./src/comentarioB.js?");

/***/ }),

/***/ "./src/Assets/credits.mp3":
/*!********************************!*\
  !*** ./src/Assets/credits.mp3 ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Assets/credits.mp3\");\n\n//# sourceURL=webpack://lab6/./src/Assets/credits.mp3?");

/***/ }),

/***/ "./src/comentario.scss":
/*!*****************************!*\
  !*** ./src/comentario.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab6/./src/comentario.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/comentarioB.js");
/******/ 	
/******/ })()
;