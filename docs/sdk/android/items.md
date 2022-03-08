---
sidebar_label: 'Items'
sidebar_position: 3
---

# Items
## 1. Hàm getItems
Sử dụng hàm này để lấy danh sách ITEM của user đang trong game. Thông tin sẽ được trả về qua callback  [onGetItems](/docs/sdk/android/over-view#5-callback-ongetitems) .

```
ChainverseSDK.getInstance().getItems();

//Callback
@Override
public void onGetItems(ArrayList<ChainverseItem> items) {
            
}
```

## 2. Hàm getListItemOnMarket
Sử dụng hàm này để lấy danh sách ITEM của game đang bán trên chợ. Thông tin sẽ được trả về qua callback [onGetListItemMarket](/docs/sdk/android/over-view#7-callback-ongetlistitemmarket).

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

## 3. Hàm getMyAsset
Sử dụng hàm này để lấy danh sách item user đang sở hữu (Kể cả đang được bán trên chợ). Thông tin sẽ được trả về qua callback [onGetMyAssets](/docs/sdk/android/over-view#8-callback-ongetmyassets).

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

## 4. Hàm getDetailNFT
Sử dụng hàm này để lấy thông tin chi tiết của 1 item (Thông tin này là Off chain). Thông tin sẽ được trả về qua callback [onGetDetailItem](/docs/sdk/android/over-view#9-callback-ongetdetailitem).

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

## 5. Hàm getNFT
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

## 6. Hàm transferItem
Sử dụng hàm này để chuyển item sang địa chỉ ví khác. Hàm này trả về transaction hash. Thông tin transaction hash cũng sẽ được trả về qua callback [onTransact](/docs/sdk/android/over-view#10-callback-ontransact)
(Khuyến khích xử lý logic trong hàm này).

```
/**
 * transferItem
 * @param to
 * @param nft
 * @param tokenId
 * return String
 */
ChainverseSDK.getInstance().transferItem(String to, String nft, BigInteger tokenId);
```
