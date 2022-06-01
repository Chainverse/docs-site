---
sidebar_label: 'Market Place'
sidebar_position: 4
---

# Market Place

## 1. Hàm buyNFT
Hàm này sử dụng để mua item đang bán trên chợ. Hàm này trả về transaction hash. Thông tin transaction hash cũng sẽ được trả về qua callback [onTransact](/docs/sdk/android/over-view#10-callback-ontransact) 
(Khuyến khích xử lý logic trong hàm này).__

**Chú ý**: Nếu bạn mua bằng token, bạn cần phải kiểm tra số lượng token đã approve cho chợ bằng hàm [isApproved (Token)](#3-hàm-isapproved-token).
sử dụng hàm [approveToken](#5-hàm-approvetoken) để approve token.

Nếu không approve token trước khi mua, bạn có thể sẽ gặp lỗi sau: **execution reverted: ERC20: transfer amount exceeds allowance**

params: [currency](/docs/sdk/Reference/NFT#nft), [listingId](/docs/sdk/Reference/NFT#nft), [price](/docs/sdk/Reference/NFT#nft)
```
/**
 * buyNFT
 * @param currency
 * @param listingId
 * @param price
 * return
 */
ChainverseSDK.getInstance().buyNFT(String currency, BigInteger listingId, double price);
```

![buy nft](/img/buyNFT.png)

## 2. Hàm sellNFT
Hàm này sử dụng để bán item lên chợ. Hàm này trả về transaction hash. Thông tin transaction hash cũng sẽ được trả về qua callback [onTransact](/docs/sdk/android/over-view#10-callback-ontransact)
 (Khuyến khích xử lý logic trong hàm này).

**Chú ý**: Nếu bạn muốn bán item lên chợ, bạn cần phải kiểm tra item đó đã được approved cho chợ hay chưa bằng hàm [isApproved (NFT)](#4-hàm-isapproved-nft).
Sử dụng hàm [approveNFT](#6-hàm-approvenft) để approve item.

Nếu không approve item trước khi bán, bạn có thể sẽ gặp lỗi sau: **execution reverted: ERC721: transfer caller is not owner nor approved**
__
Sau khi đăng bán thành công, NFT có thể giao dịch trên blockchain, tuy nhiên NFT vẫn chưa hiển thị ngay trên ChainVerse Market. Để NFT hiển thị trên ChainVerse Market thì cần phải gọi hàm [publishNFT](#7-hàm-publishnft)

params: [nft](/docs/sdk/Reference/NFT#nft), [tokenId](/docs/sdk/Reference/NFT#nft), [price](/docs/sdk/Reference/NFT#nft), [currency](/docs/sdk/Reference/NFT#nft)
```
/**
 * sellNFT
 * @param nft
 * @param tokenId
 * @param price
 * @param currency
 * return
 */
ChainverseSDK.getInstance().sellNFT(String nft, BigInteger tokenId, double price, String currency);
```

![sell nft](/img/sellNFT.png)

## 3. Hàm isApproved (Token)
Hàm này sử dụng để lấy số lượng token mà bạn đã approved cho một địa chỉ nào đó. Thông tin transaction hash cũng sẽ được trả về qua callback [onTransact](/docs/sdk/android/over-view#10-callback-ontransact)
(Khuyến khích xử lý logic trong hàm này).

**Chú ý**: Trước khi muốn mua item trên chợ, bạn cần phải approve một lượng token (**không nhỏ hơn giá trị của item**) cho chợ

```
/**
 * isApproved
 * @param token //địa chỉ token
 * @param owner // địa chỉ chủ sở hữu
 * @param spender // địa chỉ đã được approved
 * return double
 */
ChainverseSDK.getInstance().isApproved(String token, String owner, String spender);
```

## 4. Hàm isApproved (NFT)
Hàm này sử dụng để kiểm tra item bạn muốn bán đã được approved cho chợ chưa.

**Chú ý**: Trước khi muốn bán item, bạn phải approve item đó cho chợ.

params: [nft](/docs/sdk/Reference/NFT#nft), [tokenId](/docs/sdk/Reference/NFT#nft)

```
/**
 * isApproved
 * @param nft
 * @param tokenId
 * return boolean
 */
ChainverseSDK.getInstance().isApproved(String nft, BigInteger tokenId);
```

## 5. Hàm approveToken
Hàm này sử dụng để approve token cho một địa chỉ. Hàm này trả về transaction hash. Thông tin transaction hash cũng sẽ được trả về qua callback [onTransact](/docs/sdk/android/over-view#10-callback-ontransact)
(Khuyến khích xử lý logic trong hàm này).
```
/**
 * approveToken
 * @param token // địa chỉ token
 * @param spender // địa chỉ sẽ được approved
 * @param amount // số lượng
 * return
 */
ChainverseSDK.getInstance().approveToken(String token, String spender, double amount);
```

## 6. Hàm approveNFT
Hàm này sử dụng để approve item bạn muốn bán cho chợ. Hàm này trả về transaction hash. Thông tin transaction hash cũng sẽ được trả về qua callback [onTransact](/docs/sdk/android/over-view#10-callback-ontransact)
(Khuyến khích xử lý logic trong hàm này).

params: [nft](/docs/sdk/Reference/NFT#nft), [tokenId](/docs/sdk/Reference/NFT#nft)
```
/**
 * approveNFT
 * @param nft
 * @param tokenId
 * return
 */
ChainverseSDK.getInstance().approveNFT(String nft, BigInteger tokenId);
```

## 7. Hàm publishNFT
Hàm này sử dụng để publish item của bạn lên ChainVerse Market. Sau khi bán thông qua hàm [sellNFT](/docs/sdk/android/over-view#2-hàm-sellnft) thì NFT đã được bán trên blockchain, tuy nhiên vẫn chưa được hiển thị ở trên ChainVerse Market. Chính vì vậy cần phải gọi hàm **publishNFT**

params: [nft](/docs/sdk/Reference/NFT#nft), [tokenId](/docs/sdk/Reference/NFT#nft), [publishNFT](/docs/sdk/Reference/Actions#1-publishnft)

```
/**
 * approveNFT
 * @param nft
 * @param tokenId
 * @param publishNFT
 * return
 */
ChainverseSDK.getInstance().publishNFT(String nft, BigInteger tokenId, Action.publishNFT publishNFT);
```

