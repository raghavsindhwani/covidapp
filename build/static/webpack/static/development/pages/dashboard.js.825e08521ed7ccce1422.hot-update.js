webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./views/TaskAreaView.jsx":
/*!********************************!*\
  !*** ./views/TaskAreaView.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TaskAreaView; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/raghavsindhwani/Desktop/officalcovidapp/covidapplication/views/TaskAreaView.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import ComponentSlider from \"@kapost/react-component-slider\";\n// import ScrollMenu from 'react-horizontal-scrolling-menu';\n// const renderLeftArrow = () => <i className=\"fa fa-caret-left\" />;\n// const renderRightArrow = () => <i className=\"fa fa-caret-right\" />;\n\nfunction TaskAreaView() {\n  var _this = this;\n\n  return __jsx(\"div\", {\n    className: \"taskArea\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"card card--mb20\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"grid-inner\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    className: \"heading heading--h4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, \"Tasks Area\")), __jsx(\"div\", {\n    className: \"card__content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }, __jsx(\"ul\", {\n    className: \"taskArea__listing\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }, ['Lobby', 'Reception', 'Washroom', 'Lobby', 'Reception', 'Washroom', 'Cafe Area'].map(function (item) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/listing\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 37\n      }\n    }, __jsx(\"li\", {\n      className: \"taskArea__listing__item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 41\n      }\n    }, __jsx(\"img\", {\n      src: \"/images/\".concat(item, \".jpg\"),\n      height: \"70%\",\n      width: \"80%\",\n      alt: \"img\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 45\n      }\n    }), __jsx(\"div\", {\n      className: \"taskArea__listing__label\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 45\n      }\n    }, item)));\n  })))));\n}\n_c = TaskAreaView;\n\nvar _c;\n\n$RefreshReg$(_c, \"TaskAreaView\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9UYXNrQXJlYVZpZXcuanN4Pzk1NTIiXSwibmFtZXMiOlsiVGFza0FyZWFWaWV3IiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtDQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVlLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFFbkMsU0FDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSSxhQUFTLEVBQUMscUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxDQURBLEVBSUk7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRLENBQUMsT0FBRCxFQUFVLFdBQVYsRUFBdUIsVUFBdkIsRUFBa0MsT0FBbEMsRUFBMkMsV0FBM0MsRUFBd0QsVUFBeEQsRUFBb0UsV0FBcEUsRUFBaUZDLEdBQWpGLENBQXFGLFVBQUNDLElBQUQsRUFBVTtBQUMzRixXQUNJLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSSxlQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQ0ksU0FBRyxvQkFBYUEsSUFBYixTQURQO0FBRUssWUFBTSxFQUFDLEtBRlo7QUFFa0IsV0FBSyxFQUFDLEtBRnhCO0FBR0ksU0FBRyxFQUFDLEtBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBTUk7QUFBSyxlQUFTLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEyQ0EsSUFBM0MsQ0FOSixDQURKLENBREo7QUFZSCxHQWJELENBRlIsQ0FESixDQUpKLENBTEosQ0FESjtBQWtDSDtLQXBDdUJGLFkiLCJmaWxlIjoiLi92aWV3cy9UYXNrQXJlYVZpZXcuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG4vLyBpbXBvcnQgQ29tcG9uZW50U2xpZGVyIGZyb20gXCJAa2Fwb3N0L3JlYWN0LWNvbXBvbmVudC1zbGlkZXJcIjtcbi8vIGltcG9ydCBTY3JvbGxNZW51IGZyb20gJ3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUnO1xuXG4vLyBjb25zdCByZW5kZXJMZWZ0QXJyb3cgPSAoKSA9PiA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYXJldC1sZWZ0XCIgLz47XG4vLyBjb25zdCByZW5kZXJSaWdodEFycm93ID0gKCkgPT4gPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FyZXQtcmlnaHRcIiAvPjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFza0FyZWFWaWV3KCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rhc2tBcmVhJz5cbiAgICAgICAgICAgIHsvKiA8Q29tcG9uZW50U2xpZGVyXG4gICAgICAgICAgcmVuZGVyTGVmdEFycm93PXtyZW5kZXJMZWZ0QXJyb3d9XG4gICAgICAgICAgcmVuZGVyUmlnaHRBcnJvdz17cmVuZGVyUmlnaHRBcnJvd31cbiAgICAgICAgPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIGNhcmQtLW1iMjAnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQtaW5uZXInPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0naGVhZGluZyBoZWFkaW5nLS1oNCc+VGFza3MgQXJlYTwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZF9fY29udGVudCc+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3Rhc2tBcmVhX19saXN0aW5nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ0xvYmJ5JywgJ1JlY2VwdGlvbicsICdXYXNocm9vbScsJ0xvYmJ5JywgJ1JlY2VwdGlvbicsICdXYXNocm9vbScsICdDYWZlIEFyZWEnXS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9saXN0aW5nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0YXNrQXJlYV9fbGlzdGluZ19faXRlbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtpdGVtfS5qcGdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD0nNzAlJyB3aWR0aD0nODAlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdpbWcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YXNrQXJlYV9fbGlzdGluZ19fbGFiZWwnPntpdGVtfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDwvQ29tcG9uZW50U2xpZGVyPiAgICovfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./views/TaskAreaView.jsx\n");

/***/ })

})