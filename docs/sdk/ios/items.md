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
