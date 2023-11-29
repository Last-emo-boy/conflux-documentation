"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9055],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const o={sidebar_position:1,title:"Deploying contract using hardhat and foundry",description:"Deploying contract using hardhat and foundry"},l=void 0,i={unversionedId:"espace/tutorials/deployContract/hardhatAndFoundry",id:"espace/tutorials/deployContract/hardhatAndFoundry",title:"Deploying contract using hardhat and foundry",description:"Deploying contract using hardhat and foundry",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/tutorials/deployContract/hardhatAndFoundry.md",sourceDirName:"espace/tutorials/deployContract",slug:"/espace/tutorials/deployContract/hardhatAndFoundry",permalink:"/zh-CN/docs/espace/tutorials/deployContract/hardhatAndFoundry",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Deploying contract using hardhat and foundry",description:"Deploying contract using hardhat and foundry"},sidebar:"tutorialSidebar",previous:{title:"How to Deploy Contract",permalink:"/zh-CN/docs/category/how-to-deploy-contract"},next:{title:"Deploying an ERC-20 Token using Remix IDE",permalink:"/zh-CN/docs/espace/tutorials/deployContract/remix"}},c={},p=[{value:"Deploy contracts with Hardhat",id:"deploy-contracts-with-hardhat",level:2},{value:"Deploy contracts with Foundry",id:"deploy-contracts-with-foundry",level:2},{value:"Questions and Feedback",id:"questions-and-feedback",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The eSpace Testnet allows anyone to deploy a smart contract on eSpace. In this tutorial, you will learn how to deploy a contract on eSpace Testnet using common tools for developing on Ethereum. This ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/conflux-fans/espace-contract-guide"},"demo repo")," illustrates contract deployment with ",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/foundry-rs/foundry"},"Foundry"),"."),(0,r.kt)("p",null,"Before you start deploying the contract, you need to request test tokens from a ",(0,r.kt)("a",{parentName:"p",href:"https://efaucet.confluxnetwork.org/"},"eSpace faucet"),"."),(0,r.kt)("h2",{id:"deploy-contracts-with-hardhat"},"Deploy contracts with Hardhat"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you haven't already, install ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"nodejs")," and ",(0,r.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/install"},"yarn"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the repo and install dependencies:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/conflux-fans/espace-contract-guide\ncd espace-contract-guide\nyarn install\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file following the example ",(0,r.kt)("inlineCode",{parentName:"p"},".env.example")," in the root directory. Change ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIVATE_KEY")," to your own account private key in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn compile")," to compile the contract.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn deploy:eSpaceTestnet")," to deploy the contract on the eSpace Testnet.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test")," for hardhat tests."))),(0,r.kt)("h2",{id:"deploy-contracts-with-foundry"},"Deploy contracts with Foundry"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the repo:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/conflux-fans/espace-contract-guide\ncd espace-contract-guide\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Foundry:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L https://foundry.paradigm.xyz | bash\nfoundryup\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"forge build")," to build the project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy your contract with Foundry:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"forge create --rpc-url https://evmtestnet.confluxrpc.com \\\n  --value <lock_amount> \\\n  --constructor-args <unlock_time> \\\n  --private-key <your_private_key> \\\n  --legacy \\\n  contracts/Lock.sol:Lock\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<lock_amount>")," is the amount of test ",(0,r.kt)("inlineCode",{parentName:"li"},"CFX")," to be locked in the contract. Try setting this to some small amount, like ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0000001ether"),".\\"," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<unlock_time>")," is the Unix timestamp after which the funds locked in the contract will become available for withdrawal. Try setting this to some Unix timestamp in the future, like ",(0,r.kt)("inlineCode",{parentName:"li"},"1730390400")," (this Unix timestamp corresponds to October 1, 2024).")),(0,r.kt)("p",{parentName:"li"},"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"forge create --rpc-url https://evmtestnet.confluxrpc.com \\\n  --value 0.00000000002ether \\\n  --constructor-args 1696118400 \\\n  --private-key 0xabc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc1 \\\n  --legacy contracts/Lock.sol:Lock\n")))),(0,r.kt)("h2",{id:"questions-and-feedback"},"Questions and Feedback"),(0,r.kt)("p",null,"Thank you for participating in and developing on the eSpace Testnet! If you encounter any issues, join our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/conflux-network-707952293412339843"},"Discord")," and ask us in it."))}u.isMDXComponent=!0}}]);