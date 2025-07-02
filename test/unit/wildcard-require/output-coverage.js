/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 231:
/***/ ((module) => {

module.exports = 'module2';


/***/ }),

/***/ 456:
/***/ ((module) => {

module.exports = 'module3';


/***/ }),

/***/ 674:
/***/ ((module) => {

module.exports = 'module1';

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
function __ncc_wildcard$0 (arg) {
  if (arg === "1.js" || arg === "1") return __webpack_require__(674);
  else if (arg === "2.js" || arg === "2") return __webpack_require__(231);
  else if (arg === "3.js" || arg === "3") return __webpack_require__(456);
}
const num = Math.ceil(Math.random() * 3, 0);

const m = __ncc_wildcard$0(num);
console.log(m);

module.exports = __webpack_exports__;
/******/ })()
;