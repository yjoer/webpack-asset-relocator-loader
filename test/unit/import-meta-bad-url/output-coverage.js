/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// external "fs"
const external_fs_namespaceObject = require("fs");
;// ./test/unit/import-meta-bad-url/input.js


console.log((0,external_fs_namespaceObject.readFileSync)(new URL(unknown ? './asset1.txt' : './asset2.txt', 'not-a-url')));
console.log((0,external_fs_namespaceObject.readFileSync)(new URL(unknown ? 'a--b' : './asset2.txt')));
console.log((0,external_fs_namespaceObject.readFileSync)(new URL(unknown ? './asset1.txt' : 'a--b')));
console.log((0,external_fs_namespaceObject.readFileSync)(new URL('file:///none')));
console.log((0,external_fs_namespaceObject.readFileSync)(new URL('--')));
console.log((0,external_fs_namespaceObject.readFileSync)(new URL('--', '--')));
console.log((0,external_fs_namespaceObject.readFileSync)(new URL()));
console.log((0,external_fs_namespaceObject.readFileSync)(new URL('./test', unknown)));
console.log((0,external_fs_namespaceObject.readFileSync)(new URL(unknown)));

module.exports = __webpack_exports__;
/******/ })()
;