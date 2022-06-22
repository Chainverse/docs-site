---
sidebar_label: 'Items'
sidebar_position: 3
---

# Items
## 1. Hàm getItems
Sử dụng hàm này để lấy danh sách ITEM của user đang trong game. Thông tin sẽ được trả về qua callback  [onGetItems](/docs/sdk/android/over-view#5-callback-ongetitems).

param: [ChainverseItem](/docs/sdk/Reference/ChainVerseItem)
```
ChainverseSDK.getInstance().getItems();

//Callback 
@Override
public void onGetItems(ArrayList<ChainverseItem> items) {
            
}
```

![Docusaurus logo](/img/get-items.png)

## 2. Hàm getListItemOnMarket
Sử dụng hàm này để lấy danh sách ITEM của game đang bán trên chợ. Thông tin sẽ được trả về qua callback [onGetListItemMarket](/docs/sdk/android/over-view#7-callback-ongetlistitemmarket).

param: [FilterMarket](/docs/sdk/Reference/FilterMarket), [NFT](/docs/sdk/Reference/NFT)
```
/**
 * getItemOnMarket
 * @param FilterMarket
 * return
 */
ChainverseSDK.getInstance().getListItemOnMarket(FilterMarket filterMarket);

//Callback
@Override
public void onGetListItemMarket(ArrayList<NFT> items) {
            
}
```

![Docusaurus logo](/img/get-item-on-market.png)

## 3. Hàm getMyAsset
Sử dụng hàm này để lấy danh sách item user đang sở hữu (Kể cả đang được bán trên chợ). Thông tin sẽ được trả về qua callback [onGetMyAssets](/docs/sdk/android/over-view#8-callback-ongetmyassets).

param: [NFT](/docs/sdk/Reference/NFT)

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

![Docusaurus logo](/img/get-my-assets.png)

## 4. Hàm getDetailNFT
Sử dụng hàm này để lấy thông tin chi tiết của 1 item (Thông tin này là Off chain). Thông tin sẽ được trả về qua callback [onGetDetailItem](/docs/sdk/android/over-view#9-callback-ongetdetailitem).

param: [nft](/docs/sdk/Reference/NFT), [tokenId](/docs/sdk/Reference/NFT), [NFT](/docs/sdk/Reference/NFT)

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

![Docusaurus logo](/img/get-detail.png)

## 5. Hàm getNFT
Sử dụng hàm này để lấy thông tin item trên blockchain.

param: [nft](/docs/sdk/Reference/NFT), [tokenId](/docs/sdk/Reference/NFT), [NFT](/docs/sdk/Reference/NFT)

```
/**
 * getNFT
 * @param nft
 * @param tokenId
 * return NFT
 */
ChainverseSDK.getInstance().getNFT(String nft, BigInteger tokenId);
```

![Docusaurus logo](/img/get-nft.png)

## 6. Hàm transferItem
Sử dụng hàm này để chuyển item sang địa chỉ ví khác. Thông tin transaction hash cũng sẽ được trả về qua callback [onTransact](/docs/sdk/android/over-view#10-callback-ontransact)

param: [nft](/docs/sdk/Reference/NFT), [tokenId](/docs/sdk/Reference/NFT)

```
/**
 * transferItem
 * @param to // Địa chỉ nhận NFT
 * @param nft
 * @param tokenId
 * return
 */
ChainverseSDK.getInstance().transferItem(String to, String nft, BigInteger tokenId);
```

![Docusaurus logo](/img/transfer-item.png)

## 7. Hàm withdrawNFT
Sử dụng hàm này để rút item từ game về ví. Thông tin transaction hash cũng sẽ được trả về qua callback [onTransact](/docs/sdk/android/over-view#10-callback-ontransact)

param: [nft](/docs/sdk/Reference/NFT), [tokenId](/docs/sdk/Reference/NFT)

```
/**
 * withdrawNFT
 * @param nft
 * @param tokenId
 * return
 */
ChainverseSDK.getInstance().withdrawNFT(String nft, BigInteger tokenId);
```

![Docusaurus logo](/img/with-draw-nft.png)

## 8. Hàm moveItemToGame
Sử dụng hàm này để chuyển item từ ví vào game. Thông tin transaction hash cũng sẽ được trả về qua callback [onTransact](/docs/sdk/android/over-view#10-callback-ontransact)

param: [nft](/docs/sdk/Reference/NFT), [tokenId](/docs/sdk/Reference/NFT)

```
/**
 * moveItemToGame
 * @param nft
 * @param tokenId
 * return
 */
ChainverseSDK.getInstance().moveItemToGame(String nft, BigInteger tokenId);
```

![Docusaurus logo](/img/move-item-to-game.png)
