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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Assets/CSS/style.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Assets/CSS/style.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  border: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-size: 1rem;\\n  font-family: \\\"Segoe UI\\\";\\n}\\n\\nbody {\\n  background: #f4cebe;\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100vh;\\n}\\n\\nheader {\\n  min-height: 50px;\\n}\\n\\nfooter {\\n  min-height: 50px;\\n}\\n\\nmain {\\n  flex: 1;\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n}\\nmain #btn-add {\\n  position: fixed;\\n  bottom: 2vh;\\n  right: 2vh;\\n  background: none;\\n}\\nmain #btn-add span {\\n  font-size: 3rem;\\n}\\n\\n.collum-container {\\n  padding-top: 2vh;\\n}\\n.collum-container .collum {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.collum-container .collum .collum-title {\\n  padding: 0 0.5rem;\\n  border-radius: 15% 15% 0 0;\\n  overflow: hidden;\\n  background: blue;\\n  width: max-content;\\n}\\n\\n.done {\\n  filter: grayscale(100%);\\n}\\n\\n.card-wrapper {\\n  display: flex;\\n}\\n.card-wrapper .card-body {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  padding: 0.5rem 0 0;\\n  margin-left: 0.5rem;\\n  text-align: left;\\n  background: none;\\n}\\n.card-wrapper .card-body .card-title {\\n  font-weight: 500;\\n  font-size: 1.1rem;\\n  overflow-wrap: anywhere;\\n  width: 100%;\\n}\\n.card-wrapper .card-body .card-duration {\\n  margin-left: 0.25rem;\\n  background: #ccc;\\n  font-size: 0.9rem;\\n  font-weight: 500;\\n}\\n.card-wrapper .card-body .card-due {\\n  margin-left: auto;\\n  font-weight: 500;\\n  color: #ccc;\\n  white-space: none;\\n  line-height: 0.75rem;\\n  padding-bottom: 0.25rem;\\n  padding-right: 0.25rem;\\n  min-height: 1rem;\\n}\\n.card-wrapper .card-body .card-due .card-bottom > span {\\n  font-size: 0.75rem;\\n  vertical-align: middle;\\n}\\n.card-wrapper .card-btn {\\n  min-width: 10vw;\\n  position: relative;\\n}\\n.card-wrapper .card-btn input[type=checkbox] {\\n  display: none;\\n}\\n.card-wrapper .card-btn span:before {\\n  font-family: \\\"Material Icons\\\";\\n  color: inherit;\\n  content: \\\"\\\\e835\\\";\\n  font-size: 2rem;\\n  font-weight: lighter;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n.card-wrapper .card-btn input[type=checkbox]:checked ~ span:before {\\n  content: \\\"\\\\e5ca\\\";\\n}\\n\\n.card-variation-1 {\\n  background: #ab47bc;\\n}\\n.card-variation-1 .card-btn {\\n  background: #9b3eab;\\n}\\n\\n.card-variation-2 {\\n  background: #29b6f6;\\n}\\n.card-variation-2 .card-btn {\\n  background: #11aef5;\\n}\\n\\n.overlay {\\n  position: fixed;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  width: 100%;\\n  height: 100%;\\n  background: rgba(0, 0, 0, 0.5);\\n  backdrop-filter: blur(3px);\\n  z-index: 1;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n#modal-card-menu {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  display: flex;\\n  flex-direction: column;\\n  z-index: 2;\\n  background: #debda2;\\n  height: 50vh;\\n  width: 90vw;\\n  padding: 1.5vh 5%;\\n}\\n#modal-card-menu .fields {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  gap: 2vh;\\n}\\n#modal-card-menu .fields :last-child {\\n  align-self: center;\\n}\\n#modal-card-menu .input-container {\\n  position: relative;\\n  border: solid 1px #ccc;\\n  padding: 0 8px;\\n  background: white;\\n  display: flex;\\n}\\n#modal-card-menu .input-container > input {\\n  border: none;\\n  outline: 0;\\n  padding: 16px 0 10px;\\n  width: 100%;\\n}\\n#modal-card-menu .input-container input[type=date] {\\n  color: transparent;\\n}\\n#modal-card-menu .input-container > label {\\n  position: absolute;\\n  transform: translate(0, 16px) scale(1);\\n  transform-origin: top left;\\n  transition: all 0.5s ease-in-out;\\n}\\n#modal-card-menu .active > label {\\n  transform: translate(0, 4px) scale(0.75);\\n  color: #2ecc71;\\n}\\n#modal-card-menu .active input[type=date] {\\n  color: black;\\n}\\n#modal-card-menu .timeOptions {\\n  display: flex;\\n  height: 100%;\\n  width: 50%;\\n  overflow: hidden;\\n  color: #6c7a89;\\n}\\n#modal-card-menu .timeOptions label {\\n  position: relative;\\n  width: 100%;\\n}\\n#modal-card-menu .timeOptions label input {\\n  display: none;\\n}\\n#modal-card-menu .timeOptions label span {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  font-weight: bold;\\n  font-size: 1.75rem;\\n}\\n#modal-card-menu .lbl-toggle {\\n  display: none;\\n}\\n#modal-card-menu .lbl-toggle ~ span {\\n  font-size: 2rem;\\n  color: #6c7a89;\\n}\\n#modal-card-menu .lbl-toggle:checked ~ span {\\n  color: #2ecc71;\\n}\\n#modal-card-menu .modalOptions {\\n  width: 100%;\\n  margin-top: auto;\\n  padding: 0 2vw;\\n  display: flex;\\n  justify-content: space-between;\\n  gap: 5vw;\\n}\\n#modal-card-menu .modalOptions :first-child {\\n  margin-right: auto;\\n}\\n#modal-card-menu .modalOptions button {\\n  padding: 1vw;\\n  font-weight: bold;\\n  background: #d1a27c;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/Assets/CSS/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/Assets/CSS/style.scss":
/*!***********************************!*\
  !*** ./src/Assets/CSS/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Assets/CSS/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/Assets/CSS/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Assets/JS/main.js":
/*!*******************************!*\
  !*** ./src/Assets/JS/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CSS_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CSS/style.scss */ \"./src/Assets/CSS/style.scss\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/Assets/JS/modules/modal.js\");\n/* harmony import */ var _modules_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/card.js */ \"./src/Assets/JS/modules/card.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// Impede o teclado do mobile de mudar o viewport\r\nwindow.addEventListener('load', () => {\r\n    const metaViewport = document.querySelector(\"meta[name=viewport]\");  \r\n    metaViewport.setAttribute(\"content\", metaViewport.content + \", height=\" + window.innerHeight)\r\n  \r\n\r\n    if(JSON.parse(localStorage.getItem('Cards')).length ){\r\n        buildCards();\r\n    }\r\n\r\n });\r\n\r\ndocument.getElementById('btn-add').addEventListener('click', () => {(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__.showModal_Add)()})\r\n\r\nwindow.addEventListener('beforeunload', () => {\r\n    localStorage.setItem('Cards', JSON.stringify(_modules_card_js__WEBPACK_IMPORTED_MODULE_2__.Card.cardInstances))\r\n})\r\n\r\nfunction buildCards() {\r\n    const cards = JSON.parse(localStorage.getItem('Cards'));\r\n    console.log(cards);\r\n\r\n    cards.forEach(JSONCard => {\r\n\r\n        new _modules_card_js__WEBPACK_IMPORTED_MODULE_2__.Card(\r\n            JSONCard._title, {\r\n                time: JSONCard._duration.time,\r\n                type: JSONCard._duration.type\r\n            },\r\n            JSONCard._due\r\n        );\r\n\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./src/Assets/JS/main.js?");

