"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[365],{96838:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var t=a(85893),n=a(11151);const r={sidebar_position:5,title:"eSpace Mapped Addresses(Cross Space)",description:"Mapped addresses in cross-space operations",displayed_sidebar:"eSpaceSidebar"},o=void 0,c={id:"espace/build/accounts",title:"eSpace Mapped Addresses(Cross Space)",description:"Mapped addresses in cross-space operations",source:"@site/docs/espace/build/accounts.md",sourceDirName:"espace/build",slug:"/espace/build/accounts",permalink:"/docs/espace/build/accounts",draft:!1,unlisted:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/espace/build/accounts.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"eSpace Mapped Addresses(Cross Space)",description:"Mapped addresses in cross-space operations",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"CrossSpaceCall Contract",permalink:"/docs/espace/build/cross-space-bridge"},next:{title:"Run a eSpace Node",permalink:"/docs/espace/build/run-a-node"}},d={},i=[{value:"Overview",id:"overview",level:2},{value:"Mapped Addresses in Cross-Space Operations",id:"mapped-addresses-in-cross-space-operations",level:2},{value:"computation",id:"computation",level:3},{value:"Related Topics",id:"related-topics",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(s.p,{children:["Conflux eSpace is an independent space that is logically isolated from the Core space on Conflux Network. Accounts in the eSpace have their own balance and status. To interact with the eSpace, you need to use hex40 addresses, which are different from ",(0,t.jsx)(s.a,{href:"/docs/core/core-space-basics/addresses",children:"base32 addresses"})," used for the Core space. You can transfer funds between your Core and eSpace wallets using a ",(0,t.jsx)(s.a,{href:"/docs/general/tutorials/transferring-funds/transfer-funds-across-spaces",children:"bridge service"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Conflux eSpace is a new feature introduced by Conflux Network in its V2 hard fork. It is an independent space that runs on the same underlying infrastructure as the Core space, but with different rules and specifications. In the eSpace, accounts follow the Ethereum account model and use hex40 addresses instead of ",(0,t.jsx)(s.a,{href:"/docs/core/core-space-basics/addresses",children:"base32 addresses"}),". This means it is ok to use the same private key in core space and espace, but the account in core space and espace will have different addresses and will have their own balance and status."]}),"\n",(0,t.jsxs)(s.p,{children:["Hex40 addresses are compatible with Ethereum addresses, which means that users can easily import their Ethereum wallets to Conflux eSpace and vice versa. Learn more about basic model of eSpace accounts and addresses at ",(0,t.jsx)(s.a,{href:"https://ethereum.org/en/developers/docs/accounts/",children:"Ethereum Accounts"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"mapped-addresses-in-cross-space-operations",children:"Mapped Addresses in Cross-Space Operations"}),"\n",(0,t.jsxs)(s.p,{children:["Although the two spaces are independent, atomic-crossing of CFX and data can be achieved through the ",(0,t.jsx)(s.code,{children:"CrossSpaceCall"})," internal contract. The following three methods of this contract allow CFX transfers between the two spaces. Note that ",(0,t.jsx)(s.code,{children:"CrossSpaceCall"})," (like other internal contracts) can only be accessed in the Conflux Core space."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"function transferEVM(bytes20 to) external payable returns (bytes memory output);\nfunction mappedBalance(address addr) external view returns (uint256);\nfunction withdrawFromMapped(uint256 value) external;\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Core to eSpace"}),": To transfer CFX from Conflux Core to Conflux eSpace, the ",(0,t.jsx)(s.code,{children:"transferEVM(bytes20 to)"})," method of this contract needs to be called. The destination address of this transfer is specified by the method parameter ",(0,t.jsx)(s.code,{children:"to"}),". The cross-space transfer will be executed in a single atomic step."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"eSpace to Core"}),": Each account in Core Space has a ",(0,t.jsx)(s.strong,{children:"mapped account"})," (hex40) in eSpace. To transfer CFX from Conflux eSpace to Conflux Core, two steps are required. First, transfer CFX to the mapped account (eSpace) that belongs to the destination account (Core Space). This action requires an eSpace transaction. Second, call the ",(0,t.jsx)(s.code,{children:"withdrawFromMapped(uint256 value)"})," method of the ",(0,t.jsx)(s.code,{children:"CrossSpaceCall"})," internal contract. This call with transfer the CFX from the mapped account back to the corresponding destination address."]}),"\n",(0,t.jsx)(s.h3,{id:"computation",children:"computation"}),"\n",(0,t.jsx)(s.p,{children:"The mapped address is calculated from the base32 address in Conflux Core through the following steps:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Convert the base32 address to hex format, and then convert to bytes type."}),"\n",(0,t.jsx)(s.li,{children:"Keccak the bytes from the previous step to get the hash."}),"\n",(0,t.jsx)(s.li,{children:"Take the last 160 bits of the hash and convert it to hex40 format, which is the mapped eSpace address."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"js-conflux-sdk v2.0"})," provides a method to get the mapped address of the base32 address:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"const { address } = require('js-conflux-sdk');\nconst base32Address = 'cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91';\nconst mappedAddress = address.cfxMappedEVMSpaceAddress(base32Address);\n// 0x12Bf6283CcF8Ad6ffA63f7Da63EDc217228d839A\n"})}),"\n",(0,t.jsxs)(s.admonition,{type:"note",children:[(0,t.jsx)(s.p,{children:"Notes about the mapped address:"}),(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"The mapped address is an address in eSpace, so it has a hex40 format."}),"\n",(0,t.jsx)(s.li,{children:"The purpose of the mapped address is to serve as a transit address when crossing CFX back to Core space."}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Remember NOT to convert the base32 address directly to hex40 format as the mapped address. This action will result in the loss of your assets"})}),"\n"]})]}),"\n",(0,t.jsx)(s.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Cross space dApp tutorial: ",(0,t.jsx)(s.a,{href:"/docs/general/tutorials/transferring-funds/transfer-funds-across-spaces",children:"Transferring Funds Across Spaces"})]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>c,a:()=>o});var t=a(67294);const n={},r=t.createContext(n);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);