---
sidebar_label: 'ChainVerse Service'
sidebar_position: 6
---

## 1. ChainverseService

Lấy thông tin các services, contracts mà game được hỗ trợ.

| Name  | Type | Method | Description | 
| ------------- | ------------- | ------------- | ------------- |
| name  | String  | getName | Tên của game | 
| address  | String  | getAddress | Địa chỉ contract của game | 
| network_info  | [Network](#2-network)  | getNetworkInfo | Thông tin Chain được hỗ trợ | 
| services  | ArrayList([Service](#3-service))  | getServices | Danh sách services được hỗ trợ | 
| tokens  | ArrayList([Token](#4-token))  | getTokens | Danh sách Tokens được hỗ trợ |
| items  | ArrayList([Item](#5-item))  | getItems | Danh sách Items được hỗ trợ | 

## 2. Network

Lấy thông tin Chain đang được sử dụng.

| Name  | Type | Method | Description | 
| ------------- | ------------- | ------------- | ------------- |
| name  | String  | getName | Tên của Chain | 
| network  | String  | getNetwork | Ký hiệu của Chain | 
| chain_id  | String  | getChainId | Thông tin Chain id | 
| rpcs  | String  | getRpcs | Danh sách rpcs có thể dùng được | 

## 3. Service

Lấy thông tin các services đang được hỗ trợ.

| Name  | Type | Method | Description | 
| ------------- | ------------- | ------------- | ------------- |
| name  | String  | getName | Tên của service | 
| type  | String  | getType | Loại của service | 
| version  | String  | getVersion | Version của service | 
| address  | String  | getAddress | Địa chỉ contract của service | 
| abi  | String  | getAbi | Interface các hàm có trong contract |

## 4. Token

Lấy thông tin các tokens đang được hỗ trợ.

| Name  | Type | Method | Description | 
| ------------- | ------------- | ------------- | ------------- |
| name  | String  | getName | Tên của token | 
| symbol  | String  | getSymbol | Kí hiệu token | 
| address  | String  | getAddress | Địa chỉ contract của token | 
| decimals  | Integer  | getDecimals | Decimals của token | 
| abi  | String  | getAbi | Interface các hàm có trong contract |

## 5. Item

Lấy thông tin các items đang được hỗ trợ.

| Name  | Type | Method | Description | 
| ------------- | ------------- | ------------- | ------------- |
| name  | String  | getName | Tên của item | 
| type  | String  | getType | Loại của item | 
| address  | String  | getAddress | Địa chỉ contract của service | 
| abi  | String  | getAbi | Interface các hàm có trong contract |

## 5. Kiểu dữ liệu ABI (đã được formatted formatted)
```
{
  "inputs": [
    {
      "contractType": String, // Kiểu dữ liệu contract
      "name": String, // tên paramater
      "type": String // Kiểu dữ liệu Java
    }
  ],
  "name": String, // Tên hàm
  "outputs": [
    {
      "contractType": String, // Kiểu dữ liệu contract
      "name": String, // tên paramater
      "type": String // Kiểu dữ liệu Java
    }
  ],
  "stateMutability": String, // loại hàm sửa đổi trạng thái
  "type": String // Loại hàm (function | event)
}
```
