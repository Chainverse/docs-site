"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,m=d["".concat(s,".").concat(p)]||d[p]||g[p]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"Getting Started",sidebar_position:1},o="Chainverse SDK",c={unversionedId:"sdk/getting-started",id:"sdk/getting-started",title:"Chainverse SDK",description:"Docusaurus logo",source:"@site/docs/sdk/getting-started.md",sourceDirName:"sdk",slug:"/sdk/getting-started",permalink:"/docs/sdk/getting-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/sdk/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Getting Started",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ChainVerse Introduction",permalink:"/docs/intro"},next:{title:"Release Note",permalink:"/docs/sdk/release-note"}},s={},l=[{value:"M\xf4 h\xecnh Chainverse SDK",id:"m\xf4-h\xecnh-chainverse-sdk",level:2},{value:"Sequence Diagram Flow SDK",id:"sequence-diagram-flow-sdk",level:3},{value:"Sequence Diagram Move &amp; Transfer Item NFT gi\u1eefa c\xe1c game v\u1edbi nhau",id:"sequence-diagram-move--transfer-item-nft-gi\u1eefa-c\xe1c-game-v\u1edbi-nhau",level:3}],u={toc:l},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chainverse-sdk"},"Chainverse SDK"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.chainverse.org/img/chainverse.png",alt:"Docusaurus logo"})),(0,a.kt)("p",null,"\u0110\u01a1n gi\u1ea3n ho\xe1 t\xedch h\u1ee3p Blokchain v\xe0o game c\u1ee7a b\u1ea1n v\u1edbi Chainverse SDK. "),(0,a.kt)("p",null,"Chainverse Native SDK s\u1eed d\u1ee5ng c\xe1c API v\xe0 t\u1ed1i \u01b0u h\xf3a d\xe0nh ri\xeang cho h\u1ec7 \u0111i\u1ec1u h\xe0nh \u0111\u1ec3 mang l\u1ea1i tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\xf9ng t\u1ed1t h\u01a1n. Ch\xfang ch\u1ee9a ch\u1ee9c n\u0103ng c\u1ed1t l\xf5i \u0111\u1ec3 t\xedch h\u1ee3p v\xe0o game nhanh ch\xf3ng h\u01a1n bao g\u1ed3m c\xe1c ch\u1ee9c n\u0103ng ch\xednh: K\u1ebft n\u1ed1i v\u1edbi v\xed Blockchain (Chainverse) v\xe0 trao \u0111\u1ed5i item NFT. "),(0,a.kt)("h2",{id:"m\xf4-h\xecnh-chainverse-sdk"},"M\xf4 h\xecnh Chainverse SDK"),(0,a.kt)("h3",{id:"sequence-diagram-flow-sdk"},"Sequence Diagram Flow SDK"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://gblobscdn.gitbook.com/assets%2F-MfegUcnHBLzXgHaEQpA%2F-MfeiNnnfjqea_AfGmtY%2F-MfemVicwlXwEXbOG_HR%2Fcv1.jpg?alt=media&token=51652a27-807a-464d-bf0d-01d883c641b6",alt:"Docusaurus logo"})),(0,a.kt)("h3",{id:"sequence-diagram-move--transfer-item-nft-gi\u1eefa-c\xe1c-game-v\u1edbi-nhau"},"Sequence Diagram Move & Transfer Item NFT gi\u1eefa c\xe1c game v\u1edbi nhau"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://gblobscdn.gitbook.com/assets%2F-MfegUcnHBLzXgHaEQpA%2F-MfeiNnnfjqea_AfGmtY%2F-MfemkBnwJ-UhkunG7OT%2Fcv2.jpg?alt=media&token=7f403309-3062-479f-ac14-e6c0a1113c81",alt:"Docusaurus logo"})))}g.isMDXComponent=!0}}]);