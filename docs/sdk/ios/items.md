---
sidebar_label: 'Items'
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ví

## 1. Hàm getItems
Sử dụng hàm này để lấy danh sách ITEM của user. Thông tin sẽ được trả về qua callback  didGetItems

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
    <div>[[ChainverseSDK shared] getItems];</div>
    <h1/>
    <div>//Callback delegate</div>
    <div>{`- (void)didGetItems:(NSMutableArray *)items{`}</div>
    <div>&emsp;&emsp;&emsp;&emsp;&emsp;{`for(ChainverseItem *itemx in items){`}</div>
    <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{`NSLog(@"TAG %@",itemx.game_address);`}</div>
    <div>&emsp;&emsp;&emsp;&emsp;&emsp;{`}`}</div>
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
<div>ChainverseSDK.shared().getItems()</div>
    <h1/>
    <div>//Callback delegate</div>
    <div>{`func didGetItems(_ items: NSMutableArray!) {`}</div>
    <h1/>
    <div>{`}`}</div>
    </div>
</TabItem>
</Tabs>
