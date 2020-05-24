webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./core/calendarios/brazil/feriados.js":
/*!*********************************************!*\
  !*** ./core/calendarios/brazil/feriados.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return feriados; });
/* harmony import */ var _feriado__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../feriado */ "./core/feriado.js");

function feriados(domingoDePascoa) {
  var feriados = {};
  var fixos = {};
  var intervaloFixo = {};
  _feriado__WEBPACK_IMPORTED_MODULE_0__["default"];
  fixos.newYearsDay = feriadoFixo(1, 1, "New Year's Day");
  fixos.SaoPauloAnniversary = feriadoFixo(25, 1, "Sao Paulo's Anniversary");
  fixos.tiradentesDay = feriadoFixo(21, 4, "Tiradentes Day");
  fixos.laborDay = feriadoFixo(1, 5, "Labor Day");
  fixos.revolutionDay = feriadoFixo(9, 7, "Revolution Day");
  fixos.independenceDay = feriadoFixo(7, 9, "Independence Day");
  fixos.nossaSraAparecidaDay = feriadoFixo(12, 10, "Nossa Senhora Aparecida's Day");
  fixos.allSoulsDay = feriadoFixo(2, 11, "All Souls Day");
  fixos.blackConciousnessDay = feriadoFixo(20, 11, "Black Conciousness Day");
  fixos.christmasEve = feriadoFixo(24, 12, "Christams Eve");
  fixos.christmas = feriadoFixo(25, 12, "Christams Eve");
  intervalofixo.carnivalMonday = feriadosComIntervaloFixo(domingoDePascoa, -48, "Carnival Monday");
  intervaloFixo.carnivalTuesday = feriadosComIntervaloFixo(domingoDePascoa, -47, "Carnival Tuesday");
  intervaloFixo.passionOfChrist = feriadosComIntervaloFixo(domingoDePascoa, -2, "Passion of Christ");
  intervaloFixo.corpusChristi = feriadosComIntervaloFixo(domingoDePascoa, 60, "Corpus Christi");
  feriados.fixos = feriadosFixos;
  feriados.intervaloFixo = intervaloFixo;
  return feriados;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2NhbGVuZGFyaW9zL2JyYXppbC9mZXJpYWRvcy5qcyJdLCJuYW1lcyI6WyJmZXJpYWRvcyIsImRvbWluZ29EZVBhc2NvYSIsImZpeG9zIiwiaW50ZXJ2YWxvRml4byIsImZlcmlhZG8iLCJuZXdZZWFyc0RheSIsImZlcmlhZG9GaXhvIiwiU2FvUGF1bG9Bbm5pdmVyc2FyeSIsInRpcmFkZW50ZXNEYXkiLCJsYWJvckRheSIsInJldm9sdXRpb25EYXkiLCJpbmRlcGVuZGVuY2VEYXkiLCJub3NzYVNyYUFwYXJlY2lkYURheSIsImFsbFNvdWxzRGF5IiwiYmxhY2tDb25jaW91c25lc3NEYXkiLCJjaHJpc3RtYXNFdmUiLCJjaHJpc3RtYXMiLCJpbnRlcnZhbG9maXhvIiwiY2Fybml2YWxNb25kYXkiLCJmZXJpYWRvc0NvbUludGVydmFsb0ZpeG8iLCJjYXJuaXZhbFR1ZXNkYXkiLCJwYXNzaW9uT2ZDaHJpc3QiLCJjb3JwdXNDaHJpc3RpIiwiZmVyaWFkb3NGaXhvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsZUFBbEIsRUFBbUM7QUFDaEQsTUFBSUQsUUFBUSxHQUFHLEVBQWY7QUFDQSxNQUFJRSxLQUFLLEdBQUcsRUFBWjtBQUNBLE1BQUlDLGFBQWEsR0FBRyxFQUFwQjtBQUVBQyxrREFBTztBQUVQRixPQUFLLENBQUNHLFdBQU4sR0FBb0JDLFdBQVcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLGdCQUFQLENBQS9CO0FBQ0FKLE9BQUssQ0FBQ0ssbUJBQU4sR0FBNEJELFdBQVcsQ0FBQyxFQUFELEVBQUssQ0FBTCxFQUFRLHlCQUFSLENBQXZDO0FBQ0FKLE9BQUssQ0FBQ00sYUFBTixHQUFzQkYsV0FBVyxDQUFDLEVBQUQsRUFBSyxDQUFMLEVBQVEsZ0JBQVIsQ0FBakM7QUFDQUosT0FBSyxDQUFDTyxRQUFOLEdBQWlCSCxXQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxXQUFQLENBQTVCO0FBQ0FKLE9BQUssQ0FBQ1EsYUFBTixHQUFzQkosV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sZ0JBQVAsQ0FBakM7QUFDQUosT0FBSyxDQUFDUyxlQUFOLEdBQXdCTCxXQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxrQkFBUCxDQUFuQztBQUNBSixPQUFLLENBQUNVLG9CQUFOLEdBQTZCTixXQUFXLENBQ3RDLEVBRHNDLEVBRXRDLEVBRnNDLEVBR3RDLCtCQUhzQyxDQUF4QztBQUtBSixPQUFLLENBQUNXLFdBQU4sR0FBb0JQLFdBQVcsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLGVBQVIsQ0FBL0I7QUFDQUosT0FBSyxDQUFDWSxvQkFBTixHQUE2QlIsV0FBVyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsd0JBQVQsQ0FBeEM7QUFDQUosT0FBSyxDQUFDYSxZQUFOLEdBQXFCVCxXQUFXLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxlQUFULENBQWhDO0FBQ0FKLE9BQUssQ0FBQ2MsU0FBTixHQUFrQlYsV0FBVyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsZUFBVCxDQUE3QjtBQUVBVyxlQUFhLENBQUNDLGNBQWQsR0FBK0JDLHdCQUF3QixDQUNyRGxCLGVBRHFELEVBRXJELENBQUMsRUFGb0QsRUFHckQsaUJBSHFELENBQXZEO0FBTUFFLGVBQWEsQ0FBQ2lCLGVBQWQsR0FBZ0NELHdCQUF3QixDQUN0RGxCLGVBRHNELEVBRXRELENBQUMsRUFGcUQsRUFHdEQsa0JBSHNELENBQXhEO0FBTUFFLGVBQWEsQ0FBQ2tCLGVBQWQsR0FBZ0NGLHdCQUF3QixDQUN0RGxCLGVBRHNELEVBRXRELENBQUMsQ0FGcUQsRUFHdEQsbUJBSHNELENBQXhEO0FBTUFFLGVBQWEsQ0FBQ21CLGFBQWQsR0FBOEJILHdCQUF3QixDQUNwRGxCLGVBRG9ELEVBRXBELEVBRm9ELEVBR3BELGdCQUhvRCxDQUF0RDtBQU1BRCxVQUFRLENBQUNFLEtBQVQsR0FBaUJxQixhQUFqQjtBQUNBdkIsVUFBUSxDQUFDRyxhQUFULEdBQXlCQSxhQUF6QjtBQUVBLFNBQU9ILFFBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNjQxN2Y5NTdhYjAzODNjMmRiNWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXJpYWRvIGZyb20gXCIuLi8uLi9mZXJpYWRvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZXJpYWRvcyhkb21pbmdvRGVQYXNjb2EpIHtcclxuICBsZXQgZmVyaWFkb3MgPSB7fTtcclxuICBsZXQgZml4b3MgPSB7fTtcclxuICBsZXQgaW50ZXJ2YWxvRml4byA9IHt9O1xyXG5cclxuICBmZXJpYWRvO1xyXG5cclxuICBmaXhvcy5uZXdZZWFyc0RheSA9IGZlcmlhZG9GaXhvKDEsIDEsIFwiTmV3IFllYXIncyBEYXlcIik7XHJcbiAgZml4b3MuU2FvUGF1bG9Bbm5pdmVyc2FyeSA9IGZlcmlhZG9GaXhvKDI1LCAxLCBcIlNhbyBQYXVsbydzIEFubml2ZXJzYXJ5XCIpO1xyXG4gIGZpeG9zLnRpcmFkZW50ZXNEYXkgPSBmZXJpYWRvRml4bygyMSwgNCwgXCJUaXJhZGVudGVzIERheVwiKTtcclxuICBmaXhvcy5sYWJvckRheSA9IGZlcmlhZG9GaXhvKDEsIDUsIFwiTGFib3IgRGF5XCIpO1xyXG4gIGZpeG9zLnJldm9sdXRpb25EYXkgPSBmZXJpYWRvRml4byg5LCA3LCBcIlJldm9sdXRpb24gRGF5XCIpO1xyXG4gIGZpeG9zLmluZGVwZW5kZW5jZURheSA9IGZlcmlhZG9GaXhvKDcsIDksIFwiSW5kZXBlbmRlbmNlIERheVwiKTtcclxuICBmaXhvcy5ub3NzYVNyYUFwYXJlY2lkYURheSA9IGZlcmlhZG9GaXhvKFxyXG4gICAgMTIsXHJcbiAgICAxMCxcclxuICAgIFwiTm9zc2EgU2VuaG9yYSBBcGFyZWNpZGEncyBEYXlcIlxyXG4gICk7XHJcbiAgZml4b3MuYWxsU291bHNEYXkgPSBmZXJpYWRvRml4bygyLCAxMSwgXCJBbGwgU291bHMgRGF5XCIpO1xyXG4gIGZpeG9zLmJsYWNrQ29uY2lvdXNuZXNzRGF5ID0gZmVyaWFkb0ZpeG8oMjAsIDExLCBcIkJsYWNrIENvbmNpb3VzbmVzcyBEYXlcIik7XHJcbiAgZml4b3MuY2hyaXN0bWFzRXZlID0gZmVyaWFkb0ZpeG8oMjQsIDEyLCBcIkNocmlzdGFtcyBFdmVcIik7XHJcbiAgZml4b3MuY2hyaXN0bWFzID0gZmVyaWFkb0ZpeG8oMjUsIDEyLCBcIkNocmlzdGFtcyBFdmVcIik7XHJcblxyXG4gIGludGVydmFsb2ZpeG8uY2Fybml2YWxNb25kYXkgPSBmZXJpYWRvc0NvbUludGVydmFsb0ZpeG8oXHJcbiAgICBkb21pbmdvRGVQYXNjb2EsXHJcbiAgICAtNDgsXHJcbiAgICBcIkNhcm5pdmFsIE1vbmRheVwiXHJcbiAgKTtcclxuXHJcbiAgaW50ZXJ2YWxvRml4by5jYXJuaXZhbFR1ZXNkYXkgPSBmZXJpYWRvc0NvbUludGVydmFsb0ZpeG8oXHJcbiAgICBkb21pbmdvRGVQYXNjb2EsXHJcbiAgICAtNDcsXHJcbiAgICBcIkNhcm5pdmFsIFR1ZXNkYXlcIlxyXG4gICk7XHJcblxyXG4gIGludGVydmFsb0ZpeG8ucGFzc2lvbk9mQ2hyaXN0ID0gZmVyaWFkb3NDb21JbnRlcnZhbG9GaXhvKFxyXG4gICAgZG9taW5nb0RlUGFzY29hLFxyXG4gICAgLTIsXHJcbiAgICBcIlBhc3Npb24gb2YgQ2hyaXN0XCJcclxuICApO1xyXG5cclxuICBpbnRlcnZhbG9GaXhvLmNvcnB1c0NocmlzdGkgPSBmZXJpYWRvc0NvbUludGVydmFsb0ZpeG8oXHJcbiAgICBkb21pbmdvRGVQYXNjb2EsXHJcbiAgICA2MCxcclxuICAgIFwiQ29ycHVzIENocmlzdGlcIlxyXG4gICk7XHJcblxyXG4gIGZlcmlhZG9zLmZpeG9zID0gZmVyaWFkb3NGaXhvcztcclxuICBmZXJpYWRvcy5pbnRlcnZhbG9GaXhvID0gaW50ZXJ2YWxvRml4bztcclxuXHJcbiAgcmV0dXJuIGZlcmlhZG9zO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=