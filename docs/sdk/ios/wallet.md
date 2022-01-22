---
sidebar_label: 'Ví'
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ví

## 1. Hàm showConnectView
Hàm này hiển thị màn hình danh sách các ví để user lựa chọn connect.

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">

```angular2html
[[ChainverseSDK shared] showConnectView];
```
</TabItem>
<TabItem value="2">

```angular2html
ChainverseSDK.shared().showConnectView()
```
</TabItem>
</Tabs>

## 2. Hàm connectWithChainverse
Sử dụng hàm này để kết nối với ví Chainverse, mà không cần hiển thị giao diện.

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">

```angular2html
[[ChainverseSDK shared] connectWithChainverse];
```
</TabItem>
<TabItem value="2">

```angular2html
ChainverseSDK.shared().connectWithChainverse()
```
</TabItem>
</Tabs>

## 3. Hàm getItems
Sử dụng hàm này để lấy danh sách ITEM của user. Thông tin sẽ được trả về qua callback didGetItems.

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">

```angular2html
[[ChainverseSDK shared] getItems];

//Callback delegate
- (void)didGetItems:(NSMutableArray *)items{
    for(ChainverseItem *itemx in items){
        NSLog(@"TAG %@",itemx.game_address);
    }
}
```
</TabItem>
<TabItem value="2">

```angular2html
ChainverseSDK.shared().getItems()

//Callback delegate
func didGetItems(_ items: NSMutableArray!) {

}
```
</TabItem>
</Tabs>

## 4. Hàm logout
Gọi hàm này để thực hiện logout. Thông tin được trả về qua callback didLogout .

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">

```angular2html
[[ChainverseSDK shared] logout];

//Delegate callback
- (void)didLogout:(NSString *)address{
   
}

```
</TabItem>
<TabItem value="2">

```angular2html
ChainverseSDK.shared().logout()
//callback
func didLogout(_ address: String!) {
       
}
```
</TabItem>
</Tabs>

## 5. Hàm hứng data được trả về từ ví  Chainverse
Khi connect thành công với ví Chainverse. Chainverse sẽ mở lại app/game thông qua scheme (đã khai báo ở phần Intergrate SDK). Vì vậy cần khai báo các hàm này để Chainverse SDK xử lý dữ liệu được trả về từ ví Chainverse.
Khai báo ở file AppDeletegate :

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">

```angular2html
[[ChainverseSDK shared] handleOpenUrl:(UIApplication *)app
                              openURL:(NSURL *)url
                              options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options];

//Nếu dự án sử dụng SceneDelegate thì khai báo như sau: 

[[ChainverseSDK shared] handleOpenUrl:scene openURLContexts:URLContexts];
```
</TabItem>
<TabItem value="2">

```angular2html
ChainverseSDK.shared().handleOpenUrl(app, open: url, options: options)
```
</TabItem>
</Tabs>

## 6. Hàm setKeepConnect
Hàm này tuỳ chọn thiết lập trạng thái giữ connect với ví Chainverse (Khi vào lại app không cần phải kết nối lại ví)
*true : Giữ trạng thái keep connect.
*false: Không giữ trạng thái keep connect.

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">

```angular2html
[[ChainverseSDK shared] setKeepConnect:TRUE];
```
</TabItem>
<TabItem value="2">

```angular2html
ChainverseSDK.shared().setKeepConnect(true)
```
</TabItem>
</Tabs>

## 7. Hàm getVersion
Trả về version của SDK

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">

```angular2html
[[ChainverseSDK shared] getVersion]
```
</TabItem>
<TabItem value="2">

```angular2html
ChainverseSDK.shared().getVersion()
```
</TabItem>
</Tabs>

## 7. Hàm getUser
Trả về thông tin của user bao gồm : address và signature

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">

```angular2html
ChainverseUser *info = [[ChainverseSDK shared] getUser];
NSLog(@"TAG %@",[info address]);
NSLog(@"TAG %@",[info signature]);
```
</TabItem>
<TabItem value="2">

```angular2html
let info: ChainverseUser = ChainverseSDK.shared().getUser()
```
</TabItem>
</Tabs>

## 8. Hàm isUserConnected
Kiểm tra trạng thái connect ví của user. Trả về boolean

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">

```angular2html
[[ChainverseSDK shared] isUserConnected];
```
</TabItem>
<TabItem value="2">

```angular2html
ChainverseSDK.shared().isUserConnected()
```
</TabItem>
</Tabs>

