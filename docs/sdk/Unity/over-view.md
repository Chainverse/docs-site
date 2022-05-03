---
sidebar_label: 'Tổng Quan'
sidebar_position: 1
---

# Chainverse SDK for Unity

### Cài đặt thủ công
#### Bước 1: Tải xuống ChainverseUnitySDK.unitypackage
Tải xuống ChainverseUnitySDK.unitypackage tại https://github.com/Chainverse/unity-sdk/releases
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

### Thiết lập đối với iOS (comming soon)

## Tích hợp SDK
### Trước khi bắt đầu
Bạn phải cài đặt ChainverseUnitySDK.unitypackage

Tài liệu này chứa các tham số bắt buộc. Bạn phải đảm bảo khai báo chúng.

1. "Game Address": Địa chỉ contract của game.
2. "Developer Address": Địa chỉ contract của developer.
3. "App Scheme": Khai báo scheme để connect Chainverse.

#### Bướ​c 1: Khởi tạo SDK
Chainverse SDK Init phải được gọi một lần khi ứng dụng khởi động thông qua lớp CVSDKHandler, Gọi hàm `CVSDKHandler.Instance.Init(developerAddress, gameAddress)` trong Scene đầu tiên của bạn.

```
string developerAddress = "0x6A6c53a166DDDbE7049982864d21C75AB18fc50C";
string gameAddress = "0x13f1A9097A7Cd7BeBC5Ad5c79160db3067FEf20E";
CVSDKHandler.Instance.Init(developerAddress, gameAddress);
```

#### Bướ​c 2. Gọi hàm `CVSDKHandler.Instance.SetScheme("your-app-scheme://")` để hứng dữ liệu từ app ví Chainverse
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
public void onConnectSuccess(string s)
{
    Debug.Log("onConnectSuccess " + s);
}
```

#### 4. Callback onLogout
Khi user thực hiện thao tác đăng xuất callback này sẽ được gọi. Thông tin trả về là địa chỉ ví của user. 


```
public void onLogout(string s)
{
   Debug.Log("onLogout " + s);
}
```

#### 5. Callback onGetListItemMarket

Khi hàm `CVSDKHandler.Instance.GetListItemOnMarket(filterMarket)` callback này sẽ trả về danh sách NFT trong chợ.

Bạn sẽ xử lý NFT trong chợ của bạn ở callback này.

```
//Gọi hàm
FilterMarket filterMarket = new FilterMarket(0, 10, "");
string str = JsonConvert.SerializeObject(filterMarket);
Debug.Log("GetListItemOnMarket1 :" + str);
CVSDKHandler.Instance.GetListItemOnMarket(str);

//Callback
public void onGetListItemMarket(string nftListJson)//
{
    string[] chainverseItemJson1 = nftListJson.Split('\n');
    int i = int.Parse(chainverseItemJson1[1]);
    Debug.Log("onGetListItemMarket");
    Debug.Log(chainverseItemJson1[0]);
    Debug.Log(i);
    List<NFT> nftList = JsonConvert.DeserializeObject<List<NFT>>(chainverseItemJson1[0]);
    foreach (var item in nftList)
    {
       Debug.Log(item.getOwner());
    }
}
```

#### 6. Callback onGetDetailItem

Khi hàm gọi `CVSDKHandler.Instance.GetDetailNFT(nft, tokenId)` callback này sẽ trả về thông tin detail của NFT.

Bạn sẽ xử lý NFT trong chợ của bạn ở callback này.

```
//Gọi hàm
CVSDKHandler.Instance.GetDetailNFT(nft, tokenId);

//Callback
public void onGetDetailItem(string nftJson)
{
    Debug.Log("onGetDetailItem");
    Debug.Log(nftJson);
    NFT nft = JsonConvert.DeserializeObject<NFT>(nftJson);

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

Khi hàm gọi `CVSDKHandler.Instance.GetMyAsset();` callback này sẽ trả về danh sách NFT của user

Bạn sẽ xử lý NFT của bạn ở callback này.

##### Objective C
```
public void onGetMyAssets(string nftListJson)
{
    Debug.Log("onGetMyAssets");
    Debug.Log(nftListJson);
    List<NFT> nftList = JsonConvert.DeserializeObject<List<NFT>>(nftListJson);

    foreach (var item in nftList)
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
public void onItemUpdate(string chainverseItemJson)
{
        string[] chainverseItemJson1 = chainverseItemJson.Split('\n');
        int i = int.Parse(chainverseItemJson1[1]);

        Debug.Log("onItemUpdate");
        ChainverseItem chainverseItem = JsonConvert.DeserializeObject<ChainverseItem>(chainverseItemJson1[0]);
        Debug.Log(i);
        Debug.Log(chainverseItem.getGame_address());
        Debug.Log(chainverseItem.getAttributes());
        Debug.Log(chainverseItem.getItem_id());

}
```

#### 9. Callback onTransact

Callback này sẽ trả về transaction hash và function khi thực hiện các chức năng blockchain


##### Objective C
```
public void onTransact(string s)
{
  string[] chainverseItemJson1 = s.Split('\n');
  int eFunctionInt = int.Parse(chainverseItemJson1[0]);
  Constants.EFunction eFunction = (Constants.EFunction)eFunctionInt;
  string msg = chainverseItemJson1[1];

  Debug.Log("onTransact");
  Debug.Log(msg);
  Debug.Log(eFunction);
}
```