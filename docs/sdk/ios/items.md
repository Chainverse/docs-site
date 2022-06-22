---
sidebar_label: 'Items'
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ví


## 1. Hàm getListItemOnMarket
Sử dụng hàm này để lấy danh sách ITEM của game đang bán trên chợ. Thông tin sẽ được trả về qua callback [didGetListItemMarket](/docs/sdk/ios/over-view#5-callback-didgetlistitemmarket).


```
/*
 getListItemOnMarket: Hàm này sử dụng để lấy danh sách NFT đang được bán trên chợ
 @param NSInteger page
 @param NSInteger pageSize
 */
[[ChainverseSDK shared] getListItemOnMarket:page pageSize:pageSize];

//Callback delegate
- (void)didGetListItemMarket:(NSMutableArray<NFT> *) items{
    
}
```


![Docusaurus logo](/img/get-item-on-market.png)

## 2. Hàm getMyAsset
Sử dụng hàm này để lấy danh sách item user đang sở hữu (Kể cả đang được bán trên chợ). Thông tin sẽ được trả về qua callback [didGetMyAssets](/docs/sdk/ios/over-view#7-callback-didgetmyassets).


```
[[ChainverseSDK shared] getMyAsset];

//Callback delegate
- (void)didGetMyAssets:(NSMutableArray<NFT> *) items{
   
}
```

![Docusaurus logo](/img/get-my-assets.png)

## 3. Hàm getDetailNFT
Sử dụng hàm này để lấy thông tin chi tiết của 1 item (Thông tin này là Off chain). Thông tin sẽ được trả về qua callback [didGetDetailItem](/docs/sdk/ios/over-view#6-callback-didgetdetailitem).


```
//*
 getDetailNFT: Hàm này sử dụng để lấy thông tin chi tiết của một NFT (dữ liệu offchain)
 @param NSString nft
 @param NSInteger tokenId
 */
[[ChainverseSDK shared] getDetailNFT:@"nft" tokenId:tokenId];

//Callback delegate
- (void)didGetDetailItem:(NFT*)item{
   
}
```

![Docusaurus logo](/img/get-detail.png)

## 4. Hàm getNFT
Sử dụng hàm này để lấy thông tin item trên blockchain.


```
/*
 getNFT: Hàm này sử dụng để lấy thông tin chi tiết của một NFT (dữ liệu onchain)
 @param NSString nft
 @param NSInteger tokenId
 */
[[ChainverseSDK shared] getNFT:nft tokenId:tokenId complete:^(NFT *item){
    //Xử lý ở đây    
        
}];

```

![Docusaurus logo](/img/get-nft.png)

## 5. Hàm transferItem
Sử dụng hàm này để chuyển item sang địa chỉ ví khác. Thông tin transaction hash cũng sẽ được trả về qua callback [onTransact](/docs/sdk/ios/over-view#9-callback-didtransact)


```
/*
 transferItem: Hàm này sử dụng để chuyển NFT sang địa chỉ khác
 @param NSString to
 @param NSString nft
 @param NSInteger tokenId
 */
[[ChainverseSDK shared] transferItem:@"to" nft:@"nft" tokenId:tokenId];
```
