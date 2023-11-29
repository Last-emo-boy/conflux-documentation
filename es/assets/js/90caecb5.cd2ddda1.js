"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3798],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(7462),o=(n(7294),n(4137));const r={sidebar_position:3,title:"Staking"},i=void 0,c={unversionedId:"core/learn/core-space-basics/internal-contracts/staking",id:"core/learn/core-space-basics/internal-contracts/staking",title:"Staking",description:"Overview",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/core/learn/core-space-basics/internal-contracts/staking.md",sourceDirName:"core/learn/core-space-basics/internal-contracts",slug:"/core/learn/core-space-basics/internal-contracts/staking",permalink:"/es/docs/core/learn/core-space-basics/internal-contracts/staking",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Staking"},sidebar:"references",previous:{title:"SponsorWhitelistControl",permalink:"/es/docs/core/learn/core-space-basics/internal-contracts/sponsor-whitelist-control"},next:{title:"ConfluxContext",permalink:"/es/docs/core/learn/core-space-basics/internal-contracts/conflux-context"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Locking and Vote Power",id:"locking-and-vote-power",level:2},{value:"Examples",id:"examples",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Conflux introduces the staking mechanism for two reasons: first, staking mechanism provides a better way to charge the occupation of storage space (comparing to \u201cpay once, occupy forever\u201d); and second, this mechanism also helps in defining the voting power in decentralized governance."),(0,o.kt)("p",null,"At a high level, Conflux implements a built-in ",(0,o.kt)("strong",{parentName:"p"},"Staking")," contract to record the staking information of all accounts, for both normal addresses and smart contracts. By sending a transaction to this contract, users (both external users and smart contracts) can deposit/withdraw funds, which is also called stakes in the contract."),(0,o.kt)("p",null,"A user (or a contract) can deposit balance for staking by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit(uint amount)")," and then ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," Drip will be moved from its ",(0,o.kt)("inlineCode",{parentName:"p"},"balance")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"stakingBalance"),". Notice that this function is non-payable, the user only needs to specify the amount to be staked without transferring any funds to internal contract and the minimum deposit amount is ",(0,o.kt)("inlineCode",{parentName:"p"},"1 CFX"),"."),(0,o.kt)("p",null,"The user can also withdraw balance by ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw(uint amount)"),". The caller can call this function to withdraw some tokens from the Conflux Internal Staking Contract. The staking capital will be transferred to the user's balance in time."),(0,o.kt)("h2",{id:"locking-and-vote-power"},"Locking and Vote Power"),(0,o.kt)("p",null,"By locking the staking balance, the user can obtain ",(0,o.kt)("em",{parentName:"p"},"vote power")," for further on-chain governance. With function ",(0,o.kt)("inlineCode",{parentName:"p"},"voteLock(uint amount, uint unlock_block_number)"),', the account makes a promise that "My ',(0,o.kt)("inlineCode",{parentName:"p"},"stakingBalance")," will always have at least ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," Drip before the block with block number ",(0,o.kt)("inlineCode",{parentName:"p"},"unlock_block_number"),'". The account can make multiple promises, like "I will always at least 10 CFX in this year, and then always stake at least 5 CFX in the next year."  ',(0,o.kt)("strong",{parentName:"p"},"Once the promise has been made, there is no way to cancel it!")," But the account can overwrite old promise by locking more balance. Whenever the account tries to withdraw ",(0,o.kt)("inlineCode",{parentName:"p"},"stakingBalance"),", the internal contract will check whether the rest balance matches the locking promise."),(0,o.kt)("p",null,"Here we introduce the detailed logic for locking balance by illustrating several examples. Suppose the current block number is ",(0,o.kt)("inlineCode",{parentName:"p"},"base"),", Conflux will generate about ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," blocks in the rest of this year and ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," blocks in the next year. Since Conflux generates two block per second, ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," approximately equals to ",(0,o.kt)("inlineCode",{parentName:"p"},"2 * 60 * 60 * 24 * 365"),". And the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," depends on when you read this article."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If an account has 10 CFX in ",(0,o.kt)("inlineCode",{parentName:"li"},"stakingBalance"),", and it calls ",(0,o.kt)("inlineCode",{parentName:"li"},"voteLock(100 * 10^18, base + x)"),", then the transaction will  fail because this account tries to lock 100 CFX with insufficient ",(0,o.kt)("inlineCode",{parentName:"li"},"stakingBalance"),"."),(0,o.kt)("li",{parentName:"ol"},"However, if this account calls ",(0,o.kt)("inlineCode",{parentName:"li"},"voteLock(8 * 10^18, base + x)"),", the transaction will success."),(0,o.kt)("li",{parentName:"ol"},"After that, if this account calls ",(0,o.kt)("inlineCode",{parentName:"li"},"voteLock(6 * 10^18, base + x + y)"),", the transaction will also success. It means that 8 - 6 = 2 CFX will be unlocked until the end of this year, and another 6 CFX will be locked until the end of next year."),(0,o.kt)("li",{parentName:"ol"},"Then, if this account calls ",(0,o.kt)("inlineCode",{parentName:"li"},"voteLock(0, base + x)"),", nothing will happen. The transaction will not trigger an error during execution. The internal contract will regard this call as a meaningless promise: the account will stake at least 0 CFX. The old promises made in step 2 and step 3 will still hold."),(0,o.kt)("li",{parentName:"ol"},"If this account calls ",(0,o.kt)("inlineCode",{parentName:"li"},"voteLock(9 * 10^18, base + x + y)"),', the old two promises will be overwritten because "locking 9 CFX until the end of the next year" is a stronger promise.')),(0,o.kt)("p",null,"At any time, each locked Drip will be assigned a ",(0,o.kt)("em",{parentName:"p"},"vote power")," from 0 to 1 according to its unlock time. The Drips to be unlocked in more than one year will have a full vote power. See section 8.3.2 in the ",(0,o.kt)("a",{parentName:"p",href:"https://conflux-protocol.s3-ap-southeast-1.amazonaws.com/tech-specification.pdf"},"Conflux Protocol Specification")," for more details."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const PRIVATE_KEY = '0xxxxxxx';\nconst cfx = new Conflux({\n  url: 'https://test.confluxrpc.com',\n  logger: console,\n  networkId: 1,\n});\nconst account = cfx.wallet.addPrivateKey(PRIVATE_KEY); // create account instance\n\nconst staking_contract = cfx.InternalContract('Staking');\n// deposit some amount of tokens\nstaking_contract.deposit(your_number_of_tokens).sendTransaction({\n  from: account,\n}).confirmed();\n\n// withdraw some amount of tokens\nstaking_contract.withdraw(your_number_of_tokens).sendTransaction({\n  from: account,\n}).confirmed();\n\n// lock some tokens until some block number\nstaking_contract.voteLock(your_number_of_tokens, your_unlock_block_number).sendTransaction({\n  from: account,\n}).confirmed();\n")))}m.isMDXComponent=!0}}]);