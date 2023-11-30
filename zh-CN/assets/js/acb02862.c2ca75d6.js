"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8773],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(4137));const o={sidebar_position:1,title:"\u6982\u89c8",description:"Overview of Conflux eSpace",displayed_sidebar:"eSpaceSidebar"},i=void 0,l={unversionedId:"espace/Overview",id:"espace/Overview",title:"\u6982\u89c8",description:"Overview of Conflux eSpace",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/Overview.md",sourceDirName:"espace",slug:"/espace/Overview",permalink:"/zh-CN/docs/espace/Overview",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u6982\u89c8",description:"Overview of Conflux eSpace",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",next:{title:"User Guide",permalink:"/zh-CN/docs/espace/UserGuide"}},c={},s=[{value:"User Guides",id:"user-guides",level:2},{value:"Developer tutorials",id:"developer-tutorials",level:2},{value:"Technical details",id:"technical-details",level:2},{value:"Resources",id:"resources",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Conflux eSpace is a fully ",(0,n.kt)("strong",{parentName:"p"},"EVM-compatible")," space(chain) of Conflux with much lower gas fee and higher TPS than Ethereum, it is independent from ",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/core/"},"Core")," space."),(0,n.kt)("p",null,"The experience of eSpace for ",(0,n.kt)("strong",{parentName:"p"},"developers")," and ",(0,n.kt)("strong",{parentName:"p"},"common users")," is the same as Ethereum. dApps of Ethereum can be directly deployed to eSpace without any modification.\nDevelopment tools(Remix, Hardhat, Foundry etc), SDKs(ethers.js, viem, web3.py), wallets(Metamask, Taho), and services(TheGraph) of Ethereum can be directly used in eSpace."),(0,n.kt)("h2",{id:"user-guides"},"User Guides"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/espace/UserGuide"},"How to connect metamask to eSpace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../general/tutorials/transferring-funds/transfer-funds-across-spaces"},"How to cross CFX between Core and eSpace"))),(0,n.kt)("h2",{id:"developer-tutorials"},"Developer tutorials"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/espace/DeveloperQuickstart"},"Developer Quickstart")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/espace/tutorials/deployContract/hardhatAndFoundry"},"How to deploy a contract")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/espace/tutorials/VerifyContracts"},"How to verify a contract"))),(0,n.kt)("h2",{id:"technical-details"},"Technical details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/espace/build/cross-space-bridge"},"CrossSpace Internal Contract")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/espace/build/evm-compatibility"},"EVM compatibility")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/espace/build/jsonrpc-compatibility"},"JSON-RPC compatibility"))),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://evm.confluxscan.io/"},"eSpace Blockchain Explorer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/espace/network-endpoints"},"eSpace RPC endpoints")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://confluxhub.io/espace-bridge/cross-space"},"ConfluxHub Space Bridge Dapp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://efaucet.confluxnetwork.org/"},"eSpace Testnet faucet"))),(0,n.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"},"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/espace/FAQs"},"FAQs"))))}d.isMDXComponent=!0}}]);