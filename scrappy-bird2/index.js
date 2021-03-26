/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@vicimpa/shared-state/shared-state.js":
/*!************************************************************!*\
  !*** ./node_modules/@vicimpa/shared-state/shared-state.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function SharedState(state, { useState, useEffect } = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js")) {
  if(typeof state == 'function')
    state = state()

  if (!new.target)
    throw new Error('You need call SharedState with new keyword!')

  /** @type {Array<(state) => void>} */
  const dispatchList = []
  const symbol = Symbol('listener')
  const setState = (state) => { this.setState(state) }

  Object.defineProperty(this, 'state', {
    get() { return state },
    set(v) { console.warn(`You cant set property state. You need use setState method.`) }
  })

  Object.defineProperty(this, 'setState', {
    value(newState) {
      if(typeof newState == 'function')
        newState = newState(state)

      state = newState
      dispatchList.forEach(e => {
        if (e[symbol])
          e.call(this, newState)
        else
          e(newState)
      })
      return this
    }
  })

  Object.defineProperty(this, 'useState', {
    value(newState = state) {
      if(typeof newState == 'function')
        newState = newState()
        
      const [nowState, dispatcher] = useState(newState)

      useEffect(() => {
        if (newState !== state)
          this.setState(newState)

        dispatchList.push(dispatcher)

        return () => {
          const index = dispatchList.indexOf(dispatcher)

          if (index !== -1)
            dispatchList.splice(index, 1)
        }
      }, [])

      return [nowState, setState]
    }
  })

  Object.defineProperty(this, 'onChange', {
    value(callback) {
      callback[symbol] = true
      dispatchList.push(callback)
      return this
    }
  })

  Object.defineProperty(this, 'offChange', {
    value(callback) {
      if (!callback)
        while (callback = dispatchList.find(e => e[symbol]))
          this.offChange(callback)

      let index = -1

      while ((index = dispatchList.indexOf(callback)) !== -1)
        dispatchList.splice(index, 1)

      return this
    }
  })
}

