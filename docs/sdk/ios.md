---
sidebar_label: 'iOS'
sidebar_position: 5
---

# Chainverse SDK for iOS

## Installation
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

##### Objective C
```
#import "Chainverse/ChainverseSDK.h"
#import "Chainverse/ChainverseSDKCallback.h"
#import "Chainverse/ChainverseItem.h"

@interface AppDelegate () <ChainverseSDKCallback>

@end
```

##### Swift
```
class AppDelegate: ChainverseSDKCallback {
}
```

#### Bướ​c 2: Khởi tạo SDK
Trong didFinishLaunchingWithOptions khai báo Game Contract Address và Developer Contract Address

##### Objective C
```
[ChainverseSDK shared].developerAddress = @"DeveloperAddress";
[ChainverseSDK shared].gameAddress = @"GameAddress";
[ChainverseSDK shared].scheme = @"your-app-scheme://";
[ChainverseSDK shared].delegate = self;
[[ChainverseSDK shared] initialize];
```

##### Swift
```
ChainverseSDK.shared().developerAddress = "DeveloperAddress"
ChainverseSDK.shared().gameAddress = "GameAddress"
ChainverseSDK.shared().scheme = "your-app-scheme://";
ChainverseSDK.shared().delegate = self
ChainverseSDK.shared().initialize()
```
#### Bước 3: Implement các hàm callback
#### 1. Callback didInitSDKSuccess
Khi khởi tạo SDK callback sẽ được gửi lại, để thông báo là đã khởi tạo thành công.

Lưu ý: Các chức năng trong SDK sẽ không được thực thi, nếu quá trình khởi tạo SDK bị lỗi. Và không có callback didInitSDKSuccess. Mã lỗi sẽ được callback ở hàm didError.

##### Objective C
```
- (void)didInitSDKSuccess{ 
}
```

##### Swift
```
func didInitSDKSuccess() {
}
```

#### 2. Callback didError
Khi khởi tạo SDK hoặc có bất kỳ lỗi nào xả ra sẽ có callback này. Thông tin trả về là mã lỗi. Bạn có thể xem tất cả mã lỗi ở trang Error  Codes .

##### Objective C
```
- (void)didError:(int)error{
    
}
```

##### Swift
```
func didError(_ error: Int32) {
       
}
```

#### 3. Callback didConnectSuccess
Khi user connect tới ví Chainverse thành công thì sẽ có callback này. Thông tin trả về là địa chỉ ví của user. 

##### Objective C
```
- (void)didConnectSuccess:(NSString *)address{
    
}
```

##### Swift
```
func didConnectSuccess(_ address: String!) {
 
}
```

#### 4. Callback didLogout
Khi user thực hiện thao tác đăng xuất callback này sẽ được gọi. Thông tin trả về là địa chỉ ví của user. 

##### Objective C
```
- (void)didLogout:(NSString *)address{
   
}
```

##### Swift
```
func didLogout(_ address: String!) {

}
```

#### 5. Callback didGetItems

Khi hàm `[[ChainverseSDK shared] getItems];` callback này sẽ trả về thông tin là danh sách ITEM của user đó. Và khi​ chuyển Item NFT qua lại giữa user - user trong 1 game, và chuyển từ game này sang game kia. Callback này sẽ được gọi REALTIME. 

Bạn sẽ xử lý ITEM trong game của bạn ở callback này.

##### Objective C
```
- (void)didGetItems:(NSMutableArray *)items{
    for(ChainverseItem *itemx in items){
        NSLog(@"TAG %@",itemx.game_address);
    }
}
```

##### Swift
```
func didGetItems(_ items: NSMutableArray!) {
       
}
```

#### 6. Callback didItemUpdate

Khi​ chuyển Item NFT qua lại giữa user - user trong 1 game, và chuyển từ game này sang game kia. Callback này sẽ được gọi REALTIME. Thông tin trả về là 01 ITEM đã move.

Bạn sẽ xử lý ITEM trong game của bạn ở callback này.

