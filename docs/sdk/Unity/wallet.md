---
sidebar_label: 'Ví'
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ví

## 1. Hàm ShowConnectWalletView
Sử dụng hàm này để tạo ví theo giao diện của SDK. 

```
CVSDKHandler.Instance.ShowConnectWalletView();
```

![Docusaurus logo](/img/import-wallet.png)

## 2. Hàm Hàm connectWithChainverse
Sử dụng hàm này để kết nối với ví Chainverse, mà không cần hiển thị giao diện.

Lưu ý: Khi kết nối ví thông qua ChainVerse Wallet, mọi hành động giao dịch (Buy, approveToken, approvedNFT...) đều sẽ được trả transaction hash thông qua hàm callback onTransact

```
CVSDKHandler.Instance.ConnectWithChainverse();
```

![Docusaurus logo](/img/connect-wallet.png)

## 2. Hàm ShowWalletInfoView
Hàm này hiển thị màn hình thông tin của ví. Bao gồm các chức năng: Export private key, Secret Recovery Phrase.

```
CVSDKHandler.Instance.ShowWalletInfoView();
```

## 3. Hàm logout
Gọi hàm này để thực hiện logout. Thông tin được trả về qua callback onLogout .

```
CVSDKHandler.Instance.Logout();

//Delegate callback
public void onLogout(string Address)
{
    Debug.Log("onLogout " + Address);

}
```


## 5. Hàm SetKeepConnect
Hàm này tuỳ chọn thiết lập trạng thái giữ connect với ví Chainverse (Khi vào lại app không cần phải kết nối lại ví) 
*true : Giữ trạng thái keep connect.
*false: Không giữ trạng thái keep connect.

```
CVSDKHandler.Instance.SetKeepConnect(true);

```

## 6. Hàm GetVersion
Trả về version của SDK

```
CVSDKHandler.Instance.GetVersion();

```

## 7. Hàm GetUser
Trả về thông tin của user bao gồm : address và signature


```
User user = CVSDKHandler.Instance.GetUser();
Debug.Log("OnConnectSuccess " + user.getAddress());
Debug.Log("OnConnectSuccess " + user.getSignature());
```

## 8. Hàm IsUserConnected
Kiểm tra trạng thái connect ví của user. Trả về boolean

```
CVSDKHandler.Instance.IsUserConnected();

```

## 9. Hàm GetBalance
Sử dụng hàm này để lấy số dư native coin của ví.

```
CVSDKHandler.Instance.GetBalance();

```

![Docusaurus logo](/img/get-balance.png)

## 10. Hàm getBalance
Sử dụng hàm này để lấy số dư token của ví.
- CVT: 0x672021e3c741910896cad6D6121446a328ba5634
- USDT: 0x337610d27c682E347C9cD60BD4b3b107C9d34dDd


```
 CVSDKHandler.Instance.GetBalanceToken(token);

```

![Docusaurus logo](/img/get-balance-token.png)

## 11. Hàm getListCurrencies
Trả về danh sách [Currency](/docs/sdk/Reference/NFT#currency) game được hỗ trợ.

```
CVSDKHandler.Instance.GetListCurrencies();

```
