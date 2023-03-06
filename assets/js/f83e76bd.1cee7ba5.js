"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=r,u=m["".concat(o,".").concat(g)]||m[g]||p[g]||i;return n?a.createElement(u,s(s({ref:t},d),{},{components:n})):a.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5162:(e,t,n)=>{n(7294)},5488:(e,t,n)=>{n(7294),n(2389)},4768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));n(5488),n(5162);const i={sidebar_label:"Items",sidebar_position:3},s="V\xed",l={unversionedId:"sdk/ios/items",id:"sdk/ios/items",title:"V\xed",description:"1. H\xe0m getListItemOnMarket",source:"@site/docs/sdk/ios/items.md",sourceDirName:"sdk/ios",slug:"/sdk/ios/items",permalink:"/docs/sdk/ios/items",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/sdk/ios/items.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Items",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"V\xed",permalink:"/docs/sdk/ios/wallet"},next:{title:"Market Place",permalink:"/docs/sdk/ios/market-place"}},o={},c=[{value:"1. H\xe0m getListItemOnMarket",id:"1-h\xe0m-getlistitemonmarket",level:2},{value:"2. H\xe0m getMyAsset",id:"2-h\xe0m-getmyasset",level:2},{value:"3. H\xe0m getDetailNFT",id:"3-h\xe0m-getdetailnft",level:2},{value:"4. H\xe0m getNFT",id:"4-h\xe0m-getnft",level:2},{value:"5. H\xe0m transferItem",id:"5-h\xe0m-transferitem",level:2}],d={toc:c},m="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"v\xed"},"V\xed"),(0,r.kt)("h2",{id:"1-h\xe0m-getlistitemonmarket"},"1. H\xe0m getListItemOnMarket"),(0,r.kt)("p",null,"S\u1eed d\u1ee5ng h\xe0m n\xe0y \u0111\u1ec3 l\u1ea5y danh s\xe1ch ITEM c\u1ee7a game \u0111ang b\xe1n tr\xean ch\u1ee3. Th\xf4ng tin s\u1ebd \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 qua callback ",(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/ios/over-view#5-callback-didgetlistitemmarket"},"didGetListItemMarket"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/*\n getListItemOnMarket: H\xe0m n\xe0y s\u1eed d\u1ee5ng \u0111\u1ec3 l\u1ea5y danh s\xe1ch NFT \u0111ang \u0111\u01b0\u1ee3c b\xe1n tr\xean ch\u1ee3\n @param NSInteger page\n @param NSInteger pageSize\n */\n[[ChainverseSDK shared] getListItemOnMarket:page pageSize:pageSize];\n\n//Callback delegate\n- (void)didGetListItemMarket:(NSMutableArray<NFT> *) items{\n    \n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus logo",src:n(8396).Z,width:"761",height:"292"})),(0,r.kt)("h2",{id:"2-h\xe0m-getmyasset"},"2. H\xe0m getMyAsset"),(0,r.kt)("p",null,"S\u1eed d\u1ee5ng h\xe0m n\xe0y \u0111\u1ec3 l\u1ea5y danh s\xe1ch item user \u0111ang s\u1edf h\u1eefu (K\u1ec3 c\u1ea3 \u0111ang \u0111\u01b0\u1ee3c b\xe1n tr\xean ch\u1ee3). Th\xf4ng tin s\u1ebd \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 qua callback ",(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/ios/over-view#7-callback-didgetmyassets"},"didGetMyAssets"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[[ChainverseSDK shared] getMyAsset];\n\n//Callback delegate\n- (void)didGetMyAssets:(NSMutableArray<NFT> *) items{\n   \n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus logo",src:n(8530).Z,width:"761",height:"292"})),(0,r.kt)("h2",{id:"3-h\xe0m-getdetailnft"},"3. H\xe0m getDetailNFT"),(0,r.kt)("p",null,"S\u1eed d\u1ee5ng h\xe0m n\xe0y \u0111\u1ec3 l\u1ea5y th\xf4ng tin chi ti\u1ebft c\u1ee7a 1 item (Th\xf4ng tin n\xe0y l\xe0 Off chain). Th\xf4ng tin s\u1ebd \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 qua callback ",(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/ios/over-view#6-callback-didgetdetailitem"},"didGetDetailItem"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'//*\n getDetailNFT: H\xe0m n\xe0y s\u1eed d\u1ee5ng \u0111\u1ec3 l\u1ea5y th\xf4ng tin chi ti\u1ebft c\u1ee7a m\u1ed9t NFT (d\u1eef li\u1ec7u offchain)\n @param NSString nft\n @param NSInteger tokenId\n */\n[[ChainverseSDK shared] getDetailNFT:@"nft" tokenId:tokenId];\n\n//Callback delegate\n- (void)didGetDetailItem:(NFT*)item{\n   \n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus logo",src:n(6658).Z,width:"761",height:"292"})),(0,r.kt)("h2",{id:"4-h\xe0m-getnft"},"4. H\xe0m getNFT"),(0,r.kt)("p",null,"S\u1eed d\u1ee5ng h\xe0m n\xe0y \u0111\u1ec3 l\u1ea5y th\xf4ng tin item tr\xean blockchain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/*\n getNFT: H\xe0m n\xe0y s\u1eed d\u1ee5ng \u0111\u1ec3 l\u1ea5y th\xf4ng tin chi ti\u1ebft c\u1ee7a m\u1ed9t NFT (d\u1eef li\u1ec7u onchain)\n @param NSString nft\n @param NSInteger tokenId\n */\n[[ChainverseSDK shared] getNFT:nft tokenId:tokenId complete:^(NFT *item){\n    //X\u1eed l\xfd \u1edf \u0111\xe2y    \n        \n}];\n\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus logo",src:n(5555).Z,width:"761",height:"292"})),(0,r.kt)("h2",{id:"5-h\xe0m-transferitem"},"5. H\xe0m transferItem"),(0,r.kt)("p",null,"S\u1eed d\u1ee5ng h\xe0m n\xe0y \u0111\u1ec3 chuy\u1ec3n item sang \u0111\u1ecba ch\u1ec9 v\xed kh\xe1c. Th\xf4ng tin transaction hash c\u0169ng s\u1ebd \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 qua callback ",(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/ios/over-view#9-callback-didtransact"},"onTransact")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'/*\n transferItem: H\xe0m n\xe0y s\u1eed d\u1ee5ng \u0111\u1ec3 chuy\u1ec3n NFT sang \u0111\u1ecba ch\u1ec9 kh\xe1c\n @param NSString to\n @param NSString nft\n @param NSInteger tokenId\n */\n[[ChainverseSDK shared] transferItem:@"to" nft:@"nft" tokenId:tokenId];\n')))}p.isMDXComponent=!0},6658:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/get-detail-74beff52fb2edff16c314147696fc9dc.png"},8396:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/get-item-on-market-aedb7b8a78e3cb62fb8ff703fddb5526.png"},8530:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/get-my-assets-7ab0af1279e6937aaf1f42bc6c93b191.png"},5555:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/get-nft-432d3bbdfcb81745424a13391e6f442a.png"}}]);