"use strict";
exports.id = 4124;
exports.ids = [4124];
exports.modules = {

/***/ 4124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ app_layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Navbars/AppNavbar/index.jsx

/* eslint-disable @next/next/no-img-element */ 
const Navbar = ({ links , navbarRef , theme , logoTheme , container  })=>{
    const goToSection = (e, link)=>{
        if (link == "#0") e.preventDefault();
        const section = document.querySelector(`[data-scroll-index="${e.target.dataset.scrollNav}"]`);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: `navbar navbar-expand-lg ${theme}`,
        ref: navbarRef,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `container${container === "nft-market" ? "-xxl" : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: "navbar-brand",
                    href: "/",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "logo",
                        children: [
                            logoTheme === "dark" && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "img/logo-dark.png",
                                alt: ""
                            }),
                            logoTheme === "light" && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "img/logo-light.png",
                                alt: ""
                            }),
                            !logoTheme && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "img/logo-light.png",
                                alt: ""
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-bars"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "navbar-nav",
                        children: links && links.length && links.map((link, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "nav-link",
                                    href: link.href,
                                    "data-scroll-nav": idx,
                                    onClick: (e)=>goToSection(e, link.href)
                                    ,
                                    children: link.name
                                })
                            }, idx)
                        )
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const AppNavbar = (Navbar);

;// CONCATENATED MODULE: ./src/layouts/app-layout.jsx

/* eslint-disable @next/next/no-css-tags */ 

//= Components

const AppLayout = ({ children , links , type , navTheme  })=>{
    const navbarRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        var navbar = navbarRef.current;
        if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
        else navbar.classList.remove("nav-scroll");
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
            else navbar.classList.remove("nav-scroll");
        });
    }, [
        navbarRef
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/plugins.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/style.css"
                    }),
                    type === "mobile-app" ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/mobile-app/css/mobile-app.css"
                    }) : null,
                    type === "architecture" ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/arch/css/arch-style.css"
                    }) : null,
                    type === "nft-market" ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/nft/css/nft.css"
                    }) : null,
                    type === "freelancer" ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/freelancer/css/freelancer-style.css"
                    }) : null,
                    type === "restaurant" ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/restaurant/css/restaurant-style.css"
                    }) : null
                ]
            }),
            [
                "freelancer",
                "restaurant",
                "architecture"
            ].includes(type) ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(AppNavbar, {
                        navbarRef: navbarRef,
                        logoTheme: navTheme,
                        theme: navTheme ? navTheme : "light",
                        links: links,
                        container: type
                    }),
                    children
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(AppNavbar, {
                            navbarRef: navbarRef,
                            logoTheme: navTheme,
                            theme: navTheme ? navTheme : "light",
                            links: links,
                            container: type
                        }),
                        children
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const app_layout = (AppLayout);


/***/ })

};
;