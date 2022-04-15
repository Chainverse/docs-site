---
sidebar_label: 'Game Server Webhook'
sidebar_position: 1
---

# Game Webhook

## **New item registered**

-   Endpoint: `{webhook_url}/new-item-registered`
-   Method: `POST`
-   Headers:

    | Name          | Require? |     Type |                                                                Description |
    | ------------- | :------: | -------: | -------------------------------------------------------------------------: |
    | `X-Signature` |   [x]    | `String` | Sign(new_item_registered:`game_address`:`item_id`) with server private key |

-   Params: `JSON Object`

    | Name            |   Type   |        Description |
    | --------------- | :------: | -----------------: |
    | `item_id`       | `Number` |            Item Id |
    | `category_id`   | `Number` |        Category Id |
    | `game_address`  | `String` |       Game address |
    | `attributes`    | `String` |    Item attributes |
    | `owner_address` | `String` | Item owner address |

## **Transfer item**

-   Endpoint: `{webhook_url}/transfer-item`
-   Method: `POST`
-   Headers:

    | Name          | Require? |     Type |                                                          Description |
    | ------------- | :------: | -------: | -------------------------------------------------------------------: |
    | `X-Signature` |   [x]    | `String` | Sign(transfer_item:`game_address`:`item_id`) with server private key |

-   Params: `JSON Object`

    | Name           |   Type   |     Description |
    | -------------- | :------: | --------------: |
    | `item_id`      | `Number` |         Item Id |
    | `category_id`  | `Number` |     Category Id |
    | `game_address` | `String` |    Game address |
    | `attributes`   | `String` | Item attributes |
    | `from_address` | `String` |    User address |
    | `to_address`   | `String` |    User address |

## **Item jump in**

-   Endpoint: `{webhook_url}/item-jump-in`
-   Method: `POST`
-   Headers:

    | Name          | Require? |     Type |                                                         Description |
    | ------------- | :------: | -------: | ------------------------------------------------------------------: |
    | `X-Signature` |   [x]    | `String` | Sign(item_jump_in:`game_address`:`item_id`) with server private key |

-   Params: `JSON Object`

    | Name            |   Type   |        Description |
    | --------------- | :------: | -----------------: |
    | `item_id`       | `Number` |            Item Id |
    | `category_id`   | `Number` |        Category Id |
    | `game_address`  | `String` |       Game address |
    | `attributes`    | `String` |    Item attributes |
    | `owner_address` | `String` | Item owner address |

## **Item jump out**

-   Endpoint: `{webhook_url}/item-jump-out`
-   Method: `POST`
-   Headers:

    | Name          | Require? |     Type |                                                          Description |
    | ------------- | :------: | -------: | -------------------------------------------------------------------: |
    | `X-Signature` |   [x]    | `String` | Sign(item_jump_out:`game_address`:`item_id`) with server private key |

-   Params: `JSON Object`

    | Name            |   Type   |        Description |
    | --------------- | :------: | -----------------: |
    | `item_id`       | `Number` |            Item Id |
    | `category_id`   | `Number` |        Category Id |
    | `game_address`  | `String` |       Game address |
    | `attributes`    | `String` |    Item attributes |
    | `owner_address` | `String` | Item owner address |
