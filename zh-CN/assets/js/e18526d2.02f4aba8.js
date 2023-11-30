"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6220],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=d(a),s=r,k=m["".concat(o,".").concat(s)]||m[s]||u[s]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7727:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(4137));const l={sidebar_position:2,title:"EVM Compatibility",description:"EVM Compatibility of Conflux eSpace",keywords:["EVM","Compatibility"],displayed_sidebar:"eSpaceSidebar"},i=void 0,p={unversionedId:"espace/build/evm-compatibility",id:"espace/build/evm-compatibility",title:"EVM Compatibility",description:"EVM Compatibility of Conflux eSpace",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/build/evm-compatibility.md",sourceDirName:"espace/build",slug:"/espace/build/evm-compatibility",permalink:"/zh-CN/docs/espace/build/evm-compatibility",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"EVM Compatibility",description:"EVM Compatibility of Conflux eSpace",keywords:["EVM","Compatibility"],displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"CIP-90",permalink:"/zh-CN/docs/espace/build/cip90"},next:{title:"JSON-RPC Compatibility",permalink:"/zh-CN/docs/espace/build/jsonrpc-compatibility"}},o={},d=[{value:"Transaction Type",id:"transaction-type",level:2},{value:"EVM Opcodes",id:"evm-opcodes",level:2},{value:"Block Time",id:"block-time",level:2},{value:"Contract Size",id:"contract-size",level:2},{value:"Transaction Fees",id:"transaction-fees",level:2},{value:"Transaction Gas limit",id:"transaction-gas-limit",level:2},{value:"EVM Precompiles",id:"evm-precompiles",level:2},{value:"Phantom transactions",id:"phantom-transactions",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}],c={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"eSpace \u5b9e\u73b0\u4e86\u4e00\u4e2a\u4ee5\u592a\u574a\u865a\u62df\u673a (EVM)\u3002 \u4ee5\u4e0b\u662f eSpace \u548c\u4ee5\u592a\u574a\u4e4b\u95f4\u7684\u4e00\u4e9b\u533a\u522b\uff1a"),(0,r.kt)("h2",{id:"transaction-type"},"Transaction Type"),(0,r.kt)("p",null,"Currently eSpace only support 155 type transaction. 1559 type transaction is not support."),(0,r.kt)("h2",{id:"evm-opcodes"},"EVM Opcodes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BLOCKHASH")," opcode\u53ea\u80fd\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"NUMBER-1")," \u4f5c\u4e3a\u8f93\u5165\u3002 (Unlike Ethereum, which takes any integer in ",(0,r.kt)("inlineCode",{parentName:"li"},"NUMBER-256")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"NUMBER-1")," as input). This is the only break  opcode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NUMBER")," opcode\u5c06\u8fd4\u56de\u6811\u56fe",(0,r.kt)("inlineCode",{parentName:"li"},"epoch number"),"\u3002 \u56e0\u6b64\uff0c\u5728 eSpace \u5408\u7ea6\u4e2d\u4f7f\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"block.number")," \u4e0d\u4f1a\u4ee5\u7a33\u5b9a\u548c\u53ef\u9884\u6d4b\u7684\u901f\u7387\u589e\u957f\uff0c\u56e0\u6b64\u5b83\u53ef\u80fd\u4e0d\u9002\u5408\u7528\u4e8e\u6d4b\u91cf\u65f6\u95f4\u3002")),(0,r.kt)("h2",{id:"block-time"},"Block Time"),(0,r.kt)("p",null,"Block generate rate is 1.25s per block (mainnet), is same as Core Space Epoch time."),(0,r.kt)("h2",{id:"contract-size"},"Contract Size"),(0,r.kt)("p",null,"\u5408\u7ea6\u6700\u5927\u4ee3\u7801\u5927\u5c0f\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"49152"),"\uff0c\u662f\u4ee5\u592a\u574a\u7684\u4e24\u500d"),(0,r.kt)("h2",{id:"transaction-fees"},"Transaction Fees"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SSTORE")," \u64cd\u4f5c\u7801\u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"SUICIDE")," opcode\u4e2d\u4e0d\u4f1a\u9000\u8fd8gas\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5360\u7528\u5b58\u50a8\u7684\u64cd\u4f5c\u6709\u4e0d\u540c\u7684gas\u6d88\u8017\u3002",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5f53\u5c06\u5b58\u50a8\u6761\u76ee\u4ece\u96f6\u66f4\u6539\u4e3a\u975e\u96f6\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"SSTORE")," \u82b1\u8d39 40000 gas\uff08\u800c\u4ee5\u592a\u574a\u4e2d\u4e3a 20000 gas\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u65b0\u5408\u7ea6\u65f6\uff0c\u6bcf\u4e2a\u5b57\u8282\u82b1\u8d39 400 gas\uff08\u800c\u4ee5\u592a\u574a\u4e2d\u4e3a 200 gas\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"CALL")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"SUICIDE")," \u521b\u5efa\u65b0\u8d26\u6237\u65f6\uff0c\u8be5\u64cd\u4f5c\u6d88\u8017 50000 gas\uff08\u800c\u4ee5\u592a\u574a\u4e2d\u4e3a 25000 gas\uff09\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u6700\u591a ",(0,r.kt)("inlineCode",{parentName:"li"},"1/4")," \u7684\u4ea4\u6613 ",(0,r.kt)("inlineCode",{parentName:"li"},"gasLimit")," \u53ef\u4ee5\u88ab\u9000\u8fd8\uff08\u5982\u679c\u672a\u4f7f\u7528\uff09")),(0,r.kt)("h2",{id:"transaction-gas-limit"},"Transaction Gas limit"),(0,r.kt)("p",null,"\u53ea\u6709\u533a\u5757\u9ad8\u5ea6\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," \u7684\u500d\u6570\u7684\u533a\u5757\u624d\u80fd\u6253\u5305\u4ee5\u592a\u574a\u7c7b\u578b\u7684\u4ea4\u6613\u3002 \u8fd9\u4e9b\u4ea4\u6613\u7684\u603bgas limit\u4e0d\u80fd\u8d85\u8fc7\u533a\u5757gas limit\u7684\u4e00\u534a\uff081500w\uff09\u3002"),(0,r.kt)("h2",{id:"evm-precompiles"},"EVM Precompiles"),(0,r.kt)("p",null,"All standard precompiles are supported."),(0,r.kt)("div",{class:"compat-evm-precompiles-table"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Address"),(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Spec"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x01"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ECRecover")),(0,r.kt)("td",{parentName:"tr",align:null},"ECDSA public key recovery"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ethereum.github.io/yellowpaper/paper.pdf"},"Yellow Paper")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x02"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SHA256")),(0,r.kt)("td",{parentName:"tr",align:null},"SHA-2 256-bit hash function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ethereum.github.io/yellowpaper/paper.pdf"},"Yellow Paper")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x03"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RIPEMD160")),(0,r.kt)("td",{parentName:"tr",align:null},"RIPEMD 160-bit hash function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ethereum.github.io/yellowpaper/paper.pdf"},"Yellow Paper")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x04"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Identity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identity function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ethereum.github.io/yellowpaper/paper.pdf"},"Yellow Paper")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x05"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ModExp")),(0,r.kt)("td",{parentName:"tr",align:null},"Big integer modular exponentiation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-198"},"EIP-198")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x06"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BN128Add")),(0,r.kt)("td",{parentName:"tr",align:null},"Elliptic curve addition"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-196"},"EIP-196")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x07"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BN128Mul")),(0,r.kt)("td",{parentName:"tr",align:null},"Elliptic curve scalar multiplication"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-196"},"EIP-196")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x08"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BN128Pair")),(0,r.kt)("td",{parentName:"tr",align:null},"Elliptic curve pairing check"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-197"},"EIP-197")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x09"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Blake2F")),(0,r.kt)("td",{parentName:"tr",align:null},"BLAKE2b ",(0,r.kt)("inlineCode",{parentName:"td"},"F")," compression function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-152"},"EIP-152")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h2",{id:"phantom-transactions"},"Phantom transactions"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u8de8\u7a7a\u95f4\u4ea4\u6613"),"\u662f Conflux Core Space\u4e2d\u7684\u4e00\u79cd\u4ea4\u6613\uff0c\u5728\u5176\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u8c03\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall")," \u5185\u90e8\u5408\u7ea6\u7684\u4e00\u4e2a\u72b6\u6001\u6539\u53d8\uff08\u5373\u975e",(0,r.kt)("inlineCode",{parentName:"p"},"\u53ea\u8bfb/view"),"\uff09\u65b9\u6cd5\u3002 \u8fd9\u6837\u7684\u4ea4\u6613\u53ef\u4ee5\u5728Core Space\u548ceSpace\u4e2d\u66f4\u6539 CFX \u7684\u4f59\u989d\u548c\u5408\u7ea6\u5b58\u50a8\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e EVM \u5ba2\u6237\u7aef\u4e0d\u77e5\u9053 Conflux \u7a7a\u95f4\u4ea4\u6613\uff08\u4e24\u4e2a\u7a7a\u95f4\u4f7f\u7528\u4e0d\u540c\u7684\u4ea4\u6613\u683c\u5f0f\uff09\uff0c\u56e0\u6b64\u6211\u4eec\u4e3a\u6bcf\u6b21\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall")," \u5185\u90e8\u5408\u7ea6\u7684\u8c03\u7528\u6784\u9020\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,r.kt)("em",{parentName:"p"},"phantom")," \u4ea4\u6613\uff08\u4e5f\u79f0\u4e3a ",(0,r.kt)("em",{parentName:"p"},"\u865a\u62df")," \u4ea4\u6613\uff09\u3002 \u8fd9\u4e9b phantom \u4ea4\u6613\u6e90\u81ea\u76f8\u5e94\u7684 Core Space \u4ea4\u6613\uff0c\u5b83\u4eec\u5e76\u4e0d\u5b58\u5728\u4e8e\u8d26\u672c\u4e2d\u3002 Phantom \u4ea4\u6613\u5177\u6709\u4ee5\u4e0b\u7279\u6b8a\u5c5e\u6027\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5176\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"gas")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"gasPrice")," \u503c\u5747\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"\u3002 \u8de8\u7a7a\u95f4\u4ea4\u6613\u7684 gas \u8d39\u7528\u5c06\u5728Core Space\u4e2d\u6536\u53d6\u3002 \u56e0\u6b64\uff0c\u76f8\u5e94\u7684 phantom \u4ea4\u6613\u4e0d\u4f1a\u6d88\u8017\u4efb\u4f55 gas\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u6548\u7684\u7b7e\u540d\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"r"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"s"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"v"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"standardV"),"\uff09\u3002 Conflux \u534f\u8bae\u65e0\u6cd5\u4ee3\u8868\u8de8\u7a7a\u95f4\u4ea4\u6613\u7684\u53d1\u9001\u8005\u7b7e\u540d\u4ea4\u6613\u3002 \u56e0\u6b64\uff0cphantom \u4ea4\u6613\u4f7f\u7528\u4e00\u4e2a\u4f2a\u9020\u7684\u7b7e\u540d\uff0c\u800c\u8fd9\u4e2a\u7b7e\u540d\u65e0\u6cd5\u901a\u8fc7 ECDSA \u9a8c\u8bc1\u3002")),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u5728 Conflux Core Space\u4e2d\u68c0\u7d22 epoch ",(0,r.kt)("inlineCode",{parentName:"p"},"0x72819")," \u65f6\uff0c\u6211\u4eec\u4f1a\u770b\u5230\u5b83\u5305\u542b\u4e00\u4e2a\u5355\u72ec\u7684 Conflux \u4ea4\u6613\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cfx_getBlockByEpochNumber(0x72819, true)\n\n{\n  "epochNumber": "0x72819",\n  "hash": "0x7440c9e8ebb2e87a7d187e4ad6d09027d860b3948cf4364bb883c028b6c3a858",\n  "transactions": [\n    {\n      "hash": "0xe89ef4b61434ec331b621b8687033f9e4058e76759a3522bdc50e0cb358f505e",\n      "blockHash": "0x7440c9e8ebb2e87a7d187e4ad6d09027d860b3948cf4364bb883c028b6c3a858",\n      "from": "NET8888:TYPE.USER:AAJFT5SK5RGK2KTJPMPUEJ69989N15KCCY7JAJEUP2",\n      "to": "NET8888:TYPE.CONTRACT:ACAP3N9KXZ7C4TU5NUU8G65FJ7A09MG1FY77ZAYSVW",\n      "gasPrice": "0x1",\n      "gas": "0x8b28d",\n      "storageLimit": "0x54",\n      "r": "0x2b943e84111cd5f95fbdf15667329ac546c9e5b99548d3c3702aeced4f07de6d",\n      "s": "0x2f47ae3c15ec2d1cbcf5bde3870aa21e1df54e8b7b926840a54faa9951cb3321",\n      "v": "0x0",\n      ...\n    }\n  ],\n  ...\n}\n')),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u5728eSpace\u4e2d\u68c0\u7d22\u76f8\u5e94\u7684\u533a\u5757\u65f6\uff0c\u6211\u4eec\u4f1a\u770b\u5230\u5b83\u5305\u542b\u4e24\u4e2a phantom \u4ea4\u6613\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'eth_getBlockByNumber(0x72819, true)\n\n{\n  "hash": "0x7440c9e8ebb2e87a7d187e4ad6d09027d860b3948cf4364bb883c028b6c3a858",\n  "number": "0x72819",\n  "transactions": [\n    {\n      "hash": "0xfcdcf304b6b9dc263625b0924efaf3a7eb7044a17d27c0b8d631025b55d1147e",\n      "blockHash": "0x7440c9e8ebb2e87a7d187e4ad6d09027d860b3948cf4364bb883c028b6c3a858",\n      "from": "0x0000000000000000000000000000000000000000",\n      "to": "0xf709629eee416c2d2a53692d38f1568538d8022f",\n      "gasPrice": "0x0",\n      "gas": "0x0",\n      "r": "0x1",\n      "s": "0x1",\n      "v": "0x4593",\n      ...\n    },\n    {\n      "hash": "0xca2f5c5848458bea556f99e626db7108377d600e24add1920c4106358a1a5502",\n      "blockHash": "0x7440c9e8ebb2e87a7d187e4ad6d09027d860b3948cf4364bb883c028b6c3a858",\n      "from": "0xf709629eee416c2d2a53692d38f1568538d8022f",\n      "to": "0xdacf3af269b55ece5fe3239626a27f2a76c48245",\n      "gasPrice": "0x0",\n      "gas": "0x0",\n      "r": "0x1",\n      "s": "0x1",\n      "v": "0x4593",\n      ...\n    }\n  ],\n  ...\n}\n')))}u.isMDXComponent=!0}}]);