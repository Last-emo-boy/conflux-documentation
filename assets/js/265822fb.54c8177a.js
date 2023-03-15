"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2112],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=c(n),h=o,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(f,i(i({ref:e},p),{},{components:n})):a.createElement(f,i({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1173:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4,title:"Transfer Funds Across Chains Using Multichain"},i=void 0,s={unversionedId:"espace/learn/tutorials/transfer-funds-across-chains-multichain",id:"espace/learn/tutorials/transfer-funds-across-chains-multichain",title:"Transfer Funds Across Chains Using Multichain",description:"Multichain is a cross-chain bridge that supports multiple networks. With Multichain, you can bridge different tokens across different networks into Conflux eSpace, or from Conflux eSpace to other networks.",source:"@site/docs/espace/learn/tutorials/transfer-funds-across-chains-multichain.md",sourceDirName:"espace/learn/tutorials",slug:"/espace/learn/tutorials/transfer-funds-across-chains-multichain",permalink:"/docs/espace/learn/tutorials/transfer-funds-across-chains-multichain",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/espace/learn/tutorials/transfer-funds-across-chains-multichain.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Transfer Funds Across Chains Using Multichain"},sidebar:"tutorialSidebar",previous:{title:"Transfer Funds Across Spaces",permalink:"/docs/espace/learn/tutorials/transfer-funds-across-spaces"},next:{title:"Transfer Stablecoins Across Chains Using Meson",permalink:"/docs/espace/learn/tutorials/transfer-stablecoins-across-chains-using-meson"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Bridging bCFX to Conflux eSpace with Multichain",id:"bridging-bcfx-to-conflux-espace-with-multichain",level:2}],p={toc:c},u="wrapper";function d(t){let{components:e,...r}=t;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Note to Binance users and bCFX holders: Conflux on Binance is listed as wrapped ERC-20 token (bCFX), it is not native CFX. Conflux eSpace and BNB Chain use EVM-compatible addresses, but those addresses live in different chains.",type:"note"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://conflux.multichain.org/#/router"},"Multichain")," is a cross-chain bridge that supports multiple networks. With Multichain, you can bridge different tokens across different networks into Conflux eSpace, or from Conflux eSpace to other networks.\nIn this guide, we'll bridge bCFX from BNB Chain to Conflux eSpace through Multichain."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A BNB Chain account funded with bCFX and BNB."),(0,o.kt)("li",{parentName:"ul"},"For the purposes of this guide, we'll bridge bCFX from BNB Chain to Conflux eSpace. However, other chains and tokens are also supported."),(0,o.kt)("li",{parentName:"ul"},"Your MetaMask wallet connected to Conflux eSpace.")),(0,o.kt)("h2",{id:"bridging-bcfx-to-conflux-espace-with-multichain"},"Bridging bCFX to Conflux eSpace with Multichain"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://conflux.multichain.org/#/router"},"Multichain")),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Connect Wallet")," button to start connecting your wallet.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(1028).Z,width:"2160",height:"1215"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In the Connect to a Wallet dialog, click ",(0,o.kt)("strong",{parentName:"li"},"MetaMask"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(8890).Z,width:"1920",height:"1080"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"In the Connect With MetaMask notification, select the wallet(s) that you wish to connect and click ",(0,o.kt)("strong",{parentName:"li"},"Next"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(6983).Z,width:"1920",height:"1080"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Connect")," to confirm the connection to the site.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(7284).Z,width:"1920",height:"1080"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"In the From box, switch to the ",(0,o.kt)("strong",{parentName:"li"},"BNB CHAIN mainnet")," network.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(5747).Z,width:"1920",height:"1080"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"In the token list, search for bCFX and click the ",(0,o.kt)("strong",{parentName:"li"},"bCFX")," token.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(2787).Z,width:"1920",height:"1080"})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"In the amount field, enter the amount of bCFX that you wish you transfer to Conflux eSpace.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(3338).Z,width:"1920",height:"1080"})),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"In the To box, switch to the ",(0,o.kt)("strong",{parentName:"li"},"Conflux eSpace mainnet")," network.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(7154).Z,width:"1920",height:"1080"})),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"Since Multichain only supports bridging bCFX from BNB Chain to Conflux as CFX, leave CFX as the token.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(8440).Z,width:"1920",height:"1080"})),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},"Confirm the amount of CFX that you'll receive in Conflux.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(8231).Z,width:"1920",height:"1080"})),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Approve bCFX")," to start bridging your tokens.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(6409).Z,width:"1920",height:"1080"})),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Cross-Chain Router dialog, click ",(0,o.kt)("strong",{parentName:"p"},"Approve bCFX")," to start approving Multichain to transfer your tokens.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In MetaMask, click ",(0,o.kt)("strong",{parentName:"p"},"Confirm")," to grant permission to Multichain to transfer your tokens."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(5754).Z,width:"1920",height:"1080"})),(0,o.kt)("ol",{start:15},(0,o.kt)("li",{parentName:"ol"},"Once the transfer is approved, click Swap to start withdrawing your funds in Conflux eSpace.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(655).Z,width:"1920",height:"1080"})),(0,o.kt)("ol",{start:16},(0,o.kt)("li",{parentName:"ol"},"In the Cross-Chain Router dialog, review and confirm the transaction details and click ",(0,o.kt)("strong",{parentName:"li"},"Confirm"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(41).Z,width:"1920",height:"1080"})),(0,o.kt)("ol",{start:17},(0,o.kt)("li",{parentName:"ol"},"In the MetaMask notification, click ",(0,o.kt)("strong",{parentName:"li"},"Confirm")," to confirm the transaction and bridge your assets.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Note"),": This transaction may take a few minutes.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(6296).Z,width:"1920",height:"1080"})),(0,o.kt)("ol",{start:18},(0,o.kt)("li",{parentName:"ol"},"Once the transaction is completed, click the Tx hash to view the transaction details in ",(0,o.kt)("a",{parentName:"li",href:"https://confluxscan.io/"},"Confluxscan"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(1410).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"You have now bridged your funds to Conflux eSpace!"))}d.isMDXComponent=!0},8231:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connectWallet-10-588258df37e4c0d3d9cb9c895acf2687.png"},6409:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connectWallet-11-b5f184be9ef2681f179ace3c45524d76.png"},5754:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connectWallet-12-5a08cd29c22001113abfc5df9e7a6ff6.png"},655:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connectWallet-14-a77c73a519f9895f8244545801ebfa05.png"},41:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connectWallet-15-8a25f173d9cbc06826b6637a34f4ea2b.png"},6296:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connectWallet-16-bef3bfd3a60d1660b48dfe3f2db90369.png"},1410:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connectWallet-17-fbd970f1965971aae0604108e7387c5c.png"},8890:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connectWallet-2-cb6c019333cc4c4d5ed0209260ac4e15.png"},6983:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connectWallet-3-e83a20a016885cfab5abf1aeae86a4d8.png"},7284:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connectWallet-4-9aab3b60aeef7ba82a601e720852058b.png"},5747:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connectWallet-5-a0b09675f41835ebb29d1ba444682f2e.png"},2787:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connectWallet-6-1a4aced039281fdbcafcc13c50188570.png"},3338:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connectWallet-7-8a7cff6f7c08144353de5e5515622a4a.png"},7154:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connectWallet-8-f1b0c9d54a274c24f0f31a39e717e5d9.png"},8440:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connectWallet-9-40b94fddf4717c5102dd13f9b8db2f95.png"},1028:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connectWallet-04ca259d20753517516b91b901ecef5f.png"}}]);