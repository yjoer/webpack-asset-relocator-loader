/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 805:
/***/ ((module) => {

module.exports = 'module1';

/***/ }),

/***/ 387:
/***/ ((module) => {

module.exports = 'module2';


/***/ }),

/***/ 455:
/***/ ((module) => {

module.exports = 'module3';


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
function __ncc_wildcard$0 (arg) {
  if (arg === "path1") return __webpack_require__(805);
  else if (arg === "path2") return __webpack_require__(387);
  else if (arg === "path3") return __webpack_require__(455);
}
const num = Math.ceil(Math.random() * 3, 0);

const path = `path${num}`;
const m = __ncc_wildcard$0(path);
console.log(m);

})();

module.exports = __webpack_exports__;
/******/ })()
;