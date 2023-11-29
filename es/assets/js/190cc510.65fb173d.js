"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5864],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(4137));const o={sidebar_position:2,title:"Send Transactions Using SDKs"},s=void 0,i={unversionedId:"core/tutorials/send-transactions-using-SDK",id:"core/tutorials/send-transactions-using-SDK",title:"Send Transactions Using SDKs",description:"Installation",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/core/tutorials/send-transactions-using-SDK.md",sourceDirName:"core/tutorials",slug:"/core/tutorials/send-transactions-using-SDK",permalink:"/es/docs/core/tutorials/send-transactions-using-SDK",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Send Transactions Using SDKs"},sidebar:"coreSidebar",previous:{title:"What to Do Next?",permalink:"/es/docs/core/tutorials/getting-started/what-to-do-next"},next:{title:"Learn",permalink:"/es/docs/category/learn"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Send transaction using SDK",id:"send-transaction-using-sdk",level:2},{value:"Other language examples",id:"other-language-examples",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm install js-conflux-sdk")),(0,r.kt)("h2",{id:"send-transaction-using-sdk"},"Send transaction using SDK"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Import ",(0,r.kt)("inlineCode",{parentName:"li"},"js-conflux-sdk")," and set a Conflux provider. For the Conflux test-net, there is a node provided at ",(0,r.kt)("inlineCode",{parentName:"li"},"https://test.confluxrpc.com"),". It can also be changed to any other Conflux node, even your own.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Conflux, Drip } = require('js-conflux-sdk');\n\nconst conflux = new Conflux({\n  url: 'https://test.confluxrpc.com',\n  logger: console,\n  networkId: 1,\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Paste your private key into the program")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const PRIVATE_KEY = 'Your Private Key';\n// const PRIVATE_KEY = '0x5f15f9e52fc5ec6f77115a9f306c120a7e80d83115212d33a843bb6b7989c261';\nconst account = conflux.wallet.addPrivateKey(PRIVATE_KEY); // create account instance\nconst receiver = 'cfxtest:aarc9abycue0hhzgyrr53m6cxedgccrmmy8m50bu1p'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compose your transaction:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let txParams = {\n  from: account, // from account instance and will by sign by account.privateKey\n  // nonce\n  // gasPrice\n  // gas\n  to: receiver, // accept address string or account instance\n  value: Drip.fromCFX(0.125), // use the conversion utility function\n  // storageLimit\n  // epochHeight\n  // data\n};\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The detailed explanation of each field can be found ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/core/learn/core-space-basics/transaction_explain"},"here"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Send the composed transaction via ",(0,r.kt)("inlineCode",{parentName:"li"},"cfx.sendTransaction")," and get the returned transaction hash. Then you can view the transaction details by using ",(0,r.kt)("inlineCode",{parentName:"li"},"tx.mined()")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"tx.executed()"),", which APIs will return the transaction data or transaction receipt when transaction is mined or executed. Noting these 2 APIs are a simple wrapping layer for ",(0,r.kt)("inlineCode",{parentName:"li"},"cfx.getTransactionByHash")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"cfx.getTransactionReceipt"),". You can also search the hash at ",(0,r.kt)("a",{parentName:"li",href:"http://confluxscan.io/"},"Conflux Scan"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function main() {\n  const txHash = await conflux.cfx.sendTransaction(txParams);\n  console.log(txHash);\n  const txData = await txHash.mined()\n  console.log(txData)\n  const txReceipt = await txHash.executed()\n  console.log(txReceipt)\n}\n\nmain().catch(e => console.error(e));\n")),(0,r.kt)("h2",{id:"other-language-examples"},"Other language examples"),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/core/build/sdks-and-tools/sdks"},"SDKs")," for examples of other SDKs."))}d.isMDXComponent=!0}}]);