"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1468],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),f=r,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},92930:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:1,title:"Overview"},i="Documentation Overview",s={unversionedId:"overview/overview",id:"overview/overview",title:"Overview",description:"Welcome to the Conflux Network Developer Portal! This comprehensive portal is designed to guide you through the complexities of Conflux Network, a high-performance, decentralized blockchain network. Here, you'll find detailed summaries of the platform's foundational concepts, tools, and guidelines.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/overview/overview.mdx",sourceDirName:"overview",slug:"/overview/",permalink:"/es/docs/overview/",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"overviewSidebar",next:{title:"Conflux Spaces",permalink:"/es/docs/overview/space-intro"}},p={},l=[{value:"<strong>eSpace</strong>",id:"espace",level:2},{value:"<strong>Core Space</strong>",id:"core-space",level:2},{value:"<strong>Understanding the Conflux Network</strong>",id:"understanding-the-conflux-network",level:2},{value:"One more thing",id:"one-more-thing",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"documentation-overview"},"Documentation Overview"),(0,r.kt)("p",null,"Welcome to the Conflux Network Developer Portal! This comprehensive portal is designed to guide you through the complexities of Conflux Network, a high-performance, decentralized blockchain network. Here, you'll find detailed summaries of the platform's foundational concepts, tools, and guidelines."),(0,r.kt)("p",null,"Conflux Network have two spaces: ",(0,r.kt)("a",{parentName:"p",href:"/docs/overview/space-intro"},"Core Space and eSpace"),", the develop experience of Core Space and eSpace are different, check docs below for how to start build on each space."),(0,r.kt)("p",null,"If you have any questions regarding the documentation, feel free to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-documentation/issues"},"create an issue"),", send feedback emails to ",(0,r.kt)("a",{parentName:"p",href:"mailto:build@confluxnetwork.org"},"build@confluxnetwork.org")," or ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/conflux-network-707952293412339843"},(0,r.kt)("strong",{parentName:"a"},"join our Discord's developer channel"))," to engage in discussions with us."),(0,r.kt)("h2",{id:"espace"},(0,r.kt)("strong",{parentName:"h2"},"eSpace")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../espace/UserGuide"},(0,r.kt)("strong",{parentName:"a"},"User Guide")),": A guide for users on configuring MetaMask to interact with Conflux's eSpace.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../espace/DeveloperQuickstart"},(0,r.kt)("strong",{parentName:"a"},"Developer Quickstart")),": A quickstart guide for Ethereum developers to configure their development environment for interaction with Conflux's eSpace.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/category/tutorials-1"},(0,r.kt)("strong",{parentName:"a"},"Developer Tutorials")),": Developer tutorials for building on Conflux's eSpace, including contract deployment and verification.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../espace/build/cross-space-bridge"},(0,r.kt)("strong",{parentName:"a"},"Cross Space Bridge")),": Learn about the cross-space bridge, enabling seamless transfer of assets and data between Conflux's eSpace and Core Space.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../espace/network-endpoints"},(0,r.kt)("strong",{parentName:"a"},"eSpace Network Endpoints")),": Find a list of network endpoints for eSpace.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../espace/build/evm-compatibility"},(0,r.kt)("strong",{parentName:"a"},"EVM Compatibility")),": Understand eSpace's VM compatibility with the Ethereum Virtual Machine (EVM), facilitating the deployment of EVM-compatible smart contracts and dApps on Conflux.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/es/docs/espace/build/jsonrpc-compatibility"},(0,r.kt)("strong",{parentName:"a"},"JSON-RPC Compatibility")),": Discover eSpace's JSON-RPC compatibility with Ethereum RPCs."))),(0,r.kt)("h2",{id:"core-space"},(0,r.kt)("strong",{parentName:"h2"},"Core Space")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../core/getting-started/"},(0,r.kt)("strong",{parentName:"a"},"Getting Started with Core Space")),": Begin your journey in Conflux's Core Space, understanding its fundamental concepts and operations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../core/core-developer-quickstart"},(0,r.kt)("strong",{parentName:"a"},"Developer Quickstart")),": A quickstart guide for developers to use ",(0,r.kt)("inlineCode",{parentName:"p"},"js-conflux-sdk")," to send their first Core Space transaction.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/category/tutorials"},(0,r.kt)("strong",{parentName:"a"},"Developer Tutorials")),": Developer tutorials for building on Core Space, covering contract deployment, contract verification, and Sponsorship.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/category/core-space-basics"},(0,r.kt)("strong",{parentName:"a"},"Core Space Basics")),": Learn about the foundational concepts of Conflux's Core Space, including accounts, transactions, and gas.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../core/conflux_rpcs"},(0,r.kt)("strong",{parentName:"a"},"Core Space RPC Endpoints")),": Find a list of network endpoints for Conflux's Core Space.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../core/build/json-rpc/"},(0,r.kt)("strong",{parentName:"a"},"Core Space JSON-RPC Reference")),": Learn about the JSON-RPC protocols in Core Space for remote procedures.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../core/core-space-basics/storage"},(0,r.kt)("strong",{parentName:"a"},"Storage")),": Understand Conflux's Collateral for Storage (CFS) mechanism, a more fair and reasonable pricing method for using storage in Conflux Core Space, compared to Ethereum.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../core/core-space-basics/sponsor-mechanism"},(0,r.kt)("strong",{parentName:"a"},"Sponsorship Mechanism")),": Discover Conflux\u2019s gas sponsorship mechanism, which facilitates smart contract usage without gas costs, allowing sponsored contract executions even by new, zero-balance accounts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../core/core-space-basics/internal-contracts/"},(0,r.kt)("strong",{parentName:"a"},"Internal Contracts")),": Conflux introduces several built-in internal contracts for improved system maintenance and on-chain governance in Core Space, including ",(0,r.kt)("inlineCode",{parentName:"p"},"AdminControl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SponsorWhitelistControl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Staking"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfluxContext"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PoSRegister"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"ParamsControl"),". This section provides a comprehensive overview of these internal contracts, offering foundational functionality for the network.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../general/run-a-node/"},(0,r.kt)("strong",{parentName:"a"},"Run a Node")),": Familiarize yourself with the process of setting up and operating a Conflux node, becoming an integral part of the network."))),(0,r.kt)("h2",{id:"understanding-the-conflux-network"},(0,r.kt)("strong",{parentName:"h2"},"Understanding the Conflux Network")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../general/conflux-basics/spaces"},(0,r.kt)("strong",{parentName:"a"},"Spaces")),": Explore the dual-space ecosystem of Conflux, facilitating seamless integration of Conflux-format and Ethereum-format transactions within a single network.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../general/conflux-basics/consensus-mechanisms"},(0,r.kt)("strong",{parentName:"a"},"Consensus Mechanism")),": Discover Conflux's hybrid PoW-PoS consensus mechanism, combining Proof of Work with Proof of Stake for enhanced security and performance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../general/conflux-basics/consensus-mechanisms/proof-of-work/"},(0,r.kt)("strong",{parentName:"a"},"TreeGraph & GHAST")),": Learn about the TreeGraph blockchain structure and GHAST algorithm, foundational components of Conflux's Proof of Work (PoW) consensus mechanism.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../general/conflux-basics/consensus-mechanisms/proof-of-stake/pos_overview"},(0,r.kt)("strong",{parentName:"a"},"Proof Of Stake")),": Understand Conflux's Proof of Stake (PoS) as a part of its hybrid PoW-PoS consensus mechanism, enhancing security and performance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../general/conflux-basics/economics"},(0,r.kt)("strong",{parentName:"a"},"Economics")),": An introduction to the economic model of Conflux, including the native token, CFX, and its utility within the network.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../general/conflux-basics/conflux-governance/governance-overview"},(0,r.kt)("strong",{parentName:"a"},"Governance")),": Overview of Conflux Governance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../general/conflux-basics/additional-resources/conflux_papers"},(0,r.kt)("strong",{parentName:"a"},"Research Papers")),": The Conflux Network is built on a foundation of rigorous research. This section provides a collection of Conflux's research papers, including the original whitepaper, detailing the network's innovative consensus mechanism.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://confluxnetwork.org/files/Conflux_Protocol_Specification.pdf"},(0,r.kt)("strong",{parentName:"a"},"Conflux_Protocol_Specification")),": The Conflux yellow paper.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../general/conflux-basics/accounts"},(0,r.kt)("strong",{parentName:"a"},"Accounts")),": Learn about network accounts, capable of holding balances and initiating transactions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../general/conflux-basics/transactions"},(0,r.kt)("strong",{parentName:"a"},"Transactions")),": Explore transactions \u2013 transfers and other actions that modify Conflux's state. This section also elucidates the unique aspects of Conflux transaction lifecycle, distinct from Ethereum's model.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../general/conflux-basics/gas"},(0,r.kt)("strong",{parentName:"a"},"Gas")),": Learn about the gas mechanism in Conflux, used to compute transaction costs and incentivize network operations."))),(0,r.kt)("h2",{id:"one-more-thing"},"One more thing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../general/CONTRIBUTING"},(0,r.kt)("strong",{parentName:"a"},"Contributing")),": Learn how you can contribute to improving the Conflux Network documentation portal, sharing expertise, and collaborating with the community.")))}m.isMDXComponent=!0}}]);