webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./core/feriado.js":
/*!*************************!*\
  !*** ./core/feriado.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return feriado; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");

function feriado() {
  function feriadoFixo(dia, mes, descricao) {
    return {
      dia: dia,
      mes: mes,
      descricao: descricao
    };
  }

  function feriadoComIntervaloFixo(domingoDePascoa, intervalo, descricao) {
    var dia = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addDays"])(new Date(domingoDePascoa), intervalo).getDay();
    var mes = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addDays"])(new Date(domingoDePascoa), intervalo).getMonth();
    return {
      dia: dia,
      mes: mes,
      descricao: descricao
    };
  }

  return {
    feriadoFixo: feriadoFixo,
    feriadoComIntervaloFixo: feriadoComIntervaloFixo
  };
} // export default class Feriado {
//   constructor(dia, mes, descricao) {
//     this.dia = dia;
//     this.mes = mes;
//     this.descricao = descricao;
//   }
//   obterFeriadoComIntervaloFixo(domingoDePascoa, intervalo, descricao) {
//     let diaAdicionado = addDays(domingoDePascoa, intervalo);
//     let mesAdicionado = addDays(domingoDePascoa, intervalo);
//     return new Feriado(diaAdicionado, mesAdicionado, descricao);
//   }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2ZlcmlhZG8uanMiXSwibmFtZXMiOlsiZmVyaWFkbyIsImZlcmlhZG9GaXhvIiwiZGlhIiwibWVzIiwiZGVzY3JpY2FvIiwiZmVyaWFkb0NvbUludGVydmFsb0ZpeG8iLCJkb21pbmdvRGVQYXNjb2EiLCJpbnRlcnZhbG8iLCJhZGREYXlzIiwiRGF0ZSIsImdldERheSIsImdldE1vbnRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQ2hDLFdBQVNDLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCQyxHQUExQixFQUErQkMsU0FBL0IsRUFBMEM7QUFDeEMsV0FBTztBQUNMRixTQUFHLEVBQUhBLEdBREs7QUFFTEMsU0FBRyxFQUFIQSxHQUZLO0FBR0xDLGVBQVMsRUFBVEE7QUFISyxLQUFQO0FBS0Q7O0FBRUQsV0FBU0MsdUJBQVQsQ0FBaUNDLGVBQWpDLEVBQWtEQyxTQUFsRCxFQUE2REgsU0FBN0QsRUFBd0U7QUFDdEUsUUFBSUYsR0FBRyxHQUFHTSx3REFBTyxDQUFDLElBQUlDLElBQUosQ0FBU0gsZUFBVCxDQUFELEVBQTRCQyxTQUE1QixDQUFQLENBQThDRyxNQUE5QyxFQUFWO0FBQ0EsUUFBSVAsR0FBRyxHQUFHSyx3REFBTyxDQUFDLElBQUlDLElBQUosQ0FBU0gsZUFBVCxDQUFELEVBQTRCQyxTQUE1QixDQUFQLENBQThDSSxRQUE5QyxFQUFWO0FBRUEsV0FBTztBQUNMVCxTQUFHLEVBQUhBLEdBREs7QUFFTEMsU0FBRyxFQUFIQSxHQUZLO0FBR0xDLGVBQVMsRUFBVEE7QUFISyxLQUFQO0FBS0Q7O0FBRUQsU0FBTztBQUNMSCxlQUFXLEVBQVhBLFdBREs7QUFFTEksMkJBQXVCLEVBQXZCQTtBQUZLLEdBQVA7QUFJRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iMGRjZWRlZmVlYmRlZDdiZmMxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkRGF5cywgZ2V0RGF5LCBnZXRNb250aCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmVyaWFkbygpIHtcclxuICBmdW5jdGlvbiBmZXJpYWRvRml4byhkaWEsIG1lcywgZGVzY3JpY2FvKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkaWEsXHJcbiAgICAgIG1lcyxcclxuICAgICAgZGVzY3JpY2FvLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZlcmlhZG9Db21JbnRlcnZhbG9GaXhvKGRvbWluZ29EZVBhc2NvYSwgaW50ZXJ2YWxvLCBkZXNjcmljYW8pIHtcclxuICAgIGxldCBkaWEgPSBhZGREYXlzKG5ldyBEYXRlKGRvbWluZ29EZVBhc2NvYSksIGludGVydmFsbykuZ2V0RGF5KCk7XHJcbiAgICBsZXQgbWVzID0gYWRkRGF5cyhuZXcgRGF0ZShkb21pbmdvRGVQYXNjb2EpLCBpbnRlcnZhbG8pLmdldE1vbnRoKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGlhLFxyXG4gICAgICBtZXMsXHJcbiAgICAgIGRlc2NyaWNhbyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZmVyaWFkb0ZpeG8sXHJcbiAgICBmZXJpYWRvQ29tSW50ZXJ2YWxvRml4byxcclxuICB9O1xyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBGZXJpYWRvIHtcclxuLy8gICBjb25zdHJ1Y3RvcihkaWEsIG1lcywgZGVzY3JpY2FvKSB7XHJcbi8vICAgICB0aGlzLmRpYSA9IGRpYTtcclxuLy8gICAgIHRoaXMubWVzID0gbWVzO1xyXG4vLyAgICAgdGhpcy5kZXNjcmljYW8gPSBkZXNjcmljYW87XHJcbi8vICAgfVxyXG5cclxuLy8gICBvYnRlckZlcmlhZG9Db21JbnRlcnZhbG9GaXhvKGRvbWluZ29EZVBhc2NvYSwgaW50ZXJ2YWxvLCBkZXNjcmljYW8pIHtcclxuLy8gICAgIGxldCBkaWFBZGljaW9uYWRvID0gYWRkRGF5cyhkb21pbmdvRGVQYXNjb2EsIGludGVydmFsbyk7XHJcbi8vICAgICBsZXQgbWVzQWRpY2lvbmFkbyA9IGFkZERheXMoZG9taW5nb0RlUGFzY29hLCBpbnRlcnZhbG8pO1xyXG5cclxuLy8gICAgIHJldHVybiBuZXcgRmVyaWFkbyhkaWFBZGljaW9uYWRvLCBtZXNBZGljaW9uYWRvLCBkZXNjcmljYW8pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9