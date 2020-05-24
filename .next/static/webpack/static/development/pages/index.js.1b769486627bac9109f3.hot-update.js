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
  var metodos = {};

  function feriadoFixo(dia, mes, descricao) {
    return {
      dia: dia,
      mes: mes,
      descricao: descricao
    };
  }

  function feriadoComIntervaloFixo(domingoDePascoa, intervalo, descricao) {
    var dia = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getDay"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addDays"])(new Date(domingoDePascoa), intervalo));
    var mes = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getMonth"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addDays"])(new Date(domingoDePascoa), intervalo));
    return {
      dia: dia,
      mes: mes,
      descricao: descricao
    };
  }

  metodos.feriadoFixo = feriadoFixo;
  metodos.feriadoComIntervaloFixo = feriadoComIntervaloFixo;
  return metodos;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2ZlcmlhZG8uanMiXSwibmFtZXMiOlsiZmVyaWFkbyIsIm1ldG9kb3MiLCJmZXJpYWRvRml4byIsImRpYSIsIm1lcyIsImRlc2NyaWNhbyIsImZlcmlhZG9Db21JbnRlcnZhbG9GaXhvIiwiZG9taW5nb0RlUGFzY29hIiwiaW50ZXJ2YWxvIiwiZ2V0RGF5IiwiYWRkRGF5cyIsIkRhdGUiLCJnZXRNb250aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUNoQyxNQUFJQyxPQUFPLEdBQUcsRUFBZDs7QUFFQSxXQUFTQyxXQUFULENBQXFCQyxHQUFyQixFQUEwQkMsR0FBMUIsRUFBK0JDLFNBQS9CLEVBQTBDO0FBQ3hDLFdBQU87QUFDTEYsU0FBRyxFQUFIQSxHQURLO0FBRUxDLFNBQUcsRUFBSEEsR0FGSztBQUdMQyxlQUFTLEVBQVRBO0FBSEssS0FBUDtBQUtEOztBQUVELFdBQVNDLHVCQUFULENBQWlDQyxlQUFqQyxFQUFrREMsU0FBbEQsRUFBNkRILFNBQTdELEVBQXdFO0FBQ3RFLFFBQUlGLEdBQUcsR0FBR00sdURBQU0sQ0FBQ0Msd0RBQU8sQ0FBQyxJQUFJQyxJQUFKLENBQVNKLGVBQVQsQ0FBRCxFQUE0QkMsU0FBNUIsQ0FBUixDQUFoQjtBQUNBLFFBQUlKLEdBQUcsR0FBR1EseURBQVEsQ0FBQ0Ysd0RBQU8sQ0FBQyxJQUFJQyxJQUFKLENBQVNKLGVBQVQsQ0FBRCxFQUE0QkMsU0FBNUIsQ0FBUixDQUFsQjtBQUVBLFdBQU87QUFDTEwsU0FBRyxFQUFIQSxHQURLO0FBRUxDLFNBQUcsRUFBSEEsR0FGSztBQUdMQyxlQUFTLEVBQVRBO0FBSEssS0FBUDtBQUtEOztBQUVESixTQUFPLENBQUNDLFdBQVIsR0FBc0JBLFdBQXRCO0FBQ0FELFNBQU8sQ0FBQ0ssdUJBQVIsR0FBa0NBLHVCQUFsQztBQUVBLFNBQU9MLE9BQVA7QUFDRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4xYjc2OTQ4NjYyN2JhYzkxMDlmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkRGF5cywgZ2V0RGF5LCBnZXRNb250aCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmVyaWFkbygpIHtcclxuICBsZXQgbWV0b2RvcyA9IHt9O1xyXG5cclxuICBmdW5jdGlvbiBmZXJpYWRvRml4byhkaWEsIG1lcywgZGVzY3JpY2FvKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkaWEsXHJcbiAgICAgIG1lcyxcclxuICAgICAgZGVzY3JpY2FvLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZlcmlhZG9Db21JbnRlcnZhbG9GaXhvKGRvbWluZ29EZVBhc2NvYSwgaW50ZXJ2YWxvLCBkZXNjcmljYW8pIHtcclxuICAgIGxldCBkaWEgPSBnZXREYXkoYWRkRGF5cyhuZXcgRGF0ZShkb21pbmdvRGVQYXNjb2EpLCBpbnRlcnZhbG8pKTtcclxuICAgIGxldCBtZXMgPSBnZXRNb250aChhZGREYXlzKG5ldyBEYXRlKGRvbWluZ29EZVBhc2NvYSksIGludGVydmFsbykpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRpYSxcclxuICAgICAgbWVzLFxyXG4gICAgICBkZXNjcmljYW8sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbWV0b2Rvcy5mZXJpYWRvRml4byA9IGZlcmlhZG9GaXhvO1xyXG4gIG1ldG9kb3MuZmVyaWFkb0NvbUludGVydmFsb0ZpeG8gPSBmZXJpYWRvQ29tSW50ZXJ2YWxvRml4bztcclxuXHJcbiAgcmV0dXJuIG1ldG9kb3M7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlcmlhZG8ge1xyXG4vLyAgIGNvbnN0cnVjdG9yKGRpYSwgbWVzLCBkZXNjcmljYW8pIHtcclxuLy8gICAgIHRoaXMuZGlhID0gZGlhO1xyXG4vLyAgICAgdGhpcy5tZXMgPSBtZXM7XHJcbi8vICAgICB0aGlzLmRlc2NyaWNhbyA9IGRlc2NyaWNhbztcclxuLy8gICB9XHJcblxyXG4vLyAgIG9idGVyRmVyaWFkb0NvbUludGVydmFsb0ZpeG8oZG9taW5nb0RlUGFzY29hLCBpbnRlcnZhbG8sIGRlc2NyaWNhbykge1xyXG4vLyAgICAgbGV0IGRpYUFkaWNpb25hZG8gPSBhZGREYXlzKGRvbWluZ29EZVBhc2NvYSwgaW50ZXJ2YWxvKTtcclxuLy8gICAgIGxldCBtZXNBZGljaW9uYWRvID0gYWRkRGF5cyhkb21pbmdvRGVQYXNjb2EsIGludGVydmFsbyk7XHJcblxyXG4vLyAgICAgcmV0dXJuIG5ldyBGZXJpYWRvKGRpYUFkaWNpb25hZG8sIG1lc0FkaWNpb25hZG8sIGRlc2NyaWNhbyk7XHJcbi8vICAgfVxyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=