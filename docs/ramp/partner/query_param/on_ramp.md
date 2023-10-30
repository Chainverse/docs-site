---
sidebar_label: 'On-ramp'
sidebar_position: 1
---

# Parameters
| Fields Name | Required | Description | Example |
| -------- | :-------: | :--- | ---------------------------------------- |
| `partnerCode` | [x] | **To integrate all other parameters, you must provide your Partner Code**. Contact us if you need one. | |
| `chainId` |  | [Network ID](https://chainlist.org/) | 97 |
| `tokenAddress` | | Token-contract address of the cryptocurrency that you would allow your users to buy. |  |
| `fiatAmount` |  | An integer amount representing how much the user wants to spend. It is possible for the user to modify the fiatAmount within the ChainVerse widget. This amount is proritized over tokenAmount. | 2500000 |
| `tokenAmount` |  | An integer amount representing how much crypto the user wants to buy. It is possible for the user to modify the tokenAmount within the ChainVerse widget. | 20 |
| `hidePartnerFee` |  | If it is `1`, the fee commissions that you are entitled to will be hidden in the widget, and we will include this fee in the "processing fee".| Default is `1` |
| `walletAddress` | | The address that is set to receive the cryptocurrency |  |
| `hideWalletAddress` |  | If it is `1`, the wallet address will be hiden.| Default is `0` |
| `disableWalletAddressInput` |  | If it is `1`, the wallet address could not be changed.| Default is `0` |
| `logoURL` | | Your logo URL for your Widget |  |
| `themeColor` | | Your theme Color for Widget |  |
| `notifyUrl` |  | Your Url for notification |  |
| `redirectUrl` |  | Your Url redirection once ChainVerse completed the transaction. |  |
