(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[187],{9962:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cat/[cat]",function(){return t(7965)}])},6754:function(e,n,t){"use strict";t.d(n,{p:function(){return a}});var a=(0,t(4480).cn)({key:(new Date).toString(),default:{}})},4693:function(e,n,t){"use strict";t.d(n,{H:function(){return s}});var a=t(1799),r=t(5893),s=(t(7294),function(e){var n=e.joke;if(e.short){var t=n.substring(0,150),s=n.length<=150,c=t.split("\n").slice(0,3);return(0,r.jsxs)(r.Fragment,{children:[c.map((function(e,n){return(0,r.jsx)("p",{children:2!==n||s?e:(0,r.jsx)(r.Fragment,{children:"".concat(e,"...")})},n)})),t.length>=149&&c.length<=2&&(0,r.jsx)(r.Fragment,{children:"..."})]})}var i=0,l=n.split("\n").map((function(e,n){var t=!!(e.startsWith("-")||e.startsWith(" -")||e.startsWith("\u2013")||e.startsWith("  -"))&&((i+=1)%2===0?"even":"odd");return(0,a.Z)({key:n,line:"odd"===t||"even"===t?e.replace("-","").replace("\u2013",""):e},t&&{oddness:t})}));return(0,r.jsx)("div",{children:l.map((function(e){var n=e.oddness,t=e.line,a=e.key;return n?(0,r.jsx)("div",{className:"flex flex-wrap pb-4 ".concat("even"===n?"flex-row-reverse":""),children:(0,r.jsxs)("div",{className:"relative whitespace-pre-wrap rounded-lg p-2 font-sans font-medium shadow-2xl ".concat("even"===n?"bg-violet-900 text-right":"bg-indigo-700 text-left"),children:["odd"===n?(0,r.jsx)("div",{className:"absolute -left-4 top-3 inline-block w-4 overflow-hidden",children:(0,r.jsx)("div",{className:"h-16 origin-top-right -rotate-45 bg-indigo-700"})}):(0,r.jsx)("div",{className:"absolute -right-4 top-3 inline-block w-4 overflow-hidden",children:(0,r.jsx)("div",{className:" h-16 origin-top-left rotate-45 bg-violet-900"})}),t]})},a):(0,r.jsx)("div",{className:"block pb-4 text-lg",children:t},a)}))})})},2356:function(e,n,t){"use strict";t.d(n,{W:function(){return d}});var a=t(5893),r=t(5152),s=t.n(r),c=(t(7294),t(4480)),i=t(4693),l=t(6754),o=s()((function(){return t.e(914).then(t.bind(t,2914))}),{loadableGenerated:{webpack:function(){return[2914]}},ssr:!1}),d=function(e){var n=e.item,t=e.showcats,r=e.short,s=e.hideReadMore,d=n.joke,u=n.cat,h=d.length<=150,f=(0,c.Zl)(l.p);return(0,a.jsxs)("div",{className:"joke",children:[t&&"\u0420\u0430\u0437\u043d\u0438"!==n.cat&&(0,a.jsx)("a",{className:"joketop",href:"/cat/".concat(u.replace(/ /g,"%20"),"/"),children:u}),(0,a.jsx)("div",{className:"jokewrap",children:(0,a.jsx)("div",{className:"py-5",children:(0,a.jsx)(i.H,{joke:d,short:r})})}),!s&&(h?(0,a.jsx)("div",{className:" absolute right-5 -mt-8",children:(0,a.jsx)(o,{id:n._id,noText:!0,noWrapper:!0})}):(0,a.jsxs)("a",{onClick:function(e){e.preventDefault(),document.body.style.overflow="hidden",f((function(){return{id:n._id}}))},className:"jokebottom",href:"/joke/".concat(n._id),children:["\u041f\u0440\u043e\u0447\u0435\u0442\u0438",(0,a.jsx)("img",{src:"/images/arrow.svg",className:"ml-2 h-4 w-4",alt:""})]}))]})}},3740:function(e,n,t){"use strict";t.d(n,{t:function(){return c}});var a=t(5893),r=t(1664),s=t.n(r),c=function(e){var n=e.pages,t=e.pagenum,r=e.cat,c=Math.ceil(n/30),i=Number(t),l=new Array(c).fill(0).map((function(e,n){var t=n+1;return{page:t,active:t===i}})).map((function(e){return e})).filter((function(e){var n=e.page,t=i-4;return t<1&&(t=1),n>=t&&n<=t+8})),o=i-1>0?i-1:1,d=i+1<c?i+1:c;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("nav",{className:"btn-group block sm:hidden","aria-label":"Pagination",children:[(0,a.jsx)(s(),{href:"".concat(r,"/").concat(1===o?"":o),passHref:!0,children:(0,a.jsx)("a",{className:"btn",children:"\u041d\u0430\u0437\u0430\u0434"})}),(0,a.jsx)(s(),{href:"".concat(r,"/").concat(1===d?"":d),passHref:!0,children:(0,a.jsx)("a",{className:"btn",children:"\u041d\u0430\u043f\u0440\u0435\u0434"})})]}),(0,a.jsxs)("nav",{className:"btn-group hidden sm:block","aria-label":"Pagination",children:[1!==l[0].page&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s(),{href:"".concat(r,"/"),passHref:!0,children:(0,a.jsx)("a",{className:"btn",children:"1"})}),(0,a.jsx)("div",{className:"btn btn-disabled",children:"..."})]}),l.map((function(e){var n=e.page,t=e.active;return(0,a.jsx)(s(),{href:"".concat(r,"/").concat(1===n?"":n),passHref:!0,children:(0,a.jsx)("a",{className:"btn ".concat(t?"btn-active":""),children:n})},n)})),c-l[0].page>10&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"btn btn-disabled",children:"..."}),(0,a.jsx)(s(),{href:"".concat(r,"/").concat(c),passHref:!0,children:(0,a.jsx)("a",{className:"btn",children:c})})]})]})]})}},7965:function(e,n,t){"use strict";t.r(n),t.d(n,{DATA_QUERY_CAT:function(){return j},__N_SSP:function(){return f}});var a=t(7297),r=t(5893),s=t(7822),c=t(1664),i=t.n(c),l=t(2356),o=t(6843),d=t(9772),u=t(3740);function h(){var e=(0,a.Z)(["\n  query MyQuery($cat: String!, $offset: Int!) {\n    jokes_aggregate(where: { cat: { _eq: $cat } }) {\n      aggregate {\n        count(columns: _id)\n      }\n    }\n    jokes(\n      where: { cat: { _eq: $cat } }\n      order_by: { nid: desc }\n      limit: 30\n      offset: $offset\n    ) {\n      _id\n      joke\n    }\n  }\n"]);return h=function(){return e},e}var f=!0;n.default=function(e){var n=e.jokes,t=e.pages,a=e.pagenum,s=e.cat;return(0,r.jsxs)(o.o,{meta:(0,r.jsx)(d.h,{title:"\u0412\u0438\u0446\u043e\u0432\u0435 \u043e\u0442 ".concat(s," \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ").concat(a),description:"\u0412\u0438\u0446\u043e\u0432\u0435 \u043e\u0442 ".concat(s).concat(n[0].joke.replace(/\n/gi," ").substring(0,100))}),children:[(0,r.jsx)("div",{className:"breadcrumbs text-sm",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"/?type=Jokes",children:"\u0412\u0438\u0446\u043e\u0432\u0435"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"/cat/".concat(s),children:s})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{children:a})})]})}),(0,r.jsx)(u.t,{pages:t,pagenum:a,cat:"/cat/".concat(s)}),(0,r.jsx)("div",{className:"flex flex-wrap",children:n.map((function(e){return(0,r.jsx)(l.W,{item:e,showcats:!1,short:!0},e._id)}))}),(0,r.jsx)("div",{className:"fixed bottom-0 left-0 z-10 flex w-full justify-center bg-black/30 backdrop-blur-sm",children:(0,r.jsx)(u.t,{pages:t,pagenum:a,cat:"/cat/".concat(s),hideStats:!0})})]})};var j=(0,s.Ps)(h())}},function(e){e.O(0,[245,184,845,774,888,179],(function(){return n=9962,e(e.s=n);var n}));var n=e.O();_N_E=n}]);