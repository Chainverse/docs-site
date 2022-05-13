---
sidebar_label: 'Tổng Quan'
sidebar_position: 1
---

# Chainverse SDK for Unity

### Cài đặt thủ công
#### Bước 1: Tải xuống ChainverseUnitySDK.unitypackage
Tải xuống [ChainverseUnitySDK.unitypackage](/unitypackage/ChainverseUnitySDK.unitypackage)
#### Bước 2: Import ChainverseUnitySDK.unitypackage vào dự án Unity

![Docusaurus logo](https://i.imgur.com/CvStroE.png)


### Thiết lập đối với android (Build bằng android studio)

#### Hứng dữ liệu từ app ví Chainverse
##### Bước 1: Tại file Assets/Plugins/Android/AndroidManifest.xml, Cấu hình scheme
```
<intent-filter android:autoVerify="true">
   <category android:name="android.intent.category.DEFAULT" />
   <category android:name="android.intent.category.BROWSABLE" />
   <action android:name="android.intent.action.VIEW" />
   <data android:scheme="your-app-scheme" />
</intent-filter>

``` 

Ví dụ:
```
<activity android:name="com.unity3d.player.UnityPlayerActivity" android:theme="@style/UnityThemeSelector">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
    <intent-filter android:autoVerify="true">
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <action android:name="android.intent.action.VIEW" />
        <data android:scheme="demo-app-chainverse"/>
    </intent-filter>
			
    <meta-data android:name="unityplayer.UnityActivity" android:value="true" />
</activity>
```

##### Bước 2: Tại file UnityPlayerActivity.java (Sau khi export project Android Studio) Gọi hàm `ChainverseSDK.getInstance().onNewIntent(intent);`

```
@Override protected void onNewIntent(Intent intent)
    {
        // To support deep linking, we need to make sure that the client can get access to
        // the last sent intent. The clients access this through a JNI api that allows them
        // to get the intent set on launch. To update that after launch we have to manually
        // replace the intent with the one caught here.
        setIntent(intent);
        mUnityPlayer.newIntent(intent);
        ChainverseSDK.getInstance().onNewIntent(intent);
    }
```

### Thiết lập đối với iOS (Build bằng Xcode)

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

####  Bước 8. Config trong file UnityAppController
Thiết lập `handleOpenUrl` để hứng dữ liệu từ app chainverse

```
#import "Chainverse/ChainverseSDK.h"

- (BOOL)application:(UIApplication*)app openURL:(NSURL*)url options:(NSDictionary<NSString*, id>*)options
{
   
    ....
    return [[ChainverseSDK shared] handleOpenUrl:(UIApplication *)app
                                  openURL:(NSURL *)url
                                  options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options];
    
}
```

## Tích hợp SDK
### Trước khi bắt đầu
Bạn phải cài đặt ChainverseUnitySDK.unitypackage

Tài liệu này chứa các tham số bắt buộc. Bạn phải đảm bảo khai báo chúng.

1. "Game Address": Địa chỉ contract của game.
2. "Developer Address": Địa chỉ contract của developer.
3. "App Scheme": Khai báo scheme để connect Chainverse.

#### Bướ​c 1: Khởi tạo SDK
Chainverse SDK Init phải được gọi một lần khi ứng dụng khởi động thông qua lớp CVSDKHandler, Gọi hàm `Init` trong Scene đầu tiên của bạn.

```
string DevelopAddress = "0x6A6c53a166DDDbE7049982864d21C75AB18fc50C";
string GameAddress = "0x13f1A9097A7Cd7BeBC5Ad5c79160db3067FEf20E";
string Scheme = "demo-app-chainverse://";
#if UNITY_IOS
CVSDKHandler.Instance.Init(DevelopAddress, GameAddress,scheme);
#endif


#if UNITY_ANDROID
CVSDKHandler.Instance.Init(DevelopAddress, GameAddress);
CVSDKHandler.Instance.SetScheme(Scheme);
#endif
```

#### Bướ​c 2. Gọi hàm `SetScheme` (chỉ gọi với plaform Android) để hứng dữ liệu từ app ví Chainverse
```
CVSDKHandler.Instance.SetScheme("demo-app-chainverse://");
```

#### Bướ​c 3. Xử lý callback
Các hàm callback tại Assets/Chainverse/SDK/CVSDKReciver.cs  
#### 1. Callback onInitSDKSuccess
Khi khởi tạo SDK callback sẽ được gửi lại, để thông báo là đã khởi tạo thành công.

Lưu ý: Các chức năng trong SDK sẽ không được thực thi, nếu quá trình khởi tạo SDK bị lỗi. Và không có callback onInitSDKSuccess. Mã lỗi sẽ được callback ở hàm didError.

```
public void onInitSDKSuccess()
{
    Debug.Log("onInitSDKSuccess ");
}
```

#### 2. Callback onError
Khi khởi tạo SDK hoặc có bất kỳ lỗi nào xả ra sẽ có callback này. Thông tin trả về là mã lỗi. Bạn có thể xem tất cả mã lỗi ở trang Error  Codes .

```
public void onError(int i)
{
   Debug.Log("onConnectSuccess " + i);
}
```

#### 3. Callback onConnectSuccess
Khi user connect tới ví Chainverse thành công thì sẽ có callback này. Thông tin trả về là địa chỉ ví của user. 

```
public void onConnectSuccess(string Address)
{
    Debug.Log("onConnectSuccess " + Address);
}
```

#### 4. Callback onLogout
Khi user thực hiện thao tác đăng xuất callback này sẽ được gọi. Thông tin trả về là địa chỉ ví của user. 


```
public void onLogout(string Address)
{
   Debug.Log("onLogout " + Address);
}
```

#### 5. Callback onGetListItemMarket

Khi hàm `GetListItemOnMarket` callback này sẽ trả về danh sách NFT trong chợ.

Bạn sẽ xử lý NFT trong chợ của bạn ở callback này.

```
public void OnGetListItemMarket(string Items)
{
     Debug.Log(Items);
     Debug.Log("OnGetListItemMarket");
     Debug.Log(Items);
     List<NFT> nfts = JsonConvert.DeserializeObject<List<NFT>>(Items);

     foreach (var item in nfts)
     {
        Debug.Log(item.getNft());
        Debug.Log(item.getOwner());
        Debug.Log(item.getName());
        Debug.Log(item.getAttributes());

        InfoSell infoSell = item.getInfoSell();
        Debug.Log(infoSell.getPrice());
        Debug.Log(infoSell.getListingId());

        Currency currency = infoSell.getCurrencyInfo();
        Debug.Log(currency.getCurrency());
        Debug.Log(currency.getSymbol());
        Debug.Log(currency.getName());

        Network network = item.getNetwork();
        Debug.Log(network.getName());
        Debug.Log(network.getNetwork());
        Debug.Log(network.getChainId());
     }
}
```

#### 6. Callback onGetDetailItem

Khi hàm gọi `GetDetailNFT` callback này sẽ trả về thông tin detail của NFT.

Bạn sẽ xử lý NFT trong chợ của bạn ở callback này.

```

public void OnGetDetailItem(string Item)
{
    Debug.Log("OnGetDetailItem");
    Debug.Log(Item);
    NFT nft = JsonConvert.DeserializeObject<NFT>(Item);

    Debug.Log(nft.getNft());
    Debug.Log(nft.getName());
    Debug.Log(nft.getTokenId());
    Debug.Log(nft.getListing()?.getTokenId());
    Debug.Log(nft.getInfoSell()?.getPrice());
    Debug.Log(nft.getInfoSell()?.getCurrencyInfo()?.getCurrency());
    Debug.Log(nft.getInfoSell()?.getListingId());
}
```

#### 7. Callback onGetMyAssets

Khi hàm gọi `GetMyAsset` callback này sẽ trả về danh sách NFT của user

Bạn sẽ xử lý NFT của bạn ở callback này.

```
public void OnGetMyAssets(string Items)
{
    Debug.Log("onGetMyAssets");
    Debug.Log(Items);
    List<NFT> nfts = JsonConvert.DeserializeObject<List<NFT>>(Items);

    foreach (var item in nfts)
    {
        Debug.Log(item.getOwner());
        Debug.Log(item.getName());
        Debug.Log(item.getAttributes());
    }
}
```

#### 8. Callback onItemUpdate

Khi​ chuyển NFT qua lại giữa user - user trong 1 game, và chuyển từ game này sang game kia. Callback này sẽ được gọi REALTIME. Thông tin trả về là 01 NFT đã move.

Bạn sẽ xử lý NFT trong game của bạn ở callback này.

```
public void OnItemUpdate(string ItemAndType)
{
    string[] ItemAndTypeArr = ItemAndType.Split('|');
    int type = int.Parse(ItemAndTypeArr[1]);
    //type
    //1:Xử lý item trong game khi item NFT chuyển tới tài khoản của bạn
    //2:Xử lý item trong game khi item NFT của bạn chuyến tời tài khoản khác


    Debug.Log("OnItemUpdate");
    Item chainverseItem = JsonConvert.DeserializeObject<Item>(ItemAndTypeArr[0]);
    Debug.Log(chainverseItem.getGame_address());
    Debug.Log(chainverseItem.getAttributes());
    Debug.Log(chainverseItem.getItem_id());

}
```

#### 9. Callback onTransact

Callback này sẽ trả về transaction hash và function khi thực hiện các chức năng blockchain



```
public void OnTransact(string transaction)
{
    string[] transactions = transaction.Split('|');
    int eFunctionInt = int.Parse(transactions[0]);
    Constants.EFunction eFunction = (Constants.EFunction)eFunctionInt;
    string hash = transactions[1];
    Debug.Log("OnTransact");
    Debug.Log(hash);
    Debug.Log(eFunction);
}
```

#### 10. Callback OnPublishNFT

Callback này sẽ trả về trạng thái publish NFT


```
public void OnPublishNFT(string s)
{
    Debug.Log("OnPublishNFT");
    Debug.Log(s);
}
```

#### 11. Callback OnGetNFT (chỉ dùng với platform iOS)

Callback này trả về thông tin NFT (on chain) khi gọi hàm `GetNFT`

```
public void OnGetNFT(string Item)
{
    Debug.Log("OnGetNFT");
    Debug.Log(Item);
    NFT nft = JsonConvert.DeserializeObject<NFT>(Item);

    Debug.Log(nft.getNft());
    Debug.Log(nft.getName());
    Debug.Log(nft.getTokenId());
    Debug.Log(nft.getListing()?.getTokenId());
    Debug.Log(nft.getInfoSell()?.getPrice());
    Debug.Log(nft.getInfoSell()?.getCurrencyInfo()?.getCurrency());
    Debug.Log(nft.getInfoSell()?.getListingId());
}
```