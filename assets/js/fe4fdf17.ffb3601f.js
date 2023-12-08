"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:4,title:"Accounts",displayed_sidebar:"coreSidebar"},i=void 0,c={unversionedId:"core/core-space-basics/accounts",id:"core/core-space-basics/accounts",title:"Accounts",description:"This page is created to provide information for CORE SPACE ACCOUNTS. Refer to General-Accounts for the overall introduction of the concept of ACCOUNTS.",source:"@site/docs/core/core-space-basics/accounts.md",sourceDirName:"core/core-space-basics",slug:"/core/core-space-basics/accounts",permalink:"/docs/core/core-space-basics/accounts",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/core-space-basics/accounts.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Accounts",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"Sponsorship Mechanism",permalink:"/docs/core/core-space-basics/sponsor-mechanism"},next:{title:"Transactions",permalink:"/docs/core/core-space-basics/transaction_explain"}},s={},l=[{value:"Account Address",id:"account-address",level:2},{value:"Account State",id:"account-state",level:2},{value:"Query",id:"query",level:3},{value:"Illustration",id:"illustration",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This page is created to provide information for CORE SPACE ACCOUNTS. Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/general/conflux-basics/accounts"},"General-Accounts")," for the overall introduction of the concept of ACCOUNTS.")),(0,o.kt)("h2",{id:"account-address"},"Account Address"),(0,o.kt)("p",null,"An account is identified by its address. For more information, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/core-space-basics/addresses"},"Address")),(0,o.kt)("h2",{id:"account-state"},"Account State"),(0,o.kt)("h3",{id:"query"},"Query"),(0,o.kt)("p",null,"The account state can be queried using ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/build/json-rpc/cfx-namespace#cfx_getaccount"},"cfx_getAccount RPC"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// Request\ncurl --data \'{"jsonrpc":"2.0","method":"cfx_getAccount","params":["cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp", "latest_state"],"id":1}\' -H "Content-Type: application/json" localhost:12539\n\n// Result\n{\n  "jsonrpc": "2.0",\n  "result": {\n    "accumulatedInterestReturn": "0x0",\n    "admin": "CFX:TYPE.USER:AARC9ABYCUE0HHZGYRR53M6CXEDGCCRMMYYBJGH4XG",\n    "balance": "0x0",\n    "codeHash": "0x45fed62dd2b7c5ed76a63628ddc811e69bb5770cf31dd55647ca219aaee5434f",\n    "collateralForStorage": "0x0",\n    "nonce": "0x1",\n    "stakingBalance": "0x0"\n  },\n  "id": 1\n}\n')),(0,o.kt)("h3",{id:"illustration"},"Illustration"),(0,o.kt)("p",null,"The global state of Conflux is composed of individual account states, each of which is an address-state pair (key pair)."),(0,o.kt)("p",null,"A Conflux account state includes five parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Basic state")," is the basic state of the account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Storage state")," is a key/value database or storage space that can be used to store custom states or data of smart contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Code information")," is the code information of the smart contract account. It includes the contract codes and the ",(0,o.kt)("inlineCode",{parentName:"li"},"address")," of the account that paid the fee for the storage space occupied by the codes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Staking deposit list")," is the list of Staking operations of the accounts (it will be removed in the next Hardfork)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Staking vote lock list")," is the list of lock operations performed by the account to participate in DAO voting.")),(0,o.kt)("p",null,"The basic status of the account consists of eight fields as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Nonce")," is a counter to keep track of the number of transactions sent by an account. It is also used to ensure that each transaction can only be executed once. For contract accounts, this value indicates the number of ",(0,o.kt)("inlineCode",{parentName:"li"},"contracts created by this contract"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Balance")," is the number of CFX of the address in Drip. Drip is the smallest unit of CFX, where 1CFX=1018 Drip."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CodeHash")," is the hash of the code of the contract account. The user can reference the contract code, the code cannot be modified after the contract is created. The code will be executed when the contract receives a message call. For external accounts, codeHash is a hash of an empty string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StakingBalance")," is the balance of the staked amount. Similarly, the unit is Drip."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Admin")," is the administrator address of the ",(0,o.kt)("inlineCode",{parentName:"li"},"contract account")," recorded in the AdminControl internal contract. In default, the contract administrator is set to the account which deployed this contract when it is created. The administrator can destroy the contract it manages through the internal contract AdminControl, or give the administrator role to another account. The administrator address of an external account is itself."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SponsorInfo")," is the information of the contract sponsor. It contains ",(0,o.kt)("inlineCode",{parentName:"li"},"sponsor for gas"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"sponsor for collateral"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"sponsor gas limit"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"sponsor balance for gas"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"sponsor balance for collateral"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StorageCollateral")," is the amount of Drip staked to use the storage spaces."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AccumulatedInterestReturn")," is the amount of cumulative reward of the account from Staking. The unit of it is Drip. Starting with Conflux 2.0, users must also participate in PoS in order to receive the reward.")),(0,o.kt)("p",null,"For more details about accounts, please refer to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Accounts")," section in ",(0,o.kt)("a",{parentName:"p",href:"https://www.confluxnetwork.org/files/Conflux_Protocol_Specification.pdf"},"Conflux Protocol Specification"),"."))}p.isMDXComponent=!0}}]);