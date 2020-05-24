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
  var feriadosFixos = {};
  feriadosFixos.newYearsDay = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](1, 1, "New Year's Day");
  feriadosFixos.SaoPauloAnniversary = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](25, 1, "Sao Paulo's Anniversary");
  feriadosFixos.tiradentesDay = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](21, 4, "Tiradentes Day");
  feriadosFixos.laborDay = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](1, 5, "Labor Day");
  feriadosFixos.revolutionDay = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](9, 7, "Revolution Day");
  feriadosFixos.independenceDay = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](7, 9, "Independence Day");
  feriadosFixos.nossaSraAparecidaDay = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](12, 10, "Nossa Senhora Aparecida's Day");
  feriadosFixos.allSoulsDay = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](2, 11, "All Souls Day");
  feriadosFixos.blackConciousnessDay = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](20, 11, "Black Conciousness Day");
  feriadosFixos.christmasEve = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](24, 12, "Christams Eve");
  feriadosFixos.christmas = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](25, 12, "Christams Eve");

  function feriadosComIntervaloFixo() {
    var carnivalMonday = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"]();
    carnivalMonday.obterFeriadoComIntervaloFixo(new Date(domingoDePascoa), -48, "Carnival Monday");
    var carnivalTuesday = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"]();
    carnivalTuesday.obterFeriadoComIntervaloFixo(domingoDePascoa, -47, "Carnival Tuesday");
    var passionOfChrist = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"]();
    passionOfChrist.obterFeriadoComIntervaloFixo(domingoDePascoa, -2, "Passion of Christ");
    var corpusChristi = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"]();
    corpusChristi.obterFeriadoComIntervaloFixo(domingoDePascoa, 60, "Corpus Christi");
    return {
      carnivalMonday: carnivalMonday,
      carnivalTuesday: carnivalTuesday,
      passionOfChrist: passionOfChrist,
      corpusChristi: corpusChristi
    };
  }

  feriados.feriadosFixos = feriadosFixos;
  feriados.feriadosComIntervaloFixo = feriadosComIntervaloFixo();
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

/***/ }),

/***/ "./core/calendariosLunares/gregoriano.js":
/*!***********************************************!*\
  !*** ./core/calendariosLunares/gregoriano.js ***!
  \***********************************************/
