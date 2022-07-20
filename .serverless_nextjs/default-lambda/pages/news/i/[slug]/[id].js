"use strict";
(() => {
var exports = {};
exports.id = 294;
exports.ids = [294];
exports.modules = {

/***/ 88043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(23105)

      const appMod = __webpack_require__(12957)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(75543)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const rewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? {
          afterFiles: private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        }
        : private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(89185),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: rewrites,
        i18n: undefined,
        page: "/news/i/[slug]/[id]",
        buildId: "Oz-1IDXR6gmiyz1hAPYtr",
        escapedBuildId: "Oz\-1IDXR6gmiyz1hAPYtr",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"00d273e2553e3f8d75e68002f9a01d21",previewModeSigningKey:"2f435b6d05c2e3417f1e2b1807f119177698bdcce3791ed721ca68d8728801f1",previewModeEncryptionKey:"97ce404b3a590c83a37b4175a2536bd6708eab4baa876cb89e836c2b12263d15"}
      })
      
    

/***/ }),

/***/ 27757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export GRAPH_URL */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91333);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GRAPH_URL = "http://34.242.41.16";
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    ssrMode: true,
    uri: `${GRAPH_URL}/v1/graphql`,
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()
});
// const client2 = new ApolloClient({
//   ssrMode: true,
//   link: new HttpLink({
//     uri: `${GRAPH_URL}/v1/graphql`,
//     fetch,
//   }),
//   cache: new InMemoryCache(),
//   defaultOptions,
// })
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ }),

/***/ 75543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91333);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27757);
/* harmony import */ var _components_Layouts_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86843);
/* harmony import */ var _components_Layouts_Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99772);
/* harmony import */ var _components_NewsThumbnail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73069);

/* eslint-disable no-underscore-dangle */ // import { useRouter } from 'next/router';







const NoSEO = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "news/i/[slug]/[id].tsx -> " + "@/components/NoSEO"
        ]
    },
    ssr: false
});
const NewsItem = ({ newsbg , newsbg_by_pk: { title , image , uid , slug , date , content , href  } , shuffled  })=>{
    const description = content.description ? content.description : title;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layouts_Main__WEBPACK_IMPORTED_MODULE_4__/* .Main */ .o, {
        hideFooter: true,
        meta: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layouts_Meta__WEBPACK_IMPORTED_MODULE_5__/* .Meta */ .h, {
            title: title,
            description: description,
            cat: "\u041D\u043E\u0432\u0438\u043D\u0438",
            imgtype: "image/jpeg",
            image: content.image ? content.image : image,
            url: `https://kloun.lol/news/i/${slug}/${uid}`
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "my-10 flex w-full flex-col",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mx-auto leading-relaxed lg:w-2/3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row",
                            children: [
                                image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    alt: description,
                                    className: "mr-4 h-48 w-48 rounded-lg object-cover",
                                    src: image
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-2xl font-bold",
                                    children: title
                                })
                            ]
                        }),
                        date && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "ml-4 text-sm text-gray-600",
                            children: date
                        }),
                        shuffled && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NoSEO, {
                                        content: [
                                            description
                                        ] || 0,
                                        href: href
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "hidden",
                                    children: shuffled.map((p, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: p
                                        }, i))
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-wrap",
                    children: newsbg.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NewsThumbnail__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            ...item
                        }, item.uid))
                })
            ]
        })
    });
};
const DATA_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql`
  query MyQuery($id: uuid!, $slug: String!) {
    newsbg(limit: 15, where: { slug: { _regex: $slug } }) {
      title
      image
      slug
      uid
      href
    }
    newsbg_by_pk(uid: $id) {
      date
      title
      image
      uid
      slug
      content
      href
    }
  }
`;
const getServerSideProps = async (context)=>{
    const { id , slug  } = context.query;
    const regex = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.shuffle)(slug.split("-")).join("|");
    const { data  } = await _data_client__WEBPACK_IMPORTED_MODULE_3__/* ["default"].query */ .Z.query({
        query: DATA_QUERY,
        variables: {
            id,
            slug: `(${regex})`
        }
    });
    const shufflprep = data.newsbg_by_pk.content.html ? (0,lodash__WEBPACK_IMPORTED_MODULE_1__.shuffle)(data.newsbg_by_pk.content.html.join(" ").split(".").map((p)=>`${(0,lodash__WEBPACK_IMPORTED_MODULE_1__.shuffle)(p.split(" ")).join(" ")}.`)) : null;
    const shuffled = shufflprep?.map((p)=>{
        const rid = Math.floor(Math.random() * 5);
        return `${p.charAt(0).toUpperCase() + p.slice(1)} ${rid === 0 ? "-=splitter=-" : ""}`;
    }).join(" ").split("-=splitter=-");
    return {
        props: {
            ...data,
            slug,
            shuffled
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsItem);


/***/ }),

/***/ 1014:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 32081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 67643:
/***/ ((module) => {

module.exports = require("diagnostics_channel");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 4074:
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ 77282:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 85477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 24404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [527,526,333,486,196,845,69], () => (__webpack_exec__(88043)));
module.exports = __webpack_exports__;

})();