(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/navbar.js


const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/projects",
                            children: "Projects"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/contact",
                            children: "Contact"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/layout/wrapper.js

const Wrapper = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "main_wrapper",
        children: children
    });
};
/* harmony default export */ const wrapper = (Wrapper);

;// CONCATENATED MODULE: ./components/layout/layout.js




function Layout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(wrapper, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "box_container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "section_container",
                            children: children
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(914)));
module.exports = __webpack_exports__;

})();