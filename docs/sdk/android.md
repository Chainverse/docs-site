---
sidebar_label: 'Android'
sidebar_position: 4
---

# Chainverse SDK for Android

## Installation
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
implementation 'com.github.Chainverse:android-sdk:1.0.17'
```

### Config trong file AndroidManifest.xml
#### Bước 1: Khai báo permission
Khai báo quyền sử dụng Internet. 
```
<uses-permission android:name="android.permission.INTERNET" />
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

#### Bước 3: Khai báo  ChainverseAcitivty
Để sử dụng giao diện của SDK 

```
<activity
            android:name="com.chainverse.sdk.ui.ChainverseSDKActivity"
            android:configChanges="orientation|keyboardHidden|screenSize|locale"
            android:theme="@style/ChainverseSDKTheme"
            android:windowSoftInputMode="adjustResize"/>
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
Import class ChainverseSDK  và ChainverseCallback
```
import com.chainverse.sdk.ChainverseCallback;
import com.chainverse.sdk.ChainverseSDK;
```

#### Bước 2: Khởi tạo SDK
Khai báo DeveloperAddress, GameAddress, Scheme
```
String developerAddress = "DeveloperAddress";
String gameAddress = "GameAddress";
ChainverseSDK.getInstance().init(developerAddress,gameAddress, activity, new ChainverseCallback);
ChainverseSDK.getInstance().setScheme("your-app-scheme://");
```

#### Bước 3: Implement các hàm callback
##### 1. Callback onInitSDKSuccess
Khi khởi tạo SDK callback sẽ được gửi lại, để thông báo là đã khởi tạo thành công.

Lưu ý: Các chức năng trong SDK sẽ không được thực thi, nếu quá trình khởi tạo SDK bị lỗi. Và không có callback onInitSDKSuccess. Mã lỗi sẽ được callback ở hàm onError.

```
@Override
public void onInitSDKSuccess() {
}
```

##### 2. Callback onError
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

##### 3. Callback onConnectSuccess
Khi user connect tới ví Chainverse thành công thì sẽ có callback này. Thông tin trả về là địa chỉ ví của user. 

```
@Override
public void onConnectSuccess(String address) {
   
}
```

##### 4. Callback onLogout
Khi user thực hiện thao tác đăng xuất callback này sẽ được gọi. Thông tin trả về là địa chỉ ví của user. 

```
@Override
public void onLogout(String address) {
            
}
```

##### 5. Callback onGetItems
Khi hàm `ChainverseSDK.getInstance().getItems;` callback này sẽ trả về thông tin là danh sách ITEM của user đó. Và khi​ chuyển Item NFT qua lại giữa user - user trong 1 game, và chuyển từ game này sang game kia. Callback này sẽ được gọi REALTIME. 

Bạn sẽ xử lý ITEM trong game của bạn ở callback này.

```
@Override
public void onGetItems(ArrayList<ChainverseItem> items) {
            
}
```

##### 6. Callback onItemUpdate
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

##### 7. Callback onGetListItemMarket
Hàm callback này trả về danh sách các items của một game đang bán trên chợ.

Bạn sẽ xử lý ITEM trên chợ ở callback này.

Lưu ý: Vì danh sách được lấy từ database (Off chain) nên các thông tin trên blockchain sẽ không được chính xác. Chính vì vậy, chúng ta cần phải gọi hàm [getNFT](#12-hàm-getnft) để lấy các thông tin đang có trên blockchain.

```
@Override
public void onGetListItemMarket(ArrayList<NFT> items) {

}
```

##### 8. Callback onGetMyAssets
Hàm callback này trả về danh sách các items của user đang sở hữu.

Bạn sẽ xử lý ITEM của user ở callback này.

Lưu ý: Vì danh sách được lấy từ database (Off chain) nên các thông tin trên blockchain sẽ không được chính xác. Chính vì vậy, chúng ta cần phải gọi hàm [getNFT](#12-hàm-getnft) để lấy các thông tin đang có trên blockchain.

```
@Override
public void onGetMyAssets(ArrayList<NFT> items) {

}
```

##### 9. Callback onGetDetailItem
Hàm callback trả về thông tin chi tiết của item (Off chain)

```
@Override
public void onGetDetailItem(NFT nft) {

}
```


##### 10. Callback onBuy
Hàm callback trả về transaction hash(tx) của một giao dịch.

Bạn sẽ xử lý tx sau khi giao dịch thành công trên hàm này.

```
@Override
public void onBuy(String tx) {
    // TODO
}
```

##### Full example


```
 String developerAddress = "0x6A6c53a166DDDbE7049982864d21C75AB18fc50C";
 String gameAddress = "0x13f1A9097A7Cd7BeBC5Ad5c79160db3067FEf20E";
 ChainverseSDK.getInstance().init(developerAddress,gameAddress,this, new ChainverseCallback() {

            @Override
            public void onInitSDKSuccess() {

            }

            @Override
            public void onError(int error) {
                switch (error){
                    case ChainverseError.ERROR_INIT_SDK:
                        break;
                }

            }

            @Override
            public void onItemUpdate(ChainverseItem item, int type) {
                LogUtil.log("onItemUpdate",item);
                switch (type){
                    case ChainverseItem.TRANSFER_ITEM_TO_USER:
                        break;
                    case ChainverseItem.TRANSFER_ITEM_FROM_USER:
                        break;
                }
            }

            @Override
            public void onGetItems(ArrayList<ChainverseItem> items) {
                LogUtil.log("onGetItems",items);
            }

            @Override
            public void onGetListItemMarket(ArrayList<NFT> items) {

            }

            @Override
            public void onGetMyAssets(ArrayList<NFT> items) {

            }

            @Override
            public void onGetDetailItem(NFT nft) {

            }

            @Override
            public void onConnectSuccess(String address) {
                ChainverseSDK.getInstance().getItems();
            }

            @Override
            public void onLogout(String address) {
                
            }
            
            @Override
            public void onBuy(String tx) {
                LogUtil.log("transasction has", tx)
            }
        });
        ChainverseSDK.getInstance().setScheme("your-app-scheme://");