/*! exports provided: obterDomingoDePascoa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obterDomingoDePascoa", function() { return obterDomingoDePascoa; });
function obterDomingoDePascoa(ano) {
  var a = ano % 19;
  var b = Math.floor(parseFloat(ano) / 100);
  var c = ano % 100;
  var d = Math.floor(b / 4);
  var e = b % 4;
  var f = Math.floor((b + 8) / 25);
  var g = Math.floor((b - f + 1) / 3);
  var h = (19 * a + b - d - g + 15) % 30;
  var i = Math.floor(parseFloat(c) / 4);
  var k = c % 4;
  var l = (32 + 2 * e + 2 * i - h - k) % 7;
  var m = Math.floor((a + 11 * h + 22 * l) / 451);
  var mes = Number(Math.floor((h + l - 7 * m + 114) / 31));
  var dia = Number((h + l - 7 * m + 114) % 31) + 1;
  var date = {
    dia: dia,
    mes: mes,
    ano: ano
  };
  console.log(date);
  return date;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
      var diaAdicionado = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["getDay"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(domingoDePascoa, intervalo));
      var mesAdicionado = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["getMonth"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(domingoDePascoa), intervalo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2NhbGVuZGFyaW9zL2JyYXppbC9mZXJpYWRvcy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NhbGVuZGFyaW9zTHVuYXJlcy9ncmVnb3JpYW5vLmpzIiwid2VicGFjazovLy8uL2NvcmUvZmVyaWFkby5qcyJdLCJuYW1lcyI6WyJmZXJpYWRvcyIsImRvbWluZ29EZVBhc2NvYSIsImZlcmlhZG9zRml4b3MiLCJuZXdZZWFyc0RheSIsIkZlcmlhZG8iLCJTYW9QYXVsb0Fubml2ZXJzYXJ5IiwidGlyYWRlbnRlc0RheSIsImxhYm9yRGF5IiwicmV2b2x1dGlvbkRheSIsImluZGVwZW5kZW5jZURheSIsIm5vc3NhU3JhQXBhcmVjaWRhRGF5IiwiYWxsU291bHNEYXkiLCJibGFja0NvbmNpb3VzbmVzc0RheSIsImNocmlzdG1hc0V2ZSIsImNocmlzdG1hcyIsImZlcmlhZG9zQ29tSW50ZXJ2YWxvRml4byIsImNhcm5pdmFsTW9uZGF5Iiwib2J0ZXJGZXJpYWRvQ29tSW50ZXJ2YWxvRml4byIsIkRhdGUiLCJjYXJuaXZhbFR1ZXNkYXkiLCJwYXNzaW9uT2ZDaHJpc3QiLCJjb3JwdXNDaHJpc3RpIiwib2J0ZXJEb21pbmdvRGVQYXNjb2EiLCJhbm8iLCJhIiwiYiIsIk1hdGgiLCJmbG9vciIsInBhcnNlRmxvYXQiLCJjIiwiZCIsImUiLCJmIiwiZyIsImgiLCJpIiwiayIsImwiLCJtIiwibWVzIiwiTnVtYmVyIiwiZGlhIiwiZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkZXNjcmljYW8iLCJpbnRlcnZhbG8iLCJkaWFBZGljaW9uYWRvIiwiZ2V0RGF5IiwiYWRkRGF5cyIsIm1lc0FkaWNpb25hZG8iLCJnZXRNb250aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsZUFBbEIsRUFBbUM7QUFDaEQsTUFBSUQsUUFBUSxHQUFHLEVBQWY7QUFFQSxNQUFJRSxhQUFhLEdB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QUFKLEdBQVEsSUFBSUMsQ0FBWixHQUFnQixHQUFqQixJQUF3QixFQUF6QixDQUFOLEdBQXFDLENBQS9DO0FBRUEsTUFBSUksSUFBSSxHQUFHO0FBQ1RELE9BQUcsRUFBSEEsR0FEUztBQUVURixPQUFHLEVBQUhBLEdBRlM7QUFHVGhCLE9BQUcsRUFBSEE7QUFIUyxHQUFYO0FBTUFvQixTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUVBLFNBQU9BLElBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCRDs7SUFFcUJ0QyxPO0FBQ25CLG1CQUFZcUMsR0FBWixFQUFpQkYsR0FBakIsRUFBc0JNLFNBQXRCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtKLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtNLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs7aURBRTRCNUMsZSxFQUFpQjZDLFMsRUFBV0QsUyxFQUFXO0FBQ2xFLFVBQUlFLGFBQWEsR0FBR0MsdURBQU0sQ0FBQ0Msd0RBQU8sQ0FBQ2hELGVBQUQsRUFBa0I2QyxTQUFsQixDQUFSLENBQTFCO0FBQ0EsVUFBSUksYUFBYSxHQUFHQyx5REFBUSxDQUFDRix3REFBTyxDQUFDaEQsZUFBRCxDQUFSLEVBQTJCNkMsU0FBM0IsQ0FBNUI7QUFFQUgsYUFBTyxDQUFDQyxHQUFSLENBQVlHLGFBQVosRUFBMkJHLGFBQTNCO0FBRUEsYUFBTyxJQUFJOUMsT0FBSixDQUFZMkMsYUFBWixFQUEyQkcsYUFBM0IsRUFBMENMLFNBQTFDLENBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYTM4ZDcwMjkzZWJjNjdlZmUzNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZXJpYWRvIGZyb20gXCIuLi8uLi9mZXJpYWRvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZXJpYWRvcyhkb21pbmdvRGVQYXNjb2EpIHtcclxuICBsZXQgZmVyaWFkb3MgPSB7fTtcclxuXHJcbiAgbGV0IGZlcmlhZG9zRml4b3MgPSB7fTtcclxuICBmZXJpYWRvc0ZpeG9zLm5ld1llYXJzRGF5ID0gbmV3IEZlcmlhZG8oMSwgMSwgXCJOZXcgWWVhcidzIERheVwiKTtcclxuICBmZXJpYWRvc0ZpeG9zLlNhb1BhdWxvQW5uaXZlcnNhcnkgPSBuZXcgRmVyaWFkbyhcclxuICAgIDI1LFxyXG4gICAgMSxcclxuICAgIFwiU2FvIFBhdWxvJ3MgQW5uaXZlcnNhcnlcIlxyXG4gICk7XHJcbiAgZmVyaWFkb3NGaXhvcy50aXJhZGVudGVzRGF5ID0gbmV3IEZlcmlhZG8oMjEsIDQsIFwiVGlyYWRlbnRlcyBEYXlcIik7XHJcbiAgZmVyaWFkb3NGaXhvcy5sYWJvckRheSA9IG5ldyBGZXJpYWRvKDEsIDUsIFwiTGFib3IgRGF5XCIpO1xyXG4gIGZlcmlhZG9zRml4b3MucmV2b2x1dGlvbkRheSA9IG5ldyBGZXJpYWRvKDksIDcsIFwiUmV2b2x1dGlvbiBEYXlcIik7XHJcbiAgZmVyaWFkb3NGaXhvcy5pbmRlcGVuZGVuY2VEYXkgPSBuZXcgRmVyaWFkbyg3LCA5LCBcIkluZGVwZW5kZW5jZSBEYXlcIik7XHJcbiAgZmVyaWFkb3NGaXhvcy5ub3NzYVNyYUFwYXJlY2lkYURheSA9IG5ldyBGZXJpYWRvKFxyXG4gICAgMTIsXHJcbiAgICAxMCxcclxuICAgIFwiTm9zc2EgU2VuaG9yYSBBcGFyZWNpZGEncyBEYXlcIlxyXG4gICk7XHJcbiAgZmVyaWFkb3NGaXhvcy5hbGxTb3Vsc0RheSA9IG5ldyBGZXJpYWRvKDIsIDExLCBcIkFsbCBTb3VscyBEYXlcIik7XHJcbiAgZmVyaWFkb3NGaXhvcy5ibGFja0NvbmNpb3VzbmVzc0RheSA9IG5ldyBGZXJpYWRvKFxyXG4gICAgMjAsXHJcbiAgICAxMSxcclxuICAgIFwiQmxhY2sgQ29uY2lvdXNuZXNzIERheVwiXHJcbiAgKTtcclxuICBmZXJpYWRvc0ZpeG9zLmNocmlzdG1hc0V2ZSA9IG5ldyBGZXJpYWRvKDI0LCAxMiwgXCJDaHJpc3RhbXMgRXZlXCIpO1xyXG4gIGZlcmlhZG9zRml4b3MuY2hyaXN0bWFzID0gbmV3IEZlcmlhZG8oMjUsIDEyLCBcIkNocmlzdGFtcyBFdmVcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGZlcmlhZG9zQ29tSW50ZXJ2YWxvRml4bygpIHtcclxuICAgIGxldCBjYXJuaXZhbE1vbmRheSA9IG5ldyBGZXJpYWRvKCk7XHJcbiAgICBjYXJuaXZhbE1vbmRheS5vYnRlckZlcmlhZG9Db21JbnRlcnZhbG9GaXhvKFxyXG4gICAgICBuZXcgRGF0ZShkb21pbmdvRGVQYXNjb2EpLFxyXG4gICAgICAtNDgsXHJcbiAgICAgIFwiQ2Fybml2YWwgTW9uZGF5XCJcclxuICAgICk7XHJcblxyXG4gICAgbGV0IGNhcm5pdmFsVHVlc2RheSA9IG5ldyBGZXJpYWRvKCk7XHJcbiAgICBjYXJuaXZhbFR1ZXNkYXkub2J0ZXJGZXJpYWRvQ29tSW50ZXJ2YWxvRml4byhcclxuICAgICAgZG9taW5nb0RlUGFzY29hLFxyXG4gICAgICAtNDcsXHJcbiAgICAgIFwiQ2Fybml2YWwgVHVlc2RheVwiXHJcbiAgICApO1xyXG5cclxuICAgIGxldCBwYXNzaW9uT2ZDaHJpc3QgPSBuZXcgRmVyaWFkbygpO1xyXG4gICAgcGFzc2lvbk9mQ2hyaXN0Lm9idGVyRmVyaWFkb0NvbUludGVydmFsb0ZpeG8oXHJcbiAgICAgIGRvbWluZ29EZVBhc2NvYSxcclxuICAgICAgLTIsXHJcbiAgICAgIFwiUGFzc2lvbiBvZiBDaHJpc3RcIlxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgY29ycHVzQ2hyaXN0aSA9IG5ldyBGZXJpYWRvKCk7XHJcbiAgICBjb3JwdXNDaHJpc3RpLm9idGVyRmVyaWFkb0NvbUludGVydmFsb0ZpeG8oXHJcbiAgICAgIGRvbWluZ29EZVBhc2NvYSxcclxuICAgICAgNjAsXHJcbiAgICAgIFwiQ29ycHVzIENocmlzdGlcIlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjYXJuaXZhbE1vbmRheSxcclxuICAgICAgY2Fybml2YWxUdWVzZGF5LFxyXG4gICAgICBwYXNzaW9uT2ZDaHJpc3QsXHJcbiAgICAgIGNvcnB1c0NocmlzdGksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZmVyaWFkb3MuZmVyaWFkb3NGaXhvcyA9IGZlcmlhZG9zRml4b3M7XHJcbiAgZmVyaWFkb3MuZmVyaWFkb3NDb21JbnRlcnZhbG9GaXhvID0gZmVyaWFkb3NDb21JbnRlcnZhbG9GaXhvKCk7XHJcblxyXG4gIHJldHVybiBmZXJpYWRvcztcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gb2J0ZXJEb21pbmdvRGVQYXNjb2EoYW5vKSB7XHJcbiAgbGV0IGEgPSBhbm8gJSAxOTtcclxuICBsZXQgYiA9IE1hdGguZmxvb3IocGFyc2VGbG9hdChhbm8pIC8gMTAwKTtcclxuICBsZXQgYyA9IGFubyAlIDEwMDtcclxuICBsZXQgZCA9IE1hdGguZmxvb3IoYiAvIDQpO1xyXG4gIGxldCBlID0gYiAlIDQ7XHJcbiAgbGV0IGYgPSBNYXRoLmZsb29yKChiICsgOCkgLyAyNSk7XHJcbiAgbGV0IGcgPSBNYXRoLmZsb29yKChiIC0gZiArIDEpIC8gMyk7XHJcbiAgbGV0IGggPSAoMTkgKiBhICsgYiAtIGQgLSBnICsgMTUpICUgMzA7XHJcbiAgbGV0IGkgPSBNYXRoLmZsb29yKHBhcnNlRmxvYXQoYykgLyA0KTtcclxuICBsZXQgayA9IGMgJSA0O1xyXG4gIGxldCBsID0gKDMyICsgMiAqIGUgKyAyICogaSAtIGggLSBrKSAlIDc7XHJcbiAgbGV0IG0gPSBNYXRoLmZsb29yKChhICsgMTEgKiBoICsgMjIgKiBsKSAvIDQ1MSk7XHJcblxyXG4gIGxldCBtZXMgPSBOdW1iZXIoTWF0aC5mbG9vcigoaCArIGwgLSA3ICogbSArIDExNCkgLyAzMSkpO1xyXG4gIGxldCBkaWEgPSBOdW1iZXIoKGggKyBsIC0gNyAqIG0gKyAxMTQpICUgMzEpICsgMTtcclxuXHJcbiAgbGV0IGRhdGUgPSB7XHJcbiAgICBkaWEsXHJcbiAgICBtZXMsXHJcbiAgICBhbm8sXHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coZGF0ZSk7XHJcblxyXG4gIHJldHVybiBkYXRlO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZERheXMsIGdldERheSwgZ2V0TW9udGggfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlcmlhZG8ge1xyXG4gIGNvbnN0cnVjdG9yKGRpYSwgbWVzLCBkZXNjcmljYW8pIHtcclxuICAgIHRoaXMuZGlhID0gZGlhO1xyXG4gICAgdGhpcy5tZXMgPSBtZXM7XHJcbiAgICB0aGlzLmRlc2NyaWNhbyA9IGRlc2NyaWNhbztcclxuICB9XHJcblxyXG4gIG9idGVyRmVyaWFkb0NvbUludGVydmFsb0ZpeG8oZG9taW5nb0RlUGFzY29hLCBpbnRlcnZhbG8sIGRlc2NyaWNhbykge1xyXG4gICAgbGV0IGRpYUFkaWNpb25hZG8gPSBnZXREYXkoYWRkRGF5cyhkb21pbmdvRGVQYXNjb2EsIGludGVydmFsbykpO1xyXG4gICAgbGV0IG1lc0FkaWNpb25hZG8gPSBnZXRNb250aChhZGREYXlzKGRvbWluZ29EZVBhc2NvYSksIGludGVydmFsbyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGlhQWRpY2lvbmFkbywgbWVzQWRpY2lvbmFkbyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBGZXJpYWRvKGRpYUFkaWNpb25hZG8sIG1lc0FkaWNpb25hZG8sIGRlc2NyaWNhbyk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=