(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{53211:function(e,t,n){Promise.resolve().then(n.bind(n,99968))},99968:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R},metadata:function(){return w}});var r=n(36164),i=n(40055),s=n(70410),l=n(99047),o=n(6230),a=n(3546),u=n(70652),c=n.n(u),d=n(97651),f=n.n(d),x=n(74630),m=n(99092),h=n.n(m),j=n(74248),b=n(81565),p=n(29),v=n(90379),g=n(17484);function y(e){let{count:t,activeClass:n,tooltip:i}=e;return(0,r.jsx)(p.pn,{delayDuration:0,children:(0,r.jsxs)(p.u,{children:[(0,r.jsx)(p.aJ,{children:(0,r.jsx)("div",{className:(0,j.cn)("flex h-8 w-8 cursor-default items-center justify-center rounded-full",{[n]:t,"bg-muted text-muted":!t}),children:t||""})}),(0,r.jsx)(p._v,{children:(0,r.jsx)("p",{children:i})})]})})}function N(e){let{name:t}=e,[{data:n,fetching:l}]=(0,i.aM)({query:s.yB,variables:{jobs:[t]}});return(0,r.jsx)(o.Z,{loading:l,fallback:(0,r.jsx)(v.tB,{className:"w-1/3"}),children:(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)(y,{count:null==n?void 0:n.jobRunStats.success,activeClass:"bg-green-600 text-xs text-white",tooltip:"Success"}),(0,r.jsx)(y,{count:null==n?void 0:n.jobRunStats.pending,activeClass:"bg-blue-600 text-xs text-white",tooltip:"Pending"}),(0,r.jsx)(y,{count:null==n?void 0:n.jobRunStats.failed,activeClass:"bg-red-600 text-xs text-white",tooltip:"Failed"})]})})}function Z(e){var t;let{name:n}=e,[{data:u,fetching:d}]=(0,i.aM)({query:s.GG,variables:{last:10,jobs:[n]}}),m=null==u?void 0:null===(t=u.jobRuns)||void 0===t?void 0:t.edges,y=(0,a.useMemo)(()=>null==m?void 0:m.slice().reverse(),[m]),Z=null==y?void 0:y[0],w=null==y?void 0:y.find(e=>!!e.node.finishedAt),R=w?h()(w.node.finishedAt).format("YYYY-MM-DD HH:mm"):null;return(0,r.jsx)(o.Z,{loading:d,fallback:(0,r.jsx)(l.SC,{children:(0,r.jsx)(l.pj,{colSpan:4,children:(0,r.jsx)(v.tB,{})})}),children:(0,r.jsxs)(l.SC,{className:"h-16",children:[(0,r.jsx)(l.pj,{className:"font-bold",children:(0,g.Y)(n)}),(0,r.jsx)(l.pj,{children:(0,r.jsx)("div",{className:"grid grid-cols-5 flex-wrap gap-1.5  xl:flex",children:null==y?void 0:y.map(e=>{var t;let{createdAt:n,finishedAt:i}=e.node,s=n&&h()(n).format("YYYY-MM-DD HH:mm"),l=null!==(t=n&&i&&f().humanizer({language:"shortEn",languages:{shortEn:{d:()=>"d",h:()=>"h",m:()=>"m",s:()=>"s"}}})(h().duration(h()(i).diff(n)).asMilliseconds(),{units:["d","h","m","s"],round:!1,largest:1,spacer:"",language:"shortEn"}))&&void 0!==t?t:null,o="";if(null!==l){let e=l.endsWith("s");if(e)o=l;else{let e=l.charAt(l.length-1),t=parseInt(l)+1;o=t+e}}return(0,r.jsx)(p.pn,{delayDuration:0,children:(0,r.jsxs)(p.u,{children:[(0,r.jsx)(p.aJ,{asChild:!0,children:(0,r.jsxs)(c(),{href:"/jobs/detail?id=".concat(e.node.id),className:(0,j.cn)("flex h-8 w-8 items-center justify-center rounded text-xs text-white hover:opacity-70",{"bg-blue-600":(0,x.Z)(e.node.exitCode),"bg-green-600":0===e.node.exitCode,"bg-red-600":!(0,x.Z)(e.node.exitCode)&&0!==e.node.exitCode}),children:[o,!o&&(0,r.jsx)(b.IconSpinner,{})]})}),(0,r.jsx)(p._v,{children:s&&(0,r.jsx)("p",{children:s})})]})},e.node.id)})})}),(0,r.jsx)(l.pj,{children:(0,r.jsx)(c(),{href:"/jobs/detail?id=".concat(null==Z?void 0:Z.node.id),className:"flex items-center underline",children:(0,r.jsx)("p",{children:R})})}),(0,r.jsx)(l.pj,{children:(0,r.jsx)(N,{name:n})})]})})}let w={title:"Jobs"};function R(){let[{data:e,fetching:t}]=(0,i.aM)({query:s.DQ});return(0,r.jsx)(o.Z,{loading:t,children:(0,r.jsxs)(l.iA,{children:[(0,r.jsx)(l.xD,{children:(0,r.jsxs)(l.SC,{children:[(0,r.jsx)(l.ss,{className:"w-[20%]",children:"Job"}),(0,r.jsx)(l.ss,{className:"w-56 xl:w-auto",children:"Recent Tasks"}),(0,r.jsx)(l.ss,{className:"w-auto xl:w-[20%]",children:"Last Run"}),(0,r.jsx)(l.ss,{className:"w-[20%]",children:"Job Runs"})]})}),(0,r.jsx)(l.RM,{children:null==e?void 0:e.jobs.map(e=>(0,r.jsx)(Z,{name:e},e))})]})})}},6230:function(e,t,n){"use strict";var r=n(36164),i=n(3546),s=n(24449),l=n(90379);t.Z=e=>{let{loading:t,fallback:n,delay:o,children:a}=e,[u,c]=i.useState(!t),[d]=(0,s.n)(u,null!=o?o:200);return(i.useEffect(()=>{t||u||c(!0)},[t]),d)?a:n||(0,r.jsx)(l.cg,{})}},99047:function(e,t,n){"use strict";n.d(t,{RM:function(){return a},SC:function(){return c},iA:function(){return l},pj:function(){return f},ss:function(){return d},xD:function(){return o}});var r=n(36164),i=n(3546),s=n(74248);let l=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("table",{ref:t,className:(0,s.cn)("w-full caption-bottom text-sm",n),...i})});l.displayName="Table";let o=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("thead",{ref:t,className:(0,s.cn)("[&_tr]:border-b",n),...i})});o.displayName="TableHeader";let a=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,s.cn)("[&_tr:last-child]:border-0",n),...i})});a.displayName="TableBody";let u=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",n),...i})});u.displayName="TableFooter";let c=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("tr",{ref:t,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",n),...i})});c.displayName="TableRow";let d=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("th",{ref:t,className:(0,s.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",n),...i})});d.displayName="TableHead";let f=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("td",{ref:t,className:(0,s.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",n),...i})});f.displayName="TableCell";let x=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("caption",{ref:t,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",n),...i})});x.displayName="TableCaption"},29:function(e,t,n){"use strict";n.d(t,{_v:function(){return c},aJ:function(){return u},pn:function(){return o},u:function(){return a}});var r=n(36164),i=n(3546),s=n(44421),l=n(74248);let o=s.zt,a=s.fC,u=s.xz,c=i.forwardRef((e,t)=>{let{className:n,sideOffset:i=4,...o}=e;return(0,r.jsx)(s.VY,{ref:t,sideOffset:i,className:(0,l.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...o})});c.displayName=s.VY.displayName},24449:function(e,t,n){"use strict";n.d(t,{S:function(){return o},n:function(){return a}});var r=n(3546),i=n(45391),s=n(16784);let l=e=>{let t=(0,s.d)(e);r.useEffect(()=>()=>{t.current()},[])};function o(e,t,n){let o=(0,s.d)(e),a=r.useMemo(()=>(0,i.Z)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return o.current(...t)},t,n),[]);return l(()=>a.cancel()),{run:a,cancel:a.cancel,flush:a.flush}}function a(e,t,n){let[i,s]=r.useState(e),{run:l}=o(()=>{s(e)},t,n);return r.useEffect(()=>{l()},[e]),[i,s]}},16784:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(3546);function i(e){let t=r.useRef(e);return t.current=e,t}},70652:function(e,t,n){e.exports=n(54007)},7600:function(e,t,n){"use strict";var r=n(48717).Z.Symbol;t.Z=r},17996:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7600),i=Object.prototype,s=i.hasOwnProperty,l=i.toString,o=r.Z?r.Z.toStringTag:void 0,a=function(e){var t=s.call(e,o),n=e[o];try{e[o]=void 0;var r=!0}catch(e){}var i=l.call(e);return r&&(t?e[o]=n:delete e[o]),i},u=Object.prototype.toString,c=r.Z?r.Z.toStringTag:void 0,d=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?a(e):u.call(e)}},64380:function(e,t){"use strict";var n="object"==typeof global&&global&&global.Object===Object&&global;t.Z=n},48717:function(e,t,n){"use strict";var r=n(64380),i="object"==typeof self&&self&&self.Object===Object&&self,s=r.Z||i||Function("return this")();t.Z=s},6670:function(e,t){"use strict";var n=/\s/;t.Z=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},45391:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(84639),i=n(48717),s=function(){return i.Z.Date.now()},l=n(91971),o=Math.max,a=Math.min,u=function(e,t,n){var i,u,c,d,f,x,m=0,h=!1,j=!1,b=!0;if("function"!=typeof e)throw TypeError("Expected a function");function p(t){var n=i,r=u;return i=u=void 0,m=t,d=e.apply(r,n)}function v(e){var n=e-x,r=e-m;return void 0===x||n>=t||n<0||j&&r>=c}function g(){var e,n,r,i=s();if(v(i))return y(i);f=setTimeout(g,(e=i-x,n=i-m,r=t-e,j?a(r,c-n):r))}function y(e){return(f=void 0,b&&i)?p(e):(i=u=void 0,d)}function N(){var e,n=s(),r=v(n);if(i=arguments,u=this,x=n,r){if(void 0===f)return m=e=x,f=setTimeout(g,t),h?p(e):d;if(j)return clearTimeout(f),f=setTimeout(g,t),p(x)}return void 0===f&&(f=setTimeout(g,t)),d}return t=(0,l.Z)(t)||0,(0,r.Z)(n)&&(h=!!n.leading,c=(j="maxWait"in n)?o((0,l.Z)(n.maxWait)||0,t):c,b="trailing"in n?!!n.trailing:b),N.cancel=function(){void 0!==f&&clearTimeout(f),m=0,i=x=u=f=void 0},N.flush=function(){return void 0===f?d:y(s())},N}},84639:function(e,t){"use strict";t.Z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},96786:function(e,t){"use strict";t.Z=function(e){return null!=e&&"object"==typeof e}},55357:function(e,t,n){"use strict";var r=n(17996),i=n(96786);t.Z=function(e){return"symbol"==typeof e||(0,i.Z)(e)&&"[object Symbol]"==(0,r.Z)(e)}},91971:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(6670),i=/^\s+/,s=n(84639),l=n(55357),o=0/0,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,f=function(e){if("number"==typeof e)return e;if((0,l.Z)(e))return o;if((0,s.Z)(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=(0,s.Z)(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=(t=e)?t.slice(0,(0,r.Z)(t)+1).replace(i,""):t;var f=u.test(e);return f||c.test(e)?d(e.slice(2),f?2:8):a.test(e)?o:+e}}},function(e){e.O(0,[7565,7998,5498,4007,2134,6201,3449,4421,2785,7444,1565,4290,3375,5289,1744],function(){return e(e.s=53211)}),_N_E=e.O()}]);