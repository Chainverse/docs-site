---
sidebar_label: 'Tổng Quan'
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Chainverse SDK for iOS

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
secp256k1.xcframework
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
secp256k1.xcframework
```

![Docusaurus logo](https://i.imgur.com/5umw9yI.png)

#### Bước 5: Tạo Bridging Header
- File -> New -> File
- Select Swift File
- Tạo 1 file .swift với tên bất kì.

![Docusaurus logo](https://i.imgur.com/Wulhemz.png)


- Confirm Create Bridging Header .

![Docusaurus logo](https://i.imgur.com/5Yr786R.png)


#### Bước 6:  Thiết lập Url scheme
Bạn cần thiết lập Url scheme để  connect với ví Chainverse

![Docusaurus logo](https://i.imgur.com/otRESxJ.png)


####  Bước 7. Config Application Schemes
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
#import "Chainverse/ChainverseNFT.h"
#import "Chainverse/ChainverseSDKError.h"

@interface AppDelegate () <ChainverseSDKCallback>

@end
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

#### Bước 3: Implement các hàm callback
#### 1. Callback didInitSDKSuccess
Khi khởi tạo SDK callback sẽ được gửi lại, để thông báo là đã khởi tạo thành công.

Lưu ý: Các chức năng trong SDK sẽ không được thực thi, nếu quá trình khởi tạo SDK bị lỗi. Và không có callback didInitSDKSuccess. Mã lỗi sẽ được callback ở hàm didError.

##### Objective C
```
- (void)didInitSDKSuccess{ 
}
```


#### 2. Callback didError
Khi khởi tạo SDK hoặc có bất kỳ lỗi nào xả ra sẽ có callback này. Thông tin trả về là mã lỗi. Bạn có thể xem tất cả mã lỗi ở trang Error  Codes .

##### Objective C
```
- (void)didError:(int)error{
    
}
```


#### 3. Callback didConnectSuccess
Khi user connect tới ví Chainverse thành công thì sẽ có callback này. Thông tin trả về là địa chỉ ví của user. 

##### Objective C
```
- (void)didConnectSuccess:(NSString *)address{
    
}
```


#### 4. Callback didLogout
Khi user thực hiện thao tác đăng xuất callback này sẽ được gọi. Thông tin trả về là địa chỉ ví của user. 

##### Objective C
```
- (void)didLogout:(NSString *)address{
   
}
```


#### 5. Callback didGetListItemMarket

Khi hàm `[[ChainverseSDK shared] getListItemOnMarket];` callback này sẽ trả về danh sách NFT trong chợ.

Bạn sẽ xử lý NFT trong chợ của bạn ở callback này.

##### Objective C
```
- (void)didGetListItemMarket:(NSArray<ChainverseNFT> *) items{
    
}
```

#### 6. Callback didGetDetailItem

Khi hàm gọi `[[ChainverseSDK shared] getDetailNFT:{nft_address} tokenId:{tokenId}];` callback này sẽ trả về thông tin detail của NFT.

Bạn sẽ xử lý NFT trong chợ của bạn ở callback này.

##### Objective C
```
- (void)didGetDetailItem:(ChainverseNFT*)item{
    
}
```


#### 7. Callback didGetMyAssets

Khi hàm gọi `[[ChainverseSDK shared] getMyAsset];` callback này sẽ trả về danh sách NFT của user

Bạn sẽ xử lý NFT của bạn ở callback này.

##### Objective C
```
- (void)didGetMyAssets:(NSArray<ChainverseNFT> *) items{
    
}
```


#### 8. Callback didItemUpdate

Khi​ chuyển NFT qua lại giữa user - user trong 1 game, và chuyển từ game này sang game kia. Callback này sẽ được gọi REALTIME. Thông tin trả về là 01 NFT đã move.

Bạn sẽ xử lý NFT trong game của bạn ở callback này.

##### Objective C
```
- (void)didItemUpdate:(ChainverseItem *)item type:(int)type{
    switch (type) {
        case TRANSFER_ITEM_TO_USER:
            //Xử lý NFT trong game khi NFT chuyển tới tài khoản của bạn
            break;
        case TRANSFER_ITEM_FROM_USER:
            //Xử lý NFT trong game khi NFT của bạn chuyến tời tài khoản khác
            break;
    }
}
```


#### 9. Callback didTransact

Callback này sẽ trả về transaction hash và function khi thực hiện các chức năng blockchain


##### Objective C
```
- (void)didTransact:(int)function tx:(NSString *)tx{
   //Các function
   /*
     approveToken = 1,
     approveNFT = 2,
     buyNFT = 3,
     bidNFT = 4,
     sellNFT = 5,
     cancelSell = 6,
     withdrawItem = 7,
     moveService = 8,
     transferItem = 9*/
    
}
```

#### 10. Callback didSignMessage

Khi gọi hàm  `[[ChainverseSDK shared] signMessage:@"message_can_ki"]` Callback này sẽ trả về chữ ký của message cần ký


##### Objective C
```
- (void)didSignMessage:(NSString *)signedMessage{
    
}
```

#### Full example
##### Objective C
```
#import "AppDelegate.h"
#import "Chainverse/ChainverseSDK.h"
#import "Chainverse/ChainverseSDKCallback.h"
#import "Chainverse/ChainverseItem.h"
#import "Chainverse/ChainverseNFT.h"
#import "Chainverse/ChainverseSDKError.h"
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
    
}

- (void)didConnectSuccess:(NSString *)address{
    
    ChainverseUser *info = [[ChainverseSDK shared] getUser];
    NSLog(@"nampv_caddress %@",[info address]);
    NSLog(@"nampv_csign %@",[info signature]);
}

- (void)didLogout:(NSString *)address{
    
   
}

- (void)didError:(int)error{
    switch (error) {
        case ERROR_WAITING_INIT_SDK:
            
            break;
            
        default:
            break;
    }
    NSLog(@"didError %d",error);
}


- (void)didGetDetailItem:(ChainverseNFT*)item{
   
}

- (void)didItemUpdate:(ChainverseItem *)item type:(int)type{
    switch (type) {
        case TRANSFER_ITEM_TO_USER:
            //Xử lý item trong game khi item NFT chuyển tới tài khoản của bạn
            NSLog(@"nampv_transfer_to %@",item);
            break;
        case TRANSFER_ITEM_FROM_USER:
            //Xử lý item trong game khi item NFT của bạn chuyến tời tài khoản khác
            NSLog(@"nampv_transfer_from %@",item);
            break;
    }
}

- (void)didSignMessage:(NSString *)signedMessage{
    
}

- (void)didGetListItemMarket:(NSArray<ChainverseNFT> *) items{
    
}

- (void)didGetMyAssets:(NSArray<ChainverseNFT> *) items{
    
}

- (void)didTransact:(int)function tx:(NSString *)tx{
    
    
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

## License

Chainverse SDK iOS sử dụng những thư viện sau:
##### 1. AFNetworking
- License: MIT License
- Home page: https://github.com/AFNetworking/AFNetworking
- Mục đích sử dụng: Để kết nối REST (API)
##### 2. Socket io
- License: MIT License
- Home page: https://socket.io/
- Mục đích sử dụng: Xử lý realtime
##### 3. Web3swift 
- License: MIT License
- Home page: https://github.com/skywinder/web3swift
- Mục đích sử dụng: Kết nối blockchain
##### 4. PromiseKit
- License: MIT License
- Home page: https://github.com/mxcl/PromiseKit
- Mục đích sử dụng: Xử lý bất đồng bộ/đồng bộ khi kết nối API, blockchain
