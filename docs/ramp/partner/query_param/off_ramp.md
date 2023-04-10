---
sidebar_label: 'Off-ramp'
sidebar_position: 2
---

# Parameters
| Fields Name | Required | Description | Example |
| -------- | :-------: | :--- | ---------------------------------------- |
| `partnerCode` | [x] | **To integrate all other parameters, you must provide your Partner Code**. Contact us if you need one. | |
| `chainId` |  | [Network ID](https://chainlist.org/) | 97 |
| `addressToken` | | Token-contract address of the cryptocurrency that you would allow your users to buy. |  |
| `tokenAmount` |  | An integer amount representing how much crypto the user wants to buy. It is possible for the user to modify the tokenAmount within the ChainVerse widget. This amount is proritized over fiatAmount.| 20 |
| `fiatAmount` |  | An integer amount representing how much the user wants to spend. It is possible for the user to modify the fiatAmount within the ChainVerse widget. | 2500000 |
| `bankCode` |  | Vietnam domestic bank code | [bankCode list](/docs/ramp/partner/query_param/bank_code) |
| `accountNumber` |  | Bank account number | |
| `accountName` |  | Bank account holder name | |
| `isFeePartnerHidden` |  | If it is `True`, the fee commissions that you are entitled to will be hidden in the widget, and we will include this fee in the "processing fee".| Default is `True` |
| `addressWallet` | | The address that is set to receive the cryptocurrency |  |
| `languages` | | Language used in the widget | vi \| en |
| `notifyUrl` |  | Your Url for notification |  |
| `redirectUrl` |  | Your Url redirection once ChainVerse completed the transaction. |  |
