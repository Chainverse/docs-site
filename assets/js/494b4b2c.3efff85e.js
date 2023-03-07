"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8714],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7561:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_label:"Quick Demo",sidebar_position:2},a="Quick Demo",p={unversionedId:"ramp/partner/quick-demo",id:"ramp/partner/quick-demo",title:"Quick Demo",description:"Make sure you have completed our registration form for partner service before proceeding further.",source:"@site/docs/ramp/partner/quick-demo.md",sourceDirName:"ramp/partner",slug:"/ramp/partner/quick-demo",permalink:"/docs/ramp/partner/quick-demo",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ramp/partner/quick-demo.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Quick Demo",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Integration",permalink:"/docs/ramp/partner/integration"},next:{title:"On-ramp",permalink:"/docs/ramp/partner/query_param/on_ramp"}},c={},u=[{value:"Overview",id:"overview",level:3}],l={toc:u},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-demo"},"Quick Demo"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Make sure you have completed our registration form for partner service before proceeding further.")),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Now you should have the ",(0,o.kt)("inlineCode",{parentName:"p"},"partner code")," to generate a URL for our staging environment."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://widget.dev.chainverse.xyz/buy?partnerCode=%5BYOUR_PARTNER_CODE%5D"},"https://widget.dev.chainverse.xyz/buy?partnerCode=[YOUR_PARTNER_CODE]")),(0,o.kt)("p",null,"We offer our partners with a ",(0,o.kt)("strong",{parentName:"p"},"Fee Commission"),", which is either a fixed amount or a percentage, and it is initially set at 0. This fee is charged to your users. If you want to include this fee configuration into the widget, please contact us directly."),(0,o.kt)("p",null,"Any updates made to the Fee Commission will be reflected in the fee calculation shown below:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/buy_estimate.png",alt:"Buy Estimate",width:"400"}),(0,o.kt)("figcaption",null,"Estimate Screen")),(0,o.kt)("hr",null),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/buy_payment.png",alt:"Buy Payment",width:"400"}),(0,o.kt)("figcaption",null,"Payment Screen")),(0,o.kt)("p",null,"You have the option to hide this fee commission in the widget by utilizing the ",(0,o.kt)("inlineCode",{parentName:"p"},"isFeePartnerHidden")," parameter."),(0,o.kt)("p",null,"Great! Now you can explore the ChainVerse widget and try out the default user flow provided by us."))}m.isMDXComponent=!0}}]);