exports.SharedState = SharedState


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./index.sass":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./index.sass ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fonts_thintel_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/thintel.ttf */ "./fonts/thintel.ttf");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_thintel_ttf__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  image-rendering: pixelated;\n  text-transform: uppercase;\n  background: #444;\n  user-select: none;\n  overflow: hidden;\n}\n\nbody {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n@font-face {\n  font-family: thintel;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@keyframes jumping {\n  0% {\n    transform: translateY(0) scale(1);\n  }\n  46% {\n    transform: translateY(0) scale(1);\n  }\n  50% {\n    transform: translateY(3px) scale(0.95);\n  }\n  52% {\n    transform: translateY(0) scale(1);\n  }\n  100% {\n    transform: translateY(0) scale(1);\n  }\n}\n.game {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.game .up, .game .down {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.game .up {\n  top: -50%;\n}\n.game .down {\n  bottom: -50%;\n}\n.game canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.game .start {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  opacity: 0;\n  transform: translateY(-100vh);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.game .start img {\n  animation: jumping 1s infinite;\n}\n.game .start[data-show] {\n  opacity: 1;\n  transition-duration: 0.8s;\n  transition-delay: 0.2s;\n  transform: translateY(0);\n}\n.game .end {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.game .end[data-show] .block {\n  opacity: 1;\n  transition-delay: 0.3s;\n  transition-duration: 0.8s;\n  transform: translateY(0vh) scale(1);\n}\n.game .end .block {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  background-color: #E2DB9F;\n  border: 1px solid #5D4051;\n  border-radius: 10px;\n  justify-content: space-between;\n  opacity: 0;\n  transform: translateY(20vh) scale(0.6);\n  transition-duration: 0.2s;\n  z-index: 2;\n}\n.game .end .block button {\n  cursor: pointer;\n  font-size: 13px;\n  font-family: thintel;\n  text-transform: uppercase;\n  background-color: #E56B08;\n  color: #fff;\n  border: 1px solid #5E3600;\n  border-bottom-width: 2px;\n  padding: 2.5px 20px;\n  box-shadow: inset -1px -1px 1px #fff, inset 1px 1px 1px #fff;\n  margin-bottom: 2px;\n  outline: none;\n}\n.game .end .block p {\n  font-family: thintel;\n  color: #F58364;\n  text-shadow: 0px 1px 1px #F2EBAB;\n  text-align: center;\n  font-weight: normal;\n  margin: 0;\n  font-size: 12px;\n}\n.game .end .block p span {\n  font-size: 13px;\n}\n.game .end .block .space {\n  flex-grow: 1;\n  height: 20px;\n}\n.game .debug {\n  position: absolute;\n  top: 5px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  padding: 1px 5px;\n  text-align: center;\n  overflow: hidden;\n}\n.game .debug p {\n  font-size: 40px;\n  transition-duration: 0.2s;\n  transition-delay: 0.3s;\n  transform: translateY(-100%);\n}\n.game .debug[data-show] p {\n  transition-delay: 0.1s;\n  transform: translateY(0);\n}\n.game .debug p {\n  margin: 0;\n  font-family: thintel;\n  color: #fff;\n}\n.game .debug p b {\n  display: none;\n}\n.game .debug p * {\n  font-weight: normal;\n}", "",{"version":3,"sources":["webpack://./index.sass"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,aAAA;EAEA,SAAA;EACA,UAAA;EACA,0BAAA;EACA,yBAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;AAAF;;AAEA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;AACF;;AACA;EACE,oBAAA;EACA,4CAAA;AAEF;AAAA;EACE;IACE,iCAAA;EAEF;EADA;IACE,iCAAA;EAGF;EAFA;IACE,sCAAA;EAIF;EAHA;IACE,iCAAA;EAKF;EAJA;IACE,iCAAA;EAMF;AACF;AAJA;EACE,kBAAA;EAEA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EAEA,YAAA;AAIF;AAFE;EACE,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;AAIJ;AAFE;EACE,SAAA;AAIJ;AAFE;EACE,YAAA;AAIJ;AAFE;EACE,kBAAA;EAEA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;AAGJ;AADE;EACE,kBAAA;EAEA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EAEA,YAAA;EAEA,UAAA;EACA,6BAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAAJ;AAEI;EACE,8BAAA;AAAN;AAEI;EACE,UAAA;EACA,yBAAA;EACA,sBAAA;EACA,wBAAA;AAAN;AAEE;EACE,kBAAA;EAEA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;AAFJ;AAKM;EACE,UAAA;EACA,sBAAA;EACA,yBAAA;EACA,mCAAA;AAHR;AAKI;EACE,aAAA;EACA,sBAAA;EAEA,aAAA;EAEA,yBAAA;EACA,yBAAA;EACA,mBAAA;EAEA,8BAAA;EAEA,UAAA;EACA,sCAAA;EACA,yBAAA;EACA,UAAA;AAPN;AASM;EACE,eAAA;EACA,eAAA;EACA,oBAAA;EACA,yBAAA;EACA,yBAAA;EACA,WAAA;EACA,yBAAA;EACA,wBAAA;EACA,mBAAA;EACA,4DAAA;EACA,kBAAA;EACA,aAAA;AAPR;AASM;EACE,oBAAA;EACA,cAAA;EACA,gCAAA;EACA,kBAAA;EACA,mBAAA;EACA,SAAA;EACA,eAAA;AAPR;AASQ;EACE,eAAA;AAPV;AASM;EACE,YAAA;EACA,YAAA;AAPR;AASE;EACE,kBAAA;EAEA,QAAA;EACA,SAAA;EACA,UAAA;EAEA,YAAA;EAEA,gBAAA;EAEA,kBAAA;EACA,gBAAA;AAXJ;AAaI;EACE,eAAA;EACA,yBAAA;EACA,sBAAA;EACA,4BAAA;AAXN;AAcM;EACE,sBAAA;EACA,wBAAA;AAZR;AAcI;EACE,SAAA;EACA,oBAAA;EACA,WAAA;AAZN;AAaM;EACE,aAAA;AAXR;AAYM;EACE,mBAAA;AAVR","sourcesContent":["html, body\n  width: 100vw\n  height: 100vh\n\n  margin: 0\n  padding: 0\n  image-rendering: pixelated\n  text-transform: uppercase\n  background: #444\n  user-select: none\n  overflow: hidden\n\nbody\n  position: fixed\n  top: 0\n  left: 0\n  right: 0\n  bottom: 0\n\n@font-face\n  font-family: thintel\n  src: url(/fonts/thintel.ttf)\n\n@keyframes jumping\n  0%\n    transform: translateY(0) scale(1)\n  46%\n    transform: translateY(0) scale(1)\n  50%\n    transform: translateY(3px) scale(0.95)\n  52%\n    transform: translateY(0) scale(1)\n  100%\n    transform: translateY(0) scale(1)\n    \n\n.game\n  position: absolute\n\n  top: 0\n  left: 0\n  right: 0\n  bottom: 0\n\n  margin: auto\n\n  .up, .down\n    position: absolute\n    left: 0\n    right: 0\n    top: 0\n    bottom: 0\n\n  .up\n    top: -50%\n\n  .down\n    bottom: -50%\n\n  canvas\n    position: absolute\n\n    top: 0\n    left: 0\n    right: 0\n    bottom: 0\n\n  .start\n    position: absolute\n\n    top: 0\n    left: 0\n    right: 0\n    bottom: 0\n\n    margin: auto\n\n    opacity: 0\n    transform: translateY(-100vh)\n    display: flex\n    justify-content: center\n    align-items: center\n\n    img\n      animation: jumping 1s infinite\n\n    &[data-show]\n      opacity: 1\n      transition-duration: 0.8s\n      transition-delay: 0.2s\n      transform: translateY(0)\n\n  .end\n    position: absolute\n\n    top: 0\n    left: 0\n    right: 0\n    bottom: 0\n\n    display: flex\n    justify-content: center\n    align-items: center\n\n    &[data-show]\n      .block\n        opacity: 1\n        transition-delay: 0.3s\n        transition-duration: 0.8s\n        transform: translateY(0vh) scale(1)\n\n    .block\n      display: flex\n      flex-direction: column\n\n      padding: 10px\n\n      background-color: #E2DB9F\n      border: 1px solid #5D4051\n      border-radius: 10px\n\n      justify-content: space-between\n\n      opacity: 0\n      transform: translateY(20vh) scale(0.6)\n      transition-duration: 0.2s\n      z-index: 2\n\n      button\n        cursor: pointer\n        font-size: 13px\n        font-family: thintel\n        text-transform: uppercase\n        background-color: #E56B08\n        color: #fff\n        border: 1px solid #5E3600\n        border-bottom-width: 2px\n        padding: 2.5px 20px\n        box-shadow: inset -1px -1px 1px #fff, inset 1px 1px 1px #fff\n        margin-bottom: 2px\n        outline: none\n\n      p\n        font-family: thintel\n        color: #F58364\n        text-shadow: 0px 1px 1px #F2EBAB\n        text-align: center\n        font-weight: normal\n        margin: 0\n        font-size: 12px\n\n        span\n          font-size: 13px\n\n      .space\n        flex-grow: 1\n        height: 20px\n\n  .debug\n    position: absolute\n\n    top: 5px\n    left: 0px\n    right: 0px\n\n    margin: auto\n\n    padding: 1px 5px\n\n    text-align: center\n    overflow: hidden\n\n    p\n      font-size: 40px\n      transition-duration: 0.2s\n      transition-delay: 0.3s\n      transform: translateY(-100%)\n\n    &[data-show]\n      p\n        transition-delay: 0.1s\n        transform: translateY(0)\n\n    p\n      margin: 0\n      font-family: thintel\n      color: #fff\n      b\n        display: none\n      *\n        font-weight: normal"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallback": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback),
/* harmony export */   "useContext": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext),
/* harmony export */   "useDebugValue": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue),
/* harmony export */   "useEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect),
/* harmony export */   "useErrorBoundary": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useErrorBoundary),
/* harmony export */   "useImperativeHandle": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle),
/* harmony export */   "useLayoutEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect),
/* harmony export */   "useMemo": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo),
/* harmony export */   "useReducer": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer),
/* harmony export */   "useRef": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef),
/* harmony export */   "useState": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState),
/* harmony export */   "createElement": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "createContext": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createContext),
/* harmony export */   "createRef": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "Fragment": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Fragment),
/* harmony export */   "Component": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "version": () => (/* binding */ ln),
/* harmony export */   "Children": () => (/* binding */ k),
/* harmony export */   "render": () => (/* binding */ z),
/* harmony export */   "hydrate": () => (/* binding */ B),
/* harmony export */   "unmountComponentAtNode": () => (/* binding */ sn),
/* harmony export */   "createPortal": () => (/* binding */ I),
/* harmony export */   "createFactory": () => (/* binding */ fn),
/* harmony export */   "cloneElement": () => (/* binding */ an),
/* harmony export */   "isValidElement": () => (/* binding */ cn),
/* harmony export */   "findDOMNode": () => (/* binding */ hn),
/* harmony export */   "PureComponent": () => (/* binding */ E),
/* harmony export */   "memo": () => (/* binding */ g),
/* harmony export */   "forwardRef": () => (/* binding */ x),
/* harmony export */   "unstable_batchedUpdates": () => (/* binding */ pn),
/* harmony export */   "StrictMode": () => (/* binding */ vn),
/* harmony export */   "Suspense": () => (/* binding */ L),
/* harmony export */   "SuspenseList": () => (/* binding */ F),
/* harmony export */   "lazy": () => (/* binding */ D),
/* harmony export */   "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED": () => (/* binding */ Q),
/* harmony export */   "unstable_ImmediatePriority": () => (/* binding */ X),
/* harmony export */   "unstable_UserBlockingPriority": () => (/* binding */ nn),
/* harmony export */   "unstable_NormalPriority": () => (/* binding */ tn),
/* harmony export */   "unstable_LowPriority": () => (/* binding */ en),
/* harmony export */   "unstable_IdlePriority": () => (/* binding */ rn),
/* harmony export */   "unstable_runWithPriority": () => (/* binding */ un),
/* harmony export */   "unstable_now": () => (/* binding */ on)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
function C(n,t){for(var e in t)n[e]=t[e];return n}function S(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n){this.props=n}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:S(this.props,n)}function r(t){return this.shouldComponentUpdate=e,(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return S(this.props,n)||S(this.state,t)};var w=preact__WEBPACK_IMPORTED_MODULE_1__.options.__b;preact__WEBPACK_IMPORTED_MODULE_1__.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n)};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=C({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).map(t))},k={map:N,forEach:N,count:function(n){return n?(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).length:0},only:function(n){var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray},A=preact__WEBPACK_IMPORTED_MODULE_1__.options.__e;preact__WEBPACK_IMPORTED_MODULE_1__.options.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e)};var O=preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount;function L(){this.__u=0,this.t=null,this.__b=null}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function D(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(e,u)}return u.displayName="Lazy",u.__f=!0,u}function F(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n)},(L.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i)},L.prototype.componentWillUnmount=function(){this.t=[]},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),t.__c.__H=null),null!=(t=C({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P)}this.__b=null}var u=t.__e&&(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,n.fallback);return u&&(u.__h=null),[(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,t.__e?null:n.children),u]};var M=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function T(n){return this.getChildContext=function(){return n.context},n.children}function j(n){var t=this,e=n.i;t.componentWillUnmount=function(){(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n)},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n)}}),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(T,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount()}function I(n,t){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(j,{__v:n,i:t})}(F.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),M(t,n,r)):u()};e?e(o):o()}},F.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},F.prototype.componentDidUpdate=F.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){M(n,e,t)})};var W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function z(n,t,e){return null==t.__k&&(t.textContent=""),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function B(n,t,e){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var H=preact__WEBPACK_IMPORTED_MODULE_1__.options.event;function Z(){}function Y(){return this.cancelBubble}function $(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_1__.options.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=$,n.nativeEvent=n};var q,G={configurable:!0,get:function(){return this.class}},J=preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode;preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),"select"==t&&null!=r.defaultValue&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value})),n.props=r}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n.$$typeof=W,J&&J(n)};var K=preact__WEBPACK_IMPORTED_MODULE_1__.options.__r;preact__WEBPACK_IMPORTED_MODULE_1__.options.__r=function(n){K&&K(n),q=n.__c};var Q={ReactCurrentDispatcher:{current:{readContext:function(n){return q.__n[n.__c].props.value}}}},X=1,nn=2,tn=3,en=4,rn=5;function un(n,t){return t()}var on="object"==typeof performance&&"function"==typeof performance.now?performance.now.bind(performance):function(){return Date.now()},ln="16.8.0";function fn(n){return preact__WEBPACK_IMPORTED_MODULE_1__.createElement.bind(null,n)}function cn(n){return!!n&&n.$$typeof===W}function an(n){return cn(n)?preact__WEBPACK_IMPORTED_MODULE_1__.cloneElement.apply(null,arguments):n}function sn(n){return!!n.__k&&((0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,n),!0)}function hn(n){return n&&(n.base||1===n.nodeType&&n)||null}var pn=function(n,t){return n(t)},vn=preact__WEBPACK_IMPORTED_MODULE_1__.Fragment;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo,useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue,version:"16.8.0",Children:k,render:z,hydrate:B,unmountComponentAtNode:sn,createPortal:I,createElement:preact__WEBPACK_IMPORTED_MODULE_1__.createElement,createContext:preact__WEBPACK_IMPORTED_MODULE_1__.createContext,createFactory:fn,cloneElement:an,createRef:preact__WEBPACK_IMPORTED_MODULE_1__.createRef,Fragment:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,isValidElement:cn,findDOMNode:hn,Component:preact__WEBPACK_IMPORTED_MODULE_1__.Component,PureComponent:E,memo:g,forwardRef:x,unstable_batchedUpdates:pn,StrictMode:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,Suspense:L,SuspenseList:F,lazy:D,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Q});
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ N),
/* harmony export */   "hydrate": () => (/* binding */ O),
/* harmony export */   "createElement": () => (/* binding */ a),
/* harmony export */   "h": () => (/* binding */ a),
/* harmony export */   "Fragment": () => (/* binding */ y),
/* harmony export */   "createRef": () => (/* binding */ h),
/* harmony export */   "isValidElement": () => (/* binding */ l),
/* harmony export */   "Component": () => (/* binding */ p),
/* harmony export */   "cloneElement": () => (/* binding */ S),
/* harmony export */   "createContext": () => (/* binding */ q),
/* harmony export */   "toChildArray": () => (/* binding */ w),
/* harmony export */   "options": () => (/* binding */ n)
/* harmony export */ });
var n,l,u,i,t,o,r={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n)}function a(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v(n,f,i,t,null)}function v(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function h(){return{current:null}}function y(n){return n.children}function p(n,l){this.props=n,this.context=l}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!b.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(b)}function b(){for(var n;b.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=c({},t)).__v=t.__v+1,I(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?d(t):o,t.__h),T(u,t),t.__e!=o&&_(t)))})}function m(n,l,u,i,t,o,e,c,s,a){var h,p,_,k,b,m,w,A=i&&i.__k||f,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(y,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null}I(n,k,_=_||r,t,o,e,c,s,a),b=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||b,k)),null!=b?(null==m&&(m=b),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g(k,s,n):s=x(n,k,_,A,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_))}for(u.__e=m,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h]));if(w)for(h=0;h<w.length;h++)z(w[h],w[++h],w[++h])}function g(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g(t,l,u):x(u,t,t,n.__k,t.__e,l));return l}function w(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){w(n,l)}):l.push(n)),l}function x(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px"}function C(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?H:$,o):n.removeEventListener(l,o?H:$,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function $(l){this.l[l.type+!1](n.event?n.event(l):l)}function H(l){this.l[l.type+!0](n.event?n.event(l):l)}function I(l,u,i,t,o,r,f,e,s){var a,v,h,d,_,k,b,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?b=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k)})}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c(c({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),b&&(v.__E=v.__=null),v.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j(i.__e,u,i,t,o,r,f,s);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(s||null!=r)&&(u.__e=e,u.__h=!!s,r[r.indexOf(e)]=null),n.__e(l,u,i)}}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,i,t,o,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=o)for(;k<o.length;k++)if((a=o[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,o[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,c=!1}if(null===_)p===d||c&&n.data===d||(n.data=d);else{if(o=o&&f.slice.call(n.childNodes),v=(p=u.props||r).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""))}if(A(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,m(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,o,e,n.firstChild,c),null!=o)for(k=o.length;k--;)null!=o[k]&&s(o[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C(n,"checked",k,p.checked,!1))}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||z(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&s(o)}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,o,e;n.__&&n.__(l,u),o=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],I(u,l=(!t&&i||u).__k=a(y,null,[l]),o||r,r,void 0!==u.ownerSVGElement,!t&&i?[i]:o?null:u.firstChild?f.slice.call(u.childNodes):null,e,!t&&i?i:o?o.__e:u.firstChild,t),T(e,l)}function O(n,l){N(n,l,O)}function S(n,l,u){var i,t,o,r=arguments,f=c({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),v(n.type,f,i||n.key,t||n.ref,null)}function q(n,l){var u={__c:l="__cC"+o++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n},__v:0},l=function(n){return null!=n&&void 0===n.constructor},p.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},p.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,o=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useState": () => (/* binding */ l),
/* harmony export */   "useReducer": () => (/* binding */ p),
/* harmony export */   "useEffect": () => (/* binding */ y),
/* harmony export */   "useLayoutEffect": () => (/* binding */ h),
/* harmony export */   "useRef": () => (/* binding */ s),
/* harmony export */   "useImperativeHandle": () => (/* binding */ _),
/* harmony export */   "useMemo": () => (/* binding */ d),
/* harmony export */   "useCallback": () => (/* binding */ A),
/* harmony export */   "useContext": () => (/* binding */ F),
/* harmony export */   "useDebugValue": () => (/* binding */ T),
/* harmony export */   "useErrorBoundary": () => (/* binding */ q)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,u,r,o=0,i=[],c=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,f=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,e=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,v=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function m(t,r){preact__WEBPACK_IMPORTED_MODULE_0__.options.__h&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i))}function h(r,o){var i=m(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i))}function s(n){return o=5,d(function(){return{current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A(n,t){return o=8,d(function(){return n},t)}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function T(t,u){preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(u?u(t):t)}function q(n){var r=m(t++,10),o=l();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(u){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u,t.__v)}}),i=[]}preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){u=null,c&&c(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[])},preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u))})(x)),u=void 0},preact__WEBPACK_IMPORTED_MODULE_0__.options.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return!n.__||j(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,t.__v)}}),a&&a(t,u)},preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g)}catch(t){preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(t,u.__v)}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t}function j(n){var t=u;n.__c=n.__(),u=t}function k(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./index.sass":
/*!********************!*\
  !*** ./index.sass ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./index.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./index.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./class/Back.ts":
/*!***********************!*\
  !*** ./class/Back.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Back = void 0;
const config_1 = __webpack_require__(/*! ~/config */ "./config.ts");
const Utils_1 = __webpack_require__(/*! ~/lib/Utils */ "./lib/Utils.ts");
const Entity_1 = __webpack_require__(/*! ./Entity */ "./class/Entity.ts");
class Back extends Entity_1.Entity {
    constructor() {
        super(...arguments);
        this.ready = false;
        this.width = config_1.game.width;
        this.height = config_1.game.height;
        this.speed = config_1.game.width / config_1.game.speed;
        this.color = 0;
        this.position = 0;
        this.colors = 0;
        this.first = true;
    }
    init() {
        this.image = new Image();
        this.image.src = __webpack_require__(/*! ~/img/back.png */ "./img/back.png").default;
        this.image.onload = () => {
            this.ready = true;
            this.colors = this.image.height / this.height;
            this.color = Utils_1.rand(0, this.colors - 1);
        };
    }
    update(delta, time) {
        const { width, game, backColor } = this;
        if (game.stage < 2)
            this.position += delta * this.speed;
        if (backColor) {
            game.topColor = [...backColor];
            delete this.backColor;
        }
        this.position %= width;
    }
    render({ ctx }) {
        if (!this.ready)
            return;
        const { width, height } = this;
        const { color, position, image } = this;
        const xdiv1 = position;
        const xdiv2 = width - xdiv1;
        const zWidth = width * config_1.zoom;
        const zHeight = height * config_1.zoom;
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, 0, height * color, width, height, -xdiv1 * config_1.zoom, 0, zWidth, zHeight);
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, 0, height * color, width, height, xdiv2 * config_1.zoom, 0, zWidth, zHeight);
        if (this.first) {
            this.first = false;
            this.backColor = ctx.getImageData(xdiv2 * config_1.zoom, 0, 1, 1).data;
        }
    }
}
exports.Back = Back;


/***/ }),

