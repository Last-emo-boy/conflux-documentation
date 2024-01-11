"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[4219],{87648:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(85893),s=t(11151);const o={title:"v2.1",keywords:["CIPs","HardFork"],displayed_sidebar:"generalSidebar"},a=void 0,i={id:"general/hardforks/v2.1",title:"v2.1",description:"Conflux-Rust v2.1.0 is a small hardfork upgrade. In this upgrade 5 new CIPs will be activate, and also some improvement about storage and RPC.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/hardforks/v2.1.md",sourceDirName:"general/hardforks",slug:"/general/hardforks/v2.1",permalink:"/es/docs/general/hardforks/v2.1",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",frontMatter:{title:"v2.1",keywords:["CIPs","HardFork"],displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"v2.0",permalink:"/es/docs/general/hardforks/v2.0"},next:{title:"v2.3",permalink:"/es/docs/general/hardforks/v2.3"}},d={},l=[{value:"New CIPs",id:"new-cips",level:2},{value:"New InternalContract",id:"new-internalcontract",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Storage",id:"storage",level:3},{value:"RPC",id:"rpc",level:3},{value:"Update schedule",id:"update-schedule",level:2},{value:"Mainnet",id:"mainnet",level:3},{value:"Testnet",id:"testnet",level:3},{value:"Additional links",id:"additional-links",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Conflux-Rust v2.1.0 is a small hardfork upgrade. In this upgrade 5 new CIPs will be activate, and also some improvement about storage and RPC."}),"\n",(0,r.jsx)(n.h2,{id:"new-cips",children:"New CIPs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-94.md",children:"CIP-94"}),": proposes to use on-chain DAO voting to decide and update reward parameters without hardfork."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-97.md",children:"CIP-97"}),": proposes to remove account's staking lists."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-98.md",children:"CIP-98"}),": Fix a bug in BLOCKHASH opcode in eSpace."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-99.md",children:"CIP-99"}),": Allow more not-voting terms before we force-retire a node, and make the unlock period of a retiring node shorter to allow the node to rejoin the PoS voting faster."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-105.md",children:"CIP-105"})," PoS staking based minimal DAO vote count."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"new-internalcontract",children:"New InternalContract"}),"\n",(0,r.jsxs)(n.p,{children:["CIP-94 also has introduce a new InternalContract ",(0,r.jsx)(n.code,{children:"ParamControl"})," at hex address ",(0,r.jsx)(n.code,{children:"0x0888000000000000000000000000000000000007"}),". This contract can be used to retrive parameter info and participate in DAO vote."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// SPDX-License-Identifier: MIT\n\npragma solidity >=0.8.0;\n\ninterface ParamsControl {\n    struct Vote {\n        uint16 topic_index;\n        uint256[3] votes;\n    }\n\n    /*** Query Functions ***/\n    /**\n     * @dev cast vote for parameters\n     * @param vote_round The round to vote for\n     * @param vote_data The list of votes to cast\n     */\n    function castVote(uint64 vote_round, Vote[] calldata vote_data) external;\n\n    /**\n     * @dev read the vote data of an account\n     * @param addr The address of the account to read\n     */\n    function readVote(address addr) external view returns (Vote[] memory);\n\n    /**\n     * @dev Current vote round\n     */\n    function currentRound() external view returns (uint64);\n\n    /**\n     * @dev read the total votes of given round\n     * @param vote_round The vote number\n     */\n    function totalVotes(uint64 vote_round) external view returns (Vote[] memory);\n\n    /**\n     * @dev read the PoS stake for the round.\n     */\n    function posStakeForVotes(uint64) external view returns (uint256);\n\n    event CastVote(uint64 indexed vote_round, address indexed addr, uint16 indexed topic_index, uint256[3] votes);\n    event RevokeVote(uint64 indexed vote_round, address indexed addr, uint16 indexed topic_index, uint256[3] votes);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,r.jsx)(n.h3,{id:"storage",children:"Storage"}),"\n",(0,r.jsx)(n.p,{children:"Allow snapshots to be removed during recovery. This reduces the disk space requirement for full node sync or recovery."}),"\n",(0,r.jsxs)(n.p,{children:["In v2.1.0 Conflux-Rust also brought support for ",(0,r.jsx)(n.code,{children:"fullstate query"}),", which means we can query state at any blockchain height. For example we can query an address ",(0,r.jsx)(n.code,{children:"cfx:aaketjh9tkj5g2k4zx3kfvb9vkku8nr956n0en4fhe"}),"'s balance at height ",(0,r.jsx)(n.code,{children:"100000"})," with method ",(0,r.jsx)(n.code,{children:"cfx_getBalance"})," by specifying the second parameter."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl --location --request POST \'https://main.confluxrpc.com\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \' {\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "method": "cfx_getBalance",\n    "params": [\n        "cfx:aaketjh9tkj5g2k4zx3kfvb9vkku8nr956n0en4fhe",\n        "0x186a0"\n    ]\n  }\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To support conflux fullstate query, a archive node with configuration ",(0,r.jsx)(n.code,{children:"enable_single_mpt_storage"})," enabled is required. And the node need sync data from genesis to construct all the history states. Besides nodes can also set ",(0,r.jsx)(n.code,{children:'single_mpt_space = "evm"'})," to only store eSpace states."]}),"\n",(0,r.jsx)(n.h3,{id:"rpc",children:"RPC"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Support ",(0,r.jsx)(n.code,{children:"eth_subscribe"})," and ",(0,r.jsx)(n.code,{children:"eth_unsubscribe"})," in eSpace RPCs."]}),"\n",(0,r.jsxs)(n.li,{children:["Add a RPC method ",(0,r.jsx)(n.code,{children:"cfx_getParamsFromVote"})," to return the currently used value of the voted parameters."]}),"\n",(0,r.jsx)(n.li,{children:"Return null for getting skipped transactions and receipts. Whether they will be returned was nondeterministic before, but now they are ensured to be null."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"update-schedule",children:"Update schedule"}),"\n",(0,r.jsx)(n.h3,{id:"mainnet",children:"Mainnet"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["v2.1.0 hardfork ",(0,r.jsx)(n.code,{children:"epochNumber"})," has been set to ",(0,r.jsx)(n.code,{children:"56800000"})," (estimated on Oct. 18th, 2022 (GMT+8))"]}),"\n",(0,r.jsxs)(n.li,{children:["CIP-94 activate ",(0,r.jsx)(n.code,{children:"blockNumber"})," is ",(0,r.jsx)(n.code,{children:"133800000"})," (estimated on Oct. 25th, 2022 (GMT+8))"]}),"\n",(0,r.jsxs)(n.li,{children:["CIP-99 activate ",(0,r.jsx)(n.code,{children:"PoS blockNumber"})," is ",(0,r.jsx)(n.code,{children:"330000"})," (estimated on Oct. 25th, 2022 (GMT+8))"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"testnet",children:"Testnet"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["v2.1.0 hardfork ",(0,r.jsx)(n.code,{children:"epochNumber"})," has been set to ",(0,r.jsx)(n.code,{children:"88100000"})," (around 22:00 Aug.17th, 2022(GMT+8))"]}),"\n",(0,r.jsxs)(n.li,{children:["CIP-94 activate ",(0,r.jsx)(n.code,{children:"blockNumber"})," is ",(0,r.jsx)(n.code,{children:"112400000"})]}),"\n",(0,r.jsxs)(n.li,{children:["CIP-99 activate ",(0,r.jsx)(n.code,{children:"PoS blockNumber"})," is ",(0,r.jsx)(n.code,{children:"342000"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"additional-links",children:"Additional links"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://forum.conflux.fun/t/conflux-v2-1-0-network-hardfork-upgrade-announcement/16571",children:"Mainnet update announcement"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Conflux-Chain/conflux-rust/releases/tag/v2.1.0",children:"Conflux-rust v2.1.0 release"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://forum.conflux.fun/t/conflux-v2-1-0-testnet-testnet-upgrade-announcement/16075",children:"Testnet update announcement"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://test.confluxhub.io/governance/dashboard",children:"Testnet governance dApp"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Conflux-Chain/conflux-rust/releases/tag/v2.1.0-testnet",children:"Conflux-rust v2.1.0 testnet release"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(67294);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);