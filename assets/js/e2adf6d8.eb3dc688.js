"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8624],{4137:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),f=a,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||r;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},3544:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=o(7462),a=(o(7294),o(4137));o(9524);const r={sidebar_position:2,title:"Tools"},i=void 0,l={unversionedId:"core/build/sdks-and-tools/tools",id:"core/build/sdks-and-tools/tools",title:"Tools",description:"Conflux has tools that can help developers quickly build a dapp.",source:"@site/docs/core/build/sdks-and-tools/tools.md",sourceDirName:"core/build/sdks-and-tools",slug:"/core/build/sdks-and-tools/tools",permalink:"/docs/core/build/sdks-and-tools/tools",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/build/sdks-and-tools/tools.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Tools"},sidebar:"tutorialSidebar",previous:{title:"SDKs",permalink:"/docs/core/build/sdks-and-tools/sdks"},next:{title:"Network Endpoints",permalink:"/docs/core/build/sdks-and-tools/conflux_rpcs"}},s={},u=[{value:"hardhat-conflux",id:"hardhat-conflux",level:2},{value:"Conflux-Truffle",id:"conflux-truffle",level:2},{value:"Conflux ChainIDE",id:"conflux-chainide",level:2},{value:"Conflux studio",id:"conflux-studio",level:2},{value:"Conflux Studio Web",id:"conflux-studio-web",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Conflux has tools that can help developers quickly build a dapp."),(0,a.kt)("h2",{id:"hardhat-conflux"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/conflux-chain/hardhat-conflux"},"hardhat-conflux")),(0,a.kt)("p",null,"Hardhat is the morden Solidity developer toolkit, which can also used to develop contracts on ConfluxNetwork with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/conflux-chain/hardhat-conflux"},"hardhat-conflux")," plugin. This plugin brings to Hardhat the ",(0,a.kt)("inlineCode",{parentName:"p"},"js-conflux-sdk"),", which allows you to interact with the Conflux blockchain in a simple way."),(0,a.kt)("h2",{id:"conflux-truffle"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/Conflux-Chain/conflux-truffle"},"Conflux-Truffle")),(0,a.kt)("p",null,"Truffle is a world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier. We have ported it to Conflux-Truffle, which will work with the Conflux network and will have the same features and usage experience."),(0,a.kt)("p",null,"To find out how to use it, you can read ",(0,a.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/overview"},"Truffle's documentation"),".\nAnd ",(0,a.kt)("inlineCode",{parentName:"p"},"conflux-truffle"),"'s ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-truffle/blob/conflux/ultimate-guide.md"},"setup guide")),(0,a.kt)("h2",{id:"conflux-chainide"},(0,a.kt)("a",{parentName:"h2",href:"https://chainide.com/s/createTempProject/conflux"},"Conflux ChainIDE")),(0,a.kt)("p",null,"ChainIDE is a Cloud-Based Multi-Chain IDE. Developers don\u2019t need to install extra tools while working on smart contracts. ChainIDE supports multi-chain development environments that include Conflux(core), Conflux(eSpace), Ethereum, BNB Chain, Polygon, Dfinity, Nervos, Flow, and it also supports consortium blockchains such as Chain33 and FiscoBcos.\nFor more information about how to use ChainIDE, please check ",(0,a.kt)("a",{parentName:"p",href:"https://chainide.gitbook.io/chainide-english-1/ethereum-ide-1/4.-conflux-ide"},"this page"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Chainide",src:o(7036).Z,width:"864",height:"412"})),(0,a.kt)("h2",{id:"conflux-studio"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/ObsidianLabs/ConfluxStudio/blob/master/README-EN.md"},"Conflux studio")),(0,a.kt)("p",null,"Conflux Studio is an integrated development environment (IDE), making developing Conflux smart contracts faster and easier, developed by ",(0,a.kt)("a",{parentName:"p",href:"https://www.obsidians.io/"},"ObsidianLabs"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/ObsidianLabs/ConfluxStudio/raw/master/screenshots/compile.png",alt:null})),(0,a.kt)("p",null,"You can download it from its ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ObsidianLabs/ConfluxStudio/releases"},"Github release page"),". Windows, Mac, and Linux systems are supported."),(0,a.kt)("p",null,"You can find its documentation in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ObsidianLabs/ConfluxStudio"},"readme"),", and there is also a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ObsidianLabs/conflux-dapp-tutorial"},"tutorial")," about how to use it to develop a Dapp."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/ObsidianLabs/ConfluxStudio/raw/master/screenshots/compile.png",alt:null})),(0,a.kt)("h2",{id:"conflux-studio-web"},(0,a.kt)("a",{parentName:"h2",href:"https://conflux.ide.black/"},"Conflux Studio Web")),(0,a.kt)("p",null,"The Web version of Conflux studio, that enable user develop smart contract in browser with FluentWallet."))}p.isMDXComponent=!0},7036:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/chainide-bcc31644afa70e51b82560999225f583.png"}}]);