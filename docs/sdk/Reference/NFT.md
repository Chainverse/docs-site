---
sidebar_label: 'NFT'
sidebar_position: 1
---

## NFT
Lớp NFT cung cấp các dữ liệu liên quan đến item của game.

| Name  | Type | Method | Description | 
| ------------- | ------------- | ------------- | ------------- |
| token_id  | BigInteger  | getTokenId | id của token | 
| name  | String  | getName | Tên của item | 
| nft  | String | getNft | Địa chỉ contract của item |
| owner  | String  | getOwner | Chủ sử hữu của item (user) | 
| ownerOnChain | String | getOwnerOnChain | Chủ sở hữu của item (thông tin on chain).Thông tin này sẽ bị null trong hàm callback [onGetListItemMarket](/docs/sdk/android/over-view#7-callback-ongetlistitemmarket) và [onGetMyAsset](/docs/sdk/android/over-view#8-callback-ongetmyassets) |
| attributes | String  | getAttributes | Thuộc tính của item |
| image | String  | getImage | Url media (ảnh, video, audio, gif, ảnh 3D) |
| image_preview | String  | getImagePreview | Url thumbnail của item (Nếu image là video, audio, ảnh 3D) |
| infoSell | InfoSell  | getInfoSell | Thông tin bán của item |
| type | [Type](#type)  | getType | Loại media nào đang được sử dụng cho item. Thông tin này sẽ bị null trong hàm [getNFT](/docs/sdk/android/items#5-hàm-getnft) |
| categories | ArrayList([Categories](#categories)) | getCategories | Thể loại của item. Thông tin này sẽ bị null trong hàm [getNFT](/docs/sdk/android/items#5-hàm-getnft) |
| network | [Network](#network)  | getNetwork | Mạng của của item trên blockchain. Thông tin này sẽ bị null trong hàm [getNFT](/docs/sdk/android/items#5-hàm-getnft) |
| auction | [Auction](#auction)  | getAuction | Thông tin đấu giá của item. Thông tin này sẽ bị null trong hàm callback [onGetListItemMarket](/docs/sdk/android/over-view#7-callback-ongetlistitemmarket) và [onGetMyAsset](/docs/sdk/android/over-view#8-callback-ongetmyassets)|
| listing | [Listing](#listing)  | getListing | Thông tin bán của item. Thông tin này sẽ bị null trong hàm callback [onGetListItemMarket](/docs/sdk/android/over-view#7-callback-ongetlistitemmarket) và [onGetMyAsset](/docs/sdk/android/over-view#8-callback-ongetmyassets) |
| status | [STATUS](#status) | getStatus | Trạng thái của item. Thông tin này sẽ bị null trong hàm [getNFT](/docs/sdk/android/items#5-hàm-getnft) |

## InfoSell
Lớp InfoSell cung cấp các dữ liệu liên quan đến thông tin bán của item.

| Name  | Type | Method | Description | 
| ------------- | ------------- | ------------- | ------------- |
| listing_id  | BigInteger  | getListingId | Id bán hoặc đấu giá (Id này dùng cho [buy](/docs/sdk/android/services/market-place#2-hàm-buynft). Hàm đấu giá phiên bản 1.0.26 hiện chưa hỗ trợ) | 
| price  | Double  | getPrice | Giá bán hoặc đấu giá của item | 
| is_auction  | Boolean | isAuction | True là đấu giá, false là bán |
| currency_info  | Currency  | getCurrencyInfo | Thông tin đồng của item đang bán | 

## Currency
Lớp Currency cung cấp các dữ liệu liên quan đến thông tin đồng của item đang bán.

| Name  | Type | Method | Description | 
| ------------- | ------------- | ------------- | ------------- |
| currency  | String  | getCurrency | Địa chỉ contract của token | 
| symbol  | String  | getSymbol | Biểu tượng của đồng | 
| decimal  | int | getDecimal | Decimal của đồng |
| name  | String  | getName | Tên của đồng | 

## Type
Lớp Type cung cấp thông tin loại item (ảnh, video, gif...)

| Name  | Type | Method | Description | 
| ------------- | ------------- | ------------- | ------------- |
| id  | String  | getId | id của loại | 
| name  | String  | getName | Tên loại | 

## Categories
Lớp Categories cung cấp thể loại của item

| Name  | Type | Method | Description | 
| ------------- | ------------- | ------------- | ------------- |
| id  | String  | getId | Id thể loại | 
| name  | String  | getName | Tên thể loại | 

## Network
Lớp Network cung cấp thông tin mạng của NFT

| Name  | Type | Method | Description | 
| ------------- | ------------- | ------------- | ------------- |
| name  | String  | getName | Tên mạng | 
| network  | String  | getNetwork | Địa chỉ network của NFT | 
| chain_id  | String  | getChainId | Chain id của network | 

## Auction
Lớp Auction cung cấp thông tin đấu giá của NFT (nếu có). Lớp này được kế thừa từ lớp [BaseInfo](#baseinfo)

| Name  | Type | Method | Description | 
| ------------- | ------------- | ------------- | ------------- |
| winner  | String  | getWinner | Địa chỉ người đang đấu giá thắng | 
| bid  | double  | getBid | Số tiền lớn nhất đang được đấu giá | 
| chain_id  | BigInteger  | getChainId | Chain id của network | 
| duration  | BigInteger  | getDuration | Thời gian đấu giá còn lại (Timestamp) | 
| end  | BigInteger  | getEnd | Thời gian kết thúc đấu giá (Timestapm) | 

## Listing
Lớp Listing cung cấp thông tin bán của NFT (nếu có). Lớp này được kế thừa từ lớp [BaseInfo](#baseinfo)

| Name  | Type | Method | Description | 
| ------------- | ------------- | ------------- | ------------- |
| price  | double  | getPrice | Giá bán của item (dùng cho param **price** của hàm [buy](/docs/sdk/android/services/market-place#2-hàm-buynft)) | 

## BaseInfo
Lớp BaseInfo cung cấp thông tin bán cơ bản của một NFT

| Name  | Type | Method | Description | 
| ------------- | ------------- | ------------- | ------------- |
| id  | BigInteger  | getId | Id bán hoặc đấu giá của item (dùng cho param **listing_id** của hàm [buy](/docs/sdk/android/services/market-place#2-hàm-buynft)) | 
| isEnded  | boolean  | isEnded | True là đã kết thúc bán hoặc đấu giá, false là ngược lại | 
| nft  | String  | getNft | Địa chỉ contract của NFT | 
| owner  | String  | getOwner | Địa chỉ chủ sở hữu NFT | 
| currency  | String  | getCurrency | Địa chỉ currency (dùng cho param **currency** của hàm [buy](/docs/sdk/android/services/market-place#2-hàm-buynft))  | 
| tokenId  | BigInteger  | getTokenId | Id của token | 
| fee  | int  | getFee | Phí bán trên chợ (Phí cho người bán) |

## STATUS
enum STATUS cung cấp trạng thái hiện tại của NFT.

| Name  | Description | 
| ------------- | ------------- |
| AUCTION  | Đang đấu giá | 
| LISTING  | Đang bán | 
| PENDING  | Đang chờ thực hiện tiến trình trên blockchain | 
| PRE_VIEW  | Đang chờ duyệt | 
| PRE_PUBLISH  | Đã duyệt và chờ public lên chợ | 
| PUBLISH  | Đang public trên chợ | 
