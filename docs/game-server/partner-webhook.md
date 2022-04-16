---
sidebar_label: "Partner Webhook"
sidebar_position: 3
---

# Partner Webhooks

## **Market Listed Event**

- Endpoint: `{webhook_url}/market-listed`
- Method: `POST`
- Headers:

  | Name          | Require? |     Type |                                  Description |
  | ------------- | :------: | -------: | -------------------------------------------: |
  | `X-Signature` |   [x]    | `String` | Sign(`data_message`) with server private key |

- `data_message`:

  | Field       |   Type    |
  | ----------- | :-------: |
  | `listingId` | `Number`  |
  | `nft`       | `String`  |
  | `tokenId`   | `Number`  |
  | `auction`   | `Boolean` |
  | `contract`  | `String`  |
  | `tx`        | `String`  |
  | `logIndex`  | `Number`  |

- Params: `JSON Object`

  | Name        |   Type    | Description |
  | ----------- | :-------: | ----------: |
  | `listingId` | `Number`  |
  | `nft`       | `String`  |
  | `tokenId`   | `Number`  |
  | `auction`   | `Boolean` |
  | `contract`  | `String`  |
  | `tx`        | `String`  |
  | `logIndex`  | `Number`  |             |

## **Market Unlisted Event**

- Endpoint: `{webhook_url}/market-unlisted`
- Method: `POST`
- Headers:

  | Name          | Require? |     Type |                                  Description |
  | ------------- | :------: | -------: | -------------------------------------------: |
  | `X-Signature` |   [x]    | `String` | Sign(`data_message`) with server private key |

- `data_message`:

  | Field       |   Type   |
  | ----------- | :------: |
  | `listingId` | `Number` |
  | `contract`  | `String` |
  | `tx`        | `String` |
  | `logIndex`  | `Number` |

- Params: `JSON Object`

  | Name        |   Type   | Description |
  | ----------- | :------: | ----------: |
  | `listingId` | `Number` |
  | `contract`  | `String` |
  | `tx`        | `String` |
  | `logIndex`  | `Number` |

## **Market Sold Event**

- Endpoint: `{webhook_url}/market-sold`
- Method: `POST`
- Headers:

  | Name          | Require? |     Type |                                  Description |
  | ------------- | :------: | -------: | -------------------------------------------: |
  | `X-Signature` |   [x]    | `String` | Sign(`data_message`) with server private key |

- `data_message`:

  | Field       |   Type    |
  | ----------- | :-------: |
  | `listingId` | `Number`  |
  | `nft`       | `String`  |
  | `tokenId`   | `Number`  |
  | `auction`   | `Boolean` |
  | `contract`  | `String`  |
  | `tx`        | `String`  |
  | `logIndex`  | `Number`  |
  | `buyer`     | `String`  |

- Params: `JSON Object`

  | Name        |   Type    | Description |
  | ----------- | :-------: | ----------: |
  | `listingId` | `Number`  |
  | `nft`       | `String`  |
  | `tokenId`   | `Number`  |
  | `auction`   | `Boolean` |
  | `contract`  | `String`  |
  | `tx`        | `String`  |
  | `logIndex`  | `Number`  |             |
  | `buyer`     | `String`  |

## **Market Transfer Event**

- Endpoint: `{webhook_url}/item-transfer`
- Method: `POST`
- Headers:

  | Name          | Require? |     Type |                                  Description |
  | ------------- | :------: | -------: | -------------------------------------------: |
  | `X-Signature` |   [x]    | `String` | Sign(`data_message`) with server private key |

- `data_message`:

  | Field  |   Type   |
  | ------ | :------: |
  | `from` | `String` |
  | `to`   | `String` |
  | `nft`  | `String` |
  | `id`   | `Number` |
  | `tx`   | `String` |

- Params: `JSON Object`

  | Name           |   Type   | Description |
  | -------------- | :------: | ----------: |
  | `item_id`      | `Number` |     Item Id |
  | `nft_address`  | `Number` |             |
  | `from_address` | `String` |             |
  | `to_address`   | `String` |             |
  | `tx_hash`      | `String` |             |

## **Market Burned item**

- Endpoint: `{webhook_url}/item-burn`
- Method: `POST`
- Headers:

  | Name          | Require? |     Type |                                  Description |
  | ------------- | :------: | -------: | -------------------------------------------: |
  | `X-Signature` |   [x]    | `String` | Sign(`data_message`) with server private key |

- `data_message`:

  | Field         |   Type   |
  | ------------- | :------: |
  | `boxId`       | `Number` |
  | `player`      | `String` |
  | `slimeItemId` | `Number` |
  | `nft`         | `String` |
  | `tx`          | `String` |

- Params: `JSON Object`

  | Name          |   Type   | Description |
  | ------------- | :------: | ----------: |
  | `boxId`       | `Number` |             |
  | `player`      | `Number` |             |
  | `slimeItemId` | `String` |             |
  | `nft`         | `String` |             |
  | `tx`          | `String` |             |

## **User Claim**

- Endpoint: `{webhook_url}/claim`
- Method: `POST`
- Headers:

  | Name          | Require? |     Type |                                  Description |
  | ------------- | :------: | -------: | -------------------------------------------: |
  | `X-Signature` |   [x]    | `String` | Sign(`data_message`) with server private key |

- `data_message`:

  | Field    |   Type   |
  | -------- | :------: |
  | `user`   | `String` |
  | `amount` | `Number` |
  | `tx`     | `String` |

- Params: `JSON Object`

  | Name     |   Type   | Description |
  | -------- | :------: | ----------: |
  | `user`   | `String` |             |
  | `amount` | `Number` |             |
  | `tx`     | `String` |             |
