exports.id = 877;
exports.ids = [877];
exports.modules = {

/***/ 249:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Graduates_container__1d_MP",
	"subcontainer": "Graduates_subcontainer__ZaYuh",
	"title": "Graduates_title__F0X8I",
	"graduates": "Graduates_graduates__tL_u2",
	"card": "Graduates_card__53jrU",
	"cardTitle": "Graduates_cardTitle__aEgkw",
	"cardDescription": "Graduates_cardDescription__nqVV_",
	"new": "Graduates_new__89F_Z",
	"callToAction": "Graduates_callToAction__tHeUD",
	"callToActionTitle": "Graduates_callToActionTitle__EndjQ",
	"actionButton": "Graduates_actionButton__yq89y",
	"footer": "Graduates_footer__tki0h",
	"footerButtons": "Graduates_footerButtons__egmFP",
	"footerButton": "Graduates_footerButton__MSaSK",
	"logo": "Graduates_logo__fFk7B"
};


/***/ }),

/***/ 877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Graduates)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(249);
/* harmony import */ var _styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);



// import { gradList } from "./gradList";
const gradList = [
    {
        name: "Rustam-Deniz Emirali",
        imagePath: "/Grads/rus.jpg",
        now: "iOS Developer at Arbuz.kz & Pinemelon.com"
    },
    {
        name: "Yerlan Termir",
        imagePath: "/Grads/yerla.jpg",
        now: "Full-stack Developer at Toptal"
    },
    {
        name: "Meir Mukushev",
        imagePath: "/Grads/meir.jpeg",
        now: "Backend Developer at Arbuz.kz & Pinemelon.com"
    },
    {
        name: "Dinmukhamed Siyezkan",
        imagePath: "/Grads/dima.jpeg",
        now: "iOS Developer at Strong Team"
    },
    {
        name: "Kerbez Orazgaliyeva",
        imagePath: "/Grads/kerbez.jpeg",
        now: "Software Engineer at Google"
    },
    {
        name: "Miron Sokitbayev",
        imagePath: "/Grads/miron.jpeg",
        now: "Android Developer at Jusan Bank"
    },
    {
        name: "Nursat Yerbol",
        imagePath: "/Grads/nursat.jpeg",
        now: "Android Developer at Airba"
    },
    {
        name: "Yessey Melis",
        imagePath: "/Grads/yessey.jpeg",
        now: "Backend developer at Astana Motors"
    },
    {
        name: "Amantay Orynbayev",
        imagePath: "/Grads/amantay.jpeg",
        now: "Backend Developer"
    },
    {
        name: "Nurassyl Omar",
        imagePath: "/Grads/nura.jpg",
        now: "Backend Team Lead at TDS Media"
    }, 
];
function Graduates() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2___default().subcontainer),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),
                    children: "Graduates_2019"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2___default().graduates),
                    children: gradList.map((el, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    src: el.imagePath,
                                    width: 277,
                                    height: 339
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2___default().cardTitle),
                                    children: el.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2___default().cardDescription),
                                    children: el.now
                                })
                            ]
                        }, index)
                    )
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: (_styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2___default()["new"])
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2___default().callToAction),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2___default().callToActionTitle),
                            children: "Hello, Turing! Where full-heart mentorship happens"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://docs.google.com/forms/d/e/1FAIpQLSdAK72aTAqXNq5PHiHo1rteIeL3fg8MG1VNkf0jFNqPpSNg2A/viewform",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2___default().actionButton),
                                children: "BECOME A JEDY!"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2___default().footer),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2___default().footerButtons)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: (_styles_Graduates_module_css__WEBPACK_IMPORTED_MODULE_2___default().logo),
                            src: "/turingLogo.png",
                            width: 85,
                            height: 85
                        })
                    ]
                })
            ]
        })
    });
};


/***/ })

};
;