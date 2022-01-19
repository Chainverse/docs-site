"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[569],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=i,p=m["".concat(s,".").concat(f)]||m[f]||d[f]||a;return n?r.createElement(p,o(o({ref:t},c),{},{components:n})):r.createElement(p,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7294),i=n(9443);var a=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var d=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,d=e.values,m=e.groupId,f=e.className,p=a(),v=p.tabGroupChoices,b=p.setTabGroupChoices,g=(0,r.useState)(i),y=g[0],k=g[1],h=r.Children.toArray(e.children),O=[];if(null!=m){var w=v[m];null!=w&&w!==y&&d.some((function(e){return e.value===w}))&&k(w)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),r=d[n].value;k(r),null!=m&&(b(m,r),setTimeout((function(){var e,n,r,i,a,o,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,i=e.bottom,a=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&a<=u&&i<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},I=function(e){var t,n;switch(e.keyCode){case c:var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case u:var i=O.indexOf(e.target)-1;n=O[i]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},4768:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=n(5064),l=n(8215),s=["components"],u={sidebar_label:"Items",sidebar_position:3},c="V\xed",d={unversionedId:"sdk/ios/items",id:"sdk/ios/items",isDocsHomePage:!1,title:"V\xed",description:"1. H\xe0m getItems",source:"@site/docs/sdk/ios/items.md",sourceDirName:"sdk/ios",slug:"/sdk/ios/items",permalink:"/docs/sdk/ios/items",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/sdk/ios/items.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Items",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"V\xed",permalink:"/docs/sdk/ios/wallet"},next:{title:"SDK - API",permalink:"/docs/api/sdk-api"}},m=[{value:"1. H\xe0m getItems",id:"1-h\xe0m-getitems",children:[]}],f={toc:m};function p(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"v\xed"},"V\xed"),(0,a.kt)("h2",{id:"1-h\xe0m-getitems"},"1. H\xe0m getItems"),(0,a.kt)("p",null,"S\u1eed d\u1ee5ng h\xe0m n\xe0y \u0111\u1ec3 l\u1ea5y danh s\xe1ch ITEM c\u1ee7a user. Th\xf4ng tin s\u1ebd \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 qua callback  didGetItems"),(0,a.kt)(o.Z,{defaultValue:"1",groupId:"operating-systems",values:[{label:"Object C",value:"1"},{label:"Swift",value:"2"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"1",mdxType:"TabItem"},(0,a.kt)("div",{style:{width:"100%",backgroundColor:"#e6ecf5",padding:10,paddingLeft:20,borderRadius:7}},(0,a.kt)("div",null,"[[ChainverseSDK shared] getItems];"),(0,a.kt)("h1",null),(0,a.kt)("div",null,"//Callback delegate"),(0,a.kt)("div",null,"- (void)didGetItems:(NSMutableArray *)items{"),(0,a.kt)("div",null,"\u2003\u2003\u2003\u2003\u2003","for(ChainverseItem *itemx in items){"),(0,a.kt)("div",null,"\u2003\u2003\u2003\u2003\u2003\u2003\u2003",'NSLog(@"TAG %@",itemx.game_address);'),(0,a.kt)("div",null,"\u2003\u2003\u2003\u2003\u2003","}"),(0,a.kt)("div",null,"}"))),(0,a.kt)(l.Z,{value:"2",mdxType:"TabItem"},(0,a.kt)("div",{style:{width:"100%",backgroundColor:"#e6ecf5",padding:10,paddingLeft:20,borderRadius:7}},(0,a.kt)("div",null,"ChainverseSDK.shared().getItems()"),(0,a.kt)("h1",null),(0,a.kt)("div",null,"//Callback delegate"),(0,a.kt)("div",null,"func didGetItems(_ items: NSMutableArray!) {"),(0,a.kt)("h1",null),(0,a.kt)("div",null,"}")))))}p.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);