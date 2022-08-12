"use strict";
exports.id = 3341;
exports.ids = [3341];
exports.modules = {

/***/ 3341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Corporate_Blog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/corporate/blog.json
const blog_namespaceObject = JSON.parse('[{"bg":"img/blog/b/v1.jpg","tag":"Tranding","date":"14 sep 2021","title":"ways to quickly increase traffic to your website","image":"img/blog/a1.jpg","author":"Chris Pratt"},{"bg":"img/blog/b/v2.jpg","tag":"Tranding","date":"14 sep 2021","title":"ways to quickly increase traffic to your website","image":"img/blog/a1.jpg","author":"Chris Pratt"}]');
;// CONCATENATED MODULE: ./src/components/Corporate/Blog/index.jsx

/* eslint-disable @next/next/no-img-element */ 

const Blog = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "blog section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "round-head text-center mb-80",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    className: "ls2 text-u fz-12 mb-15",
                                    children: [
                                        "Our Blogs ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "fw-700",
                                    children: "Latest News"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: blog_namespaceObject.map((blog, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "item side-img stwo box-shadow radius-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-5 rest",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img bg-img",
                                                style: {
                                                    backgroundImage: `url('${blog.bg}')`
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/blog-grid-clean",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "gat",
                                                            children: blog.tag
                                                        })
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-7 valign",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "full-width",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "date text-u fz-13 fw-500 gr-sunrise-text mb-10",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: blog.date
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: "fw-700 line-height-30 mb-10",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/blog-side-img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: blog.title
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "info flex",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "author flex",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "flex-img",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "author-img circle-50 mr-15",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                    src: blog.image,
                                                                                    alt: ""
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "flex-cont valign",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "fz-12 opacity-8",
                                                                                        children: "Written By :"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                                        className: "fz-16",
                                                                                        children: blog.author
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }, idx)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const Corporate_Blog = (Blog);


/***/ })

};
;