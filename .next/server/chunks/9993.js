"use strict";
exports.id = 9993;
exports.ids = [9993];
exports.modules = {

/***/ 8005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Business_Features)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-parallax-tilt"
var external_react_parallax_tilt_ = __webpack_require__(3124);
var external_react_parallax_tilt_default = /*#__PURE__*/__webpack_require__.n(external_react_parallax_tilt_);
;// CONCATENATED MODULE: ./src/data/business/features.json
const features_namespaceObject = JSON.parse('{"gQ":25,"fL":"One may speculate that over the course of time certain letters were added or deleted at various positions within the text.","y2":"One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions","BI":[{"bg":"img/works/crv/c1.jpg","numb":"01 .","title":"Ui / UX Design.","type":"Web Design"},{"bg":"img/works/crv/c2.jpg","numb":"02 .","title":"Web Developments.","type":"Developments"},{"bg":"img/works/crv/c3.jpg","numb":"03 .","title":"Branding Design.","type":"Branding"},{"bg":"img/works/crv/c4.jpg","numb":"04 .","title":"24 / 7 Support.","type":"Premium Support"}]}');
;// CONCATENATED MODULE: ./src/components/Business/Features/index.jsx



const Features = ({ services  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: `feat-exp section-padding ${services ? "pb-50" : "pb-0"} bg-dark-blue`,
        "data-overlay-dark": "0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `col-lg-4 ${services ? "" : "col-md-6"} valign`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "exp",
                                children: services ? /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "fw-600",
                                    children: "Create your own unique website"
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: "fw-700",
                                    children: [
                                        "Create your own ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "fw-300",
                                            children: "unique website"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `col-lg-4 ${services ? "" : "col-md-6"} valign`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `exp ${services ? "" : "m-auto"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: `lg-text gr-green-text ${services ? "fw-600" : "fw-700 line-height-1"}`,
                                            children: features_namespaceObject.gQ
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "valign ml-20",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                className: "text-u ls4 fz-14 line-height-28",
                                                children: [
                                                    "years ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    " in the field"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 valign",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text",
                                children: services ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: features_namespaceObject.y2
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: features_namespaceObject.fL
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container-fluid mt-100",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: features_namespaceObject.BI.map((feature, idx)=>services ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 col-md-6 hover3d",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "feat-item-img hover3d-child bg-img d-flex align-items-end",
                                style: {
                                    backgroundImage: `url('${feature.bg}')`
                                },
                                "data-overlay-dark": "4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "num",
                                        children: feature.numb
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "fz-22 fw-500",
                                                children: feature.type
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "fz-14 opacity-8 mb-5",
                                                children: feature.title
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, idx) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_parallax_tilt_default()), {
                            className: "col-lg-3 col-md-6 hover3d",
                            tiltMaxAngleY: 10,
                            tiltMaxAngleX: 10,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "feat-item-img hover3d-child bg-img d-flex align-items-end",
                                style: {
                                    backgroundImage: `url('${feature.bg}')`
                                },
                                "data-overlay-dark": "4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "num",
                                        children: feature.numb
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "fz-14 opacity-8 mb-5",
                                                children: feature.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "fz-20",
                                                children: feature.type
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, idx)
                    )
                })
            })
        ]
    });
};
/* harmony default export */ const Business_Features = (Features);


/***/ }),

/***/ 914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Business_Process)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/business/process.json
const process_namespaceObject = JSON.parse('[{"numb":"01","title":"Product Research","details":"It is a vital part of developing new products research can help you identify key issues."},{"numb":"02","title":"Design & Development","details":"It is a vital part of developing new products research can help you identify key issues."},{"numb":"03","title":"Testing & Support","details":"It is a vital part of developing new products research can help you identify key issues."}]');
;// CONCATENATED MODULE: ./src/components/Business/Process/index.jsx

/* eslint-disable @next/next/no-img-element */ 
const Process = ({ services  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "process-img section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "round-head mb-80",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "ls2 text-u fz-13 fw-600 mb-20 gr-green-text rest",
                                        children: "Our process"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        className: services ? "fw-600" : "fw-700",
                                        children: [
                                            "Explore the ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " creative process"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "steps-vr",
                                children: process_namespaceObject.map((step, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `step flex ${idx !== process_namespaceObject.length - 1 ? "mb-40" : ""}`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "numb fw-600",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "gr-green-text",
                                                            children: step.numb
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "cover gr-green-bg"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "cont ml-40",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: `mb-10 ${services ? "fz-16 fw-600" : ""}`,
                                                        children: step.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "fz-13",
                                                        children: step.details
                                                    })
                                                ]
                                            })
                                        ]
                                    }, idx)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 offset-lg-1 valign",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img out-box mt-50",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "img/laptop1.png",
                                alt: ""
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Business_Process = (Process);


/***/ })

};
;