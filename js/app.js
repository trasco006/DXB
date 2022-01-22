(()=>{var e={927:()=>{var e,t,r;e=document.querySelector(".header"),t=e.querySelector(".menu-btn"),r=e.querySelector(".nav-menu"),t.addEventListener("click",(function(){this.classList.toggle("is-active"),r.classList.toggle("nav-menu_active")}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(927)})()})();
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
  /******/ 	var __webpack_modules__ = ({

    /***/ "./src/js/app.js":
    /*!***********************!*\
      !*** ./src/js/app.js ***!
      \***********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./src/js/main.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanM/OTBlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5cclxuaW1wb3J0ICcuL21haW4uanMnO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

      /***/ }),

    /***/ "./src/js/main.js":
    /*!************************!*\
      !*** ./src/js/main.js ***!
      \************************/
    /***/ (() => {

      eval("var burgerMenuFunction = function burgerMenuFunction() {\n  var headerContainer = document.querySelector('.header');\n  var burgerBtn = headerContainer.querySelector('.menu-btn');\n  var navMenu = headerContainer.querySelector('.nav-menu');\n\n  function handleBurgerToggle() {\n    this.classList.toggle('is-active');\n    navMenu.classList.toggle('nav-menu_active');\n  }\n\n  burgerBtn.addEventListener('click', handleBurgerToggle);\n};\n\nburgerMenuFunction();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbImJ1cmdlck1lbnVGdW5jdGlvbiIsImhlYWRlckNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1cmdlckJ0biIsIm5hdk1lbnUiLCJoYW5kbGVCdXJnZXJUb2dnbGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsTUFBTUMsZUFBZSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBeEI7QUFDQSxNQUFNQyxTQUFTLEdBQUdILGVBQWUsQ0FBQ0UsYUFBaEIsQ0FBOEIsV0FBOUIsQ0FBbEI7QUFDQSxNQUFNRSxPQUFPLEdBQUdKLGVBQWUsQ0FBQ0UsYUFBaEIsQ0FBOEIsV0FBOUIsQ0FBaEI7O0FBRUEsV0FBU0csa0JBQVQsR0FBOEI7QUFDNUIsU0FBS0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFdBQXRCO0FBQ0FILElBQUFBLE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsaUJBQXpCO0FBQ0Q7O0FBRURKLEVBQUFBLFNBQVMsQ0FBQ0ssZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0NILGtCQUFwQztBQUNELENBWEQ7O0FBYUFOLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1cmdlck1lbnVGdW5jdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcbiAgY29uc3QgYnVyZ2VyQnRuID0gaGVhZGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ0bicpO1xyXG4gIGNvbnN0IG5hdk1lbnUgPSBoZWFkZXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLm5hdi1tZW51Jyk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUJ1cmdlclRvZ2dsZSgpIHtcclxuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XHJcbiAgICBuYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoJ25hdi1tZW51X2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQnVyZ2VyVG9nZ2xlKTtcclxufTtcclxuXHJcbmJ1cmdlck1lbnVGdW5jdGlvbigpO1xyXG4iXSwiZmlsZSI6Ii4vc3JjL2pzL21haW4uanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

      /***/ }),

    /***/ "./src/scss/app.scss":
    /*!***************************!*\
      !*** ./src/scss/app.scss ***!
      \***************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9hcHAuc2Nzcz82MjllIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

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
  /******/ 	/* webpack/runtime/compat get default export */
  /******/ 	(() => {
    /******/ 		// getDefaultExport function for compatibility with non-harmony modules
    /******/ 		__webpack_require__.n = (module) => {
      /******/ 			var getter = module && module.__esModule ?
        /******/ 				() => (module['default']) :
        /******/ 				() => (module);
      /******/ 			__webpack_require__.d(getter, { a: getter });
      /******/ 			return getter;
      /******/ 		};
    /******/ 	})();
  /******/
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
  /******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
  /******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
  /******/
  /******/ })()
;
