"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7668],{55585:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=c(85893),t=c(11151);const r={sidebar_position:10,title:"Running a Light Node",displayed_sidebar:"generalSidebar"},o="Running a Light Node",a={id:"general/run-a-node/advanced-topics/running-light-node",title:"Running a Light Node",description:"Note: Currently, eSpace (EVM full-compatible space) RPC methods are not supported on the Conflux Light Node.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/run-a-node/advanced-topics/running-light-node.md",sourceDirName:"general/run-a-node/advanced-topics",slug:"/general/run-a-node/advanced-topics/running-light-node",permalink:"/es/docs/general/run-a-node/advanced-topics/running-light-node",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Running a Light Node",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Official Bootnodes",permalink:"/es/docs/general/run-a-node/advanced-topics/official-bootnodes"},next:{title:"Running a Full Node",permalink:"/es/docs/general/run-a-node/advanced-topics/running-full-node"}},i={},d=[{value:"Overview",id:"overview",level:2},{value:"Running a light node",id:"running-a-light-node-1",level:2},{value:"Interacting with a light node",id:"interacting-with-a-light-node",level:2},{value:"RPC queries",id:"rpc-queries",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Other SDKs",id:"other-sdks",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Why do I get an error when calling a contract method?",id:"why-do-i-get-an-error-when-calling-a-contract-method",level:3},{value:"Why do I see timeout instead of null",id:"why-do-i-see-timeout-instead-of-null",level:3},{value:"I&#39;m searching through event logs, why is it so slow?",id:"im-searching-through-event-logs-why-is-it-so-slow",level:3},{value:"RPC availability",id:"rpc-availability",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"running-a-light-node",children:"Running a Light Node"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Note: Currently, eSpace (EVM full-compatible space) RPC methods are not supported on the Conflux Light Node."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Node version: ",(0,s.jsx)(n.code,{children:"conflux-rust v2.1.0"})]}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Light nodes are special nodes in the Conflux network that store block headers only and retrieve everything else from their peers on-demand. This means that by default light nodes do not store transactions nor do they store state trees either. This can drastically reduce the disk and bandwidth use of light nodes compared to full and archive nodes, especially under high TPS. As a trade-off RPC queries have a higher latency on light nodes."}),"\n",(0,s.jsxs)(n.p,{children:["Light nodes execute ",(0,s.jsx)(n.strong,{children:"GHAST"})," consensus on their local header graph and they also verify each item retrieved on-demand using Merkle proofs and other similar mechanisms. Items retrieved on-demand include accounts, bloom filters, transactions, and transaction receipts. While light nodes need to rely on their peers to fulfill RPC queries they do this in a trustless way."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The current light node implementation is still considered experimental therefore bugs are expected to exist. If you encounter any issues please let us know by opening an issue on the ",(0,s.jsx)(n.a,{href:"https://github.com/Conflux-Chain/conflux-rust/issues",children:"conflux-rust"})," repository."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"running-a-light-node-1",children:"Running a light node"}),"\n",(0,s.jsxs)(n.p,{children:["Light nodes can be enabled in the ",(0,s.jsx)(n.code,{children:"hydra.toml"})," settings file (",(0,s.jsx)(n.code,{children:"testnet.toml"})," for testnet) in the ",(0,s.jsx)(n.code,{children:"node_type"})," variable."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'node_type = "light"\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Alternatively Light nodes can be enabled using the ",(0,s.jsx)(n.code,{children:"--light"})," command line flag:"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Start by downloading the latest release from the ",(0,s.jsx)(n.a,{href:"https://github.com/Conflux-Chain/conflux-rust/",children:"conflux-rust"})," repository or by building from source code following this guide. Then, you can simply run the node using these commands:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"> cd run\n> ./conflux --config hydra.toml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Similarly to full nodes you will know when your node is fully synced with the network once the ",(0,s.jsx)(n.code,{children:"console"})," prints:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash+",children:"Catch-up mode: false\n"})}),"\n",(0,s.jsx)(n.h2,{id:"interacting-with-a-light-node",children:"Interacting with a light node"}),"\n",(0,s.jsxs)(n.p,{children:["Similarly to full and archive nodes, you can interact with a light node through an ",(0,s.jsx)(n.code,{children:"HTTP"}),", ",(0,s.jsx)(n.code,{children:"TCP"}),", or ",(0,s.jsx)(n.code,{children:"WebSocket"})," connection. By default local HTTP queries are enabled through ",(0,s.jsx)(n.code,{children:"port 12539"}),". For details, please refer to the JSON-RPC documentation."]}),"\n",(0,s.jsx)(n.h3,{id:"rpc-queries",children:"RPC queries"}),"\n",(0,s.jsxs)(n.p,{children:["Light nodes support most Conflux RPC APIs and support for the rest is also ",(0,s.jsx)(n.a,{href:"https://github.com/Conflux-Chain/conflux-rust/issues/1461",children:"on the way"}),". As light nodes need to query their peers to fulfill RPC requests, the overall latency is slightly larger. (It is significantly larger for ",(0,s.jsx)(n.code,{children:"cfx_getLogs"}),".)"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'> curl -X POST --data \'{ "jsonrpc": "2.0", "method": "cfx_clientVersion", "id": 1 }\' -H "Content-Type: application/json" localhost:12539\n{ "jsonrpc": "2.0", "result": "conflux-rust-1.0.0", "id": 1 }\n\n> curl -X POST --data \'{ "jsonrpc":"2.0", "method":"cfx_getBalance", "params": ["cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg"], "id": 2 }\' -H "Content-Type: application/json" localhost:12539\n{ "jsonrpc": "2.0", "result": "0x5fc346d4363f84249d4a", "id": 2 }\n\n> curl -X POST --data \'{ "jsonrpc": "2.0", "method": "cfx_getLogs", "params": [{ "address": "cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp", "fromEpoch": "0x1c8b8", "toEpoch": "0x1c8d6" }], "id": 3}\' -H "Content-Type: application/json" localhost:12539\n{ "jsonrpc": "2.0", "result": [{ "address": "CFX:TYPE.CONTRACT:ACC7UAWF5UBTNMEZVHU9DHC6SGHEA0403Y2DGPYFJP", "blockHash": "0x694898c77602511b6c411860ec230ac7ca58c08a4cbe3cad904e724b2eb97fee", "data": "0x0000000000000000000000000000000000000000000000049b9ca9a694340000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000141da5f533abef1b82a4a6d698415b8a56894b7b410000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "epochNumber": "0x1c8bf", "logIndex": "0x0", "topics": ["0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987","0x0000000000000000000000001da5f533abef1b82a4a6d698415b8a56894b7b41","0x0000000000000000000000001da5f533abef1b82a4a6d698415b8a56894b7b41","0x00000000000000000000000080bb30efc5683758128b404fe5da03432eb16634"], "transactionHash": "0x7dcfeb245369e509f2d154f2d5523e3ebe0b54f1d420e02edf56c70cdcae278d", "transactionIndex": "0x0", "transactionLogIndex": "0x0" },{ "address": "CFX:TYPE.CONTRACT:ACC7UAWF5UBTNMEZVHU9DHC6SGHEA0403Y2DGPYFJP", "blockHash": "0x694898c77602511b6c411860ec230ac7ca58c08a4cbe3cad904e724b2eb97fee", "data": "0x0000000000000000000000000000000000000000000000049b9ca9a694340000", "epochNumber": "0x1c8bf", "logIndex": "0x1", "topics": ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x0000000000000000000000001da5f533abef1b82a4a6d698415b8a56894b7b41","0x00000000000000000000000080bb30efc5683758128b404fe5da03432eb16634"], "transactionHash": "0x7dcfeb245369e509f2d154f2d5523e3ebe0b54f1d420e02edf56c70cdcae278d", "transactionIndex": "0x0", "transactionLogIndex": "0x1" }], "id": 3 } -H "Content-Type: application/json" localhost:12539\n'})}),"\n",(0,s.jsx)(n.h3,{id:"javascript",children:"JavaScript"}),"\n",(0,s.jsxs)(n.p,{children:["Light nodes support most of the functionalities of the JavaScript SDK (",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/js-conflux-sdk",children:"js-conflux-sdk"}),"). You can install the SDK using the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install --save js-conflux-sdk\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then, you can query the blockchain and send transactions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const { Conflux, Drip } = require('js-conflux-sdk');\n\nconst PRIVATE_KEY = '0x...';\nconst RECEIVER = 'cfx:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg';\n\nasync function main() {\n  const conflux = new Conflux({ url: 'http://localhost:12539' });\n\n  // query node version\n  const client_version = await conflux.provider.call('cfx_clientVersion');\n  console.log('client_version:', client_version);\n\n  // query account balance\n  const balance = await conflux.getBalance('cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg');\n  console.log('balance:', balance.toString(10));\n\n  // query smart contract logs\n  const logs = await conflux.getLogs({\n    address: 'cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp',\n    fromEpoch: 116920,\n    toEpoch: 116950,\n  });\n\n  console.log('logs:', logs);\n\n  // send transaction\n  const account = conflux.wallet.addPrivateKey(PRIVATE_KEY);\n\n  const tx = {\n    from: account.address,\n    to: RECEIVER,\n    value: Drip.fromCFX(0.1),\n    gasPrice: 1000000000,\n  };\n\n  try {\n    const receipt = await conflux.sendTransaction(tx).executed();\n    console.log('receipt:', receipt);\n  } catch (e) {\n    console.error(e);\n  }\n}\n\nmain();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"other-sdks",children:"Other SDKs"}),"\n",(0,s.jsxs)(n.p,{children:["While it has not been tested, light nodes are expected to work with the ",(0,s.jsx)(n.a,{href:"https://github.com/Conflux-Chain/java-conflux-sdk",children:"Java"}),", ",(0,s.jsx)(n.a,{href:"https://github.com/Conflux-Chain/python-conflux-sdk",children:"Python"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/Conflux-Chain/go-conflux-sdk",children:"Go"})," SDKs as well."]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.h3,{id:"why-do-i-get-an-error-when-calling-a-contract-method",children:"Why do I get an error when calling a contract method?"}),"\n",(0,s.jsx)(n.p,{children:"If you run the following code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const admin = await cfx.InternalContract('AdminControl').getAdmin('cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp');\nconsole.log('admin:', admin);\n"})}),"\n",(0,s.jsx)(n.p,{children:"...You will get this error:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"RPCError: This API is not implemented yet\n    at HttpProvider.call\n    at processTicksAndRejections\n    at async Conflux.call\n    at async MethodTransaction.call\n    at async MethodTransaction.then {\n  code: -32000,\n  data: 'Tracking issue: https://github.com/Conflux-Chain/conflux-rust/issues/1461'\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This is because contract calls use the ",(0,s.jsx)(n.code,{children:"cfx_call"})," RPC API which is not yet supported on light nodes."]}),"\n",(0,s.jsx)(n.p,{children:"Suppose you would like to send a transaction to a smart contract:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"conflux.InternalContract('AdminControl').setAdmin('cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp', 'cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg').sendTransaction({\n  from: account,\n}).executed();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You will get a similar error. This is because for contract transactions, ",(0,s.jsx)(n.code,{children:"js-conflux-sdk"})," will automatically attempt to estimate the gas limit and storage limit using the ",(0,s.jsx)(n.code,{children:"cfx_estimateGasAndCollateral"})," RPC which is not yet supported on light nodes. You can address this by manually setting these parameters:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"conflux.InternalContract('AdminControl').setAdmin('cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp', 'cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg').sendTransaction({\n  from: account,\n  gas: 1000000000,\n  storageLimit: '0x0',\n  gasPrice: '0x1',\n}).executed();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you encounter a ",(0,s.jsx)(n.code,{children:"This API is not implemented yet"})," error, you can set the debug logger on the conflux object to find out which RPC is causing it."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const cfx = new Conflux({\n  url: 'http://localhost:12539',\n  logger: console,\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"why-do-i-see-timeout-instead-of-null",children:"Why do I see timeout instead of null"}),"\n",(0,s.jsx)(n.p,{children:"For most operations, you might sometimes see a timeout error:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'RPCError: Operation timeout: "Timeout while retrieving transaction with hash 0x497755f45baef13a35347933c48c0b8940f2cc3347477b5ed9f165581b082699"\n'})}),"\n",(0,s.jsx)(n.p,{children:"This is because light nodes have to retrieve transactions and other items from their peers. If no peer responds within 4 seconds, you will get a timeout error. In most cases, retrying the query will succeed."}),"\n",(0,s.jsxs)(n.p,{children:["You will also get a timeout if you call ",(0,s.jsx)(n.code,{children:"conflux.getTransactionByHash"}),' and pass a transaction hash that does not exist. This is because the "non-existence" or transactions is not something light nodes can verify, so returning ',(0,s.jsx)(n.code,{children:"null"})," might be misleading. This behavior might change in the future."]}),"\n",(0,s.jsx)(n.h3,{id:"im-searching-through-event-logs-why-is-it-so-slow",children:"I'm searching through event logs, why is it so slow?"}),"\n",(0,s.jsx)(n.p,{children:"Log filtering is a very expensive operation on light nodes. For each epoch in the range you specify, the node needs to perform 1 to 3 queries. We recommend you make multiple queries with smaller epoch ranges."}),"\n",(0,s.jsx)(n.p,{children:"instead of:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const fromEpoch = 110000;\nconst toEpoch = 119999;\n\n// NOT RECOMMENDED\nconst logs = await cfx.getLogs({ fromEpoch, toEpoch, address: 'cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp' });\nconsole.log('logs:', logs);\n"})}),"\n",(0,s.jsx)(n.p,{children:"You are encouraged to do this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"for (ii = 0; ii < 10; ++ii) {\n  const fromEpoch = 110000 + ii * 1000;\n  const toEpoch = 110000 + (ii + 1) * 1000 - 1;\n  const logs = await cfx.getLogs({ fromEpoch, toEpoch, address: 'cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp' });\n  console.log('logs:', logs);\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"rpc-availability",children:"RPC availability"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"RPC"}),(0,s.jsx)(n.th,{children:"status"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_call",children:"cfx_call"})}),(0,s.jsx)(n.td,{children:"\u274c Not supported yet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_checkbalanceagainsttransaction",children:"cfx_checkBalanceAgainstTransaction"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_clientversion",children:"cfx_clientVersion"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_epochnumber",children:"cfx_epochNumber"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_estimategasandcollateral",children:"cfx_estimateGasAndCollateral"})}),(0,s.jsx)(n.td,{children:"\u274c Not supported yed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_gasprice",children:"cfx_gasPrice"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getaccount",children:"cfx_getAccount"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getaccumulateinterestrate",children:"cfx_getAccumulateInterestRate"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getadmin",children:"cfx_getAdmin"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getbalance",children:"cfx_getBalance"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getbestblockhash",children:"cfx_getBestBlockHash"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getblockbyepochnumber",children:"cfx_getBlockByEpochNumber"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getblockbyhash",children:"cfx_getBlockByHash"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getblockbyhashwithpivotassumption",children:"cfx_getBlockByHashWithPivotAssumption"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getblockrewardinfo",children:"cfx_getBlockRewardInfo"})}),(0,s.jsx)(n.td,{children:"\u274c Not supported yet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getblocksbyepoch",children:"cfx_getBlocksByEpoch"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getcode",children:"cfx_getCode"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getcollateralforstorage",children:"cfx_getCollateralForStorage"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getconfirmationriskbyhash",children:"cfx_getConfirmationRiskByHash"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getinterestrate",children:"cfx_getInterestRate"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getlogs",children:"cfx_getLogs"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getnextnonce",children:"cfx_getNextNonce"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getskippedblocksbyepoch",children:"cfx_getSkippedBlocksByEpoch"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getsponsorinfo",children:"cfx_getSponsorInfo"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getstakingbalance",children:"cfx_getStakingBalance"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getstatus",children:"cfx_getStatus"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getstorageat",children:"cfx_getStorageAt"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getstorageroot",children:"cfx_getStorageRoot"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_gettransactionbyhash",children:"cfx_getTransactionByHash"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_gettransactionreceipt",children:"cfx_getTransactionReceipt"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_sendrawtransaction",children:"cfx_sendRawTransaction"})}),(0,s.jsx)(n.td,{children:"\u2705 Supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getsupplyinfo",children:"cfx_getSupplyInfo"})}),(0,s.jsx)(n.td,{children:"\u274c Not supported yet"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>a,a:()=>o});var s=c(67294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);