```

## Functions
### Các hàm API
#### 1. Hàm showConnectView
Hàm này hiển thị màn hình danh sách các ví để user lựa chọn connect. 

```
ChainverseSDK.getInstance().showConnectView();
```

#### 2. Hàm connectWithChainverse
Sử dụng hàm này để kết nối với ví Chainverse, mà không cần hiển thị giao diện. 

```
ChainverseSDK.getInstance().connectWithChainverse();
```

#### 3. Hàm getItems
Sử dụng hàm này để lấy danh sách ITEM của user đang trong game. Thông tin sẽ được trả về qua callback  onGetItems .

```
ChainverseSDK.getInstance().getItems();

//Callback
@Override
public void onGetItems(ArrayList<ChainverseItem> items) {
            
}
```

#### 4. Hàm logout
Gọi hàm này để thực hiện logout. Thông tin được trả về qua callback onLogout .

```
ChainverseSDK.getInstance().logout();

//Callback
@Override
public void onLogout(String address) {
            
}
```

#### 5. Hàm hứng data được trả về từ ví Chainverse
Khi connect thành công với ví Chainverse. Chainverse sẽ mở lại app/game thông qua scheme (đã khai báo ở phần Intergrate SDK). Vì vậy cần khai báo các hàm này để Chainverse SDK xử lý dữ liệu được trả về từ ví Chainverse.

```
ChainverseSDK.getInstance().onNewIntent(intent);
```

Khai báo trong hàm onNewIntent của Activity

```
@Override
protected void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
    // getIntent() should always return the most recent
    setIntent(intent);
    ChainverseSDK.getInstance().onNewIntent(intent);
}
```

#### 6. Hàm setKeepConnect
Hàm này tuỳ chọn thiết lập trạng thái giữ connect với ví Chainverse (Khi vào lại app không cần phải kết nối lại ví)
 
true : Giữ trạng thái keep connect.
false: Không giữ trạng thái keep connect.

```
ChainverseSDK.getInstance().setKeepConnect(true);
```

#### 7. Hàm getVersion
Trả về version của SDK

```
ChainverseSDK.getInstance().getVersion();
```

#### 8. Hàm setScheme
Để config khi connect với ví Chainverse (Ví Chainverse sẽ mở lại app thông qua config này) 

```
ChainverseSDK.getInstance().setScheme("your-app-scheme://");
```

#### 9. Hàm getUser
Trả về thông tin của user bao gồm : address và signature

```
ChainverseUser info = ChainverseSDK.getInstance().getUser();
info.getAddress();
info.getSignature();
```

#### 10. Hàm isUserConnected
Kiểm tra trạng thái connect ví của user. Trả về boolean

```
boolean isConnect = ChainverseSDK.getInstance().isUserConnected()
```
#### 11. Hàm getListItemOnMarket
Sử dụng hàm này để lấy danh sách ITEM của game đang bán trên chợ. Thông tin sẽ được trả về qua callback [onGetListItemMarket](#7-callback-ongetlistitemmarket).

```
/**
 * getItemOnMarket
 * @param FilterMarket
 * return
 */
ChainverseSDK.getInstance().getItemOnMarket(FilterMarket filterMarket);

