"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7492],{4137:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9988:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(4137));const o={sidebar_position:2,title:"User Guide",description:"How to connect metamask to eSpace",keywords:["MetaMask","EVMSpace"],displayed_sidebar:"eSpaceSidebar"},l=void 0,i={unversionedId:"espace/UserGuide",id:"espace/UserGuide",title:"User Guide",description:"How to connect metamask to eSpace",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/UserGuide.md",sourceDirName:"espace",slug:"/espace/UserGuide",permalink:"/zh-CN/docs/espace/UserGuide",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"User Guide",description:"How to connect metamask to eSpace",keywords:["MetaMask","EVMSpace"],displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"\u6982\u89c8",permalink:"/zh-CN/docs/espace/Overview"},next:{title:"Developer Quickstart",permalink:"/zh-CN/docs/espace/DeveloperQuickstart"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"\u8fde\u63a5 MetaMask \u5230 Conflux eSpace\u3002",id:"\u8fde\u63a5-metamask-\u5230-conflux-espace",level:2},{value:"Add eSpace through Chainlist",id:"add-espace-through-chainlist",level:3},{value:"Add eSpace manually",id:"add-espace-manually",level:3},{value:"Faucet",id:"faucet",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This guide will help user connect their metamask  wallet to Conflux eSpace.")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," \u662f\u4e00\u4e2a\u5177\u6709\u7528\u6237\u754c\u9762\u7684\u6d4f\u89c8\u5668\u6269\u5c55\uff0c\u7528\u4e8e\u4e0e\u517c\u5bb9\u4ee5\u592a\u574a\u7684\u533a\u5757\u94fe(\u4f8b\u5982 Conflux eSpace)\u8fdb\u884c\u4ea4\u4e92\u3002 For the purpose of this guide, we will assume you are already familiar with MetaMask and have it installed. If you need help getting started with MetaMask itself, ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/faqs.html"},"check out Metamask documentation")," and ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/"},"Ethereum documentation"),"."),(0,r.kt)("p",null,"In this tutorial we will walk through connecting MetaMask to the Conflux eSpace Testnet."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u6559\u7a0b\u4e2d\u7684\u5c4f\u5e55\u622a\u56fe\u6765\u81eaMetaMask \u6d4f\u89c8\u5668\u6269\u5c55\u7248\u672c 10.8.1\u3002")),(0,r.kt)("h2",{id:"\u8fde\u63a5-metamask-\u5230-conflux-espace"},"\u8fde\u63a5 MetaMask \u5230 Conflux eSpace\u3002"),(0,r.kt)("h3",{id:"add-espace-through-chainlist"},"Add eSpace through Chainlist"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u6dfb\u52a0 Conflux eSpace \u7f51\u7edc\u5230\u60a8\u7684 MetaMask \u94b1\u5305\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6253\u5f00\u60a8\u7684\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"li",href:"https://chainlist.org%E3%80%82"},"https://chainlist.org\u3002")),(0,r.kt)("li",{parentName:"ol"},"\u641c\u7d22\u201cConflux eSpace\u201d"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u201cConflux eSpace\u201d\u4e0b\u70b9\u51fb\u201c\u8fde\u63a5\u94b1\u5305\u201d\uff0c\u4ee5\u5141\u8bb8\u6b64\u7ad9\u70b9\u5411 MetaMask \u53d1\u9001\u8bf7\u6c42\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u201cConflux eSpace\u201d\u4e0b\u70b9\u51fb\u201c\u6dfb\u52a0\u5230 MetaMask\u201d\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f53 MetaMask \u63d0\u793a\u201c\u5141\u8bb8\u6b64\u7ad9\u70b9\u6dfb\u52a0\u7f51\u7edc\uff1f\u201d\u65f6\uff0c\u70b9\u51fb\u201c\u6279\u51c6\u201d\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f53 MetaMask \u63d0\u793a\u201c\u5141\u8bb8\u6b64\u7ad9\u70b9\u5207\u6362\u7f51\u7edc\uff1f\u201d\u65f6\uff0c\u70b9\u51fb\u201c\u6279\u51c6\u201d\u3002")),(0,r.kt)("p",null,"\u60a8\u7684 MetaMask \u94b1\u5305\u73b0\u5728\u5df2\u8fde\u63a5\u5230 Conflux eSpace\u3002 \u60a8\u53ef\u4ee5\u968f\u65f6\u901a\u8fc7Metamask\u4e2d\u7684\u7f51\u7edc\u9009\u62e9\u83dc\u5355\u5207\u6362\u5230\u5176\u4ed6\u7f51\u7edc\u3002"),(0,r.kt)("h3",{id:"add-espace-manually"},"Add eSpace manually"),(0,r.kt)("p",null,"\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u7f51\u7edc\u9009\u62e9\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9\u201c\u6dfb\u52a0\u7f51\u7edc\u201d(\u6216\u201c\u81ea\u5b9a\u4e49 RPC\u201d)\u624b\u52a8\u5c06 Conflux eSpace \u6dfb\u52a0\u5230 MetaMask\uff1a"),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"MetaMask-network-select",src:a(3453).Z,width:"1343",height:"589"})),(0,r.kt)("p",null,"\u5bf9\u4e8eeSpace ",(0,r.kt)("strong",{parentName:"p"},"mainnet"),", \u8bf7\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\u503c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Network Name"),": Conflux eSpace"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"New RPC URL"),": ",(0,r.kt)("a",{parentName:"li",href:"https://evm.confluxrpc.com"},"https://evm.confluxrpc.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chain ID"),": 1030"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Currency Symbol"),": CFX"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Block Explorer URL"),": ",(0,r.kt)("a",{parentName:"li",href:"https://evm.confluxscan.io"},"https://evm.confluxscan.io"))),(0,r.kt)("p",null,"\u5bf9\u4e8e eSpace ",(0,r.kt)("strong",{parentName:"p"},"testnet"),"\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\u503c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Network Name"),": Conflux eSpace (Testnet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"New RPC URL"),": ",(0,r.kt)("a",{parentName:"li",href:"https://evmtestnet.confluxrpc.com"},"https://evmtestnet.confluxrpc.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chain ID"),": 71"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Currency Symbol"),": CFX"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Block Explorer URL"),": ",(0,r.kt)("a",{parentName:"li",href:"https://evmtestnet.confluxscan.io"},"https://evmtestnet.confluxscan.io"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MetaMask-create-EVM-Space-rpc",src:a(2027).Z,width:"1934",height:"1294"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6240\u6709Conflux eSpace RPC \u7aef\u70b9URL \u548c chain ID\u90fd\u53ef\u4ee5\u5728\u6211\u4eec\u7684\u7f51\u7edc\u9875\u9762\u4e0a\u627e\u5230\u3002")),(0,r.kt)("p",null,"\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"\u4fdd\u5b58"),"\uff0c\u7136\u540e\u60a8\u5e94\u8be5\u5728 MetaMask \u4e2d\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Conflux eSpace")," \u662f\u5f53\u524d\u9009\u62e9\u7684\u7f51\u7edc\u3002 \u4e3a\u4e86\u8ba9\u60a8\u4f53\u9a8c MetaMask\u64cd\u4f5c\u60c5\u51b5\uff0c\u6211\u4eec\u5c06\u628a\u5b83\u8fde\u63a5\u5230 Remix \u5e76\u6267\u884c\u4e00\u4e9b\u4ea4\u6613\u3002 \u672c\u6307\u5357\u7684\u5176\u4f59\u90e8\u5206\u5c06\u5047\u8bbe\u60a8\u7684 MetaMask \u5df2\u8fde\u63a5\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Conflux eSpace(Testnet)"),"\u3002"),(0,r.kt)("h2",{id:"faucet"},"Faucet"),(0,r.kt)("p",null,"To interact with our testnet, you first need to receive testnet CFX on eSpace Testnet. You can get testnet CFX from our ",(0,r.kt)("a",{parentName:"p",href:"https://efaucet.confluxnetwork.org/"},"faucet"),". Paste your wallet address in the address input box solve the puzzle and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Claim")," to receive testnet CFX."))}m.isMDXComponent=!0},2027:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/metamask_add_network-ce-cec2c8b22ca4e27c6b253415ff8f2244.png"},3453:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/metamask_choose_network-0-0d3034f88dcd7bc92f61df7d1be9bb7c.png"}}]);