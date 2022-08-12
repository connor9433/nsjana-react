"use strict";
exports.id = 6708;
exports.ids = [6708];
exports.modules = {

/***/ 6708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Hero2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/corporate/hero2.json
const hero2_namespaceObject = JSON.parse('{"jp":"A simple, proven way to boost your team performance.","fL":"We have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand and dominate your market.","KT":[{"value":"1290","title":"Projects Complete","details":"No coding skills required to customize and create unique looks."},{"value":"100%","title":"Satisfied Clients","details":"No coding skills required to customize and create unique looks."}]}');
;// CONCATENATED MODULE: ./src/components/Corporate/Hero2/index.jsx


const Hero = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "hero section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "main-text",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "sub-title gr-sunrise-text",
                                    children: "What We Do ?"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "fw-700 mb-15",
                                    children: hero2_namespaceObject.jp
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: hero2_namespaceObject.fL
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5 offset-lg-1 valign",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hero-stu",
                            children: hero2_namespaceObject.KT.map((number, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `flex ${index !== hero2_namespaceObject.KT.length - 1 ? "mb-40" : ""}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "numb mr-30 valign",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "fz-40 fw-200",
                                                children: number.value
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "cont",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "mb-5",
                                                    children: number.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: number.details
                                                })
                                            ]
                                        })
                                    ]
                                }, index)
                            )
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Hero2 = (Hero);


/***/ })

};
;