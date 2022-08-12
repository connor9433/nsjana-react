"use strict";
exports.id = 1729;
exports.ids = [1729];
exports.modules = {

/***/ 1729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Corporate_Process)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/corporate/process.json
const process_namespaceObject = JSON.parse('[{"numb":"01","title":"Project research","description":"No coding skills required to customize and create unique looks.","srdescription":"No coding skills required to customize and create unique looks. Install any demo with a single click"},{"numb":"02","title":"Sketches and design","description":"No coding skills required to customize and create unique looks.","srdescription":"No coding skills required to customize and create unique looks. Install any demo with a single click"},{"numb":"03","title":"Seleted concept","description":"No coding skills required to customize and create unique looks.","srdescription":"No coding skills required to customize and create unique looks. Install any demo with a single click"}]');
;// CONCATENATED MODULE: ./src/components/Corporate/Process/index.jsx


const Process = ({ services  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: `features-process section-padding position-re ${services ? "pb-50 bg-gray-light" : "pt-0"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: process_namespaceObject.map((step, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "fz-40 mr-20 lf-culm",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "numb",
                                            children: step.numb
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "mb-10 fz-20 fw-600",
                                                children: step.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: services ? step.srdescription : step.description
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, idx)
                    )
                })
            }),
            services ? null : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "circle-pattern bottom right"
            })
        ]
    });
};
/* harmony default export */ const Corporate_Process = (Process);


/***/ })

};
;