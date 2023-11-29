"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7119],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var o=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=l,k=u["".concat(c,".").concat(f)]||u[f]||d[f]||r;return t?o.createElement(k,a(a({ref:n},p),{},{components:t})):o.createElement(k,a({ref:n},p))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,a=new Array(r);a[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<r;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1427:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=t(7462),l=(t(7294),t(4137));const r={sidebar_position:1,title:"SDKs"},a=void 0,i={unversionedId:"core/build/sdks-and-tools/sdks",id:"core/build/sdks-and-tools/sdks",title:"SDKs",description:"Conflux \u6709\u7528\u4e8e\u4e3b\u6d41\u7f16\u7a0b\u8bed\u8a00\u7684 SDK\uff0c\u5305\u62ec JavaScript, Golang, Java \u548c Python\u3002 \u672c\u6587\u4e3a\u5bf9SDK\u7684\u7b80\u77ed\u4ecb\u7ecd\uff0c\u8be6\u7ec6\u7684\u4f7f\u7528\u8bf4\u660e\u8bf7\u67e5\u770bSDK\u5404\u81ea\u7684\u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/build/sdks-and-tools/sdks.md",sourceDirName:"core/build/sdks-and-tools",slug:"/core/build/sdks-and-tools/sdks",permalink:"/zh-CN/docs/core/build/sdks-and-tools/sdks",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SDKs"},sidebar:"references",previous:{title:"Network RPC Endpoints",permalink:"/zh-CN/docs/espace/network-endpoints"},next:{title:"Tools",permalink:"/zh-CN/docs/core/build/sdks-and-tools/tools"}},c={},s=[{value:"\u5b98\u65b9SDK",id:"\u5b98\u65b9sdk",level:2},{value:"js-conflux-sdk",id:"js-conflux-sdk",level:3},{value:"go-conflux-sdk",id:"go-conflux-sdk",level:3},{value:"java-conflux-sdk",id:"java-conflux-sdk",level:3},{value:"python-conflux-sdk",id:"python-conflux-sdk",level:3},{value:"Solidity SDKs",id:"solidity-sdks",level:2},{value:"thirdweb Solidity SDK",id:"thirdweb-solidity-sdk",level:3},{value:"Conflux-contracts",id:"conflux-contracts",level:3},{value:"OpenZeppelin",id:"openzeppelin",level:3},{value:"\u793e\u533a\u5f00\u53d1\u7684 SDK",id:"\u793e\u533a\u5f00\u53d1\u7684-sdk",level:2},{value:"thirdweb SDK",id:"thirdweb-sdk",level:3},{value:"cpp-conflux-sdk",id:"cpp-conflux-sdk",level:3},{value:".NET SDK",id:"net-sdk",level:3},{value:"Swift SDK",id:"swift-sdk",level:3}],p={toc:s},u="wrapper";function d(e){let{components:n,...r}=e;return(0,l.kt)(u,(0,o.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Conflux \u6709\u7528\u4e8e\u4e3b\u6d41\u7f16\u7a0b\u8bed\u8a00\u7684 SDK\uff0c\u5305\u62ec ",(0,l.kt)("inlineCode",{parentName:"p"},"JavaScript"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Golang"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Java")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Python"),"\u3002 \u672c\u6587\u4e3a\u5bf9SDK\u7684\u7b80\u77ed\u4ecb\u7ecd\uff0c\u8be6\u7ec6\u7684\u4f7f\u7528\u8bf4\u660e\u8bf7\u67e5\u770bSDK\u5404\u81ea\u7684\u6587\u6863\u3002"),(0,l.kt)("h2",{id:"\u5b98\u65b9sdk"},"\u5b98\u65b9SDK"),(0,l.kt)("h3",{id:"js-conflux-sdk"},(0,l.kt)("a",{parentName:"h3",href:"https://confluxnetwork.gitbook.io/js-conflux-sdk/"},"js-conflux-sdk")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u719f\u6089 JavaScript \u6216 Node.js\uff0c\u6216\u8005\u60f3\u8981\u6784\u5efa\u4e00\u4e2a\u4e0e\u60a8\u7684\u5408\u7ea6\u4ea4\u4e92\u7684\u7f51\u7ad9\uff0c\u90a3\u4e48 ",(0,l.kt)("inlineCode",{parentName:"p"},"js-conflux-sdk")," \u662f\u9002\u5408\u60a8\u7684\u5de5\u5177\u3002 \u5b83\u5177\u6709\u8bb8\u591a\u6709\u7528\u7684\u529f\u80fd\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const { Conflux } = require("js-conflux-sdk");\n\nasync function main() {\n  let conflux = new Conflux({\n    url: "https://test.confluxrpc.com",\n    networkId: 1,\n  });\n\n  let balance = await conflux.cfx.getBalance(\n    "cfxtest:aakkfzezns4h8ymx1cgmcnd4x3aev6e2he38nnu8sv"\n  );\n  console.log("balance: ", balance);\n}\n\nmain().catch(console.log);\n')),(0,l.kt)("h3",{id:"go-conflux-sdk"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/conflux-chain/go-conflux-sdk"},"go-conflux-sdk")),(0,l.kt)("p",null,"Go \u8bed\u8a00\u662f\u4e00\u79cd\u5f88\u68d2\u7684\u7f16\u7a0b\u8bed\u8a00\uff1a\u5b83\u8fd0\u884c\u901f\u5ea6\u5feb\uff0c\u6613\u4e8e\u4f7f\u7528\uff0c\u4e14\u975e\u5e38\u7a33\u5b9a\u3002 \u5728\u533a\u5757\u94fe\u9886\u57df\uff0c\u8bb8\u591a\u9879\u76ee\u6b63\u5728\u4f7f\u7528 Go \u8fdb\u884c\u5f00\u53d1\u3002 \u5982\u679c\u60a8\u60f3\u8981\u5f00\u53d1\u4e00\u4e2a\u9700\u8981\u4e0e Conflux \u7f51\u7edc\u901a\u4fe1\u7684\u540e\u7aef\u670d\u52a1\uff0c\u90a3\u4e48 ",(0,l.kt)("inlineCode",{parentName:"p"},"go-conflux-sdk")," \u662f\u9002\u5408\u60a8\u7684\u5de5\u5177\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    conflux "github.com/Conflux-Chain/go-conflux-sdk"\n)\n\nfunc main() {\n    client, err := conflux.NewClient("https://test.confluxrpc.com")\n    if err != nil {\n        fmt.Println("failed to create client:", err)\n        return\n    }\n    defer client.Close()\n\n    epoch, err := client.GetEpochNumber()\n    if err != nil {\n        fmt.Println("failed to get epoch number:", err)\n        return\n    }\n\n    fmt.Println("Current epoch number:", epoch)\n}\n\n')),(0,l.kt)("h3",{id:"java-conflux-sdk"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/conflux-chain/java-conflux-sdk"},"java-conflux-sdk")),(0,l.kt)("p",null,"Java \u662f\u4e00\u4e2a\u7ecf\u4e45\u4e0d\u8870\u7684\u7f16\u7a0b\u8bed\u8a00\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"java-conflux-sdk")," \u53ef\u4ee5\u7528\u4e8e\u4e0e Conflux \u8282\u70b9\u8fdb\u884c\u901a\u4fe1\u3002 \u5b83\u662f\u4ece ",(0,l.kt)("a",{parentName:"p",href:"https://docs.web3j.io/"},"web3j")," \u5e93\u8fdb\u5316\u800c\u6765\u7684\u3002 web3j \u7684\u4e00\u4e9b\u5de5\u5177\u51fd\u6570\u540c\u6837\u4e5f\u9002\u7528\u4e8e Conflux network\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package conflux.sdk.examples;\nimport java.math.BigInteger;\nimport conflux.web3j.Cfx;\n\npublic class App {\n  public static void main(String[] args) throws Exception {\n    int retry = 3;\n    int intervalMills = 1000;  // interval(milliseconds) between retry\n    Cfx cfx = Cfx.create("https://test.confluxrpc.com", retry, intervalMills);\n    BigInteger epoch = cfx.getEpochNumber().sendAndGet();\n    System.out.println("Current epoch: " + epoch);\n  }\n}\n')),(0,l.kt)("h3",{id:"python-conflux-sdk"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/conflux-chain/python-conflux-sdk"},"python-conflux-sdk")),(0,l.kt)("p",null,"Python \u662f\u5f88\u591a\u5f00\u53d1\u8005\u7684\u9996\u9009\u8bed\u8a00\uff0c\u6211\u4eec\u4e5f\u4e3a\u60a8\u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"python-conflux-sdk")," \u5de5\u5177\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from conflux import (\n    Conflux,\n    HTTPProvider,\n)\nprovider = HTTPProvider('https://test.confluxrpc.com')\nc = Conflux(provider)\n\n# get RPC's clientVersion\nprint(c.clientVersion)\n\ntest_address = 'cfxtest:aak7fsws4u4yf38fk870218p1h3gxut3ku00u1k1da'\nbalance = c.cfx.getBalance(test_address)\nprint(balance)\n")),(0,l.kt)("h2",{id:"solidity-sdks"},"Solidity SDKs"),(0,l.kt)("h3",{id:"thirdweb-solidity-sdk"},(0,l.kt)("a",{parentName:"h3",href:"https://portal.thirdweb.com/solidity"},"thirdweb Solidity SDK")),(0,l.kt)("p",null,"This SDK provides the tools needed to build custom smart contracts efficiently by offering a set of prebuilt base contracts and a set of reusable components, or extensions, that can be integrated into your own smart contracts."),(0,l.kt)("h3",{id:"conflux-contracts"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/conflux-fans/conflux-contracts"},"Conflux-contracts")),(0,l.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a Solidity package\uff0c\u5305\u542b\u4e86 Conflux DAPP \u5f00\u53d1\u4e2d\u5e38\u7528\u7684\u6709\u7528\u5408\u7ea6\u3002 \u8fd9\u4e2a\u5305\u7c7b\u4f3c\u4e8e OpenZeppelin \u76ee\u524d\u6700\u5e38\u7528\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Conflux InternalContracts"),"\u3002"),(0,l.kt)("h3",{id:"openzeppelin"},(0,l.kt)("a",{parentName:"h3",href:"https://docs.openzeppelin.com/contracts/4.x/"},"OpenZeppelin")),(0,l.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u8457\u540d\u7684\u5b89\u5168\u667a\u80fd\u5408\u7ea6\u5f00\u53d1\u5e93\u3002 \u8be5\u5e93\u6784\u5efa\u5728\u793e\u533a\u5ba1\u67e5\u7684\u4ee3\u7801\u57fa\u7840\u4e0a\uff0c\u57fa\u7840\u575a\u5b9e\u53ef\u9760\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86 ERC20 \u548c ERC721 \u7b49\u6807\u51c6"),(0,l.kt)("li",{parentName:"ul"},"\u5177\u6709\u7075\u6d3b\u7684\u57fa\u4e8e\u89d2\u8272\u7684\u6743\u9650\u63a7\u5236\u65b9\u6848\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u53ef\u91cd\u7528\u7684 Solidity \u7ec4\u4ef6\uff0c\u53ef\u7528\u4e8e\u6784\u5efa\u81ea\u5b9a\u4e49\u5408\u7ea6\u548c\u590d\u6742\u7684\u5206\u5e03\u5f0f\u7cfb\u7edf\u3002")),(0,l.kt)("h2",{id:"\u793e\u533a\u5f00\u53d1\u7684-sdk"},"\u793e\u533a\u5f00\u53d1\u7684 SDK"),(0,l.kt)("h3",{id:"thirdweb-sdk"},(0,l.kt)("a",{parentName:"h3",href:"https://portal.thirdweb.com/sdk"},"thirdweb SDK")),(0,l.kt)("p",null,"SDK\u8986\u76d6\u4e86Web3\u5f00\u53d1\u5806\u6808\u7684\u5404\u4e2a\u65b9\u9762\uff0c\u5305\u62ec\u8fde\u63a5\u7528\u6237\u94b1\u5305\u3001\u4e0e\u533a\u5757\u94fe\u548c\u667a\u80fd\u5408\u7ea6\u4ea4\u4e92\u3001\u53bb\u4e2d\u5fc3\u5316\u5b58\u50a8\u3001\u8eab\u4efd\u9a8c\u8bc1\u7b49\uff0c\u4f7f\u60a8\u80fd\u591f\u5728\u4efb\u4f55EVM\u517c\u5bb9\u7684\u533a\u5757\u94fe\u4e0a\u6784\u5efa\u53ef\u6269\u5c55\u4e14\u9ad8\u6027\u80fd\u7684Web3\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,l.kt)("h3",{id:"cpp-conflux-sdk"},(0,l.kt)("a",{parentName:"h3",href:"https://csyangbinbin.github.io/cpp-conflux-sdk/"},"cpp-conflux-sdk")),(0,l.kt)("p",null,"Conflux C++ API \u5141\u8bb8\u4efb\u4f55 C++ \u5ba2\u6237\u7aef\u57fa\u4e8e JSON-RPC 2.0 \u534f\u8bae\u4e0e\u672c\u5730\u6216\u8fdc\u7a0b\u7684 Conflux \u8282\u70b9\u8fdb\u884c\u4ea4\u4e92\u3002 \u4f7f\u7528 Conflux C++ API\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u7ba1\u7406\u8d26\u6237\u3001\u53d1\u9001\u4ea4\u6613\u3001\u90e8\u7f72\u667a\u80fd\u5408\u7ea6\u548c\u67e5\u8be2\u533a\u5757\u94fe\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"CPP-SDK",src:t(2533).Z,width:"1350",height:"1034"})),(0,l.kt)("h3",{id:"net-sdk"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/Nconflux/Conflux.net.SDK"},".NET SDK")),(0,l.kt)("p",null,"Nconflux \u662f Conflux \u7684 .Net \u96c6\u6210\u5e93\uff0c\u7b80\u5316\u4e86\u4e0e Conflux \u8282\u70b9\u7684\u8bbf\u95ee\u548c\u667a\u80fd\u5408\u7ea6\u4ea4\u4e92\u3002"),(0,l.kt)("p",null,"Nconflux \u662f\u9488\u5bf9 netcore 3.1 \u548c .net 5 \u5f00\u53d1\u7684\uff0c\u56e0\u6b64\u4e0e\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff08Windows\u3001Linux\u3001MacOS\u3001Android \u548c OSX\uff09\u517c\u5bb9\uff0c\u5e76\u5df2\u5728\u4e91\u3001\u79fb\u52a8\u8bbe\u5907\u3001\u684c\u9762\u3001Xbox\u3001Hololens \u548c Windows IoT \u4e0a\u8fdb\u884c\u4e86\u6d4b\u8bd5\u3002"),(0,l.kt)("h3",{id:"swift-sdk"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/Conflux-Chain/swift-conflux-wallet-sdk"},"Swift SDK")))}d.isMDXComponent=!0},2533:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/CPP-SDK-shot-770c42fdeeafccff6890ad2ff1b1087e.png"}}]);