"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5833],{48910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>i});var o=t(85893),a=t(11151);const c={sidebar_position:4,title:"Scaffold Conflux",description:"Learn how to leverage Scaffold-Eth 2 components to make your Conflux App",keywords:["Hardhat","Smart Contracts","Scaffold"],displayed_sidebar:"eSpaceSidebar"},s=void 0,r={id:"espace/tutorials/scaffoldCfx/scaffold",title:"Scaffold Conflux",description:"Learn how to leverage Scaffold-Eth 2 components to make your Conflux App",source:"@site/docs/espace/tutorials/scaffoldCfx/scaffold.md",sourceDirName:"espace/tutorials/scaffoldCfx",slug:"/espace/tutorials/scaffoldCfx/scaffold",permalink:"/es/docs/espace/tutorials/scaffoldCfx/scaffold",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Scaffold Conflux",description:"Learn how to leverage Scaffold-Eth 2 components to make your Conflux App",keywords:["Hardhat","Smart Contracts","Scaffold"],displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"Scaffold for Developing Conflux Apps",permalink:"/es/docs/category/scaffold-for-developing-conflux-apps"},next:{title:"Contract Verification",permalink:"/es/docs/espace/tutorials/VerifyContracts"}},l={},i=[{value:"Clone Scaffold Conflux",id:"clone-scaffold-conflux",level:2},{value:"Front-End",id:"front-end",level:2},{value:"Deployment of Conflux Contracts",id:"deployment-of-conflux-contracts",level:2},{value:"Remove Hardhat Wallet and Burner Wallet Connection to Espace Wallet Connection",id:"remove-hardhat-wallet-and-burner-wallet-connection-to-espace-wallet-connection",level:2},{value:"Deploy App on Vercel",id:"deploy-app-on-vercel",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/conflux-fans/conflux-scaffold",children:"Scaffold Conflux"})," is an adaptation of Scaffold-ETH-2 (",(0,o.jsx)(n.a,{href:"https://scaffoldeth.io/",children:"https://scaffoldeth.io/"}),") whereby we have adjusted the template to allow you to deploy the contract on Conflux ESpace and leverage the components, integration of hardhat, and the quick deployment of Scaffold-ETH-2. In this tutorial, we will show you how to set-up Scaffold Conflux to better understand your smart contract and to leverage some of the beautiful react components available to quickly make your app on Conflux ESpace."]}),"\n",(0,o.jsxs)(n.p,{children:["Watch this ",(0,o.jsx)(n.a,{href:"https://youtu.be/33S0IjGGsQg",children:"video"})," for full tutorial on how to create an app from scratch and deploy it live on Conflux ESpace."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://www.youtube.com/watch?v=33S0IjGGsQg",children:(0,o.jsx)(n.img,{src:"https://img.youtube.com/vi/33S0IjGGsQg/0.jpg",alt:"Watch Tutorial"})})}),"\n",(0,o.jsx)(n.h2,{id:"clone-scaffold-conflux",children:"Clone Scaffold Conflux"}),"\n",(0,o.jsx)(n.p,{children:"In your visual studio terminal, run the following to clone the repo and install the dependencies."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/conflux-fans/conflux-scaffold\nyarn install\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In the folder directory of ",(0,o.jsx)(n.code,{children:"conflux-scaffold"})," you will have the following:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Folder Directory",src:t(57496).Z+"",width:"600",height:"914"})}),"\n",(0,o.jsx)(n.p,{children:"The repository contains two main sections. The first section is for hardhat."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You can adjust your smart contract solidity files in /conflux-scaffold/packages/hardhat/contracts"}),"\n",(0,o.jsx)(n.li,{children:'For example, the current sample solidity file is "YourContract.sol"'}),"\n",(0,o.jsx)(n.li,{children:"Start up your blockchain for testing purposes. We do this to easily create accounts and interact with the smart contract without deploying it on testnet (i.e. RPC limits) and Conflux Espace (i.e. gas fees)"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn chain\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once the chain is set up, open up a new terminal. You can test your smart contract and then deploy it"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn hardhat:test\nyarn deploy\n"})}),"\n",(0,o.jsx)(n.p,{children:"There are several files that are relevant when deploying."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"One is the deployment script in /conflux-scaffold/packages/hardhat/deploy"}),"\n",(0,o.jsx)(n.li,{children:"The other is the configuration of which networks you are deploying on. /conflux-scaffold/packages/hardhat/hardhat.config.ts"}),"\n",(0,o.jsx)(n.li,{children:"The default deployment network is hardhat but you can change it to Conflux Espace or Conflux Testnet by doing the following"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn deploy --network confluxESpace\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn deploy --network confluxESpaceTestnet\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The deployer of the contract and thereby the owner of the contract can be changed by re-labelling the ",(0,o.jsx)(n.code,{children:"./packages/hardhat/.env.example"})," to ",(0,o.jsx)(n.code,{children:"./packages/hardhat/.env"}),' and putting your private key in DEPLOYER_PRIVATE_KEY=. However, the default uses a default "public" private key for hardhat testing purposes.']})}),"\n",(0,o.jsx)(n.p,{children:"Once you have deployed the contract, you can start up your front-end to see how it interacts with the contracts. You should be able to see an interface like the following. The Contract Debug page is similar to other web deployment applications like Remix."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Front-end",src:t(54290).Z+"",width:"2838",height:"1428"})}),"\n",(0,o.jsx)(n.p,{children:"What is powerful about Conflux Scaffold is that you can quickly deploy your contract in Hardhat and be able to see both the transactions on a block explorer and interact with the read/write functions of the contract"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Contract",src:t(93333).Z+"",width:"2842",height:"1412"})}),"\n",(0,o.jsx)(n.h2,{id:"front-end",children:"Front-End"}),"\n",(0,o.jsx)(n.p,{children:"Once you have your front-end up and running, the fun begins on connecting your front-end with the contract. You can leverage beautiful react components."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Navigate to conflux-scaffold/packages/nextjs/app/page.tsx"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Import Libraries",src:t(8346).Z+"",width:"1856",height:"340"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You can see here that components can be quickly imported from /components/scaffold-eth"}),"\n",(0,o.jsx)(n.li,{children:"For example, there is an Address, Balance, AddressInput component, etc. all which can be used quickly to add to your app. In the video tutorial, there is an example of how an AddressInput is quickly imported and rendered."}),"\n",(0,o.jsxs)(n.li,{children:["Additional components can be seen in the documentation ",(0,o.jsx)(n.a,{href:"https://docs.scaffoldeth.io/components/",children:"https://docs.scaffoldeth.io/components/"})]}),"\n",(0,o.jsx)(n.li,{children:'There are other hooks which are extremely important for reading and writing the contract (as well as setting up event subscription). These are the useScaffoldContractRead, useScaffoldContractWrite, etc. which are imported from "~~/hooks/scaffold-eth/index"'}),"\n",(0,o.jsxs)(n.li,{children:["The arguments requirement for the hooks are all in the ",(0,o.jsx)(n.a,{href:"https://docs.scaffoldeth.io/components/",children:"documentation"})," but here are two examples of how easy it is to create a contract instance, read a function from the contract, and write into a function."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Contract Instance",src:t(72441).Z+"",width:"938",height:"140"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Contract Read",src:t(56396).Z+"",width:"1038",height:"160"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Contract Write",src:t(70005).Z+"",width:"906",height:"200"})}),"\n",(0,o.jsx)(n.h2,{id:"deployment-of-conflux-contracts",children:"Deployment of Conflux Contracts"}),"\n",(0,o.jsx)(n.p,{children:"In order to deploy a conflux app, we need to first deploy the contract into Conflux Espace and allow our wallet to connect to Conflux ESpace. In conflux-scaffold/packages/hardhat/.env.example, we need to change this to packages/hardhat/.env and include our private key in DEPLOYER_PRIVATE_KEY. This makes our private key as the deployer of the contract. In the solidity contract, we have also assigned the deployer as the owner of the contract."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn deploy --network confluxESpace\n"})}),"\n",(0,o.jsx)(n.p,{children:"or"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn deploy --network confluxESpaceTestnet\n"})}),"\n",(0,o.jsx)(n.h2,{id:"remove-hardhat-wallet-and-burner-wallet-connection-to-espace-wallet-connection",children:"Remove Hardhat Wallet and Burner Wallet Connection to Espace Wallet Connection"}),"\n",(0,o.jsx)(n.p,{children:"Once the contract is deployed, we need to remove the wallet functionality to connect to hardhat and include Conflux Espace. You can specify the networks that you deployed into in conflux-scaffold/packages/nextjs/scaffold.config.ts by changing targetNetworks to"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"targetNetworks: [chains.confluxESpace]\n"})}),"\n",(0,o.jsx)(n.p,{children:"or"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"targetNetworks: [chains.confluxESpaceTestnet]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"deploy-app-on-vercel",children:"Deploy App on Vercel"}),"\n",(0,o.jsx)(n.p,{children:"And that's it! You are ready to deploy your app once you are happy with your smart contract and the front-end."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn vercel\n"})}),"\n",(0,o.jsx)(n.p,{children:"Follow the instructions for deployment on vercel."}),"\n",(0,o.jsxs)(n.p,{children:["If you have any questions, please refer to the video for full tutorial ",(0,o.jsx)(n.a,{href:"https://youtu.be/33S0IjGGsQg",children:"video"}),". It includes how to verify your contract on confluxscan and the command for hardhat testing."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},57496:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/CfxScaffoldFolderStructure-488837625ee925d0a668249396530216.png"},8346:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/Components-1e60015f970ba32dde2c44f8c73579f6.png"},72441:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/ContractInstance-d71221c5c132fc9fc05346f0d18cb130.png"},93333:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/ContractInteraction-7df767e69b2456fb17ac0c081002d9e4.png"},56396:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/ContractRead-6521b635da3cc74fc4bf6e2d74dbbd97.png"},70005:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/ContractWrite-c67935530349c8a87da9ba385c29a2ab.png"},54290:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/FrontEnd-4e6e241cc947d9b1d1375d2c2c1e6630.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var o=t(67294);const a={},c=o.createContext(a);function s(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);