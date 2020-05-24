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
  var data = new Date(dia, mes, ano);
  console.log(data);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2NhbGVuZGFyaW9zTHVuYXJlcy9ncmVnb3JpYW5vLmpzIl0sIm5hbWVzIjpbIm9idGVyRG9taW5nb0RlUGFzY29hIiwiYW5vIiwiYSIsImIiLCJNYXRoIiwiZmxvb3IiLCJwYXJzZUZsb2F0IiwiYyIsImQiLCJlIiwiZiIsImciLCJoIiwiaSIsImsiLCJsIiwibSIsIm1lcyIsIk51bWJlciIsImRpYSIsImRhdGEiLCJEYXRlIiwiY29uc29sZSIsImxvZyIsImRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sU0FBU0Esb0JBQVQsQ0FBOEJDLEdBQTlCLEVBQW1DO0FBQ3hDLE1BQUlDLENBQUMsR0FBR0QsR0FBRyxHQUFHLEVBQWQ7QUFDQSxNQUFJRSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxVQUFVLENBQUNMLEdBQUQsQ0FBVixHQUFrQixHQUE3QixDQUFSO0FBQ0EsTUFBSU0sQ0FBQyxHQUFHTixHQUFHLEdBQUcsR0FBZDtBQUNBLE1BQUlPLENBQUMsR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQVdGLENBQUMsR0FBRyxDQUFmLENBQVI7QUFDQSxNQUFJTSxDQUFDLEdBQUdOLENBQUMsR0FBRyxDQUFaO0FBQ0EsTUFBSU8sQ0FBQyxHQUFHTixJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDRixDQUFDLEdBQUcsQ0FBTCxJQUFVLEVBQXJCLENBQVI7QUFDQSxNQUFJUSxDQUFDLEdBQUdQLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNGLENBQUMsR0FBR08sQ0FBSixHQUFRLENBQVQsSUFBYyxDQUF6QixDQUFSO0FBQ0EsTUFBSUUsQ0FBQyxHQUFHLENBQUMsS0FBS1YsQ0FBTCxHQUFTQyxDQUFULEdBQWFLLENBQWIsR0FBaUJHLENBQWpCLEdBQXFCLEVBQXRCLElBQTRCLEVBQXBDO0FBQ0EsTUFBSUUsQ0FBQyxHQUFHVCxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsVUFBVSxDQUFDQyxDQUFELENBQVYsR0FBZ0IsQ0FBM0IsQ0FBUjtBQUNBLE1BQUlPLENBQUMsR0FBR1AsQ0FBQyxHQUFHLENBQVo7QUFDQSxNQUFJUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUlOLENBQVQsR0FBYSxJQUFJSSxDQUFqQixHQUFxQkQsQ0FBckIsR0FBeUJFLENBQTFCLElBQStCLENBQXZDO0FBQ0EsTUFBSUUsQ0FBQyxHQUFHWixJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDSCxDQUFDLEdBQUcsS0FBS1UsQ0FBVCxHQUFhLEtBQUtHLENBQW5CLElBQXdCLEdBQW5DLENBQVI7QUFFQSxNQUFJRSxHQUFHLEdBQUdDLE1BQU0sQ0FBQ2QsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQ08sQ0FBQyxHQUFHRyxDQUFKLEdBQVEsSUFBSUMsQ0FBWixHQUFnQixHQUFqQixJQUF3QixFQUFuQyxDQUFELENBQWhCO0FBQ0EsTUFBSUcsR0FBRyxHQUFHRCxNQUFNLENBQUMsQ0FBQ04sQ0FBQyxHQUFHRyxDQUFKLEdBQVEsSUFBSUMsQ0FBWixHQUFnQixHQUFqQixJQUF3QixFQUF6QixDQUFOLEdBQXFDLENBQS9DO0FBRUEsTUFBSUksSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU0YsR0FBVCxFQUFjRixHQUFkLEVBQW1CaEIsR0FBbkIsQ0FBWDtBQUVBcUIsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFFQSxNQUFJSSxJQUFJLEdBQUc7QUFDVEwsT0FBRyxFQUFIQSxHQURTO0FBRVRGLE9BQUcsRUFBSEEsR0FGUztBQUdUaEIsT0FBRyxFQUFIQTtBQUhTLEdBQVg7QUFNQXFCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaO0FBRUEsU0FBT0EsSUFBUDtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy44MTgzMDMxNjI4ZTFhOWJjY2FlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIG9idGVyRG9taW5nb0RlUGFzY29hKGFubykge1xyXG4gIGxldCBhID0gYW5vICUgMTk7XHJcbiAgbGV0IGIgPSBNYXRoLmZsb29yKHBhcnNlRmxvYXQoYW5vKSAvIDEwMCk7XHJcbiAgbGV0IGMgPSBhbm8gJSAxMDA7XHJcbiAgbGV0IGQgPSBNYXRoLmZsb29yKGIgLyA0KTtcclxuICBsZXQgZSA9IGIgJSA0O1xyXG4gIGxldCBmID0gTWF0aC5mbG9vcigoYiArIDgpIC8gMjUpO1xyXG4gIGxldCBnID0gTWF0aC5mbG9vcigoYiAtIGYgKyAxKSAvIDMpO1xyXG4gIGxldCBoID0gKDE5ICogYSArIGIgLSBkIC0gZyArIDE1KSAlIDMwO1xyXG4gIGxldCBpID0gTWF0aC5mbG9vcihwYXJzZUZsb2F0KGMpIC8gNCk7XHJcbiAgbGV0IGsgPSBjICUgNDtcclxuICBsZXQgbCA9ICgzMiArIDIgKiBlICsgMiAqIGkgLSBoIC0gaykgJSA3O1xyXG4gIGxldCBtID0gTWF0aC5mbG9vcigoYSArIDExICogaCArIDIyICogbCkgLyA0NTEpO1xyXG5cclxuICBsZXQgbWVzID0gTnVtYmVyKE1hdGguZmxvb3IoKGggKyBsIC0gNyAqIG0gKyAxMTQpIC8gMzEpKTtcclxuICBsZXQgZGlhID0gTnVtYmVyKChoICsgbCAtIDcgKiBtICsgMTE0KSAlIDMxKSArIDE7XHJcblxyXG4gIGxldCBkYXRhID0gbmV3IERhdGUoZGlhLCBtZXMsIGFubyk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICBsZXQgZGF0ZSA9IHtcclxuICAgIGRpYSxcclxuICAgIG1lcyxcclxuICAgIGFubyxcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhkYXRlKTtcclxuXHJcbiAgcmV0dXJuIGRhdGU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==