/***/ "./class/Bird.ts":
/*!***********************!*\
  !*** ./class/Bird.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bird = void 0;
const Entity_1 = __webpack_require__(/*! ./Entity */ "./class/Entity.ts");
const config_1 = __webpack_require__(/*! ~/config */ "./config.ts");
const Utils_1 = __webpack_require__(/*! ~/lib/Utils */ "./lib/Utils.ts");
const Sounds_1 = __webpack_require__(/*! ~/lib/Sounds */ "./lib/Sounds.ts");
const { abs } = Math;
const PI5 = Math.PI / 70;
const PID = Math.PI / 2;
const F = Math.PI / 180;
class Bird extends Entity_1.Entity {
    constructor() {
        super(...arguments);
        this.ready = false;
        this.sX = 20;
        this.sY = 100;
        this.width = config_1.bird.width;
        this.height = config_1.bird.height;
        this.frame = 0;
        this.color = 0;
        this.rotate = 0;
        this.speed = 0;
        this.maxSpeed = 20;
        this.maxSpeed2 = 40;
        this.minSpeed = -15;
        this.frames = 0;
        this.colors = 0;
        this.upFly = 80;
        this.upFlyNeed = this.upFly;
        this.upFlyCount = 250;
        this.upFlyLast = performance.now();
    }
    init() {
        this.image = new Image();
        this.image.src = __webpack_require__(/*! ~/img/bird.png */ "./img/bird.png").default;
        this.image.onload = () => {
            this.ready = true;
            this.frames = this.image.width / this.width;
            this.colors = this.image.height / this.height;
            this.reset();
        };
    }
    reset() {
        this.x = 20;
        this.y = 100;
        this.rotate = 0;
        this.color = Utils_1.rand(0, this.colors - 1);
    }
    click() {
        if (this.game.stage == 1) {
            this.upFlyLast = performance.now();
            if (this.y > -this.height) {
                this.upFly = this.upFlyNeed / 4;
                this.speed = this.minSpeed;
                Sounds_1.Sound.wing.play();
            }
        }
    }
    update(delta = 0, time = 0) {
        const { upFly, height: birdHeight, game, frames } = this;
        const { stage, heightFiel: height, objects } = game;
        const maxSpeed = stage == 1 ? this.maxSpeed : this.maxSpeed2;
        if (this.upFly != this.upFlyNeed) {
            if (time - this.upFlyLast >= this.upFlyCount)
                this.upFly = this.upFlyNeed;
        }
        if (stage < 2)
            this.frame = (abs(time % (upFly * frames * 2) - upFly * frames) / upFly) | 0;
        if (stage == 0)
            this.y = 100 + Math.cos(PID + time * 0.005) * 10;
        for (let i = 0; i < objects.length; i++) {
            const obj = objects[i];
            if (!obj.isInit)
                continue;
            if (obj.x < this.x && !obj.score) {
                obj.score = true;
                game.addScore();
                Sounds_1.Sound.point.play();
            }
            if (obj.isColize(this) && stage == 1) {
                game.stage = 2;
                Sounds_1.Sound.hit.play();
                setTimeout((e) => {
                    Sounds_1.Sound.die.play();
                }, 300);
                if (this.x > obj.x) {
                    if (this.y > obj.y)
                        this.speed = this.minSpeed * 0.8;
                    else
                        this.speed = 0;
                }
                else {
                    this.speed = 0;
                }
            }
        }
        if (stage == 1 || stage == 2) {
            this.rotate = (this.speed * 50 * PI5 - 10) * F;
            if (this.y < height - birdHeight)
                this.speed += 0.04 * delta;
            if (this.speed > maxSpeed)
                this.speed = maxSpeed;
            this.y += this.speed * delta * 0.01;
            if (this.y > height - birdHeight) {
                this.y = height - birdHeight;
                this.game.stage = 3;
                Sounds_1.Sound.hit.play();
            }
        }
    }
    render({ ctx }) {
        if (!this.ready)
            return;
        const { image, x, y, width, height } = this;
        const { color, frame } = this;
        const zWidth = width * config_1.zoom;
        const zHeight = height * config_1.zoom;
        const nX = x * config_1.zoom;
        const nY = y * config_1.zoom;
        const dX = zWidth * .5;
        const dY = zHeight * .5;
        ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
        ctx === null || ctx === void 0 ? void 0 : ctx.save();
        ctx === null || ctx === void 0 ? void 0 : ctx.translate(nX + dX, nY + dY);
        ctx === null || ctx === void 0 ? void 0 : ctx.rotate(this.rotate);
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, width * frame, color * height, width, height, -dX, -dY, zWidth, zHeight);
        ctx === null || ctx === void 0 ? void 0 : ctx.rotate(-this.rotate);
        ctx === null || ctx === void 0 ? void 0 : ctx.translate(-nX - dX, -nY - dY);
        ctx === null || ctx === void 0 ? void 0 : ctx.restore();
        ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    }
}
exports.Bird = Bird;


/***/ }),

/***/ "./class/Debug.ts":
/*!************************!*\
  !*** ./class/Debug.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Debug = void 0;
const shared_state_1 = __webpack_require__(/*! @vicimpa/shared-state */ "./node_modules/@vicimpa/shared-state/shared-state.js");
const Entity_1 = __webpack_require__(/*! ./Entity */ "./class/Entity.ts");
class Debug extends Entity_1.Entity {
    constructor() {
        super(...arguments);
        this.data = new shared_state_1.SharedState({});
    }
    get(key) {
        return this.data.state[key];
    }
    set(key, value) {
        const { state } = this.data;
        if (this.get(key) != value)
            this.data.setState({ ...state, [key]: `${value}` });
    }
    del(key) {
        const { state } = this.data;
        const { [key]: v, ...newState } = state;
        if (this.get(key))
            this.data.setState(newState);
    }
}
exports.Debug = Debug;


/***/ }),

/***/ "./class/Entity.ts":
/*!*************************!*\
  !*** ./class/Entity.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Entity = void 0;
class Entity {
    constructor(game) {
        this.isInit = false;
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.game = game;
    }
    init() { }
    update(delta = 0, time = 0) { }
    render(display) { }
    down({ x = 0, y = 0 }) { }
    up({ x = 0, y = 0 }) { }
    click({ x = 0, y = 0 }) { }
}
exports.Entity = Entity;


/***/ }),

/***/ "./class/Game.ts":
/*!***********************!*\
  !*** ./class/Game.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
const Bird_1 = __webpack_require__(/*! ./Bird */ "./class/Bird.ts");
const Debug_1 = __webpack_require__(/*! ./Debug */ "./class/Debug.ts");
const Pipe_1 = __webpack_require__(/*! ./Pipe */ "./class/Pipe.ts");
const Utils_1 = __webpack_require__(/*! ~/lib/Utils */ "./lib/Utils.ts");
const config_1 = __webpack_require__(/*! ~/config */ "./config.ts");
const Display_1 = __webpack_require__(/*! ~/view/Display */ "./view/Display.tsx");
const shared_state_1 = __webpack_require__(/*! @vicimpa/shared-state */ "./node_modules/@vicimpa/shared-state/shared-state.js");
const Back_1 = __webpack_require__(/*! ./Back */ "./class/Back.ts");
const Road_1 = __webpack_require__(/*! ./Road */ "./class/Road.ts");
const Sounds_1 = __webpack_require__(/*! ~/lib/Sounds */ "./lib/Sounds.ts");
const initialState = {
    score: 0,
    stage: 0,
    start: false,
    end: false
};
class Game {
    constructor() {
        this.state = new shared_state_1.SharedState({
            ...initialState, hiscore: (() => {
                let hiscore = +localStorage.getItem(config_1.hiscoreKey);
                return isNaN(hiscore) ? 0 : hiscore;
            })()
        });
        this.width = config_1.game.width;
        this.height = config_1.game.height;
        this.heightFiel = this.height - config_1.road.height;
        this.display = new Display_1.Display(this);
        this.double = new Display_1.Display(this);
        this.back = new Back_1.Back(this);
        this.road = new Road_1.Road(this);
        this.bird = new Bird_1.Bird(this);
        this.debug = new Debug_1.Debug(this);
        this.objects = [];
        this.work = true;
        this.last = performance.now();
        this.state.onChange(this.change);
        this.update();
    }
    click() {
        if (this.stage == 0) {
            this.stage = 1;
            if (this.objects.length == 0)
                this.addPipe();
        }
        this.bird.click();
    }
    change() {
        const { state, setState } = this.state;
        let { score, hiscore } = state;
        if (score > hiscore) {
            hiscore = score;
            setState({ ...state, hiscore });
            localStorage.setItem(config_1.hiscoreKey, `${hiscore}`);
        }
    }
    addScore() {
        this.score++;
    }
    reset() {
        this.state.setState({
            ...this.state.state,
            ...initialState
        });
        this.objects.splice(0);
        this.bird.reset();
        Sounds_1.Sound.swooshing.play();
    }
    github() {
        window.open(config_1.github);
    }
    addPipe() {
        this.objects.push(new Pipe_1.Pipe(this));
    }
    dropPipe(p) {
        const { objects } = this;
        if (!p) {
            const { length: l } = objects;
            for (let i = 0; i < l; i++) {
                const obj = objects[i];
                if (obj instanceof Pipe_1.Pipe)
                    this.dropPipe(obj);
            }
            return;
        }
        let index = objects.indexOf(p);
        if (index != -1)
            objects.splice(index, 1);
    }
    update(time = 0) {
        const delta = time - this.last;
        this.last = time;
        const { objects } = this;
        const { length } = objects;
        this.back.update(delta, time);
        this.road.update(delta, time);
        for (let i = 0; i < length; i++) {
            const obj = objects[i];
            if (!obj)
                continue;
            if (!obj.isInit) {
                obj.init();
                obj.isInit = true;
            }
            obj.update(delta, time);
        }
        this.bird.update(delta, time);
        this.debug.update(delta, time);
        if (delta > 100 && this.work)
            return requestAnimationFrame(this.update);
        this.render();
    }
    render() {
        var _a, _b;
        const { display, objects } = this;
        const { length } = objects;
        if ((_a = display.ctx) === null || _a === void 0 ? void 0 : _a.imageSmoothingEnabled)
            display.ctx.imageSmoothingEnabled = false;
        (_b = display.ctx) === null || _b === void 0 ? void 0 : _b.clearRect(0, 0, this.width * config_1.zoom, this.height * config_1.zoom);
        this.back.render(display);
        this.road.render(display);
        for (let i = 0; i < length; i++) {
            const obj = objects[i];
            obj === null || obj === void 0 ? void 0 : obj.render(display);
        }
        this.bird.render(display);
        this.debug.render(display);
        if (this.work)
            return requestAnimationFrame(this.update);
    }
}
__decorate([
    Utils_1.state('state')
], Game.prototype, "topColor", void 0);
__decorate([
    Utils_1.state('state')
], Game.prototype, "bottomColor", void 0);
__decorate([
    Utils_1.state('state')
], Game.prototype, "stage", void 0);
__decorate([
    Utils_1.state('state')
], Game.prototype, "start", void 0);
__decorate([
    Utils_1.state('state')
], Game.prototype, "score", void 0);
__decorate([
    Utils_1.init()
], Game.prototype, "back", void 0);
__decorate([
    Utils_1.init()
], Game.prototype, "road", void 0);
__decorate([
    Utils_1.init()
], Game.prototype, "bird", void 0);
__decorate([
    Utils_1.init()
], Game.prototype, "debug", void 0);
__decorate([
    Utils_1.bind()
], Game.prototype, "click", null);
__decorate([
    Utils_1.bind()
], Game.prototype, "change", null);
__decorate([
    Utils_1.bind()
], Game.prototype, "addScore", null);
__decorate([
    Utils_1.bind()
], Game.prototype, "reset", null);
__decorate([
    Utils_1.bind()
], Game.prototype, "github", null);
__decorate([
    Utils_1.bind()
], Game.prototype, "addPipe", null);
__decorate([
    Utils_1.bind()
], Game.prototype, "dropPipe", null);
__decorate([
    Utils_1.bind()
], Game.prototype, "update", null);
__decorate([
    Utils_1.bind()
], Game.prototype, "render", null);
exports.Game = Game;


/***/ }),

/***/ "./class/Pipe.ts":
/*!***********************!*\
  !*** ./class/Pipe.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Pipe = void 0;
const Utils_1 = __webpack_require__(/*! ~/lib/Utils */ "./lib/Utils.ts");
const Entity_1 = __webpack_require__(/*! ./Entity */ "./class/Entity.ts");
const config_1 = __webpack_require__(/*! ~/config */ "./config.ts");
class Pipe extends Entity_1.Entity {
    constructor() {
        super(...arguments);
        this.ready = false;
        this.go = false;
        this.score = false;
        this.width = config_1.pipe.width;
        this.height = config_1.pipe.height;
        this.speed = config_1.game.width / config_1.pipe.speed;
        this.padding = 40;
        this.door = 40;
        this.deltaPad = this.padding;
        this.div = 1 / config_1.pipe.speed;
        this.marg = 0;
    }
    margin(v = 0) {
        this.marg = v;
        return this;
    }
    init() {
        const { padding } = this;
        const { height } = config_1.game;
        const { height: roadSize } = config_1.road;
        const { door } = this;
        this.image = new Image();
        this.image.src = __webpack_require__(/*! ~/img/pipe.png */ "./img/pipe.png").default;
        this.image.onload = () => {
            this.ready = true;
        };
        this.x = config_1.game.width + 50;
        this.y = Utils_1.rand(padding, height - roadSize - door - padding / 2);
    }
    isColize(bird) {
        if (this.x + 3 > bird.x + bird.width)
            return false;
        if (this.x + this.width - 3 < bird.x)
            return false;
        if (bird.y + 2 > this.y && bird.y + bird.height - 2 < this.y + this.door)
            return false;
        return true;
    }
    update(delta = 0, time) {
        const { game } = this;
        if (game.stage == 1)
            this.x -= delta * this.speed;
        if (this.x < -this.width)
            game.dropPipe(this);
        if (this.x < game.width * .5 && !this.go) {
            this.go = true;
            game.addPipe();
        }
    }
    render({ ctx }) {
        if (!this.ready)
            return;
        const { image, width, height, x, y, door } = this;
        const zWidth = width * config_1.zoom;
        const zHeight = height * config_1.zoom;
        const nHeihgt = height - y + 40 - door;
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, width * 0, height * 0, width, height, x * config_1.zoom, y * config_1.zoom - zHeight, zWidth, zHeight);
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, width * 1, height * 0, width, nHeihgt, x * config_1.zoom, y * config_1.zoom + door * config_1.zoom, zWidth, nHeihgt * config_1.zoom);
    }
}
exports.Pipe = Pipe;


