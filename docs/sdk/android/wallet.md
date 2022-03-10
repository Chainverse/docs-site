---
sidebar_label: 'Ví'
sidebar_position: 2
---

# Ví
## 1. Hàm showConnectView
Hàm này hiển thị màn hình danh sách các ví để user lựa chọn connect.

```
ChainverseSDK.getInstance().showConnectView();
```

## 2. Hàm connectWithChainverse
Sử dụng hàm này để kết nối với ví Chainverse, mà không cần hiển thị giao diện.

Lưu ý: Khi kết nối ví thông qua ChainVerse Wallet, mọi hành động giao dịch (Buy, approveToken, approvedNFT...) đều sẽ được trả transaction hash thông qua hàm callback [onTransact](/docs/sdk/android/over-view#10-callback-ontransact)
```
ChainverseSDK.getInstance().connectWithChainverse();
```

## 3. Hàm showConnectWalletView
Sử dụng hàm này để tạo ví theo giao diện của SDK.

```
ChainverseSDK.getInstance().showConnectWalletView();
```

## 4. Hàm showWalletInfoView
Sử dụng hàm này để Hiển thị thông tin ví.

```
ChainverseSDK.getInstance().showWalletInfoView();
```

## 5. Hàm genMnemonic
Sử dụng hàm này tạo ra cụm từ để tạo ví.
```
/**
 * 
 * @param length (128 hoặc 256)
 * @return
 */
ChainverseSDK.getInstance().genMnemonic(int length);
```

## 6. Hàm importWalletByMnemonic
Sử dụng hàm này để tạo ví với cụm từ được tạo qua hàm [genMnemonic](#5-hàm-genmnemonic). Hàm này trả về địa chỉ ví.
```
/**
 * 
 * @param phrase
 * @return String
 * @throws Exception
 */
ChainverseSDK.getInstance().importWalletByMnemonic(String phrase);
```

## 7. Hàm importWalletByPrivateKey
Sử dụng hàm này để tạo ví với khoá cá nhân (Private key). Hàm này trả về địa chỉ ví.
```
/**
 * 
 * @param privateKey
 * @return String
 * @throws Exception
 */
ChainverseSDK.getInstance().importWalletByPrivateKey(String privateKey);
```

## 8. Hàm isValidMnemonic
Sử dụng hàm này để kiểm tra định dạng cụm từ tạo ví (mnemonic).
```
/**
 * 
 * @param phrase
 * @return boolean
 */
ChainverseSDK.getInstance().isValidMnemonic(String phrase);
```

## 9. Hàm isValidAddress
Sử dụng hàm này để kiểm tra định dạng địa chỉ ví.
```
/**
 * 
 * @param address
 * @return boolean
 */
ChainverseSDK.getInstance().isValidAddress(String address);
```

## 10. Hàm getBalance
Sử dụng hàm này để lấy số dư native coin của ví.
```
/**
 * 
 * @return BigDecimal
 */
ChainverseSDK.getInstance().isValidAddress();
```

## 11. Hàm getBalanceToken
Sử dụng hàm này để lấy số dư token của ví.
```
/**
 * 
 * @param contractAddress
 * @return BigDecimal
 */
ChainverseSDK.getInstance().getBalanceToken(String contractAddress);
```

## 12. Hàm getAddress
Sử dụng hàm này để lấy địa chỉ ví.
```
/**
 * 
 * @return String
 */
ChainverseSDK.getInstance().getAddress(String address);
```

## 13. Hàm logout
Gọi hàm này để thực hiện logout. Thông tin được trả về qua callback [onLogout](/docs/sdk/android/over-view#4-callback-onlogout) .

```
ChainverseSDK.getInstance().logout();

//Callback
@Override
public void onLogout(String address) {
            connectWithChainverse
}
```

## 14. Hàm signMessage
Gọi hàm này để kí message. Thông tin được trả về qua callback [onSignMessage](/docs/sdk/android/over-view#11-callback-onsignmessage) .

```
/**
  * signMessage
  *
  * @param data
  * @param isPersonal
  */
void signMessage(String data, boolean isPersonal);

//Callback
@Override
public void onSignMessage(String signed) {
    // TODO
}
```

## 15. Hàm hứng data được trả về từ ví ChainVerse
Khi connect thành công với ví ChainVerse. ChainVerse sẽ mở lại app/game thông qua scheme (đã khai báo ở phần Intergrate SDK). Vì vậy cần khai báo các hàm này để ChainVerse SDK xử lý dữ liệu được trả về từ ví ChainVerse.

```
ChainverseSDK.getInstance().onNewIntent(intent);
```

Khai báo trong hàm onNewIntent của Activity

```
@Override
protected void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
    // getIntent() should always return the most recent
    setIntent(intent);
    ChainverseSDK.getInstance().onNewIntent(intent);
}
```

## 16. Hàm setKeepConnect (Tuỳ chọn)
Hàm này tuỳ chọn thiết lập trạng thái giữ connect với ví Chainverse (Khi vào lại app không cần phải kết nối lại ví)

true : Giữ trạng thái keep connect.
false: Không giữ trạng thái keep connect.

```
ChainverseSDK.getInstance().setKeepConnect(true);
```

## 17. Hàm setScheme
Để config khi connect với ví Chainverse (Ví Chainverse sẽ mở lại app thông qua config này)

```
ChainverseSDK.getInstance().setScheme("your-app-scheme://");
```

## 18. Hàm getUser
Trả về thông tin của user bao gồm : address và signature

```
ChainverseUser info = ChainverseSDK.getInstance().getUser();
info.getAddress();
info.getSignature();
```

## 19. Hàm isUserConnected
Kiểm tra trạng thái connect ví của user. Trả về boolean

```
boolean isConnect = ChainverseSDK.getInstance().isUserConnected()
```

## 20. Hàm getVersion
Trả về version của SDK

```
ChainverseSDK.getInstance().getVersion();
```
