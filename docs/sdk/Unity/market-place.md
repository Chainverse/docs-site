---
sidebar_label: 'Market Place'
sidebar_position: 4
---

# Market Place

## 1. Hàm buyNFT
Hàm này sử dụng để mua item đang bán trên chợ. Hàm này trả về transaction hash. Thông tin transaction hash cũng sẽ được trả về qua callback [onTransact](/docs/sdk/Unity/over-view#9-callback-ontransact) 
(Khuyến khích xử lý logic trong hàm này).

**Chú ý**: Nếu bạn mua bằng token, bạn cần phải kiểm tra số lượng token đã approve cho chợ bằng hàm [isApproved (Token)](/docs/sdk/Unity/market-place#3-hàm-isapproved-token).
sử dụng hàm [approveToken](/docs/sdk/Unity/market-place#5-hàm-approvetoken) để approve token.

Nếu không approve token trước khi mua, bạn có thể sẽ gặp lỗi sau: **execution reverted: ERC20: transfer amount exceeds allowance**

```
/*
 buyNFT: Mua NFT trên chợ
 @param string currency
 @param long listingId
 @param price price
 */
CVSDKHandler.Instance.BuyNFT(currency, listingId, price);
```

![buy nft](/img/buyNFT.png)

## 2. Hàm sellNFT
Hàm này sử dụng để bán item lên chợ. Hàm này trả về transaction hash. Thông tin transaction hash cũng sẽ được trả về qua callback [onTransact](/docs/sdk/Unity/over-view#9-callback-ontransact)
 (Khuyến khích xử lý logic trong hàm này).

**Chú ý**: Nếu bạn muốn bán item lên chợ, bạn cần phải kiểm tra item đó đã được approved cho chợ hay chưa bằng hàm [isApproved (NFT)](/docs/sdk/Unity/market-place#4-hàm-isapproved-nft).
Sử dụng hàm [approveNFT](/docs/sdk/Unity/market-place#6-hàm-approvenft) để approve item.

Nếu không approve item trước khi bán, bạn có thể sẽ gặp lỗi sau: **execution reverted: ERC721: transfer caller is not owner nor approved**
__
Sau khi đăng bán thành công, NFT có thể giao dịch trên blockchain, tuy nhiên NFT vẫn chưa hiển thị ngay trên ChainVerse Market. Để NFT hiển thị trên ChainVerse Market thì cần phải gọi hàm [publishNFT](#7-hàm-publishnft)


```
/*
 sellNFT: Hàm này sử dụng để bán item lên chợ
 @param string NFT
 @param long tokenId
 @param double price
 @param string currency
 */
CVSDKHandler.Instance.SellNFT(nft, tokenId, price, currency);
```

![sell nft](/img/sellNFT.png)

## 3. Hàm isApproved (Token)
Hàm này sử dụng để lấy số lượng token mà bạn đã approved cho một địa chỉ nào đó. Thông tin transaction hash cũng sẽ được trả về qua callback [onTransact](/docs/sdk/Unity/over-view#9-callback-ontransact)
(Khuyến khích xử lý logic trong hàm này).

**Chú ý**: Trước khi muốn mua item trên chợ, bạn cần phải approve một lượng token (**không nhỏ hơn giá trị của item**) cho chợ

```
//*
 IsApproved(Token): Hàm này sử dụng để kiểm tra token số lượng token approve vào chợ
 @param string token
 @param string owner
 @param string spender
 */
var rs = CVSDKHandler.Instance.IsApproved(token, owner, spender);
Debug.Log(rs);
```

## 4. Hàm isApproved (NFT)
Hàm này sử dụng để kiểm tra item bạn muốn bán đã được approved cho chợ chưa.

**Chú ý**: Trước khi muốn bán item, bạn phải approve item đó cho chợ.


```
/*
 isApproved(NFT): Hàm này sử dụng để kiểm tra NFT đã được approve hay là chưa
 @param nft nft
 @param long tokenId
 */
CVSDKHandler.Instance.IsApproved(nft, tokenId);
```

## 5. Hàm approveToken
Hàm này sử dụng để approve token cho một địa chỉ. Hàm này trả về transaction hash. Thông tin transaction hash cũng sẽ được trả về qua callback [onTransact](/docs/sdk/Unity/over-view#9-callback-ontransact)
(Khuyến khích xử lý logic trong hàm này).
```
/*
 approveToken: Hàm này sử dụng để approve token cho một địa chỉ
@param String token
@param String spender
@param String amount
 */
CVSDKHandler.Instance.ApproveToken(token, spender, amount);
```

## 6. Hàm approveNFT
Hàm này sử dụng để approve item bạn muốn bán cho chợ. Hàm này trả về transaction hash. Thông tin transaction hash cũng sẽ được trả về qua callback [onTransact](/docs/sdk/Unity/over-view#9-callback-ontransact)
(Khuyến khích xử lý logic trong hàm này).

```
/*
 approveNFT: Hàm này sử dụng để approve NFT trước khi bán lên chợ
 @param string nft
 @param long tokenId
 */
CVSDKHandler.Instance.ApproveNFT(nft, tokenId);
```

## 7. Hàm publishNFT
Hàm này sử dụng để publish item của bạn lên ChainVerse Market. Sau khi bán thông qua hàm [sellNFT](/docs/sdk/Unity/market-place#2-hàm-sellnft) thì NFT đã được bán trên blockchain, tuy nhiên vẫn chưa được hiển thị ở trên ChainVerse Market. Chính vì vậy cần phải gọi hàm **publishNFT**



```
/*
 @param string nft
 @param long tokenId
 */
CVSDKHandler.Instance.PublishNFT(nft, tokenId);

//Các hàm callback tại Assets/Chainverse/SDK/CVSDKPublishNFTReceiver.cs 
public void onSuccess()
{
    Debug.Log("onSuccess");
}
public void onError(string s)
{
    Debug.Log("onError " + s);
}
```

#### 8. Hàm cancelSell
Hàm dùng để dừng bán NFT lên chợ. Thông tin trả về là transaction hash qua callback [onTransact](/docs/sdk/Unity/over-view#9-callback-ontransact)


```
/*
 @param long listingId
 */
CVSDKHandler.Instance.CancelSellNFT(listingId);

```


