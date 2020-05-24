webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./core/calendarios/brazil/tiposDeCalendarios/ANBIMA.js":
/*!**************************************************************!*\
  !*** ./core/calendarios/brazil/tiposDeCalendarios/ANBIMA.js ***!
  \**************************************************************/
/*! exports provided: obterListaDeFeriados */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obterListaDeFeriados", function() { return obterListaDeFeriados; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _feriados__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feriados */ "./core/calendarios/brazil/feriados.js");
/* harmony import */ var _calendariosLunares_gregoriano__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../calendariosLunares/gregoriano */ "./core/calendariosLunares/gregoriano.js");



function obterListaDeFeriados(ano) {
  var domingoDePascoa = Object(_calendariosLunares_gregoriano__WEBPACK_IMPORTED_MODULE_2__["obterDomingoDePascoa"])(ano);
  var listaDeFeriados = [];
  var lista = Object(_feriados__WEBPACK_IMPORTED_MODULE_1__["default"])(domingoDePascoa);
  console.log(lista);
  listaDeFeriados.push(lista);
  return listaDeFeriados;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2NhbGVuZGFyaW9zL2JyYXppbC90aXBvc0RlQ2FsZW5kYXJpb3MvQU5CSU1BLmpzIl0sIm5hbWVzIjpbIm9idGVyTGlzdGFEZUZlcmlhZG9zIiwiYW5vIiwiZG9taW5nb0RlUGFzY29hIiwib2J0ZXJEb21pbmdvRGVQYXNjb2EiLCJsaXN0YURlRmVyaWFkb3MiLCJsaXN0YSIsImZlcmlhZG9zIiwiY29uc29sZSIsImxvZyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sU0FBU0Esb0JBQVQsQ0FBOEJDLEdBQTlCLEVBQW1DO0FBQ3hDLE1BQU1DLGVBQWUsR0FBR0MsMkZBQW9CLENBQUNGLEdBQUQsQ0FBNUM7QUFFQSxNQUFJRyxlQUFlLEdBQUcsRUFBdEI7QUFFQSxNQUFNQyxLQUFLLEdBQUdDLHlEQUFRLENBQUNKLGVBQUQsQ0FBdEI7QUFFQUssU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFFQUQsaUJBQWUsQ0FBQ0ssSUFBaEIsQ0FBcUJKLEtBQXJCO0FBRUEsU0FBT0QsZUFBUDtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kODI5OWZkM2FmYWY5YmEwNWE2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RGF0ZSB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgZmVyaWFkb3MgZnJvbSBcIi4uL2ZlcmlhZG9zXCI7XHJcbmltcG9ydCB7IG9idGVyRG9taW5nb0RlUGFzY29hIH0gZnJvbSBcIi4uLy4uLy4uL2NhbGVuZGFyaW9zTHVuYXJlcy9ncmVnb3JpYW5vXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2J0ZXJMaXN0YURlRmVyaWFkb3MoYW5vKSB7XHJcbiAgY29uc3QgZG9taW5nb0RlUGFzY29hID0gb2J0ZXJEb21pbmdvRGVQYXNjb2EoYW5vKTtcclxuXHJcbiAgbGV0IGxpc3RhRGVGZXJpYWRvcyA9IFtdO1xyXG5cclxuICBjb25zdCBsaXN0YSA9IGZlcmlhZG9zKGRvbWluZ29EZVBhc2NvYSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGxpc3RhKTtcclxuXHJcbiAgbGlzdGFEZUZlcmlhZG9zLnB1c2gobGlzdGEpO1xyXG5cclxuICByZXR1cm4gbGlzdGFEZUZlcmlhZG9zO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=