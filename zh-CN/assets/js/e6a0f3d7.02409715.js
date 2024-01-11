"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3435],{90632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var a=t(85893),s=t(11151);const c={sidebar_position:2,title:"JS SDK \u6307\u5357",description:"\u4f7f\u7528 js-conflux-sdk \u7684\u5168\u9762\u6307\u5357\u3002",displayed_sidebar:"coreSidebar"},r=void 0,o={id:"core/tutorials/js-conflux-sdk",title:"JS SDK \u6307\u5357",description:"\u4f7f\u7528 js-conflux-sdk \u7684\u5168\u9762\u6307\u5357\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/tutorials/js-conflux-sdk.md",sourceDirName:"core/tutorials",slug:"/core/tutorials/js-conflux-sdk",permalink:"/zh-CN/docs/core/tutorials/js-conflux-sdk",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"JS SDK \u6307\u5357",description:"\u4f7f\u7528 js-conflux-sdk \u7684\u5168\u9762\u6307\u5357\u3002",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"Tutorials",permalink:"/zh-CN/docs/category/tutorials"},next:{title:"Hardhat Conflux \u63d2\u4ef6",permalink:"/zh-CN/docs/core/tutorials/hardhat-conflux-plugin"}},i={},d=[{value:"Account Generation",id:"account-generation",level:2},{value:"Querying Blockchain Data",id:"querying-blockchain-data",level:2},{value:"Deploying Smart Contracts",id:"deploying-smart-contracts",level:2},{value:"Calling Smart Contracts",id:"calling-smart-contracts",level:2},{value:"Common Utilities",id:"common-utilities",level:2},{value:"Address",id:"address",level:3},{value:"Format",id:"format",level:3},{value:"Token Unit Conversion",id:"token-unit-conversion",level:2},{value:"Hashing and Signing",id:"hashing-and-signing",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"/zh-CN/docs/core/core-developer-quickstart",children:"Developer Quickstart"})," demonstrates how to install and use the js-conflux-sdk for sending transactions. This guide delves into the details of the js-conflux-sdk."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Account Generation"}),"\n",(0,a.jsx)(n.li,{children:"Querying Blockchain Data"}),"\n",(0,a.jsx)(n.li,{children:"Deploying Smart Contracts"}),"\n",(0,a.jsx)(n.li,{children:"Calling Smart Contracts"}),"\n",(0,a.jsx)(n.li,{children:"Common Utilities"}),"\n",(0,a.jsx)(n.li,{children:"Unit Conversion"}),"\n",(0,a.jsx)(n.li,{children:"Hashing and Signing"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For further details and examples, please refer to the ",(0,a.jsx)(n.a,{href:"https://docs.confluxnetwork.org/js-conflux-sdk/",children:"js-conflux-sdk documentation"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"account-generation",children:"Account Generation"}),"\n",(0,a.jsxs)(n.p,{children:["Generate a new account using ",(0,a.jsx)(n.strong,{children:"PrivateKeyAccount"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const { PrivateKeyAccount } = require('js-conflux-sdk');\n\n// generate a random testnet account\nPrivateKeyAccount.random(undefined, 1)\n/* PrivateKeyAccount {\n    privateKey: '0xd28edbdb7bbe75787b84c5f525f47666a3274bb06561581f00839645f3c26f66',\n    publicKey: '0xc42b53ae2ef95fee489948d33df391c4a9da31b7a3e29cf772c24eb42f74e94ab3bfe00bf29a239c17786a5b921853b7c5344d36694db43aa849e401f91566a5',\n    address: 'cfxtest:aass3rfcwjz1ab9cg5rtbv61531fmwnsuuy8c26f20',\n    networkId: 1\n} */\n// generate a random mainnet account\nPrivateKeyAccount.random(undefined, 1029) // gen a different account from above\n/* PrivateKeyAccount {\n    privateKey: '0x1b67150f56f49556ef7e3899024d83c125d84990d311ec08fa98aa1433bc0f53',\n    publicKey: '0xd442207828ffd4dad918fea0d75d42dbea1fe5e3789c00a82e18ce8229714eae3f70b12f2f1abd795ad3e5c52a5a597289eb5096548438c233431f498b47b9a6',\n    address: 'cfx:aanpezyvznsdg29zu20wpudwnbhx7t4gcp9k23xchw',\n    networkId: 1029\n} */\n// generate a random account with a random source\nPrivateKeyAccount.random('0xabcdefabcdef', 1);\n/* PrivateKeyAccount {\n    privateKey: '0x1d41e006afd28ea339922d8ab4be93154a14d4f1b6d0ad4e7aabf807e7536a5f',\n    publicKey: '0x4c07c75d3fdc5b1d6afef6ec374b0eaac86bcaa771a1d536bc4ce6f111b1c60e414b370e4cf31bf7770ae6818a3518c485398a43857d9053153f6eb4f5644a90',\n    address: 'cfxtest:aajx4wn2kwarr8h71uf880w40dp6x91feac1n6ur3s',\n    networkId: 1\n} */\n"})}),"\n",(0,a.jsx)(n.h2,{id:"querying-blockchain-data",children:"Querying Blockchain Data"}),"\n",(0,a.jsx)(n.p,{children:"Numerous functions are available to query blockchain data, such as block, transaction, receipt, epoch, etc."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const { Conflux } = require('js-conflux-sdk');\n\nconst cfxClient = new Conflux({\n  url: 'https://test.confluxrpc.com',\n  networkId: 1,\n  //   logger: console, // for debug\n});\n\nasync function main() {\n    const status = await cfxClient.cfx.getStatus();\n    console.log(status);\n}\n\n// Other available methods:\n// cfxClient.cfx.getBalance\n// cfxClient.cfx.getNextNonce\n// cfxClient.cfx.getBlockByHash\n// cfxClient.cfx.getTransactionByHash\n// cfxClient.cfx.getTransactionReceipt\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Explore the ",(0,a.jsx)(n.a,{href:"https://github.com/Conflux-Chain/js-conflux-sdk/blob/v2/docs/api/Conflux.md",children:"Conflux cfx namespace API"})," for a complete method list. For more on JSON-RPC, see ",(0,a.jsx)(n.a,{href:"../build/json-rpc/",children:"Conflux Core JSON-RPC API"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"deploying-smart-contracts",children:"Deploying Smart Contracts"}),"\n",(0,a.jsx)(n.p,{children:"The js-conflux-sdk simplifies smart contract deployment."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// Prerequisites: an account with sufficient balance and the smart contract's bytecode and ABI from solc or hardhat\nconst abi = []; // Replace with your contract's ABI\nconst bytecode = '0xabcd'; // Replace with your contract's bytecode\n\nconst contract = cfxClient.Contract({\n  abi,\n  bytecode,\n});\n\nasync function main() {\n    // Deploy the contract (modify if the constructor has parameters)\n    const receipt = await contract.constructor().sendTransaction({\n        from: account,\n    }).executed();\n    console.log('New deployed contract address: ', receipt.contractCreated);\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"calling-smart-contracts",children:"Calling Smart Contracts"}),"\n",(0,a.jsx)(n.p,{children:"To call a smart contract, you need its ABI and address."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const address = ''; // Replace with your contract's address\nconst abi = []; // Replace with your contract's ABI\n\nconst contract = cfxClient.Contract({\n  abi,\n  address,\n});\n\nasync function main() {\n    // Call a view function\n    const result = await contract.viewFunctionName(params);\n    console.log(result);\n    // Call a non-view function\n    const receipt = await contract.nonViewFunctionName(params).sendTransaction({\n        from: account,\n    }).executed();\n    console.log(receipt);\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Consult the sdk's ",(0,a.jsx)(n.a,{href:"https://docs.confluxnetwork.org/js-conflux-sdk/docs/interact_with_contract",children:"Contract interaction guide"})," for more information."]}),"\n",(0,a.jsx)(n.h2,{id:"common-utilities",children:"Common Utilities"}),"\n",(0,a.jsx)(n.h3,{id:"address",children:"Address"}),"\n",(0,a.jsx)(n.p,{children:"The address module offers functions for encoding and decoding cfx addresses and address validation."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const { address } = require('js-conflux-sdk');\n\n// Encode a hex address to a base32 cfx address\nconst cfxAddress = address.encodeCfxAddress('0x166d0ff7691030b0ca33d4e60e842cd300a3010d', 1);\n\n// Decode a base32 cfx address to a hex address\nconst decoded = address.decodeCfxAddress('cfxtest:aang4d91rejdbpgmgtmspdyefxkubj2bbywrwm9j3z');\n\n// Check if an address is valid\naddress.isValidCfxAddress('cfxtest:aang4d91rejdbpgmgtmspdyefxkubj2bbywrwm9j3z'); // Returns true\n\n// Calculate the mapped EVM address\naddress.cfxMappedEVMSpace\n\nAddress('cfxtest:aang4d91rejdbpgmgtmspdyefxkubj2bbywrwm9j3z');\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Discover more at the ",(0,a.jsx)(n.a,{href:"https://github.com/Conflux-Chain/js-conflux-sdk/blob/v2/docs/api/util/address.md",children:"address utils API"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"format",children:"Format"}),"\n",(0,a.jsx)(n.p,{children:"The format module includes functions to convert data between various formats."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const { format } = require('js-conflux-sdk');\n\n// Examples:\nformat.uInt(3); // Returns 3\nformat.hex(Buffer.from('hi')); // Returns 0x6869\nformat.bytes('0x03'); // Returns <Buffer 03>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Explore the ",(0,a.jsx)(n.a,{href:"https://github.com/Conflux-Chain/js-conflux-sdk/blob/v2/docs/api/util/format.md",children:"format API"})," for more details."]}),"\n",(0,a.jsx)(n.h2,{id:"token-unit-conversion",children:"Token Unit Conversion"}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"Drip"})," class for conversions between ",(0,a.jsx)(n.strong,{children:"Drip"})," and ",(0,a.jsx)(n.strong,{children:"CFX"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const { Drip } = require('js-conflux-sdk');\n\n// Initialize a Drip instance\nlet drip = new Drip('1000000000000000000'); // Equivalent to 1 CFX\n\n// Initialize from CFX\ndrip = Drip.fromCFX(1); // Equivalent to 1 CFX\n\n// Convert to CFX\ndrip.toCFX(); // Returns 1\n"})}),"\n",(0,a.jsx)(n.h2,{id:"hashing-and-signing",children:"Hashing and Signing"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"sign"})," module facilitates hashing and signing data."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const { sign } = require('js-conflux-sdk');\n\n// Generate a random buffer\nlet buf = sign.randomBuffer(0);\n\n// Generate a keccak hash\nlet keccakHash = sign.keccak256(buf);\n\n// Generate a random private key\nlet privateKey = sign.randomPrivateKey(buf);\n\n// Convert private key to public key\nlet pubKey = sign.privateKeyToPublicKey(privateKey);\n\n// Convert public key to address\nlet address = sign.publicKeyToAddress(pubKey);\n\n// Sign a buffer with the private key\nlet signResult = sign.ecdsaSign(buf, privateKey);\n\n// Recover public key from signature and buffer, then convert it to address\nsign.publicKeyToAddress(sign.ecdsaRecover(buf, sign.ecdsaSign(signResult, privateKey)))\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var a=t(67294);const s={},c=a.createContext(s);function r(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);