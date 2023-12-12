"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:3,title:"ConfluxScan API",displayed_sidebar:"eSpaceSidebar"},i=void 0,c={unversionedId:"espace/build/infrastructure/confluxscan-api",id:"espace/build/infrastructure/confluxscan-api",title:"ConfluxScan API",description:"ConfluxScan is a block explorer for the Conflux network, just like Etherscan for Ethereum. It provides a RESTful API for developers to query aggregated blockchain data. The API is free to use and compatible with the Etherscan API.",source:"@site/docs/espace/build/infrastructure/confluxscan-api.md",sourceDirName:"espace/build/infrastructure",slug:"/espace/build/infrastructure/confluxscan-api",permalink:"/es/docs/espace/build/infrastructure/confluxscan-api",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"ConfluxScan API",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"Creating Subgraphs",permalink:"/es/docs/espace/build/infrastructure/graph/create-subgraphs"},next:{title:"Oracles",permalink:"/es/docs/espace/build/infrastructure/oracles"}},l={},s=[{value:"Usage Scenarios",id:"usage-scenarios",level:2},{value:"API Endpoints",id:"api-endpoints",level:2},{value:"API Key",id:"api-key",level:2}],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://evm.confluxscan.io/"},"ConfluxScan")," is a block explorer for the Conflux network, just like Etherscan for Ethereum. It provides a ",(0,a.kt)("a",{parentName:"p",href:"https://evmapi.confluxscan.io/doc"},(0,a.kt)("strong",{parentName:"a"},"RESTful API"))," for developers to query ",(0,a.kt)("strong",{parentName:"p"},"aggregated blockchain data"),". The API is free to use and compatible with the ",(0,a.kt)("a",{parentName:"p",href:"https://etherscan.io/apis"},"Etherscan API"),"."),(0,a.kt)("h2",{id:"usage-scenarios"},"Usage Scenarios"),(0,a.kt)("p",null,"If you want get data like these:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The transaction history of an address"),(0,a.kt)("li",{parentName:"ul"},"The NFTs owned by an address or a contract"),(0,a.kt)("li",{parentName:"ul"},"The ERC20 tokens owned by an address or a contract"),(0,a.kt)("li",{parentName:"ul"},"The ERC20 token transfer history of an address or a contract"),(0,a.kt)("li",{parentName:"ul"},"Verify the source code of a contract, get the ABI of a contract"),(0,a.kt)("li",{parentName:"ul"},"Query block number by timestamp")),(0,a.kt)("p",null,"Then you can use the ConfluxScan API to get the data you want. For a complete list of API endpoints, see ",(0,a.kt)("a",{parentName:"p",href:"https://evmapi.confluxscan.io/doc"},"API swagger doc"),"."),(0,a.kt)("h2",{id:"api-endpoints"},"API Endpoints"),(0,a.kt)("p",null,"The API endpoints are listed below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mainnet: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://evmapi.confluxscan.io")),(0,a.kt)("li",{parentName:"ul"},"Testnet: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://evmapi-testnet.confluxscan.io"))),(0,a.kt)("p",null,"Check API's rate limit, notes in it's ",(0,a.kt)("a",{parentName:"p",href:"https://evmapi.confluxscan.io/doc"},"swagger doc"),"."),(0,a.kt)("h2",{id:"api-key"},"API Key"),(0,a.kt)("p",null,"If the free quota is not enough for your usage, you can apply for an API key by contact us via email at ",(0,a.kt)("a",{parentName:"p",href:"mailto:bd@confluxnetwork.org"},"bd@confluxnetwork.org")," or make a purchase through the ",(0,a.kt)("a",{parentName:"p",href:"../../../general/build/tools/web3paywall"},"Web3 Paywall")))}f.isMDXComponent=!0}}]);