//Callback
@Override
public void onGetListItemMarket(ArrayList<NFT> items) {
            
}
```

#### 12. Hàm getNFT
Sử dụng hàm này để lấy thông tin item trên blockchain.

```
/**
 * getNFT
 * @param nft
 * @param tokenId
 * return NFT
 */
ChainverseSDK.getInstance().getNFT(String nft, BigInteger tokenId);
```

#### 13. Hàm getMyAsset
Sử dụng hàm này để lấy danh sách item user đang sở hữu (Kể cả đang được bán trên chợ). Thông tin sẽ được trả về qua callback [onGetMyAssets](#8-callback-ongetmyassets).

```
/**
 * getMyAsset
 * return
 */
ChainverseSDK.getInstance().getMyAsset();


//Callback
@Override
public void onGetMyAssets(ArrayList<NFT> items) {
            
}
```

#### 14. Hàm getDetailNFT
Sử dụng hàm này để lấy thông tin chi tiết của 1 item (Thông tin này là Off chain). Thông tin sẽ được trả về qua callback [onGetDetailItem](#9-callback-ongetdetailitem).

```
/**
 * getDetailNFT
 * @param nft
 * @param tokenId
 * return
 */
ChainverseSDK.getInstance().getDetailNFT(String nft, BigInteger tokenId);


//Callback
@Override
public void onGetDetailItem(NFT items) {
            
}
```

#### 15. Hàm buyNFT
Sử dụng hàm này để mua item của game đang bán trên chợ. Thông tin transaction hash sẽ được trả về qua callback [onBuy](##10-callback-onbuy).

Hàm này sử dụng giao diện của sdk.

Nếu bạn muốn sử dụng giao diện riêng thì gọi đến hàm logic [buyNFT](#20-hàm-buynft)
```
/**
 * buyNFT
 * @param currency
 * @param listing_id
 * @param price
 * @param isAuction
 * return
 */
ChainverseSDK.getInstance().buyNFT(String currency, Long listing_id, Double price, boolean isAuction);

//Callback
@Override
public void onBuy(String tx) {
            
}
```
#### 16. Hàm isApproved
Hàm này sử dụng để lấy số lượng token mà bạn đã approved cho một địa chỉ nào đó.

Chú ý: Trước khi muốn mua item trên chợ, bạn cần phải approve một lượng token (**không nhỏ hơn giá trị của item**) cho chợ

```
/**
 * isApproved
 * @param token //địa chỉ token
 * @param owner // địa chỉ chủ sở hữu
 * @param spender // địa chỉ đã được approved
 * return BigInteger
 */
ChainverseSDK.getInstance().isApproved(String token, String owner, String spender);
```

#### 17. Hàm isApproved
Hàm này sử dụng để kiểm tra item bạn muốn bán đã được approved cho chợ chưa.

Chú ý: Trước khi muốn bán item, bạn phải approve item đó cho chợ.

```
/**
 * isApproved
 * @param nft
 * @param tokenId
 * return boolean
 */
ChainverseSDK.getInstance().isApproved(String nft, BigInteger tokenId);
```

#### 18. Hàm approveToken
Hàm này sử dụng để approve token cho một địa chỉ. Hàm này trả về transaction hash.
```
/**
 * approveToken
 * @param token // địa chỉ token
 * @param spender // địa chỉ sẽ được approved
 * @param amount // số lượng
 * return String
 */
ChainverseSDK.getInstance().approveNFT(String token, String spender, double amount);
```

#### 19. Hàm approveNFT
Hàm này sử dụng để approve item bạn muốn bán cho chợ. Hàm này trả về transaction hash.
```
/**
 * approveNFT
 * @param nft
 * @param tokenId
 * return String
 */
ChainverseSDK.getInstance().approveNFT(String nft, BigInteger tokenId);
```

#### 20. Hàm sellNFT
Hàm này sử dụng để bán item lên chợ. Hàm này trả về transaction hash.
```
/**
 * sellNFT
 * @param nft
 * @param tokenId
 * @param price
 * @param currency
 * return String
 */
ChainverseSDK.getInstance().sellNFT(String nft, BigInteger tokenId, double price, String currency);
```

#### 20. Hàm buyNFT
Hàm này sử dụng để mua item đang bán trên chợ. Hàm này trả về transaction hash.

Lưu ý: Nếu bạn mua bằng token, bạn cần phải kiểm tra số lượng token đã approve cho chợ bằng hàm [isApproved](#16-hàm-isapproved).

Nếu không approve token trước khi mua, bạn có thể sẽ gặp lỗi sau: **execution reverted: ERC20: transfer amount exceeds allowance**
```
/**
 * buyNFT
 * @param currency
 * @param listingId
 * @param price
 * return String
 */
ChainverseSDK.getInstance().buyNFT(String currency, BigInteger listingId, double price);
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



