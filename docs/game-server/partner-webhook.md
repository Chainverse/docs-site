---
sidebar_label: "Partner Webhook"
sidebar_position: 3
---

# Partner Webhooks

- General purpose:
  - Chainverse scan blocks and logs on the blockchain network.
  - Logs may contain `Event` which affect the data state on the blockchain.
  - => To sync these changes locally, implementation of these APIs is required according to the following description

![Docusaurus logo](/img/webhook_sequence.jpeg)

## **Market Listed Event**

- Usecase: When an item is listed on the market so user can start viewing and buying it.
- Endpoint: `{webhook_url}/market-listed`
- Method: `POST`
- Headers:

  | Name          | Require? |     Type |                                  Description |
    | ------------- | :------: | -------: | -------------------------------------------: |
  | `X-Signature` |   [x]    | `String` | Sign(`data_message`) with server private key |

- Params: `JSON Object` and `data_message`

  | Name        |   Type    |              Description |
    | ----------- | :-------: | -----------------------: |
  | `listingId` | `Number`  |   listing id of the item |
  | `nft`       | `String`  |       contract's address |
  | `tokenId`   | `Number`  |                 nft's id |
  | `auction`   | `Boolean` | is it an aunction or not |
  | `contract`  | `String`  |            log's address |
  | `tx`        | `String`  |         transaction hash |
  | `logIndex`  | `Number`  |                log index |

## **Market Unlisted Event**

- Description: When an item is removed from the market, it can't no longer be seen or bought
- Endpoint: `{webhook_url}/market-unlisted`
- Method: `POST`
- Headers:

  | Name          | Require? |     Type |                                  Description |
    | ------------- | :------: | -------: | -------------------------------------------: |
  | `X-Signature` |   [x]    | `String` | Sign(`data_message`) with server private key |

- Params: `JSON Object` and `data_message`

  | Field       |   Type   |
  | ----------- | :------: | ---------------------- |
  | `listingId` | `Number` | listing id of the item |
  | `contract`  | `String` | log's address          |
  | `tx`        | `String` | transaction hash       |
  | `logIndex`  | `Number` | log index              |

## **Market Sold Event**

- Description: When an item is bought by a address
- Endpoint: `{webhook_url}/market-sold`
- Method: `POST`
- Headers:

  | Name          | Require? |     Type |                                  Description |
    | ------------- | :------: | -------: | -------------------------------------------: |
  | `X-Signature` |   [x]    | `String` | Sign(`data_message`) with server private key |

- Params: `JSON Object` and `data_message`

  | Name        |   Type    |              Description |
    | ----------- | :-------: | -----------------------: |
  | `listingId` | `Number`  |   listing id of the item |
  | `nft`       | `String`  |       contract's address |
  | `tokenId`   | `Number`  |                 nft's id |
  | `auction`   | `Boolean` | is it an aunction or not |
  | `contract`  | `String`  |            log's address |
  | `tx`        | `String`  |         transaction hash |
  | `logIndex`  | `Number`  |                log index |
  | `buyer`     | `String`  |          buyer's address |

## **NFT Transfer Event**

- Description: When an item is transfer between to addresses
- Endpoint: `{webhook_url}/item-transfer`
- Method: `POST`
- Headers:

  | Name          | Require? |     Type |                                  Description |
    | ------------- | :------: | -------: | -------------------------------------------: |
  | `X-Signature` |   [x]    | `String` | Sign(`data_message`) with server private key |

- `data_message`:

  | Name   |   Type   |      Description |
    | ------ | :------: | ---------------: |
  | `from` | `String` |   sender address |
  | `to`   | `String` | receiver address |
  | `nft`  | `String` |      nft address |
  | `id`   | `Number` |         token id |
  | `tx`   | `String` | transaction hash |

- Params: `JSON Object`

  | Name           |   Type   | Description |
    | -------------- | :------: | ----------: |
  | `item_id`      | `Number` |             |
  | `nft_address`  | `Number` |             |
  | `from_address` | `String` |             |
  | `to_address`   | `String` |             |
  | `tx_hash`      | `String` |             |

<!-- ## **Market Burned item**

- Description: When an NFT is burned
- Endpoint: `{webhook_url}/item-burn`
- Method: `POST`
- Headers:

  | Name          | Require? |     Type |                                  Description |
  | ------------- | :------: | -------: | -------------------------------------------: |
  | `X-Signature` |   [x]    | `String` | Sign(`data_message`) with server private key |

- Params: `JSON Object` and `data_message`

  | Name          |   Type   | Description |
  | ------------- | :------: | ----------: |
  | `boxId`       | `Number` |             |
  | `player`      | `Number` |             |
  | `slimeItemId` | `String` |             |
  | `nft`         | `String` |             |
  | `tx`          | `String` |             | -->

<!-- ## **User Claim**

- Description: When a address claim an amount of token
- Endpoint: `{webhook_url}/claim`
- Method: `POST`
- Headers:

  | Name          | Require? |     Type |                                  Description |
  | ------------- | :------: | -------: | -------------------------------------------: |
  | `X-Signature` |   [x]    | `String` | Sign(`data_message`) with server private key |

- Params: `JSON Object` and `data_message`

  | Name     |   Type   | Description |
  | -------- | :------: | ----------: |
  | `user`   | `String` |             |
  | `amount` | `Number` |             |
  | `tx`     | `String` |             | -->
