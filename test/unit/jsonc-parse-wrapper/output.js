/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 849:
/***/ ((module) => {

module.exports = 'dep';


/***/ }),

/***/ 327:
/***/ ((module, exports, __webpack_require__) => {

(function (factory) {
  if ( true && typeof module.exports === "object") {
     var v = factory(require, exports);
     if (v !== undefined) module.exports = v;
 }
 else if (typeof define === "function" && define.amd) {
     define(["require", "exports", "./impl/format", "./impl/edit", "./impl/scanner", "./impl/parser"], factory);
 }
})(function () {
  __webpack_require__(849);
});

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
/******/ 	/* webpack/runtime/asset-relocator-loader */
/******/ 	if (typeof __webpack_require__ !== 'undefined') __webpack_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(327);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;