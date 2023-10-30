---
sidebar_label: 'Off-ramp'
sidebar_position: 2
---

# Parameters
| Fields Name | Required | Description | Example |
| -------- | :-------: | :--- | ---------------------------------------- |
| `partnerCode` | [x] | **To integrate all other parameters, you must provide your Partner Code**. Contact us if you need one. | |
| `chainId` |  | [Network ID](https://chainlist.org/) | 97 |
| `tokenAddress` | | Token-contract address of the cryptocurrency that you would allow your users to buy. |  |
| `tokenAmount` |  | An integer amount representing how much crypto the user wants to buy. It is possible for the user to modify the tokenAmount within the ChainVerse widget. This amount is proritized over fiatAmount.| 20 |
| `bankCode` |  | Vietnam domestic bank code | [bankCode list](/docs/ramp/partner/query_param/bank_code) |
| `disableSelectBank` |  | If it is `1`, the select bank could not be changed.| Default is `0` |
| `accountNumber` |  | Bank account number | |
| `hideAccountNumber` |  | If it is `1`, the account bank will be hidden.| Default is `0` |
| `disableAccountNumberInput` |  | If it is `1`, the account bank could not be changed.| Default is `0` |
| `accountName` |  | Bank account holder name | |
| `hideAccountName` |  | If it is `1`, the account name will be hidden.| Default is `0` |
| `disableAccountNameInput` |  | If it is `1`, the account name could not be changed.| Default is `0` |
| `hidePartnerFee` |  | If it is `1`, the fee commissions that you are entitled to will be hidden in the widget, and we will include this fee in the "processing fee".| Default is `1` |
| `walletAddress` | | The address that is set to receive the cryptocurrency |  |
| `hideWalletAddress` |  | If it is `1`, the wallet address will be hidden.| Default is `0` |
| `disableWalletAddressInput` |  | If it is `1`, the wallet address could not be changed.| Default is `0` |
| `notifyUrl` |  | Your Url for notification |  |
| `redirectUrl` |  | Your Url redirection once ChainVerse completed the transaction. |  |
| `logoURL` | | Your logo URL for your Widget |  |
| `themeColor` | | Your theme Color for Widget |  |
