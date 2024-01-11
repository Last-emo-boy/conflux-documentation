"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6751],{32124:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=o(85893),a=o(11151);const r={sidebar_position:2,title:"Storage Collateral",keywords:["storage"],displayed_sidebar:"coreSidebar"},n=void 0,i={id:"core/core-space-basics/storage",title:"Storage Collateral",description:"Conflux Core introduced the Collateral for Storage (CFS) mechanism as a pricing method for using storage. Compared to Ethereum's one-time storage fee, the CFS mechanism is more fair and reasonable. In principle, this mechanism requires locking a certain amount of funds as collateral to occupy storage space. This collateral remains locked until the corresponding storage space is either released or taken over by others. The interest generated by the locked collateral is directly allocated to miners for maintaining the storage space. Thus, the storage cost in Conflux also depends on the duration for which the storage space is occupied. Conflux has detailed this mechanism in chapter 7 of its Conflux Protocol Specification.",source:"@site/docs/core/core-space-basics/storage.md",sourceDirName:"core/core-space-basics",slug:"/core/core-space-basics/storage",permalink:"/docs/core/core-space-basics/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/core-space-basics/storage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Storage Collateral",keywords:["storage"],displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"Base32 Addresses",permalink:"/docs/core/core-space-basics/addresses"},next:{title:"Sponsorship Mechanism",permalink:"/docs/core/core-space-basics/sponsor-mechanism"}},l={},c=[{value:"Storage Cost Calculation",id:"storage-cost-calculation",level:2},{value:"Storage Ownership",id:"storage-ownership",level:2},{value:"Collateral Refund",id:"collateral-refund",level:2},{value:"Specify Storage Collateral in Transactions",id:"specify-storage-collateral-in-transactions",level:2},{value:"Sponsorship Mechanism and CIP-107",id:"sponsorship-mechanism-and-cip-107",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Does eSpace Have Storage Collateral?",id:"does-espace-have-storage-collateral",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Conflux Core introduced the Collateral for Storage (CFS) mechanism as a ",(0,s.jsx)(t.strong,{children:"pricing method for using storage"}),". Compared to Ethereum's one-time storage fee, the CFS mechanism is more fair and reasonable. In principle, this mechanism requires locking a certain amount of funds as collateral to occupy storage space. This collateral remains locked until the corresponding storage space is either released or taken over by others. The interest generated by the locked collateral is directly allocated to miners for maintaining the storage space. Thus, the storage cost in Conflux also depends on the duration for which the storage space is occupied. Conflux has detailed this mechanism in chapter 7 of its ",(0,s.jsx)(t.a,{href:"https://confluxnetwork.org/files/Conflux_Protocol_Specification.pdf",children:"Conflux Protocol Specification"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"storage-cost-calculation",children:"Storage Cost Calculation"}),"\n",(0,s.jsxs)(t.p,{children:["In the Conflux network, ",(0,s.jsx)(t.strong,{children:"each storage entry occupies 64B (B is Bytes, byte)"}),", which is the size of the key/value pair in the world state. It is important to note that the key in the blockchain is generally 256 bits long, and the value is also 256 bits long (each is 32B long, totaling 64B). The deposit required for storage is proportional to the smallest multiple of 64B that can encompass all stored items. In the world state, throughout the entire lifecycle of a storage item, the item's owner must lock a fixed amount of CFX as a storage deposit. Specifically, for each storage entry of 64B, the owner will have 1/16 CFX locked. For ",(0,s.jsxs)(t.strong,{children:["occupying ",(0,s.jsx)(t.code,{children:"1KB"})," of space, you will pay ",(0,s.jsx)(t.code,{children:"1CFX"})]})," as a deposit. The corresponding formula is as follows:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Locale Dropdown",src:o(31036).Z+"",width:"510",height:"136"})}),"\n",(0,s.jsx)(t.h2,{id:"storage-ownership",children:"Storage Ownership"}),"\n",(0,s.jsxs)(t.p,{children:["For each storage entry, the ",(0,s.jsx)(t.strong,{children:"last account"})," that writes to the entry is considered the owner of the storage entry. The storage owner is required to pay the storage collateral for the storage entry."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["If a storage entry is written in the execution of a contract C with sponsorship for collateral, then C is regarded as the account writing to that entry and hence becomes the owner accordingly (see Section 8.1 in ",(0,s.jsx)(t.a,{href:"https://www.confluxnetwork.org/files/Conflux_Protocol_Specification.pdf",children:"Conflux Protocol Specification"})," for more details)."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"When account \u03b1 becomes the owner of a storage entry (whether through creation or modification), \u03b1 must immediately lock 1/16 CFX for the entry. If \u03b1 has sufficient balance, the required deposit will be automatically locked. However, if \u03b1 does not have enough balance, the operation will fail, and \u03b1 cannot create or modify the entry."}),"\n",(0,s.jsx)(t.p,{children:"If a contract is sponsored, the sponsor will pay the storage collateral for the storage entry, and the sponsor will then become the owner of the storage entry. If the contract's sponsor changes, the new sponsor will pay the storage collateral for the storage entry, becoming the new owner."}),"\n",(0,s.jsx)(t.h2,{id:"collateral-refund",children:"Collateral Refund"}),"\n",(0,s.jsxs)(t.p,{children:["When a storage item is ",(0,s.jsx)(t.strong,{children:"deleted from the world state"}),", the corresponding 1/16 CFX deposit will be unlocked and ",(0,s.jsx)(t.strong,{children:"returned to the item owner's balance"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"If the ownership of a storage item changes, the 1/16 CFX deposit of the previous owner is unlocked, and the new owner must simultaneously lock 1/16 CFX as their deposit."}),"\n",(0,s.jsxs)(t.p,{children:["It should be noted that the deposit ",(0,s.jsx)(t.strong,{children:'refund is "quietly" added to the balance'}),"; there is no transfer transaction available for inquiry."]}),"\n",(0,s.jsx)(t.h2,{id:"specify-storage-collateral-in-transactions",children:"Specify Storage Collateral in Transactions"}),"\n",(0,s.jsxs)(t.p,{children:["When users ",(0,s.jsx)(t.strong,{children:"send a Conflux Core transaction"}),", they must fill in a ",(0,s.jsx)(t.code,{children:"storageLimit"})," field (",(0,s.jsx)(t.strong,{children:"in bytes"}),"). The storage limit functions similarly to the gas limit, but for storage. It sets an upper limit, stipulating that the increase in the deposit payer's deposit before and after executing the transaction should not exceed the ",(0,s.jsx)(t.code,{children:"storage upper limit"})," multiplied by 1/1024 CFX. If this value is set too low, the deposit may exceed the upper limit after execution, leading to transaction failure. Therefore, this field generally needs to be set higher than the actual usage, and ",(0,s.jsx)(t.strong,{children:"any excess will not generate a storage mortgage"}),". However, setting it excessively high is not recommended, as it might result in an insufficient balance to cover the deposit, causing the transaction to fail. The Fullnode provides the RPC method ",(0,s.jsx)(t.code,{children:"cfx_estimateGasAndCollateral"})," to estimate the storage size a transaction will use."]}),"\n",(0,s.jsxs)(t.p,{children:["After executing the transaction, the ",(0,s.jsx)(t.code,{children:"Receipt"})," includes several fields related to storage changes:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"storageCollateralized"}),": This shows the amount of data that is stored and collateralized."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"storageCoveredBySponsor"}),": Indicates whether the storage mortgage for this transaction is sponsored."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"storageReleased"}),": The amount of storage released by this transaction."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"cfx_getCollateralForStorage"})," method can be used to query the storage size currently mortgaged by an address; the unit is bytes. The mortgaged amount of CFX can be calculated by dividing this value by 1024. Additionally, this information can be obtained through the ",(0,s.jsx)(t.code,{children:"cfx_getAccount"})," method. The returned information includes the ",(0,s.jsx)(t.code,{children:"collateralForStorage"})," field."]}),"\n",(0,s.jsx)(t.h2,{id:"sponsorship-mechanism-and-cip-107",children:"Sponsorship Mechanism and CIP-107"}),"\n",(0,s.jsxs)(t.p,{children:["Conflux implements a ",(0,s.jsx)(t.a,{href:"/docs/core/core-space-basics/internal-contracts/sponsor-whitelist-control",children:"sponsorship mechanism"})," to subsidize the usage of smart contracts. This mechanism allows the sponsor of a contract to pay the collateral for storage occupied by transactions, instead of the transaction sender."]}),"\n",(0,s.jsxs)(t.p,{children:["Following the ",(0,s.jsxs)(t.a,{href:"/docs/general/hardforks/v2.3",children:[(0,s.jsx)(t.code,{children:"v2.3.0"})," hardfork"]}),", ",(0,s.jsx)(t.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-107.md",children:"CIP-107"})," was activated. This introduced storage points as a new type of collateral for storage, where 1 KB of storage space costs 1,024 storage points."]}),"\n",(0,s.jsx)(t.p,{children:"Collateral storage points are also refunded when the storage space they cover is freed or when its ownership changes. However, it is important to note that these storage points are non-transferrable and do not generate storage interest."}),"\n",(0,s.jsxs)(t.p,{children:["For more detailed information on the sponsorship mechanism and CIP-107, please refer to ",(0,s.jsx)(t.a,{href:"/docs/core/core-space-basics/internal-contracts/sponsor-whitelist-control",children:"Sponsorship Mechanism"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-107.md",children:"CIP-107 DAO-Adjustable Burn of Storage Collateral"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"faqs",children:"FAQs"}),"\n",(0,s.jsx)(t.h3,{id:"does-espace-have-storage-collateral",children:"Does eSpace Have Storage Collateral?"}),"\n",(0,s.jsx)(t.p,{children:"No. The storage collateral mechanism is applicable exclusively to the Conflux Core Space."})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},31036:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/storage-formula-635173b54f6e13ba21a689cc691d4ecd-635173b54f6e13ba21a689cc691d4ecd.png"},11151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>n});var s=o(67294);const a={},r=s.createContext(a);function n(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);