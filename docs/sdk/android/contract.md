---
sidebar_label: 'Contract'
sidebar_position: 5
---

# Contract

[![call_contract](/img/call-contract.png)](/img/call-contract.png)

## 1. Hàm getServices
Hàm này để sử dụng lấy ra thông tin Chain, dánh sách các services, tokens mà game được hỗ trợ.

Class: [ChainverseService](/docs/sdk/Reference/ChainVerseService)

```
/**
 * getServices
 * return ChainverseService
 */
ChainverseSDK.getInstance().getServices();
```

## 2. Hàm formatAbi
Hàm này sử dụng để đổi sang định dạng data type Java.

```
/**
 * formatAbi
 * @param abi
 * return String
 */
ChainverseSDK.getInstance().formatAbi(String abi);
```

## 3. Hàm callContract

### 3.1 callContract(contractAddress, nameFunction, args)
- Param **args** là input được lấy theo trường **inputs** từ [abi đã formatted](/docs/sdk/Reference/ChainVerseService#5-kiểu-dữ-liệu-abi-đã-được-formatted-formatted) (Các tham số theo kiểu dữ liệu Java)

```
/**
 * callContract
 * @param contractAddress // địa chỉ contract
 * @param nameFunction // Tên hàm
 * @param args // Inputs
 * return List
 */
ChainverseSDK.getInstance().callContract(String contractAddress, String nameFunction, Object[] args);
```

**Example**

```
/**
* Hàm view. 
* Đây là hàm read dữ liệu từ blockchain
*/
Object[] args = new Object[2];
args[0] = "0xf8DfE75268BfD3Ce03A634eACe315CeCA0E6e69a";
args[1] = new BigInteger("867");
List data = ChainverseSDK.getInstance().callContract("0x2ccA92F66BeA2A7fA2119B75F3e5CB698C252564", "getByNFT", args);
System.out.println(data.get(0));
```

```
/**
* Contract hàm trả phí. 
* Các hàm trả phí đều sẽ được trả về trong callback onTransact hoặc onErrorTransaction
*/
Object[] args = new Object[2];
args[0] = new BigInteger("2390");
args[1] = BigDecimal.valueOf(1000 * Math.pow(10, 18)).toBigInteger();// Giá bán * decimals
ChainverseSDK.getInstance().callContract("0x2ccA92F66BeA2A7fA2119B75F3e5CB698C252564", "buy", args);
```

### 3.2 callContract(contractAddress, nameFunction, args, value)
- Param **args** là input được lấy theo trường **inputs** từ [abi đã formatted](/docs/sdk/Reference/ChainVerseService#5-kiểu-dữ-liệu-abi-đã-được-formatted-formatted) (Các tham số theo kiểu dữ liệu Java)

**Hàm này dùng cho native coin trả phí**

```
/**
 * callContract
 * @param contractAddress // địa chỉ contract
 * @param nameFunction // Tên hàm
 * @param args // Inputs
 * @param value // Value của native coin
 * return List
 */
ChainverseSDK.getInstance().callContract(String contractAddress, String nameFunction, Object[] args, BigInteger value);
```

**Example**

```
/**
* Contract hàm trả phí. 
* Các hàm trả phí đều sẽ được trả về trong callback onTransact hoặc onErrorTransaction
* Ví dụ này là mua NFT bằng native coin
*/
Object[] args = new Object[2];
args[0] = new BigInteger("2258");
args[1] = BigDecimal.valueOf(0.025 * Math.pow(10, 18)).toBigInteger(); // Giá bán * decimals
ChainverseSDK.getInstance().callContract("0x2ccA92F66BeA2A7fA2119B75F3e5CB698C252564", "buy", args, (BigInteger) args[1]);
```

### 3.3 callContract(contractAddress, nameFunction, typeInputs, args)
- Param **args** là input được lấy theo trường **inputs** từ [abi đã formatted](/docs/sdk/Reference/ChainVerseService#5-kiểu-dữ-liệu-abi-đã-được-formatted-formatted) (Các tham số theo kiểu dữ liệu Java).
- Param **typeInputs** là input được lấy theo kiểu dữ liệu **contractType** trong trường **inputs** từ [abi đã formatted](/docs/sdk/Reference/ChainVerseService#5-kiểu-dữ-liệu-abi-đã-được-formatted-formatted).
```
/**
 * callContract
 * @param contractAddress // địa chỉ contract
 * @param nameFunction // Tên hàm
 * @param typeInputs // Kiểu dữ liệu của hàm trong contract
 * @param args // Inputs
 * return List
 */
ChainverseSDK.getInstance().callContract(String contractAddress, String nameFunction, String typeInputs, Object[] args);
```

**Example**

```
/**
* Hàm view. 
* Đây là hàm read dữ liệu từ blockchain
*/
Object[] args = new Object[2];
args[0] = "0xf8DfE75268BfD3Ce03A634eACe315CeCA0E6e69a";
args[1] = new BigInteger("867");
List data = ChainverseSDK.getInstance().callContract("0x2ccA92F66BeA2A7fA2119B75F3e5CB698C252564", "getByNFT", "(address, uint256)", args);
System.out.println(data.get(0));
```

```
/**
* Contract hàm trả phí. 
* Các hàm trả phí đều sẽ được trả về trong callback onTransact hoặc onErrorTransaction
*/
Object[] args = new Object[2];
args[0] = new BigInteger("2390");
args[1] = BigDecimal.valueOf(1000 * Math.pow(10, 18)).toBigInteger();// Giá bán * decimals
ChainverseSDK.getInstance().callContract("0x2ccA92F66BeA2A7fA2119B75F3e5CB698C252564", "buy", "(uint256, uint256)", args);
```

### 3.4 callContract(contractAddress, nameFunction, typeInputs, args, value)
- Param **args** là input được lấy theo trường **inputs** từ [abi đã formatted](/docs/sdk/Reference/ChainVerseService#5-kiểu-dữ-liệu-abi-đã-được-formatted-formatted) (Các tham số theo kiểu dữ liệu Java)
- Param **typeInputs** là input được lấy theo kiểu dữ liệu **contractType** trong trường **inputs** từ [abi đã formatted](/docs/sdk/Reference/ChainVerseService#5-kiểu-dữ-liệu-abi-đã-được-formatted-formatted).

**Hàm này dùng cho native coin trả phí**

```
/**
 * callContract
 * @param contractAddress // địa chỉ contract
 * @param nameFunction // Tên hàm
 * @param typeInputs // Kiểu dữ liệu của hàm trong contract
 * @param args // Inputs
 * @param value // Value của native coin
 * return List
 */
ChainverseSDK.getInstance().callContract(String contractAddress, String nameFunction, String typeInputs, Object[] args, BigInteger value);
```

**Example**

```
/**
* Contract hàm trả phí. 
* Các hàm trả phí đều sẽ được trả về trong callback onTransact hoặc onErrorTransaction
* Ví dụ này là mua NFT bằng native coin
*/
Object[] args = new Object[2];
args[0] = new BigInteger("2258");
args[1] = BigDecimal.valueOf(0.025 * Math.pow(10, 18)).toBigInteger(); // Giá bán * decimals
ChainverseSDK.getInstance().callContract("0x2ccA92F66BeA2A7fA2119B75F3e5CB698C252564", "buy", "(uint256, uint256)", args, (BigInteger) args[1]);
```

### ABI formatted Example

```
// View
{
  "type": "function",
  "name": "getByNFT",
  "inputs": [
    {
      "name": "nft",
      "contractType": "address",
      "type": "string"
    },
    {
      "name": "tokenId",
      "contractType": "uint256",
      "type": "bignumber"
    }
  ],
  "outputs": [
    {
      "name": "auction",
      "contractType": "tuple",
      "components": [
        {
          "name": "isEnded",
          "contractType": "bool",
          "type": "boolean"
        },
        {
          "name": "nft",
          "contractType": "address",
          "type": "string"
        },
        {
          "name": "winner",
          "contractType": "address",
          "type": "string"
        },
        {
          "name": "owner",
          "contractType": "address",
          "type": "string"
        },
        {
          "name": "currency",
          "contractType": "address",
          "type": "string"
        },
        {
          "name": "tokenId",
          "contractType": "uint256",
          "type": "bignumber"
        },
        {
          "name": "fee",
          "contractType": "uint256",
          "type": "bignumber"
        },
        {
          "name": "bid",
          "contractType": "uint256",
          "type": "bignumber"
        },
        {
          "name": "bidDuration",
          "contractType": "uint256",
          "type": "bignumber"
        },
        {
          "name": "end",
          "contractType": "uint256",
          "type": "bignumber"
        },
        {
          "name": "id",
          "contractType": "uint256",
          "type": "bignumber"
        }
      ]
    },
    {
      "name": "listing",
      "contractType": "tuple",
      "components": [
        {
          "name": "isEnded",
          "contractType": "bool",
          "type": "boolean"
        },
        {
          "name": "nft",
          "contractType": "address",
          "type": "string"
        },
        {
          "name": "currency",
          "contractType": "address",
          "type": "string"
        },
        {
          "name": "owner",
          "contractType": "address",
          "type": "string"
        },
        {
          "name": "tokenId",
          "contractType": "uint256",
          "type": "bignumber"
        },
        {
          "name": "fee",
          "contractType": "uint256",
          "type": "bignumber"
        },
        {
          "name": "price",
          "contractType": "uint256",
          "type": "bignumber"
        },
        {
          "name": "id",
          "contractType": "uint256",
          "type": "bignumber"
        }
      ]
    }
  ],
  "stateMutability": "view"
}

// Payable
{
  "type": "function",
  "name": "buy",
  "inputs": [
    {
      "name": "listingId",
      "contractType": "uint256",
      "type": "bignumber"
    },
    {
      "name": "price",
      "contractType": "uint256",
      "type": "bignumber"
    }
  ],
  "outputs": [
    {
      "name": "",
      "contractType": "bool",
      "type": "boolean"
    }
  ],
  "stateMutability": "payable"
}
```
