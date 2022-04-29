---
sidebar_label: 'SDK - Websocket'
sidebar_position: 2
---

# API & WebSocket

## User-websocket

### **Library**:

-   Socket.io v3 ("https://socket.io/docs/v3/")

### **Auth:**

#### **`JSON Object`**

-   type: `String` ("SDK")
-   signature: `String` (Sign_message("ChainVerse") with user private key)
-   signature_ethers: `Bool` (Signature with ethers prefix?)
-   user_address: `String` (User address)
-   game_address: `String` (Game address)

##### **Example**:

```javascript
const socket = io('wss://', {
    auth: {
        type: 'SDK',
        signature:
            '0xe9ac69b3c8d8bcaa62458255648bad9361d656302ff50c3f8ff8910f843d838c13b49347c42e1718c58781768cace8ac93ee9424a0cf04b5eef71d059f09164f1c',
        signature_ethers: true,
        user_address: '0x720F399b715BA55968fb5F6C442A2b706F828317',
        game_address: '0x6d910c0cE6e0fa53C62637920964d306aCb9f051',
    },
    transports: ['websocket'],
});
```

#### **`Or Headers`**:

-   x-type: `String` ("SDK")
-   x-signature: `String` (Sign_message("chainverse") with user private key)
-   x-signature-ethers: `String` (Signature with ethers prefix?)
-   x-user-address: `String` (User address)
-   x-game-address: `String` (Game address)

##### **Example**

```javascript
const headers = {
    'x-type': 'SDK',
    'x-signature':
        '0xe9ac69b3c8d8bcaa62458255648bad9361d656302ff50c3f8ff8910f843d838c13b49347c42e1718c58781768cace8ac93ee9424a0cf04b5eef71d059f09164f1c',
    'x-signature-ethers': true,
    'x-user-address': '0x720F399b715BA55968fb5F6C442A2b706F828317',
    'x-game-address': '0x6d910c0cE6e0fa53C62637920964d306aCb9f051',
};
```

### **Event**

#### **Transfer item to current user**

-   Event: `transfer_item_to_user`
-   Data: `JSON Stringify`

    | Name            |   Type   |        Description |
    | --------------- | :------: | -----------------: |
    | `item_id`       | `Number` |            Item Id |
    | `category_id`   | `Number` |        Category Id |
    | `game_address`  | `String` |       Game address |
    | `attributes`    | `String` |    Item attributes |
    | `owner_address` | `String` | Item owner address |

##### **Example**

```json
{
    "item_id": 1,
    "category_id": 1,
    "game_address: '0x6d910c0cE6e0fa53C62637920964d306aCb9f051',
    'attributes': '{}',
    'owner_address': '0x720F399b715BA55968fb5F6C442A2b706F828317'
}
```

#### **Transfer item from current user**

-   Event: `transfer_item_from_user`
-   Data: `JSON Stringify`

    | Name           |   Type   |  Description |
    | -------------- | :------: | -----------: |
    | `item_id`      | `Number` |      Item Id |
    | `category_id`  | `Number` |  Category Id |
    | `game_address` | `String` | Game address |

##### **Example**

```json
{
    "item_id": 1,
    "category_id": 1,
    "game_address: '0x6d910c0cE6e0fa53C62637920964d306aCb9f051',
}
```