/***/ }),

/***/ "./class/Road.ts":
/*!***********************!*\
  !*** ./class/Road.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Road = void 0;
const config_1 = __webpack_require__(/*! ~/config */ "./config.ts");
const Entity_1 = __webpack_require__(/*! ./Entity */ "./class/Entity.ts");
class Road extends Entity_1.Entity {
    constructor() {
        super(...arguments);
        this.ready = false;
        this.color = 0;
        this.position = 0;
        this.speed = config_1.road.width / config_1.road.speed;
        this.width = config_1.road.width;
        this.height = config_1.road.height;
        this.first = true;
    }
    init() {
        this.image = new Image();
        this.image.src = __webpack_require__(/*! ~/img/road.png */ "./img/road.png").default;
        this.image.onload = () => {
            this.ready = true;
        };
    }
    update(delta, time) {
        const { width, backColor, game } = this;
        if (game.stage < 2)
            this.position += delta * this.speed;
        this.position %= width;
        if (backColor) {
            game.bottomColor = [...backColor];
            delete this.backColor;
        }
    }
    render({ ctx }) {
        if (!this.ready)
            return;
        const { width, height, game } = this;
        const { color, position, image } = this;
        const xdiv1 = position;
        const xdiv2 = width - xdiv1;
        const zWidth = width * config_1.zoom;
        const zHeight = height * config_1.zoom;
        const ydiv1 = game.height * config_1.zoom - zHeight;
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, 0, height * color, width, height, -xdiv1 * config_1.zoom, ydiv1, zWidth, zHeight);
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, 0, height * color, width, height, xdiv2 * config_1.zoom, ydiv1, zWidth, zHeight);
        if (this.first) {
            this.first = false;
            this.backColor = ctx.getImageData(xdiv2 * config_1.zoom, ydiv1 + zHeight - 2, 1, 1).data;
        }
    }
}
exports.Road = Road;


/***/ }),

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.github = exports.hiscoreKey = exports.bird = exports.road = exports.pipe = exports.game = exports.zoom = void 0;
exports.zoom = 2;
exports.game = {
    width: 144,
    height: 256,
    speed: 3000
};
exports.pipe = {
    width: 26,
    height: 160,
    speed: 1400
};
exports.road = {
    width: 144,
    height: 56,
    speed: 1400
};
exports.bird = {
    width: 17,
    height: 12
};
exports.hiscoreKey = 'flappy-bird-best';
exports.github = `https://github.com/vicimpa/scrappy-bird2`;


/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const compat_1 = __importStar(__webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js"));
const Game_1 = __webpack_require__(/*! ~/view/Game */ "./view/Game.tsx");
__webpack_require__(/*! ~/index.sass */ "./index.sass");
compat_1.render(compat_1.default.createElement(Game_1.GameComponent, null), document.body);
document.head.innerHTML += (`
    <link rel="manifest" href="./manifest.json">
`);
addEventListener("load", () => {
    if (navigator.serviceWorker) {
        navigator.serviceWorker
            .register("./servise.js", {
            scope: location.pathname
        })
            .catch(() => { });
    }
});


/***/ }),

/***/ "./lib/Effect.ts":
/*!***********************!*\
  !*** ./lib/Effect.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.listen = void 0;
const hooks_1 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
function listen(t, ...a) {
    hooks_1.useEffect(() => {
        t.addEventListener.call(t, ...a);
        return () => t.removeEventListener.call(t, ...a);
    });
}
exports.listen = listen;


/***/ }),

/***/ "./lib/Sounds.ts":
/*!***********************!*\
  !*** ./lib/Sounds.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _src, _audio;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sound = void 0;
class Sound {
    constructor(src = '') {
        _src.set(this, '');
        _audio.set(this, void 0);
        if (typeof src == 'object')
            __classPrivateFieldSet(this, _src, src['default']);
        else
            __classPrivateFieldSet(this, _src, src);
        __classPrivateFieldSet(this, _audio, new Audio(__classPrivateFieldGet(this, _src)));
        __classPrivateFieldGet(this, _audio).volume = 0.3;
        __classPrivateFieldGet(this, _audio).preload = 'auto';
        __classPrivateFieldGet(this, _audio).controls = false;
    }
    play() {
        if (__classPrivateFieldGet(this, _audio).played) {
            __classPrivateFieldGet(this, _audio).currentTime = 0;
            __classPrivateFieldGet(this, _audio).pause();
        }
        __classPrivateFieldGet(this, _audio).play()
            .catch(() => null);
    }
}
exports.Sound = Sound;
_src = new WeakMap(), _audio = new WeakMap();
Sound.die = new Sound(__webpack_require__(/*! ~/sound/die.mp3 */ "./sound/die.mp3"));
Sound.hit = new Sound(__webpack_require__(/*! ~/sound/hit.mp3 */ "./sound/hit.mp3"));
Sound.point = new Sound(__webpack_require__(/*! ~/sound/point.mp3 */ "./sound/point.mp3"));
Sound.swooshing = new Sound(__webpack_require__(/*! ~/sound/swooshing.mp3 */ "./sound/swooshing.mp3"));
Sound.wing = new Sound(__webpack_require__(/*! ~/sound/wing.mp3 */ "./sound/wing.mp3"));


/***/ }),

/***/ "./lib/Utils.ts":
/*!**********************!*\
  !*** ./lib/Utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init = exports.state = exports.getZoom = exports.toZoom = exports.isTouchDevice = exports.rand = exports.bind = exports.isChild = exports.toObject = void 0;
const Entity_1 = __webpack_require__(/*! ~/class/Entity */ "./class/Entity.ts");
const config_1 = __webpack_require__(/*! ~/config */ "./config.ts");
function toObject(input, output) {
    if (typeof input != 'object')
        return;
    for (let key in input) {
        if (typeof input[key] == 'object')
            toObject(input[key], output[key]);
        else
            output[key] = input[key];
    }
}
exports.toObject = toObject;
class Fake {
}
function isChild(target, find) {
    if ('base' in find)
        find = find['base'];
    while (target && target instanceof HTMLElement && target.parentElement != find) {
        if (target == document.body)
            return false;
        target = target.parentElement;
    }
    return target instanceof HTMLElement;
}
exports.isChild = isChild;
function bind(n) {
    const decor = (target, key, prop) => {
        if (typeof prop.value != 'function')
            return prop;
        return {
            get() {
                return this[`__${key}`] ||
                    (this[`__${key}`] = prop.value.bind(n ? n : this));
            }
        };
    };
    return decor;
}
exports.bind = bind;
function rand(min, max = 0) {
    if (max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    else {
        return Math.floor(Math.random() * (min + 1));
    }
}
exports.rand = rand;
function isTouchDevice() {
    return ('ontouchstart' in window) ||
        !!navigator.maxTouchPoints ||
        !!navigator.msMaxTouchPoints;
}
exports.isTouchDevice = isTouchDevice;
function toZoom(size, z = config_1.zoom) {
    const newSize = { ...size };
    for (let key in newSize)
        newSize[key] = (newSize[key] * z);
    return newSize;
}
exports.toZoom = toZoom;
function getZoom() {
    const { offsetWidth, offsetHeight } = document.body;
    const { width, height } = toZoom(config_1.game);
    return Math.min(offsetWidth / width, offsetHeight / height);
}
exports.getZoom = getZoom;
function state(stateKey) {
    const decor = (target, key) => {
        return {
            get() {
                const { state } = this[stateKey];
                return state[key];
            },
            set(v) {
                const { state, setState } = this[stateKey];
                if (state[key] != v)
                    setState({ ...state, [key]: v });
            }
        };
    };
    return decor;
}
exports.state = state;
function init() {
    const decor = (target, key) => {
        return {
            get() {
                const data = this[`_${key}`];
                if (data instanceof Entity_1.Entity) {
                    if (!data.isInit) {
                        data.init();
                        data.isInit = true;
                    }
                }
                return data;
            },
            set(v) {
                this[`_${key}`] = v;
            }
        };
    };
    return decor;
}
exports.init = init;


/***/ }),

/***/ "./view/Display.tsx":
/*!**************************!*\
  !*** ./view/Display.tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _can;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Display = void 0;
const compat_1 = __importStar(__webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js"));
const config_1 = __webpack_require__(/*! ~/config */ "./config.ts");
class Display extends compat_1.Component {
    constructor(game) {
        super();
        this.game = game;
        _can.set(this, compat_1.createRef());
    }
    get can() {
        return __classPrivateFieldGet(this, _can).current;
    }
    get ctx() {
        var _a;
        return ((_a = this === null || this === void 0 ? void 0 : this.can) === null || _a === void 0 ? void 0 : _a.ctx) ||
            (this.can && (this.can.ctx = this.can.getContext('2d')));
    }
    render() {
        return (compat_1.default.createElement("canvas", { onMouseDown: this.game.click, width: this.game.width * config_1.zoom, height: this.game.height * config_1.zoom, ref: __classPrivateFieldGet(this, _can) }));
    }
}
exports.Display = Display;
_can = new WeakMap();


/***/ }),

/***/ "./view/End.tsx":
/*!**********************!*\
  !*** ./view/End.tsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EndComponent = void 0;
const compat_1 = __importStar(__webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js"));
const config_1 = __webpack_require__(/*! ~/config */ "./config.ts");
const EndComponent = (props) => {
    const { show = false, score = 0, hiscore = 0 } = props;
    const scoreRef = compat_1.createRef();
    const hiscoreRef = compat_1.createRef();
    compat_1.useEffect(() => {
        const c = () => {
            scoreRef.current &&
                scoreRef.current.innerText != `${score}` &&
                (scoreRef.current.innerText = `${score}`);
            hiscoreRef.current &&
                hiscoreRef.current.innerText != `${hiscore}` &&
                (hiscoreRef.current.innerText = `${hiscore}`);
        };
        const d = setInterval(c, 100);
        c();
        return () => clearInterval(d);
    });
    return (compat_1.default.createElement("div", { style: { transform: `scale(${config_1.zoom})` }, "data-show": show, className: "end" },
        compat_1.default.createElement("div", { ref: props.ref, className: "block" },
            compat_1.default.createElement("p", { className: "score" },
                "Score ",
                compat_1.default.createElement("span", { ref: scoreRef }, score)),
            compat_1.default.createElement("p", { className: "hiscore" },
                "Best ",
                compat_1.default.createElement("span", { ref: hiscoreRef }, hiscore)),
            compat_1.default.createElement("div", { className: "space" }),
            props.children)));
};
exports.EndComponent = EndComponent;


/***/ }),