/***/ }),

/***/ "./src/Assets/JS/modules/card.js":
/*!***************************************!*\
  !*** ./src/Assets/JS/modules/card.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/Assets/JS/modules/modal.js\");\n\r\n\r\n\r\nconst inputFields = document.querySelectorAll(\".input-container\");\r\n\r\n//Constructor\r\nclass Card {\r\n  static #_cardInstances = [];\r\n  static get cardInstances() {\r\n    return this.#_cardInstances;\r\n  }\r\n  static selectedId = 0;\r\n\r\n  #_cardTemplate = document.getElementById(\"card-template\");\r\n  #_cardNodes = this.#_cardTemplate.content.firstElementChild.cloneNode(true);\r\n  #_cardBtnCheckbox = this.#_cardNodes.querySelector(\r\n    \".card-btn input[type=checkbox]\"\r\n  );\r\n\r\n  constructor(title, { time, type }, due, btn) {\r\n    (this._id = Card.cardInstances.length + 1), // Alterar a geração de ID\r\n      (this._title = title),\r\n      (this._duration = { time: time, type: type }),\r\n      (this._due = due),\r\n      (this._btn = btn);\r\n\r\n      console.log(typeof due)\r\n    Card.#_cardInstances.push(this);\r\n\r\n    this.#_cardBtnCheckbox.addEventListener(\"change\", (e) => {\r\n      e.target.checked === true ? this.addDone() : this.removeDone();\r\n    });\r\n\r\n    this.#_cardNodes\r\n      .querySelector(\".card-body\")\r\n      .addEventListener(\"click\", (e) => {\r\n        console.log(this);\r\n        (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.clearFields)();\r\n        Card.selectedId = this._id;\r\n        this.prepareFields();\r\n        (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.showModal_Edit)();\r\n      });\r\n\r\n    this.append();\r\n  }\r\n  get id() {\r\n    return this._id;\r\n  }\r\n\r\n  get title() {\r\n    return this._title;\r\n  }\r\n  set title(value) {\r\n    this._title = value;\r\n  }\r\n\r\n  get duration() {\r\n    return this._duration;\r\n  }\r\n\r\n  get time() {\r\n    return this.duration._time;\r\n  }\r\n  set time(value) {\r\n    this._time = value;\r\n  }\r\n\r\n  get type() {\r\n    return this.duration._type;\r\n  }\r\n  set type(value) {\r\n    this._type = value;\r\n  }\r\n\r\n  get due() {\r\n    return this._due;\r\n  }\r\n  set due(value) {\r\n    this._due = value;\r\n  }\r\n\r\n  get btn() {\r\n    return this._btn;\r\n  }\r\n\r\n  // log() {\r\n  //   // for (let key in this) {\r\n  //   //   console.log(key + \" \" + this[key]);\r\n  //   // }\r\n  //   for (let key in this) {\r\n  //     if (typeof this[key] !== \"function\") {\r\n  //       console.log(\"key:\", this[key]);\r\n\r\n  //       if (key === \"duration\") {\r\n  //         for (let durKey in this[key]) {\r\n  //           console.log(this[key], this[key][durKey]);\r\n  //           // }\r\n  //         }\r\n  //       }\r\n  //     }\r\n  //   }\r\n  // }\r\n\r\n  log() {\r\n    console.log(this);\r\n  }\r\n\r\n  append() {\r\n    // Sempre verificar no CSS quantas variações de card existem\r\n    const variationNumber = Math.floor(Math.random() * 2) + 1;\r\n    this.#_cardNodes.classList.add(`card-variation-${variationNumber}`);\r\n\r\n    this.updateHTML();\r\n\r\n    // Adicionanr o tempo restante e o listener para exibir\r\n\r\n    document.querySelector(\".collum\").appendChild(this.#_cardNodes);\r\n  }\r\n\r\n  edit() {\r\n    this.updateHTML();\r\n  }\r\n\r\n  delete() {\r\n    this.#_cardNodes.remove();\r\n  }\r\n\r\n  updateHTML() {\r\n    this.#_cardNodes.querySelector(\".card-title\").innerText = this._title;\r\n    this.#_cardNodes.querySelector(\".card-duration\").innerText =\r\n      this._duration.time + this._duration.type;\r\n  }\r\n\r\n  addDone() {\r\n    this.#_cardNodes.classList.add(\"done\");\r\n  }\r\n\r\n  removeDone() {\r\n    this.#_cardNodes.classList.remove(\"done\");\r\n  }\r\n\r\n  // Preenche os campos do modal (Código bem feio)\r\n  prepareFields() {\r\n    inputFields.forEach((field) => {\r\n      for (let key in this) {\r\n        let keyString = key.substring(1);\r\n        let fieldInput = field.querySelector(`input[id=card-${keyString}]`);\r\n\r\n        if (this[key] !== \"\" && fieldInput) {\r\n          if (keyString !== \"duration\") {\r\n            fieldInput.value = this[key];\r\n          }\r\n\r\n          if (keyString === \"duration\" && this[key].time && this[key].type) {\r\n            fieldInput.value = this[key].time;\r\n            document.querySelector(\r\n              `.timeOptions label input[id^=\"${this[key].type}\"]`\r\n            ).checked = true;\r\n            console.log(fieldInput.value);\r\n          }\r\n\r\n          // Soa um pouco como gambiarra mas funciona\r\n          const event = new Event(\"change\");\r\n          field.querySelector(\"input\").dispatchEvent(event);\r\n        }\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Assets/JS/modules/card.js?");

/***/ }),

