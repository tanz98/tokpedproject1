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
        var cutemptylist = list.filter(function (value) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbmxpc3QuanMiXSwibmFtZXMiOlsicG9rZW1vbkNvbmZpZyIsInJlcXVpcmUiLCJQb2tlbW9uTGlzdFBhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwicG9rZW1vbmxpc3QiLCJzZXRQb2tlbW9uTGlzdCIsImVtcHR5cG9rZW1vbiIsInNldElzRW1wdHlQb2tlbW9uIiwibGltaXQiLCJzZXRMaW1pdCIsIm9mZnNldCIsInNldE9mZnNldCIsImhhc01vcmVJdGVtcyIsInNldEhhc01vcmVJdGVtcyIsImxpc3Rwb2tlbW9uIiwiY3NzIiwidGV4dGNhcmQiLCJ1c2VFZmZlY3QiLCJteXBva2Vtb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VteXBva2Vtb24iLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiZ2V0UmVmcmVzaCIsImF4aW9zIiwidXJsIiwiQkFTRV9VUkwiLCJtZXRob2QiLCJkYXRhIiwidGltZW91dCIsIlRJTUVPVVQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb2RlIiwicmVzdWx0cyIsIm5leHQiLCJsZW5ndGgiLCJnZXRIYW5kbGVMb2FkTW9yZSIsImxpc3RzIiwiY29uY2F0IiwiY3V0ZW1wdHlsaXN0IiwibGlzdCIsImZpbHRlciIsInZhbHVlIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImkiLCJuYW1lIiwiaW1hZ2UiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLG1CQUFPLENBQUMsOEJBQUQsQ0FBN0I7O0FBRUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxFQUFELENBRGhCO0FBQUEsTUFDdEJD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QXdCcEIsSUFBSSxDQUFDb0IsSUFBaEY7QUFBc0Ysd0JBQVEsTUFBOUY7QUFBQSx1Q0FDSTtBQUFHLDJCQUFTLEVBQUMsTUFBYjtBQUFBLDBDQUNJO0FBQUssNkJBQVMsRUFBQyxtQkFBZjtBQUFtQyx1QkFBRyxFQUFFcEIsSUFBSSxDQUFDcUI7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJO0FBQU0sNkJBQVMsRUFBRXBDLFFBQWpCO0FBQUEsOEJBQTRCZSxJQUFJLENBQUNvQjtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZKLGVBR0k7QUFBTSw2QkFBUyxFQUFFbkMsUUFBakI7QUFBQSw4QkFBNEJlLElBQUksQ0FBQ3NCO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUQ1QixlQUFpQ0gsQ0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQVdBLFdBWkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQW1DQSxDQXRHRDs7R0FBTWpELGU7O0tBQUFBLGU7QUF3R1NBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bva2Vtb25saXN0LjMwMmE1MTQ5ZDA0YjE4ZmUyNGYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL2hlYWQnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXHJcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50J1xyXG5cclxuY29uc3QgcG9rZW1vbkNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpXHJcblxyXG5jb25zdCBQb2tlbW9uTGlzdFBhZ2UgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBbcG9rZW1vbmxpc3QsIHNldFBva2Vtb25MaXN0XT0gdXNlU3RhdGUoW10pXHJcblx0Y29uc3QgW2VtcHR5cG9rZW1vbiwgc2V0SXNFbXB0eVBva2Vtb25dPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbbGltaXQsIHNldExpbWl0XT0gdXNlU3RhdGUoMjApXHJcblx0Y29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XT0gdXNlU3RhdGUoMClcclxuXHRjb25zdCBbaGFzTW9yZUl0ZW1zLCBzZXRIYXNNb3JlSXRlbXNdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cdC8vU3R5bGVzXHJcbiAgICBjb25zdCBsaXN0cG9rZW1vbiA9IGNzc2BcclxuICBcdFx0cGFkZGluZzogMTZweCAyNXB4O1xyXG5cdGBcclxuXHRjb25zdCB0ZXh0Y2FyZCA9IGNzc2BcclxuXHRcdG1hcmdpbjogM3B4IDZweCA2cHggNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGNvbG9yOiBibGFjaztcclxuXHRgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxldCBteXBva2Vtb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2F2ZXBva2Vtb24nKVxyXG5cdFx0bGV0IHBhcnNlbXlwb2tlbW9uID0gSlNPTi5wYXJzZShteXBva2Vtb24pXHJcblx0XHRjb25zb2xlLmxvZyhwYXJzZW15cG9rZW1vbilcclxuXHRcdGdldFJlZnJlc2goKVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHRmdW5jdGlvbiBnZXRSZWZyZXNoKCl7XHJcblx0XHRheGlvcyh7XHJcblx0XHRcdHVybDogcG9rZW1vbkNvbmZpZy5CQVNFX1VSTCArICcvYXBpL2dldGxpc3Rwb2tlbW9uJyxcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRsaW1pdDogbGltaXQsXHJcblx0XHRcdFx0b2Zmc2V0OiBvZmZzZXRcclxuXHRcdFx0fSxcclxuXHRcdFx0dGltZW91dDogcG9rZW1vbkNvbmZpZy5USU1FT1VUXHJcblx0XHR9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cdFx0XHRpZihyZXNwb25zZS5kYXRhLmNvZGUgPT0gJzIwMCcpIHtcclxuXHRcdFx0XHRzZXRQb2tlbW9uTGlzdChyZXNwb25zZS5kYXRhLmRhdGEucmVzdWx0cylcclxuXHRcdFx0XHRpZihyZXNwb25zZS5kYXRhLmRhdGEubmV4dCAhPSBudWxsKXtcclxuXHRcdFx0XHRcdHNldE9mZnNldCgyMClcclxuXHRcdFx0XHRcdHNldEhhc01vcmVJdGVtcyhyZXNwb25zZS5kYXRhLmRhdGEucmVzdWx0cy5sZW5ndGggPiA0ID8gdHJ1ZSA6IGZhbHNlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRJc0VtcHR5UG9rZW1vbih0cnVlKVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0SGFuZGxlTG9hZE1vcmUoKXtcclxuXHRcdGF4aW9zKHtcclxuXHRcdFx0dXJsOiBwb2tlbW9uQ29uZmlnLkJBU0VfVVJMICsgJy9hcGkvZ2V0bGlzdHBva2Vtb24nLFxyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGxpbWl0OiBsaW1pdCxcclxuXHRcdFx0XHRvZmZzZXQ6IG9mZnNldFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aW1lb3V0OiBwb2tlbW9uQ29uZmlnLlRJTUVPVVRcclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdGlmKHJlc3BvbnNlLmRhdGEuY29kZSA9PSAnMjAwJykge1xyXG5cdFx0XHRcdGxldCBsaXN0cyA9IHBva2Vtb25saXN0LmNvbmNhdChyZXNwb25zZS5kYXRhLmRhdGEucmVzdWx0cylcclxuXHRcdFx0XHRsZXQgY3V0ZW1wdHlsaXN0ID0gbGlzdC5maWx0ZXIodmFsdWUgPT4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCAhPT0gMClcclxuXHRcdFx0XHRzZXRQb2tlbW9uTGlzdChjdXRlbXB0eWxpc3QpXHJcblx0XHRcdFx0c2V0T2Zmc2V0KG9mZnNldCArIDIwKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldElzRW1wdHlQb2tlbW9uKHRydWUpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQ8SGVhZCAvPlxyXG5cdFx0XHQ8SGVhZGVyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtsaXN0cG9rZW1vbn0+XHJcblx0XHRcdFx0PEluZmluaXRlU2Nyb2xsXHJcblx0XHRcdFx0XHRkYXRhTGVuZ3RoPXtwb2tlbW9ubGlzdH1cclxuXHRcdFx0XHRcdG5leHQ9e2dldEhhbmRsZUxvYWRNb3JlfVxyXG5cdFx0XHRcdFx0aGFzTW9yZT17aGFzTW9yZUl0ZW1zfVxyXG5cdFx0XHRcdFx0bG9hZGVyPXs8aDY+TG9hZGluZy4uLjwvaDY+fVxyXG5cdFx0XHRcdFx0ZW5kTWVzc2FnZT17PGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1saWdodCB0ZXh0LWNlbnRlciBzbWFsbFwiPlNlbXVhIGRhdGEgdGVsYWggZGl0YW1waWxrYW48L2Rpdj59XHJcblx0XHRcdFx0XHRyZWZyZXNoRnVuY3Rpb249e2dldFJlZnJlc2h9XHJcblx0XHRcdFx0XHRwdWxsRG93blRvUmVmcmVzaFxyXG5cdFx0XHRcdFx0cHVsbERvd25Ub1JlZnJlc2hDb250ZW50PXs8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWxpZ2h0IHRleHQtY2VudGVyIHNtYWxsXCI+JiM4NTk1OyBQdWxsIGRvd24gdG8gcmVmcmVzaDwvZGl2Pn1cclxuXHRcdFx0XHRcdHJlbGVhc2VUb1JlZnJlc2hDb250ZW50PXs8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWxpZ2h0IHRleHQtY2VudGVyIHNtYWxsXCI+JiM4NTkzOyBSZWxlYXNlIHRvIHJlZnJlc2g8L2Rpdj59XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0e3Bva2Vtb25saXN0Lm1hcCgoZGF0YSwgaSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02IG1iLTNcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9wb2tlbW9uZGV0YWlsP25hbWU9XCIrIGRhdGEubmFtZX0gYXM9e1wiL3Bva2Vtb25kZXRhaWw/bmFtZT1cIisgZGF0YS5uYW1lfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImJvcmRlci1ib3R0b20gcC0yXCIgc3JjPXtkYXRhLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGV4dGNhcmR9PntkYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGV4dGNhcmR9PntkYXRhLnR5cGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9JbmZpbml0ZVNjcm9sbD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9rZW1vbkxpc3RQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==