/***/ "./view/Game.tsx":
/*!***********************!*\
  !*** ./view/Game.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameComponent = void 0;
const compat_1 = __importStar(__webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js"));
const Effect_1 = __webpack_require__(/*! ~/lib/Effect */ "./lib/Effect.ts");
const Utils_1 = __webpack_require__(/*! ~/lib/Utils */ "./lib/Utils.ts");
const cfg = __importStar(__webpack_require__(/*! ~/config */ "./config.ts"));
const Start_1 = __webpack_require__(/*! ./Start */ "./view/Start.tsx");
const End_1 = __webpack_require__(/*! ./End */ "./view/End.tsx");
const Game_1 = __webpack_require__(/*! ~/class/Game */ "./class/Game.ts");
const game = new Game_1.Game();
const GameComponent = () => {
    const [scale, setScale] = compat_1.useState(Utils_1.getZoom());
    const [{ stage, score, hiscore }] = game.state.useState();
    const { topColor, bottomColor } = game;
    const scoreRef = compat_1.createRef();
    const showEnd = stage == 3;
    const endRef = compat_1.createRef();
    const style = {
        transform: `scale(${scale})`,
        width: `${cfg.game.width * cfg.zoom}px`,
        height: `${cfg.game.height * cfg.zoom}px`
    };
    const top = {
        background: topColor &&
            `rgba(${topColor.join(',')})`
    };
    const bottom = {
        background: bottomColor &&
            `rgba(${bottomColor.join(',')})`
    };
    Effect_1.listen(window, 'DOMNodeInserted', (e) => {
        console.log(e);
    });
    Effect_1.listen(window, 'resize', () => {
        const newScale = Utils_1.getZoom();
        if (scale != newScale)
            setScale(newScale);
    });
    Effect_1.listen(window, 'contextmenu', (e) => {
        e.preventDefault();
    });
    Effect_1.listen(window, 'keydown', (e) => {
        e.preventDefault();
        if (e.key == ' ' || e.key == 'Space')
            game.click();
        if (e.key == 'Enter' && stage == 3)
            game.reset();
    });
    compat_1.useEffect(() => {
        setScale(Utils_1.getZoom());
    });
    compat_1.useEffect(() => {
        const c = () => {
            scoreRef.current &&
                scoreRef.current.innerText != `${score}` &&
                (scoreRef.current.innerText = `${score}`);
        };
        const d = setInterval(c, 100);
        c();
        return () => clearInterval(d);
    });
    const click = (e) => {
        if (!showEnd)
            e.preventDefault();
        if (Utils_1.isChild(e.target, endRef.current) && showEnd)
            return;
        if (!Utils_1.isTouchDevice() && e.button == 0)
            game.click();
    };
    const touch = (e) => {
        if (!showEnd)
            e.preventDefault();
        game.click();
    };
    return (compat_1.default.createElement("div", { style: style, onMouseDown: click, onTouchStart: touch, className: "game" },
        game.double.render(),
        game.display.render(),
        compat_1.default.createElement("div", { "data-show": stage == 1 || stage == 2, className: "debug" },
            compat_1.default.createElement("p", { ref: scoreRef }, score)),
        compat_1.default.createElement(Start_1.StartComponent, { show: stage == 0 }),
        compat_1.default.createElement(End_1.EndComponent, { ref: endRef, show: showEnd, score: score, hiscore: hiscore },
            compat_1.default.createElement("button", { onClick: game.reset }, "Restart (Enter)"),
            compat_1.default.createElement("button", { onClick: game.github }, "Github"))));
};
exports.GameComponent = GameComponent;


/***/ }),

/***/ "./view/Start.tsx":
/*!************************!*\
  !*** ./view/Start.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StartComponent = void 0;
const compat_1 = __importDefault(__webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js"));
const config_1 = __webpack_require__(/*! ~/config */ "./config.ts");
const StartComponent = ({ show = false }) => {
    return (compat_1.default.createElement("div", { style: { transform: `scale(${config_1.zoom})` }, "data-show": show, className: "start" },
        compat_1.default.createElement("img", { src: __webpack_require__(/*! ~/img/start.png */ "./img/start.png").default })));
};
exports.StartComponent = StartComponent;


/***/ }),

