"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[944],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>g});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?t.createElement(g,i(i({ref:n},d),{},{components:a})):t.createElement(g,i({ref:n},d))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72528:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=a(87462),r=(a(67294),a(3905));const o={title:"cfx_sendRawTransaction Errors",sidebar_position:7,description:"Common errors of cfx_sendRawTransaction",displayed_sidebar:"coreSidebar"},i=void 0,s={unversionedId:"core/build/json-rpc/cfx_sendTransaction-errors",id:"core/build/json-rpc/cfx_sendTransaction-errors",title:"cfx_sendRawTransaction Errors",description:"Common errors of cfx_sendRawTransaction",source:"@site/docs/core/build/json-rpc/cfx_sendTransaction-errors.md",sourceDirName:"core/build/json-rpc",slug:"/core/build/json-rpc/cfx_sendTransaction-errors",permalink:"/es/docs/core/build/json-rpc/cfx_sendTransaction-errors",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"cfx_sendRawTransaction Errors",sidebar_position:7,description:"Common errors of cfx_sendRawTransaction",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"trace Namespace",permalink:"/es/docs/core/build/json-rpc/trace_rpc"},next:{title:"Publish-Subscribe API",permalink:"/es/docs/core/build/json-rpc/pubsub"}},l={},c=[{value:"Balance not enough",id:"balance-not-enough",level:2},{value:"Nonce Errors",id:"nonce-errors",level:2},{value:"Using an already executed nonce",id:"using-an-already-executed-nonce",level:3},{value:"Using a nonce already sent to the transaction pool",id:"using-a-nonce-already-sent-to-the-transaction-pool",level:3},{value:"Using a too large nonce",id:"using-a-too-large-nonce",level:3},{value:"Gas-related Issues",id:"gas-related-issues",level:2},{value:"Gas too small (<code>&lt;21000</code>) or too large (<code>&gt;15m</code>)",id:"gas-too-small-21000-or-too-large-15m",level:3},{value:"Invalid gasPrice",id:"invalid-gasprice",level:2},{value:"Gas price set to 0",id:"gas-price-set-to-0",level:3},{value:"Gas price smaller than minimum gas price",id:"gas-price-smaller-than-minimum-gas-price",level:3},{value:"Data Size Limit Exceeded",id:"data-size-limit-exceeded",level:2},{value:"Incorrect epochHeight",id:"incorrect-epochheight",level:2},{value:"Mismatched chainId",id:"mismatched-chainid",level:2},{value:"Encoding or Signature Errors",id:"encoding-or-signature-errors",level:2},{value:"Full Transaction Pool",id:"full-transaction-pool",level:2},{value:"Node in Catch-up Mode",id:"node-in-catch-up-mode",level:2},{value:"Internal Error",id:"internal-error",level:2},{value:"Execution Failure",id:"execution-failure",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When sending transactions in Conflux Core Space via the ",(0,r.kt)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction")," method, certain errors may arise due to incorrect transaction construction or other issues. This guide covers common errors and their solutions."),(0,r.kt)("h2",{id:"balance-not-enough"},"Balance not enough"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"Transaction 0xf34740b7f033b13b8670df91f24537e756700a32f17e5e09a7d297701cec6859 is discarded due to out of balance, needs 9000000000420000000000000 but account balance is 90095849479680000000000\\""\n    }\n}\n')),(0,r.kt)("h2",{id:"nonce-errors"},"Nonce Errors"),(0,r.kt)("h3",{id:"using-an-already-executed-nonce"},"Using an already executed nonce"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"Transaction 0x4a2cfa73267139d965ab86d41f2af16db09e62ff92a5abffd7f8e743f36f327c is discarded due to a too stale nonce\\""\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution:")," Change the nonce to the first unused one."),(0,r.kt)("h3",{id:"using-a-nonce-already-sent-to-the-transaction-pool"},"Using a nonce already sent to the transaction pool"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"tx already exist\\""\n    }\n  }\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Tx with same nonce already inserted. to replace it, you need to specify a gas price > {}"\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution:")," The transaction has already been sent to the transaction pool. To update or replace it, use the same nonce, modify the corresponding field, and resend it with a higher gasPrice value."),(0,r.kt)("h3",{id:"using-a-too-large-nonce"},"Using a too large nonce"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data":"\\"Transaction 0xc875a03e1ce01268931a1a428d8f8313714ab5eb9c2b626bd327af7e5c3e8c03 is discarded due to in too distant future\\""\n    }\n  }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution:")," Change the nonce to the first unused one."),(0,r.kt)("h2",{id:"gas-related-issues"},"Gas-related Issues"),(0,r.kt)("h3",{id:"gas-too-small-21000-or-too-large-15m"},"Gas too small (",(0,r.kt)("inlineCode",{parentName:"h3"},"<21000"),") or too large (",(0,r.kt)("inlineCode",{parentName:"h3"},">15m"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"NotEnoughBaseGas { required: 21000, got: 2000 }\\""\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution:")," Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"gas")," field to the right one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"transaction gas 20000000 exceeds the maximum value 15000000, the half of pivot block gas limit\\""\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution:")," Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"gas")," field to a smaller one. The maximum value is 15 million."),(0,r.kt)("h2",{id:"invalid-gasprice"},"Invalid gasPrice"),(0,r.kt)("h3",{id:"gas-price-set-to-0"},"Gas price set to 0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": { \n      "code": -32602,\n      "message": "Invalid parameters: tx", \n      "data": "\\"ZeroGasPrice\\"" \n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution:")," Use return value from ",(0,r.kt)("inlineCode",{parentName:"p"},"cfx_gasPrice")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"gasPrice")),(0,r.kt)("h3",{id:"gas-price-smaller-than-minimum-gas-price"},"Gas price smaller than minimum gas price"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"transaction gas price 1 less than the minimum value 20000000000\\""\n    }\n}\n')),(0,r.kt)("h2",{id:"data-size-limit-exceeded"},"Data Size Limit Exceeded"),(0,r.kt)("p",null,"The transaction has a size limit, with the maximum being 200k."),(0,r.kt)("h2",{id:"incorrect-epochheight"},"Incorrect epochHeight"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"EpochHeightOutOfBound { block_height: 53800739, set: 0, transaction_epoch_bound: 100000 }\\""\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution:")," Use return value from ",(0,r.kt)("inlineCode",{parentName:"p"},"cfx_epochNumber")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"epochHight")),(0,r.kt)("h2",{id:"mismatched-chainid"},"Mismatched chainId"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"ChainIdMismatch { expected: 1, got: 2 }\\""\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution:")," Use ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId")," field from return value from ",(0,r.kt)("inlineCode",{parentName:"p"},"cfx_status")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId")),(0,r.kt)("h2",{id:"encoding-or-signature-errors"},"Encoding or Signature Errors"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: raw",\n        "data": "\\"RlpIncorrectListLen\\""\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: raw",\n        "data": "\\"RlpExpectedToBeList\\""\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Can not recover pubkey for Ethereum like tx"\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution:")," Making sure you are using the SDK in the right way"),(0,r.kt)("h2",{id:"full-transaction-pool"},"Full Transaction Pool"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "txpool is full"\n    }\n}\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Failed imported to deferred pool: Transaction Pool is full"\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution:")," Wait for a while to resend the transaction and increase the gasPrice of the transaction to improve the chances of sending."),(0,r.kt)("h2",{id:"node-in-catch-up-mode"},"Node in Catch-up Mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32077,\n        "message": "Request rejected due to still in the catch up mode",\n        "data": null\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution:")," Wait for the node data to sync to the latest before sending."),(0,r.kt)("h2",{id:"internal-error"},"Internal Error"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Failed to read account_cache from storage: {}"\n    }\n}\n')),(0,r.kt)("h2",{id:"execution-failure"},"Execution Failure"),(0,r.kt)("p",null,"Execution failures can be due to errors that occurred during the contract execution process or errors returned when estimating gas cost through the estimate interface. To find the specific reason for the transaction failure, check the ",(0,r.kt)("inlineCode",{parentName:"p"},"txExecErrorMsg")," under the receipt:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"VmError(OutOfGas)"),": The transaction specified gas fee is not enough."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"VmError(ExceedStorageLimit)"),": The transaction specified upper-limit storage is not enough."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"NotEnoughCash"),": Insufficient user balance."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Vm reverted, Reason provided by the contract: xxxx"),": The contract execution failed with details provided."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"VmError(BadInstruction xxxx)"),": Contract deployment failed."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Vm reverted, xxxx"),": The contract execution failed with no details provided.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution:")," Depending on the specific error message, you may need to adjust the gas fee, increase the storage limit, ensure sufficient balance, or debug the contract code to identify and fix the issues causing the failure."),(0,r.kt)("p",null,"Remember that when handling transaction errors, it's essential to identify the root cause of the error and apply the appropriate solution. In most cases, modifying transaction parameters, waiting for node synchronization, or debugging the contract code can help resolve the issues."))}u.isMDXComponent=!0}}]);