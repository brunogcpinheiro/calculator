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
      var diaAdicionado = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(domingoDePascoa, intervalo);
      var mesAdicionado = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(domingoDePascoa, intervalo);
      console.log(diaAdicionado, mesAdicionado);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2ZlcmlhZG8uanMiXSwibmFtZXMiOlsiRmVyaWFkbyIsImRpYSIsIm1lcyIsImRlc2NyaWNhbyIsImRvbWluZ29EZVBhc2NvYSIsImludGVydmFsbyIsImRpYUFkaWNpb25hZG8iLCJhZGREYXlzIiwibWVzQWRpY2lvbmFkbyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxPO0FBQ25CLG1CQUFZQyxHQUFaLEVBQWlCQyxHQUFqQixFQUFzQkMsU0FBdEIsRUFBaUM7QUFBQTs7QUFDL0IsU0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7OztpREFFNEJDLGUsRUFBaUJDLFMsRUFBV0YsUyxFQUFXO0FBQ2xFLFVBQUlHLGFBQWEsR0FBR0Msd0RBQU8sQ0FBQ0gsZUFBRCxFQUFrQkMsU0FBbEIsQ0FBM0I7QUFDQSxVQUFJRyxhQUFhLEdBQUdELHdEQUFPLENBQUNILGVBQUQsRUFBa0JDLFNBQWxCLENBQTNCO0FBRUFJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixhQUFaLEVBQTJCRSxhQUEzQjtBQUVBLGFBQU8sSUFBSVIsT0FBSixDQUFZTSxhQUFaLEVBQTJCRSxhQUEzQixFQUEwQ0wsU0FBMUMsQ0FBUDtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hYmYzNDk0NjJhZmE4MjIxNzZmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkRGF5cywgZ2V0RGF5LCBnZXRNb250aCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVyaWFkbyB7XHJcbiAgY29uc3RydWN0b3IoZGlhLCBtZXMsIGRlc2NyaWNhbykge1xyXG4gICAgdGhpcy5kaWEgPSBkaWE7XHJcbiAgICB0aGlzLm1lcyA9IG1lcztcclxuICAgIHRoaXMuZGVzY3JpY2FvID0gZGVzY3JpY2FvO1xyXG4gIH1cclxuXHJcbiAgb2J0ZXJGZXJpYWRvQ29tSW50ZXJ2YWxvRml4byhkb21pbmdvRGVQYXNjb2EsIGludGVydmFsbywgZGVzY3JpY2FvKSB7XHJcbiAgICBsZXQgZGlhQWRpY2lvbmFkbyA9IGFkZERheXMoZG9taW5nb0RlUGFzY29hLCBpbnRlcnZhbG8pO1xyXG4gICAgbGV0IG1lc0FkaWNpb25hZG8gPSBhZGREYXlzKGRvbWluZ29EZVBhc2NvYSwgaW50ZXJ2YWxvKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkaWFBZGljaW9uYWRvLCBtZXNBZGljaW9uYWRvKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IEZlcmlhZG8oZGlhQWRpY2lvbmFkbywgbWVzQWRpY2lvbmFkbywgZGVzY3JpY2FvKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==