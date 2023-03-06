"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6862],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),o=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=o(e.components);return a.createElement(m.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=o(r),N=n,g=k["".concat(m,".").concat(N)]||k[N]||s[N]||i;return r?a.createElement(g,l(l({ref:t},d),{},{components:r})):a.createElement(g,l({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=N;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[k]="string"==typeof e?e:n,l[1]=p;for(var o=2;o<i;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}N.displayName="MDXCreateElement"},5660:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_label:"Game Server Onchain Services",sidebar_position:2},l="**Reward Utility Token & Mint Item**",p={unversionedId:"game-server/game-server-onchain-services",id:"game-server/game-server-onchain-services",title:"**Reward Utility Token & Mint Item**",description:"API Reward Utility Token",source:"@site/docs/game-server/game-server-onchain-services.md",sourceDirName:"game-server",slug:"/game-server/game-server-onchain-services",permalink:"/docs/game-server/game-server-onchain-services",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/game-server/game-server-onchain-services.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Game Server Onchain Services",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Game Server Webhook",permalink:"/docs/game-server/game-server-webhook"},next:{title:"Partner Webhook",permalink:"/docs/game-server/partner-webhook"}},m={},o=[{value:"<strong>API Reward Utility Token</strong>",id:"api-reward-utility-token",level:2},{value:"<strong>API Mint Item</strong>",id:"api-mint-item",level:2}],d={toc:o},k="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(k,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reward-utility-token--mint-item"},(0,n.kt)("strong",{parentName:"h1"},"Reward Utility Token & Mint Item")),(0,n.kt)("h2",{id:"api-reward-utility-token"},(0,n.kt)("strong",{parentName:"h2"},"API Reward Utility Token")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Version: ",(0,n.kt)("inlineCode",{parentName:"p"},"1"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Endpoint: ",(0,n.kt)("inlineCode",{parentName:"p"},"/v1/utility-token"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Method: ",(0,n.kt)("inlineCode",{parentName:"p"},"POST"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Authorization: none")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Params:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Require?"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"user")),(0,n.kt)("td",{parentName:"tr",align:"center"},"[x]"),(0,n.kt)("td",{parentName:"tr",align:"right"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"right"},"Wallet address of user")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"amount")),(0,n.kt)("td",{parentName:"tr",align:"center"},"[x]"),(0,n.kt)("td",{parentName:"tr",align:"right"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"right"},"Amount reward for user"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Response: ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON Object")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"error_code")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"Number")),(0,n.kt)("td",{parentName:"tr",align:"right"},"Error code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"message")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"right"},"Response message")))))),(0,n.kt)("h2",{id:"api-mint-item"},(0,n.kt)("strong",{parentName:"h2"},"API Mint Item")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Version: ",(0,n.kt)("inlineCode",{parentName:"p"},"1"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Endpoint: ",(0,n.kt)("inlineCode",{parentName:"p"},"/v1/item"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Method: ",(0,n.kt)("inlineCode",{parentName:"p"},"POST"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Authorization: none")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Params:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Require?"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"type")),(0,n.kt)("td",{parentName:"tr",align:"center"},"[x]"),(0,n.kt)("td",{parentName:"tr",align:"right"},(0,n.kt)("inlineCode",{parentName:"td"},"Enum(0,1,2)")),(0,n.kt)("td",{parentName:"tr",align:"right"},"0: ChainVerse Item, 1: Developer Item, 2: Game Item")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"category_id")),(0,n.kt)("td",{parentName:"tr",align:"center"},"[x]"),(0,n.kt)("td",{parentName:"tr",align:"right"},(0,n.kt)("inlineCode",{parentName:"td"},"int")),(0,n.kt)("td",{parentName:"tr",align:"right"},"Category of item - for ChainVerseItem, rest: 0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"player_address")),(0,n.kt)("td",{parentName:"tr",align:"center"},"[x]"),(0,n.kt)("td",{parentName:"tr",align:"right"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"right"},"Wallet address of user")))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Response: ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON Object")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"error_code")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"Number")),(0,n.kt)("td",{parentName:"tr",align:"right"},"Error code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"message")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"right"},"Response message")))))))}s.isMDXComponent=!0}}]);