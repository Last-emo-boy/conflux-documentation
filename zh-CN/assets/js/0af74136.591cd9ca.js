"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8029],{39770:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=a(85893),t=a(11151);const s={sidebar_position:7,title:"Run a eSpace Node",displayed_sidebar:"eSpaceSidebar"},c=void 0,i={id:"espace/build/run-a-node",title:"Run a eSpace Node",description:"eSpace and Core Space share a common node program, so please refer to the Core Space Node Operation Guide for running a node. Below are some eSpace specific configurations.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/build/run-a-node.md",sourceDirName:"espace/build",slug:"/espace/build/run-a-node",permalink:"/zh-CN/docs/espace/build/run-a-node",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Run a eSpace Node",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"eSpace Mapped Addresses(Cross Space)",permalink:"/zh-CN/docs/espace/build/accounts"},next:{title:"Deployed Contracts",permalink:"/zh-CN/docs/espace/build/deployed-contracts"}},r={},d=[{value:"eSpace RPC configuration",id:"espace-rpc-configuration",level:2},{value:"Full State",id:"full-state",level:2},{value:"eSpace Chain ID",id:"espace-chain-id",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"the method eth_getTransactionCount does not exist/is not available",id:"the-method-eth_gettransactioncount-does-not-existis-not-available",level:3},{value:"Is eSpace use same node with Core Space ?",id:"is-espace-use-same-node-with-core-space-",level:3},{value:"Does eSpace node have blockchain data snapshot?",id:"does-espace-node-have-blockchain-data-snapshot",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["eSpace and Core Space share a common node program, so please refer to the ",(0,o.jsx)(n.a,{href:"/docs/category/run-a-node",children:"Core Space Node Operation Guide"})," for running a node. Below are some eSpace specific configurations."]}),"\n",(0,o.jsx)(n.h2,{id:"espace-rpc-configuration",children:"eSpace RPC configuration"}),"\n",(0,o.jsxs)(n.p,{children:["To setup a ",(0,o.jsx)(n.strong,{children:"eSpace RPC node"}),", you need to open the following configuration items:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'jsonrpc_http_eth_port=8545\njsonrpc_ws_eth_port=8546\npublic_evm_rpc_apis = "evm"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["eSpace's RPC endpoint port is different from Core Space, you ",(0,o.jsx)(n.strong,{children:"can not"})," access the eth RPC interface at the ",(0,o.jsx)(n.strong,{children:"Core Space RPC port"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"full-state",children:"Full State"}),"\n",(0,o.jsxs)(n.p,{children:["To enable full state for eSpace, you need to set the ",(0,o.jsx)(n.code,{children:"single_mpt_space"})," parameter to ",(0,o.jsx)(n.code,{children:"evm"})," and run a archive node."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'single_mpt_space = "evm"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["By enable full state, you can query the state of the contract or account ",(0,o.jsx)(n.strong,{children:"at any block height"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"espace-chain-id",children:"eSpace Chain ID"}),"\n",(0,o.jsx)(n.p,{children:"The eSpace mainnet chain ID is 1030, testnet is 71. Normally you don't need to change this."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:"evm_chain_id = 1030\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"}),"\n",(0,o.jsx)(n.h3,{id:"the-method-eth_gettransactioncount-does-not-existis-not-available",children:"the method eth_getTransactionCount does not exist/is not available"}),"\n",(0,o.jsx)(n.p,{children:"Please check if the RPC port is correct. The default RPC port of eSpace is 8545, is different with Core Space RPC port."}),"\n",(0,o.jsx)(n.h3,{id:"is-espace-use-same-node-with-core-space-",children:"Is eSpace use same node with Core Space ?"}),"\n",(0,o.jsx)(n.p,{children:"Yes"}),"\n",(0,o.jsx)(n.h3,{id:"does-espace-node-have-blockchain-data-snapshot",children:"Does eSpace node have blockchain data snapshot?"}),"\n",(0,o.jsx)(n.p,{children:"Yes, same with Core Space."})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>c});var o=a(67294);const t={},s=o.createContext(t);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);