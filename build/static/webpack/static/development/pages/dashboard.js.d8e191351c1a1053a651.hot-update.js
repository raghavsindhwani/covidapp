webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./views/TaskAreaView.jsx":
/*!********************************!*\
  !*** ./views/TaskAreaView.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TaskAreaView; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/raghavsindhwani/Desktop/officalcovidapp/covidapplication/views/TaskAreaView.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import ComponentSlider from \"@kapost/react-component-slider\";\n// import ScrollMenu from 'react-horizontal-scrolling-menu';\n// const renderLeftArrow = () => <i className=\"fa fa-caret-left\" />;\n// const renderRightArrow = () => <i className=\"fa fa-caret-right\" />;\n\nfunction TaskAreaView() {\n  var _this = this;\n\n  return __jsx(\"div\", {\n    className: \"taskArea\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(ComponentSlider, {\n    renderLeftArrow: renderLeftArrow,\n    renderRightArrow: renderRightArrow,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"card card--mb20\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"grid-inner\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    className: \"heading heading--h4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, \"Tasks Area\")), __jsx(\"div\", {\n    className: \"card__content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }, __jsx(\"ul\", {\n    className: \"taskArea__listing\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }, ['Lobby', 'Reception', 'Washroom', 'Lobby', 'Reception', 'Washroom', 'Cafe Area'].map(function (item) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/listing\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 37\n      }\n    }, __jsx(\"li\", {\n      className: \"taskArea__listing__item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 41\n      }\n    }, __jsx(\"img\", {\n      src: \"/images/\".concat(item, \".jpg\"),\n      height: \"70%\",\n      width: \"80%\",\n      alt: \"img\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 45\n      }\n    }), __jsx(\"div\", {\n      className: \"taskArea__listing__label\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 45\n      }\n    }, item)));\n  }))))));\n}\n_c = TaskAreaView;\n\nvar _c;\n\n$RefreshReg$(_c, \"TaskAreaView\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9UYXNrQXJlYVZpZXcuanN4Pzk1NTIiXSwibmFtZXMiOlsiVGFza0FyZWFWaWV3IiwicmVuZGVyTGVmdEFycm93IiwicmVuZGVyUmlnaHRBcnJvdyIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Q0FFQTtBQUNBO0FBRUE7QUFDQTs7QUFFZSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBRW5DLFNBQ0k7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxlQUFEO0FBQ0YsbUJBQWUsRUFBRUMsZUFEZjtBQUVGLG9CQUFnQixFQUFFQyxnQkFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlBO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFJLGFBQVMsRUFBQyxxQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLENBREEsRUFJSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVEsQ0FBQyxPQUFELEVBQVUsV0FBVixFQUF1QixVQUF2QixFQUFrQyxPQUFsQyxFQUEyQyxXQUEzQyxFQUF3RCxVQUF4RCxFQUFvRSxXQUFwRSxFQUFpRkMsR0FBakYsQ0FBcUYsVUFBQ0MsSUFBRCxFQUFVO0FBQzNGLFdBQ0ksTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFJLGVBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFDSSxTQUFHLG9CQUFhQSxJQUFiLFNBRFA7QUFFSyxZQUFNLEVBQUMsS0FGWjtBQUVrQixXQUFLLEVBQUMsS0FGeEI7QUFHSSxTQUFHLEVBQUMsS0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFNSTtBQUFLLGVBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTJDQSxJQUEzQyxDQU5KLENBREosQ0FESjtBQVlILEdBYkQsQ0FGUixDQURKLENBSkosQ0FKQSxDQURKLENBREo7QUFrQ0g7S0FwQ3VCSixZIiwiZmlsZSI6Ii4vdmlld3MvVGFza0FyZWFWaWV3LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy8gaW1wb3J0IENvbXBvbmVudFNsaWRlciBmcm9tIFwiQGthcG9zdC9yZWFjdC1jb21wb25lbnQtc2xpZGVyXCI7XG4vLyBpbXBvcnQgU2Nyb2xsTWVudSBmcm9tICdyZWFjdC1ob3Jpem9udGFsLXNjcm9sbGluZy1tZW51JztcblxuLy8gY29uc3QgcmVuZGVyTGVmdEFycm93ID0gKCkgPT4gPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FyZXQtbGVmdFwiIC8+O1xuLy8gY29uc3QgcmVuZGVyUmlnaHRBcnJvdyA9ICgpID0+IDxpIGNsYXNzTmFtZT1cImZhIGZhLWNhcmV0LXJpZ2h0XCIgLz47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2tBcmVhVmlldygpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YXNrQXJlYSc+XG4gICAgICAgICAgICA8Q29tcG9uZW50U2xpZGVyXG4gICAgICAgICAgcmVuZGVyTGVmdEFycm93PXtyZW5kZXJMZWZ0QXJyb3d9XG4gICAgICAgICAgcmVuZGVyUmlnaHRBcnJvdz17cmVuZGVyUmlnaHRBcnJvd31cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgY2FyZC0tbWIyMCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZC1pbm5lcic+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdoZWFkaW5nIGhlYWRpbmctLWg0Jz5UYXNrcyBBcmVhPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkX19jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0ndGFza0FyZWFfX2xpc3RpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnTG9iYnknLCAnUmVjZXB0aW9uJywgJ1dhc2hyb29tJywnTG9iYnknLCAnUmVjZXB0aW9uJywgJ1dhc2hyb29tJywgJ0NhZmUgQXJlYSddLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2xpc3RpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3Rhc2tBcmVhX19saXN0aW5nX19pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke2l0ZW19LmpwZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PSc3MCUnIHdpZHRoPSc4MCUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2ltZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rhc2tBcmVhX19saXN0aW5nX19sYWJlbCc+e2l0ZW19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbXBvbmVudFNsaWRlcj4gIFxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./views/TaskAreaView.jsx\n");

/***/ })

})