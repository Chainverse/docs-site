"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[977],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,k=p["".concat(l,".").concat(u)]||p[u]||h[u]||a;return t?i.createElement(k,c(c({ref:n},d),{},{components:t})):i.createElement(k,c({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<a;s++)c[s]=t[s];return i.createElement.apply(null,c)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9860:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),c=["components"],o={sidebar_label:"Android",sidebar_position:4},l="Chainverse SDK for Android",s={unversionedId:"sdk/android",id:"sdk/android",isDocsHomePage:!1,title:"Chainverse SDK for Android",description:"Installation",source:"@site/docs/sdk/android.md",sourceDirName:"sdk",slug:"/sdk/android",permalink:"/docs/sdk/android",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/sdk/android.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Android",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Error Codes",permalink:"/docs/sdk/error-codes"},next:{title:"iOS",permalink:"/docs/sdk/ios"}},d=[{value:"Installation",id:"installation",children:[{value:"C\xe0i \u0111\u1eb7t Chainverse SDK qua Gralde.",id:"c\xe0i-\u0111\u1eb7t-chainverse-sdk-qua-gralde",children:[]},{value:"Config trong file AndroidManifest.xml",id:"config-trong-file-androidmanifestxml",children:[]}]},{value:"T\xedch h\u1ee3p SDK",id:"t\xedch-h\u1ee3p-sdk",children:[{value:"Tr\u01b0\u1edbc khi b\u1eaft \u0111\u1ea7u",id:"tr\u01b0\u1edbc-khi-b\u1eaft-\u0111\u1ea7u",children:[]},{value:"Kh\u1edfi t\u1ea1o Chainverse SDK",id:"kh\u1edfi-t\u1ea1o-chainverse-sdk",children:[]}]},{value:"Functions",id:"functions",children:[{value:"C\xe1c h\xe0m API",id:"c\xe1c-h\xe0m-api",children:[]}]},{value:"License",id:"license",children:[]}],h={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,i.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chainverse-sdk-for-android"},"Chainverse SDK for Android"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"c\xe0i-\u0111\u1eb7t-chainverse-sdk-qua-gralde"},"C\xe0i \u0111\u1eb7t Chainverse SDK qua Gralde."),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-1-khai-b\xe1o-repository"},"B\u01b0\u1edbc 1: Khai b\xe1o repository"),(0,a.kt)("p",null,"Khai b\xe1o jitpack \u1edf file build.gralde (project)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'maven {\n            url "https://jitpack.io"\n            credentials { username "jp_l28krc7a5uel5l48doj354csk9" }\n        }\n')),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-2-khai-b\xe1o-dependencies"},"B\u01b0\u1edbc 2: Khai b\xe1o dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"implementation 'com.github.gmogame:chainversesdk:alpha-1.0.18'\n")),(0,a.kt)("h3",{id:"config-trong-file-androidmanifestxml"},"Config trong file AndroidManifest.xml"),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-1-khai-b\xe1o-permission"},"B\u01b0\u1edbc 1: Khai b\xe1o permission"),(0,a.kt)("p",null,"Khai b\xe1o quy\u1ec1n s\u1eed d\u1ee5ng Internet. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<uses-permission android:name="android.permission.INTERNET" />\n')),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-2-khai-b\xe1o-deeplink"},"B\u01b0\u1edbc 2: Khai b\xe1o deeplink"),(0,a.kt)("p",null,"Khai b\xe1o callback deeplink (trong tag activity) \u0111\u1ec3 v\xed Chainverse m\u1edf l\u1ea1i app (Khi connect v\xed).\n{your-app-scheme} : Khai b\xe1o app scheme"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<activity\n            android:name=".MainActivity"\n            android:label="@string/app_name"\n            android:screenOrientation="portrait"\n            android:launchMode="singleTask"\n            android:theme="@style/Theme.AppCompat.NoActionBar">\n            <intent-filter>\n                <action android:name="android.intent.action.MAIN" />\n                <category android:name="android.intent.category.LAUNCHER" />\n            </intent-filter>\n\n            <intent-filter android:autoVerify="true">\n                <category android:name="android.intent.category.DEFAULT" />\n                <category android:name="android.intent.category.BROWSABLE" />\n                <action android:name="android.intent.action.VIEW" />\n                <data android:scheme="{your-app-scheme}"/>\n            </intent-filter>\n        </activity>\n')),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-3-khai-b\xe1o--chainverseacitivty"},"B\u01b0\u1edbc 3: Khai b\xe1o  ChainverseAcitivty"),(0,a.kt)("p",null,"\u0110\u1ec3 s\u1eed d\u1ee5ng giao di\u1ec7n c\u1ee7a SDK "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<activity\n            android:name="com.chainverse.sdk.ui.ChainverseSDKActivity"\n            android:configChanges="orientation|keyboardHidden|screenSize|locale"\n            android:theme="@style/ChainverseSDKTheme"\n            android:windowSoftInputMode="adjustResize"/>\n')),(0,a.kt)("h2",{id:"t\xedch-h\u1ee3p-sdk"},"T\xedch h\u1ee3p SDK"),(0,a.kt)("h3",{id:"tr\u01b0\u1edbc-khi-b\u1eaft-\u0111\u1ea7u"},"Tr\u01b0\u1edbc khi b\u1eaft \u0111\u1ea7u"),(0,a.kt)("p",null,"B\u1ea1n ph\u1ea3i c\xe0i \u0111\u1eb7t Chainverse SDK (xem H\u01b0\u1edbng d\u1eabn)."),(0,a.kt)("p",null,"T\xe0i li\u1ec7u n\xe0y ch\u1ee9a c\xe1c tham s\u1ed1 b\u1eaft bu\u1ed9c. B\u1ea1n ph\u1ea3i \u0111\u1ea3m b\u1ea3o khai b\xe1o ch\xfang."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'"Game Address": \u0110\u1ecba ch\u1ec9 contract c\u1ee7a game.'),(0,a.kt)("li",{parentName:"ol"},'"Developer Address": \u0110\u1ecba ch\u1ec9 contract c\u1ee7a developer.'),(0,a.kt)("li",{parentName:"ol"},'"App Scheme": Khai b\xe1o scheme \u0111\u1ec3 connect Chainverse.')),(0,a.kt)("h3",{id:"kh\u1edfi-t\u1ea1o-chainverse-sdk"},"Kh\u1edfi t\u1ea1o Chainverse SDK"),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-1-import-dependencies"},"B\u01b0\u1edbc 1: Import dependencies"),(0,a.kt)("p",null,"Import class ChainverseSDK  v\xe0 ChainverseCallback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import com.chainverse.sdk.ChainverseCallback;\nimport com.chainverse.sdk.ChainverseSDK;\n")),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-2-kh\u1edfi-t\u1ea1o-sdk"},"B\u01b0\u1edbc 2: Kh\u1edfi t\u1ea1o SDK"),(0,a.kt)("p",null,"Khai b\xe1o DeveloperAddress, GameAddress, Scheme"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'String developerAddress = "DeveloperAddress";\nString gameAddress = "GameAddress";\nChainverseSDK.getInstance().init(developerAddress,gameAddress, activity, new ChainverseCallback);\nChainverseSDK.getInstance().setScheme("your-app-scheme://");\n')),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-3-implement-c\xe1c-h\xe0m-callback"},"B\u01b0\u1edbc 3: Implement c\xe1c h\xe0m callback"),(0,a.kt)("h5",{id:"1-callback-oninitsdksuccess"},"1. Callback onInitSDKSuccess"),(0,a.kt)("p",null,"Khi kh\u1edfi t\u1ea1o SDK callback s\u1ebd \u0111\u01b0\u1ee3c g\u1eedi l\u1ea1i, \u0111\u1ec3 th\xf4ng b\xe1o l\xe0 \u0111\xe3 kh\u1edfi t\u1ea1o th\xe0nh c\xf4ng."),(0,a.kt)("p",null,"L\u01b0u \xfd: C\xe1c ch\u1ee9c n\u0103ng trong SDK s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c th\u1ef1c thi, n\u1ebfu qu\xe1 tr\xecnh kh\u1edfi t\u1ea1o SDK b\u1ecb l\u1ed7i. V\xe0 kh\xf4ng c\xf3 callback onInitSDKSuccess. M\xe3 l\u1ed7i s\u1ebd \u0111\u01b0\u1ee3c callback \u1edf h\xe0m onError."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@Override\npublic void onInitSDKSuccess() {\n}\n")),(0,a.kt)("h5",{id:"2-callback-onerror"},"2. Callback onError"),(0,a.kt)("p",null,"Khi kh\u1edfi t\u1ea1o SDK ho\u1eb7c c\xf3 b\u1ea5t k\u1ef3 l\u1ed7i n\xe0o x\u1ea3 ra s\u1ebd c\xf3 callback n\xe0y. Th\xf4ng tin tr\u1ea3 v\u1ec1 l\xe0 m\xe3 l\u1ed7i. B\u1ea1n c\xf3 th\u1ec3 xem t\u1ea5t c\u1ea3 m\xe3 l\u1ed7i \u1edf trang Error  Codes ."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@Override\npublic void onError(int error) {\n     switch (error){\n         case ChainverseError.ERROR_INIT_SDK:\n              break;\n         }\n\n     }\n\n")),(0,a.kt)("h5",{id:"3-callback-onconnectsuccess"},"3. Callback onConnectSuccess"),(0,a.kt)("p",null,"Khi user connect t\u1edbi v\xed Chainverse th\xe0nh c\xf4ng th\xec s\u1ebd c\xf3 callback n\xe0y. Th\xf4ng tin tr\u1ea3 v\u1ec1 l\xe0 \u0111\u1ecba ch\u1ec9 v\xed c\u1ee7a user. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@Override\npublic void onConnectSuccess(String address) {\n   \n}\n")),(0,a.kt)("h5",{id:"4-callback-onlogout"},"4. Callback onLogout"),(0,a.kt)("p",null,"Khi user th\u1ef1c hi\u1ec7n thao t\xe1c \u0111\u0103ng xu\u1ea5t callback n\xe0y s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi. Th\xf4ng tin tr\u1ea3 v\u1ec1 l\xe0 \u0111\u1ecba ch\u1ec9 v\xed c\u1ee7a user. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@Override\npublic void onLogout(String address) {\n            \n}\n")),(0,a.kt)("h5",{id:"5-callback-ongetitems"},"5. Callback onGetItems"),(0,a.kt)("p",null,"Khi h\xe0m ",(0,a.kt)("inlineCode",{parentName:"p"},"ChainverseSDK.getInstance().getItems;")," callback n\xe0y s\u1ebd tr\u1ea3 v\u1ec1 th\xf4ng tin l\xe0 danh s\xe1ch ITEM c\u1ee7a user \u0111\xf3. V\xe0 khi\u200b chuy\u1ec3n Item NFT qua l\u1ea1i gi\u1eefa user - user trong 1 game, v\xe0 chuy\u1ec3n t\u1eeb game n\xe0y sang game kia. Callback n\xe0y s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi REALTIME. "),(0,a.kt)("p",null,"B\u1ea1n s\u1ebd x\u1eed l\xfd ITEM trong game c\u1ee7a b\u1ea1n \u1edf callback n\xe0y."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@Override\npublic void onGetItems(ArrayList<ChainverseItem> items) {\n            \n}\n")),(0,a.kt)("h5",{id:"6-callback-onitemupdate"},"6. Callback onItemUpdate"),(0,a.kt)("p",null,"Khi\u200b chuy\u1ec3n Item NFT qua l\u1ea1i gi\u1eefa user - user trong 1 game, v\xe0 chuy\u1ec3n t\u1eeb game n\xe0y sang game kia. Callback n\xe0y s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi REALTIME. Th\xf4ng tin tr\u1ea3 v\u1ec1 l\xe0 01 ITEM \u0111\xe3 move. "),(0,a.kt)("p",null,"B\u1ea1n s\u1ebd x\u1eed l\xfd ITEM trong game c\u1ee7a b\u1ea1n \u1edf callback n\xe0y."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@Override\npublic void onItemUpdate(ChainverseItem item, int type) {\n    switch (type){\n       case ChainverseItem.TRANSFER_ITEM_TO_USER:\n            //X\u1eed l\xfd item trong game khi item NFT chuy\u1ec3n t\u1edbi t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n\n            break;\n       case ChainverseItem.TRANSFER_ITEM_FROM_USER:\n            //X\u1eed l\xfd item trong game khi item NFT c\u1ee7a b\u1ea1n chuy\u1ebfn t\u1eddi t\xe0i kho\u1ea3n kh\xe1c\n            break;\n    }\n}\n")),(0,a.kt)("h5",{id:"full-example"},"Full example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' String developerAddress = "0xE1717d89f2d7A7b4834c2724408b319ABAf500ec";\n String gameAddress = "0xD146b45817fd18555c59c061C840e3a446Cd5A6c";\n ChainverseSDK.getInstance().init(developerAddress,gameAddress,this, new ChainverseCallback() {\n\n            @Override\n            public void onInitSDKSuccess() {\n\n            }\n\n            @Override\n            public void onError(int error) {\n                switch (error){\n                    case ChainverseError.ERROR_INIT_SDK:\n                        break;\n                }\n\n            }\n\n            @Override\n            public void onItemUpdate(ChainverseItem item, int type) {\n                LogUtil.log("onItemUpdate",item);\n                switch (type){\n                    case ChainverseItem.TRANSFER_ITEM_TO_USER:\n                        break;\n                    case ChainverseItem.TRANSFER_ITEM_FROM_USER:\n                        break;\n                }\n            }\n\n            @Override\n            public void onGetItems(ArrayList<ChainverseItem> items) {\n                LogUtil.log("onGetItems",items);\n            }\n\n\n            @Override\n            public void onConnectSuccess(String address) {\n                ChainverseSDK.getInstance().getItems();\n            }\n\n            @Override\n            public void onLogout(String address) {\n                \n            }\n        });\n        ChainverseSDK.getInstance().setScheme("your-app-scheme://");\n')),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"c\xe1c-h\xe0m-api"},"C\xe1c h\xe0m API"),(0,a.kt)("h4",{id:"1-h\xe0m-showconnectview"},"1. H\xe0m showConnectView"),(0,a.kt)("p",null,"H\xe0m n\xe0y hi\u1ec3n th\u1ecb m\xe0n h\xecnh danh s\xe1ch c\xe1c v\xed \u0111\u1ec3 user l\u1ef1a ch\u1ecdn connect. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ChainverseSDK.getInstance().showConnectView();\n")),(0,a.kt)("h4",{id:"2-h\xe0m-connectwithchainverse"},"2. H\xe0m connectWithChainverse"),(0,a.kt)("p",null,"S\u1eed d\u1ee5ng h\xe0m n\xe0y \u0111\u1ec3 k\u1ebft n\u1ed1i v\u1edbi v\xed Chainverse, m\xe0 kh\xf4ng c\u1ea7n hi\u1ec3n th\u1ecb giao di\u1ec7n. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ChainverseSDK.getInstance().connectWithChainverse();\n")),(0,a.kt)("h4",{id:"3-h\xe0m-getitems"},"3. H\xe0m getItems"),(0,a.kt)("p",null,"S\u1eed d\u1ee5ng h\xe0m n\xe0y \u0111\u1ec3 l\u1ea5y danh s\xe1ch ITEM c\u1ee7a user. Th\xf4ng tin s\u1ebd \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 qua callback  onGetItems ."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ChainverseSDK.getInstance().getItems();\n\n//Callback\n@Override\npublic void onGetItems(ArrayList<ChainverseItem> items) {\n            \n}\n")),(0,a.kt)("h4",{id:"4-h\xe0m-logout"},"4. H\xe0m logout"),(0,a.kt)("p",null,"G\u1ecdi h\xe0m n\xe0y \u0111\u1ec3 th\u1ef1c hi\u1ec7n logout. Th\xf4ng tin \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 qua callback onLogout ."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ChainverseSDK.getInstance().logout();\n\n//Callback\n@Override\npublic void onLogout(String address) {\n            \n}\n")),(0,a.kt)("h4",{id:"5-h\xe0m-h\u1ee9ng-data-\u0111\u01b0\u1ee3c-tr\u1ea3-v\u1ec1-t\u1eeb-v\xed-chainverse"},"5. H\xe0m h\u1ee9ng data \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 t\u1eeb v\xed Chainverse"),(0,a.kt)("p",null,"Khi connect th\xe0nh c\xf4ng v\u1edbi v\xed Chainverse. Chainverse s\u1ebd m\u1edf l\u1ea1i app/game th\xf4ng qua scheme (\u0111\xe3 khai b\xe1o \u1edf ph\u1ea7n Intergrate SDK). V\xec v\u1eady c\u1ea7n khai b\xe1o c\xe1c h\xe0m n\xe0y \u0111\u1ec3 Chainverse SDK x\u1eed l\xfd d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 t\u1eeb v\xed Chainverse."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ChainverseSDK.getInstance().onNewIntent(intent);\n")),(0,a.kt)("p",null,"Khai b\xe1o trong h\xe0m onNewIntent c\u1ee7a Activity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@Override\nprotected void onNewIntent(Intent intent) {\n    super.onNewIntent(intent);\n    // getIntent() should always return the most recent\n    setIntent(intent);\n    ChainverseSDK.getInstance().onNewIntent(intent);\n}\n")),(0,a.kt)("h4",{id:"6-h\xe0m-setkeepconnect"},"6. H\xe0m setKeepConnect"),(0,a.kt)("p",null,"H\xe0m n\xe0y tu\u1ef3 ch\u1ecdn thi\u1ebft l\u1eadp tr\u1ea1ng th\xe1i gi\u1eef connect v\u1edbi v\xed Chainverse (Khi v\xe0o l\u1ea1i app kh\xf4ng c\u1ea7n ph\u1ea3i k\u1ebft n\u1ed1i l\u1ea1i v\xed)"),(0,a.kt)("p",null,"true : Gi\u1eef tr\u1ea1ng th\xe1i keep connect.\nfalse: Kh\xf4ng gi\u1eef tr\u1ea1ng th\xe1i keep connect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ChainverseSDK.getInstance().setKeepConnect(true);\n")),(0,a.kt)("h4",{id:"7-h\xe0m-getversion"},"7. H\xe0m getVersion"),(0,a.kt)("p",null,"Tr\u1ea3 v\u1ec1 version c\u1ee7a SDK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ChainverseSDK.getInstance().getVersion();\n")),(0,a.kt)("h4",{id:"8-h\xe0m-setscheme"},"8. H\xe0m setScheme"),(0,a.kt)("p",null,"\u0110\u1ec3 config khi connect v\u1edbi v\xed Chainverse (V\xed Chainverse s\u1ebd m\u1edf l\u1ea1i app th\xf4ng qua config n\xe0y) "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ChainverseSDK.getInstance().setScheme("your-app-scheme://");\n')),(0,a.kt)("h4",{id:"9-h\xe0m-getuser"},"9. H\xe0m getUser"),(0,a.kt)("p",null,"Tr\u1ea3 v\u1ec1 th\xf4ng tin c\u1ee7a user bao g\u1ed3m : address v\xe0 signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ChainverseUser info = ChainverseSDK.getInstance().getUser();\ninfo.getAddress();\ninfo.getSignature();\n")),(0,a.kt)("h4",{id:"10-h\xe0m-isuserconnected"},"10. H\xe0m isUserConnected"),(0,a.kt)("p",null,"Ki\u1ec3m tra tr\u1ea1ng th\xe1i connect v\xed c\u1ee7a user. Tr\u1ea3 v\u1ec1 boolean"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"boolean isConnect = ChainverseSDK.getInstance().isUserConnected()\n")),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,"Chainverse SDK Android s\u1eed d\u1ee5ng nh\u1eefng th\u01b0 vi\u1ec7n sau:"),(0,a.kt)("h6",{id:"1-retrofit"},"1. Retrofit"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"License: Apache License"),(0,a.kt)("li",{parentName:"ul"},"Home page: ",(0,a.kt)("a",{parentName:"li",href:"https://square.github.io/retrofit/"},"https://square.github.io/retrofit/")),(0,a.kt)("li",{parentName:"ul"},"M\u1ee5c \u0111\xedch s\u1eed d\u1ee5ng: \u0110\u1ec3 k\u1ebft n\u1ed1i REST (API)")),(0,a.kt)("h6",{id:"2-rxjava---rxandroid"},"2. RxJava - RxAndroid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"License: Apache License"),(0,a.kt)("li",{parentName:"ul"},"Home page: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ReactiveX/RxJava"},"https://github.com/ReactiveX/RxJava")),(0,a.kt)("li",{parentName:"ul"},"M\u1ee5c \u0111\xedch s\u1eed d\u1ee5ng: X\u1eed l\xfd b\u1ea5t \u0111\u1ed9ng b\u1ed9 khi connect API")),(0,a.kt)("h6",{id:"3-socket-io"},"3. Socket io"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"License: MIT License"),(0,a.kt)("li",{parentName:"ul"},"Home page: ",(0,a.kt)("a",{parentName:"li",href:"https://socket.io/"},"https://socket.io/")),(0,a.kt)("li",{parentName:"ul"},"M\u1ee5c \u0111\xedch s\u1eed d\u1ee5ng: X\u1eed l\xfd realtime")),(0,a.kt)("h6",{id:"4-web3j"},"4. Web3j"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"License: Apache License"),(0,a.kt)("li",{parentName:"ul"},"Home page: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/web3j/web3j"},"https://github.com/web3j/web3j")),(0,a.kt)("li",{parentName:"ul"},"M\u1ee5c \u0111\xedch s\u1eed d\u1ee5ng: Connect v\u1edbi blockchain")))}p.isMDXComponent=!0}}]);