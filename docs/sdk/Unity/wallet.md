---
sidebar_label: 'Ví'
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ví

#### 1. Hàm ShowConnectWalletView
Hàm này hiển thị màn hình để tạo hoặc import ví. 

```
CVSDKHandler.Instance.ShowConnectWalletView();
```

#### 2. Hàm ShowWalletInfoView
Hàm này hiển thị màn hình thông tin của ví. Bao gồm các chức năng: Export private key, Secret Recovery Phrase.

```
CVSDKHandler.Instance.ShowWalletInfoView();
```

#### 3. Hàm logout
Gọi hàm này để thực hiện logout. Thông tin được trả về qua callback onLogout .

```
CVSDKHandler.Instance.Logout();

//Delegate callback
public void onLogout(string s)
{
    Debug.Log("onLogout " + s);

}
```


#### 5. Hàm SetKeepConnect
Hàm này tuỳ chọn thiết lập trạng thái giữ connect với ví Chainverse (Khi vào lại app không cần phải kết nối lại ví) 
*true : Giữ trạng thái keep connect.
*false: Không giữ trạng thái keep connect.

```
CVSDKHandler.Instance.SetKeepConnect(true);

```

#### 6. Hàm GetVersion
Trả về version của SDK

```
CVSDKHandler.Instance.GetVersion();

```

#### 7. Hàm GetUserAddress và GetUserSignature
Trả về thông tin của user bao gồm : address và signature


```
CVSDKHandler.Instance.GetUserAddress();
CVSDKHandler.Instance.GetUserSignature();
```

#### 8. Hàm IsUserConnected
Kiểm tra trạng thái connect ví của user. Trả về boolean

```
CVSDKHandler.Instance.IsUserConnected();

```

#### 10. Hàm GetBalance
Trả về số dư Native Coin (BNB)

```
CVSDKHandler.Instance.GetBalance();

```

#### 11. Hàm getBalance
Trả về số dư token:
- CVT: 0x672021e3c741910896cad6D6121446a328ba5634
- USDT: 0x337610d27c682E347C9cD60BD4b3b107C9d34dDd


```
 CVSDKHandler.Instance.GetBalanceToken(token);

```
