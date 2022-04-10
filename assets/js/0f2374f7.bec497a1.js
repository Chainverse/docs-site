"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4116],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return h}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),s=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),h=a,u=d["".concat(i,".").concat(h)]||d[h]||m[h]||o;return r?t.createElement(u,p(p({ref:n},l),{},{components:r})):t.createElement(u,p({ref:n},l))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=r[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4268:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),p=["components"],c={sidebar_label:"Market Place Service",sidebar_position:1},i="Market Place",s={unversionedId:"sdk/android/services/market-place",id:"sdk/android/services/market-place",isDocsHomePage:!1,title:"Market Place",description:"1. H\xe0m buyNFT",source:"@site/docs/sdk/android/services/market-place.md",sourceDirName:"sdk/android/services",slug:"/sdk/android/services/market-place",permalink:"/docs/sdk/android/services/market-place",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/sdk/android/services/market-place.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Market Place Service",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Items",permalink:"/docs/sdk/android/items"},next:{title:"T\u1ed5ng Quan",permalink:"/docs/sdk/ios/over-view"}},l=[{value:"1. H\xe0m buyNFT",id:"1-h\xe0m-buynft",children:[]},{value:"2. H\xe0m sellNFT",id:"2-h\xe0m-sellnft",children:[]},{value:"3. H\xe0m isApproved (Token)",id:"3-h\xe0m-isapproved-token",children:[]},{value:"4. H\xe0m isApproved (NFT)",id:"4-h\xe0m-isapproved-nft",children:[]},{value:"5. H\xe0m approveToken",id:"5-h\xe0m-approvetoken",children:[]},{value:"6. H\xe0m approveNFT",id:"6-h\xe0m-approvenft",children:[]}],m={toc:l};function d(e){var n=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"market-place"},"Market Place"),(0,o.kt)("h2",{id:"1-h\xe0m-buynft"},"1. H\xe0m buyNFT"),(0,o.kt)("p",null,"H\xe0m n\xe0y s\u1eed d\u1ee5ng \u0111\u1ec3 mua item \u0111ang b\xe1n tr\xean ch\u1ee3. H\xe0m n\xe0y tr\u1ea3 v\u1ec1 transaction hash. Th\xf4ng tin transaction hash c\u0169ng s\u1ebd \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 qua callback ",(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/android/over-view#10-callback-ontransact"},"onTransact"),"\n(Khuy\u1ebfn kh\xedch x\u1eed l\xfd logic trong h\xe0m n\xe0y)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Ch\xfa \xfd"),": N\u1ebfu b\u1ea1n mua b\u1eb1ng token, b\u1ea1n c\u1ea7n ph\u1ea3i ki\u1ec3m tra s\u1ed1 l\u01b0\u1ee3ng token \u0111\xe3 approve cho ch\u1ee3 b\u1eb1ng h\xe0m ",(0,o.kt)("a",{parentName:"p",href:"#3-h%C3%A0m-isapproved-token"},"isApproved (Token)"),".\ns\u1eed d\u1ee5ng h\xe0m ",(0,o.kt)("a",{parentName:"p",href:"#6-h%C3%A0m-approvenft"},"approveNFT")," \u0111\u1ec3 approve token."),(0,o.kt)("p",null,"N\u1ebfu kh\xf4ng approve token tr\u01b0\u1edbc khi mua, b\u1ea1n c\xf3 th\u1ec3 s\u1ebd g\u1eb7p l\u1ed7i sau: ",(0,o.kt)("strong",{parentName:"p"},"execution reverted: ERC20: transfer amount exceeds allowance")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/**\n * buyNFT\n * @param currency\n * @param listingId\n * @param price\n * return String\n */\nChainverseSDK.getInstance().buyNFT(String currency, BigInteger listingId, double price);\n")),(0,o.kt)("h2",{id:"2-h\xe0m-sellnft"},"2. H\xe0m sellNFT"),(0,o.kt)("p",null,"H\xe0m n\xe0y s\u1eed d\u1ee5ng \u0111\u1ec3 b\xe1n item l\xean ch\u1ee3. H\xe0m n\xe0y tr\u1ea3 v\u1ec1 transaction hash. Th\xf4ng tin transaction hash c\u0169ng s\u1ebd \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 qua callback ",(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/android/over-view#10-callback-ontransact"},"onTransact"),"\n(Khuy\u1ebfn kh\xedch x\u1eed l\xfd logic trong h\xe0m n\xe0y)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Ch\xfa \xfd"),": N\u1ebfu b\u1ea1n mu\u1ed1n b\xe1n item l\xean ch\u1ee3, b\u1ea1n c\u1ea7n ph\u1ea3i ki\u1ec3m tra item \u0111\xf3 \u0111\xe3 \u0111\u01b0\u1ee3c approved cho ch\u1ee3 hay ch\u01b0a b\u1eb1ng h\xe0m ",(0,o.kt)("a",{parentName:"p",href:"#4-h%C3%A0m-isapproved-nft"},"isApproved (NFT)"),".\nS\u1eed d\u1ee5ng h\xe0m ",(0,o.kt)("a",{parentName:"p",href:"#6-h%C3%A0m-approvenft"},"approveNFT")," \u0111\u1ec3 approve item."),(0,o.kt)("p",null,"N\u1ebfu kh\xf4ng approve item tr\u01b0\u1edbc khi b\xe1n, b\u1ea1n c\xf3 th\u1ec3 s\u1ebd g\u1eb7p l\u1ed7i sau: ",(0,o.kt)("strong",{parentName:"p"},"execution reverted: ERC721: transfer caller is not owner nor approved")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/**\n * sellNFT\n * @param nft\n * @param tokenId\n * @param price\n * @param currency\n * return String\n */\nChainverseSDK.getInstance().sellNFT(String nft, BigInteger tokenId, double price, String currency);\n")),(0,o.kt)("h2",{id:"3-h\xe0m-isapproved-token"},"3. H\xe0m isApproved (Token)"),(0,o.kt)("p",null,"H\xe0m n\xe0y s\u1eed d\u1ee5ng \u0111\u1ec3 l\u1ea5y s\u1ed1 l\u01b0\u1ee3ng token m\xe0 b\u1ea1n \u0111\xe3 approved cho m\u1ed9t \u0111\u1ecba ch\u1ec9 n\xe0o \u0111\xf3. Th\xf4ng tin transaction hash c\u0169ng s\u1ebd \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 qua callback ",(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/android/over-view#10-callback-ontransact"},"onTransact"),"\n(Khuy\u1ebfn kh\xedch x\u1eed l\xfd logic trong h\xe0m n\xe0y)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Ch\xfa \xfd"),": Tr\u01b0\u1edbc khi mu\u1ed1n mua item tr\xean ch\u1ee3, b\u1ea1n c\u1ea7n ph\u1ea3i approve m\u1ed9t l\u01b0\u1ee3ng token (",(0,o.kt)("strong",{parentName:"p"},"kh\xf4ng nh\u1ecf h\u01a1n gi\xe1 tr\u1ecb c\u1ee7a item"),") cho ch\u1ee3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/**\n * isApproved\n * @param token //\u0111\u1ecba ch\u1ec9 token\n * @param owner // \u0111\u1ecba ch\u1ec9 ch\u1ee7 s\u1edf h\u1eefu\n * @param spender // \u0111\u1ecba ch\u1ec9 \u0111\xe3 \u0111\u01b0\u1ee3c approved\n * return BigInteger\n */\nChainverseSDK.getInstance().isApproved(String token, String owner, String spender);\n")),(0,o.kt)("h2",{id:"4-h\xe0m-isapproved-nft"},"4. H\xe0m isApproved (NFT)"),(0,o.kt)("p",null,"H\xe0m n\xe0y s\u1eed d\u1ee5ng \u0111\u1ec3 ki\u1ec3m tra item b\u1ea1n mu\u1ed1n b\xe1n \u0111\xe3 \u0111\u01b0\u1ee3c approved cho ch\u1ee3 ch\u01b0a."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Ch\xfa \xfd"),": Tr\u01b0\u1edbc khi mu\u1ed1n b\xe1n item, b\u1ea1n ph\u1ea3i approve item \u0111\xf3 cho ch\u1ee3."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/**\n * isApproved\n * @param nft\n * @param tokenId\n * return boolean\n */\nChainverseSDK.getInstance().isApproved(String nft, BigInteger tokenId);\n")),(0,o.kt)("h2",{id:"5-h\xe0m-approvetoken"},"5. H\xe0m approveToken"),(0,o.kt)("p",null,"H\xe0m n\xe0y s\u1eed d\u1ee5ng \u0111\u1ec3 approve token cho m\u1ed9t \u0111\u1ecba ch\u1ec9. H\xe0m n\xe0y tr\u1ea3 v\u1ec1 transaction hash. Th\xf4ng tin transaction hash c\u0169ng s\u1ebd \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 qua callback ",(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/android/over-view#10-callback-ontransact"},"onTransact"),"\n(Khuy\u1ebfn kh\xedch x\u1eed l\xfd logic trong h\xe0m n\xe0y)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/**\n * approveToken\n * @param token // \u0111\u1ecba ch\u1ec9 token\n * @param spender // \u0111\u1ecba ch\u1ec9 s\u1ebd \u0111\u01b0\u1ee3c approved\n * @param amount // s\u1ed1 l\u01b0\u1ee3ng\n * return String\n */\nChainverseSDK.getInstance().approveToken(String token, String spender, double amount);\n")),(0,o.kt)("h2",{id:"6-h\xe0m-approvenft"},"6. H\xe0m approveNFT"),(0,o.kt)("p",null,"H\xe0m n\xe0y s\u1eed d\u1ee5ng \u0111\u1ec3 approve item b\u1ea1n mu\u1ed1n b\xe1n cho ch\u1ee3. H\xe0m n\xe0y tr\u1ea3 v\u1ec1 transaction hash. Th\xf4ng tin transaction hash c\u0169ng s\u1ebd \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 qua callback ",(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/android/over-view#10-callback-ontransact"},"onTransact"),"\n(Khuy\u1ebfn kh\xedch x\u1eed l\xfd logic trong h\xe0m n\xe0y)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/**\n * approveNFT\n * @param nft\n * @param tokenId\n * return String\n */\nChainverseSDK.getInstance().approveNFT(String nft, BigInteger tokenId);\n")))}d.isMDXComponent=!0}}]);