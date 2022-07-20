"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[784,914],{6754:function(e,t,n){n.d(t,{p:function(){return s}});var s=(0,n(4480).cn)({key:(new Date).toString(),default:{}})},2914:function(e,t,n){n.r(t);var s=n(5893);n(7294);t.default=function(e){var t=e.noText,n=e.noWrapper;return(0,s.jsxs)("div",{className:n?"":"inline-flex items-center space-x-2 rounded bg-blue-500 px-4 py-2 font-semibold text-white",children:[(0,s.jsx)("svg",{className:"h-5 w-5 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),(0,s.jsx)("span",{children:t?"":"\u0421\u043f\u043e\u0434\u0435\u043b\u0438 \u0432\u044a\u0432 Facebook"})]})}},2999:function(e,t,n){var s=n(5893),r=n(1664),a=n.n(r);t.Z=function(e){var t=e.cats,n=e.limit,r=t.slice(0,n||t.length);return(0,s.jsx)("div",{className:"flex flex-wrap sm:mx-auto sm:mb-2 ",children:r.map((function(e){return(0,s.jsx)(a(),{href:"/cat/".concat(e.cat.replace(/ /g,"%20"),"/"),passHref:!0,children:(0,s.jsx)("a",{className:"btn1",children:(0,s.jsxs)("div",{className:"btn1-wrap",children:[(0,s.jsxs)("div",{className:"flex-1 font-medium text-white",children:[" ",e.cat]}),0!==e.count&&(0,s.jsx)("div",{className:"btn1-count",children:e.count})]})})},e.cat)}))})}},4693:function(e,t,n){n.d(t,{H:function(){return a}});var s=n(1799),r=n(5893),a=(n(7294),function(e){var t=e.joke;if(e.short){var n=t.substring(0,150),a=t.length<=150,i=n.split("\n").slice(0,3);return(0,r.jsxs)(r.Fragment,{children:[i.map((function(e,t){return(0,r.jsx)("p",{children:2!==t||a?e:(0,r.jsx)(r.Fragment,{children:"".concat(e,"...")})},t)})),n.length>=149&&i.length<=2&&(0,r.jsx)(r.Fragment,{children:"..."})]})}var c=0,l=t.split("\n").map((function(e,t){var n=!!(e.startsWith("-")||e.startsWith(" -")||e.startsWith("\u2013")||e.startsWith("  -"))&&((c+=1)%2===0?"even":"odd");return(0,s.Z)({key:t,line:"odd"===n||"even"===n?e.replace("-","").replace("\u2013",""):e},n&&{oddness:n})}));return(0,r.jsx)("div",{children:l.map((function(e){var t=e.oddness,n=e.line,s=e.key;return t?(0,r.jsx)("div",{className:"flex flex-wrap pb-4 ".concat("even"===t?"flex-row-reverse":""),children:(0,r.jsxs)("div",{className:"relative whitespace-pre-wrap rounded-lg p-2 font-sans font-medium shadow-2xl ".concat("even"===t?"bg-violet-900 text-right":"bg-indigo-700 text-left"),children:["odd"===t?(0,r.jsx)("div",{className:"absolute -left-4 top-3 inline-block w-4 overflow-hidden",children:(0,r.jsx)("div",{className:"h-16 origin-top-right -rotate-45 bg-indigo-700"})}):(0,r.jsx)("div",{className:"absolute -right-4 top-3 inline-block w-4 overflow-hidden",children:(0,r.jsx)("div",{className:" h-16 origin-top-left rotate-45 bg-violet-900"})}),n]})},s):(0,r.jsx)("div",{className:"block pb-4 text-lg",children:n},s)}))})})},4784:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var s=n(1799),r=n(5893),a=n(6486),i=n(4298),c=n.n(i),l=n(7294),o=n(4480),d=n(158),u=n(7568),h=n(603),x=n(4051),f=n.n(x),g=n(9669),v=n.n(g),m=n(6754),p=n(2914),j=n(4693),w=function(e){var t=e.id,n=e.imgid,s=(0,o.Zl)(m.p),a=(0,h.Z)(l.useState(""),2),i=a[0],c=a[1],d=(0,h.Z)(l.useState(!1),2),x=d[0],g=d[1];(0,l.useEffect)((function(){function e(){return(e=(0,u.Z)(f().mark((function e(){var s;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,v().get("/api/joke/".concat(t));case 3:s=e.sent,c(s.data.joke),g(!0);case 6:n&&g(!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,n]);var w=function(){document.body.style.overflow="auto",s((function(){return{type:null,id:null}})),g(!1)};return(0,r.jsx)("div",{className:"fixed top-0 left-0 z-20   h-screen  w-screen   overflow-auto bg-black/30 backdrop-blur-sm  ".concat(x?"block":"hidden"),onClick:w,children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("svg",{className:"h-12 w-12 cursor-pointer self-end",xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 744.09 1052.4",onClick:w,children:(0,r.jsxs)("g",{children:[(0,r.jsx)("path",{stroke:"#000",strokeWidth:"5.524",d:"M720.418 507.697a347.228 347.228 0 11-694.445 0 347.228 347.228 0 11694.445 0z"}),(0,r.jsxs)("g",{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeWidth:"133.87",transform:"translate(47.587 10.944) scale(.91837)",children:[(0,r.jsx)("path",{d:"M176.51 362.87L532.64 719"}),(0,r.jsx)("path",{d:"M532.64 362.87L176.51 719"})]})]})}),t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"container max-w-screen-md",children:(0,r.jsx)(j.H,{joke:i})}),(0,r.jsx)(p.default,{id:t})]}),n&&(0,r.jsx)(r.Fragment,{children:n.includes(".mp4")?(0,r.jsxs)("video",{width:"320",height:"240",controls:!1,autoPlay:!0,className:"w-auto rounded-lg",children:[(0,r.jsx)("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]}):(0,r.jsx)("img",{src:n,alt:"",className:"w-auto rounded-lg"})})]})})},b=n(2999);var k=function(e){var t=e.hide,n=(0,o.sJ)(m.p);return(0,r.jsxs)("footer",{className:"h-36 bg-cover bg-bottom",style:{backgroundImage:"url('/images/botwave.svg')"},children:[(0,r.jsxs)("div",{className:"",children:[!t&&(0,r.jsx)(b.Z,{cats:(0,a.shuffle)(d.Z).slice(0,3)}),(0,r.jsxs)("div",{className:"text-center text-xs",children:["\xa9 ",(new Date).getFullYear(),", Built by RudixOps with \u2764\ufe0f"]})]}),(0,r.jsx)(w,(0,s.Z)({},n)),(0,r.jsx)(c(),{src:"https://www.googletagmanager.com/gtag/js?id=G-99VWGKYVS6",strategy:"afterInteractive"}),(0,r.jsx)(c(),{id:"google-analytics",strategy:"afterInteractive",children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){window.dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', 'GA_MEASUREMENT_ID');\n        "})]})}}}]);