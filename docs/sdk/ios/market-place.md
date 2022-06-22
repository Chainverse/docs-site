---
sidebar_label: 'Market Place'
sidebar_position: 4
---

# Market Place

## 1. Hàm buyNFT
Hàm này sử dụng để mua item đang bán trên chợ. Thông tin transaction hash cũng sẽ được trả về qua callback [didTransact](/docs/sdk/ios/over-view#9-callback-didtransact) 

**Chú ý**: Nếu bạn mua bằng token, bạn cần phải kiểm tra số lượng token đã approve cho chợ bằng hàm [isApproved (Token)](#3-hàm-isapproved-token).
sử dụng hàm [approveToken](#5-hàm-approvetoken) để approve token.

Nếu không approve token trước khi mua, bạn có thể sẽ gặp lỗi sau: **execution reverted: ERC20: transfer amount exceeds allowance**

```
/*
 buyNFT: Mua NFT trên chợ
 @param NSString currency
 @param NSInteger listingId
 @param NSString price
 */
[[ChainverseSDK shared] buyNFT:@"currency" listingId:listingId price:@"price"];

//Callback delegate
- (void)didTransact:(int)function tx:(NSString *)tx{
    - Trả về function : 3 (buyNFT)
    - Trả về tx: transaction hash
}
```

![buy nft](/img/buyNFT.png)

## 2. Hàm sellNFT
Hàm này sử dụng để bán item lên chợ. Hàm này trả về transaction hash. Thông tin transaction hash cũng sẽ được trả về qua callback [didTransact](/docs/sdk/ios/over-view#9-callback-didtransact)
 (Khuyến khích xử lý logic trong hàm này).

**Chú ý**: Nếu bạn muốn bán item lên chợ, bạn cần phải kiểm tra item đó đã được approved cho chợ hay chưa bằng hàm [isApproved (NFT)](#4-hàm-isapproved-nft).
Sử dụng hàm [approveNFT](#6-hàm-approvenft) để approve item.

Nếu không approve item trước khi bán, bạn có thể sẽ gặp lỗi sau: **execution reverted: ERC721: transfer caller is not owner nor approved**
__
Sau khi đăng bán thành công, NFT có thể giao dịch trên blockchain, tuy nhiên NFT vẫn chưa hiển thị ngay trên ChainVerse Market. Để NFT hiển thị trên ChainVerse Market thì cần phải gọi hàm [publishNFT](#7-hàm-publishnft)


```
//*
 sellNFT: Hàm này sử dụng để bán item lên chợ
 @param NSString NFT
 @param NSInteger tokenId
 @param NSString price
 @param NSString currency
 */
[[ChainverseSDK shared] sellNFT:@"NFT" tokenId:tokenId price:@"price" currency:@"currency"];

//Callback delegate
- (void)didTransact:(int)function tx:(NSString *)tx{
  
    - Trả về function : 5 (sellNFT)
    - Trả về tx: transaction hash
}
```

![sell nft](/img/sellNFT.png)

## 3. Hàm isApproved (Token)
Hàm này sử dụng để lấy số lượng token mà bạn đã approved cho một địa chỉ nào đó. Thông tin transaction hash cũng sẽ được trả về qua callback [didTransact](/docs/sdk/ios/over-view#9-callback-didtransact)
(Khuyến khích xử lý logic trong hàm này).

**Chú ý**: Trước khi muốn mua item trên chợ, bạn cần phải approve một lượng token (**không nhỏ hơn giá trị của item**) cho chợ

```
//*
 /*
 isApproved(Token): Hàm này sử dụng để kiểm tra token số lượng token approve vào chợ
 @param NSString token
 @param NSString owner
 */
NSString * allowence = [[ChainverseSDK shared] isApproved:TOKEN_USDT owner:info.address];
```

## 4. Hàm isApproved (NFT)
Hàm này sử dụng để kiểm tra item bạn muốn bán đã được approved cho chợ chưa.

**Chú ý**: Trước khi muốn bán item, bạn phải approve item đó cho chợ.


```
/*
 /*
 isApproved(NFT): Hàm này sử dụng để kiểm tra NFT đã được approve hay là chưa
 @param NSString nft
 @param NSInteger tokenId
 */
BOOL isApproved = [[ChainverseSDK shared] isApproved:@"nft" tokenId:tokenId];

```

## 5. Hàm approveToken
Hàm này sử dụng để approve token cho một địa chỉ. Hàm này trả về transaction hash. Thông tin transaction hash cũng sẽ được trả về qua callback [didTransact](/docs/sdk/ios/over-view#9-callback-didtransact)
(Khuyến khích xử lý logic trong hàm này).
```
/*
 approveToken: Hàm này sử dụng để approve token cho một địa chỉ
 @param NSString token
 @param NSString amount
 */
[[ChainverseSDK shared] approveToken:@"token" amount:@"amount"]

//Callback delegate
- (void)didTransact:(int)function tx:(NSString *)tx{
     - Trả về function : approveToken = 1
     - Trả về tx: transaction hash
}
```

## 6. Hàm approveNFT
Hàm này sử dụng để approve item bạn muốn bán cho chợ. Hàm này trả về transaction hash. Thông tin transaction hash cũng sẽ được trả về qua callback [didTransact](/docs/sdk/ios/over-view#9-callback-didtransact)
(Khuyến khích xử lý logic trong hàm này).

```
/*
 approveNFT: Hàm này sử dụng để approve NFT trước khi bán lên chợ
 @param NSString nft
 @param NSInteger tokenId
 */
[[ChainverseSDK shared] approveNFT:@"nft" tokenId:tokenId];

//Callback delegate
- (void)didTransact:(int)function tx:(NSString *)tx{
    - Trả về function : 2 (approveNFT)
    - Trả về tx: transaction hash
}
```

## 7. Hàm publishNFT
Hàm này sử dụng để publish item của bạn lên ChainVerse Market. Sau khi bán thông qua hàm [sellNFT](#2-hàm-sellnft) thì NFT đã được bán trên blockchain, tuy nhiên vẫn chưa được hiển thị ở trên ChainVerse Market. Chính vì vậy cần phải gọi hàm **publishNFT**



```
/*
 publishNFT: Hàm này sử dụng để publish NFT lên chợ
 @param NSString nft
 @param NSInteger tokenId
 */
[[ChainverseSDK shared] publishNFT:@"nft" tokenId:tokenId complete:^(BOOL isPublished){
        
}];
```

