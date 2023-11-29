"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[4696],{4137:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(o),m=a,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return o?n.createElement(h,r(r({ref:t},d),{},{components:o})):n.createElement(h,r({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,r=new Array(l);r[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,r[1]=i;for(var s=2;s<l;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1757:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=o(7462),a=(o(7294),o(4137));const l={sidebar_position:4,title:"Running a PoS Staking Pool"},r=void 0,i={unversionedId:"general/mine-stake/stake/running-staking-pool",id:"general/mine-stake/stake/running-staking-pool",title:"Running a PoS Staking Pool",description:"In this section we present a guide for how to deploy, configure and manage a POS Pool that will allow CONFLUX holders to join to the PoS protocol just interacting with the front-end application of the PoS Pool and without dealing with the technical complexities.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/mine-stake/stake/running-staking-pool.md",sourceDirName:"general/mine-stake/stake",slug:"/general/mine-stake/stake/running-staking-pool",permalink:"/zh-CN/docs/general/mine-stake/stake/running-staking-pool",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Running a PoS Staking Pool"},sidebar:"generalSidebar",previous:{title:"Staking Considerations",permalink:"/zh-CN/docs/general/mine-stake/stake/staking-considerations"},next:{title:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",permalink:"/zh-CN/docs/general/mine-stake/stake/faqs"}},p={},s=[{value:"Reference Architecture",id:"reference-architecture",level:2},{value:"Main contracts",id:"main-contracts",level:2},{value:"Deploy process",id:"deploy-process",level:2},{value:"Bootstrap",id:"bootstrap",level:2},{value:"CLI",id:"cli",level:2},{value:"Step 1 - Deploy PoolManager",id:"step-1---deploy-poolmanager",level:3},{value:"Step 2 - Deploy PoSPool contract",id:"step-2---deploy-pospool-contract",level:3},{value:"Step 3 - Deploy PoSPoolProxy1967 contract",id:"step-3---deploy-pospoolproxy1967-contract",level:3},{value:"Step 4 - Set poolName",id:"step-4---set-poolname",level:3},{value:"Step 5 - Regist pool",id:"step-5---regist-pool",level:3},{value:"Step 6 - Add pool to poolManager",id:"step-6---add-pool-to-poolmanager",level:3},{value:"Pool deploy and setup scripts",id:"pool-deploy-and-setup-scripts",level:2},{value:"Check PoS node&#39;s status",id:"check-pos-nodes-status",level:2},{value:"Setup",id:"setup",level:2},{value:"Available Scripts",id:"available-scripts",level:2},{value:"<code>yarn start</code>",id:"yarn-start",level:3},{value:"<code>yarn build</code>",id:"yarn-build",level:3},{value:"add i18n text",id:"add-i18n-text",level:3},{value:"One-Click PoS Pool",id:"one-click-pos-pool",level:2},{value:"Additional Documentation",id:"additional-documentation",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...l}=e;return(0,a.kt)(c,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section we present a guide for how to deploy, configure and manage a POS Pool that will allow CONFLUX holders to join to the PoS protocol just interacting with the front-end application of the PoS Pool and without dealing with the technical complexities."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prerequisites"),":"),(0,a.kt)("p",null,"The POS Pool operator needs to have the infrastructure to run the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A full/archive node"),(0,a.kt)("li",{parentName:"ul"},"A Web Server Farm, or a single web server to run the POS Pool application")),(0,a.kt)("h2",{id:"reference-architecture"},"Reference Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture",src:o(7273).Z,width:"1295",height:"605"})),(0,a.kt)("p",null,"Please note this configuration guide is to do the technical setup of the PoS Pool staking environment."),(0,a.kt)("p",null,"Conflux PoS Pool configuration has two major components: Interface application and full node. It needs technical knowledge for configuration of instances, ports, contracts deployment and storage configuration."),(0,a.kt)("p",null,"The configuration of a reverse proxy and a firewall is recommended but is out of the scope of this guide."),(0,a.kt)("p",null,"For the Conflux\u2019s full node configuration, you need to have in place the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Server with Ubuntu (recommended) or Windows"),(0,a.kt)("li",{parentName:"ul"},"Hard disk with 500GB of available space, ideally a SSD with NVMe drivers"),(0,a.kt)("li",{parentName:"ul"},"Nodejs and Yarn frameworks installed in the server"),(0,a.kt)("li",{parentName:"ul"},"Configure the server following the full node configuration ",(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/general/run-a-node/running-full-node"},"guide"))),(0,a.kt)("p",null,"It\u2019s important to have the latest release of Conflux, you can download the node client from: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/releases"},"https://github.com/Conflux-Chain/conflux-rust/releases")),(0,a.kt)("h1",{id:"pospool-contract"},"PoSPool contract"),(0,a.kt)("p",null,"This is the contract code of PoS pool, which are developed by Solidity. Featured with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pool share ratio configuable"),(0,a.kt)("li",{parentName:"ul"},"Upgradeable"),(0,a.kt)("li",{parentName:"ul"},"Provide ",(0,a.kt)("inlineCode",{parentName:"li"},"PoolManager")," to manage serveral PoS pool")),(0,a.kt)("p",null,"Note: To operation a PoS pool, a stable Conflux PoS node is required. ",(0,a.kt)("strong",{parentName:"p"},"Especially do not let your PoS node forceRetired")," If your Pool PoS Node is force retired you need manually ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/conflux-fans/pos-pool/blob/main/contract/PoolForceRetired.md"},"do some operation")," to correct the Pool's vote state."),(0,a.kt)("h2",{id:"main-contracts"},"Main contracts"),(0,a.kt)("p",null,"All contracts are in the ",(0,a.kt)("inlineCode",{parentName:"p"},"contracts")," folder:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PoSPool.sol"),": This is the pool logic methods"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PoSPoolProxy1967.sol"),": This is the pool proxy contract, used to make the pool logic upgradable."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PoolManager.sol"),": A simple manager contract just store pool's address.")),(0,a.kt)("h2",{id:"deploy-process"},"Deploy process"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Deploy ",(0,a.kt)("inlineCode",{parentName:"li"},"PoolManager.sol")," then get pool manager's address ",(0,a.kt)("inlineCode",{parentName:"li"},"PMA"),"."),(0,a.kt)("li",{parentName:"ol"},"Deploy ",(0,a.kt)("inlineCode",{parentName:"li"},"PoSPool.sol")," then get pool's address ",(0,a.kt)("inlineCode",{parentName:"li"},"P"),"."),(0,a.kt)("li",{parentName:"ol"},"Deploy ",(0,a.kt)("inlineCode",{parentName:"li"},"PoSPoolProxy1967.sol"),", use ",(0,a.kt)("inlineCode",{parentName:"li"},"P")," as constructor's parameter, then get poolProxy's address ",(0,a.kt)("inlineCode",{parentName:"li"},"PA"),"."),(0,a.kt)("li",{parentName:"ol"},"Invoke ",(0,a.kt)("inlineCode",{parentName:"li"},"PA"),"'s ",(0,a.kt)("inlineCode",{parentName:"li"},"setPoolName")," to set pool's name"),(0,a.kt)("li",{parentName:"ol"},"Invoke ",(0,a.kt)("inlineCode",{parentName:"li"},"PA"),"'s register method (with ",(0,a.kt)("inlineCode",{parentName:"li"},"PoSPool"),"'s ABI) to regist it in PoS, the votePower is ",(0,a.kt)("inlineCode",{parentName:"li"},"1 vote"),", which mean ",(0,a.kt)("inlineCode",{parentName:"li"},"1000 CFX")),(0,a.kt)("li",{parentName:"ol"},"Invoke ",(0,a.kt)("inlineCode",{parentName:"li"},"PMA"),"'s ",(0,a.kt)("inlineCode",{parentName:"li"},"addPool")," method to add ",(0,a.kt)("inlineCode",{parentName:"li"},"PA")," to PoolManager.")),(0,a.kt)("p",null,"If want to add more pool to PoolManager then walk through step ",(0,a.kt)("inlineCode",{parentName:"p"},"2-6"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PoSPool.sol")," have several method to config Pool's contract:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"setPoolUserShareRatio")," to set poolUserShareRatio, which's default value is 90%"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"setLockPeriod")," to set pool stake&unstake lock period, which's default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"7 day block number"),"(",(0,a.kt)("inlineCode",{parentName:"li"},"2 * 3600 * 24 * 7"),")")),(0,a.kt)("h2",{id:"bootstrap"},"Bootstrap"),(0,a.kt)("p",null,"Clone the code, and install the dependencies with npm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/conflux-fans/pos-pool.git\n$ cd contract\n$ npm install\n")),(0,a.kt)("p",null,"Then compile the contracts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx hardhat compile\n")),(0,a.kt)("h2",{id:"cli"},"CLI"),(0,a.kt)("p",null,"There is a CLI in ",(0,a.kt)("inlineCode",{parentName:"p"},"bin"),", which can used to deploy contract and setup them."),(0,a.kt)("p",null,"First you need create a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," from it's template ",(0,a.kt)("inlineCode",{parentName:"p"},".env.example")," and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"CFX_RPC_URL"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CFX_NETWORK_ID"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PRIVATE_KEY")," and make sure the ",(0,a.kt)("inlineCode",{parentName:"p"},"PRIVATE_KEY"),"'s address have enough CFX."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"To gain a performance boost install @conflux-dev/conflux-address-rust\nUsage: pool [options] [command]\n\nOptions:\n  -V, --version                      output the version number\n  -d, --debug                        output extra debugging\n  -h, --help                         display help for command\n\nCommands:\n  chainStatus [type]\n  poolStatus [address]\n  registerPool\n  setLockPeriod <number>\n  setPoolName <name>\n  Pool <method> [arg] [value]\n  restake <amount>\n  retireUserStake <user> <endBlock>\n  deploy <ContractName>\n  deployProxy <logicAddress>\n  deployDebugPool\n  upgradePoolContract <address>\n  QueryPoolProxy\n  QueryPool <method> [arg]\n  QueryPoolManager <method>\n  PoolManager <method> <arg>\n  help [command]                     display help for command\n")),(0,a.kt)("h3",{id:"step-1---deploy-poolmanager"},"Step 1 - Deploy PoolManager"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ bin/pool.js deploy PoolManager\nDeploy success: NET8888:TYPE.CONTRACT:ACC7ANC643M4W2VUHRNP5F0ZGZHUW8ZK6AENY2XB11\n")),(0,a.kt)("p",null,"Config ",(0,a.kt)("inlineCode",{parentName:"p"},"POOL_MANAGER_ADDRESS")," with new deployed ",(0,a.kt)("inlineCode",{parentName:"p"},"PoolManager")," address in ",(0,a.kt)("inlineCode",{parentName:"p"},".env")),(0,a.kt)("h3",{id:"step-2---deploy-pospool-contract"},"Step 2 - Deploy PoSPool contract"),(0,a.kt)("p",null,"Then you can deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"PoSPool")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ bin/pool.js deploy Pool\nDeploy success: NET8888:TYPE.CONTRACT:ACED7ZXFESKFFVR595J9KVS702C7D66SCUAMGHDPAA\n")),(0,a.kt)("h3",{id:"step-3---deploy-pospoolproxy1967-contract"},"Step 3 - Deploy PoSPoolProxy1967 contract"),(0,a.kt)("p",null,"Then you can deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"PoSPoolProxy1967")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ bin/pool.js deployProxy NET8888:TYPE.CONTRACT:ACED7ZXFESKFFVR595J9KVS702C7D66SCUAMGHDPAA\nDeploy success: NET8888:TYPE.CONTRACT:ACF0H9U3WYZ1EUSH5EW04MPK6GN43HA1A6FWG7ZB0W\n")),(0,a.kt)("p",null,"Config ",(0,a.kt)("inlineCode",{parentName:"p"},"POOL_ADDRESS")," with new deployed ",(0,a.kt)("inlineCode",{parentName:"p"},"PoolProxy1967")," address in ",(0,a.kt)("inlineCode",{parentName:"p"},".env")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note POOL_ADDRESS is configured to PoolProxy address")),(0,a.kt)("h3",{id:"step-4---set-poolname"},"Step 4 - Set poolName"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ bin/pool.js Pool setPoolName YourChoosePoolName\n")),(0,a.kt)("h3",{id:"step-5---regist-pool"},"Step 5 - Regist pool"),(0,a.kt)("p",null,"Set your PoS node's register data and set ",(0,a.kt)("inlineCode",{parentName:"p"},"POS_REGIST_DATA")," in ",(0,a.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ bin/pool.js registerPool\n")),(0,a.kt)("h3",{id:"step-6---add-pool-to-poolmanager"},"Step 6 - Add pool to poolManager"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ bin/pool.js PoolManager addPool NET8888:TYPE.CONTRACT:ACF0H9U3WYZ1EUSH5EW04MPK6GN43HA1A6FWG7ZB0W\n")),(0,a.kt)("h2",{id:"pool-deploy-and-setup-scripts"},"Pool deploy and setup scripts"),(0,a.kt)("p",null,"There is also a scripts can quickly deply a new PoS pool and regist it, also add it to PoolManager"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ node scripts/deployPool.js THE-REGISTER-DATA\n")),(0,a.kt)("p",null,"You need set PoS pool name manually."),(0,a.kt)("h2",{id:"check-pos-nodes-status"},"Check PoS node's status"),(0,a.kt)("p",null,"If one PoS node is force retired for some reason, all it's votes will be force retired. In this case the pool runner need ",(0,a.kt)("strong",{parentName:"p"},"manually call PoS pool contract's ",(0,a.kt)("inlineCode",{parentName:"strong"},"_retireUserStakes")," method to unlock user's votes in contract"),"."),(0,a.kt)("p",null,"There also is a scripts can do this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"$ node scripts/unLockUserVotes.js\n")),(0,a.kt)("p",null,"So it is necessary to have some way monitor your PoS node's status."),(0,a.kt)("h1",{id:"pos-pool-interface"},"Pos Pool Interface"),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"First we need to install the project dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd interface\n$ yarn # install the npm packages\n")),(0,a.kt)("p",null,"Second a config file ",(0,a.kt)("inlineCode",{parentName:"p"},"pool.config.js")," is need to create"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ cp pool.config.sample.js pool.config.js\n")),(0,a.kt)("p",null,"The config.sample file's content is like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  defaultLang: 'en',\n  testnet: {\n    poolManagerAddress: 'cfxtest:xxxxxxxxxxxxxxxxxxxxxxxxxx',\n    RPC: 'https://test.confluxrpc.com',\n    networkId: 1\n  },\n  mainnet: {\n    poolManagerAddress: 'cfx:xxxxxxxxxxxxxxxxxxxxxx',\n    RPC: 'https://main.confluxrpc.com',\n    networkId: 1029\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: The ",(0,a.kt)("inlineCode",{parentName:"strong"},"poolManagerAddress")," need to replace with your deployed PoolManagerContract address.")),(0,a.kt)("p",null,"The dev mode (yarn start) will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"testnet")," config"),(0,a.kt)("h2",{id:"available-scripts"},"Available Scripts"),(0,a.kt)("p",null,"In the project directory, you can run:"),(0,a.kt)("h3",{id:"yarn-start"},(0,a.kt)("inlineCode",{parentName:"h3"},"yarn start")),(0,a.kt)("p",null,"Runs the app in the development mode.\\\nOpen ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," to view it in the browser."),(0,a.kt)("p",null,"The page will reload if you make edits.\\\nYou will also see any lint errors in the console."),(0,a.kt)("h3",{id:"yarn-build"},(0,a.kt)("inlineCode",{parentName:"h3"},"yarn build")),(0,a.kt)("p",null,"Builds the app for production to the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder.\\\nIt correctly bundles React in production mode and optimizes the build for the best performance."),(0,a.kt)("p",null,"The build is minified and the filenames include the hashes.\\\nYour app is ready to be deployed!"),(0,a.kt)("p",null,"See the section about ",(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/create-react-app/docs/deployment"},"deployment")," for more information."),(0,a.kt)("h3",{id:"add-i18n-text"},"add i18n text"),(0,a.kt)("p",null,"First, add a folder named target language key to the interface/public/locales folder. copy the translation.json file from the locales/en folder."),(0,a.kt)("p",null,"Then change the value in the copied translation.json file to the translation of the target language."),(0,a.kt)("p",null,"Next, import the new language file in locales/index.js and add it to the resources field. (You can change the default language by modifying the lng field.)"),(0,a.kt)("p",null,"Finally, in Interface/src/pages/components/Header/index.js, add an Option corresponding to the language key under Language Select."),(0,a.kt)("h2",{id:"one-click-pos-pool"},"One-Click PoS Pool"),(0,a.kt)("p",null,"One-Click PoS Pool is a an application that enables users without code experience to run a PoS pool in an easy way. PoS one click uses docker technology and consists in 3 parts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Node part, this part use bash script to run a Conflux PoS node"),(0,a.kt)("li",{parentName:"ol"},"PosPool website and contract, in this part, it provide a stake website which allow user to stake their CFX token, and an automatically script to deploy the website, contract and verify the contract."),(0,a.kt)("li",{parentName:"ol"},"Admin website, a .net core web application, which only allow admin to login, admin can login to monitor the pool status, adjust pool name/performance fee, withdraw profit, it also allow admin to upgrade node and contract by just click a few buttons.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://bitbucket.org/abc-cfxpool/posoneclick/src/main/"},"Github Repo")),(0,a.kt)("h2",{id:"additional-documentation"},"Additional Documentation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/conflux-fans/pos-pool/blob/main/contract/docs/HowToDeployCorePoolContract.md"},"How to deploy Conflux Core PoS pool")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/conflux-fans/pos-pool/blob/main/contract/docs/HowToUpgradeContract.md"},"How to upgrade Core Pool Contract")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/conflux-fans/pos-pool/blob/main/contract/docs/PoolForceRetired.md"},"How to deal with PoS force retire")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/conflux-fans/pos-pool/blob/main/contract/docs/HowToDeployEspacePool.md"},"How to deploy eSpace pool contract"))),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/conflux-fans/pos-pool"},"PoS Pool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/conflux-fans/pos-pool/blob/main/contract/README.md"},"PoS Pool Contract")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/conflux-fans/pos-pool/blob/main/interface/README.md"},"PoS Pool Interface"))))}u.isMDXComponent=!0},7273:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/PoSReferenceArchitecture-bb0738164cefdbb3732bd31348c79daf.png"}}]);