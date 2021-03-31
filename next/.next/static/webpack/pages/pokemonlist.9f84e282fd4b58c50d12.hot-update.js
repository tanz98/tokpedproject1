webpackHotUpdate_N_E("pages/pokemonlist",{

/***/ "./pages/pokemonlist.js":
/*!******************************!*\
  !*** ./pages/pokemonlist.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_tokpedproject1_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/css */ "../node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-infinite-scroll-component */ "../node_modules/react-infinite-scroll-component/dist/index.es.js");



var _jsxFileName = "C:\\tokpedproject1\\next\\pages\\pokemonlist.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(C_tokpedproject1_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\t\tmargin: 3px 6px 6px 6px;\n        font-size: 14px;\n\t\tcolor: black;\n\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_tokpedproject1_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  \t\tpadding: 16px 25px;\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var pokemonConfig = __webpack_require__(/*! ../config */ "./config.js");

var PokemonListPage = function PokemonListPage(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      pokemonlist = _useState[0],
      setPokemonList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      emptypokemon = _useState2[0],
      setIsEmptyPokemon = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(20),
      limit = _useState3[0],
      setLimit = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      offset = _useState4[0],
      setOffset = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      hasMoreItems = _useState5[0],
      setHasMoreItems = _useState5[1]; //Styles


  var listpokemon = Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["css"])(_templateObject());
  var textcard = Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["css"])(_templateObject2());
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var mypokemon = localStorage.getItem('savepokemon');
    var parsemypokemon = JSON.parse(mypokemon);
    console.log(parsemypokemon);
    getRefresh();
  }, []);

  function getRefresh() {
    axios__WEBPACK_IMPORTED_MODULE_3___default()({
      url: pokemonConfig.BASE_URL + '/api/getlistpokemon',
      method: 'POST',
      data: {
        limit: limit,
        offset: offset
      },
      timeout: pokemonConfig.TIMEOUT
    }).then(function (response) {
      if (response.data.code == '200') {
        setPokemonList(response.data.data.results);

        if (response.data.data.next != null) {
          setOffset(20);
          setHasMoreItems(response.data.data.results.length > 4 ? true : false);
        }
      } else {
        setIsEmptyPokemon(true);
      }
    });
  }

  function getHandleLoadMore() {
    axios__WEBPACK_IMPORTED_MODULE_3___default()({
      url: pokemonConfig.BASE_URL + '/api/getlistpokemon',
      method: 'POST',
      data: {
        limit: limit,
        offset: offset
      },
      timeout: pokemonConfig.TIMEOUT
    }).then(function (response) {
      if (response.data.code == '200') {
        var lists = pokemonlist.concat(response.data.data.results);
        var cutemptylist = lists.filter(function (value) {
          return Object.keys(value).length !== 0;
        });
        setPokemonList(cutemptylist);
        setOffset(offset + 20);
      } else {
        setIsEmptyPokemon(true);
      }
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_head__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: listpokemon,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_8__["default"], {
        dataLength: pokemonlist,
        next: getHandleLoadMore,
        hasMore: hasMoreItems,
        loader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 14
        }, _this),
        endMessage: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "alert alert-light text-center small",
          children: "Semua data telah ditampilkan"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 18
        }, _this),
        refreshFunction: getRefresh,
        pullDownToRefresh: true,
        pullDownToRefreshContent: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "alert alert-light text-center small",
          children: "\u2193 Pull down to refresh"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 32
        }, _this),
        releaseToRefreshContent: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "alert alert-light text-center small",
          children: "\u2191 Release to refresh"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 31
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: pokemonlist.map(function (data, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6 mb-3",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: "/pokemondetail?name=" + data.name,
                as: "/pokemondetail?name=" + data.name,
                passHref: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "card",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: "border-bottom p-2",
                    src: data.image
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: textcard,
                    children: data.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: textcard,
                    children: data.type
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 37
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 9
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 3
  }, _this);
};

_s(PokemonListPage, "h8JuKu/8Ie68DIWpoOcvCl0Xr3I=");

_c = PokemonListPage;
/* harmony default export */ __webpack_exports__["default"] = (PokemonListPage);

var _c;

