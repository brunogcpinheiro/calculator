webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./core/feriado.js":
/*!*************************!*\
  !*** ./core/feriado.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feriado; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");




var Feriado = /*#__PURE__*/function () {
  function Feriado(dia, mes, descricao) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Feriado);

    this.dia = dia;
    this.mes = mes;
    this.descricao = descricao;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Feriado, [{
    key: "obterFeriadoComIntervaloFixo",
    value: function obterFeriadoComIntervaloFixo(domingoDePascoa, intervalo, descricao) {
      var diaAdicionado = domingoDePascoa.getDay() + Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(intervalo);
      var mesAdicionado = domingoDePascoa.getMonth() + Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(intervalo);
      return new Feriado(diaAdicionado, mesAdicionado, descricao);
    }
  }]);

  return Feriado;
}();



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2ZlcmlhZG8uanMiXSwibmFtZXMiOlsiRmVyaWFkbyIsImRpYSIsIm1lcyIsImRlc2NyaWNhbyIsImRvbWluZ29EZVBhc2NvYSIsImludGVydmFsbyIsImRpYUFkaWNpb25hZG8iLCJnZXREYXkiLCJhZGREYXlzIiwibWVzQWRpY2lvbmFkbyIsImdldE1vbnRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVxQkEsTztBQUNuQixtQkFBWUMsR0FBWixFQUFpQkMsR0FBakIsRUFBc0JDLFNBQXRCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs7aURBRTRCQyxlLEVBQWlCQyxTLEVBQVdGLFMsRUFBVztBQUNsRSxVQUFJRyxhQUFhLEdBQUdGLGVBQWUsQ0FBQ0csTUFBaEIsS0FBMkJDLHdEQUFPLENBQUNILFNBQUQsQ0FBdEQ7QUFDQSxVQUFJSSxhQUFhLEdBQUdMLGVBQWUsQ0FBQ00sUUFBaEIsS0FBNkJGLHdEQUFPLENBQUNILFNBQUQsQ0FBeEQ7QUFFQSxhQUFPLElBQUlMLE9BQUosQ0FBWU0sYUFBWixFQUEyQkcsYUFBM0IsRUFBMENOLFNBQTFDLENBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMDg4YTQ3NDAyNjZlMDQ5ODhiMjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZERheXMsIGdldERheSwgZ2V0TW9udGggfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlcmlhZG8ge1xyXG4gIGNvbnN0cnVjdG9yKGRpYSwgbWVzLCBkZXNjcmljYW8pIHtcclxuICAgIHRoaXMuZGlhID0gZGlhO1xyXG4gICAgdGhpcy5tZXMgPSBtZXM7XHJcbiAgICB0aGlzLmRlc2NyaWNhbyA9IGRlc2NyaWNhbztcclxuICB9XHJcblxyXG4gIG9idGVyRmVyaWFkb0NvbUludGVydmFsb0ZpeG8oZG9taW5nb0RlUGFzY29hLCBpbnRlcnZhbG8sIGRlc2NyaWNhbykge1xyXG4gICAgbGV0IGRpYUFkaWNpb25hZG8gPSBkb21pbmdvRGVQYXNjb2EuZ2V0RGF5KCkgKyBhZGREYXlzKGludGVydmFsbyk7XHJcbiAgICBsZXQgbWVzQWRpY2lvbmFkbyA9IGRvbWluZ29EZVBhc2NvYS5nZXRNb250aCgpICsgYWRkRGF5cyhpbnRlcnZhbG8pO1xyXG5cclxuICAgIHJldHVybiBuZXcgRmVyaWFkbyhkaWFBZGljaW9uYWRvLCBtZXNBZGljaW9uYWRvLCBkZXNjcmljYW8pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9