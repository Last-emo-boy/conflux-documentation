"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9415],{72120:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=r(85893),o=r(11151);const s={sidebar_position:5,title:"QuickStart for Ethereum Developers",displayed_sidebar:"coreSidebar"},i=void 0,c={id:"core/build/quickstart-for-eth-devs",title:"QuickStart for Ethereum Developers",description:"Conflux Core Space is a blockchain protocol based on an innovative tree graph ledger structure. It is compatible with both VM and EVM (Ethereum Virtual Machine), and its core concepts (accounts, transactions, smart contracts, etc.) are similar to Ethereum. If you are an Ethereum developer, you can quickly get started with Conflux Core Space development. This article will guide Ethereum developers on how to quickly dive into Conflux Core Space development.",source:"@site/docs/core/build/quickstart-for-eth-devs.md",sourceDirName:"core/build",slug:"/core/build/quickstart-for-eth-devs",permalink:"/docs/core/build/quickstart-for-eth-devs",draft:!1,unlisted:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/build/quickstart-for-eth-devs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"QuickStart for Ethereum Developers",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"cfx_estimateGasAndCollateral Behaviour",permalink:"/docs/core/build/json-rpc/rpc-behaviour/cfx_estimateGasAndCollateral-behaviour"},next:{title:"Grants",permalink:"/docs/core/build/grants"}},a={},l=[{value:"Differences between Conflux Core Space and Ethereum",id:"differences-between-conflux-core-space-and-ethereum",level:2},{value:"Innovations in Conflux Core Space",id:"innovations-in-conflux-core-space",level:2},{value:"Getting Started Quickly",id:"getting-started-quickly",level:2},{value:"Migrating Ethereum Dapps to Conflux Core Space",id:"migrating-ethereum-dapps-to-conflux-core-space",level:2},{value:"Other Resources",id:"other-resources",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Conflux Core Space is a blockchain protocol based on an innovative tree graph ledger structure. It is compatible with both VM and EVM (Ethereum Virtual Machine), and its core concepts (accounts, transactions, smart contracts, etc.) are similar to Ethereum. If you are an Ethereum developer, you can quickly get started with Conflux Core Space development. This article will guide Ethereum developers on how to quickly dive into Conflux Core Space development."}),"\n",(0,t.jsx)(n.p,{children:"If you are not familiar with Ethereum development, it is strongly recommended to learn Ethereum development first, as it has rich documentation, comprehensive development tools, and community support. This article will not cover the basics of Ethereum development."}),"\n",(0,t.jsx)(n.h2,{id:"differences-between-conflux-core-space-and-ethereum",children:"Differences between Conflux Core Space and Ethereum"}),"\n",(0,t.jsxs)(n.p,{children:["Conflux's underlying ledger structure is a tree graph, which differs from Ethereum. It is recommended to first understand ",(0,t.jsx)(n.a,{href:"/docs/general/conflux-basics/consensus-mechanisms/proof-of-work/tree-graph",children:"Conflux's tree graph ledger structure"}),". This will involve new concepts such as ",(0,t.jsx)(n.a,{href:"/docs/general/conflux-basics/glossary#epoch",children:"Epoch"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Conflux Core Space has two types of accounts, similar to Ethereum: external accounts and contract accounts. However, the account addresses in Conflux Core Space are different, with distinct generation methods and encoding rules. For details, refer to ",(0,t.jsx)(n.a,{href:"/docs/core/core-space-basics/addresses",children:"Conflux Core Addresses"}),". If you prefer not to delve into the details, you can directly use the Fluent wallet or Core Space SDK to obtain addresses."]}),"\n",(0,t.jsxs)(n.p,{children:["Due to differences in address and ledger structure, Conflux Core Space's RPC (Remote Procedure Call) interface also has some variations. For details, see ",(0,t.jsx)(n.a,{href:"/docs/core/build/json-rpc/cfx-namespace",children:"Conflux Core RPC"}),". In summary, the core RPC methods of Conflux Core Space are similar to Ethereum, with the only change being the prefix from ",(0,t.jsx)(n.code,{children:"eth_"})," to ",(0,t.jsx)(n.code,{children:"cfx_"}),". Additionally, there are some new methods and slight differences in parameters and return structures."]}),"\n",(0,t.jsxs)(n.p,{children:["The transaction structure in Conflux Core Space is almost the same as Ethereum's 155-type transactions, including core transaction information and gas fees. However, Conflux Core Space's transaction structure also includes some additional fields. Refer to ",(0,t.jsx)(n.a,{href:"/docs/core/core-space-basics/transactions/overview",children:"Conflux Core Transactions"})," and ",(0,t.jsx)(n.a,{href:"/docs/core/core-space-basics/transactions/faqs#whats-the-differences-between-ethereum-155-transaction-and-core-space-transaction",children:"Transaction Comparison"})," for details."]}),"\n",(0,t.jsxs)(n.p,{children:["Conflux Core Space's VM is compatible with EVM, meaning that most Ethereum smart contracts can be deployed directly on Conflux Core Space. Popular Solidity libraries (e.g., OpenZeppelin) and tools can also be used directly, with some subtle differences in contract address calculation rules and the 1820 contract address. See ",(0,t.jsx)(n.a,{href:"/docs/core/core-space-basics/vm-difference",children:"VM Difference"})," for more information."]}),"\n",(0,t.jsx)(n.h2,{id:"innovations-in-conflux-core-space",children:"Innovations in Conflux Core Space"}),"\n",(0,t.jsx)(n.p,{children:"As a next-generation blockchain protocol, Conflux Core Space introduces some innovative features, such as:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Beyond transaction gas fees, it proposes a more reasonable storage fee. Details can be found in ",(0,t.jsx)(n.a,{href:"/docs/core/core-space-basics/storage",children:"Storage Fees"}),", where storage fees are in the form of collateral, refundable after storage release."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The most significant innovation is the implementation of a transaction fee ",(0,t.jsx)(n.a,{href:"/docs/core/core-space-basics/sponsor-mechanism",children:"sponsorship mechanism"}),". This mechanism allows contracts to be sponsored, meaning that sponsored contracts do not require users to pay gas fees during interactions; instead, the sponsor covers the fees. This mechanism significantly lowers user entry barriers and allows contract developers more flexibility in designing contracts."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In addition, Conflux Core Space provides several built-in contracts for governance, sponsorship, cross-space functionality, etc. See ",(0,t.jsx)(n.a,{href:"https://doc.confluxnetwork.org/docs/core/core-space-basics/internal-contracts/",children:"Internal Contracts"})," for details."]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started-quickly",children:"Getting Started Quickly"}),"\n",(0,t.jsx)(n.p,{children:"Ethereum developers can quickly get started with Conflux Core Space development through the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install the Fluent wallet, the official wallet for Conflux Core Space, supporting all its features. See ",(0,t.jsx)(n.a,{href:"https://fluentwallet.com/",children:"Fluent Wallet"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Switch the network to the testnet and claim test CFX through the Core Space faucet. Refer to ",(0,t.jsx)(n.a,{href:"https://faucet.confluxnetwork.org/",children:"Faucet"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Quickly familiarize yourself with Conflux Core's ",(0,t.jsx)(n.a,{href:"/docs/core/core-developer-quickstart",children:"js-conflux-sdk"}),", a SDK similar to web3.js or ethers.js, with some usage differences."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use Hardhat with ",(0,t.jsx)(n.a,{href:"/docs/core/tutorials/hardhat-conflux-plugin",children:"hardhat-conflux"})," plugin for contract development. The contract development experience is identical to Ethereum, with deployment and interaction scripts written using js-conflux-sdk."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For backend services, use ",(0,t.jsx)(n.a,{href:"/docs/core/build/sdks-and-tools/sdks",children:"SDKs in other languages"}),", including Golang, Python, Java, etc."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"migrating-ethereum-dapps-to-conflux-core-space",children:"Migrating Ethereum Dapps to Conflux Core Space"}),"\n",(0,t.jsx)(n.p,{children:"If you already have an Ethereum Dapp and want to migrate it to Conflux Core Space, follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Deploy the contracts (usually requiring no modification to the contract code) to Conflux Core Space using Hardhat with the hardhat-conflux plugin or directly using js-conflux-sdk."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Replace the Ethereum SDK in the Dapp's frontend code with js-conflux-sdk, and switch the wallet to the Fluent wallet."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"other-resources",children:"Other Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/core/conflux_rpcs",children:"Official Public RPC Endpoint"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://confluxscan.io/",children:"Blockchain Explorer"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/core/tutorials/how-to-sponsor-contract",children:"How to Sponsor a Contract"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/core/FAQs",children:"FAQs"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var t=r(67294);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);