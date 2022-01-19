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
<div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>[[ChainverseSDK shared] showConnectView];</div> 
</div>
</TabItem>
<TabItem value="2">
    <div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>ChainverseSDK.shared().showConnectView()</div>
    </div>
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
<div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>[[ChainverseSDK shared] connectWithChainverse];</div> 
</div>
</TabItem>
<TabItem value="2">
    <div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>ChainverseSDK.shared().connectWithChainverse()</div>
    </div>
</TabItem>
</Tabs>

## 3. Hàm logout
Gọi hàm này để thực hiện logout. Thông tin được trả về qua callback didLogout .

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">
<div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>[[ChainverseSDK shared] logout];</div> 
<h1/>
    <div>//Delegate callback</div> 
    <div>{`- (void)didLogout:(NSString *)address{`}</div> 
    <h1/>
    <div>{`}`}</div> 
</div>
</TabItem>
<TabItem value="2">
    <div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>ChainverseSDK.shared().logout()</div>
    <div>//callback</div>
    <div>{`func didLogout(_ address: String!) {`}</div>
    <h1/>
    <div>{`}`}</div>
    </div>
</TabItem>
</Tabs>

## 4. Hàm hứng data được trả về từ ví  Chainverse
Khi connect thành công với ví Chainverse. Chainverse sẽ mở lại app/game thông qua scheme (đã khai báo ở phần Intergrate SDK). Vì vậy cần khai báo các hàm này để Chainverse SDK xử lý dữ liệu được trả về từ ví Chainverse.
Khai báo ở file AppDeletegate :

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">
<div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>[[ChainverseSDK shared] handleOpenUrl:(UIApplication *)app</div>
    <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;openURL:(NSURL *)url</div>
    <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{`options:(NSDictionary
        <UIApplicationOpenURLOptionsKey
        , id> *)options];`}</div>
<h1/>
    <div>//Nếu dự án sử dụng SceneDelegate thì khai báo như sau:</div> 
    <h1/>
    <div>{`[[ChainverseSDK shared] handleOpenUrl:scene openURLContexts:URLContexts];`}</div> 
</div>
</TabItem>
<TabItem value="2">
    <div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>{`ChainverseSDK.shared().handleOpenUrl(app, open: url, options: options)`}</div>
    </div>
</TabItem>
</Tabs>

## 5. Hàm setKeepConnect
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
<div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>[[ChainverseSDK shared] setKeepConnect:TRUE];</div>
</div>
</TabItem>
<TabItem value="2">
    <div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>{`ChainverseSDK.shared().setKeepConnect(true)`}</div>
    </div>
</TabItem>
</Tabs>

## 6. Hàm getVersion
Trả về version của SDK

<Tabs
defaultValue="1"
groupId="operating-systems"
values={[
{ label: 'Object C', value: '1', },
{ label: 'Swift', value: '2', },]}>
<TabItem value="1">
<div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>[[ChainverseSDK shared] getVersion]</div>
</div>
</TabItem>
<TabItem value="2">
    <div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>{`ChainverseSDK.shared().getVersion()`}</div>
    </div>
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
<div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>ChainverseUser *info = [[ChainverseSDK shared] getUser];</div>
    <div>NSLog(@"TAG %@",[info address]);</div>
    <div>NSLog(@"TAG %@",[info signature]);</div>
</div>
</TabItem>
<TabItem value="2">
    <div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>{`let info: ChainverseUser = ChainverseSDK.shared().getUser()`}</div>
    </div>
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
<div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>[[ChainverseSDK shared] isUserConnected];</div>
</div>
</TabItem>
<TabItem value="2">
    <div style={{
    width:'100%',backgroundColor:'#e6ecf5',
    padding:10,
    paddingLeft:20,
    borderRadius:7
 }}>
    <div>{`ChainverseSDK.shared().isUserConnected()`}</div>
    </div>
</TabItem>
</Tabs>