/***/ "./fonts/thintel.ttf":
/*!***************************!*\
  !*** ./fonts/thintel.ttf ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:font/ttf;base64,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AAABAAHAAAQADwAANTM1IxUXMxEjFSMVMxUjFUBAQMBAgICAQMDAQAHAgEDAQAAAAAMAAAAAAQABQAAEAA8AFAAAOwE1IxUnMzUzNSMVIzUjFTczNSMVQMDAQEDAQIBAQICAQEBAQIBAQMDAQEAAAAACAAAAAADAAcAACAANAAAxMzUzNSM1IxETMzUjFUBAQEBAgIDAQID+gAGAQEAAAAAEAAD/QAEAAUAABAAJAA4AGQAAFzM1IxUnMzUjFTUzNSMVFzMRIxUzFSMVMxVAgIBAQEBAQMBAwICAgMBAQEBAQMDAwMABwEDAQIAAAgAAAAABAAHAAAQADQAAOwERIxEjMxEzNSM1IxHAQEDAQICAQAEA/wABAECA/kAAAgAAAAAAQAGAAAQACQAAMTMRIxkBMzUjFUBAQEABAP8AAUBAQAAAAAMAAP+AAIABgAAEAAkADgAAFTM1IxU3MxEjGQEzNSMVQEBAQEBAQIBAQEABQP7AAYBAQAACAAAAAAEAAcAABAARAAA7ATUjFTUzNSMVIxEjETM1MzXAQEBAQIBAQICAgMCAgAEA/kCAQAAAAAEAAAAAAEABwAAEAAAxMxEjEUBAAcD+QAAAAAAEAAAAAAFAAUAABAAJABAAFQAAOwERIxE7AREjESEzETM1IxETMzUjFYBAQIBAQP8AQECAwEBAAQD/AAEA/wABAED+wAEAQEAAAAAAAgAAAAABAAFAAAQACwAAOwERIxEjMxEzNSMRwEBAwECAwAEA/wABAED+wAAEAAAAAAEAAUAABAAJAA4AEwAAOwE1IxUnMzUjFTsBNSMVJzM1IxVAgIBAQEDAQECAgIBAQEDAwMDAwEBAAAAAAQAA/4ABAAFAAA4AADczNSMVIzUzNSMRMzUzNcBAQICAwECAQMDAwED+QIBAAAAAAgAA/4ABAAFAAAQADwAANTM1IxUXMxEjFTMVIxUzFUBAwEDAgICAQMDAwAHAQMBAgAAAAAIAAAAAAMABQAAIAA0AADEzNTM1IzUjERMzNSMVQEBAQIBAQMBAQP7AAQBAQAAAAAUAAAAAAQABQAAEAAkADgATABgAADEzNSMVNzM1IxUnMzUjFSczNSMVNzM1IxXAwMBAQICAgEBAQEDAwEBAQEBAQEBAQEBAQEBAAAACAAAAAACAAcAABAANAAA7ATUjFSczNTM1IzUjEUBAQEBAQEBAQEBAwECA/oAAAAACAAAAAAEAAUAABAALAAA1MxEjERczESMRIxVAQEDAQIBAAQD/AEABQP8AQAAAAAAFAAAAAAFAAUAABAAJAA4AEwAYAAA7ATUjFSczNSMVOwE1IxUnMzUjFSEzNSMVgEBAQEBAgEBAwEBAAQBAQEBAQEBAQEBAwMDAwAAAAgAAAAABQAFAAAoAEQAANzM1IxUjESMRMzUXMxEjESMVgEBAQECAQIBAQEBAQAEA/sBAQAFA/wBAAAAACQAAAAABQAFAAAQACQAOABMAGAAdACIAJwAsAAAxMzUjFSEzNSMVJzM1IxU7ATUjFSczNSMVJzM1IxU7ATUjFSczNSMVITM1IxVAQAEAQEDAQECAQEBAQEBAQECAQEDAQEABAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAEAAD/QAEAAUAABAAJAA4AFwAAFzM1IxUnMzUjFTUzESMRFzMRIxEjFTMVQICAQEBAQEDAQECAgMBAQEBAQMABAP8AwAHA/wBAgAAAAwAAAAAAwAFAAAYACwASAAAxMzUjNSMVNzM1IxU3MzUjFTMVwIBAQEBAQEDAgEBAgIBAQECAQEAAAAAABQAA/8ABAAIAAAQACQAOABMAGAAAFzM1IxUnMzUjFSczNSMVNzM1IxU3MzUjFYCAgEBAQEBAQEBAQECAgEBAQEDAwMBAQEDAwMBAQAAAAAABAAD/wABAAgAABAAAFTMRIxFAQEACQP3AAAAABQAA/8ABAAIAAAQACQAOABMAGAAAFTM1IxU3MzUjFTczNSMVJzM1IxUnMzUjFYCAgEBAQEBAQEBAgICAQEBAQMDAwEBAQMDAwEBAAAIAAACAAQABAAAGAA0AADUzNTM1IxU7ATUjFSMVQECAgIBAQIBAQICAQEAAAgAAAQAAgAHAAAYACwAAETM1IzUjFTczNSMVgEBAQEBAAQBAQICAQEAAAAACAAABAACAAcAABAALAAARMzUjFTczNSMVMxVAQEBAgEABAEBAQIBAQAAAAAQAAAEAAUABwAAGAA0AEgAXAAARMzUjNSMVOwE1IzUjFSczNSMVOwE1IxWAQEDAgEBAgEBAwEBAAQBAQIBAQICAQEBAQAAAAAQAAAEAAUABwAAEAAkAEAAXAAARMzUjFTsBNSMVJzM1IxUzFTsBNSMVMxVAQMBAQIBAgEDAQIBAAQBAQEBAQIBAQIBAQAAAAAIAAAAAAQABwAAMABEAADEzNTMVMxEjFSM1IxETMzUjFUCAQECAQECAgMDAAYCAgP6AAYBAQAAAAgAAAAABAAHAAAsADwAAETMVIxUzFSMVMxUjNzMVI8CAgICAwMBAQAHAQIBAgEDAgAAAAAIAAAAAAQABwAAQABUAAHczNSMVIzUzNSM1MzUjETM9ATM1IxXAQECAgICAwMBAQECAgIBAgED+QEDAgIAAAAABAAAAAAEAAcAABgAAETERMxEzNUDAAcD+QAGAQAAAAAEAAAAAAUABwAANAABTMxEzFSE1MxEzETMRI4CAQP7AQEBAQAHA/oBAQAFA/sABQAAAAAABAAAAAADAAcAADAAAMTM1IzUzNSM1MzUjEcCAgICAwECAQIBA/kAAAwAAAAAAwAJAAAwAEAAUAAAxMzUjNTM1IzUzNSMZATMVIzczFSPAgICAgMBAQIBAQECAQIBA/kACQEBAQAAAAAUAAAAAAUABwAADAA8AEwAXABsAABEzFSM3MxUzFSMVIzUjNTM3MxUjBTMVIyUzFSNAQIBAQEBAQECAQED/AEBAAQBAQAHAwMDAQMDAQMDAQMDAwAAAAAAHAAAAAAEAAcAABAAJAA4AEwAYAB0AIgAAOwE1IxUnMzUjFTsBNSMVJzM1IxUnMzUjFRczNSMVJzM1IxVAgIBAQEDAQECAgIBAQEDAQECAgIBAQEBAQICAgEBAgEBAQICAgEBAAAAAAAMAAAAAAUABwAAHAA8AEwAAETMRMxUjFSMBMxEjNSM1MwczFSNAQEBAAQBAQEBAgEBAAcD+wEBAAcD+QMBAQEAAAAAABQAAAAABQAI/AAMABwAPABcAGwAAEzMVKwEzFSsBMxEzFSMVIwEzESM1IzUzBzMVI8BAQEBAQIBAQEBAAQBAQEBAgEBAAj8/QP7AQEABwP5AwEBAQAAAAAQAAAAAAQABwAAEAAkAFgAbAABzMzUjFSczNSMVNTM1IxUjNSMRMzUzNTczNSMVwEBAQEBAQEBAQEBAQEBAgICAQECAQEDA/kDAQECAgAAAAwAAAAABQAHAAAUACQANAAATMxEjESsBMxErATMVI4DAQIBAQEBAQEABwP5AAYD+wEAAAAMAAAAAAUABwAAEAA0AFgAAEzM1IxUDMxEzNSM1IxEhMxEjFSMVMxGAQECAQEBAQAEAQEBAQAEAQED/AAFAQED+QAHAQED+wAAAAAABAAAAAAEAAcAADAAAMTM1MxUzESMVIzUjEUCAQECAQMDAAcDAwP5AAAAAAAQAAAAAAQABwAAEAAkADgATAAA7ATUjFSczESMROwERIxEDMzUjFUCAgEBAQMBAQICAgEBAQAFA/sABQP7AAUBAQAAAAQAAAAABAAHAAAoAADEzETMRMxErAhFAgEBAgEABgP6AAcD+QAAAAAEAAAAAAQABwAAOAABTMzUjFSM1MzUjETM1MzXAQECAgMBAgAEAgICAQP5AwEAAAAUAAAAAAQABwAAEAAkADgATABgAADsBNSMVNzM1IxUjMxEjERMzNSMVJzM1IxVAgICAQEDAQEDAQECAgIBAQEBAQAFA/sABAEBAQEBAAAAAAQAAAAABQAHAAAgAADsBETM1IRUzEYBAgP7AgAGAQED+gAAABAAAAAABAAHAAAMACwAPABMAABEzFSM3MxEjNSM1MwczFSM7ARUjQEDAQECAgMBAQECAgAHAwMD+gIBAgEBAAAMAAAAAAUABwAAPABMAFwAAEzMVIxUzFSMVIzUjNTM1KwEzFSMlMxUjQMBAQEBAQEBAQEBAAQBAQAHAQMBAgIBAwMDAwAAAAAkAAAAAAUABwAAEAAkADgATABgAHQAiACcALAAAMTM1IxUhMzUjFSczNSMVOwE1IxUnMzUjFSczNSMVOwE1IxUnMzUjFSEzNSMVQEABAEBAwEBAgEBAQEBAQEBAgEBAwEBAAQBAQICAgICAQEBAQEBAQEBAQEBAQICAgIAAAAAAAQAA/8ABQAHAAAsAABEzETMRMxEzFSM1IUCAQEBA/wABwP6AAYD+gIBAAAACAAAAAAEAAcAAAwALAAARMxUjNzMRIzUjNTNAQMBAQICAAcDAwP5AwEAAAAEAAAAAAUABwAALAAARMxEzETMRMxEzESFAQEBAQP7AAcD+gAFA/sABgP5AAAAAAAEAAP/EAUABwAANAAARMxEzETMRMxEzESM1IUBAQEBAQP8AAcD+gAFA/sABgP4EPAAAAAACAAAAAAFAAcAACwAPAAARMxUzFSMVMxUjESMFMxUjgICAgMBAAQBAQAHAwECAQAGAwIAAAgAAAAABQAHAAAkAEQAAETMVMxUjFTMVIwEzESM1IzUzQICAgMABAEBAQEABwMBAgEABwP5AQIAAAAAAAQAAAAABAAHAAA4AAHcxNSM1IxEzNSM1MxUzNcCAQMCAgEDAQMD+QECAgIAAAAAABQAAAAABAAHAAAMABwAPABMAFwAAEzMVKwEzFSM3MxEjNSM1MwczFSM7ARUjQICAQEBAwEBAgIDAQEBAgIABwEBAQP7AgECAQEAAAAQAAAAAAUABwAALAA8AEwAXAAARMxUzNTMRIzUjFSMTMxUjOwERKwEzFSNAQEBAQEDAQEBAQEBAQEABwMCA/sCAwAHAQP7AQAAAAAACAAAAAAEAAcAABAATAABzMTUjFRMxFTMVMxEjFTMVIzUjFUBAQIBAwICAQMDAAQBAwAHAQICAgAAAAAAEAAAAAAEAAUAABAAJABQAGQAANTM1IxU1MzUjFRczESMVIxUzFSMVETM1IxVAQEBAQMBAgICAgIBAQECAQEDAAQBAQEBAAQBAQAAAAwAAAAABAAHAAAMADQARAAATMxUrATMVMxUjFTMVIzczFSNAgIBAQICAgMDAQEABwECAQIBAwIAAAAAAAwAAAAABAAFAAAsADwATAAARMxUjFTMVIxUzFSMTMxUjFTMVI8CAgICAwMBAQEBAAUBAQEBAQAEAQEBAAAAAAAEAAAAAAMABQAAGAAAxMxEzNSMRQIDAAQBA/sAAAAAABAAA/0ABAAFAAAQACQAOABkAABczNSMVJzM1IxU1MzUjFRczESMVMxUjFTMVQICAQEBAQEDAQMCAgIDAQEBAQEDAwMDAAcBAwECAAAMAAAAAAQABQAAEAA8AFAAAOwE1IxUnMzUzNSMVIzUjFTczNSMVQMDAQEDAQIBAQICAQEBAQIBAQMDAQEAAAAAFAAAAAAEAAcAABAAPABQAGAAcAAA7ATUjFSczNTM1IxUjNSMVNzM1IxUnMxUjNzMVI0DAwEBAwECAQECAgEBAQMBAQEBAQECAQEDAwEBAwEBAQAAFAAAAAAFAAUAAAwAPABMAFwAbAAARMxUjNzMVMxUjFSM1IzUzNzMVIwUzFSMlMxUjQECAQEBAQEBAgEBA/wBAQAEAQEABQICAgECAgECAgECAgIAAAAAABQAAAAABAAFAAAMABwALAA8AEwAAETMVIzsBFSsBMxUjOwEVKwEzFSPAwMBAQICAgIBAQMDAwAFAQEBAQEAAAAIAAAAAAQABQAAEAAsAADUzESMRFzMRIxEjFUBAQMBAgEABAP8AQAFA/wBAAAAAAAMAAAAAAQABwAAEAAsADwAANTMRIxEXMxEjESMVETMVI0BAQMBAgICAQAEA/wBAAUD/AEABwEAAAgAAAAABAAFAAAQAEQAAczM1IxU1MzUjFSM1IxEzNTM1wEBAQECAQECAgIDAgICA/sCAQAAAAAADAAAAAAEAAUAABQAJAA0AABMzESMRKwEzFSsBMxUjgIBAQEBAQEBAQAFA/sABAMBAAAAAAgAAAAABQAFAAAoAEQAAUzE1IxEzETMVMz0BMRUzETMRgIBAQEBAQAEAQP7AAQCDg0BA/wABQAABAAAAAAEAAUAACwAAETMVMzUzESM1IxUjQIBAQIBAAUCAgP7AgIAABAAAAAABAAFAAAQACQAOABMAADsBNSMVJzM1IxU7ATUjFSczNSMVQICAQEBAwEBAgICAQEBAwMDAwMBAQAAAAAEAAAAAAQABQAAHAAARIREjESMRIwEAQIBAAUD+wAEA/wAAAAEAAP+AAQABQAAOAAB3MzUjFSM1MzUjETM1MzXAQECAgMBAgEDAwMBA/kCAQAAAAAMAAAAAAMABQAAEAAkADgAAOwE1IxUnMzUjFTczNSMVQICAQEBAQICAQEBAwMDAQEAAAAABAAAAAAFAAUAABwAAESEVIxEjESMBQIBAgAFAQP8AAQAAAAAEAAD/QAEAAUAABAAJAA4AFwAAFzM1IxUnMzUjFTUzESMRFzMRIxEjFTMVQICAQEBAQEDAQECAgMBAQEBAQMABAP8AwAHA/wBAgAAAAwAAAAABQAFAAA8AEwAXAAATMxUjFTMVIxUjNSM1MzUrATMVIyUzFSNAwEBAQEBAQEBAQEABAEBAAUBAgEBAQECAgICAAAAACQAAAAABQAFAAAQACQAOABMAGAAdACIAJwAsAAAxMzUjFSEzNSMVJzM1IxU7ATUjFSczNSMVJzM1IxU7ATUjFSczNSMVITM1IxVAQAEAQEDAQECAQEBAQEBAQECAQEDAQEABAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAABAAD/wQE/AUAACwAAETMRMxEzETMVIzUjQIA/QED/AUD/AAEA/wB/PwAAAAIAAAAAAQABQAADAAsAABEzFSM3MxEjNSM1M0BAwEBAgIABQICA/sCAQAAAAQAAAAABQAFAAAsAABEzETM1MxUzETMRIUBAQEBA/sABQP8AwMABAP7AAAABAAD/wAFAAUAADQAAETMRMzUzFTMRMxEjNSFAQEBAQED/AAFA/wDAwAEA/oBAAAACAAAAAAFAAUAACwAPAAARMxUzFSMVMxUjESMFMxUjgICAgMBAAQBAQAFAgEBAQAEAgEAAAgAAAAABQAFAAAkAEQAAETMVMxUjFTMVIwEzESM1IzUzQICAgMABAEBAQEABQIBAQEABQP7AQEAAAAAAAgAAAAABAAFAAAoADgAAETMVMxUjFTMVIxEXMxUjQICAgMDAQEABQIBAQEABAIBAAAAAAAMAAAAAAMABQAADAAsADwAAETMVIzsBFSM1IzUzBzMVI4CAgEBAQECAgIABQEDAQECAQAAEAAAAAAFAAUAACwAPABMAFwAAETMVMzUzFSM1IxUjEzMVIzsBFSsBMxUjQEBAQEBAwEBAQEBAQEBAAUCAQMBAgAFAQMBAAAADAAAAAAEAAUAACQANABEAABMzESM1IzUzNSsBMxUjFTMVI0DAQICAgEBAQEBAAUD+wIBAQEBAgAAAAAAAAAkAcgADAAEECQAAAGgAAAADAAEECQABAA4AdgADAAEECQACAA4AaAADAAEECQADACgAdgADAAEECQAEAA4AdgADAAEECQAFAHQAngADAAEECQAGAA4AdgADAAEECQAHAAYBEgADAAEECQAIABwASgCpACAAQwBvAHAAeQByAGkAZwBoAHQAIABDAG8AcAB5AHIAaQBnAGgAdAAgAHMAawBlAGQAZABsAGUAcwAgADIAMAAxADUALAAgAEYARgBEAGUAYwAgAHYALgAxADEALgAyAC4AMAAuAFIAZQBnAHUAbABhAHIAVABoAGkAbgB0AGUAbAA6AFYAZQByAHMAaQBvAG4AIAAxAC4AMAAwAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAwADsAQQB1AGcAdQBzAHQAIAAxACwAIAAyADAAMgAwADsARgBvAG4AdABDAHIAZQBhAHQAbwByACAAMQAzAC4AMAAuADAALgAyADYANwA4ACAANgA0AC0AYgBpAHQAbgAvAGEAAAACAAAACgAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAKgAAAABAAIAAwAEAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAEgATABQAFQAWABcAGAAZABoAGwAcAB0AHgAfACAAIQAiACMAJAAlACYAJwAoACkAKgArACwALQAuAC8AMAAxADIAMwA0ADUANgA3ADgAOQA6ADsAPAA9AD4APwBAAEEAQgBDAEQARQBGAEcASABJAEoASwBMAE0ATgBPAFAAUQBSAFMAVABVAFYAVwBYAFkAWgBbAFwAXQBeAF8AYABhALYAtwC0ALUBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2ATcBOAE5AToBOwE8AT0BPgE/AUABQQFCAUMHdW5pMDQxMAd1bmkwNDExB3VuaTA0MTIHdW5pMDQxMwd1bmkwNDE0B3VuaTA0MTUHdW5pMDQwMQd1bmkwNDE2B3VuaTA0MTcHdW5pMDQxOAd1bmkwNDE5B3VuaTA0MUEHdW5pMDQxQgd1bmkwNDFDB3VuaTA0MUQHdW5pMDQxRQd1bmkwNDFGB3VuaTA0MjAHdW5pMDQyMQd1bmkwNDIyB3VuaTA0MjMHdW5pMDQyNAd1bmkwNDI1B3VuaTA0MjYHdW5pMDQyNwd1bmkwNDI4B3VuaTA0MjkHdW5pMDQyQQd1bmkwNDJCB3VuaTA0MkMHdW5pMDQyRAd1bmkwNDJFB3VuaTA0MkYHdW5pMDQzMAd1bmkwNDMxB3VuaTA0MzIHdW5pMDQzMwd1bmkwNDM0B3VuaTA0MzUHdW5pMDQ1MQd1bmkwNDM2B3VuaTA0MzcHdW5pMDQzOAd1bmkwNDM5B3VuaTA0M0EHdW5pMDQzQgd1bmkwNDNDB3VuaTA0M0QHdW5pMDQzRQd1bmkwNDNGB3VuaTA0NDAHdW5pMDQ0MQd1bmkwNDQyB3VuaTA0NDMHdW5pMDQ0NAd1bmkwNDQ1B3VuaTA0NDYHdW5pMDQ0Nwd1bmkwNDQ4B3VuaTA0NDkHdW5pMDQ0QQd1bmkwNDRCB3VuaTA0NEMHdW5pMDQ0RAd1bmkwNDRFB3VuaTA0NEYAAA==");

/***/ }),

