---
sidebar_label: 'Tổng Quan'
sidebar_position: 1
---

# Chainverse SDK for Android

## Cài đặt
### Cài đặt Chainverse SDK qua Gradle.
#### Bước 1: Khai báo repository
Khai báo jitpack ở file build.gradle (project)

```
maven {
            url "https://jitpack.io"
            credentials { username "jp_l28krc7a5uel5l48doj354csk9" }
        }
```
#### Bước 2: Khai báo dependencies

```
implementation 'com.github.Chainverse:android-sdk:alpha-v1.0.44'
```

### Config trong file AndroidManifest.xml
#### Bước 1: Khai báo permission
Khai báo quyền sử dụng Internet.
```
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
```
#### Bước 2: Khai báo deeplink
Khai báo callback deeplink (trong tag activity) để ví Chainverse mở lại app (Khi connect ví).
{your-app-scheme} : Khai báo app scheme

```
<activity
            android:name=".MainActivity"
            android:label="@string/app_name"
            android:screenOrientation="portrait"
            android:launchMode="singleTask"
            android:theme="@style/Theme.AppCompat.NoActionBar">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>

            <intent-filter android:autoVerify="true">
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <action android:name="android.intent.action.VIEW" />
                <data android:scheme="{your-app-scheme}"/>
            </intent-filter>
        </activity>
```

**Chú ý**: Từ android 11(API level 30) trở đi, hầu hết các ứng dụng do người dùng cài đặt không hiển thị theo mặc định. Trong manifest, bạn phải khai báo tĩnh ứng dụng nào bạn sẽ nhận thông tin về.

```
<queries>
   <!-- Explicit apps you know in advance about: -->
   <package android:name="org.chainverse"/>
</queries>
```

#### Bước 3: Khai báo  ChainverseAcitivty
Để sử dụng giao diện của SDK

```
<activity
            android:name="com.chainverse.sdk.ui.ChainverseSDKActivity"
            android:configChanges="orientation|keyboardHidden|screenSize|locale"
            android:theme="@style/ChainverseSDKTheme"
            android:windowSoftInputMode="adjustResize"/>
```

# Tích hợp SDK
## Trước khi bắt đầu
Bạn phải cài đặt Chainverse SDK (xem Hướng dẫn).

Tài liệu này chứa các tham số bắt buộc. Bạn phải đảm bảo khai báo chúng.

1. "Game Address": Địa chỉ contract của game.
2. "Developer Address": Địa chỉ contract của developer.
3. "App Scheme": Khai báo scheme để connect Chainverse.

## Khởi tạo Chainverse SDK
### Bước 1: Import dependencies
Import class ChainverseSDK  và ChainverseCallback
```
import com.chainverse.sdk.ChainverseCallback;
import com.chainverse.sdk.ChainverseSDK;
```

### Bước 2: Khởi tạo SDK
Khai báo DeveloperAddress, GameAddress, Scheme
```
String developerAddress = "DeveloperAddress";
String gameAddress = "GameAddress";
ChainverseSDK.getInstance().init(developerAddress,gameAddress, activity, new ChainverseCallback);
ChainverseSDK.getInstance().setScheme("your-app-scheme://");
```

### Bước 3: Implement các hàm callback
#### 1. Callback onInitSDKSuccess
Khi khởi tạo SDK callback sẽ được gửi lại, để thông báo là đã khởi tạo thành công.

**Chú ý**: Các chức năng trong SDK sẽ không được thực thi, nếu quá trình khởi tạo SDK bị lỗi. Và không có callback onInitSDKSuccess. Mã lỗi sẽ được callback ở hàm onError.

```
@Override
public void onInitSDKSuccess() {
}
```

#### 2. Callback onError
Khi khởi tạo SDK hoặc có bất kỳ lỗi nào xả ra sẽ có callback này. Thông tin trả về là mã lỗi. Bạn có thể xem tất cả mã lỗi ở trang Error  Codes .

```
@Override
public void onError(int error) {
     switch (error){
         case ChainverseError.ERROR_INIT_SDK:
              break;
         }

     }

```

#### 3. Callback onConnectSuccess
Khi user connect tới ví Chainverse thành công thì sẽ có callback này. Thông tin trả về là địa chỉ ví của user.

```
@Override
public void onConnectSuccess(String address) {
   
}
```

#### 4. Callback onLogout
Khi user thực hiện thao tác đăng xuất callback này sẽ được gọi. Thông tin trả về là địa chỉ ví của user.

```
@Override
public void onLogout(String address) {
            
}
```

#### 5. Callback onGetItems
Khi hàm `ChainverseSDK.getInstance().getItems;` callback này sẽ trả về thông tin là danh sách ITEM của user đó. Và khi​ chuyển Item NFT qua lại giữa user - user trong 1 game, và chuyển từ game này sang game kia. Callback này sẽ được gọi REALTIME.

Bạn sẽ xử lý ITEM trong game của bạn ở callback này.

```
@Override
public void onGetItems(ArrayList<ChainverseItem> items) {
            
}
```

#### 6. Callback onItemUpdate
Khi​ chuyển Item NFT qua lại giữa user - user trong 1 game, và chuyển từ game này sang game kia. Callback này sẽ được gọi REALTIME. Thông tin trả về là 01 ITEM đã move.

Bạn sẽ xử lý ITEM trong game của bạn ở callback này.

