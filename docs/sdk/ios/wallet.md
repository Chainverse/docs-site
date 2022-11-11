---
sidebar_label: 'Ví'
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ví

## 1. Hàm showConnectWalletView
Hàm này hiển thị màn hình để tạo hoặc import ví. 

##### Objective C
```
[[ChainverseSDK shared] showConnectWalletView];
```


## 2. Hàm showWalletInfoView
Hàm này hiển thị màn hình thông tin của ví. Bao gồm các chức năng: Export private key, Secret Recovery Phrase.

##### Objective C
```
[[ChainverseSDK shared] showWalletInfoView];
```

## 3. Hàm logout
Gọi hàm này để thực hiện logout. Thông tin được trả về qua callback didLogout .

##### Objective C
```
[[ChainverseSDK shared] logout];

//Delegate callback
- (void)didLogout:(NSString *)address{
   
}

```

## 4. Hàm hứng data được trả về từ ví  Chainverse
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


## 5. Hàm setKeepConnect
Hàm này tuỳ chọn thiết lập trạng thái giữ connect với ví Chainverse (Khi vào lại app không cần phải kết nối lại ví) 
*true : Giữ trạng thái keep connect.
*false: Không giữ trạng thái keep connect.

##### Objective C
```
[[ChainverseSDK shared] setKeepConnect:TRUE];

```


## 6. Hàm getVersion
Trả về version của SDK

##### Objective C
```
[[ChainverseSDK shared] getVersion]

```


#### 7. Hàm getUser
Trả về thông tin của user bao gồm : address và signature

##### Objective C
```
ChainverseUser *info = [[ChainverseSDK shared] getUser];
NSLog(@"TAG %@",[info address]);
NSLog(@"TAG %@",[info signature]);
```


## 8. Hàm isUserConnected
Kiểm tra trạng thái connect ví của user. Trả về boolean

##### Objective C
```
[[ChainverseSDK shared] isUserConnected];

```

## 9. Hàm getBalance
Trả về số dư Native Coin (BNB)

##### Objective C
```
[[ChainverseSDK shared] getBalance]

```

## 10. Hàm getBalance
Trả về số dư token:
- CVT: 0x672021e3c741910896cad6D6121446a328ba5634
- USDT: 0x337610d27c682E347C9cD60BD4b3b107C9d34dDd

##### Objective C
```
[[ChainverseSDK shared] getBalance:{token}]

```