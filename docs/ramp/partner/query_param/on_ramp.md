---
sidebar_label: 'On-ramp'
sidebar_position: 1
---

# Parameters
| Fields Name | Required | Description | Example |
| -------- | :-------: | :--- | ---------------------------------------- |
| `partnerCode` | [x] | **To integrate all other parameters, you must provide your Partner Code**. Contact us if you need one. | POKO |
| `chainId` |  | [Network ID](https://chainlist.org/) | 97 |
| `addressToken` | | Token-contract address of the cryptocurrency that you would allow your users to buy. |  |
| `fiatAmount` |  | An integer amount representing how much the user wants to spend. It is possible for the user to modify the fiatAmount within the ChainVerse widget. This amount is proritized over tokenAmount. | 2500000 |
| `tokenAmount` |  | An integer amount representing how much crypto the user wants to buy. It is possible for the user to modify the tokenAmount within the ChainVerse widget. | 20 |
| `addressWallet` | [x] | The address that is set to receive the cryptocurrency |  |
| `notifyUrl` |  | Your Url for notification |  |
| `redirectUrl` |  | Your Url redirection once ChainVerse completed the transaction. |  |