/***/ "./img/back.png":
/*!**********************!*\
  !*** ./img/back.png ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./img/bird.png":
/*!**********************!*\
  !*** ./img/bird.png ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./img/pipe.png":
/*!**********************!*\
  !*** ./img/pipe.png ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./img/road.png":
/*!**********************!*\
  !*** ./img/road.png ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAA4CAIAAADmTySgAAAACXBIWXMAAC4jAAAuIwF4pT92AAABPElEQVR4Ae2XoQ3CQBhGe6SGNUighoSEMAAS2wFQ7NANECzARCyAxKCZAcURSO7nFLZ5r+q4IHjv8Ymm/bZvfHgG0uN55lFL3KTjZVNp6Gar6uZ2v1Y3ficKGaOfSQTIZ4tGIWMs+udv/glvdUj1jFnCW51TvYS3Oqr6N7zVadXf4a0OrJ6R0+E0j+SeIQbaYbGGoIoZDbTT5S5+9gwxUF7nIMBifgwYHvpPMLzhoQag2C7e8FADUGwXb3ioASi2izc81AAU28UbHmoAiu3iDQ81AMV28YaHGoBiu3jDQw1AsV284aEGoNgu3vBQA1BsF294qAEotos3PNQAFNvFGx5qAIrt4g0PNQDFdvGGhxqAYrt4w0MNQLFdvOGhBqDYLt7wUANQbBdveKgBKLaLNzzUABTbxRseagCK/QJzMis3up6rZwAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./img/start.png":
/*!***********************!*\
  !*** ./img/start.png ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAxCAYAAABgSwHoAAAACXBIWXMAAC4jAAAuIwF4pT92AAACjklEQVRoBe2aMW7bQBBFKcOFz5BaF8gJYp0gsMoASacrpHTh0ldwl/TxEewb5ABS7TOks/0FPGK8HJFLkLMBKQ5AzO5wdvb/meWSoriqCsn365tXb6rfz48rzz4pm8jpsGL7p8hPhqQls9/vX3VYG8SjiV5EZUzAfz39qQ6Hw/Gw88iG/NhsK/lFEg0hKcC3D/cNchArrUNItpEQ+bvdzzoBqmK0hOxs3tITOSsi6skkdlsR1AZjhQ3Hbj60U+0lyEtGH9tlH+dc3/V6/cFVVaOStCdfSaqYVpCqUW366IgqKtujXZMCyPWUgqWKtrxeJRlv/cZohyzXBthd1Xika/iMwaZEjLSCJebMmWO05cpkluhkqwWZVFty6blZ9UX0bMjOqnILmXPNwOyvVxGUzJYoBHmm/fbla+MJaNKrOyUI0dlVNCVammDx1x//Y1mG/ArxiOit3CJLBpYMLBlYMhCRgdL3RzicxX3ygsesIZqMpbqrcl3nFW8ILsau1Pj3+VOKr1f/6u9LtXoXb5CIeC+0TtltjNGwEUhAEUhjS/vyw8aYNqL49NHgYgxY1GdubGk/9amvSRzRCqC2DoIxOLVhFzC1T4mql7tEwUEs+ug++EZ9dhUAEfWWrsjV/0Vutu4SFiGNhwgEh+pWkraCTITNA6JzHkHG5miNzyUKFhsXm8XXShJHBioYNhtY7TEIEjOXKFi68GVnDQCeziFol6v92eXtvMyRW1H8PX1MgAINFS+4tbHhePN0bUTemL42iyWkLRIStAewi+hQYPUtZGigrvH1ztrlGHC+GMkA7Nkhw0lqY9FGY7/CykY3NUddd/oAIhXZoq/JormCKF97lCLY+jAQkQHvq4+IeWzMN+U5aCQQHZDWAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./sound/die.mp3":
/*!***********************!*\
  !*** ./sound/die.mp3 ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:audio/mpeg;base64,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c54pqvMGx2K0swvcTJchZA8zFOS+K/3KMc2/JOBISicWONIAHOUVcnyo9Y5zd//7kmS1giMUH8fDWEpQXQPJCW8pOgpwcyEtPMlBa5Ijhbyk6D2tN0IQ5/1INMJGTLAY1A/NGjgaYcQ0vbi/LW5TJ2lu6rC7SQCSgQ2GGpNtu2Z/qbVYhOEh0gUyCUG4JJkvDLLREgVt89zugzLYZc5XqyQYNi5gGypwOEQukAVoWvyLnrVvtoSQEgADXB3ltmIQHMITM48OiOMcgDDTMSdoXqtpmnsL4l3jBrBFkZT5PcPI1j0G4gIrCAKlkDTjWD5AodTCG9Uo0dbmez0qVdpdEIKAyE1oEoNRiWsS4OMG5h9I3r7lYYegqI8gXeLHl5wgVMKi3AC+pW/Kym3V+oa1wkCL4LBtcCAu1GlX9dkibnaTc2hW1g0gamxL0wMYw6IDeDMp5Gm+UX4WYgOtngmqMFXvQlEs/u1IAAFoMsbTRUvzESK1zRWCTRJtkjk1HYo6egdxyo+WyStTVUIdNkBmD6Da9/ovhx+q53fiYV8WDhezZimv+CRChu1i09ClJfWWeRlVLsL5T6x4+pgbr6cZqaoGHZeJsbHUxhRE5Mz0XXb/+5JEvYEDCSRHq3lJ4Fxk6Rlp6EoKnK0eDKRywWQbJBmWDliASgRQ4T+c5F2hJvKwymwQpLnKyOyenVer3OqhrNoiJtlFIlpYEkYlW3+U0OTQ57yWrNFieViUkRATYTOiWSKmfnss////6NYzSeT+KoYMNMIAAABWga00lD4dPGhDfyAMU7x0tcFQil7FWXNZbE47monTjcW8ctK3lLVAVB0w7FpWmg4lLGHTlDUFpiVVm6bKNBJrwq4kgKmTyyIyxzSQxpI8WUp63j6V4zSGv///Uh3/rgDUssnUllwMiI/aT1KuOljRVG9dKNe1s7/39Xlv/7fyuWR/5XLXfkhFPdAANaiSgLe1QYLDS8Ryf1aTzoCbkIpFIyOohCQBrf0Q4HQ1Evh0l/Boq7cp8RQVV/DXTbnfqPe2e9rHf4lwoepMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSRMaMQvwixosvSlBiQ9kJZ0gsBWQbCmCkIQD6hyDIbCRYqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==");

/***/ }),

/***/ "./sound/hit.mp3":
/*!***********************!*\
  !*** ./sound/hit.mp3 ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:audio/mpeg;base64,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");

/***/ }),

/***/ "./sound/point.mp3":
/*!*************************!*\
  !*** ./sound/point.mp3 ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjQ1LjEwMAAAAAAAAAAAAAAA//uQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAoAABC7wAMDBISGBgYHx8lJSUrKzExMTg4Pj4+RERKSkpRUVdXV11dY2NjampwcHB2dnx8fIODiYmJj4+VlZWcnKKioqiorq6utbW7u7vBwcfHx87O1NTU2trg4ODn5+3t7fPz+fn5//8AAAAATGF2YzU4LjkxAAAAAAAAAAAAAAAAJASAAAAAAAAAQu8+3q84AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVL9Xs86kIIPQSxUNhfB6CEIw/x6zzHwAQgIaC7pARBywfOHZCtpukbgMNAoQEdK+JKYIqIA2ntwSEU0hlL9OtmBhCl2mgWkWYX3NLQNdJw63OI2JAQhmICgM0gNr7iTkTcuRugoAuiUqkZZSu279HKH8llvVJSclb/xeILvce1DDn/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAAQO5Dl6G2cPxNuW78/KIcqv5DmNPG6fsAP4AGRCIe04A6Hj+j//oBm0AYGf/7+AIiEQ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oYhp86zgcWaeELJY+//7kkQSCYKARUmgHarAUOipzQO1WAoRFScpdpCBNiKneA7RaDt/N/s5qK2BCAgMWscAIoidiKl5FL//1qH04yAKIkln///56sEwIv///+meAAA9AAgAAAH6oKtBd5fjIBB8eABd5cwwJCUDHiemroNE2nhCy0fZ2r/+zmorYG9gMUrUAYgiyiKl5FL//6iOccAKHktP///z1YJgBf///9M84BAf/60E2WYEDA8tS9pCwYUBIwPMQ/GOgxsAkFAkmq16HZdZ7tJHrbqTQMyGBesYAHQtgW5jALZ52//+gTQ9A0IAWqoJ///83qCxH////LLRAABgAh+47SRui/CVlpWnvozMQAQYBkwd/FsYnASGAEtV3pbTWe+l/60DMmA9sbwG6ggipkIfZ///1E0SQNAwInJp///6dQXx////yy0AAwEAyxyyxgIdCJqUIZOWsMa0PN+6bMRQmMCADSKYi/0Zpuei//Z2K40QaAUDBjgAwiABcpFi6kj//9i8LEEREA0CS8v///mlMG1j////8xcAAwEAyq02WM0Sgk90IaeXEMX/+5JEMYiCiEVJQB2rQE7IqbgDtWiJzRUlQHaMwTMipvAO0WDT5N1ZlMOwmMBABUGa6/0ttc9F/+zsVxsg0AIGDGYAEGhlSaMUkf//sXhbgiHAJAUyX///0MLCj////8xcgBAAAQN4b5bnC7afCpy1BgaEJk8ShyrRRhCD6ij6k0YmS1Uv+tSZgQ8MGCCQHZJAuJFGKpszt//83FuBqgAkHLyP///M5gDY63///8wPzgAwAg/9TcQp/zlida1F3lwDAsGzI4ijiOUDBkF1sPqTRikvf/1JmBHhjgj4DojAp1GEVTZn///TGkDU0BYGXkf//+nUDeE9////MD4AAwCAADDPDdSJlzXDXIFwTGkAw2hcA4JD9CgzAWAUJ9HETpseer/3QNycFxhrgSGaFqSHGKSKv//rMx3AmA4FAflZv//+YXDCz////zgAAADQAAYAAf+4xG5BupK05XbZQgLMAggMYxWPtjnKDBHgCZqO4nTZnq/90Ey4LjDWBAuwb1IcYpIq//+szHcDUFAsMzZv//+q4b9////nEA7jlljNI6O9//uSRFMJkm9EyUgZsyBPaJm+A7VYCcDdIKB6jREsHCZsDtFoALCiAAMwDRRzRjH1MJcD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");

/***/ }),

/***/ "./sound/swooshing.mp3":
/*!*****************************!*\
  !*** ./sound/swooshing.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:audio/mpeg;base64,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AAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5BkQQ/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5BkQQ/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=");

/***/ }),