$RefreshReg$(_c, "PokemonListPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "../node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbmxpc3QuanMiXSwibmFtZXMiOlsicG9rZW1vbkNvbmZpZyIsInJlcXVpcmUiLCJQb2tlbW9uTGlzdFBhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwicG9rZW1vbmxpc3QiLCJzZXRQb2tlbW9uTGlzdCIsImVtcHR5cG9rZW1vbiIsInNldElzRW1wdHlQb2tlbW9uIiwibGltaXQiLCJzZXRMaW1pdCIsIm9mZnNldCIsInNldE9mZnNldCIsImhhc01vcmVJdGVtcyIsInNldEhhc01vcmVJdGVtcyIsImxpc3Rwb2tlbW9uIiwiY3NzIiwidGV4dGNhcmQiLCJ1c2VFZmZlY3QiLCJteXBva2Vtb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VteXBva2Vtb24iLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiZ2V0UmVmcmVzaCIsImF4aW9zIiwidXJsIiwiQkFTRV9VUkwiLCJtZXRob2QiLCJkYXRhIiwidGltZW91dCIsIlRJTUVPVVQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb2RlIiwicmVzdWx0cyIsIm5leHQiLCJsZW5ndGgiLCJnZXRIYW5kbGVMb2FkTW9yZSIsImxpc3RzIiwiY29uY2F0IiwiY3V0ZW1wdHlsaXN0IiwiZmlsdGVyIiwidmFsdWUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaSIsIm5hbWUiLCJpbWFnZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUE3Qjs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEVBQUQsQ0FEaEI7QUFBQSxNQUN0QkMsV0FEc0I7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QUFJLENBQUNtQixJQUFoRjtBQUFzRix3QkFBUSxNQUE5RjtBQUFBLHVDQUNJO0FBQUcsMkJBQVMsRUFBQyxNQUFiO0FBQUEsMENBQ0k7QUFBSyw2QkFBUyxFQUFDLG1CQUFmO0FBQW1DLHVCQUFHLEVBQUVuQixJQUFJLENBQUNvQjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUk7QUFBTSw2QkFBUyxFQUFFbkMsUUFBakI7QUFBQSw4QkFBNEJlLElBQUksQ0FBQ21CO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkosZUFHSTtBQUFNLDZCQUFTLEVBQUVsQyxRQUFqQjtBQUFBLDhCQUE0QmUsSUFBSSxDQUFDcUI7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRDVCLGVBQWlDSCxDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBV0EsV0FaQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBbUNBLENBdEdEOztHQUFNaEQsZTs7S0FBQUEsZTtBQXdHU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbmxpc3QuOWY4NGUyODJmZDRiNThjNTBkMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnXHJcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gJ3JlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnQnXHJcblxyXG5jb25zdCBwb2tlbW9uQ29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJylcclxuXHJcbmNvbnN0IFBva2Vtb25MaXN0UGFnZSA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IFtwb2tlbW9ubGlzdCwgc2V0UG9rZW1vbkxpc3RdPSB1c2VTdGF0ZShbXSlcclxuXHRjb25zdCBbZW1wdHlwb2tlbW9uLCBzZXRJc0VtcHR5UG9rZW1vbl09IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtsaW1pdCwgc2V0TGltaXRdPSB1c2VTdGF0ZSgyMClcclxuXHRjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdPSB1c2VTdGF0ZSgwKVxyXG5cdGNvbnN0IFtoYXNNb3JlSXRlbXMsIHNldEhhc01vcmVJdGVtc10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblx0Ly9TdHlsZXNcclxuICAgIGNvbnN0IGxpc3Rwb2tlbW9uID0gY3NzYFxyXG4gIFx0XHRwYWRkaW5nOiAxNnB4IDI1cHg7XHJcblx0YFxyXG5cdGNvbnN0IHRleHRjYXJkID0gY3NzYFxyXG5cdFx0bWFyZ2luOiAzcHggNnB4IDZweCA2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Y29sb3I6IGJsYWNrO1xyXG5cdGBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGV0IG15cG9rZW1vbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzYXZlcG9rZW1vbicpXHJcblx0XHRsZXQgcGFyc2VteXBva2Vtb24gPSBKU09OLnBhcnNlKG15cG9rZW1vbilcclxuXHRcdGNvbnNvbGUubG9nKHBhcnNlbXlwb2tlbW9uKVxyXG5cdFx0Z2V0UmVmcmVzaCgpXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cdGZ1bmN0aW9uIGdldFJlZnJlc2goKXtcclxuXHRcdGF4aW9zKHtcclxuXHRcdFx0dXJsOiBwb2tlbW9uQ29uZmlnLkJBU0VfVVJMICsgJy9hcGkvZ2V0bGlzdHBva2Vtb24nLFxyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGxpbWl0OiBsaW1pdCxcclxuXHRcdFx0XHRvZmZzZXQ6IG9mZnNldFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aW1lb3V0OiBwb2tlbW9uQ29uZmlnLlRJTUVPVVRcclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdGlmKHJlc3BvbnNlLmRhdGEuY29kZSA9PSAnMjAwJykge1xyXG5cdFx0XHRcdHNldFBva2Vtb25MaXN0KHJlc3BvbnNlLmRhdGEuZGF0YS5yZXN1bHRzKVxyXG5cdFx0XHRcdGlmKHJlc3BvbnNlLmRhdGEuZGF0YS5uZXh0ICE9IG51bGwpe1xyXG5cdFx0XHRcdFx0c2V0T2Zmc2V0KDIwKVxyXG5cdFx0XHRcdFx0c2V0SGFzTW9yZUl0ZW1zKHJlc3BvbnNlLmRhdGEuZGF0YS5yZXN1bHRzLmxlbmd0aCA+IDQgPyB0cnVlIDogZmFsc2UpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldElzRW1wdHlQb2tlbW9uKHRydWUpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRIYW5kbGVMb2FkTW9yZSgpe1xyXG5cdFx0YXhpb3Moe1xyXG5cdFx0XHR1cmw6IHBva2Vtb25Db25maWcuQkFTRV9VUkwgKyAnL2FwaS9nZXRsaXN0cG9rZW1vbicsXHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0bGltaXQ6IGxpbWl0LFxyXG5cdFx0XHRcdG9mZnNldDogb2Zmc2V0XHJcblx0XHRcdH0sXHJcblx0XHRcdHRpbWVvdXQ6IHBva2Vtb25Db25maWcuVElNRU9VVFxyXG5cdFx0fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHRcdFx0aWYocmVzcG9uc2UuZGF0YS5jb2RlID09ICcyMDAnKSB7XHJcblx0XHRcdFx0bGV0IGxpc3RzID0gcG9rZW1vbmxpc3QuY29uY2F0KHJlc3BvbnNlLmRhdGEuZGF0YS5yZXN1bHRzKVxyXG5cdFx0XHRcdGxldCBjdXRlbXB0eWxpc3QgPSBsaXN0cy5maWx0ZXIodmFsdWUgPT4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCAhPT0gMClcclxuXHRcdFx0XHRzZXRQb2tlbW9uTGlzdChjdXRlbXB0eWxpc3QpXHJcblx0XHRcdFx0c2V0T2Zmc2V0KG9mZnNldCArIDIwKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldElzRW1wdHlQb2tlbW9uKHRydWUpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQ8SGVhZCAvPlxyXG5cdFx0XHQ8SGVhZGVyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtsaXN0cG9rZW1vbn0+XHJcblx0XHRcdFx0PEluZmluaXRlU2Nyb2xsXHJcblx0XHRcdFx0XHRkYXRhTGVuZ3RoPXtwb2tlbW9ubGlzdH1cclxuXHRcdFx0XHRcdG5leHQ9e2dldEhhbmRsZUxvYWRNb3JlfVxyXG5cdFx0XHRcdFx0aGFzTW9yZT17aGFzTW9yZUl0ZW1zfVxyXG5cdFx0XHRcdFx0bG9hZGVyPXs8aDY+TG9hZGluZy4uLjwvaDY+fVxyXG5cdFx0XHRcdFx0ZW5kTWVzc2FnZT17PGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1saWdodCB0ZXh0LWNlbnRlciBzbWFsbFwiPlNlbXVhIGRhdGEgdGVsYWggZGl0YW1waWxrYW48L2Rpdj59XHJcblx0XHRcdFx0XHRyZWZyZXNoRnVuY3Rpb249e2dldFJlZnJlc2h9XHJcblx0XHRcdFx0XHRwdWxsRG93blRvUmVmcmVzaFxyXG5cdFx0XHRcdFx0cHVsbERvd25Ub1JlZnJlc2hDb250ZW50PXs8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWxpZ2h0IHRleHQtY2VudGVyIHNtYWxsXCI+JiM4NTk1OyBQdWxsIGRvd24gdG8gcmVmcmVzaDwvZGl2Pn1cclxuXHRcdFx0XHRcdHJlbGVhc2VUb1JlZnJlc2hDb250ZW50PXs8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWxpZ2h0IHRleHQtY2VudGVyIHNtYWxsXCI+JiM4NTkzOyBSZWxlYXNlIHRvIHJlZnJlc2g8L2Rpdj59XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0e3Bva2Vtb25saXN0Lm1hcCgoZGF0YSwgaSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02IG1iLTNcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9wb2tlbW9uZGV0YWlsP25hbWU9XCIrIGRhdGEubmFtZX0gYXM9e1wiL3Bva2Vtb25kZXRhaWw/bmFtZT1cIisgZGF0YS5uYW1lfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImJvcmRlci1ib3R0b20gcC0yXCIgc3JjPXtkYXRhLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGV4dGNhcmR9PntkYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGV4dGNhcmR9PntkYXRhLnR5cGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9JbmZpbml0ZVNjcm9sbD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9rZW1vbkxpc3RQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==