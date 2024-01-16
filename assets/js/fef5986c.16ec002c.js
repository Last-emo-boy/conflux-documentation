"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7126],{61612:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=a(85893),n=a(11151);const o={sidebar_position:15,title:"FAQs",description:"Frequently asked questions about Conflux eSpace",displayed_sidebar:"eSpaceSidebar"},c=void 0,i={id:"espace/FAQs",title:"FAQs",description:"Frequently asked questions about Conflux eSpace",source:"@site/docs/espace/FAQs.md",sourceDirName:"espace",slug:"/espace/FAQs",permalink:"/docs/espace/FAQs",draft:!1,unlisted:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/espace/FAQs.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"FAQs",description:"Frequently asked questions about Conflux eSpace",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"CIP-90",permalink:"/docs/espace/build/cip90"}},r={},d=[{value:"How to run eSpace node?",id:"how-to-run-espace-node",level:2},{value:"Use which SDK(js-conflux-sdk or ethers.js) to develop eSpace DApp?",id:"use-which-sdkjs-conflux-sdk-or-ethersjs-to-develop-espace-dapp",level:2},{value:"How to bridge CFX between eSpace and Core Space?",id:"how-to-bridge-cfx-between-espace-and-core-space",level:2},{value:"Can I use base32 address in eSpace?",id:"can-i-use-base32-address-in-espace",level:2},{value:"What is the TPS of eSpace?",id:"what-is-the-tps-of-espace",level:2},{value:"Is it easy to migrate an Ethereum DApp to eSpace?",id:"is-it-easy-to-migrate-an-ethereum-dapp-to-espace",level:2},{value:"What&#39;s the eSpace hardfork block number?",id:"whats-the-espace-hardfork-block-number",level:2},{value:"How long does it take to execute a transaction in eSpace?",id:"how-long-does-it-take-to-execute-a-transaction-in-espace",level:2}];function p(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"how-to-run-espace-node",children:"How to run eSpace node?"}),"\n",(0,t.jsxs)(s.p,{children:["eSpace and Core Space share a common node program, so please refer to the ",(0,t.jsx)(s.a,{href:"/docs/category/run-a-node",children:"Core Space Node Operation Guide"}),". The eSpace default RPC port is 8545, is not same with Core Space RPC port."]}),"\n",(0,t.jsx)(s.h2,{id:"use-which-sdkjs-conflux-sdk-or-ethersjs-to-develop-espace-dapp",children:"Use which SDK(js-conflux-sdk or ethers.js) to develop eSpace DApp?"}),"\n",(0,t.jsxs)(s.p,{children:["eSpace is compatible with Ethereum, you can use the same SDK as Ethereum. So ethers.js, web3.js, ",(0,t.jsx)(s.a,{href:"https://viem.sh/",children:"viem"}),", web3py, web3j and other SDKs can be used to develop eSpace DApp."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"js-conflux-sdk"})," is only used to develop DApp for Conflux Core, and it is not compatible with Ethereum or eSpace."]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-bridge-cfx-between-espace-and-core-space",children:"How to bridge CFX between eSpace and Core Space?"}),"\n",(0,t.jsxs)(s.p,{children:["You can use ",(0,t.jsx)(s.a,{href:"https://confluxhub.io/espace-bridge/cross-space",children:"Confluxhub Space Bridge"})," to bridge CFX between eSpace and Core Space."]}),"\n",(0,t.jsx)(s.h2,{id:"can-i-use-base32-address-in-espace",children:"Can I use base32 address in eSpace?"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/core/core-space-basics/addresses",children:"Base32 address"})," is only used in core space, and eSpace is not supported. You can use the hex address in eSpace."]}),"\n",(0,t.jsx)(s.h2,{id:"what-is-the-tps-of-espace",children:"What is the TPS of eSpace?"}),"\n",(0,t.jsx)(s.p,{children:"It's about 300 TPS."}),"\n",(0,t.jsx)(s.h2,{id:"is-it-easy-to-migrate-an-ethereum-dapp-to-espace",children:"Is it easy to migrate an Ethereum DApp to eSpace?"}),"\n",(0,t.jsx)(s.p,{children:"Yes, it is very easy, normally you only need to change the RPC endpoint url to the eSpace RPC endpoint url, and the DApp can run on eSpace."}),"\n",(0,t.jsx)(s.h2,{id:"whats-the-espace-hardfork-block-number",children:"What's the eSpace hardfork block number?"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Mainnet: EpochNumber 36935000, BlockNumber 92060600"}),"\n",(0,t.jsx)(s.li,{children:"Testnet: EpochNumber 61465000, BlockNumber 77340000"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"how-long-does-it-take-to-execute-a-transaction-in-espace",children:"How long does it take to execute a transaction in eSpace?"}),"\n",(0,t.jsx)(s.p,{children:"Typically, it takes 10 seconds from the time a transaction is sent to when it is executed."})]})}function l(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>i,a:()=>c});var t=a(67294);const n={},o=t.createContext(n);function c(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);