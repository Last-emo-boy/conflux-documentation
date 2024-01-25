"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7317],{73598:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=n(85893),s=n(11151),c=n(17661);const r={sidebar_position:7,title:"Internal Contracts",displayed_sidebar:"coreSidebar"},i=void 0,o={id:"core/core-space-basics/internal-contracts/internal-contracts",title:"Internal Contracts",description:"Conflux introduces several built-in internal contracts for better system maintenance and on-chain governance. Now Conflux has seven internal contracts. These contracts provide solidity interfaces defined here. These function can only be called via CALL or STATICCALL operation. Using operation CALLCODE or DELEGATECALL to interact with internal contracts will trigger an error.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/core/core-space-basics/internal-contracts/internal-contracts.mdx",sourceDirName:"core/core-space-basics/internal-contracts",slug:"/core/core-space-basics/internal-contracts/",permalink:"/es/docs/core/core-space-basics/internal-contracts/",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Internal Contracts",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"VM Differences",permalink:"/es/docs/core/core-space-basics/vm-difference"},next:{title:"AdminControl",permalink:"/es/docs/core/core-space-basics/internal-contracts/admin"}},l={},d=[{value:"AdminControl:",id:"admincontrol",level:2},{value:"SponsorWhitelistControl:",id:"sponsorwhitelistcontrol",level:2},{value:"Staking",id:"staking",level:2},{value:"ConfluxContext:",id:"confluxcontext",level:2},{value:"PoSRegister:",id:"posregister",level:2},{value:"CrossSpaceCall",id:"crossspacecall",level:2},{value:"ParamsControl",id:"paramscontrol",level:2}];function h(a){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["Conflux introduces several built-in internal contracts for better system maintenance and on-chain governance. Now Conflux has seven internal contracts. These contracts provide ",(0,t.jsx)(e.a,{href:"https://github.com/Conflux-Chain/conflux-rust/tree/master/internal_contract/contracts",children:(0,t.jsx)(e.code,{children:"solidity interfaces defined here"})}),". These function can only be called via ",(0,t.jsx)(e.code,{children:"CALL"})," or ",(0,t.jsx)(e.code,{children:"STATICCALL"})," operation. Using operation ",(0,t.jsx)(e.code,{children:"CALLCODE"})," or ",(0,t.jsx)(e.code,{children:"DELEGATECALL"})," to interact with internal contracts will trigger an error."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"AdminControl"})," contract, ",(0,t.jsx)(e.code,{children:"SponsorWhitelistControl"})," contract and ",(0,t.jsx)(e.code,{children:"Staking"})," contract are introduced from the beginning."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"ConfluxContext"}),", ",(0,t.jsx)(e.code,{children:"PoSRegister"}),", ",(0,t.jsx)(e.code,{children:"ConfluxContext"})," are introduced at v2 hard-fork,"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"ParamsControl"})," is introduced at v2.1 hard-fork."]}),"\n",(0,t.jsx)(e.p,{children:"The addresses of these 7 internal contracts are list as follows:"}),"\n",(0,t.jsx)(e.h2,{id:"admincontrol",children:"AdminControl:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["hex40: ",(0,t.jsx)(e.code,{children:"0x0888000000000000000000000000000000000000"})]}),"\n",(0,t.jsxs)(e.li,{children:["Mainnet base32: ",(0,t.jsx)(e.code,{children:"cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaawby2s44d"})]}),"\n",(0,t.jsxs)(e.li,{children:["Testnet base32: ",(0,t.jsx)(e.code,{children:"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2mhjju8k"})]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"sponsorwhitelistcontrol",children:"SponsorWhitelistControl:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["hex40: ",(0,t.jsx)(e.code,{children:"0x0888000000000000000000000000000000000001"})]}),"\n",(0,t.jsxs)(e.li,{children:["Mainnet base32: ",(0,t.jsx)(e.code,{children:"cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaeprn7v0eh"})]}),"\n",(0,t.jsxs)(e.li,{children:["Testnet base32: ",(0,t.jsx)(e.code,{children:"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaegg2r16ar"})]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"staking",children:"Staking"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["hex40: ",(0,t.jsx)(e.code,{children:"0x0888000000000000000000000000000000000002"})]}),"\n",(0,t.jsxs)(e.li,{children:["Mainnet base32: ",(0,t.jsx)(e.code,{children:"cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaajh3dw3ctn"})]}),"\n",(0,t.jsxs)(e.li,{children:["Testnet base32: ",(0,t.jsx)(e.code,{children:"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaajrwuc9jnb"})]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"confluxcontext",children:"ConfluxContext:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["hex40: ",(0,t.jsx)(e.code,{children:"0x0888000000000000000000000000000000000004"})]}),"\n",(0,t.jsxs)(e.li,{children:["Mainnet base32: ",(0,t.jsx)(e.code,{children:"cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaauv2xpkd3x"})]}),"\n",(0,t.jsxs)(e.li,{children:["Testnet base32: ",(0,t.jsx)(e.code,{children:"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaau5xa6tk73"})]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"posregister",children:"PoSRegister:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["hex40: ",(0,t.jsx)(e.code,{children:"0x0888000000000000000000000000000000000005"})]}),"\n",(0,t.jsxs)(e.li,{children:["Mainnet base32: ",(0,t.jsx)(e.code,{children:"cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaytypk0th1"})]}),"\n",(0,t.jsxs)(e.li,{children:["Testnet base32: ",(0,t.jsx)(e.code,{children:"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaayf993ufd7"})]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"crossspacecall",children:"CrossSpaceCall"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["hex40: ",(0,t.jsx)(e.code,{children:"0x0888000000000000000000000000000000000006"})]}),"\n",(0,t.jsxs)(e.li,{children:["Mainnet base32: ",(0,t.jsx)(e.code,{children:"cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa2eaeg85p5"})]}),"\n",(0,t.jsxs)(e.li,{children:["Testnet base32: ",(0,t.jsx)(e.code,{children:"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa2sn102vjv"})]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"paramscontrol",children:"ParamsControl"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["hex40: ",(0,t.jsx)(e.code,{children:"0x0888000000000000000000000000000000000007"})]}),"\n",(0,t.jsxs)(e.li,{children:["Mainnet base32: ",(0,t.jsx)(e.code,{children:"cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa64p5db1w9"})]}),"\n",(0,t.jsxs)(e.li,{children:["Testnet base32: ",(0,t.jsx)(e.code,{children:"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa6uhjxh70z"})]}),"\n"]}),"\n","\n","\n",(0,t.jsx)(c.Z,{})]})}function x(a={}){const{wrapper:e}={...(0,s.a)(),...a.components};return e?(0,t.jsx)(e,{...a,children:(0,t.jsx)(h,{...a})}):h(a)}},17661:(a,e,n)=>{n.d(e,{Z:()=>m});n(67294);var t=n(36905),s=n(78259),c=n(34791),r=n(2735),i=n(97325),o=n(13899);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function h(a){let{href:e,children:n}=a;return(0,d.jsx)(c.Z,{href:e,className:(0,t.Z)("card padding--lg",l.cardContainer),children:n})}function x(a){let{href:e,icon:n,title:s,description:c}=a;return(0,d.jsxs)(h,{href:e,children:[(0,d.jsxs)(o.Z,{as:"h2",className:(0,t.Z)("text--truncate",l.cardTitle),title:s,children:[n," ",s]}),c&&(0,d.jsx)("p",{className:(0,t.Z)("text--truncate",l.cardDescription),title:c,children:c})]})}function u(a){let{item:e}=a;const n=(0,s.LM)(e);return n?(0,d.jsx)(x,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,i.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function j(a){let{item:e}=a;const n=(0,r.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,s.xz)(e.docId??void 0);return(0,d.jsx)(x,{href:e.href,icon:n,title:e.label,description:e.description??t?.description})}function f(a){let{item:e}=a;switch(e.type){case"link":return(0,d.jsx)(j,{item:e});case"category":return(0,d.jsx)(u,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function p(a){let{className:e}=a;const n=(0,s.jA)();return(0,d.jsx)(m,{items:n.items,className:e})}function m(a){const{items:e,className:n}=a;if(!e)return(0,d.jsx)(p,{...a});const c=(0,s.MN)(e);return(0,d.jsx)("section",{className:(0,t.Z)("row",n),children:c.map(((a,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:a})},e)))})}},11151:(a,e,n)=>{n.d(e,{Z:()=>i,a:()=>r});var t=n(67294);const s={},c=t.createContext(s);function r(a){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function i(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(s):a.components||s:r(a.components),t.createElement(c.Provider,{value:e},a.children)}}}]);