```
@Override
public void onItemUpdate(ChainverseItem item, int type) {
    switch (type){
       case ChainverseItem.TRANSFER_ITEM_TO_USER:
            //Xử lý item trong game khi item NFT chuyển tới tài khoản của bạn
            break;
       case ChainverseItem.TRANSFER_ITEM_FROM_USER:
            //Xử lý item trong game khi item NFT của bạn chuyến tời tài khoản khác
            break;
    }
}
```

#### 7. Callback onGetListItemMarket
Hàm callback này trả về danh sách các items của một game đang bán trên chợ.

Bạn sẽ xử lý ITEM trên chợ ở callback này.

**Chú ý**: Vì danh sách được lấy từ database (Off chain) nên các thông tin trên blockchain sẽ không được chính xác. Chính vì vậy, chúng ta cần phải gọi hàm [getNFT](/docs/sdk/android/items#5-hàm-getnft) để lấy các thông tin đang có trên blockchain.

```
@Override
public void onGetListItemMarket(ArrayList<NFT> items, int count) {

}
```

#### 8. Callback onGetMyAssets
Hàm callback này trả về danh sách các items của user đang sở hữu.

Bạn sẽ xử lý ITEM của user ở callback này.

**Chú ý**: Vì danh sách được lấy từ database (Off chain) nên các thông tin trên blockchain sẽ không được chính xác. Chính vì vậy, chúng ta cần phải gọi hàm [getNFT](/docs/sdk/android/items#5-hàm-getnft) để lấy các thông tin đang có trên blockchain.

```
@Override
public void onGetMyAssets(ArrayList<NFT> items) {

}
```

#### 9. Callback onGetDetailItem
Hàm callback trả về thông tin chi tiết của item (Off chain)

```
@Override
public void onGetDetailItem(NFT nft) {

}
```


#### 10. Callback onTransact
Hàm callback trả về kiểu và transaction hash(tx) của một giao dịch.

Bạn sẽ xử lý tx sau khi giao dịch thành công trên hàm này.

Kiểu dữ liệu [EFunction](/docs/sdk/Reference/Constants#1-efunction)

```
@Override
public void onTransact(Constants.EFunction function, String tx) {
    // TODO
}
```

#### 11. Callback onSignMessage
Hàm callback trả về một message đã kí.

```
@Override
public void onSignMessage(String signed) {
    // TODO
}
```

#### 12. Callback onSignTransaction
Hàm callback trả về kiểu và chữ kí cho giao dịch.

Kiểu dữ liệu [EFunction](/docs/sdk/Reference/Constants#1-efunction)

```
@Override
public void onSignTransaction(Constants.EFunction function, String signed) {
    // TODO
}
```

#### 12. Callback onErrorTransaction
Hàm callback trả về lỗi khi giao dịch.

Kiểu dữ liệu [EFunction](/docs/sdk/Reference/Constants#1-efunction)

```
@Override
public void onErrorTransaction(Constants.EFunction function, String error) {
    // TODO
}
```

## Full example


```
 String developerAddress = "0x6A6c53a166DDDbE7049982864d21C75AB18fc50C";
 String gameAddress = "0x13f1A9097A7Cd7BeBC5Ad5c79160db3067FEf20E";
 ChainverseSDK.getInstance().init(developerAddress,gameAddress,this, new ChainverseCallback() {

            @Override
            public void onInitSDKSuccess() {
                // TODO
            }

            @Override
            public void onError(int error) {
                switch (error){
                    case ChainverseError.ERROR_INIT_SDK:
                           // TODO
                        break;
                }

            }

            @Override
            public void onItemUpdate(ChainverseItem item, int type) {
                switch (type){
                    case ChainverseItem.TRANSFER_ITEM_TO_USER:
                            // TODO
                        break;
                    case ChainverseItem.TRANSFER_ITEM_FROM_USER:
                            // TODO
                        break;
                }
            }

            @Override
            public void onGetItems(ArrayList<ChainverseItem> items) {
                // TODO
            }

            @Override
            public void onGetListItemMarket(ArrayList<NFT> items, int count) {
                // TODO
            }

            @Override
            public void onGetMyAssets(ArrayList<NFT> items) {
                // TODO
            }

            @Override
            public void onGetDetailItem(NFT nft) {
                // TODO
            }

            @Override
            public void onConnectSuccess(String address) {
                // TODO
            }

            @Override
            public void onLogout(String address) {
                // TODO
            }
            
            @Override
            public void onSignMessage(String signed) {
                // TODO
            }

            @Override
            public void onSignTransaction(Constants.EFunction function, String signed) {
                // TODO
            }
            
            @Override
            public void onTransact(Constants.EFunction function, String tx) {
                // TODO
            }
            
            @Override
            public void onErrorTransaction(Constants.EFunction function, String error) {
                // TODO
            }
        });
        
        ChainverseSDK.getInstance().setScheme("your-app-scheme://");
```

## License

Chainverse SDK Android sử dụng những thư viện sau:
###### 1. Retrofit
- License: Apache License
- Home page: https://square.github.io/retrofit/
- Mục đích sử dụng: Để kết nối REST (API)
###### 2. RxJava - RxAndroid
- License: Apache License
- Home page: https://github.com/ReactiveX/RxJava
- Mục đích sử dụng: Xử lý bất động bộ khi connect API
###### 3. Socket io
- License: MIT License
- Home page: https://socket.io/
- Mục đích sử dụng: Xử lý realtime
###### 4. Web3j
- License: Apache License
- Home page: https://github.com/web3j/web3j
- Mục đích sử dụng: Connect với blockchain
