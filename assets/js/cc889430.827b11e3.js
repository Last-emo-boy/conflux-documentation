"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3859],{56111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var o=t(85893),s=t(11151);const c={sidebar_position:3,title:"Developer Quickstart",displayed_sidebar:"coreSidebar",description:"This tutorial will show you how to send a transaction using the js-conflux-sdk."},r=void 0,a={id:"core/core-developer-quickstart",title:"Developer Quickstart",description:"This tutorial will show you how to send a transaction using the js-conflux-sdk.",source:"@site/docs/core/core-developer-quickstart.md",sourceDirName:"core",slug:"/core/core-developer-quickstart",permalink:"/docs/core/core-developer-quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/core-developer-quickstart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Developer Quickstart",displayed_sidebar:"coreSidebar",description:"This tutorial will show you how to send a transaction using the js-conflux-sdk."},sidebar:"coreSidebar",previous:{title:"What to Do Next?",permalink:"/docs/core/getting-started/what-to-do-next"},next:{title:"Network RPC Endpoints",permalink:"/docs/core/conflux_rpcs"}},i={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"How to use?",id:"how-to-use",level:2},{value:"Import And Create Conflux Instance",id:"import-and-create-conflux-instance",level:3},{value:"Add Private Key",id:"add-private-key",level:3},{value:"Conflux Address",id:"conflux-address",level:3},{value:"Query Account Balance",id:"query-account-balance",level:3},{value:"Send transaction",id:"send-transaction",level:3},{value:"Common Errors",id:"common-errors",level:2},{value:"Balance not enough",id:"balance-not-enough",level:3},{value:"Resources",id:"resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"To send a transaction on Conflux Core Space, you need to use it's own SDKs. This tutorial will show you how to send a transaction using the js-conflux-sdk."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Ethereum SDKs (ethers.js, web3.js, web3,py, web3j) are not compatible with Conflux Core Space. You need to use Conflux Core Space SDKs."})}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/conflux-chain/js-conflux-sdk",children:(0,o.jsx)(n.strong,{children:"js-conflux-sdk"})})," is a JavaScript SDK for Conflux Core Space. It is a collection of libraries that allow you to interact with a local or remote Conflux node using HTTP, WebSocket. You can use it to send transactions, deploy and interact with smart contracts, and so on."]}),"\n",(0,o.jsx)(n.p,{children:"It is the equivalent of web3.js of Ethereum for Conflux Core Space. But APIs are different."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Node.js environment to install and use the SDK."}),"\n",(0,o.jsxs)(n.li,{children:["A Conflux node to connect to. You can use the public testnet rpc endpoint ",(0,o.jsx)(n.code,{children:"https://test.confluxrpc.com"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["An account private key to sign the transaction. The account should have some testnet CFX to pay for the transaction value and fee. You can get some testnet CFX from ",(0,o.jsx)(n.a,{href:"https://faucet.confluxnetwork.org/",children:"Conflux Core Faucet"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Note: The private key can be exported from Fluent Wallet settings page. Do not use your mainnet private key on testnet."}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"To use it, the Node.js environment is required. You can install it via npm:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"npm install js-conflux-sdk \n"})}),"\n",(0,o.jsx)(n.h2,{id:"how-to-use",children:"How to use?"}),"\n",(0,o.jsx)(n.h3,{id:"import-and-create-conflux-instance",children:"Import And Create Conflux Instance"}),"\n",(0,o.jsxs)(n.p,{children:["Import class ",(0,o.jsx)(n.code,{children:"Conflux"})," from ",(0,o.jsx)(n.code,{children:"js-conflux-sdk"})," and set a Conflux provider. For the Conflux Core Testnet, you can directly use the public RPC endpoint ",(0,o.jsx)(n.code,{children:"https://test.confluxrpc.com"}),". It can also be changed to any other Conflux node, even your own."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const { Conflux } = require('js-conflux-sdk');\n\nconst cfxClient = new Conflux({\n  url: 'https://test.confluxrpc.com',\n  networkId: 1,\n  //   logger: console, // for debug\n});\n"})}),"\n",(0,o.jsx)(n.h3,{id:"add-private-key",children:"Add Private Key"}),"\n",(0,o.jsx)(n.p,{children:"Before sending a transaction, you need to add your private key to the Conflux instance."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const PRIVATE_KEY = 'Your Private Key';\n// const PRIVATE_KEY = '0x5f15f9e52fc5ec6f77115a9f306c120a7e80d83115212d33a843bb6b7989c261';\nconst account = cfxClient.wallet.addPrivateKey(PRIVATE_KEY); // create account instance\nconsole.log(\"Account address: \", account.address);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"conflux-address",children:"Conflux Address"}),"\n",(0,o.jsxs)(n.p,{children:["The address of Conflux Core Space is different from Ethereum. It is a base32 encoded string introduced by ",(0,o.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-37.md",children:"CIP-37"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Different network's address prefix is different. For example, the address prefix of Conflux Core Testnet is ",(0,o.jsx)(n.code,{children:"cfxtest"})," and mainnet is ",(0,o.jsx)(n.code,{children:"cfx"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Mainnet Address: ",(0,o.jsx)(n.code,{children:"cfx:aamjy3abae3j0ud8ys0npt38ggnunk5r4ps2pg8vcc"})]}),"\n",(0,o.jsxs)(n.li,{children:["Testnet Address: ",(0,o.jsx)(n.code,{children:"cfxtest:aamjy3abae3j0ud8ys0npt38ggnunk5r4pex9025gj"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can learn more about Conflux Core address ",(0,o.jsx)(n.a,{href:"/docs/core/core-space-basics/addresses",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"query-account-balance",children:"Query Account Balance"}),"\n",(0,o.jsxs)(n.p,{children:["You can query the account balance by using ",(0,o.jsx)(n.code,{children:"cfxClient.cfx.getBalance"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// Drip is the smallest unit of CFX, can use it to convert to CFX\nconst { Drip } = require('js-conflux-sdk');\n\nasync function main() {\n  const balance = await conflux.cfx.getBalance(account.address);\n  console.log(`Balance of ${account.address} is ${new Drip(balance).toCFX()} CFX`);\n}\n\nmain().catch(e => console.error(e));\n"})}),"\n",(0,o.jsxs)(n.p,{children:["There are a lot of other APIs under ",(0,o.jsx)(n.code,{children:"cfx"})," namespace to query the blockchain data. You can find them in the ",(0,o.jsx)(n.a,{href:"https://github.com/Conflux-Chain/js-conflux-sdk/blob/v2/docs/api/Conflux.md#conflux",children:"SDK API Reference"})," and Conflux ",(0,o.jsx)(n.a,{href:"./build/json-rpc/",children:"Core RPC API Reference"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"send-transaction",children:"Send transaction"}),"\n",(0,o.jsxs)(n.p,{children:["After adding the private key, you can send a transaction by using ",(0,o.jsx)(n.code,{children:"cfxClient.cfx.sendTransaction"}),". The steps are as follows:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Compose the transaction parameters."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const receiver = 'cfxtest:aarc9abycue0hhzgyrr53m6cxedgccrmmy8m50bu1p';\nlet txParams = {\n  from: account, // from account instance and will by sign by account.privateKey\n  to: receiver, // accept address string or account instance\n  value: Drip.fromCFX(0.125), // use the conversion utility function\n};\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["The detailed explanation of each field can be found ",(0,o.jsx)(n.a,{href:"/docs/core/core-space-basics/transaction_explain",children:"here"})]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Send the composed transaction via ",(0,o.jsx)(n.code,{children:"cfxClient.cfx.sendTransaction"})," and get the returned transaction hash. Then you can view the transaction details by using ",(0,o.jsx)(n.code,{children:"tx.mined()"})," or ",(0,o.jsx)(n.code,{children:"tx.executed()"}),", which APIs will return the transaction data or transaction receipt when transaction is mined or executed. Noting these 2 APIs are a simple wrapping layer for ",(0,o.jsx)(n.code,{children:"cfxClient.cfx.getTransactionByHash"})," and ",(0,o.jsx)(n.code,{children:"cfxClient.cfx.getTransactionReceipt"}),". You can also search the sent transaction at ",(0,o.jsx)(n.a,{href:"https://confluxscan.io/",children:"Conflux Scan"})," using transaction hash."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"async function main() {\n  const receiver = 'cfxtest:aarc9abycue0hhzgyrr53m6cxedgccrmmy8m50bu1p';\n  let txParams = {\n    from: account, // from account instance and will by sign by account.privateKey\n    to: receiver, // accept address string or account instance\n    value: Drip.fromCFX(0.125), // use the conversion utility function\n  };\n  const txHash = await conflux.cfx.sendTransaction(txParams);\n  console.log('Transaction hash: ', txHash);\n\n  // It need a couple of seconds to mine the transaction\n  const txData = await txHash.mined()\n  console.log('Transaction info: ', txData)\n\n  // Normally tt need less 20 seconds to execute the transaction\n  const txReceipt = await txHash.executed()\n  console.log('Transaction receipt', txReceipt)\n}\n\nmain().catch(e => console.error(e));\n"})}),"\n",(0,o.jsx)(n.h2,{id:"common-errors",children:"Common Errors"}),"\n",(0,o.jsx)(n.h3,{id:"balance-not-enough",children:"Balance not enough"}),"\n",(0,o.jsxs)(n.p,{children:["If your account does not have enough balance, you will encounter the following error: ",(0,o.jsx)(n.code,{children:"Insufficient balance"})," or ",(0,o.jsx)(n.code,{children:"Balance is not enough to pay transaction"})]}),"\n",(0,o.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Check ",(0,o.jsx)(n.a,{href:"https://docs.confluxnetwork.org/js-conflux-sdk/",children:"js-conflux-sdk's documentation"})," for more details"]}),"\n",(0,o.jsxs)(n.li,{children:["Refer to ",(0,o.jsx)(n.a,{href:"/docs/core/build/sdks-and-tools/sdks",children:"SDKs"})," for examples of other SDKs."]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://faucet.confluxnetwork.org/",children:"Core Space Faucet"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://confluxscan.io/",children:"Conflux Core Scan"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(67294);const s={},c=o.createContext(s);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);