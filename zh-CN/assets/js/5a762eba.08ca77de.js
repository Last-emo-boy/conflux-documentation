"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9971],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(4137));const o={sidebar_position:2,title:"\u4f7f\u7528 SDK \u53d1\u9001\u4ea4\u6613"},c=void 0,i={unversionedId:"core/tutorials/send-transactions-using-SDK",id:"core/tutorials/send-transactions-using-SDK",title:"\u4f7f\u7528 SDK \u53d1\u9001\u4ea4\u6613",description:"\u5b89\u88c5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/tutorials/send-transactions-using-SDK.md",sourceDirName:"core/tutorials",slug:"/core/tutorials/send-transactions-using-SDK",permalink:"/zh-CN/docs/core/tutorials/send-transactions-using-SDK",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u4f7f\u7528 SDK \u53d1\u9001\u4ea4\u6613"},sidebar:"coreSidebar",previous:{title:"\u63a5\u4e0b\u6765\u662f\uff1f",permalink:"/zh-CN/docs/core/tutorials/getting-started/what-to-do-next"},next:{title:"Learn",permalink:"/zh-CN/docs/category/learn"}},l={},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528 SDK \u53d1\u9001\u4ea4\u6613",id:"\u4f7f\u7528-sdk-\u53d1\u9001\u4ea4\u6613",level:2},{value:"\u5176\u4ed6\u8bed\u8a00\u793a\u4f8b",id:"\u5176\u4ed6\u8bed\u8a00\u793a\u4f8b",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm install js-conflux-sdk")),(0,a.kt)("h2",{id:"\u4f7f\u7528-sdk-\u53d1\u9001\u4ea4\u6613"},"\u4f7f\u7528 SDK \u53d1\u9001\u4ea4\u6613"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bfc\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"js-conflux-sdk"),"\u5e76\u8bbe\u7f6e\u4e00\u4e2aConflux provider\u3002 \u5bf9\u4e8eConflux\u6d4b\u8bd5\u7f51\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u63d0\u4f9b\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"https://test.confluxrpc.com"),"\u7684\u8282\u70b9\u3002 \u5b83\u4e5f\u53ef\u4ee5\u6539\u4e3a\u4efb\u4f55\u5176\u4ed6Conflux\u8282\u70b9\uff0c\u751a\u81f3\u662f\u4f60\u81ea\u5df1\u7684\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Conflux, Drip } = require('js-conflux-sdk');\n\nconst conflux = new Conflux({\n  url: 'https://test.confluxrpc.com',\n  logger: console,\n  networkId: 1,\n});\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u4f60\u7684\u79c1\u94a5\u7c98\u8d34\u5230\u7a0b\u5e8f\u4e2d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const PRIVATE_KEY = 'Your Private Key';\n// const PRIVATE_KEY = '0x5f15f9e52fc5ec6f77115a9f306c120a7e80d83115212d33a843bb6b7989c261';\nconst account = conflux.wallet.addPrivateKey(PRIVATE_KEY); // create account instance\nconst receiver = 'cfxtest:aarc9abycue0hhzgyrr53m6cxedgccrmmy8m50bu1p'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ec4\u88c5\u4f60\u7684\u4ea4\u6613\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let txParams = {\n  from: account, // from account instance and will by sign by account.privateKey\n  // nonce\n  // gasPrice\n  // gas\n  to: receiver, // accept address string or account instance\n  value: Drip.fromCFX(0.125), // use the conversion utility function\n  // storageLimit\n  // epochHeight\n  // data\n};\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6bcf\u4e2a\u5b57\u6bb5\u7684\u8be6\u7ec6\u89e3\u91ca\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/core/learn/core-space-basics/transaction_explain"},"\u8fd9\u91cc"),"\u627e\u5230")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"cfx.sendTransaction"),"\u53d1\u9001\u7ec4\u88c5\u5b8c\u6210\u7684\u4ea4\u6613\uff0c\u5e76\u83b7\u5f97\u8fd4\u56de\u7684\u4ea4\u6613\u54c8\u5e0c\u3002 \u7136\u540e\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"tx.mined()"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"tx.executed()"),"\u6765\u67e5\u770b\u4ea4\u6613\u8be6\u60c5\uff0c\u8fd9\u4e9bAPI\u5c06\u5728\u4ea4\u6613\u88ab\u5b8c\u6210\u6216\u6267\u884c\u65f6\u8fd4\u56de\u4ea4\u6613\u6570\u636e\u6216\u4ea4\u6613\u6536\u636e\u3002 \u6ce8\u610f\u8fd9\u4e24\u4e2aAPI\u662f\u5bf9",(0,a.kt)("inlineCode",{parentName:"li"},"cfx.getTransactionByHash"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"cfx.getTransactionReceipt"),"\u7684\u7b80\u5355\u5c01\u88c5\u5c42\u3002 \u4f60\u4e5f\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"li",href:"http://confluxscan.io/"},"Conflux Scan"),"\u4e0a\u641c\u7d22\u54c8\u5e0c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"async function main() {\n  const txHash = await conflux.cfx.sendTransaction(txParams);\n  console.log(txHash);\n  const txData = await txHash.mined()\n  console.log(txData)\n  const txReceipt = await txHash.executed()\n  console.log(txReceipt)\n}\n\nmain().catch(e => console.error(e));\n")),(0,a.kt)("h2",{id:"\u5176\u4ed6\u8bed\u8a00\u793a\u4f8b"},"\u5176\u4ed6\u8bed\u8a00\u793a\u4f8b"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/core/build/sdks-and-tools/sdks"},"SDKs")," for examples of other SDKs."))}d.isMDXComponent=!0}}]);