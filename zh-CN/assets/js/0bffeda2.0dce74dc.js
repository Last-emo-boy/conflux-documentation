"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7346],{47412:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=s(85893),r=s(11151);const i={},o="v2.3",l={id:"general/hardforks/v2.3",title:"v2.3",description:"- - -",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/hardforks/v2.3.md",sourceDirName:"general/hardforks",slug:"/general/hardforks/v2.3",permalink:"/zh-CN/docs/general/hardforks/v2.3",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"generalSidebar",previous:{title:"v2.1",permalink:"/zh-CN/docs/general/hardforks/v2.1"},next:{title:"Mining & Staking",permalink:"/zh-CN/docs/category/mining--staking"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Incompatible Changes",id:"incompatible-changes",level:3},{value:"CIP-107",id:"cip-107",level:4},{value:"Corresponding Changes",id:"corresponding-changes",level:5},{value:"CIP-112",id:"cip-112",level:4},{value:"CIP-113",id:"cip-113",level:4},{value:"Corresponding Changes",id:"corresponding-changes-1",level:5},{value:"CIP-118",id:"cip-118",level:4},{value:"CIP-119",id:"cip-119",level:4},{value:"Releases",id:"releases",level:2},{value:"Testnet",id:"testnet",level:3},{value:"Mainnet",id:"mainnet",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"displayed_sidebar: generalSidebar"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"v23",children:"v2.3"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key Information"}),(0,t.jsx)(n.th,{children:"Details"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Version"}),(0,t.jsx)(n.td,{children:"Conflux v2.3.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hardfork Introduced"}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Incompatible Changes"}),(0,t.jsx)(n.td,{children:"Yes (CIP-107, CIP-112, CIP-113, CIP-118, CIP-119)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Conflux v2.3.0 introduces a new hardfork, which update includes incompatible changes and several RPC improvements."}),"\n",(0,t.jsx)(n.h3,{id:"incompatible-changes",children:"Incompatible Changes"}),"\n",(0,t.jsx)(n.h4,{id:"cip-107",children:"CIP-107"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-107.md",children:"CIP-107"}),', the major change of the hard fork, introduces "storage point", a burning mechanism of storage collateral. When a sponsor adds storage collateral for a contract, a proportion of the CFX tokens will be burned and a corresponding amount of "storage point" will be minted. The "storage point" cannot be transferred and will not generate storage interest, but it can pay for storage collateral as CFX tokens. This is to introduce some burning scenarios and mechanisms to mitigate the continuous inflation of CFX tokens, thereby improving the tokenomics of Conflux.']}),"\n",(0,t.jsx)(n.h5,{id:"corresponding-changes",children:"Corresponding Changes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["RPC changes:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add a new RPC ",(0,t.jsx)(n.code,{children:"cfx_getCollateralInfo"})," to return chain collateral info."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cfx_getSponsorInfo"})," returns 2 extra fields: ",(0,t.jsx)(n.code,{children:"usedStoragePoints"})," and ",(0,t.jsx)(n.code,{children:"availableStoragePoints"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Internal contract ",(0,t.jsx)(n.code,{children:"SponsorWhitelistControl"})," changes","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["new interfaces: ",(0,t.jsx)(n.code,{children:"getAvailbaleStoragePoints"}),"(introduced by CIP-118)"]}),"\n",(0,t.jsxs)(n.li,{children:["Collateral sponsor replacement threshold is changed","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["previous: ",(0,t.jsx)(n.code,{children:"tx.value > sponsor_balance_for_collateral + collateral_for_storage"})]}),"\n",(0,t.jsxs)(n.li,{children:["current: ",(0,t.jsx)(n.code,{children:"tx.value > sponsor_balance_for_collateral + (collateral_for_storage - used_storage_points / 1024)"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Burn for collateral sponsored before CIP-107:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"p"}),"(defined by CIP-107, started at 0.5) proportion of ",(0,t.jsx)(n.code,{children:"sponsor_balance_for_collateral + collateral_for_storage"})," will be burnt and converted to storage points. The conversion will be carried out lazily."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["DAO vote changes","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["new vote option to change ",(0,t.jsx)(n.code,{children:"STORAGE_POINT_PORP"})," that defines burn ratio ",(0,t.jsx)(n.em,{children:"p"})," (",(0,t.jsx)(n.code,{children:"STORAGE_POINT_PORP / (STORAGE_POINT_PORP + 1)"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Refer the original CIP-107 document for more details."}),"\n",(0,t.jsx)(n.h4,{id:"cip-112",children:"CIP-112"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-112.md",children:"CIP-112"})," fixes the incorrect encoding and decoding implementation of the custom field of block headers. Currently, in the block header RLP encoding, each element in the custom list is appended to the RLP list as raw bytes, where its RLP-encoded data should be appended instead. This change is protocol breaking as it changes the block header encoding and decoding in P2P transmission."]}),"\n",(0,t.jsx)(n.h4,{id:"cip-113",children:"CIP-113"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-113.md",children:"CIP-113"})," makes the PoS finalization faster by shortening the PoS consensus round time and the pivot decision signing wait time. The PoS round time is reduced from 60 seconds to 30 seconds. The defer time for validators to wait to sign a PoS-confirmed pivot block is reduced from 50 epochs to 20 epochs."]}),"\n",(0,t.jsx)(n.h5,{id:"corresponding-changes-1",children:"Corresponding Changes"}),"\n",(0,t.jsx)(n.p,{children:"It is estimated that this CIP will shorten the finalization interval from the previous 6-8 minutes to 4-5 minutes, a reduction of 120 to 180 seconds. This optimization will benefit products that utilize the PoS finalization."}),"\n",(0,t.jsx)(n.h4,{id:"cip-118",children:"CIP-118"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-118.md",children:"CIP-118"})," introduced ",(0,t.jsx)(n.code,{children:"getAvailableStoragePoints"})," interface for ",(0,t.jsx)(n.code,{children:"SponsorWhitelistControl"}),". Refer ",(0,t.jsx)(n.a,{href:"#cip-107",children:"CIP-107"})," for more information."]}),"\n",(0,t.jsx)(n.h4,{id:"cip-119",children:"CIP-119"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-119.md",children:"CIP-119"})," introduce the PUSH0 (0x5f) instruction as ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-3855",children:"EIP-3855"}),". Supporting this opcode can achieve maximum compatibility with Ethereum."]}),"\n",(0,t.jsx)(n.h2,{id:"releases",children:"Releases"}),"\n",(0,t.jsx)(n.h3,{id:"testnet",children:"Testnet"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key Information"}),(0,t.jsx)(n.th,{children:"Details"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Release"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/Conflux-Chain/conflux-rust/releases/tag/v2.3.0-testnet",children:"Conflux v2.3.0-testnet Pre-release"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Anouncement"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://forum.conflux.fun/t/conflux-v2-3-0-testnet-testnet-hardfork-upgrade-announcement/18949",children:"Conflux v2.3.0-testnet Testnet Hardfork Upgrade Announcement"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Deadlines"}),(0,t.jsx)(n.td,{children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(n.strong,{children:"Node Upgrade:"})," Before epoch number reaches 129100000 (estimated on Jul 04)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.strong,{children:"CIPs Activation:"})," When block number reaches 167000000 (estimated on Jul 04)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.strong,{children:"CIP-113 Activation:"})," When PoS block number reaches 741900 (estimated on Jul 04)"]})]})})]})]})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key Information"}),(0,t.jsx)(n.th,{children:"Details"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Release"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/Conflux-Chain/conflux-rust/releases/tag/v2.3.0-3-testnet",children:"Conflux v2.3.0-3-testnet Pre-release"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Anouncement"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Deadlines"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("ul",{children:(0,t.jsxs)("li",{children:[(0,t.jsx)(n.strong,{children:"Node Upgrade:"})," before the epoch number reaches 132220000 or the block number reaches 171570000 (estimated on Jul 31)"]})})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"mainnet",children:"Mainnet"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key Information"}),(0,t.jsx)(n.th,{children:"Details"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Release"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/Conflux-Chain/conflux-rust/releases/tag/v2.3.0",children:"Conflux v2.3.0"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Anouncement"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://forum.conflux.fun/t/conflux-v2-3-0-hardfork-upgrade-announcement/19111",children:"Conflux v2.3.0 Hardfork Upgrade Announcement"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Deadlines"}),(0,t.jsx)(n.td,{children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(n.strong,{children:"Node Upgrade:"})," before the epoch number reaches 79050000 (estimated on Sep 07 2023)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.strong,{children:"Most CIPs Activation:"}),"  enabled when the block number reaches 188900000 (estimated on Sep 09 2023)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.strong,{children:"CIP-113 Activation:"})," when the PoS block number reaches 766200 (estimated on Sep 09)"]})]})})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var t=s(67294);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);