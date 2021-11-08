---
sidebar_label: 'SDK - API'
sidebar_position: 1
---

# API & WebSocket

## API user get list item

-   Version: `1`
-   Endpoint: `/v1/user/{user_address}/game/{game_address}/items`
-   Method: `GET`
-   Query:

    | Name     | Require? |     Type |              Description |
    | -------- | :------: | -------: | -----------------------: |
    | `offset` |          | `Number` |                   Offset |
    | `limit`  |          | `Number` | Limit number item to get |

-   Headers:

    | Name                 | Require? |      Type |                                         Description |
    | -------------------- | :------: | --------: | --------------------------------------------------: |
    | `X-User-Signature`   |   [x]    |  `String` | Sign(keccak256("chainverse")) with user private key |
    | `X-Signature-Ethers` |   [x]    | `Boolean` |                       Signature with ethers prefix? |

-   Response: `JSON Object`

    | Name                   |      Type      |              Description |
    | ---------------------- | :------------: | -----------------------: |
    | `status`               |   `Boolean`    |        Status of request |
    | `error_code`           |    `Number`    |               Error code |
    | `message`              |    `String`    |         Response message |
    | `total`                |    `Number`    |          Total user item |
    | `offset`               |    `Number`    |                   Offset |
    | `limit`                |    `Number`    | Limit number item to get |
    | `items`                | `Array Object` |                List item |
    | `items`.`item_id`      |    `Number`    |                  Item Id |
    | `items`.`category_id`  |    `Number`    |              Category Id |
    | `items`.`game_address` |    `String`    |             Game address |
    | `items`.`attributes`   |    `String`    |          Item attributes |
