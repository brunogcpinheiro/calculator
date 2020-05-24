webpackHotUpdate("static\\development\\pages\\index.js",{

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
  return {
    dia: dia,
    mes: mes,
    ano: ano
  };
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2NhbGVuZGFyaW9zTHVuYXJlcy9ncmVnb3JpYW5vLmpzIl0sIm5hbWVzIjpbIm9idGVyRG9taW5nb0RlUGFzY29hIiwiYW5vIiwiYSIsImIiLCJNYXRoIiwiZmxvb3IiLCJwYXJzZUZsb2F0IiwiYyIsImQiLCJlIiwiZiIsImciLCJoIiwiaSIsImsiLCJsIiwibSIsIm1lcyIsIk51bWJlciIsImRpYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTyxTQUFTQSxvQkFBVCxDQUE4QkMsR0FBOUIsRUFBbUM7QUFDeEMsTUFBSUMsQ0FBQyxHQUFHRCxHQUFHLEdBQUcsRUFBZDtBQUNBLE1BQUlFLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFVBQVUsQ0FBQ0wsR0FBRCxDQUFWLEdBQWtCLEdBQTdCLENBQVI7QUFDQSxNQUFJTSxDQUFDLEdBQUdOLEdBQUcsR0FBRyxHQUFkO0FBQ0EsTUFBSU8sQ0FBQyxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBV0YsQ0FBQyxHQUFHLENBQWYsQ0FBUjtBQUNBLE1BQUlNLENBQUMsR0FBR04sQ0FBQyxHQUFHLENBQVo7QUFDQSxNQUFJTyxDQUFDLEdBQUdOLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNGLENBQUMsR0FBRyxDQUFMLElBQVUsRUFBckIsQ0FBUjtBQUNBLE1BQUlRLENBQUMsR0FBR1AsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQ0YsQ0FBQyxHQUFHTyxDQUFKLEdBQVEsQ0FBVCxJQUFjLENBQXpCLENBQVI7QUFDQSxNQUFJRSxDQUFDLEdBQUcsQ0FBQyxLQUFLVixDQUFMLEdBQVNDLENBQVQsR0FBYUssQ0FBYixHQUFpQkcsQ0FBakIsR0FBcUIsRUFBdEIsSUFBNEIsRUFBcEM7QUFDQSxNQUFJRSxDQUFDLEdBQUdULElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxVQUFVLENBQUNDLENBQUQsQ0FBVixHQUFnQixDQUEzQixDQUFSO0FBQ0EsTUFBSU8sQ0FBQyxHQUFHUCxDQUFDLEdBQUcsQ0FBWjtBQUNBLE1BQUlRLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSU4sQ0FBVCxHQUFhLElBQUlJLENBQWpCLEdBQXFCRCxDQUFyQixHQUF5QkUsQ0FBMUIsSUFBK0IsQ0FBdkM7QUFDQSxNQUFJRSxDQUFDLEdBQUdaLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNILENBQUMsR0FBRyxLQUFLVSxDQUFULEdBQWEsS0FBS0csQ0FBbkIsSUFBd0IsR0FBbkMsQ0FBUjtBQUVBLE1BQUlFLEdBQUcsR0FBR0MsTUFBTSxDQUFDZCxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDTyxDQUFDLEdBQUdHLENBQUosR0FBUSxJQUFJQyxDQUFaLEdBQWdCLEdBQWpCLElBQXdCLEVBQW5DLENBQUQsQ0FBaEI7QUFDQSxNQUFJRyxHQUFHLEdBQUdELE1BQU0sQ0FBQyxDQUFDTixDQUFDLEdBQUdHLENBQUosR0FBUSxJQUFJQyxDQUFaLEdBQWdCLEdBQWpCLElBQXdCLEVBQXpCLENBQU4sR0FBcUMsQ0FBL0M7QUFFQSxTQUFPO0FBQ0xHLE9BQUcsRUFBSEEsR0FESztBQUVMRixPQUFHLEVBQUhBLEdBRks7QUFHTGhCLE9BQUcsRUFBSEE7QUFISyxHQUFQO0FBS0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmQ0ODQ0NjdmZmU5Y2QzOTMzNDZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gb2J0ZXJEb21pbmdvRGVQYXNjb2EoYW5vKSB7XHJcbiAgbGV0IGEgPSBhbm8gJSAxOTtcclxuICBsZXQgYiA9IE1hdGguZmxvb3IocGFyc2VGbG9hdChhbm8pIC8gMTAwKTtcclxuICBsZXQgYyA9IGFubyAlIDEwMDtcclxuICBsZXQgZCA9IE1hdGguZmxvb3IoYiAvIDQpO1xyXG4gIGxldCBlID0gYiAlIDQ7XHJcbiAgbGV0IGYgPSBNYXRoLmZsb29yKChiICsgOCkgLyAyNSk7XHJcbiAgbGV0IGcgPSBNYXRoLmZsb29yKChiIC0gZiArIDEpIC8gMyk7XHJcbiAgbGV0IGggPSAoMTkgKiBhICsgYiAtIGQgLSBnICsgMTUpICUgMzA7XHJcbiAgbGV0IGkgPSBNYXRoLmZsb29yKHBhcnNlRmxvYXQoYykgLyA0KTtcclxuICBsZXQgayA9IGMgJSA0O1xyXG4gIGxldCBsID0gKDMyICsgMiAqIGUgKyAyICogaSAtIGggLSBrKSAlIDc7XHJcbiAgbGV0IG0gPSBNYXRoLmZsb29yKChhICsgMTEgKiBoICsgMjIgKiBsKSAvIDQ1MSk7XHJcblxyXG4gIGxldCBtZXMgPSBOdW1iZXIoTWF0aC5mbG9vcigoaCArIGwgLSA3ICogbSArIDExNCkgLyAzMSkpO1xyXG4gIGxldCBkaWEgPSBOdW1iZXIoKGggKyBsIC0gNyAqIG0gKyAxMTQpICUgMzEpICsgMTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRpYSxcclxuICAgIG1lcyxcclxuICAgIGFubyxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=