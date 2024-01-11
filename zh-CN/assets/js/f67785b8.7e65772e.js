"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9055],{38942:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(85893),c=t(11151);const r={sidebar_position:1,title:"Deploying contract using hardhat and foundry",description:"Deploying contract using hardhat and foundry",displayed_sidebar:"eSpaceSidebar"},s=void 0,a={id:"espace/tutorials/deployContract/hardhatAndFoundry",title:"Deploying contract using hardhat and foundry",description:"Deploying contract using hardhat and foundry",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/tutorials/deployContract/hardhatAndFoundry.md",sourceDirName:"espace/tutorials/deployContract",slug:"/espace/tutorials/deployContract/hardhatAndFoundry",permalink:"/zh-CN/docs/espace/tutorials/deployContract/hardhatAndFoundry",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Deploying contract using hardhat and foundry",description:"Deploying contract using hardhat and foundry",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"How to Deploy Contract",permalink:"/zh-CN/docs/category/how-to-deploy-contract"},next:{title:"Deploying an ERC-20 Token using Remix IDE",permalink:"/zh-CN/docs/espace/tutorials/deployContract/remix"}},i={},l=[{value:"Deploy contracts with Hardhat",id:"deploy-contracts-with-hardhat",level:2},{value:"Deploy contracts with Foundry",id:"deploy-contracts-with-foundry",level:2},{value:"Questions and Feedback",id:"questions-and-feedback",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The eSpace Testnet allows anyone to deploy a smart contract on eSpace. In this tutorial, you will learn how to deploy a contract on eSpace Testnet using common tools for developing on Ethereum. This ",(0,o.jsx)(n.a,{href:"https://github.com/conflux-fans/espace-contract-guide",children:"demo repo"})," illustrates contract deployment with ",(0,o.jsx)(n.a,{href:"https://hardhat.org/",children:"Hardhat"})," and ",(0,o.jsx)(n.a,{href:"https://github.com/foundry-rs/foundry",children:"Foundry"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Before you start deploying the contract, you need to request test tokens from a ",(0,o.jsx)(n.a,{href:"https://efaucet.confluxnetwork.org/",children:"eSpace faucet"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"deploy-contracts-with-hardhat",children:"Deploy contracts with Hardhat"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If you haven't already, install ",(0,o.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"nodejs"})," and ",(0,o.jsx)(n.a,{href:"https://classic.yarnpkg.com/lang/en/docs/install",children:"yarn"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Clone the repo and install dependencies:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/conflux-fans/espace-contract-guide\ncd espace-contract-guide\nyarn install\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:".env"})," file following the example ",(0,o.jsx)(n.code,{children:".env.example"})," in the root directory. Change ",(0,o.jsx)(n.code,{children:"PRIVATE_KEY"})," to your own account private key in the ",(0,o.jsx)(n.code,{children:".env"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run ",(0,o.jsx)(n.code,{children:"yarn compile"})," to compile the contract."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run ",(0,o.jsx)(n.code,{children:"yarn deploy:eSpaceTestnet"})," to deploy the contract on the eSpace Testnet."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run ",(0,o.jsx)(n.code,{children:"yarn test"})," for hardhat tests."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"deploy-contracts-with-foundry",children:"Deploy contracts with Foundry"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Clone the repo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/conflux-fans/espace-contract-guide\ncd espace-contract-guide\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Install Foundry:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"curl -L https://foundry.paradigm.xyz | bash\nfoundryup\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run ",(0,o.jsx)(n.code,{children:"forge build"})," to build the project."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Deploy your contract with Foundry:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"forge create --rpc-url https://evmtestnet.confluxrpc.com \\\n  --value <lock_amount> \\\n  --constructor-args <unlock_time> \\\n  --private-key <your_private_key> \\\n  --legacy \\\n  contracts/Lock.sol:Lock\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<lock_amount>"})," is the amount of test ",(0,o.jsx)(n.code,{children:"CFX"})," to be locked in the contract. Try setting this to some small amount, like ",(0,o.jsx)(n.code,{children:"0.0000001ether"}),".&#x20"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<unlock_time>"})," is the Unix timestamp after which the funds locked in the contract will become available for withdrawal. Try setting this to some Unix timestamp in the future, like ",(0,o.jsx)(n.code,{children:"1730390400"})," (this Unix timestamp corresponds to October 1, 2024)."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"forge create --rpc-url https://evmtestnet.confluxrpc.com \\\n  --value 0.00000000002ether \\\n  --constructor-args 1696118400 \\\n  --private-key 0xabc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc1 \\\n  --legacy contracts/Lock.sol:Lock\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"questions-and-feedback",children:"Questions and Feedback"}),"\n",(0,o.jsxs)(n.p,{children:["Thank you for participating in and developing on the eSpace Testnet! If you encounter any issues, join our ",(0,o.jsx)(n.a,{href:"https://discord.gg/conflux-network-707952293412339843",children:"Discord"})," and ask us in it."]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(67294);const c={},r=o.createContext(c);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);