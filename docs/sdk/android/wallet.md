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

```
ChainverseSDK.getInstance().connectWithChainverse();
```

## 3. Hàm showConnectWalletView
Sử dụng hàm này để tạo ví theo giao diện của SDK.

```
ChainverseSDK.getInstance().showConnectWalletView();
```


## 4. Hàm logout
Gọi hàm này để thực hiện logout. Thông tin được trả về qua callback [onLogout](/docs/sdk/android/over-view#4-callback-onlogout) .

```
ChainverseSDK.getInstance().logout();

//Callback
@Override
public void onLogout(String address) {
            
}
```

## 5. Hàm hứng data được trả về từ ví Chainverse
Khi connect thành công với ví Chainverse. Chainverse sẽ mở lại app/game thông qua scheme (đã khai báo ở phần Intergrate SDK). Vì vậy cần khai báo các hàm này để Chainverse SDK xử lý dữ liệu được trả về từ ví Chainverse.

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

## 6. Hàm setKeepConnect (Tuỳ chọn)
Hàm này tuỳ chọn thiết lập trạng thái giữ connect với ví Chainverse (Khi vào lại app không cần phải kết nối lại ví)

true : Giữ trạng thái keep connect.
false: Không giữ trạng thái keep connect.

```
ChainverseSDK.getInstance().setKeepConnect(true);
```

## 7. Hàm setScheme
Để config khi connect với ví Chainverse (Ví Chainverse sẽ mở lại app thông qua config này)

```
ChainverseSDK.getInstance().setScheme("your-app-scheme://");
```

## 8. Hàm getUser
Trả về thông tin của user bao gồm : address và signature

```
ChainverseUser info = ChainverseSDK.getInstance().getUser();
info.getAddress();
info.getSignature();
```

## 9. Hàm isUserConnected
Kiểm tra trạng thái connect ví của user. Trả về boolean

```
boolean isConnect = ChainverseSDK.getInstance().isUserConnected()
```

## 10. Hàm getVersion
Trả về version của SDK

```
ChainverseSDK.getInstance().getVersion();
```
