"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3943],{36758:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=t(85893),o=t(11151);const a={sidebar_position:5,title:"\u5982\u4f55\u8d5e\u52a9\u667a\u80fd\u5408\u7ea6",description:"\u4f7f\u7528 ConfluxScan\u7684\u8bfb\u53d6/\u5199\u5165\u5de5\u5177\u8d5e\u52a9\u5408\u7ea6\u3002",displayed_sidebar:"coreSidebar"},r=void 0,i={id:"core/tutorials/how-to-sponsor-contract",title:"\u5982\u4f55\u8d5e\u52a9\u667a\u80fd\u5408\u7ea6",description:"\u4f7f\u7528 ConfluxScan\u7684\u8bfb\u53d6/\u5199\u5165\u5de5\u5177\u8d5e\u52a9\u5408\u7ea6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/tutorials/how-to-sponsor-contract.md",sourceDirName:"core/tutorials",slug:"/core/tutorials/how-to-sponsor-contract",permalink:"/zh-CN/docs/core/tutorials/how-to-sponsor-contract",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u5982\u4f55\u8d5e\u52a9\u667a\u80fd\u5408\u7ea6",description:"\u4f7f\u7528 ConfluxScan\u7684\u8bfb\u53d6/\u5199\u5165\u5de5\u5177\u8d5e\u52a9\u5408\u7ea6\u3002",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"\u4f7f\u7528 ChainIDE \u5f00\u53d1\u667a\u80fd\u5408\u7ea6",permalink:"/zh-CN/docs/core/tutorials/chainide"},next:{title:"Complete NFT Tutorial",permalink:"/zh-CN/docs/core/tutorials/nft-tutorial"}},c={},l=[{value:"Preparation",id:"preparation",level:2},{value:"Query Sponsor Info",id:"query-sponsor-info",level:2},{value:"Sponsor Storage",id:"sponsor-storage",level:2},{value:"Sponsor Gas",id:"sponsor-gas",level:2},{value:"Whitelist",id:"whitelist",level:2},{value:"Check Contract Storage Usage Info on ConfluxScan",id:"check-contract-storage-usage-info-on-confluxscan",level:2},{value:"Check Transactions Sponsored on ConfluxScan",id:"check-transactions-sponsored-on-confluxscan",level:2},{value:"Other Sponsor Methods",id:"other-sponsor-methods",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"I sponsored a contract, but the transaction still failed. Why?",id:"i-sponsored-a-contract-but-the-transaction-still-failed-why",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Conflux Core ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/core/core-space-basics/sponsor-mechanism",children:"Sponsorship"})," offers a user-friendly feature for new blockchain users. This tutorial will guide you on how to use the ",(0,s.jsx)(n.a,{href:"https://www.confluxscan.io/address/cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaegg2r16ar?tab=contract-viewer",children:"ConfluxScan Read&Write Tool"})," to sponsor a contract."]}),"\n",(0,s.jsx)(n.p,{children:"The Contract Read&Write Tool allows users to interact with smart contracts. Any verified contract on ConfluxScan can utilize this tool to read or write data."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.confluxscan.io/address/cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaegg2r16ar?tab=contract-viewer",children:"Mainnet SponsorWhitelistControl Read&Write Tool"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://testnet.confluxscan.io/address/cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaeprn7v0eh?tab=contract-viewer",children:"Testnet SponsorWhitelistControl Read&Write Tool"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(22811).Z+"",width:"1402",height:"802"})}),"\n",(0,s.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Install the ",(0,s.jsx)(n.a,{href:"https://fluentwallet.com/",children:"Fluent"})," wallet and switch to the Conflux Testnet network."]}),"\n",(0,s.jsxs)(n.li,{children:["Acquire some test tokens from the ",(0,s.jsx)(n.a,{href:"https://faucet.confluxnetwork.org/",children:"Conflux Testnet Faucet"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Have a contract address ready, for example: ",(0,s.jsx)(n.code,{children:"cfxtest:acgwyxdwpc8475n2na9uk9rfbghstg1xtumht10mue"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"query-sponsor-info",children:"Query Sponsor Info"}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Read Contract"})," tab, all the contract's view methods are listed. Open any of them, input the parameter (if any), and click the ",(0,s.jsx)(n.strong,{children:"Query"})," button to obtain the result."]}),"\n",(0,s.jsxs)(n.p,{children:["For instance, using ",(0,s.jsx)(n.code,{children:"getSponsorForGas"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(28201).Z+"",width:"600",height:"258"})}),"\n",(0,s.jsxs)(n.p,{children:["If a ",(0,s.jsx)(n.strong,{children:"Zero Address"})," is returned, it signifies that the contract is not sponsored."]}),"\n",(0,s.jsx)(n.h2,{id:"sponsor-storage",children:"Sponsor Storage"}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Write Contract"})," tab, all the contract's write methods are listed. Before using it, connect your wallet."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(675).Z+"",width:"481",height:"229"})}),"\n",(0,s.jsxs)(n.p,{children:["If a write method includes a ",(0,s.jsx)(n.strong,{children:"payable modifier"}),", the first input box can be used to set the amount of CFX to be transferred to the contract when calling the method."]}),"\n",(0,s.jsx)(n.p,{children:"For example, inputting 50 means transferring 50 CFX to the contract."}),"\n",(0,s.jsxs)(n.p,{children:["Then click the ",(0,s.jsx)(n.strong,{children:"Write"})," button. A popup will appear; click ",(0,s.jsx)(n.strong,{children:"Confirm"})," to approve the transaction."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(32258).Z+"",width:"920",height:"723"})}),"\n",(0,s.jsx)(n.p,{children:"After transaction execution, you can query the contract's sponsor info again."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(4122).Z+"",width:"480",height:"257"})}),"\n",(0,s.jsx)(n.p,{children:"Half of the CFX will be converted into storage points."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(13914).Z+"",width:"448",height:"265"})}),"\n",(0,s.jsx)(n.h2,{id:"sponsor-gas",children:"Sponsor Gas"}),"\n",(0,s.jsxs)(n.p,{children:["We will set 10 CFX for the gas sponsor balance, with an upper bound of ",(0,s.jsx)(n.strong,{children:"1000000000000000"})," Drip (",(0,s.jsx)(n.code,{children:"10**15"})," Drip)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(77286).Z+"",width:"479",height:"302"})}),"\n",(0,s.jsx)(n.p,{children:"After the transaction execution, you can query the contract's sponsor info again."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(4217).Z+"",width:"471",height:"260"})}),"\n",(0,s.jsx)(n.h2,{id:"whitelist",children:"Whitelist"}),"\n",(0,s.jsx)(n.p,{children:"Finally, add the zero address to the whitelist to use the contract without paying a gas fee."}),"\n",(0,s.jsx)(n.p,{children:'For the second parameter, which is an array, pass ["0x0000000000000000000000000000000000000000"].'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(14277).Z+"",width:"476",height:"238"})}),"\n",(0,s.jsx)(n.h2,{id:"check-contract-storage-usage-info-on-confluxscan",children:"Check Contract Storage Usage Info on ConfluxScan"}),"\n",(0,s.jsx)(n.p,{children:"You can check the contract's storage usage and sponsor balance info on the ConfluxScan contract detail page."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(87050).Z+"",width:"1229",height:"779"})}),"\n",(0,s.jsx)(n.h2,{id:"check-transactions-sponsored-on-confluxscan",children:"Check Transactions Sponsored on ConfluxScan"}),"\n",(0,s.jsxs)(n.p,{children:["After setting up the sponsor, you can interact with the contract without paying gas fee. The transaction will be marked as ",(0,s.jsx)(n.strong,{children:"Sponsored"})," on ConfluxScan in the detail page."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(12955).Z+"",width:"813",height:"472"})}),"\n",(0,s.jsx)(n.h2,{id:"other-sponsor-methods",children:"Other Sponsor Methods"}),"\n",(0,s.jsxs)(n.p,{children:["Developers can use SDKs to call the ",(0,s.jsx)(n.code,{children:"SponsorWhitelistControl"})," methods to sponsor a contract. For an example, see ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/core/core-space-basics/internal-contracts/sponsor-whitelist-control#how-to-sponsor-a-contract",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"}),"\n",(0,s.jsx)(n.h3,{id:"i-sponsored-a-contract-but-the-transaction-still-failed-why",children:"I sponsored a contract, but the transaction still failed. Why?"}),"\n",(0,s.jsx)(n.p,{children:"Several reasons might cause the transaction to fail:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The upper bound is too small."}),"\n",(0,s.jsx)(n.li,{children:"The sponsor balance is insufficient."}),"\n",(0,s.jsx)(n.li,{children:"The whitelist is not set correctly."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},14277:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/add-zero-address-whitelist-ade9dfe55f773713596de0a958fde966.png"},87050:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/contract-detail-page-55c300549098e8fc913f793a45aedc4f.jpg"},28201:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/query-gas-sponsor-081bea63c6ca3fb002b436f98444ebcc.png"},4217:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/query-sponsor-gas-balance-e6531c3dccefb470bbb5a8c50863c270.png"},4122:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/query-sponsor-storage-balance-4a752ab3385749e561a50018e3119c8e.png"},13914:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/query-storage-points-aa284b176153cc169e57fe1aeb651c6f.png"},32258:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/set-collateral-sponsor-popup-28cde293a4c43751425b9b06d48554bc.png"},675:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/set-collateral-sponsor-a2fd07e4764b2e32999f7ea5e2e311c2.png"},77286:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/set-gas-sponsor-e065291f9689765a6841bfde35b2c79b.png"},22811:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/sponsor-read-methods-0f6c4e56b2af7970a51a637fe19b8e52.png"},12955:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tx-is-sponsored-f213138a494cec0e8bf69f4de3a75fe2.jpg"},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var s=t(67294);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);