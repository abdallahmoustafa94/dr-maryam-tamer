"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact/contact-light",{

/***/ "./src/pages/contact/contact-light.jsx":
/*!*********************************************!*\
  !*** ./src/pages/contact/contact-light.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Navbar/navbar */ \"./src/components/Navbar/navbar.jsx\");\n/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Footer/footer */ \"./src/components/Footer/footer.jsx\");\n/* harmony import */ var _layouts_Light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/Light */ \"./src/layouts/Light.jsx\");\n/* harmony import */ var _components_Contact_header_contact_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Contact-header/contact-header */ \"./src/components/Contact-header/contact-header.jsx\");\n/* harmony import */ var _components_Contact_form_contact_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Contact-form/contact-form */ \"./src/components/Contact-form/contact-form.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/abdallahmoustafa/Desktop/drMaryamTamer/src/pages/contact/contact-light.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable @next/next/no-sync-scripts */\n\n\n\n\n\n\n\n\nvar Contact = function Contact() {\n  _s();\n\n  var navbarRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var logoRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    document.querySelector(\"body\").classList.add(\"contact-page\");\n    var navbar = navbarRef.current,\n        logo = logoRef.current;\n\n    if (window.pageYOffset > 300) {\n      navbar.classList.add(\"nav-scroll\");\n    } else {\n      navbar.classList.remove(\"nav-scroll\");\n    }\n\n    window.addEventListener(\"scroll\", function () {\n      if (window.pageYOffset > 300) {\n        navbar.classList.add(\"nav-scroll\");\n      } else {\n        navbar.classList.remove(\"nav-scroll\");\n      }\n    });\n    return function () {\n      document.querySelector(\"body\").classList.remove(\"contact-page\");\n    };\n  }, [navbarRef]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_layouts_Light__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      nr: navbarRef,\n      lr: logoRef,\n      theme: \"themeL\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Contact_header_contact_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      blackStar: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"main-content\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Contact_form_contact_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        hideBGCOLOR: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Contact, \"NJv/rvX5fPwWhnPtkwq0tuwt7xI=\");\n\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\nvar _c;\n\n$RefreshReg$(_c, \"Contact\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29udGFjdC9jb250YWN0LWxpZ2h0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxTQUFTLEdBQUdQLG1EQUFBLENBQWEsSUFBYixDQUFsQjtBQUNBLE1BQU1TLE9BQU8sR0FBR1QsbURBQUEsQ0FBYSxJQUFiLENBQWhCO0FBRUFBLEVBQUFBLHNEQUFBLENBQWdCLFlBQU07QUFDcEJXLElBQUFBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixFQUErQkMsU0FBL0IsQ0FBeUNDLEdBQXpDLENBQTZDLGNBQTdDO0FBQ0EsUUFBSUMsTUFBTSxHQUFHUixTQUFTLENBQUNTLE9BQXZCO0FBQUEsUUFDRUMsSUFBSSxHQUFHUixPQUFPLENBQUNPLE9BRGpCOztBQUVBLFFBQUlFLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixHQUF6QixFQUE4QjtBQUM1QkosTUFBQUEsTUFBTSxDQUFDRixTQUFQLENBQWlCQyxHQUFqQixDQUFxQixZQUFyQjtBQUNELEtBRkQsTUFFTztBQUNMQyxNQUFBQSxNQUFNLENBQUNGLFNBQVAsQ0FBaUJPLE1BQWpCLENBQXdCLFlBQXhCO0FBQ0Q7O0FBQ0RGLElBQUFBLE1BQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUN0QyxVQUFJSCxNQUFNLENBQUNDLFdBQVAsR0FBcUIsR0FBekIsRUFBOEI7QUFDNUJKLFFBQUFBLE1BQU0sQ0FBQ0YsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsWUFBckI7QUFDRCxPQUZELE1BRU87QUFDTEMsUUFBQUEsTUFBTSxDQUFDRixTQUFQLENBQWlCTyxNQUFqQixDQUF3QixZQUF4QjtBQUNEO0FBQ0YsS0FORDtBQU9BLFdBQU8sWUFBTTtBQUNYVCxNQUFBQSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFNBQS9CLENBQXlDTyxNQUF6QyxDQUFnRCxjQUFoRDtBQUNELEtBRkQ7QUFHRCxHQW5CRCxFQW1CRyxDQUFDYixTQUFELENBbkJIO0FBcUJBLHNCQUNFLDhEQUFDLHNEQUFEO0FBQUEsNEJBQ0UsOERBQUMsaUVBQUQ7QUFBUSxRQUFFLEVBQUVBLFNBQVo7QUFBdUIsUUFBRSxFQUFFRSxPQUEzQjtBQUFvQyxXQUFLLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsaUZBQUQ7QUFBZSxlQUFTO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw4QkFDRSw4REFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxpRUFBRDtBQUFRLG1CQUFXO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBbkNEOztHQUFNSDs7S0FBQUE7QUFxQ04sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbnRhY3QvY29udGFjdC1saWdodC5qc3g/OTUyYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLXN5bmMtc2NyaXB0cyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2YmFyL25hdmJhclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IExpZ2h0VGhlbWUgZnJvbSBcIi4uLy4uL2xheW91dHMvTGlnaHRcIjtcclxuaW1wb3J0IENvbnRhY3RIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udGFjdC1oZWFkZXIvY29udGFjdC1oZWFkZXJcIjtcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm1cIjtcclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2YmFyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGxvZ29SZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1wYWdlXCIpO1xyXG4gICAgdmFyIG5hdmJhciA9IG5hdmJhclJlZi5jdXJyZW50LFxyXG4gICAgICBsb2dvID0gbG9nb1JlZi5jdXJyZW50O1xyXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkge1xyXG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdi1zY3JvbGxcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1zY3JvbGxcIik7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcclxuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdi1zY3JvbGxcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjb250YWN0LXBhZ2VcIik7XHJcbiAgICB9O1xyXG4gIH0sIFtuYXZiYXJSZWZdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaWdodFRoZW1lPlxyXG4gICAgICA8TmF2YmFyIG5yPXtuYXZiYXJSZWZ9IGxyPXtsb2dvUmVmfSB0aGVtZT1cInRoZW1lTFwiIC8+XHJcbiAgICAgIDxDb250YWN0SGVhZGVyIGJsYWNrU3RhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICAgIDxDb250YWN0Rm9ybSAvPlxyXG4gICAgICAgIDxGb290ZXIgaGlkZUJHQ09MT1IgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xpZ2h0VGhlbWU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmJhciIsIkZvb3RlciIsIkxpZ2h0VGhlbWUiLCJDb250YWN0SGVhZGVyIiwiQ29udGFjdEZvcm0iLCJDb250YWN0IiwibmF2YmFyUmVmIiwidXNlUmVmIiwibG9nb1JlZiIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsIm5hdmJhciIsImN1cnJlbnQiLCJsb2dvIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/contact/contact-light.jsx\n");

/***/ })

});