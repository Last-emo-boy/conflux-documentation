"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8104],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54491:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:4,title:"Oracles",displayed_sidebar:"eSpaceSidebar"},i=void 0,c={unversionedId:"espace/build/infrastructure/oracles",id:"espace/build/infrastructure/oracles",title:"Oracles",description:"Oracles are data feeds that enable smart contracts on the blockchain to access off-chain data sources. This functionality is crucial, as Ethereum-based smart contracts are inherently unable to access information stored outside the blockchain network by default. For further information, you can explore Ethereum's Oracle documentation.",source:"@site/docs/espace/build/infrastructure/oracles.md",sourceDirName:"espace/build/infrastructure",slug:"/espace/build/infrastructure/oracles",permalink:"/es/docs/espace/build/infrastructure/oracles",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Oracles",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"ConfluxScan API",permalink:"/es/docs/espace/build/infrastructure/confluxscan-api"},next:{title:"EVM Compatibility",permalink:"/es/docs/espace/build/evm-compatibility"}},s={},l=[{value:"Pyth",id:"pyth",level:2},{value:"Witnet",id:"witnet",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Does chainlink support Conflux?",id:"does-chainlink-support-conflux",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Oracles are data feeds that enable smart contracts on the blockchain to access off-chain data sources. This functionality is crucial, as Ethereum-based smart contracts are inherently unable to access information stored outside the blockchain network by default. For further information, you can explore ",(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/oracles/"},"Ethereum's Oracle documentation"),"."),(0,a.kt)("p",null,"There are already oracle services available on Conflux eSpace."),(0,a.kt)("h2",{id:"pyth"},(0,a.kt)("a",{parentName:"h2",href:"https://pyth.network/"},"Pyth")),(0,a.kt)("p",null,"Pyth is a renowned oracle service in the industry, offering ",(0,a.kt)("strong",{parentName:"p"},"Smarter Data for Smarter Contracts"),". It ensures the security of your smart contracts by providing reliable, low-latency market data sourced from institutional-grade providers. Developers can build applications utilizing high-fidelity oracle feeds, specifically designed for mission-critical systems."),(0,a.kt)("p",null,"Pyth is already integrated in Conflux eSpace, you can use it directly. Check it's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.pyth.network/documentation/pythnet-price-feeds/evm#mainnets"},"documentation")," for how to use it in your smart contracts."),(0,a.kt)("h2",{id:"witnet"},(0,a.kt)("a",{parentName:"h2",href:"https://witnet.io/"},"Witnet")),(0,a.kt)("p",null,"Witnet is a permissionless, decentralized, and censorship-resistant oracle helping smart contracts to react to real world events with strong crypto-economic guarantees."),(0,a.kt)("h2",{id:"faqs"},"FAQs"),(0,a.kt)("h3",{id:"does-chainlink-support-conflux"},"Does chainlink support Conflux?"),(0,a.kt)("p",null,"Currently Chainlink ",(0,a.kt)("strong",{parentName:"p"},"is not integrated")," in Conflux eSpace, we are working on it."))}d.isMDXComponent=!0}}]);