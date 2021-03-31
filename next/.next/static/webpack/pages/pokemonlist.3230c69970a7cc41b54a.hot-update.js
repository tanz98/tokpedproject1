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
        var lists = pokemonlist.concat(response.data.data.results);
        setPokemonList(lists);

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
        setPokemonList(lists);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbmxpc3QuanMiXSwibmFtZXMiOlsicG9rZW1vbkNvbmZpZyIsInJlcXVpcmUiLCJQb2tlbW9uTGlzdFBhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwicG9rZW1vbmxpc3QiLCJzZXRQb2tlbW9uTGlzdCIsImVtcHR5cG9rZW1vbiIsInNldElzRW1wdHlQb2tlbW9uIiwibGltaXQiLCJzZXRMaW1pdCIsIm9mZnNldCIsInNldE9mZnNldCIsImhhc01vcmVJdGVtcyIsInNldEhhc01vcmVJdGVtcyIsImxpc3Rwb2tlbW9uIiwiY3NzIiwidGV4dGNhcmQiLCJ1c2VFZmZlY3QiLCJteXBva2Vtb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VteXBva2Vtb24iLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiZ2V0UmVmcmVzaCIsImF4aW9zIiwidXJsIiwiQkFTRV9VUkwiLCJtZXRob2QiLCJkYXRhIiwidGltZW91dCIsIlRJTUVPVVQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb2RlIiwibGlzdHMiLCJjb25jYXQiLCJyZXN1bHRzIiwibmV4dCIsImxlbmd0aCIsImdldEhhbmRsZUxvYWRNb3JlIiwibWFwIiwiaSIsIm5hbWUiLCJpbWFnZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUE3Qjs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEVBQUQsQ0FEaEI7QUFBQSxNQUN0QkMsV0FEc0I7QUFBQSxNQUNUQyxjQURTOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEtBQUQsQ0FG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N0M7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJO0FBQU0sNkJBQVMsRUFBRTlCLFFBQWpCO0FBQUEsOEJBQTRCZSxJQUFJLENBQUNjO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkosZUFHSTtBQUFNLDZCQUFTLEVBQUU3QixRQUFqQjtBQUFBLDhCQUE0QmUsSUFBSSxDQUFDZ0I7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRDVCLGVBQWlDSCxDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBV0EsV0FaQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBbUNBLENBdEdEOztHQUFNM0MsZTs7S0FBQUEsZTtBQXdHU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbmxpc3QuMzIzMGM2OTk3MGE3Y2M0MWI1NGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnXHJcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gJ3JlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnQnXHJcblxyXG5jb25zdCBwb2tlbW9uQ29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJylcclxuXHJcbmNvbnN0IFBva2Vtb25MaXN0UGFnZSA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IFtwb2tlbW9ubGlzdCwgc2V0UG9rZW1vbkxpc3RdPSB1c2VTdGF0ZShbXSlcclxuXHRjb25zdCBbZW1wdHlwb2tlbW9uLCBzZXRJc0VtcHR5UG9rZW1vbl09IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtsaW1pdCwgc2V0TGltaXRdPSB1c2VTdGF0ZSgyMClcclxuXHRjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdPSB1c2VTdGF0ZSgwKVxyXG5cdGNvbnN0IFtoYXNNb3JlSXRlbXMsIHNldEhhc01vcmVJdGVtc10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblx0Ly9TdHlsZXNcclxuICAgIGNvbnN0IGxpc3Rwb2tlbW9uID0gY3NzYFxyXG4gIFx0XHRwYWRkaW5nOiAxNnB4IDI1cHg7XHJcblx0YFxyXG5cdGNvbnN0IHRleHRjYXJkID0gY3NzYFxyXG5cdFx0bWFyZ2luOiAzcHggNnB4IDZweCA2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Y29sb3I6IGJsYWNrO1xyXG5cdGBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGV0IG15cG9rZW1vbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzYXZlcG9rZW1vbicpXHJcblx0XHRsZXQgcGFyc2VteXBva2Vtb24gPSBKU09OLnBhcnNlKG15cG9rZW1vbilcclxuXHRcdGNvbnNvbGUubG9nKHBhcnNlbXlwb2tlbW9uKVxyXG5cdFx0Z2V0UmVmcmVzaCgpXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cdGZ1bmN0aW9uIGdldFJlZnJlc2goKXtcclxuXHRcdGF4aW9zKHtcclxuXHRcdFx0dXJsOiBwb2tlbW9uQ29uZmlnLkJBU0VfVVJMICsgJy9hcGkvZ2V0bGlzdHBva2Vtb24nLFxyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGxpbWl0OiBsaW1pdCxcclxuXHRcdFx0XHRvZmZzZXQ6IG9mZnNldFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aW1lb3V0OiBwb2tlbW9uQ29uZmlnLlRJTUVPVVRcclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdGlmKHJlc3BvbnNlLmRhdGEuY29kZSA9PSAnMjAwJykge1xyXG5cdFx0XHRcdGxldCBsaXN0cyA9IHBva2Vtb25saXN0LmNvbmNhdChyZXNwb25zZS5kYXRhLmRhdGEucmVzdWx0cylcclxuXHRcdFx0XHRzZXRQb2tlbW9uTGlzdChsaXN0cylcclxuXHRcdFx0XHRpZihyZXNwb25zZS5kYXRhLmRhdGEubmV4dCAhPSBudWxsKXtcclxuXHRcdFx0XHRcdHNldE9mZnNldCgyMClcclxuXHRcdFx0XHRcdHNldEhhc01vcmVJdGVtcyhyZXNwb25zZS5kYXRhLmRhdGEucmVzdWx0cy5sZW5ndGggPiA0ID8gdHJ1ZSA6IGZhbHNlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRJc0VtcHR5UG9rZW1vbih0cnVlKVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0SGFuZGxlTG9hZE1vcmUoKXtcclxuXHRcdGF4aW9zKHtcclxuXHRcdFx0dXJsOiBwb2tlbW9uQ29uZmlnLkJBU0VfVVJMICsgJy9hcGkvZ2V0bGlzdHBva2Vtb24nLFxyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGxpbWl0OiBsaW1pdCxcclxuXHRcdFx0XHRvZmZzZXQ6IG9mZnNldFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aW1lb3V0OiBwb2tlbW9uQ29uZmlnLlRJTUVPVVRcclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdGlmKHJlc3BvbnNlLmRhdGEuY29kZSA9PSAnMjAwJykge1xyXG5cdFx0XHRcdGxldCBsaXN0cyA9IHBva2Vtb25saXN0LmNvbmNhdChyZXNwb25zZS5kYXRhLmRhdGEucmVzdWx0cylcclxuXHRcdFx0XHRzZXRQb2tlbW9uTGlzdChsaXN0cylcclxuXHRcdFx0XHRzZXRPZmZzZXQob2Zmc2V0ICsgMjApXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0SXNFbXB0eVBva2Vtb24odHJ1ZSlcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxIZWFkIC8+XHJcblx0XHRcdDxIZWFkZXIgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2xpc3Rwb2tlbW9ufT5cclxuXHRcdFx0XHQ8SW5maW5pdGVTY3JvbGxcclxuXHRcdFx0XHRcdGRhdGFMZW5ndGg9e3Bva2Vtb25saXN0fVxyXG5cdFx0XHRcdFx0bmV4dD17Z2V0SGFuZGxlTG9hZE1vcmV9XHJcblx0XHRcdFx0XHRoYXNNb3JlPXtoYXNNb3JlSXRlbXN9XHJcblx0XHRcdFx0XHRsb2FkZXI9ezxoNj5Mb2FkaW5nLi4uPC9oNj59XHJcblx0XHRcdFx0XHRlbmRNZXNzYWdlPXs8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWxpZ2h0IHRleHQtY2VudGVyIHNtYWxsXCI+U2VtdWEgZGF0YSB0ZWxhaCBkaXRhbXBpbGthbjwvZGl2Pn1cclxuXHRcdFx0XHRcdHJlZnJlc2hGdW5jdGlvbj17Z2V0UmVmcmVzaH1cclxuXHRcdFx0XHRcdHB1bGxEb3duVG9SZWZyZXNoXHJcblx0XHRcdFx0XHRwdWxsRG93blRvUmVmcmVzaENvbnRlbnQ9ezxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtbGlnaHQgdGV4dC1jZW50ZXIgc21hbGxcIj4mIzg1OTU7IFB1bGwgZG93biB0byByZWZyZXNoPC9kaXY+fVxyXG5cdFx0XHRcdFx0cmVsZWFzZVRvUmVmcmVzaENvbnRlbnQ9ezxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtbGlnaHQgdGV4dC1jZW50ZXIgc21hbGxcIj4mIzg1OTM7IFJlbGVhc2UgdG8gcmVmcmVzaDwvZGl2Pn1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHR7cG9rZW1vbmxpc3QubWFwKChkYXRhLCBpKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgbWItM1wiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3Bva2Vtb25kZXRhaWw/bmFtZT1cIisgZGF0YS5uYW1lfSBhcz17XCIvcG9rZW1vbmRldGFpbD9uYW1lPVwiKyBkYXRhLm5hbWV9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYm9yZGVyLWJvdHRvbSBwLTJcIiBzcmM9e2RhdGEuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0ZXh0Y2FyZH0+e2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0ZXh0Y2FyZH0+e2RhdGEudHlwZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0luZmluaXRlU2Nyb2xsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb2tlbW9uTGlzdFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9