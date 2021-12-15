"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[422],{3905:function(e,n,t){t.d(n,{Zo:function(){return h},kt:function(){return k}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),l=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},h=function(e){var n=l(e.components);return i.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(t),k=r,u=p["".concat(o,".").concat(k)]||p[k]||d[k]||a;return t?i.createElement(u,c(c({ref:n},h),{},{components:t})):i.createElement(u,c({ref:n},h))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9784:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return h},default:function(){return p}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),c=["components"],s={sidebar_label:"iOS",sidebar_position:5},o="Chainverse SDK for iOS",l={unversionedId:"sdk/ios",id:"sdk/ios",isDocsHomePage:!1,title:"Chainverse SDK for iOS",description:"Installation",source:"@site/docs/sdk/ios.md",sourceDirName:"sdk",slug:"/sdk/ios",permalink:"/docs/sdk/ios",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/sdk/ios.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"iOS",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Android",permalink:"/docs/sdk/android"},next:{title:"SDK - API",permalink:"/docs/api/sdk-api"}},h=[{value:"Installation",id:"installation",children:[{value:"C\xe0i \u0111\u1eb7t th\u1ee7 c\xf4ng",id:"c\xe0i-\u0111\u1eb7t-th\u1ee7-c\xf4ng",children:[]}]},{value:"T\xedch h\u1ee3p SDK",id:"t\xedch-h\u1ee3p-sdk",children:[{value:"Tr\u01b0\u1edbc khi b\u1eaft \u0111\u1ea7u",id:"tr\u01b0\u1edbc-khi-b\u1eaft-\u0111\u1ea7u",children:[]},{value:"Kh\u1edfi t\u1ea1o Chainverse SDK",id:"kh\u1edfi-t\u1ea1o-chainverse-sdk",children:[]}]},{value:"Functions",id:"functions",children:[]},{value:"License",id:"license",children:[]}],d={toc:h};function p(e){var n=e.components,t=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chainverse-sdk-for-ios"},"Chainverse SDK for iOS"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"c\xe0i-\u0111\u1eb7t-th\u1ee7-c\xf4ng"},"C\xe0i \u0111\u1eb7t th\u1ee7 c\xf4ng"),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-1-t\u1ea3i-xu\u1ed1ng-static-framework"},"B\u01b0\u1edbc 1: T\u1ea3i xu\u1ed1ng static framework"),(0,a.kt)("p",null,"T\u1ea3i xu\u1ed1ng ChainverseSDK_Framework.zip t\u1ea1i ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Chainverse/ios-sdk/releases"},"https://github.com/Chainverse/ios-sdk/releases")),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-2-gi\u1ea3i-n\xe9n"},"B\u01b0\u1edbc 2: Gi\u1ea3i n\xe9n"),(0,a.kt)("p",null,"Gi\u1ea3i n\xe9n file ChainverseSDK.framework.zip b\u1ea1n v\u1eeba t\u1ea3i xu\u1ed1ng c\xf3 nh\u1eefng file sau:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Chainverse.framework\nChainverseBundle.bundle\nBigInt.xcframework\nCryptoSwift.xcframework\nPromiseKit.xcframework\nSipHash.xcframework\nStarscream.xcframework\nSocketIO.xcframework\n")),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-3-import-v\xe0o-d\u1ef1-\xe1n"},"B\u01b0\u1edbc 3: Import v\xe0o d\u1ef1 \xe1n"),(0,a.kt)("p",null,"K\xe9o t\u1ea5t c\u1ea3 nh\u1eefng file \u0111\xe3 gi\u1ea3i n\xe9n \u1edf B\u01b0\u1edbc 2 v\xe0o d\u1ef1 \xe1n c\u1ee7a b\u1ea1n "),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-4-embed-framework"},"B\u01b0\u1edbc 4. Embed framework"),(0,a.kt)("p",null,"Ch\u1ecdn Embed & Sign \u0111\u1ed1i v\u1edbi :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BigInt.xcframework\nCryptoSwift.xcframework\nPromiseKit.xcframework\nSipHash.xcframework\nStarscream.xcframework\nSocketIO.xcframework\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://gblobscdn.gitbook.com/assets%2F-MfegUcnHBLzXgHaEQpA%2F-MgoqNIb4BqdRSM7M3u5%2F-MgoqPBPaQXXKWWgCoJb%2FScreen%20Shot%202021-08-11%20at%2017.53.58.png?alt=media&token=615fd852-fb3c-4900-90e7-2c6585f42963",alt:"Docusaurus logo"})),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-5--thi\u1ebft-l\u1eadp-url-scheme"},"B\u01b0\u1edbc 5:  Thi\u1ebft l\u1eadp Url scheme"),(0,a.kt)("p",null,"B\u1ea1n c\u1ea7n thi\u1ebft l\u1eadp Url scheme \u0111\u1ec3  connect v\u1edbi v\xed Chainverse"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/otRESxJ.png",alt:"Docusaurus logo"})),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-6-config-application-schemes"},"B\u01b0\u1edbc 6. Config Application Schemes"),(0,a.kt)("p",null,'B\u1ea1n ph\u1ea3i thi\u1ebft l\u1eadp "chainverse" trong file Info.Plist \u0111\u1ec3 connect v\u1edbi v\xed Chainverse. '),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<key>LSApplicationQueriesSchemes</key>\n<array>\n   <string>chainverse</string>\n</array>\n\n")),(0,a.kt)("h2",{id:"t\xedch-h\u1ee3p-sdk"},"T\xedch h\u1ee3p SDK"),(0,a.kt)("h3",{id:"tr\u01b0\u1edbc-khi-b\u1eaft-\u0111\u1ea7u"},"Tr\u01b0\u1edbc khi b\u1eaft \u0111\u1ea7u"),(0,a.kt)("p",null,"B\u1ea1n ph\u1ea3i c\xe0i \u0111\u1eb7t Chainverse SDK (xem H\u01b0\u1edbng d\u1eabn)."),(0,a.kt)("p",null,"T\xe0i li\u1ec7u n\xe0y ch\u1ee9a c\xe1c tham s\u1ed1 b\u1eaft bu\u1ed9c. B\u1ea1n ph\u1ea3i \u0111\u1ea3m b\u1ea3o khai b\xe1o ch\xfang."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'"Game Address": \u0110\u1ecba ch\u1ec9 contract c\u1ee7a game.'),(0,a.kt)("li",{parentName:"ol"},'"Developer Address": \u0110\u1ecba ch\u1ec9 contract c\u1ee7a developer.'),(0,a.kt)("li",{parentName:"ol"},'"App Scheme": Khai b\xe1o scheme \u0111\u1ec3 connect Chainverse.')),(0,a.kt)("h3",{id:"kh\u1edfi-t\u1ea1o-chainverse-sdk"},"Kh\u1edfi t\u1ea1o Chainverse SDK"),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-1-import-dependencies"},"B\u01b0\u1edbc 1: Import dependencies"),(0,a.kt)("p",null,"Import Chainverse v\xe0 ChainverseSDKCallback to AppDelegate "),(0,a.kt)("h5",{id:"objective-c"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#import "Chainverse/ChainverseSDK.h"\n#import "Chainverse/ChainverseSDKCallback.h"\n#import "Chainverse/ChainverseItem.h"\n\n@interface AppDelegate () <ChainverseSDKCallback>\n\n@end\n')),(0,a.kt)("h5",{id:"swift"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"class AppDelegate: ChainverseSDKCallback {\n}\n")),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-2-kh\u1edfi-t\u1ea1o-sdk"},"B\u01b0\u1edb\u200bc 2: Kh\u1edfi t\u1ea1o SDK"),(0,a.kt)("p",null,"Trong didFinishLaunchingWithOptions khai b\xe1o Game Contract Address v\xe0 Developer Contract Address"),(0,a.kt)("h5",{id:"objective-c-1"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[ChainverseSDK shared].developerAddress = @"DeveloperAddress";\n[ChainverseSDK shared].gameAddress = @"GameAddress";\n[ChainverseSDK shared].scheme = @"your-app-scheme://";\n[ChainverseSDK shared].delegate = self;\n[[ChainverseSDK shared] initialize];\n')),(0,a.kt)("h5",{id:"swift-1"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ChainverseSDK.shared().developerAddress = "DeveloperAddress"\nChainverseSDK.shared().gameAddress = "GameAddress"\nChainverseSDK.shared().scheme = "your-app-scheme://";\nChainverseSDK.shared().delegate = self\nChainverseSDK.shared().initialize()\n')),(0,a.kt)("h4",{id:"b\u01b0\u1edbc-3-implement-c\xe1c-h\xe0m-callback"},"B\u01b0\u1edbc 3: Implement c\xe1c h\xe0m callback"),(0,a.kt)("h4",{id:"1-callback-didinitsdksuccess"},"1. Callback didInitSDKSuccess"),(0,a.kt)("p",null,"Khi kh\u1edfi t\u1ea1o SDK callback s\u1ebd \u0111\u01b0\u1ee3c g\u1eedi l\u1ea1i, \u0111\u1ec3 th\xf4ng b\xe1o l\xe0 \u0111\xe3 kh\u1edfi t\u1ea1o th\xe0nh c\xf4ng."),(0,a.kt)("p",null,"L\u01b0u \xfd: C\xe1c ch\u1ee9c n\u0103ng trong SDK s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c th\u1ef1c thi, n\u1ebfu qu\xe1 tr\xecnh kh\u1edfi t\u1ea1o SDK b\u1ecb l\u1ed7i. V\xe0 kh\xf4ng c\xf3 callback didInitSDKSuccess. M\xe3 l\u1ed7i s\u1ebd \u0111\u01b0\u1ee3c callback \u1edf h\xe0m didError."),(0,a.kt)("h5",{id:"objective-c-2"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- (void)didInitSDKSuccess{ \n}\n")),(0,a.kt)("h5",{id:"swift-2"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func didInitSDKSuccess() {\n}\n")),(0,a.kt)("h4",{id:"2-callback-diderror"},"2. Callback didError"),(0,a.kt)("p",null,"Khi kh\u1edfi t\u1ea1o SDK ho\u1eb7c c\xf3 b\u1ea5t k\u1ef3 l\u1ed7i n\xe0o x\u1ea3 ra s\u1ebd c\xf3 callback n\xe0y. Th\xf4ng tin tr\u1ea3 v\u1ec1 l\xe0 m\xe3 l\u1ed7i. B\u1ea1n c\xf3 th\u1ec3 xem t\u1ea5t c\u1ea3 m\xe3 l\u1ed7i \u1edf trang Error  Codes ."),(0,a.kt)("h5",{id:"objective-c-3"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- (void)didError:(int)error{\n    \n}\n")),(0,a.kt)("h5",{id:"swift-3"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func didError(_ error: Int32) {\n       \n}\n")),(0,a.kt)("h4",{id:"3-callback-didconnectsuccess"},"3. Callback didConnectSuccess"),(0,a.kt)("p",null,"Khi user connect t\u1edbi v\xed Chainverse th\xe0nh c\xf4ng th\xec s\u1ebd c\xf3 callback n\xe0y. Th\xf4ng tin tr\u1ea3 v\u1ec1 l\xe0 \u0111\u1ecba ch\u1ec9 v\xed c\u1ee7a user. "),(0,a.kt)("h5",{id:"objective-c-4"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- (void)didConnectSuccess:(NSString *)address{\n    \n}\n")),(0,a.kt)("h5",{id:"swift-4"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func didConnectSuccess(_ address: String!) {\n \n}\n")),(0,a.kt)("h4",{id:"4-callback-didlogout"},"4. Callback didLogout"),(0,a.kt)("p",null,"Khi user th\u1ef1c hi\u1ec7n thao t\xe1c \u0111\u0103ng xu\u1ea5t callback n\xe0y s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi. Th\xf4ng tin tr\u1ea3 v\u1ec1 l\xe0 \u0111\u1ecba ch\u1ec9 v\xed c\u1ee7a user. "),(0,a.kt)("h5",{id:"objective-c-5"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- (void)didLogout:(NSString *)address{\n   \n}\n")),(0,a.kt)("h5",{id:"swift-5"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func didLogout(_ address: String!) {\n\n}\n")),(0,a.kt)("h4",{id:"5-callback-didgetitems"},"5. Callback didGetItems"),(0,a.kt)("p",null,"Khi h\xe0m ",(0,a.kt)("inlineCode",{parentName:"p"},"[[ChainverseSDK shared] getItems];")," callback n\xe0y s\u1ebd tr\u1ea3 v\u1ec1 th\xf4ng tin l\xe0 danh s\xe1ch ITEM c\u1ee7a user \u0111\xf3. V\xe0 khi\u200b chuy\u1ec3n Item NFT qua l\u1ea1i gi\u1eefa user - user trong 1 game, v\xe0 chuy\u1ec3n t\u1eeb game n\xe0y sang game kia. Callback n\xe0y s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi REALTIME. "),(0,a.kt)("p",null,"B\u1ea1n s\u1ebd x\u1eed l\xfd ITEM trong game c\u1ee7a b\u1ea1n \u1edf callback n\xe0y."),(0,a.kt)("h5",{id:"objective-c-6"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'- (void)didGetItems:(NSMutableArray *)items{\n    for(ChainverseItem *itemx in items){\n        NSLog(@"TAG %@",itemx.game_address);\n    }\n}\n')),(0,a.kt)("h5",{id:"swift-6"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func didGetItems(_ items: NSMutableArray!) {\n       \n}\n")),(0,a.kt)("h4",{id:"6-callback-diditemupdate"},"6. Callback didItemUpdate"),(0,a.kt)("p",null,"Khi\u200b chuy\u1ec3n Item NFT qua l\u1ea1i gi\u1eefa user - user trong 1 game, v\xe0 chuy\u1ec3n t\u1eeb game n\xe0y sang game kia. Callback n\xe0y s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi REALTIME. Th\xf4ng tin tr\u1ea3 v\u1ec1 l\xe0 01 ITEM \u0111\xe3 move."),(0,a.kt)("p",null,"B\u1ea1n s\u1ebd x\u1eed l\xfd ITEM trong game c\u1ee7a b\u1ea1n \u1edf callback n\xe0y."),(0,a.kt)("h5",{id:"objective-c-7"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- (void)didItemUpdate:(ChainverseItem *)item type:(int)type{\n    switch (type) {\n        case TRANSFER_ITEM_TO_USER:\n            //X\u1eed l\xfd item trong game khi item NFT chuy\u1ec3n t\u1edbi t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n\n            break;\n        case TRANSFER_ITEM_FROM_USER:\n            //X\u1eed l\xfd item trong game khi item NFT c\u1ee7a b\u1ea1n chuy\u1ebfn t\u1eddi t\xe0i kho\u1ea3n kh\xe1c\n            break;\n    }\n}\n")),(0,a.kt)("h5",{id:"swift-7"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func didItemUpdate(_ item: ChainverseItem!, type: Int32) {\n    switch type {\n    case TRANSFER_ITEM_TO_USER.rawValue:\n        //X\u1eed l\xfd item trong game khi item NFT chuy\u1ec3n t\u1edbi t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n\n        break;\n    case TRANSFER_ITEM_FROM_USER.rawValue:\n        //X\u1eed l\xfd item trong game khi item NFT chuy\u1ec3n t\u1edbi t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n\n        break;\n    default: break\n        \n    }\n}\n")),(0,a.kt)("h4",{id:"full-example"},"Full example"),(0,a.kt)("h5",{id:"objective-c-8"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#import "AppDelegate.h"\n#import "ChainverseSDK.h"\n#import "ChainverseSDKCallback.h"\n#import "ChainverseSDKError.h"\n#import "ChainverseItem.h"\n@interface AppDelegate ()<ChainverseSDKCallback>\n\n@end\n\n@implementation AppDelegate\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    \n    [ChainverseSDK shared].developerAddress = @"0x690FDdc2a98050f924Bd7Ec5900f2D2F49b6aEC7";\n    [ChainverseSDK shared].gameAddress = @"0x3F57BF31E55de54306543863E079aD234f477b88";\n    [ChainverseSDK shared].scheme = @"your-app-scheme://";\n    [ChainverseSDK shared].delegate = self;\n    [[ChainverseSDK shared] initialize];\n    [[ChainverseSDK shared] setIsKeepConnectWallet:TRUE];\n    \n    NSLog(@"ChainverSDK Verison %@",[[ChainverseSDK shared] getVersion]);\n    \n    return YES;\n}\n\n- (void)didInitSDKSuccess{\n    [[ChainverseSDK shared] getItems];\n}\n\n- (void)didConnectSuccess:(NSString *)address{\n    \n}\n\n- (void)didLogout:(NSString *)address{\n   \n}\n\n- (void)didError:(int)error{\n    NSLog(@"didError %d",error);\n}\n\n- (void)didGetItems:(NSMutableArray *)items{\n    for(ChainverseItem *itemx in items){\n        NSLog(@"didGetItems %@",itemx.game_address);\n    }\n}\n\n- (void)didItemUpdate:(ChainverseItem *)item{\n    NSLog(@"TAG %@",item.game_address);\n}\n\n- (BOOL)application:(UIApplication *)app\n                    openURL:(NSURL *)url\n                    options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options\n{\n    return [[ChainverseSDK shared] handleOpenUrl:(UIApplication *)app\n                              openURL:(NSURL *)url\n                              options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options];\n    return true;\n}\n\n\n@end\n\n')),(0,a.kt)("h5",{id:"swift-8"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import UIKit\n@main\nclass AppDelegate: UIResponder, UIApplicationDelegate, ChainverseSDKCallback {\n    func didInitSDKSuccess() {\n       \n    }\n    \n    func didError(_ error: Int32) {\n       \n    }\n    \n    func didConnectSuccess(_ address: String!) {\n        ChainverseSDK.shared().getItems()\n    }\n    \n    func didLogout(_ address: String!) {\n       \n    }\n    \n    func didGetItems(_ items: NSMutableArray!) {\n        \n    }\n    \n    func didItemUpdate(_ item: ChainverseItem!, type: Int32) {\n        switch type {\n        case TRANSFER_ITEM_TO_USER.rawValue:\n            //X\u1eed l\xfd item trong game khi item NFT chuy\u1ec3n t\u1edbi t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n\n            break;\n        case TRANSFER_ITEM_FROM_USER.rawValue:\n            //X\u1eed l\xfd item trong game khi item NFT chuy\u1ec3n t\u1edbi t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n\n            break;\n        default: break\n            \n        }\n    }\n    \n\n\n    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n        // Override point for customization after application launch.\n        ChainverseSDK.shared().developerAddress = "0x9aa2DC5A69eEd97d072A4168A83Cc000873321ff"\n        ChainverseSDK.shared().gameAddress = "0xD703d36e924A84D050F7b17f392F7d6D2Dd483AF"\n        ChainverseSDK.shared().scheme = "your-app-scheme://"\n        ChainverseSDK.shared().delegate = self;\n        ChainverseSDK.shared().initialize()\n        ChainverseSDK.shared().setKeepConnect(true)\n        return true\n    }\n\n\n}\n\n')),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("p",null,"Chainverse SDK h\u1ed7 tr\u1ee3 nh\u1eefng h\xe0m sau"),(0,a.kt)("h4",{id:"1-h\xe0m-showconnectview"},"1. H\xe0m showConnectView"),(0,a.kt)("p",null,"H\xe0m n\xe0y hi\u1ec3n th\u1ecb m\xe0n h\xecnh danh s\xe1ch c\xe1c v\xed \u0111\u1ec3 user l\u1ef1a ch\u1ecdn connect. "),(0,a.kt)("h5",{id:"objective-c-9"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[[ChainverseSDK shared] showConnectView];\n")),(0,a.kt)("h5",{id:"swift-9"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ChainverseSDK.shared().showConnectView()\n")),(0,a.kt)("h4",{id:"2-h\xe0m-connectwithchainverse"},"2. H\xe0m connectWithChainverse"),(0,a.kt)("p",null,"S\u1eed d\u1ee5ng h\xe0m n\xe0y \u0111\u1ec3 k\u1ebft n\u1ed1i v\u1edbi v\xed Chainverse, m\xe0 kh\xf4ng c\u1ea7n hi\u1ec3n th\u1ecb giao di\u1ec7n.  "),(0,a.kt)("h5",{id:"objective-c-10"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[[ChainverseSDK shared] connectWithChainverse];\n")),(0,a.kt)("h5",{id:"swift-10"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ChainverseSDK.shared().connectWithChainverse()\n")),(0,a.kt)("h4",{id:"3-h\xe0m-getitems"},"3. H\xe0m getItems"),(0,a.kt)("p",null,"S\u1eed d\u1ee5ng h\xe0m n\xe0y \u0111\u1ec3 l\u1ea5y danh s\xe1ch ITEM c\u1ee7a user. Th\xf4ng tin s\u1ebd \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 qua callback  didGetItems "),(0,a.kt)("h5",{id:"objective-c-11"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[[ChainverseSDK shared] getItems];\n\n//Callback delegate\n- (void)didGetItems:(NSMutableArray *)items{\n    for(ChainverseItem *itemx in items){\n        NSLog(@"TAG %@",itemx.game_address);\n    }\n}\n\n')),(0,a.kt)("h5",{id:"swift-11"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ChainverseSDK.shared().getItems()\n\n//Callback delegate\nfunc didGetItems(_ items: NSMutableArray!) {\n        \n}\n")),(0,a.kt)("h4",{id:"4-h\xe0m-logout"},"4. H\xe0m logout"),(0,a.kt)("p",null,"G\u1ecdi h\xe0m n\xe0y \u0111\u1ec3 th\u1ef1c hi\u1ec7n logout. Th\xf4ng tin \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 qua callback didLogout ."),(0,a.kt)("h5",{id:"objective-c-12"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[[ChainverseSDK shared] logout];\n\n//Delegate callback\n- (void)didLogout:(NSString *)address{\n   \n}\n\n")),(0,a.kt)("h5",{id:"swift-12"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ChainverseSDK.shared().logout()\n//callback\nfunc didLogout(_ address: String!) {\n       \n}\n")),(0,a.kt)("h4",{id:"5-h\xe0m-h\u1ee9ng-data-\u0111\u01b0\u1ee3c-tr\u1ea3-v\u1ec1-t\u1eeb-v\xed--chainverse"},"5. H\xe0m h\u1ee9ng data \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 t\u1eeb v\xed  Chainverse"),(0,a.kt)("p",null,"Khi connect th\xe0nh c\xf4ng v\u1edbi v\xed Chainverse. Chainverse s\u1ebd m\u1edf l\u1ea1i app/game th\xf4ng qua scheme (\u0111\xe3 khai b\xe1o \u1edf ph\u1ea7n Intergrate SDK). V\xec v\u1eady c\u1ea7n khai b\xe1o c\xe1c h\xe0m n\xe0y \u0111\u1ec3 Chainverse SDK x\u1eed l\xfd d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 t\u1eeb v\xed Chainverse.\nKhai b\xe1o \u1edf file AppDeletegate :"),(0,a.kt)("h5",{id:"objective-c-13"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[[ChainverseSDK shared] handleOpenUrl:(UIApplication *)app\n                              openURL:(NSURL *)url\n                              options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options];\n\n//N\u1ebfu d\u1ef1 \xe1n s\u1eed d\u1ee5ng SceneDelegate th\xec khai b\xe1o nh\u01b0 sau: \n\n[[ChainverseSDK shared] handleOpenUrl:scene openURLContexts:URLContexts];\n")),(0,a.kt)("h5",{id:"swift-13"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ChainverseSDK.shared().handleOpenUrl(app, open: url, options: options)\n")),(0,a.kt)("h4",{id:"6-h\xe0m-setkeepconnect"},"6. H\xe0m setKeepConnect"),(0,a.kt)("p",null,"H\xe0m n\xe0y tu\u1ef3 ch\u1ecdn thi\u1ebft l\u1eadp tr\u1ea1ng th\xe1i gi\u1eef connect v\u1edbi v\xed Chainverse (Khi v\xe0o l\u1ea1i app kh\xf4ng c\u1ea7n ph\u1ea3i k\u1ebft n\u1ed1i l\u1ea1i v\xed)\n",(0,a.kt)("em",{parentName:"p"},"true : Gi\u1eef tr\u1ea1ng th\xe1i keep connect.\n"),"false: Kh\xf4ng gi\u1eef tr\u1ea1ng th\xe1i keep connect."),(0,a.kt)("h5",{id:"objective-c-14"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[[ChainverseSDK shared] setKeepConnect:TRUE];\n\n")),(0,a.kt)("h5",{id:"swift-14"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ChainverseSDK.shared().setKeepConnect(true)\n")),(0,a.kt)("h4",{id:"7-h\xe0m-getversion"},"7. H\xe0m getVersion"),(0,a.kt)("p",null,"Tr\u1ea3 v\u1ec1 version c\u1ee7a SDK"),(0,a.kt)("h5",{id:"objective-c-15"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[[ChainverseSDK shared] getVersion]\n\n")),(0,a.kt)("h5",{id:"swift-15"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ChainverseSDK.shared().getVersion()\n")),(0,a.kt)("h4",{id:"8-h\xe0m-getuser"},"8. H\xe0m getUser"),(0,a.kt)("p",null,"Tr\u1ea3 v\u1ec1 th\xf4ng tin c\u1ee7a user bao g\u1ed3m : address v\xe0 signature"),(0,a.kt)("h5",{id:"objective-c-16"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ChainverseUser *info = [[ChainverseSDK shared] getUser];\nNSLog(@"TAG %@",[info address]);\nNSLog(@"TAG %@",[info signature]);\n')),(0,a.kt)("h5",{id:"swift-16"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"let info: ChainverseUser = ChainverseSDK.shared().getUser()\n")),(0,a.kt)("h4",{id:"9-h\xe0m-isuserconnected"},"9. H\xe0m isUserConnected"),(0,a.kt)("p",null,"Ki\u1ec3m tra tr\u1ea1ng th\xe1i connect v\xed c\u1ee7a user. Tr\u1ea3 v\u1ec1 boolean"),(0,a.kt)("h5",{id:"objective-c-17"},"Objective C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[[ChainverseSDK shared] isUserConnected];\n\n")),(0,a.kt)("h5",{id:"swift-17"},"Swift"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ChainverseSDK.shared().isUserConnected()\n")),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,"Chainverse SDK iOS s\u1eed d\u1ee5ng nh\u1eefng th\u01b0 vi\u1ec7n sau:"),(0,a.kt)("h5",{id:"1-afnetworking"},"1. AFNetworking"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"License: MIT License"),(0,a.kt)("li",{parentName:"ul"},"Home page: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/AFNetworking/AFNetworking"},"https://github.com/AFNetworking/AFNetworking")),(0,a.kt)("li",{parentName:"ul"},"M\u1ee5c \u0111\xedch s\u1eed d\u1ee5ng: \u0110\u1ec3 k\u1ebft n\u1ed1i REST (API), K\u1ebft n\u1ed1i blockchain")),(0,a.kt)("h5",{id:"2-socket-io"},"2. Socket io"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"License: MIT License"),(0,a.kt)("li",{parentName:"ul"},"Home page: ",(0,a.kt)("a",{parentName:"li",href:"https://socket.io/"},"https://socket.io/")),(0,a.kt)("li",{parentName:"ul"},"M\u1ee5c \u0111\xedch s\u1eed d\u1ee5ng: X\u1eed l\xfd realtime")),(0,a.kt)("h5",{id:"3-web3swift-s\u1eed-d\u1ee5ng-1-ph\u1ea7n"},"3. Web3swift (S\u1eed d\u1ee5ng 1 ph\u1ea7n)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"License: MIT License"),(0,a.kt)("li",{parentName:"ul"},"Home page: ",(0,a.kt)("a",{parentName:"li",href:"https://bankex.github.io/web3swift/"},"https://bankex.github.io/web3swift/")),(0,a.kt)("li",{parentName:"ul"},"M\u1ee5c \u0111\xedch s\u1eed d\u1ee5ng: S\u1eed d\u1ee5ng c\xe1c h\xe0m b\u0103m, encode c\xe1c (function, param) tr\u01b0\u1edbc khi g\u1ecdi l\xean blockchain (qua AFNetworking)")),(0,a.kt)("h5",{id:"4-promisekit"},"4. PromiseKit"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"License: MIT License"),(0,a.kt)("li",{parentName:"ul"},"Home page: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mxcl/PromiseKit"},"https://github.com/mxcl/PromiseKit")),(0,a.kt)("li",{parentName:"ul"},"M\u1ee5c \u0111\xedch s\u1eed d\u1ee5ng: X\u1eed l\xfd b\u1ea5t \u0111\u1ed3ng b\u1ed9/\u0111\u1ed3ng b\u1ed9 khi k\u1ebft n\u1ed1i API, blockchain")))}p.isMDXComponent=!0}}]);