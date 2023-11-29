"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8606],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(4137));const a={sidebar_position:2,title:"Contract Verification",description:"How to verify your smart contracts on ConfluxScan"},i=void 0,c={unversionedId:"espace/tutorials/VerifyContracts",id:"espace/tutorials/VerifyContracts",title:"Contract Verification",description:"How to verify your smart contracts on ConfluxScan",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/tutorials/VerifyContracts.md",sourceDirName:"espace/tutorials",slug:"/espace/tutorials/VerifyContracts",permalink:"/zh-CN/docs/espace/tutorials/VerifyContracts",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Contract Verification",description:"How to verify your smart contracts on ConfluxScan"},sidebar:"eSpaceSidebar",previous:{title:"Deploying contract using thirdweb",permalink:"/zh-CN/docs/espace/tutorials/deployContract/thirdweb"},next:{title:"Network RPC Endpoints",permalink:"/zh-CN/docs/espace/network-endpoints"}},s={},l=[{value:"Using Developer Tools",id:"using-developer-tools",level:2},{value:"Hardhat",id:"hardhat",level:3},{value:"Foundry",id:"foundry",level:3},{value:"Verify on Web UI Manually",id:"verify-on-web-ui-manually",level:2}],p=(u="Aside",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const d={toc:l},f="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After deploying your smart contracts, it's important to verify your code on a block explorer. This can be done in an automated way using your developer tooling or the Web UI."),(0,o.kt)("h2",{id:"using-developer-tools"},"Using Developer Tools"),(0,o.kt)("p",null,"Most smart contract tooling has plugins for verifying your contracts easily on ConfluxScan."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Network"),(0,o.kt)("th",{parentName:"tr",align:null},"Scan API"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,o.kt)("td",{parentName:"tr",align:null},"https\\://evmapi.confluxscan.io/api/")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Testnet"),(0,o.kt)("td",{parentName:"tr",align:null},"https\\://evmapi-testnet.confluxscan.io/api/")))),(0,o.kt)("h3",{id:"hardhat"},"Hardhat"),(0,o.kt)("p",null,"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"hardhat.config.ts")," to point to Conflux eSpace's RPC and block explorer API. A dummy ",(0,o.kt)("inlineCode",{parentName:"p"},"apiKey")," value is required, but anything works for its value."),(0,o.kt)("p",null,"For example, if you are using eSpace testnet, your config will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"...\n\nconst config: HardhatUserConfig = {\n  ...\n  solidity: \"0.8.19\",\n  networks: {\n    espaceTestnet: {\n      url: \"https://evm.confluxrpc.com\",\n      accounts:\n        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],\n    },\n  },\n  sourcify: {\n    enabled: false,\n  },\n  etherscan: {\n    apiKey: {\n      espaceTestnet: 'espace',\n    },\n    customChains: [\n      {\n        network: 'espaceTestnet',\n        chainId: 71,\n        urls: {\n          apiURL: 'https://evmapi-testnet.confluxscan.io/api/',\n          browserURL: 'https://evmtestnet.confluxscan.io/',\n        },\n      },\n    ],\n  },\n}\n\n...\n")),(0,o.kt)("p",null,"Now you can verify the smart contract by running the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"npx hardhat verify --network espaceTestnet <contract address> <space separated constructor parameters>\n")),(0,o.kt)("p",null,"For example, this is how a smart contract that receives two uint parameters in the constructor should look:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"npx hardhat verify --network espaceTestnet 0xD9880690bd717189cC3Fbe7B9020F27fae7Ac76F 123 456\n")),(0,o.kt)("h3",{id:"foundry"},"Foundry"),(0,o.kt)("p",null,"When using Foundry, the ",(0,o.kt)("inlineCode",{parentName:"p"},"verify-contract")," command helps automate the process of verifying contracts. If your contract has constructor arguments, you can specify these in ABI-encoded form with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--constructor-args")," option. For example, if your constructor takes two ",(0,o.kt)("inlineCode",{parentName:"p"},"uint256")," variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},' --constructor-args $(cast abi-encode "constructor(uint256,uint256)" 0 7)\n')),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/reference/forge/forge-verify-contract"},"Foundry documentation")," for further options you can specify."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"forge verify-contract <contract address> <contract name> \\\n  --verifier-url https://evmapi-testnet.confluxscan.io/api/ \\\n  --etherscan-api-key <anything is ok> \\\n  --constructor-args <your constructor arguments>\n")),(0,o.kt)(p,{type:"caution",title:"Caution",mdxType:"Aside"},"Do not specify the chain ID."),(0,o.kt)("h2",{id:"verify-on-web-ui-manually"},"Verify on Web UI Manually"),(0,o.kt)("p",null,"Any contract deployed on eSpace can be verified on the ",(0,o.kt)("a",{parentName:"p",href:"https://evm.confluxscan.net/"},"ConfluxScan")," block explorer's contract detail page. If contract is not verified, the contract detail page will show a entry to verify page."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6292).Z,width:"1680",height:"865"})),(0,o.kt)("p",null,"Developer can use flatten tools (hardhat, foundry) to merge his contract and it's dependencies into one file. Then copy the flatten code into the editor. And fill in the contract name, compiler version, license. Finally, click the submit button to verify the contract."),(0,o.kt)("p",null,"If the verification failed, maybe the compiler version or optimization settings are not correct. Please check the compiler version and optimization settings in the contract deployment configuration."))}y.isMDXComponent=!0},6292:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/contract-verify-submit-54ed66cb32a2486eb6f424ff35041692.png"}}]);