---
sidebar_label: 'Tổng Quan'
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Chainverse SDK for iOS

## Cài đặt
### Cài đặt thủ công
#### Bước 1: Tải xuống static framework
Tải xuống ChainverseSDK_Framework.zip tại https://github.com/Chainverse/ios-sdk/releases
#### Bước 2: Giải nén
Giải nén file ChainverseSDK.framework.zip bạn vừa tải xuống có những file sau:
```
Chainverse.framework
ChainverseBundle.bundle
BigInt.xcframework
CryptoSwift.xcframework
PromiseKit.xcframework
SipHash.xcframework
Starscream.xcframework
SocketIO.xcframework
```
#### Bước 3: Import vào dự án
Kéo tất cả những file đã giải nén ở Bước 2 vào dự án của bạn

#### Bước 4. Embed framework
Chọn Embed & Sign đối với :
```
BigInt.xcframework
CryptoSwift.xcframework
PromiseKit.xcframework
SipHash.xcframework
Starscream.xcframework
SocketIO.xcframework
```

![Docusaurus logo](https://gblobscdn.gitbook.com/assets%2F-MfegUcnHBLzXgHaEQpA%2F-MgoqNIb4BqdRSM7M3u5%2F-MgoqPBPaQXXKWWgCoJb%2FScreen%20Shot%202021-08-11%20at%2017.53.58.png?alt=media&token=615fd852-fb3c-4900-90e7-2c6585f42963)


#### Bước 5:  Thiết lập Url scheme
Bạn cần thiết lập Url scheme để  connect với ví Chainverse

![Docusaurus logo](https://i.imgur.com/otRESxJ.png)


####  Bước 6. Config Application Schemes
Bạn phải thiết lập "chainverse" trong file Info.Plist để connect với ví Chainverse.

```
<key>LSApplicationQueriesSchemes</key>
<array>
   <string>chainverse</string>
</array>

```
## Tích hợp SDK
### Trước khi bắt đầu
Bạn phải cài đặt Chainverse SDK (xem Hướng dẫn).

Tài liệu này chứa các tham số bắt buộc. Bạn phải đảm bảo khai báo chúng.

1. "Game Address": Địa chỉ contract của game.
2. "Developer Address": Địa chỉ contract của developer.
3. "App Scheme": Khai báo scheme để connect Chainverse.

### Khởi tạo Chainverse SDK
#### Bước 1: Import dependencies
Import Chainverse và ChainverseSDKCallback to AppDelegate

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">
<div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>#import "Chainverse/ChainverseSDK.h"</div>
    <div>#import "Chainverse/ChainverseSDKCallback.h"</div>
    <div>#import "Chainverse/ChainverseItem.h"</div>
    <h1/>
    <div>{`@interface AppDelegate () <ChainverseSDKCallback>`}</div>
    <h1/>
    <div>@end</div>
</div>
</TabItem>
<TabItem value="2">
    <div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
        <span>
{`class AppDelegate: ChainverseSDKCallback {\n
    }`}
</span>
    </div>
</TabItem>
</Tabs>

#### Bướ​c 2: Khởi tạo SDK
Trong didFinishLaunchingWithOptions khai báo Game Contract Address và Developer Contract Address

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">
<div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>[ChainverseSDK shared].developerAddress = @"DeveloperAddress";</div> 
<div>[ChainverseSDK shared].gameAddress = @"GameAddress";</div>
<div>[ChainverseSDK shared].scheme = @"your-app-scheme://";</div>
<div>[ChainverseSDK shared].delegate = self;</div>
<div>[[ChainverseSDK shared] initialize];</div>
</div>
</TabItem>
<TabItem value="2">
    <div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
        <div>ChainverseSDK.shared().developerAddress = "DeveloperAddress"</div>
<div>ChainverseSDK.shared().gameAddress = "GameAddress"</div>
<div>ChainverseSDK.shared().scheme = "your-app-scheme://";</div>
<div>ChainverseSDK.shared().delegate = self</div>
<div>ChainverseSDK.shared().initialize()</div>
    </div>
</TabItem>
</Tabs>

#### Bước 3: Implement các hàm callback
#### 1. Callback didInitSDKSuccess
Khi khởi tạo SDK callback sẽ được gửi lại, để thông báo là đã khởi tạo thành công.

Lưu ý: Các chức năng trong SDK sẽ không được thực thi, nếu quá trình khởi tạo SDK bị lỗi. Và không có callback didInitSDKSuccess. Mã lỗi sẽ được callback ở hàm didError.

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">
<div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>{`- (void)didInitSDKSuccess{\n }`}</div> 
</div>
</TabItem>
<TabItem value="2">
    <div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
        <div>{`func didInitSDKSuccess() {\n}`}</div>
    </div>
</TabItem>
</Tabs>

#### 2. Callback didError
Khi khởi tạo SDK hoặc có bất kỳ lỗi nào xả ra sẽ có callback này. Thông tin trả về là mã lỗi. Bạn có thể xem tất cả mã lỗi ở trang Error  Codes .

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">
<div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>{`- (void)didError:(int)error{ }`}</div> 
</div>
</TabItem>
<TabItem value="2">
    <div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>
            {`func didError(_ error: Int32) { }`}
</div>
    </div>
</TabItem>
</Tabs>

#### 3. Callback didConnectSuccess
Khi user connect tới ví Chainverse thành công thì sẽ có callback này. Thông tin trả về là địa chỉ ví của user.

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">
<div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>{`- (void)didConnectSuccess:(NSString *)address{ }`}</div> 
</div>
</TabItem>
<TabItem value="2">
    <div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>
            {`func didConnectSuccess(_ address: String!) { }`}
</div>
    </div>
</TabItem>
</Tabs>

#### 4. Callback didLogout
Khi user thực hiện thao tác đăng xuất callback này sẽ được gọi. Thông tin trả về là địa chỉ ví của user.

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">
<div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>{`- (void)didLogout:(NSString *)address{ }`}</div> 
</div>
</TabItem>
<TabItem value="2">
    <div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>
            {`func didLogout(_ address: String!) { }`}
</div>
    </div>
</TabItem>
</Tabs>

#### 5. Callback didGetItems

Khi hàm `[[ChainverseSDK shared] getItems];` callback này sẽ trả về thông tin là danh sách ITEM của user đó. Và khi​ chuyển Item NFT qua lại giữa user - user trong 1 game, và chuyển từ game này sang game kia. Callback này sẽ được gọi REALTIME.

Bạn sẽ xử lý ITEM trong game của bạn ở callback này.

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">
<div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>{`- (void)didGetItems:(NSMutableArray *)items {`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`for(ChainverseItem *itemx in items){`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`NSLog(@"TAG %@",itemx.game_address);`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</div> 
    <div>{`}`}</div> 
</div>
</TabItem>
<TabItem value="2">
    <div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>
            {`func didGetItems(_ items: NSMutableArray!) { }`}
</div>
    </div>
</TabItem>
</Tabs>

#### 6. Callback didItemUpdate

Khi​ chuyển Item NFT qua lại giữa user - user trong 1 game, và chuyển từ game này sang game kia. Callback này sẽ được gọi REALTIME. Thông tin trả về là 01 ITEM đã move.

Bạn sẽ xử lý ITEM trong game của bạn ở callback này.

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">
<div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>{`- (void)didItemUpdate:(ChainverseItem *)item type:(int)type {`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`switch (type) {`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`case TRANSFER_ITEM_TO_USER:`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`//Xử lý item trong game khi item NFT chuyển tới tài khoản của bạn`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`break;`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`case TRANSFER_ITEM_FROM_USER:`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`//Xử lý item trong game khi item NFT của bạn chuyến tời tài khoản khác`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`break;`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</div> 
    <div>{`}`}</div> 
</div>
</TabItem>
<TabItem value="2">
    <div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>{`func didItemUpdate(_ item: ChainverseItem!, type: Int32) {`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`switch type {`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`case TRANSFER_ITEM_TO_USER.rawValue:`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`//Xử lý item trong game khi item NFT chuyển tới tài khoản của bạn`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`break;`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`case TRANSFER_ITEM_FROM_USER.rawValue:`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`//Xử lý item trong game khi item NFT của bạn chuyến tời tài khoản khác`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`break;`}</div> 
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</div> 
    <div>{`}`}</div> 
    </div>
</TabItem>
</Tabs>

#### Full example
##### Objective C
```
#import "AppDelegate.h"
#import "ChainverseSDK.h"
#import "ChainverseSDKCallback.h"
#import "ChainverseSDKError.h"
#import "ChainverseItem.h"
@interface AppDelegate ()<ChainverseSDKCallback>

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    
    [ChainverseSDK shared].developerAddress = @"0x690FDdc2a98050f924Bd7Ec5900f2D2F49b6aEC7";
    [ChainverseSDK shared].gameAddress = @"0x3F57BF31E55de54306543863E079aD234f477b88";
    [ChainverseSDK shared].scheme = @"your-app-scheme://";
    [ChainverseSDK shared].delegate = self;
    [[ChainverseSDK shared] initialize];
    [[ChainverseSDK shared] setIsKeepConnectWallet:TRUE];
    
    NSLog(@"ChainverSDK Verison %@",[[ChainverseSDK shared] getVersion]);
    
    return YES;
}

- (void)didInitSDKSuccess{
    [[ChainverseSDK shared] getItems];
}

- (void)didConnectSuccess:(NSString *)address{
    
}

- (void)didLogout:(NSString *)address{
   
}

- (void)didError:(int)error{
    NSLog(@"didError %d",error);
}

- (void)didGetItems:(NSMutableArray *)items{
    for(ChainverseItem *itemx in items){
        NSLog(@"didGetItems %@",itemx.game_address);
    }
}

- (void)didItemUpdate:(ChainverseItem *)item{
    NSLog(@"TAG %@",item.game_address);
}

- (BOOL)application:(UIApplication *)app
                    openURL:(NSURL *)url
                    options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options
{
    return [[ChainverseSDK shared] handleOpenUrl:(UIApplication *)app
                              openURL:(NSURL *)url
                              options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options];
    return true;
}


@end

```

##### Swift
```
import UIKit
@main
class AppDelegate: UIResponder, UIApplicationDelegate, ChainverseSDKCallback {
    func didInitSDKSuccess() {
       
    }
    
    func didError(_ error: Int32) {
       
    }
    
    func didConnectSuccess(_ address: String!) {
        ChainverseSDK.shared().getItems()
    }
    
    func didLogout(_ address: String!) {
       
    }
    
    func didGetItems(_ items: NSMutableArray!) {
        
    }
    
    func didItemUpdate(_ item: ChainverseItem!, type: Int32) {
        switch type {
        case TRANSFER_ITEM_TO_USER.rawValue:
            //Xử lý item trong game khi item NFT chuyển tới tài khoản của bạn
            break;
        case TRANSFER_ITEM_FROM_USER.rawValue:
            //Xử lý item trong game khi item NFT chuyển tới tài khoản của bạn
            break;
        default: break
            
        }
    }
    


    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        ChainverseSDK.shared().developerAddress = "0x9aa2DC5A69eEd97d072A4168A83Cc000873321ff"
        ChainverseSDK.shared().gameAddress = "0xD703d36e924A84D050F7b17f392F7d6D2Dd483AF"
        ChainverseSDK.shared().scheme = "your-app-scheme://"
        ChainverseSDK.shared().delegate = self;
        ChainverseSDK.shared().initialize()
        ChainverseSDK.shared().setKeepConnect(true)
        return true
    }


}

```


## License

Chainverse SDK iOS sử dụng những thư viện sau:
##### 1. AFNetworking
- License: MIT License
- Home page: https://github.com/AFNetworking/AFNetworking
- Mục đích sử dụng: Để kết nối REST (API), Kết nối blockchain
##### 2. Socket io
- License: MIT License
- Home page: https://socket.io/
- Mục đích sử dụng: Xử lý realtime
##### 3. Web3swift (Sử dụng 1 phần)
- License: MIT License
- Home page: https://bankex.github.io/web3swift/
- Mục đích sử dụng: Sử dụng các hàm băm, encode các (function, param) trước khi gọi lên blockchain (qua AFNetworking)
##### 4. PromiseKit
- License: MIT License
- Home page: https://github.com/mxcl/PromiseKit
- Mục đích sử dụng: Xử lý bất đồng bộ/đồng bộ khi kết nối API, blockchain