/***/ "./sound/wing.mp3":
/*!************************!*\
  !*** ./sound/wing.mp3 ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjQ1LjEwMAAAAAAAAAAAAAAA//uQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAOAAAYfAAiIiIiIiIiMzMzMzMzM0RERERERERVVVVVVVVVZmZmZmZmZnd3d3d3d3eIiIiIiIiImZmZmZmZmZmqqqqqqqqqu7u7u7u7u8zMzMzMzMzd3d3d3d3d7u7u7u7u7v////////8AAAAATGF2YzU4LjkxAAAAAAAAAAAAAAAAJAKAAAAAAAAAGHwragYsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQZAAC8wVJSQnmGbAAAA0gAAABDbTFMIwwxQAAADSAAAAEAsRgCTAtjAJISgcEU4LEDHPAad6/QOEHAwMolNAiFAAn6cwgAgAR/HNIVdzMITxESgAAAJX6///o59dzcXzif5U+ufonu5/7n/uhe+iILNsQROOOP/W8MFwfxIcKZzhkoACnCAAMsagOsAkB6i9gEjiMhKBIi1GkOFx2bBixcJoouYg6Y1L7E1ZZmG73XGcjab2gdl6g91pN8TfVGp6+Ivs7dIJw0RffTYgqQ5LkAw0uGF7kg8PcDjRO0YInCKl5hptsafz9ooPb09eUCGTVAgAB0CzEyQ2Y6UAAJhx4QDRHT8VE0FQNd0adyMxCKTnJJcVCuQjarV7nFc6zw8NpwKyqv7s/HSYZnUJ6W9JMqjazwG+PYeC4MRRlsSZ6qJGmOIQhrMkUOJujDTSB2l+MRR0ORTrpUqt4f6mVCGOoWoDyHV8KwwQYt7snbFRE98v+C7jIb5fv4+1H/x1mAigiH8YySoAAAcg5KELfFkVWIgAYHEJEqrgLiahgc6cC//uSZFcK9P5JTKtPNHQAAA0gAAABE1mDOw0wccgAADSAAAAEkiMQkLWU3iPDkKnlb3yqdoJh3I7lT8xJiCmWtnSVOyXwQLD7So+1WLOJ5dOhpCwSIkZUNXJLwkWGKhRKsxEAwlfVdFWOsawkoaxf7EKozc6i2yxRaYUHEh3CEDNhAAAKYSKOEC/wpDiVUhmLDnIREQwGfdNxBZ+aC4+v3r5rChZkdleKUEZ+skBjqFJVQAIBoKAACUhMhlbwhQAZ4GcNyZce9JYjSLRIl0XFyVs85D1wWxiVkV+9nw9dYRi/PMyvCyhqZ9nhcfkyjAiVFpyHrcH6qjkU4U0/HiOWt8jKU3e8h723cLSm+x7XOJJ+p8xvb38jIh2/aWVeRjZKC4LPAsP1T0YhNu5iZNNNC02j/f/RCHvd5kN9iFJn1GUYJ4gADN4AIAAAVJ8oMLhBxs16QxYU+J4RM0inmTVg9pNJacSAIo+PhUA4AAEKHgiHy2YT911W3U/QZJIjie8jWOe4ktCIaRDSFpzz07Wql5tp6nOkzpIsysedcQNsUqz7kv/7kmR4gPSlZFNrTzHyAAANIAAAARO1Y08tMM/IAAA0gAAABEjWSmyFpTueUtfbguN8/9raX+WgefMwGp2bcbbMbHM6CLGDcexZVoseTMiU2abKZN12YrYJLeTPPqJOsb574etiFYAAAgMHL2fCEODQQIrmkPmdflD6DhYa3NYRzFKXcd2Kw27kda08IIAkurgbPAbVNFz5g+4wkkbTXRi8S6Jm7QElFCRlZZNHiCZTvNoIIl5lyJaT7yIMcOekgToJSU3fwhbbAq00Ln+j9hJFbEcWz074wdrjAYe1DUJwq6VNAjldWQ1pAe30MQI15f/v+oAIoEgUkEgVaeF0a9wZlQPDG4RiItdIDgfRqC7JolKCOoKnTsh/plWaRuedKafmcw4c+982cLK4lHlmJmkZZdNvW9opUlfb/N+7Do5RrOGhsrH+oLw68a0t3+dgqWkCstEHreZVvDJ1Sa5y7f//9UxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVUgg1BEAMqwR2QM7L2K4LaF6wwjS4gDY6OgXPR9Rry5r63/+5JkngT0a1VVw0kcYgAADSAAAAENzMFYLSTLCAAANIAAAAROt1iDWrxaRVFVjVO7W0tGimnWr9WKQxK6MwNQK1rAUIh8wKTASHiViDVGitbfCy3cFYsySSzoDl6GubQCAAC5aQBoHJknh1VZwYBp+ZgwIoaAIBLpGdDRG5sIoEnl4NQV0tBuUWuwUwF6V3OUzuUh6OQEh2HICFCebMxnx7CJlDI5QFysuBEG5mSWUS4unJ6WWbE0wPTM8UDBZh2OZgP51zYaNMJKEBWJFydku5IqQk6bRGVGl5Coo1B6IiLL9XE1GWsVyaRKphE0whnMrIqhekouhkQ2oX3oiJLUU0QyetoY6pBNleFG4miJEZph99+eH7M13aEgo8e4vwWVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVAAmAEKAI5RmUGLAYz4Y1YY8ZA+YiIMLT+edVqVaaT4qAymElcRVBBAGJh4OoTFg9TE8l40VTg+hNTE9sYG5NYihOVq6iF9IHdYtAtXx3W2TQkhpn101c44rQo5bowRWiiS+pOicaR//uSZM+A8ukm12MMGlAAAA0gAAABGAWHQq0xNRAAADSAAAAENGw5EuoI+U4N+Vsu78i0vLHMyXd2Ls51U2QUkeqzIwvPB5h50ugxt4a5CY1VewCFH06fzUKo2zMo2MeAxUMn8pgAAJgEALbFhWYPCxxcWmMhMafAgkmTAwYgwWBq8VUx4BhAVIgS8MnbooexRwmst6ueu/NtkbMW9CoSw/KqEJINyMOJ+4CzaRcIxZDx5WnEVamPS42hXPCIYCclMkEGDdTletiLxQeU1gWpqa2U24Y30I+VrVh9ZDSZjy3c6hpGpRzV4WDFuED83Z84WcD+tny5cakDKpFzzrKMQO1kc6GF7NciY+QjArpIbpBcsxblJN29UzI6XmI5Z38C1UxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVXABBCCCCVEBpcOgEQccRTGgoB88TADts1dsKhEQhCFNhbtp0KFiLzs3AsAgIEIjGAMh8uDTCQXRiTS4DUgI1TQOhgkkgWSnO9URihIjFaRu1pCRpVeBYPDyHUyYRnNjLEM0//7kmTygPU8YtHjTDPyAAANIAAAARd5kTyuMNVIAAA0gAAABJLJLLSky/DLZySIoXYpc1kVstLO7fUlU4+Ml+62FWY21i6sWYSTSOLOhZRxwnppn2zDGFmGEFzaKprmNN62TClLF0D4uc+a1wJ7EdfkXABLAI1TEIYSBpkD4MV5gpuY9BjEmWC3NF9Sh/GQpFIXqWJRT7P25teD4JisUnnAQYPrqhMlPDQSgTBsUFooV90XISUcSIjxWo4RErSgohoeIZhBVYfRvdJ6xM3iqHFmscm5VAnfR52Ti68oKQ5tiTcIS2uvvmhi5Kc+xsIvXgm1GaqOS8YypCutCGeTbCReEdRJux+psiV4lMyw1ePaLzU8OiX78tVV2XcJPkFnfpVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQAAATDVyJDdFkcLjxTowQrN3WDLh4MOlnJQkwakYm2ygvymWtBYJLuJr2D0GQnXE47AFHUooU+8Qh/hjsTNPw+RGLGwEV9dRKVhGD4+J6to1IBJQj4Pkc0qAczyWRr/+5Jk8AH1fmJQU3hJUgAADSAAAAEV0Zc9DeUlSAAANIAAAAQ6Sky6f67CSrBoVUVlNWJPDUHVLIzM1JqPYhedJ77TkcWUSs0dpdjxto4xjSSSJdZjqxjpjP7ZZT7GdWCFFKcEjwmEJNhNxvhVNZhQMrqSIIxyCdRbh5Kh2yx37AEkAEAElwyDIBMUTiAuYsmAVB6KBhSY0BR7VWQlMbcV1lBpU0KG5czJ+DIyd0BREmQzSQqROKCFcs4ZaIxUoUUscpFJNwSqGD6GhOEILyRpwOQhySWc9njC0UASuYNlAwslk82195TYjypM2U5fG/+3W6z0qZ5rTDz43I5wUaWrHhitiK965tPJE0kNNI5RsvyPKNSKtmxGGrNxHX85sxBaTEFNRTMuMTAwqqqqqqoAPUCQCUnTuA3aXqSjgKHT4KjZA9Lsvkh0SoTOLLKApj337jUNsUjbb0kDRcARAiWPiI/eF4FCcSuaEJ4kI3WEF72TGJJFtw5Syp4wAAQMkY9fHiiKE6kskqla5RdCGoceYC3wUAYWW36clnWzsZsvVuca//uSZO4A9c5lTZtsTFIAAA0gAAABFB2jO00k0MAAADSAAAAE+xexuHeXzJdDZNRfOfTUuWNv7ytjXk0kCqLF4co3Fogv1CmJmM72lLr+7iiJch75WqiY4JmV2xn0aZDtHKRZpycZEIGKj6OghCAMTmGBAcZigG6Rcd1kZ1cNFAxB7LiSQSYAWipThzi7AwSIWI6mZyCjAF4qS6qsmxoqVOolXrJovdiiZRXUgM45kIfth/KxXIkrUanjzXaFDvay3qxmZjuiHzgZDQuQg0Sg4mqsjJEEtJEKAJkIhHCM0mhMhUhSmtcEK1EnJlVTY45afQpsIncLau0jRWqURTaP5kotynV+20s3M1TYeMZVdqdzsjBZB4+6lupaE9aP/L+USUxBTUUzLjEwAAAwEkkp0B1ytQIFQAEA7SEQGYSBmAAoOGEEDsl4Fby8EuRKoYyxdMSNRAXGAUCgnYgaGVBkayxo6QoSEKGqPKjCAUlTxCsbJykCUIBTLBC8DDUQgPJFzg1lD5KOeDz9KSGqMcoUtbFIFJTMQVKOrNj3/EuhyqXFyf/7kmT4gPUJZ87TSTSiAAANIAAAARnZiygNvTGIAAA0gAAABI80S8ZjbaFPiWbOIna6UxHX/tq1PJS2xwSQZfgbRG1wbkm+zz1CmK1yu7tGlL5YAmC3UYgAIqBzDhDOSC0yoFDHFPM6HMBAwwYAV1oCQsIgEBkphYAIS10wRKB4BuWDQEXOrI0swW+3Z9maN9ALkPdDLMH6p1BnWtNagHFwnt5cgGMzrJOOUkHYaRKgcFxZFwODoBsflokDuVhAHxSVDE4Mg8fSoBiSuNTtUH3DjTITsvoRSbM6L1hYawrVh/ia1BQ+Un7GaXg9nCSzTtLRKOsw986fOZjp7xlSgSWt9yd5O2xJF8LNNploJn4ebCtrD5xn/cSUhZFas8RQhqVMQU1FVQBGQEEaw1OiQsIQCYfBxlohAINmUB+IgMOhAFBlVjcXjCwJwdFrKIEkTogxoMGTsMOMSCJcCwjFJy4EjJgnLD4nFjZPj+hzV4/ILcDeGMa08VJTk5jWlkQTgllxWV4FSYpmh8hQOwGUaesNDmstcptaaFVCd1a7fLP05Dr/+5Jk+4j1PWjNU2k0QAAADSAAAAEZvZ0kLjDayAAANIAAAASzXOpxVECblHn0T+ZBhGqnV8KswWlG/0VkWjhd0XbId0GTyVNhCDqKWahnpBNGTXMu1d3xdEmbEHHK80YCAA0cJumHGhgxiFhY1M3FmkxqpCPFAKMhYJCnSYMDQxOcSAVxPYpFfKSTbL5jquVbwZFZWTATUXD49OSmOq3GD8lCcVzsPSOsZiQx3fIKMSjs5EwNUL0F1EZWmfFdnhS46qRETaMEpDjaNKRKOdNVxEZeibQhEuyWvUzR1C3bemth4xVxiJmbtmotDIrMpJEB9NdEk0PoHoStxShR10EprE1IfTFRUpmltReWvtX+4Nu+ydT/qZR7/l6y6t/ldpIVAB1BQVmHxEEBpuZg8NmVSYY/MxkkaGFgOGDQtWlcLBJPoiA6Kq1Yoth3I1LmpvJeh5wirZJEEA+EhKLHyI4GTi9kbzKJSydAPWMIS9pEyooLMTRajIky6COsqmHRJRCr/BdQZYGj6SWRWQQNWVCydEXmguK6UtJb7MGwhiNktR2a//uSZP0I9btnSsuMNPIAAA0gAAABGB2tIy2xMwAAADSAAAAEirlHMg9jUPaTSzlOYxruv953+vLe6OVeSyRbZBbId3ben8dv3oqXo0drPI0gHgPCoCjRnGpw7GCQzmMhrFERggITE8FggCRIL2ZmAgEmBwDrwRpQROAsx4mQJMNEt5rmcH2cahci9P6uK2YQ9CrOxFH3OjTybjvG8+VbOuFsxVnCpOEjDIqj9WDpRSFq8/bJA3y/wVIu2JMIbVQYbVhqOlFHWUMRZYLKFZd4rhRVYaLJjTAmBImIYkAdFlkYhLo4PQkBtHkyz0w+iVLFE11XLIyeoIVyFLbTGjtsPSklLFkiZqztRp6F8oLa0ohaRYsm7OsNqEfSt1wnRZZWNMOqTpKU9HEaAgAB9gEckdoIjGjIyrzEhE61UN9LI8CQEQArXzAgctQHA7wvUsZhaEMnf9gD5MqZXDTWIKbu8t1+oXKnxgiVxP3ixhif5BMP0vslrRqQS6lRwBgfDxvDpc0RIgTBlAGj2tLJI0g8Kz0l+hViRMoP0DYfQkJNiIaRsP/7kmT/gPVYZ8lLiTTgAAANIAAAARtdsRIOvTHIAAA0gAAABLipE9VoPH4orLN9VhJHEiknNjVpZfeVhUvhLbMS+5YznKfXIwW+kZNVlw69+Gd0Yf13OmXVufUJNotLZ+Fufm4GnnLDGtAgQciwJmIvGIQqFBMZdORmsgGVTsZhEQNBhg4El2QABVwymW4OND8fYb1uLqMikc7EV3TK+oHTDspMYVV9UNF5UvJo4g1JIxJRRRIR0XjSthUlZiyoXMrHUBoFSiFCiSXYbTggbIVXSZRMkIZSJmIwkigyiaXMxhqchUiORCwWIyJFvWlFCS5FOJlD41BdjYqItrsoYRd7ukWWipqJQgax0p9ZPdTgt86JyeFa1ScEKJlZ+nQzHpqI3XBZXTuY0y5pVqpMQU1FMy4xMDCqBvBqql4BpyqBnUjbWBM/O4SSJx8kA8g0EIf0YBQYma01JqkFROJxJElcvLR0nPUp4Tm7wB8nH0rFcdSay6TlSadtVpwnX09WKjJt4rL3U0AjRjkpKyOrFXo1LIk8Yotx5oxEpr4VNt1tKtT/+5Jk+4L19WxEK2k2sgAADSAAAAEYVbMGrjE0gAAANIAAAARM6tcVYfEpK6tXLqHpzWKt6utURnEb3HLJi+mutOVrEcCZ5qFawr6iRUuXYj2L0yc9MTHGl21eautqdPsc6+khbiPonCm514FRwjgO4mjFBYPXgYw4DfIZmqVCSyQu80IBIHjsmmJ7AZH0J0TjsCJYBsfnqZgSl4goiUZNiTdn2rAieQio6GYIpsomyJ4pMkTUc2WxQsET0LN51cRPihvOrAimSrU9XJSlaHSFhqNSmh1VCkaVyVtKs1KSrKJJ6GCK8tXSFATKwatDaGpb/HI//rLkpFBqOIpoclU0KTSsfKV5KU0MJRWTciuLJEcbZWlaFREs8hUDQfEpFMNqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZPSP9fJsPgM4YCIAAA0gAAABFSGw5AyxJ8gAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map?v=0.0.1