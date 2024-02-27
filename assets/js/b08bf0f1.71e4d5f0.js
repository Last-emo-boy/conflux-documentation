"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5678],{4176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(85893),a=n(11151);const i={sidebar_position:0,title:"Intro to the Stack",displayed_sidebar:"coreSidebar"},r=void 0,s={id:"core/build/intro-the-stack",title:"Intro to the Stack",description:'Like any software stack, the complete "Conflux Core Stack" will vary from project to project depending on your goals.',source:"@site/docs/core/build/intro-the-stack.md",sourceDirName:"core/build",slug:"/core/build/intro-the-stack",permalink:"/docs/core/build/intro-the-stack",draft:!1,unlisted:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/build/intro-the-stack.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Intro to the Stack",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"Build",permalink:"/docs/category/build"},next:{title:"Smart Contracts",permalink:"/docs/core/build/smart-contracts"}},c={},l=[{value:"Level 1: Virtual Machine",id:"level-1-virtual-machine",level:2},{value:"Level 2: Smart contracts",id:"level-2-smart-contracts",level:2},{value:"Level 3: Conflux nodes",id:"level-3-conflux-nodes",level:2},{value:"Level 4: Conflux Core Client APIs",id:"level-4-conflux-core-client-apis",level:2},{value:"Level 5: End-user applications",id:"level-5-end-user-applications",level:2},{value:"Further reading",id:"further-reading",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:'Like any software stack, the complete "Conflux Core Stack" will vary from project to project depending on your goals.'}),"\n",(0,o.jsx)(t.p,{children:"There are, however, core components of Conflux that help provide a mental model for how software applications interact with the Conflux Core blockchain. Understanding the layers of the stack will help you understand the different ways that Conflux can be integrated into software projects."}),"\n",(0,o.jsx)(t.h2,{id:"level-1-virtual-machine",children:"Level 1: Virtual Machine"}),"\n",(0,o.jsxs)(t.p,{children:["The Virtual Machine is the runtime environment for smart contracts on Conflux Core Space. It is almost compatible with EVM. All smart contracts and state changes on the Conflux blockchain are executed by ",(0,o.jsx)(t.a,{href:"/docs/core/core-space-basics/transactions/overview",children:"transactions"}),". The VM handles all of the transaction processing on the Conflux Core Space."]}),"\n",(0,o.jsx)(t.p,{children:"As with any virtual machine, the VM creates a level of abstraction between the executing code and the executing machine (an Conflux node). Currently, the VM is running on thousands of nodes distributed across the world."}),"\n",(0,o.jsxs)(t.p,{children:["Under the hood, the VM uses a set of opcode instructions to execute specific tasks. These (140 unique) opcodes allow the VM to be ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Turing_completeness",children:"Turing-complete"}),", which means the VM is able to compute just about anything, given enough resources."]}),"\n",(0,o.jsx)(t.p,{children:"As a dapp developer, you don't need to know much about the VM other than it exists and that it reliably powers all applications on Conflux without downtime."}),"\n",(0,o.jsx)(t.h2,{id:"level-2-smart-contracts",children:"Level 2: Smart contracts"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"./smart-contracts",children:"Smart contracts"})," are the executable programs that run on the Conflux Core blockchain."]}),"\n",(0,o.jsx)(t.p,{children:"Smart contracts are written using specific programming languages(Solidity) that compile to EVM bytecode (low-level machine instructions called opcodes)."}),"\n",(0,o.jsx)(t.p,{children:"Not only do smart contracts serve as open source libraries, they are essentially open API services that are always running and can't be taken down. Smart contracts provide public functions which users and applications (dapps) may interact with, without needing permission. Any application may integrate with deployed smart contracts to compose functionality, such as adding data feeds or to support token swaps. Additionally, anyone can deploy new smart contracts to Conflux in order to add custom functionality to meet their application's needs."}),"\n",(0,o.jsx)(t.p,{children:"As a dapp developer, you'll need to write smart contracts only if you want to add custom functionality on the Conflux Core blockchain. You may find you can achieve most or all of your project's needs by merely integrating with existing smart contracts, for instance if you want to support payments in stablecoins or enable decentralized exchange of tokens."}),"\n",(0,o.jsx)(t.h2,{id:"level-3-conflux-nodes",children:"Level 3: Conflux nodes"}),"\n",(0,o.jsxs)(t.p,{children:["In order for an application to interact with the Conflux Core blockchain, it must connect to an ",(0,o.jsx)(t.a,{href:"/docs/general/run-a-node/Overview",children:"Conflux node"}),". Connecting to a node allows you to read blockchain data and/or send transactions to the network."]}),"\n",(0,o.jsxs)(t.p,{children:["Conflux nodes are computers running software - an Conflux client. A client is an implementation of Conflux that verifies all transactions in each block, keeping the network secure and the data accurate. ",(0,o.jsx)(t.strong,{children:"Conflux nodes are the Conflux blockchain"}),". They collectively store the state of the Conflux blockchain and reach consensus on transactions to mutate the blockchain state."]}),"\n",(0,o.jsxs)(t.p,{children:["By connecting your application to an Conflux node (via the ",(0,o.jsx)(t.a,{href:"./json-rpc/",children:"JSON-RPC API"}),"), your application is able to read data from the blockchain (such as user account balances) as well as broadcast new transactions to the network (such as transferring CFX between user accounts or executing functions of smart contracts)."]}),"\n",(0,o.jsx)(t.h2,{id:"level-4-conflux-core-client-apis",children:"Level 4: Conflux Core Client APIs"}),"\n",(0,o.jsx)(t.p,{children:"Many convenience libraries (built and maintained by Conflux's open source community) allow your applications to connect to and communicate with the Conflux blockchain."}),"\n",(0,o.jsxs)(t.p,{children:["If your user-facing application is a web app, you may choose to ",(0,o.jsx)(t.code,{children:"npm install"})," a JavaScript SDK directly in your frontend. Or perhaps you'll choose to implement this functionality server-side, using a Python or Java API."]}),"\n",(0,o.jsx)(t.p,{children:"While these APIs are not a necessary piece of the stack, they abstract away much of the complexity of interacting directly with an Conflux node. They also provide utility functions (e.g. converting CFX to GDrip) so as a developer you can spend less time dealing with the intricacies of Conflux clients and more time focused on the functionality specific to your application."}),"\n",(0,o.jsx)(t.h2,{id:"level-5-end-user-applications",children:"Level 5: End-user applications"}),"\n",(0,o.jsx)(t.p,{children:"At the top level of the stack are user-facing applications. These are the standard applications you regularly use and build today: primarily web and mobile apps."}),"\n",(0,o.jsx)(t.p,{children:"The way you develop these user interfaces remains essentially unchanged. Often users will not need to know the application they're using is built using a blockchain."}),"\n",(0,o.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application",children:"The Architecture of a Web 3.0 application"})," - ",(0,o.jsx)(t.em,{children:"Preethi Kasireddy"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var o=n(67294);const a={},i=o.createContext(a);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);