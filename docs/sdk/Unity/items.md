---
sidebar_label: 'Items'
sidebar_position: 3
---


## 1. Hàm getListItemOnMarket
Sử dụng hàm này để lấy danh sách ITEM của game đang bán trên chợ. Thông tin sẽ được trả về qua callback [onGetListItemMarket](/docs/sdk/Unity/over-view#5-callback-ongetlistitemmarket).


```
#if UNITY_ANDROID
FilterMarket filterMarket = new FilterMarket(0, 10, "");
string str = JsonConvert.SerializeObject(filterMarket);
CVSDKHandler.Instance.GetListItemOnMarket(str);
#endif
        
#if UNITY_IOS
CVSDKHandler.Instance.GetListItemOnMarket(0,10);
#endif
```


![Docusaurus logo](/img/get-item-on-market.png)

## 2. Hàm getMyAsset
Sử dụng hàm này để lấy danh sách item user đang sở hữu (Kể cả đang được bán trên chợ). Thông tin sẽ được trả về qua callback [onGetMyAssets](/docs/sdk/Unity/over-view#7-callback-ongetmyassets).


```
CVSDKHandler.Instance.GetMyAsset();
```

![Docusaurus logo](/img/get-my-assets.png)

## 3. Hàm getDetailNFT
Sử dụng hàm này để lấy thông tin chi tiết của 1 item (Thông tin này là Off chain). Thông tin sẽ được trả về qua callback [onGetDetailItem](/docs/sdk/Unity/over-view#6-callback-ongetdetailitem).


```
/*
 getDetailNFT: Hàm này sử dụng để lấy thông tin chi tiết của một NFT (dữ liệu offchain)
 @param string nft
 @param long tokenId
 */
CVSDKHandler.Instance.GetDetailNFT(nft, tokenId);
```

![Docusaurus logo](/img/get-detail.png)

## 4. Hàm getNFT
Sử dụng hàm này để lấy thông tin item trên blockchain.


```
/*
 getNFT: Hàm này sử dụng để lấy thông tin chi tiết của một NFT (dữ liệu onchain)
 @param string nft
 @param long tokenId
 */
string nftContract = nftTest.text;
long tokenId = long.Parse(tokenidTest.text);
#if UNITY_ANDROID
NFT nft = CVSDKHandler.Instance.GetNFT(nftContract, tokenId);
Debug.Log("GetNFT1");
Debug.Log(nft.getNft());
Debug.Log(nft.getName());
Debug.Log(nft.getAttributes());
Debug.Log(nft.getListing()?.getPrice());
Debug.Log(nft.getListing()?.getTokenId());
Debug.Log(nft.getInfoSell()?.getPrice());
Debug.Log(nft.getInfoSell()?.getListingId());
#endif

#if UNITY_IOS
CVSDKHandler.Instance.GetNFT(nftContract, tokenId);
#endif

//Callback (chỉ sử dụng với platform iOS)
public void OnGetNFT(string Item)
{
   Debug.Log("OnGetNFT");
   Debug.Log(Item);
   NFT nft = JsonConvert.DeserializeObject<NFT>(Item);

   Debug.Log(nft.getNft());
   Debug.Log(nft.getName());
   Debug.Log(nft.getTokenId());
   Debug.Log(nft.getAttributes());
   Debug.Log(nft.getListing()?.getTokenId());
   Debug.Log(nft.getInfoSell()?.getPrice());
   Debug.Log(nft.getInfoSell()?.getCurrencyInfo()?.getCurrency());
   Debug.Log(nft.getInfoSell()?.getListingId());
}
```

![Docusaurus logo](/img/get-nft.png)

## 5. Hàm transferItem
Sử dụng hàm này để chuyển item sang địa chỉ ví khác. Hàm này trả về transaction hash. Thông tin transaction hash cũng sẽ được trả về qua callback [onTransact](/docs/sdk/Unity/over-view#9-callback-ontransact)
(Khuyến khích xử lý logic trong hàm này).


```
/*
 transferItem: Hàm này sử dụng để chuyển NFT sang địa chỉ khác
 @param string to
 @param string nft
 @param long tokenId
 */
CVSDKHandler.Instance.TransferItem(to, nft, tokenId);
```

![Docusaurus logo](/img/transfer-item.png)
