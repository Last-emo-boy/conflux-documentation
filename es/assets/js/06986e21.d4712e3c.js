"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6027],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(4137));const o={sidebar_position:1,id:"conflux_papers",title:"Papers",keywords:["conflux","papers"],displayed_sidebar:"generalSidebar"},i=void 0,s={unversionedId:"general/conflux-basics/additional-resources/conflux_papers",id:"general/conflux-basics/additional-resources/conflux_papers",title:"Papers",description:"The Conflux Protocol is defined and analyzed in a number of research papers.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/conflux-basics/additional-resources/papers.md",sourceDirName:"general/conflux-basics/additional-resources",slug:"/general/conflux-basics/additional-resources/conflux_papers",permalink:"/es/docs/general/conflux-basics/additional-resources/conflux_papers",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"conflux_papers",title:"Papers",keywords:["conflux","papers"],displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"CIPs",permalink:"/es/docs/general/conflux-basics/conflux-governance/cips"},next:{title:"Wallets",permalink:"/es/docs/general/tutorials/wallets/"}},c={},l=[{value:"Con\ufb02ux Protocol Specification (Yellow paper)",id:"con\ufb02ux-protocol-specification-yellow-paper",level:2},{value:"A Decentralized Blockchain with High Throughput and Fast Confirmation",id:"a-decentralized-blockchain-with-high-throughput-and-fast-confirmation",level:2},{value:"GHAST: Breaking Confirmation Delay Barrier in Nakamoto Consensus via Adaptive Weighted Blocks",id:"ghast-breaking-confirmation-delay-barrier-in-nakamoto-consensus-via-adaptive-weighted-blocks",level:2},{value:"Technical Presentation",id:"technical-presentation",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Conflux Protocol is defined and analyzed in a number of research papers."),(0,a.kt)("h2",{id:"con\ufb02ux-protocol-specification-yellow-paper"},(0,a.kt)("a",{parentName:"h2",href:"https://www.confluxnetwork.org/files/Conflux_Protocol_Specification.pdf"},"Con\ufb02ux Protocol Specification (Yellow paper)")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://www.confluxnetwork.org/files/Conflux_Protocol_Specification.pdf"},"Protocol Specification")," serves as a reference of the Conflux protocol. It describes the ledger structure, the consensus mechanism, Proof of Work, the incentive mechanism, and many others aspects of the system."),(0,a.kt)("h2",{id:"a-decentralized-blockchain-with-high-throughput-and-fast-confirmation"},(0,a.kt)("a",{parentName:"h2",href:"https://www.usenix.org/conference/atc20/presentation/li-chenxing"},"A Decentralized Blockchain with High Throughput and Fast Confirmation")),(0,a.kt)("p",null,"This paper presents Conflux, a scalable and decentralized blockchain system that provides high throughput and fast confirmation. Conflux operates on a novel consensus protocol which optimistically processes concurrent blocks without discarding any forks and adaptively assigns weights to blocks based on their topology in the Conflux ledger structure (called Tree-Graph). The adaptive weight mechanism enables Conflux to detect and thwart liveness attack by automatically switching between an optimistic strategy for fast confirmation in normal scenarios and a conservative strategy to ensure consensus progress during liveness attacks."),(0,a.kt)("h2",{id:"ghast-breaking-confirmation-delay-barrier-in-nakamoto-consensus-via-adaptive-weighted-blocks"},(0,a.kt)("a",{parentName:"h2",href:"https://arxiv.org/abs/2006.01072"},"GHAST: Breaking Confirmation Delay Barrier in Nakamoto Consensus via Adaptive Weighted Blocks")),(0,a.kt)("p",null,"This paper has been published at ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/"},"https://arxiv.org/"),". In it, we present a new consensus protocol named GHAST (Greedy Heaviest Adaptive Sub-Tree) which organizes blocks in a Tree-Graph structure (i.e., a directed acyclic graph (DAG) with a tree embedded) that allows fast and concurrent block generation."),(0,a.kt)("h2",{id:"technical-presentation"},(0,a.kt)("a",{parentName:"h2",href:"https://confluxnetwork.org/files/Conflux_Technical_Presentation_20200309.pdf"},"Technical Presentation")),(0,a.kt)("p",null,"This is a technical presentation about Conflux's main ideas and architecture, you can find how it's designed, and how Conflux achieves safety against double spending attacks and robustness against liveness attacks."))}d.isMDXComponent=!0}}]);