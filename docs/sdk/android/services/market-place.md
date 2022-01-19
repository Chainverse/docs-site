---
sidebar_label: 'Market Place Service'
sidebar_position: 1
---

# Market Place
## 1. Hàm buyNFT
Sử dụng hàm này để mua item của game đang bán trên chợ. Thông tin transaction hash sẽ được trả về qua callback [onBuy](/docs/sdk/android/over-view#10-callback-onbuy).

Hàm này sử dụng giao diện của sdk.

Nếu bạn muốn sử dụng giao diện riêng thì gọi đến hàm logic [buyNFT](#2-hàm-buynft)
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

## 2. Hàm buyNFT
Hàm này sử dụng để mua item đang bán trên chợ. Hàm này trả về transaction hash.

**Chú ý**: Nếu bạn mua bằng token, bạn cần phải kiểm tra số lượng token đã approve cho chợ bằng hàm [isApproved (Token)](#4-hàm-isapproved-token).
sử dụng hàm [approveNFT](#7-hàm-approvenft) để approve token.

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

## 3. Hàm sellNFT
Hàm này sử dụng để bán item lên chợ. Hàm này trả về transaction hash.

**Chú ý**: Nếu bạn muốn bán item lên chợ, bạn cần phải kiểm tra item đó đã được approved cho chợ hay chưa bằng hàm [isApproved (NFT)](#5-hàm-isapproved-nft).
Sử dụng hàm [approveNFT](#7-hàm-approvenft) để approve item.

Nếu không approve item trước khi bán, bạn có thể sẽ gặp lỗi sau: **execution reverted: ERC721: transfer caller is not owner nor approved**

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

## 4. Hàm isApproved (Token)
Hàm này sử dụng để lấy số lượng token mà bạn đã approved cho một địa chỉ nào đó.

**Chú ý**: Trước khi muốn mua item trên chợ, bạn cần phải approve một lượng token (**không nhỏ hơn giá trị của item**) cho chợ

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

## 5. Hàm isApproved (NFT)
Hàm này sử dụng để kiểm tra item bạn muốn bán đã được approved cho chợ chưa.

**Chú ý**: Trước khi muốn bán item, bạn phải approve item đó cho chợ.

```
/**
 * isApproved
 * @param nft
 * @param tokenId
 * return boolean
 */
ChainverseSDK.getInstance().isApproved(String nft, BigInteger tokenId);
```

## 6. Hàm approveToken
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

## 7. Hàm approveNFT
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