/***/ "./src/Assets/JS/modules/modal.js":
/*!****************************************!*\
  !*** ./src/Assets/JS/modules/modal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearFields\": () => (/* binding */ clearFields),\n/* harmony export */   \"showModal_Add\": () => (/* binding */ showModal_Add),\n/* harmony export */   \"showModal_Edit\": () => (/* binding */ showModal_Edit)\n/* harmony export */ });\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.js */ \"./src/Assets/JS/modules/card.js\");\n\r\n\r\n\r\nconst modalCardMenu = document.getElementById(\"modal-cardMenu\");\r\n\r\nconst inputFields = document.querySelectorAll(\".input-container\");\r\nconst optionsBtn = document.querySelector(\".modalOptions\").querySelectorAll(\"button\");\r\n\r\n(() => {\r\n  inputFields.forEach((element) => {\r\n    if (element.querySelector(\"input\").value) {\r\n      element.classList.add(\"active\");\r\n    }\r\n\r\n    linkEvents(element);\r\n  },\r\n  bindHideModal()\r\n  \r\n  );\r\n})();\r\n\r\nfunction linkEvents(element) {\r\n  const elementField = element.querySelector(\"input\");\r\n  elementField.addEventListener('focus', addFocus);\r\n  elementField.addEventListener('blur', addBlur);\r\n  elementField.addEventListener('change', changeFocus)\r\n\r\n  if (element.querySelector(\".timeOptions\")) {\r\n    const checkBoxes = element.querySelectorAll(\".lbl-toggle\");\r\n    checkBoxes.forEach((option) => {\r\n      option.addEventListener(\"change\", addUncheck);\r\n    });\r\n  }\r\n}\r\n\r\nfunction changeFocus(e) {\r\n  const target = e.target;\r\n  target.parentNode.classList.add(\"active\");\r\n}\r\n\r\n\r\nfunction addFocus(e) {\r\n  const target = e.target;\r\n  target.parentNode.classList.add(\"active\");\r\n}\r\n\r\nfunction addBlur(e) {\r\n  const target = e.target;\r\n  if (!target.value || target.value===\"\") {\r\n    target.parentNode.classList.remove(\"active\");\r\n  }\r\n}\r\n\r\nfunction addUncheck() {\r\n  var target = window.event.target;\r\n  const durationBox = document\r\n    .querySelector(\".timeOptions\")\r\n    .querySelectorAll(\".lbl-toggle\");\r\n\r\n  durationBox.forEach((box) => {\r\n    if (target !== box) {\r\n      box.checked = false;\r\n    }\r\n  });\r\n}\r\n\r\nfunction hideModal() {\r\n  document.querySelector(\".overlay\").classList.add(\"hidden\");\r\n  modalCardMenu.classList.add(\"hidden\");\r\n\r\n  document.getElementById(\"btn-add\").classList.remove(\"hidden\");\r\n}\r\n\r\nfunction showModal_Add() {\r\n  document.querySelector(\".overlay\").classList.remove(\"hidden\");\r\n  modalCardMenu.classList.remove(\"hidden\");\r\n\r\n  document.getElementById(\"btn-add\").classList.add(\"hidden\");\r\n\r\n  document.getElementById('deleteCard').classList.add(\"hidden\")\r\n  document.getElementById('editCard').classList.add(\"hidden\")\r\n  document.getElementById('createCard').classList.remove(\"hidden\")\r\n}\r\n\r\nfunction showModal_Edit(){\r\n  document.querySelector(\".overlay\").classList.remove(\"hidden\");\r\n  modalCardMenu.classList.remove(\"hidden\");\r\n\r\n  document.getElementById(\"btn-add\").classList.add(\"hidden\");\r\n\r\n  document.getElementById('deleteCard').classList.remove(\"hidden\")\r\n  document.getElementById('editCard').classList.remove(\"hidden\")\r\n  document.getElementById('createCard').classList.add(\"hidden\")\r\n}\r\n\r\nfunction bindHideModal() {\r\n  document.getElementById(\"cancel\").addEventListener(\"click\", () => {\r\n    hideModal();\r\n    clearFields();\r\n  });\r\n  document.querySelector(\".overlay\").addEventListener(\"click\", () => {\r\n    hideModal();\r\n  });\r\n  document.addEventListener(\"keydown\", (e) => {\r\n    if (e.key === \"Escape\" && !modalCardMenu.classList.contains(\"hidden\")) {\r\n      hideModal();\r\n      clearFields();\r\n    }\r\n  });\r\n}\r\n\r\nfunction clearFields(){\r\n  _card_js__WEBPACK_IMPORTED_MODULE_0__.Card.selectedId = 0;\r\n\r\n  inputFields.forEach((field) => {\r\n      field.querySelector('input').value = \"\"\r\n      field.classList.remove(\"active\");\r\n  })\r\n\r\n  const durationBox = document\r\n    .querySelector(\".timeOptions\")\r\n    .querySelectorAll(\".lbl-toggle\");\r\n\r\n  durationBox.forEach((box) => {\r\n    box.checked = false;\r\n  })\r\n}\r\n\r\ndocument.getElementById(\"createCard\").addEventListener(\"click\", () => {\r\n  createCard();\r\n  clearFields()\r\n  hideModal();\r\n});\r\n\r\nfunction createCard() {\r\n  let hasTypeChekced = document.querySelector(\r\n    \".timeOptions input[type=checkbox]:checked\"\r\n  );\r\n\r\n  // Sintaxe feia e não reutilizável.\r\n  new _card_js__WEBPACK_IMPORTED_MODULE_0__.Card(\r\n    document.getElementById(\"card-title\").value,\r\n    {\r\n      time: document.getElementById(\"card-duration\").value,\r\n      type: hasTypeChekced ? hasTypeChekced.nextElementSibling.innerHTML : \"\",\r\n    },\r\n    document.getElementById(\"card-due\").value\r\n  );\r\n}\r\n\r\ndocument.getElementById('editCard').addEventListener('click', () => {\r\n  let selectedCard = _card_js__WEBPACK_IMPORTED_MODULE_0__.Card.cardInstances.find(card => card.id === _card_js__WEBPACK_IMPORTED_MODULE_0__.Card.selectedId)\r\n  let hasTypeChekced = document.querySelector(\r\n    \".timeOptions input[type=checkbox]:checked\"\r\n  );\r\n\r\n  selectedCard.title = document.getElementById(\"card-title\").value\r\n  selectedCard.duration.time = document.getElementById(\"card-duration\").value\r\n  selectedCard.duration.type = hasTypeChekced ? hasTypeChekced.nextElementSibling.innerHTML : \"\",\r\n  selectedCard.due = document.getElementById(\"card-due\").value\r\n  \r\n  \r\n  selectedCard.edit();\r\n\r\n  hideModal()\r\n})\r\n\r\ndocument.getElementById('deleteCard').addEventListener('click', () => {\r\n  let selectedCard = _card_js__WEBPACK_IMPORTED_MODULE_0__.Card.cardInstances.find(card => card.id === _card_js__WEBPACK_IMPORTED_MODULE_0__.Card.selectedId);\r\n\r\n  selectedCard.delete();\r\n  _card_js__WEBPACK_IMPORTED_MODULE_0__.Card.cardInstances.splice(_card_js__WEBPACK_IMPORTED_MODULE_0__.Card.cardInstances.indexOf(selectedCard), 1)\r\n  hideModal()\r\n})\n\n//# sourceURL=webpack:///./src/Assets/JS/modules/modal.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Assets/JS/main.js");
/******/ 	
/******/ })()
;