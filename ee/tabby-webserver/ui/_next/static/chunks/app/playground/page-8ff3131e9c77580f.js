(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[383],{24283:function(e,t,s){Promise.resolve().then(s.bind(s,34926))},34926:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return eA}});var n=s(57437),l=s(2265),a=s(82504),r=s(39311),i=s(16775),o=s(48975),d=s(82180),c=s(30513),u=s(4523),m=s(77723),f=s(84168),x=s(93023);let h={javascript:".js",python:".py",java:".java",c:".c",cpp:".cpp","c++":".cpp","c#":".cs",ruby:".rb",php:".php",swift:".swift","objective-c":".m",kotlin:".kt",typescript:".ts",go:".go",perl:".pl",rust:".rs",scala:".scala",haskell:".hs",lua:".lua",shell:".sh",sql:".sql",html:".html",css:".css"},p=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s="ABCDEFGHJKLMNPQRSTUVWXY3456789",n="";for(let t=0;t<e;t++)n+=s.charAt(Math.floor(Math.random()*s.length));return t?n.toLowerCase():n},v=(0,l.memo)(e=>{let{language:t,value:s}=e,{isCopied:l,copyToClipboard:a}=(0,m.m)({timeout:2e3});return(0,n.jsxs)("div",{className:"codeblock relative w-full bg-zinc-950 font-sans",children:[(0,n.jsxs)("div",{className:"flex w-full items-center justify-between bg-zinc-800 px-6 py-2 pr-4 text-zinc-100",children:[(0,n.jsx)("span",{className:"text-xs lowercase",children:t}),(0,n.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,n.jsxs)(x.z,{variant:"ghost",className:"hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{let e=h[t]||".file",n="file-".concat(p(3,!0)).concat(e),l=window.prompt("Enter file name",n);if(!l)return;let a=new Blob([s],{type:"text/plain"}),r=URL.createObjectURL(a),i=document.createElement("a");i.download=l,i.href=r,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)},size:"icon",children:[(0,n.jsx)(f.Dj,{}),(0,n.jsx)("span",{className:"sr-only",children:"Download"})]}),(0,n.jsxs)(x.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{l||a(s)},children:[l?(0,n.jsx)(f.NO,{}):(0,n.jsx)(f.vU,{}),(0,n.jsx)("span",{className:"sr-only",children:"Copy code"})]})]})]}),(0,n.jsx)(c.Z,{language:t,style:u.RY,PreTag:"div",showLineNumbers:!0,customStyle:{margin:0,width:"100%",background:"transparent",padding:"1.5rem 1rem"},codeTagProps:{style:{fontSize:"0.9rem",fontFamily:"var(--font-mono)"}},children:s})]})});v.displayName="CodeBlock";var g=s(19349);let j=(0,l.memo)(g.D,(e,t)=>e.children===t.children&&e.className===t.className);var b=s(16691),y=s.n(b),N=s(33555);function w(e){let{message:t,className:s,handleMessageAction:l,...a}=e;return(0,n.jsxs)("div",{className:(0,r.cn)("flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-[5rem] md:-top-2 md:opacity-0",s),...a,children:["user"===t.role?(0,n.jsxs)(x.z,{variant:"ghost",size:"icon",onClick:e=>l(t.id,"edit"),children:[(0,n.jsx)(f.yl,{}),(0,n.jsx)("span",{className:"sr-only",children:"Edit message"})]}):(0,n.jsxs)(x.z,{variant:"ghost",size:"icon",onClick:e=>l(t.id,"regenerate"),children:[(0,n.jsx)(f.tr,{}),(0,n.jsx)("span",{className:"sr-only",children:"Regenerate message"})]}),(0,n.jsxs)(x.z,{variant:"ghost",size:"icon",onClick:e=>l(t.id,"delete"),children:[(0,n.jsx)(f.IT,{}),(0,n.jsx)("span",{className:"sr-only",children:"Delete message"})]}),(0,n.jsx)(N.q,{value:t.content})]})}function k(e){let{message:t,handleMessageAction:s,...l}=e;return(0,n.jsxs)("div",{className:(0,r.cn)("group relative mb-4 flex items-start md:-ml-12"),...l,children:[(0,n.jsx)("div",{className:(0,r.cn)("flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow","user"===t.role?"bg-background":"bg-primary text-primary-foreground"),children:"user"===t.role?(0,n.jsx)(f.f7,{}):(0,n.jsx)(C,{})}),(0,n.jsxs)("div",{className:"ml-4 flex-1 space-y-2 overflow-hidden px-1",children:[(0,n.jsx)(j,{className:"prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0",remarkPlugins:[o.Z,d.Z],components:{p(e){let{children:t}=e;return(0,n.jsx)("p",{className:"mb-2 last:mb-0",children:t})},code(e){let{node:t,inline:s,className:l,children:a,...r}=e;if(a.length){if("▍"==a[0])return(0,n.jsx)("span",{className:"mt-1 animate-pulse cursor-default",children:"▍"});a[0]=a[0].replace("`▍`","▍")}let i=/language-(\w+)/.exec(l||"");return s?(0,n.jsx)("code",{className:l,...r,children:a}):(0,n.jsx)(v,{language:i&&i[1]||"",value:String(a).replace(/\n$/,""),...r},Math.random())}},children:t.content}),(0,n.jsx)(w,{message:t,handleMessageAction:s})]})]})}function C(){return(0,n.jsx)(y(),{style:{borderRadius:4},src:"https://avatars.githubusercontent.com/u/125617854?s=128&v=4",alt:"tabby",width:"128",height:"128"})}function z(e){let{messages:t,handleMessageAction:s}=e;return t.length?(0,n.jsx)("div",{className:"relative mx-auto max-w-2xl px-4",children:t.map((e,l)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(k,{message:e,handleMessageAction:s}),l<t.length-1&&(0,n.jsx)(i.Z,{className:"my-4 md:my-8"})]},l))}):null}var R=s(30713),E=s(95482),S=s(19190);let D=S.fC;S.xz;let _=S.x8,I=S.h_,H=S.ee,T=l.forwardRef((e,t)=>{let{className:s,sideOffset:l=4,...a}=e;return(0,n.jsx)(S.VY,{ref:t,sideOffset:l,className:(0,r.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...a})});T.displayName=S.VY.displayName;var O=s(92402),L=s(45470),Z=s(24144),A=s(62700);let M=l.createContext({}),V=l.forwardRef((e,t)=>(0,n.jsx)(H,{...e,ref:t}));V.displayName="ComboboxAnchor";let F=l.forwardRef((e,t)=>{let{getInputProps:s,open:a}=l.useContext(M),{onKeyDown:r,onChange:i,onInput:o,onBlur:d,onClick:c,...u}=e;return(0,n.jsx)(L.Z,{...s((0,A.Z)({onKeyDown:e=>{"Enter"===e.key&&a?e.preventDefault():null==r||r(e)},onChange:i,onInput:o,onBlur:d,onClick:c,ref:t},Z.Z)),...u})});F.displayName="ComboboxTextarea";let q=l.forwardRef((e,t)=>{let{children:s,style:a,popupMatchAnchorWidth:r,...i}=e,{getMenuProps:o,anchorRef:d}=l.useContext(M),c=l.useRef(void 0);return l.useLayoutEffect(()=>{if(r){let e=d.current;if(e){let t=e.getBoundingClientRect();c.current=t.width}}},[]),(0,n.jsx)(I,{children:(0,n.jsx)(T,{align:"start",onOpenAutoFocus:e=>e.preventDefault(),style:{width:c.current,...a},...o({ref:t},{suppressRefError:!0}),...i,children:s})})});q.displayName="ComboboxContent";let B=l.forwardRef((e,t)=>{let{item:s,index:a,className:i,children:o,disabled:d,...c}=e,{highlightedIndex:u,selectedItem:m,getItemProps:f}=l.useContext(M),x=u===a,h=m===s;return(0,n.jsx)(_,{asChild:!0,children:(0,n.jsx)("div",{className:(0,r.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",x&&"text-accent-foreground bg-accent",h&&"font-bold",d&&"pointer-events-none opacity-50",i),...f({item:s,index:a,onMouseLeave:e=>e.preventDefault(),onMouseOut:e=>e.preventDefault()}),...c,children:"function"==typeof o?o({highlighted:x,selected:h}):o})},s.id)});function P(e){let{options:t,onSelect:s,inputRef:a,children:r}=e,[i,o]=l.useState(!1),d=l.useRef(null),c=null!=a?a:d,u=l.useRef(null),m=l.useCallback((e,t)=>{let{type:s,changes:n}=t;return s===O.Kb.stateChangeTypes.MenuMouseLeave?{...n,highlightedIndex:e.highlightedIndex}:n},[]),f=(0,O.Kb)({items:null!=t?t:[],isOpen:i,onSelectedItemChange(e){let{selectedItem:t}=e;t&&(null==s||s(t),o(!1))},onIsOpenChange:e=>{let{isOpen:t}=e;t||o(!1)},stateReducer:m}),{setHighlightedIndex:x,highlightedIndex:h}=f,p=i&&!!(null==t?void 0:t.length);l.useEffect(()=>{p&&t.length&&-1===h&&x(0),p&&!t.length&&o(!1)},[p,t]),l.useEffect(()=>{(null==t?void 0:t.length)?o(!0):o(!1)},[t]);let v=l.useMemo(()=>({...f,open:p,inputRef:c,anchorRef:u}),[f,p,c,u]);return(0,n.jsx)(M.Provider,{value:v,children:(0,n.jsx)(D,{open:p,children:"function"==typeof r?r(v):r})})}B.displayName="ComboboxOption";var U=s(97605),Y=s(50976),K=s(91067);let J=l.forwardRef(function(e,t){let{onSubmit:s,input:a,setInput:i,isLoading:o}=e,{formRef:d,onKeyDown:c}=function(){let e=(0,l.useRef)(null);return{formRef:e,onKeyDown:t=>{if("Enter"===t.key&&!t.shiftKey&&!t.nativeEvent.isComposing){var s;null===(s=e.current)||void 0===s||s.requestSubmit(),t.preventDefault()}}}}(),[u,m]=l.useState(null),h=l.useRef(""),p=l.useRef(null),v=l.useRef(),g=l.useRef(),[j,b]=l.useState([]),[y,N]=l.useState({});(0,R.ZP)(u,U.Z,{revalidateOnFocus:!1,dedupingInterval:0,onSuccess:(e,t)=>{var s;t===h.current&&b(null!==(s=null==e?void 0:e.hits)&&void 0!==s?s:[])}}),l.useImperativeHandle(t,()=>({focus:()=>{var e;null===(e=p.current)||void 0===e||e.focus()}})),l.useEffect(()=>{a&&p.current&&p.current!==document.activeElement&&p.current.focus()},[a]),l.useLayoutEffect(()=>{var e,t,s;(null===(e=g.current)||void 0===e?void 0:e.length)&&(null===(s=p.current)||void 0===s||null===(t=s.setSelectionRange)||void 0===t||t.call(s,g.current[0],g.current[1]),g.current=void 0)});let w=l.useMemo(()=>(0,Y.Z)(e=>{var t,s,n,l;let a=null!==(n=null===(t=e.target)||void 0===t?void 0:t.value)&&void 0!==n?n:"",r=null!==(l=null===(s=e.target)||void 0===s?void 0:s.selectionEnd)&&void 0!==l?l:0,i=$(a,r),o=null==i?void 0:i[1];if(o){let e=encodeURIComponent("name:".concat(o," kind:function")),t="/v1beta/search?q=".concat(e);h.current=t,m(t)}else b([])},200),[]),k=async e=>{if(e.preventDefault(),!(null==a?void 0:a.trim()))return;let t=a;Object.keys(y).forEach(e=>{var s,n,l;let a=y[e];(null==a?void 0:a.doc)&&(t=t.replaceAll(e,"\n```".concat(null!==(n=null===(s=a.doc)||void 0===s?void 0:s.language)&&void 0!==n?n:"","\n").concat(null!==(l=a.doc.body)&&void 0!==l?l:"","\n","```","\n")))}),i(""),await s(t)},C=(e,t)=>{t&&["ArrowRight","ArrowLeft","Home","End"].includes(e.key)?b([]):c(e)};return(0,n.jsx)("form",{onSubmit:k,ref:d,children:(0,n.jsx)(P,{inputRef:p,options:j,onSelect:e=>{var t,s,n;let l=null!==(t=v.current)&&void 0!==t?t:0,r=$(a,l);if(r){N({...y,["@".concat(null===(s=e.doc)||void 0===s?void 0:s.name)]:e});let t="@".concat(null==e?void 0:null===(n=e.doc)||void 0===n?void 0:n.name," "),o=a.substring(0,l).replace(new RegExp(r[0]),""),d=o.length+t.length;g.current=[d,d],i(o+t+a.slice(l))}b([])},children:e=>{var t,s,l,d;let{open:c,highlightedIndex:u}=e,m=null==j?void 0:j[u];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(V,{children:(0,n.jsxs)("div",{className:"bg-background relative flex max-h-60 w-full grow flex-col overflow-hidden px-8 sm:rounded-md sm:border sm:px-12",children:[(0,n.jsx)("span",{className:(0,r.cn)((0,x.d)({size:"sm",variant:"ghost"}),"bg-background hover:bg-background absolute left-0 top-4 h-8 w-8 rounded-full p-0 sm:left-4"),children:(0,n.jsx)(f.yl,{})}),(0,n.jsx)(F,{tabIndex:0,rows:1,placeholder:"Ask a question.",spellCheck:!1,className:"min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm",value:a,ref:p,onChange:e=>{(0,K.Z)(e,"target.value")?(v.current=e.target.selectionEnd,i(e.target.value),w(e)):v.current=void 0},onKeyDown:e=>C(e,c)}),(0,n.jsx)("div",{className:"absolute right-0 top-4 sm:right-4",children:(0,n.jsxs)(E.u,{children:[(0,n.jsx)(E.aJ,{asChild:!0,children:(0,n.jsxs)(x.z,{type:"submit",size:"icon",disabled:o||""===a,children:[(0,n.jsx)(f.vq,{}),(0,n.jsx)("span",{className:"sr-only",children:"Send message"})]})}),(0,n.jsx)(E._v,{children:"Send message"})]})})]})}),(0,n.jsx)(q,{align:"start",side:"top",onOpenAutoFocus:e=>e.preventDefault(),className:"w-[60vw] md:w-[430px]",children:(0,n.jsxs)(D,{open:c&&!!m,children:[(0,n.jsx)(H,{asChild:!0,children:(0,n.jsx)("div",{className:"max-h-[300px] overflow-y-scroll",children:c&&!!(null==j?void 0:j.length)&&j.map((e,t)=>{var s,l,a;return(0,n.jsx)(B,{item:e,index:t,children:(0,n.jsxs)("div",{className:"flex w-full items-center justify-between gap-8 overflow-x-hidden",children:[(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(W,{kind:null==e?void 0:null===(s=e.doc)||void 0===s?void 0:s.kind}),(0,n.jsxs)("div",{className:"max-w-[200px] truncate",children:[null==e?void 0:null===(l=e.doc)||void 0===l?void 0:l.name,"(...)"]})]}),(0,n.jsx)("div",{className:"text-muted-foreground flex-1 truncate text-right text-sm",children:null==e?void 0:null===(a=e.doc)||void 0===a?void 0:a.body})]})},null==e?void 0:e.id)})})}),(0,n.jsx)(T,{asChild:!0,align:"start",side:"right",alignOffset:-4,onOpenAutoFocus:e=>e.preventDefault(),onKeyDownCapture:e=>e.preventDefault(),className:"rounded-none",collisionPadding:{bottom:120},children:(0,n.jsxs)("div",{className:"flex max-h-[70vh] w-[20vw] flex-col overflow-y-auto px-2 md:w-[240px] lg:w-[340px]",children:[(0,n.jsxs)("div",{className:"mb-2",children:[(null==m?void 0:null===(t=m.doc)||void 0===t?void 0:t.kind)?"(".concat(null==m?void 0:null===(s=m.doc)||void 0===s?void 0:s.kind,") "):"",null==m?void 0:null===(l=m.doc)||void 0===l?void 0:l.name]}),(0,n.jsx)("div",{className:"text-muted-foreground flex-1 whitespace-pre-wrap break-all",children:null==m?void 0:null===(d=m.doc)||void 0===d?void 0:d.body})]})})]})})]})}})})});function $(e,t){let s=e.substring(0,t),n=/@(\w+)$/.exec(s);return n}function W(e){let{kind:t,...s}=e;return(0,n.jsx)(f.sW,{...s})}function X(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t,s]=l.useState(!1);return l.useEffect(()=>{let t=()=>{s(window.innerHeight+window.scrollY>=document.body.offsetHeight-e)};return window.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t)}},[e]),t}function G(e){let{className:t,...s}=e,l=X();return(0,n.jsxs)(x.z,{variant:"outline",size:"icon",className:(0,r.cn)("absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2",l?"opacity-0":"opacity-100",t),onClick:()=>window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"}),...s,children:[(0,n.jsx)(f.BD,{}),(0,n.jsx)("span",{className:"sr-only",children:"Scroll to bottom"})]})}function Q(e){let{href:t,children:s}=e;return(0,n.jsxs)("a",{href:t,target:"_blank",className:"inline-flex flex-1 justify-center gap-1 leading-4 hover:underline",children:[(0,n.jsx)("span",{children:s}),(0,n.jsx)("svg",{"aria-hidden":"true",height:"7",viewBox:"0 0 6 6",width:"7",className:"opacity-70",children:(0,n.jsx)("path",{d:"M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z",fill:"currentColor"})})]})}function ee(e){let{className:t,...s}=e;return(0,n.jsxs)("p",{className:(0,r.cn)("px-2 text-center text-xs leading-normal text-muted-foreground",t),...s,children:[(0,n.jsx)(Q,{href:"https://tabby.tabbyml.com",children:"Tabby"}),", an opensource, self-hosted AI coding assistant ."]})}function et(e){let{id:t,isLoading:s,stop:a,append:i,reload:o,input:d,setInput:c,messages:u,className:m,onSubmit:h}=e,p=l.useRef(null);return l.useEffect(()=>{var e;null==p||null===(e=p.current)||void 0===e||e.focus()},[t]),(0,n.jsxs)("div",{className:(0,r.cn)("from-muted/10 to-muted/30 bg-gradient-to-b from-10% to-50%",m),children:[(0,n.jsx)(G,{}),(0,n.jsxs)("div",{className:"mx-auto sm:max-w-2xl sm:px-4",children:[(0,n.jsx)("div",{className:"flex h-10 items-center justify-center",children:s?(0,n.jsxs)(x.z,{variant:"outline",onClick:()=>a(),className:"bg-background",children:[(0,n.jsx)(f.zu,{className:"mr-2"}),"Stop generating"]}):(null==u?void 0:u.length)>0&&(0,n.jsxs)(x.z,{variant:"outline",onClick:()=>o(),className:"bg-background",children:[(0,n.jsx)(f.tr,{className:"mr-2"}),"Regenerate response"]})}),(0,n.jsxs)("div",{className:"bg-background space-y-4 border-t px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4",children:[(0,n.jsx)(J,{ref:p,onSubmit:h,input:d,setInput:c,isLoading:s}),(0,n.jsx)(ee,{className:"hidden sm:block"})]})]})]})}let es=[{heading:"Convert list of string to numbers",message:"How to convert a list of string to numbers in python"},{heading:"How to parse email address",message:"How to parse email address with regex"}];function en(e){let{setInput:t}=e;return(0,n.jsx)("div",{className:"mx-auto max-w-2xl px-4",children:(0,n.jsxs)("div",{className:"rounded-lg border bg-background p-8",children:[(0,n.jsx)("h1",{className:"mb-2 text-lg font-semibold",children:"Welcome to Playground!"}),(0,n.jsx)("p",{className:"leading-normal text-muted-foreground",children:"You can start a conversation here or try the following examples:"}),(0,n.jsx)("div",{className:"mt-4 flex flex-col items-start space-y-2",children:es.map((e,s)=>(0,n.jsxs)(x.z,{variant:"link",className:"h-auto p-0 text-base",onClick:()=>t(e.message),children:[(0,n.jsx)(f.Ec,{className:"mr-2 text-muted-foreground"}),e.heading]},s))})]})})}var el=s(4327);function ea(e){let{trackVisibility:t}=e,s=X(),{ref:a,entry:r,inView:i}=(0,el.YD)({trackVisibility:t,delay:100,rootMargin:"0px 0px -150px 0px"});return l.useEffect(()=>{s&&t&&!i&&(null==r||r.target.scrollIntoView({block:"start"}))},[i,r,s,t]),(0,n.jsx)("div",{ref:a,className:"h-px w-full"})}var er=s(5925),ei=s(4913);let eo=new TextDecoder("utf-8");async function ed(e,t){for(let s of e){let{content:e}=JSON.parse(s);t.enqueue(e)}}async function ec(e,t){let s="";for(;;){let{value:n,done:l}=await e.read();if(l)break;s+=eo.decode(n,{stream:!0});let a=s.split(/\r\n|\n|\r/g);s=a.pop()||"",await ed(a,t)}if(s){let e=[s];await ed(e,t)}t.close()}var eu=s(62601);let em=eu.env.NEXT_PUBLIC_TABBY_SERVER_URL||"";var ef=s(94660),ex=s(74810);let eh=["_hasHydrated","setHasHydrated"],ep={_hasHydrated:!1,chats:void 0,activeChatId:(0,r.x0)()},ev=(0,ef.Ue)()((0,ex.tJ)(e=>({...ep,setHasHydrated:t=>{e({_hasHydrated:t})}}),{name:"tabby-chat-storage",partialize:e=>Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return!eh.includes(t)})),onRehydrateStorage:()=>e=>{e&&e.setHasHydrated(!0)}}));ev.getState;let eg=ev.setState,ej=e=>{eg(()=>({activeChatId:e}))},eb=(e,t)=>{let s=null!=e?e:(0,r.x0)();eg(e=>({activeChatId:s,chats:[{id:s,title:null!=t?t:"",messages:[],createdAt:new Date,userId:"",path:""},...e.chats||[]]}))},ey=e=>{eg(t=>{var s;return{activeChatId:(0,r.x0)(),chats:null===(s=t.chats)||void 0===s?void 0:s.filter(t=>t.id!==e)}})},eN=()=>{eg(()=>({activeChatId:(0,r.x0)(),chats:[]}))},ew=(e,t)=>{eg(s=>{var n;return{chats:null===(n=s.chats)||void 0===n?void 0:n.map(s=>s.id===e?{...s,messages:t}:s)}})},ek=(e,t)=>{eg(s=>{var n;return{chats:null===(n=s.chats)||void 0===n?void 0:n.map(s=>s.id===e?{...s,...t}:s)}})};var eC=s(83390),ez=s(16630);let eR=!0,eE=(e,t)=>{let s=function(){let[e,t]=l.useState(()=>!eR);return l.useEffect(function(){eR=!1,t(!0)},[]),e}(),n=e(e=>null==e?void 0:e._hasHydrated),a=e(t),[r,i]=l.useState(s&&n?a:void 0);return l.useEffect(()=>{i(a)},[a]),r},eS=()=>(0,n.jsxs)("ul",{className:"space-y-3",children:[(0,n.jsx)("li",{className:"h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700"}),(0,n.jsx)("li",{className:"h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700"}),(0,n.jsx)("li",{className:"h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700"}),(0,n.jsx)("li",{className:"h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700"})]});function eD(e){let{id:t,initialMessages:s,loading:i,className:o}=e;(0,l.useEffect)(()=>{let e=window.fetch;window.fetch=async function(t,s){var n;if("/api/chat"!==t)return e(t,s);let{messages:l}=JSON.parse(s.body),a=await e("".concat(em,"/v1beta/chat/completions"),{...s,method:"POST",headers:{"Content-Type":"application/json"}}),r=(n=void 0,(function(e){var t;let s=null===(t=e.body)||void 0===t?void 0:t.getReader();return new ReadableStream({async start(e){if(!s){e.close();return}await ec(s,e)}})})(a).pipeThrough((0,ei.T_)(n)).pipeThrough((0,ei.h6)(null==n?void 0:n.experimental_streamData)));return new ei.wn(r)}},[]);let d=eE(ev,e=>e.chats),{messages:c,append:u,reload:m,stop:f,isLoading:x,input:h,setInput:p,setMessages:v}=(0,a.R)({initialMessages:s,id:t,body:{id:t},onResponse(e){401===e.status&&er.toast.error(e.statusText)}}),[g,j]=l.useState(),b=e=>{let t=(0,ez.Z)(c,{id:e}),s=null==c?void 0:c[t-1];(null==s?void 0:s.role)==="user"&&(v(c.slice(0,t-1)),u(s))},y=e=>{let t=(0,eC.Z)(c,{id:e});t&&v(c.filter(t=>t.id!==e))},N=e=>{let t=(0,eC.Z)(c,{id:e});t&&(p(t.content),j(e))},w=async e=>{if(-1===(0,ez.Z)(d,{id:t}))eb(t,(0,r.aF)(e));else if(g){let e=(0,ez.Z)(c,{id:g});v(c.slice(0,e)),j(void 0)}await u({id:(0,r.x0)(),content:e,role:"user"})};return l.useEffect(()=>{t&&ew(t,c)},[c]),l.useEffect(()=>{let e=document.documentElement.scrollHeight;return window.scrollTo(0,e),()=>f()},[]),(0,n.jsx)("div",{className:"flex justify-center overflow-x-hidden",children:(0,n.jsxs)("div",{className:"w-full max-w-2xl px-4",children:[(0,n.jsx)("div",{className:(0,r.cn)("pb-[200px] pt-4 md:pt-10",o),children:i?(0,n.jsxs)("div",{className:"group relative mb-4 flex animate-pulse items-start md:-ml-12",children:[(0,n.jsx)("div",{className:"shrink-0",children:(0,n.jsx)("span",{className:"block h-8 w-8 rounded-md bg-gray-200 dark:bg-gray-700"})}),(0,n.jsx)("div",{className:"ml-4 flex-1 space-y-2 overflow-hidden px-1",children:(0,n.jsx)(eS,{})})]}):c.length?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(z,{messages:c,handleMessageAction:(e,t)=>{switch(t){case"edit":N(e);break;case"delete":y(e);break;case"regenerate":b(e)}}}),(0,n.jsx)(ea,{trackVisibility:x})]}):(0,n.jsx)(en,{setInput:p})}),(0,n.jsx)(et,{onSubmit:w,className:"fixed inset-x-0 bottom-0 lg:ml-[280px]",id:t,isLoading:x,stop:f,append:u,reload:m,messages:c,input:h,setInput:p})]})})}let e_=(e,t)=>{if(Array.isArray(e)&&t)return e.find(e=>e.id===t)};var eI=s(12609);let eH=l.forwardRef((e,t)=>{let{className:s,type:l,...a}=e;return(0,n.jsx)("input",{type:l,className:(0,r.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),ref:t,...a})});eH.displayName="Input";let eT=e=>{let{children:t,initialValue:s,chatId:a}=e,[r,i]=l.useState(!1),o=l.useRef(null),[d,c]=l.useState(s),u=async e=>{e.preventDefault(),(null==d?void 0:d.trim())&&(ek(a,{title:d}),i(!1))};return(0,n.jsxs)(eI.Vq,{open:r,onOpenChange:i,children:[(0,n.jsxs)(E.u,{children:[(0,n.jsx)(E.aJ,{asChild:!0,children:(0,n.jsxs)(x.z,{variant:"ghost",size:"icon",onClick:()=>i(!0),children:[(0,n.jsx)(f.yl,{}),(0,n.jsx)("span",{className:"sr-only",children:"Edit"})]})}),(0,n.jsx)(E._v,{side:"bottom",children:"Edit"})]}),(0,n.jsx)(eI.cZ,{className:"bg-background",children:(0,n.jsxs)(eI.fK,{className:"gap-3",children:[(0,n.jsx)(eI.$N,{children:"Set Chat Title"}),(0,n.jsx)(eI.Be,{asChild:!0,children:(0,n.jsxs)("form",{className:"relative",onSubmit:u,ref:o,children:[(0,n.jsx)(eH,{className:"h-10 pr-12",value:d,onChange:e=>c(e.target.value),onKeyDown:e=>{if("Enter"===e.key){var t;null===(t=o.current)||void 0===t||t.requestSubmit(),e.preventDefault()}}}),(0,n.jsx)("div",{className:"absolute right-2 top-1",children:(0,n.jsxs)(E.u,{children:[(0,n.jsx)(E.aJ,{asChild:!0,children:(0,n.jsxs)(x.z,{type:"submit",size:"icon",disabled:""===d,children:[(0,n.jsx)(f.vq,{}),(0,n.jsx)("span",{className:"sr-only",children:"Send message"})]})}),(0,n.jsx)(E._v,{children:"Edit Title"})]})})]})})]})})]})},eO=e=>{let{onClear:t,onClick:s,onBlur:a,...r}=e,[i,o]=l.useState(!1),d=()=>{o(!1)};return(0,n.jsx)(x.z,{className:"h-12 w-full justify-start",variant:"ghost",...r,onClick:e=>{i?(t(),o(!1)):o(!0),null==s||s(e)},onBlur:e=>{i&&d(),null==a||a(e)},children:i?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.NO,{}),(0,n.jsx)("span",{className:"ml-2",children:"Confirm Clear Chats"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.IT,{}),(0,n.jsx)("span",{className:"ml-2",children:"Clear Chats"})]})})},eL=e=>{let{className:t}=e,s=eE(ev,e=>e._hasHydrated),l=eE(ev,e=>e.chats),a=eE(ev,e=>e.activeChatId),o=(e,t)=>{ey(t)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:(0,r.cn)(t),children:(0,n.jsxs)("div",{className:"fixed inset-y-0 left-0 flex w-[279px] flex-col gap-2 overflow-hidden px-3 pt-16",children:[(0,n.jsx)("div",{className:"shrink-0 pb-0 pt-2",children:(0,n.jsxs)(x.z,{className:"h-12 w-full justify-start",variant:"ghost",onClick:e=>{ej((0,r.x0)())},children:[(0,n.jsx)(f.SC,{}),(0,n.jsx)("span",{className:"ml-2",children:"New Chat"})]})}),(0,n.jsx)(i.Z,{}),(0,n.jsx)("div",{className:"flex flex-1 flex-col gap-2 overflow-y-auto",children:s?(0,n.jsx)(n.Fragment,{children:null==l?void 0:l.map(e=>{let t=a===e.id;return(0,n.jsxs)("div",{onClick:t=>ej(e.id),className:(0,r.cn)("hover:bg-accent flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-zinc-900 transition-all hover:text-zinc-900  dark:text-zinc-50 hover:dark:bg-zinc-900 dark:hover:text-zinc-50",t&&"!bg-zinc-200 dark:!bg-zinc-800"),children:[(0,n.jsx)("span",{className:"truncate leading-8",children:e.title||"(Untitled)"}),t&&(0,n.jsxs)("div",{className:"flex items-center",onClick:e=>e.stopPropagation(),children:[(0,n.jsx)(eT,{initialValue:e.title,chatId:e.id}),(0,n.jsxs)(E.u,{children:[(0,n.jsx)(E.aJ,{asChild:!0,children:(0,n.jsxs)(x.z,{variant:"ghost",size:"icon",onClick:t=>o(t,e.id),children:[(0,n.jsx)(f.IT,{}),(0,n.jsx)("span",{className:"sr-only",children:"Delete"})]})}),(0,n.jsx)(E._v,{side:"bottom",children:"Delete"})]})]})]},e.id)})}):(0,n.jsx)(eS,{})}),(0,n.jsx)(i.Z,{}),(0,n.jsx)("div",{className:"shrink-0 pb-2",children:(0,n.jsx)(eO,{disabled:(null==l?void 0:l.length)===0,onClear:()=>{eN()}})})]})})})},eZ=[];function eA(){var e;let t=eE(ev,e=>e._hasHydrated),s=eE(ev,e=>e.chats),l=eE(ev,e=>e.activeChatId),a=e_(s,l);return(0,n.jsxs)("div",{className:"grid flex-1 overflow-hidden lg:grid-cols-[280px_1fr]",children:[(0,n.jsx)(eL,{className:"hidden w-[280px] border-r bg-zinc-100/40 dark:bg-zinc-800/40 lg:block"}),(0,n.jsx)(eD,{loading:!t,id:l,initialMessages:null!==(e=null==a?void 0:a.messages)&&void 0!==e?e:eZ},l)]})}},33555:function(e,t,s){"use strict";s.d(t,{q:function(){return i}});var n=s(57437);s(2265);var l=s(93023),a=s(84168),r=s(77723);function i(e){let{className:t,value:s,...i}=e,{isCopied:o,copyToClipboard:d}=(0,r.m)({timeout:2e3});return s?(0,n.jsxs)(l.z,{variant:"ghost",size:"icon",className:t,onClick:()=>{o||d(s)},...i,children:[o?(0,n.jsx)(a.NO,{}):(0,n.jsx)(a.vU,{}),(0,n.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},12609:function(e,t,s){"use strict";s.d(t,{$N:function(){return x},Be:function(){return h},Vq:function(){return o},cN:function(){return f},cZ:function(){return u},fK:function(){return m}});var n=s(57437),l=s(2265),a=s(25555),r=s(39311),i=s(84168);let o=a.fC;a.xz;let d=e=>{let{className:t,children:s,...l}=e;return(0,n.jsx)(a.h_,{className:(0,r.cn)(t),...l,children:(0,n.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center sm:items-center",children:s})})};d.displayName=a.h_.displayName;let c=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,n.jsx)(a.aV,{ref:t,className:(0,r.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",s),...l})});c.displayName=a.aV.displayName;let u=l.forwardRef((e,t)=>{let{className:s,children:l,...o}=e;return(0,n.jsxs)(d,{children:[(0,n.jsx)(c,{}),(0,n.jsxs)(a.VY,{ref:t,className:(0,r.cn)("fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-sm animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",s),...o,children:[l,(0,n.jsxs)(a.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,n.jsx)(i.bM,{}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});u.displayName=a.VY.displayName;let m=e=>{let{className:t,...s}=e;return(0,n.jsx)("div",{className:(0,r.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...s})};m.displayName="DialogHeader";let f=e=>{let{className:t,...s}=e;return(0,n.jsx)("div",{className:(0,r.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...s})};f.displayName="DialogFooter";let x=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,n.jsx)(a.Dx,{ref:t,className:(0,r.cn)("text-lg font-semibold leading-none tracking-tight",s),...l})});x.displayName=a.Dx.displayName;let h=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,n.jsx)(a.dk,{ref:t,className:(0,r.cn)("text-sm text-muted-foreground",s),...l})});h.displayName=a.dk.displayName},16775:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var n=s(57437),l=s(2265),a=s(26823),r=s(39311);let i=l.forwardRef((e,t)=>{let{className:s,orientation:l="horizontal",decorative:i=!0,...o}=e;return(0,n.jsx)(a.f,{ref:t,decorative:i,orientation:l,className:(0,r.cn)("shrink-0 bg-border","horizontal"===l?"h-[1px] w-full":"h-full w-[1px]",s),...o})});i.displayName=a.f.displayName},95482:function(e,t,s){"use strict";s.d(t,{_v:function(){return c},aJ:function(){return d},pn:function(){return i},u:function(){return o}});var n=s(57437),l=s(2265),a=s(75224),r=s(39311);let i=a.zt,o=a.fC,d=a.xz,c=l.forwardRef((e,t)=>{let{className:s,sideOffset:l=4,...i}=e;return(0,n.jsx)(a.VY,{ref:t,sideOffset:l,className:(0,r.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",s),...i})});c.displayName=a.VY.displayName},77723:function(e,t,s){"use strict";s.d(t,{m:function(){return l}});var n=s(2265);function l(e){let{timeout:t=2e3}=e,[s,l]=n.useState(!1);return{isCopied:s,copyToClipboard:e=>{var s;(null===(s=navigator.clipboard)||void 0===s?void 0:s.writeText)&&e&&navigator.clipboard.writeText(e).then(()=>{l(!0),setTimeout(()=>{l(!1)},t)})}}}}},function(e){e.O(0,[882,845,892,286,899,967,971,864,744],function(){return e(e.s=24283)}),_N_E=e.O()}]);