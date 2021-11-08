---
sidebar_label: 'Game Server Onchain Services'
sidebar_position: 2
---

# **Reward Utility Token & Mint Item**

## **API Reward Utility Token**

-   Version: `1`
-   Endpoint: `/v1/utility-token`
-   Method: `POST`
-   Authorization: none
-   Params:

    | Name     | Require? |     Type |            Description |
    | -------- | :------: | -------: | ---------------------: |
    | `user`   |   [x]    | `String` | Wallet address of user |
    | `amount` |   [x]    | `String` | Amount reward for user |

-   Response: `JSON Object`

    | Name         |   Type   |      Description |
    | ------------ | :------: | ---------------: |
    | `error_code` | `Number` |       Error code |
    | `message`    | `String` | Response message |

## **API Mint Item**

-   Version: `1`
-   Endpoint: `/v1/item`
-   Method: `POST`
-   Authorization: none
-   Params:

    | Name             | Require? |          Type |                                         Description |
    | ---------------- | :------: | ------------: | --------------------------------------------------: |
    | `type`           |   [x]    | `Enum(0,1,2)` | 0: ChainVerse Item, 1: Developer Item, 2: Game Item |
    | `category_id`    |   [x]    |         `int` |      Category of item - for ChainVerseItem, rest: 0 |
    | `player_address` |   [x]    |      `String` |                              Wallet address of user |

*   Response: `JSON Object`

    | Name         |   Type   |      Description |
    | ------------ | :------: | ---------------: |
    | `error_code` | `Number` |       Error code |
    | `message`    | `String` | Response message |
