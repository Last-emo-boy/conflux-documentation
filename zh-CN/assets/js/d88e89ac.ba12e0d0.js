"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9213],{98199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=t(85893),o=t(11151);const i={sidebar_position:3,title:"Deploying contract using thirdweb",description:"Deploying contract using thirdweb",displayed_sidebar:"eSpaceSidebar"},s=void 0,c={id:"espace/tutorials/deployContract/thirdweb",title:"Deploying contract using thirdweb",description:"Deploying contract using thirdweb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/tutorials/deployContract/thirdweb.md",sourceDirName:"espace/tutorials/deployContract",slug:"/espace/tutorials/deployContract/thirdweb",permalink:"/zh-CN/docs/espace/tutorials/deployContract/thirdweb",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Deploying contract using thirdweb",description:"Deploying contract using thirdweb",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"Deploying an ERC-20 Token using Remix IDE",permalink:"/zh-CN/docs/espace/tutorials/deployContract/remix"},next:{title:"Deploying an ERC-20 Token Using Brownie",permalink:"/zh-CN/docs/espace/tutorials/deployContract/brownie"}},l={},a=[{value:"Create Contract",id:"create-contract",level:2},{value:"Deploy Contract",id:"deploy-contract",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"create-contract",children:"Create Contract"}),"\n",(0,r.jsx)(n.p,{children:"To create a new smart contract using thirdweb CLI, follow these steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In your CLI run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx thirdweb create contract\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Input your preferences for the command line prompts:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Give your project a name"}),"\n",(0,r.jsx)(n.li,{children:"Choose your preferred framework: Hardhat or Foundry"}),"\n",(0,r.jsx)(n.li,{children:"Name your smart contract"}),"\n",(0,r.jsxs)(n.li,{children:["Choose the type of base contract: Empty, ",(0,r.jsx)(n.a,{href:"https://portal.thirdweb.com/solidity/base-contracts/erc20base",children:"ERC20"}),", ",(0,r.jsx)(n.a,{href:"https://portal.thirdweb.com/solidity/base-contracts/erc721base",children:"ERC721"}),", or ",(0,r.jsx)(n.a,{href:"https://portal.thirdweb.com/solidity/base-contracts/erc1155base",children:"ERC1155"})]}),"\n",(0,r.jsxs)(n.li,{children:["Add any desired ",(0,r.jsx)(n.a,{href:"https://portal.thirdweb.com/solidity/extensions",children:"extensions"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Once created, navigate to your project\u2019s directory and open in your preferred code editor."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you open the ",(0,r.jsx)(n.code,{children:"contracts"})," folder, you will find your smart contract; this is your smart contract written in Solidity."]}),"\n",(0,r.jsxs)(n.p,{children:["The following is code for an ERC721Base contract without specified extensions. It implements all of the logic inside the ",(0,r.jsx)(n.a,{href:"https://github.com/thirdweb-dev/contracts/blob/main/contracts/base/ERC721Base.sol",children:(0,r.jsx)(n.code,{children:"ERC721Base.sol"})})," contract; which implements the ",(0,r.jsx)(n.a,{href:"https://github.com/thirdweb-dev/contracts/blob/main/contracts/eip/ERC721A.sol",children:(0,r.jsx)(n.code,{children:"ERC721A"})})," standard."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport "@thirdweb-dev/contracts/base/ERC721Base.sol";\n\ncontract Contract is ERC721Base {\n    constructor(\n        string memory _name,\n        string memory _symbol,\n        address _royaltyRecipient,\n        uint128 _royaltyBps\n    ) ERC721Base(_name, _symbol, _royaltyRecipient, _royaltyBps) {}\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"This contract inherits the functionality of ERC721Base through the following steps:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Importing the ERC721Base contract"}),"\n",(0,r.jsx)(n.li,{children:"Inheriting the contract by declaring that our contract is an ERC721Base contract"}),"\n",(0,r.jsx)(n.li,{children:"Implementing any required methods, such as the constructor."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["After modifying your contract with your desired custom logic, you may deploy it to Conflux using ",(0,r.jsx)(n.a,{href:"https://portal.thirdweb.com/deploy",children:"Deploy"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, you can deploy a prebuilt contract for NFTs, tokens, or marketplace directly from the thirdweb Explore page:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to the thirdweb Explore page: ",(0,r.jsx)(n.a,{href:"https://thirdweb.com/explore",children:"https://thirdweb.com/explore"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"thirdweb Explore page",src:t(6817).Z+"",width:"2032",height:"1167"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Choose the type of contract you want to deploy from the available options: NFTs, tokens, marketplace, and more."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Follow the on-screen prompts to configure and deploy your contract."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["For more information on different contracts available on Explore, check out ",(0,r.jsx)(n.a,{href:"https://portal.thirdweb.com/pre-built-contracts",children:"thirdweb\u2019s documentation."})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"deploy-contract",children:"Deploy Contract"}),"\n",(0,r.jsx)(n.p,{children:"Deploy allows you to deploy a smart contract to any EVM compatible network without configuring RPC URLs, exposing your private keys, writing scripts, and other additional setup such as verifying your contract."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To deploy your smart contract using deploy, navigate to the root directory of your project and execute the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx thirdweb deploy\n"})}),"\n",(0,r.jsx)(n.p,{children:"Executing this command will trigger the following actions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Compiling all the contracts in the current directory."}),"\n",(0,r.jsx)(n.li,{children:"Providing the option to select which contract(s) you wish to deploy."}),"\n",(0,r.jsx)(n.li,{children:"Uploading your contract source code (ABI) to IPFS."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"When it is completed, it will open a dashboard interface to finish filling out the parameters."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"_name"}),": contract name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"_symbol"}),': symbol or "ticker"']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"_royaltyRecipient"}),": wallet address to receive royalties from secondary sales"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"_royaltyBps"}),": basis points (bps) that will be given to the royalty recipient for each secondary sale, e.g. 500 = 5%"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select ",(0,r.jsx)(n.code,{children:"TelosEvm"})," as the network"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Manage additional settings on your contract\u2019s dashboard as needed such as uploading NFTs, configuring permissions, and more."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For additional information on Deploy, please reference ",(0,r.jsx)(n.a,{href:"https://portal.thirdweb.com/deploy",children:"thirdweb\u2019s documentation"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you have any further questions or encounter any issues during the process, please reach out to thirdweb support at ",(0,r.jsx)(n.a,{href:"http://support.thirdweb.com/",children:"support.thirdweb.com"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6817:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/thirdweb-explore-ee9602c6ab8d6ea5e27779bef06b740c.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var r=t(67294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);