##### Objective C
```
- (void)didItemUpdate:(ChainverseItem *)item type:(int)type{
    switch (type) {
        case TRANSFER_ITEM_TO_USER:
            //Xử lý item trong game khi item NFT chuyển tới tài khoản của bạn
            break;
        case TRANSFER_ITEM_FROM_USER:
            //Xử lý item trong game khi item NFT của bạn chuyến tời tài khoản khác
            break;
    }
}
```

##### Swift
```
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
```

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

## Functions
Chainverse SDK hỗ trợ những hàm sau

#### 1. Hàm showConnectView
Hàm này hiển thị màn hình danh sách các ví để user lựa chọn connect. 

##### Objective C
```
[[ChainverseSDK shared] showConnectView];
```

##### Swift
```
ChainverseSDK.shared().showConnectView()
```


#### 2. Hàm connectWithChainverse
Sử dụng hàm này để kết nối với ví Chainverse, mà không cần hiển thị giao diện.  

##### Objective C
```
[[ChainverseSDK shared] connectWithChainverse];
```

##### Swift
```
ChainverseSDK.shared().connectWithChainverse()
```

#### 3. Hàm getItems
Sử dụng hàm này để lấy danh sách ITEM của user. Thông tin sẽ được trả về qua callback  didGetItems 

##### Objective C
```
[[ChainverseSDK shared] getItems];

//Callback delegate
- (void)didGetItems:(NSMutableArray *)items{
    for(ChainverseItem *itemx in items){
        NSLog(@"TAG %@",itemx.game_address);
    }
}

```

##### Swift
```
ChainverseSDK.shared().getItems()

//Callback delegate
func didGetItems(_ items: NSMutableArray!) {
        
}
```

#### 4. Hàm logout
Gọi hàm này để thực hiện logout. Thông tin được trả về qua callback didLogout .

##### Objective C
```
[[ChainverseSDK shared] logout];

//Delegate callback
- (void)didLogout:(NSString *)address{
   
}

```

##### Swift
```
ChainverseSDK.shared().logout()
//callback
func didLogout(_ address: String!) {
       
}
```

#### 5. Hàm hứng data được trả về từ ví  Chainverse
Khi connect thành công với ví Chainverse. Chainverse sẽ mở lại app/game thông qua scheme (đã khai báo ở phần Intergrate SDK). Vì vậy cần khai báo các hàm này để Chainverse SDK xử lý dữ liệu được trả về từ ví Chainverse.
Khai báo ở file AppDeletegate :

##### Objective C
```
[[ChainverseSDK shared] handleOpenUrl:(UIApplication *)app
                              openURL:(NSURL *)url
                              options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options];

//Nếu dự án sử dụng SceneDelegate thì khai báo như sau: 

[[ChainverseSDK shared] handleOpenUrl:scene openURLContexts:URLContexts];
```

##### Swift
```
ChainverseSDK.shared().handleOpenUrl(app, open: url, options: options)
```

#### 6. Hàm setKeepConnect
Hàm này tuỳ chọn thiết lập trạng thái giữ connect với ví Chainverse (Khi vào lại app không cần phải kết nối lại ví) 
*true : Giữ trạng thái keep connect.
*false: Không giữ trạng thái keep connect.

##### Objective C
```
[[ChainverseSDK shared] setKeepConnect:TRUE];

```

##### Swift
```
ChainverseSDK.shared().setKeepConnect(true)
```

#### 7. Hàm getVersion
Trả về version của SDK

##### Objective C
```
[[ChainverseSDK shared] getVersion]

```

##### Swift
```
ChainverseSDK.shared().getVersion()
```

#### 8. Hàm getUser
Trả về thông tin của user bao gồm : address và signature

##### Objective C
```
ChainverseUser *info = [[ChainverseSDK shared] getUser];
NSLog(@"TAG %@",[info address]);
NSLog(@"TAG %@",[info signature]);
```

##### Swift
```
let info: ChainverseUser = ChainverseSDK.shared().getUser()
```

#### 9. Hàm isUserConnected
Kiểm tra trạng thái connect ví của user. Trả về boolean

##### Objective C
```
[[ChainverseSDK shared] isUserConnected];

```

##### Swift
```
ChainverseSDK.shared().isUserConnected()
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



