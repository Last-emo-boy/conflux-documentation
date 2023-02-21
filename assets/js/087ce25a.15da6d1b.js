"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8933],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(a),p=o,h=d["".concat(s,".").concat(p)]||d[p]||f[p]||r;return a?n.createElement(h,c(c({ref:t},u),{},{components:a})):n.createElement(h,c({ref:t},u))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:8,title:"Accounts",keywords:["to modify"]},c="Accounts",i={unversionedId:"general/conflux-basics/accounts",id:"general/conflux-basics/accounts",title:"Accounts",description:"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036415f",source:"@site/docs/general/conflux-basics/accounts.md",sourceDirName:"general/conflux-basics",slug:"/general/conflux-basics/accounts",permalink:"/docs/general/conflux-basics/accounts",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Accounts",keywords:["to modify"]},sidebar:"tutorialSidebar",previous:{title:"Spaces",permalink:"/docs/general/conflux-basics/spaces"},next:{title:"Contracts",permalink:"/docs/general/conflux-basics/contracts"}},s={},l=[{value:"Types of Accounts",id:"types-of-accounts",level:2},{value:"Similarities of Accounts",id:"similarities-of-accounts",level:2},{value:"Differences of Accounts",id:"differences-of-accounts",level:2},{value:"External Accounts",id:"external-accounts",level:3},{value:"Smart Contracts",id:"smart-contracts",level:3},{value:"External Accounts and Public-private Key Pairs",id:"external-accounts-and-public-private-key-pairs",level:2},{value:"Smart Contract Account",id:"smart-contract-account",level:2},{value:"Details of Accounts",id:"details-of-accounts",level:2}],u={toc:l};function f(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"accounts"},"Accounts"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Account")," is a very important object entity in the Conflux network. It is used to store CFX (every account has its CFX balance) and send Conflux transactions. Accounts and account balances are stored in a huge table in the Conflux VM, and they are part of the full state of the Conflux ledger."),(0,o.kt)("h2",{id:"types-of-accounts"},"Types of Accounts"),(0,o.kt)("p",null,"Conflux has two types of accounts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"External accounts (private key accounts) - are controlled by the holder of the private key"),(0,o.kt)("li",{parentName:"ul"},"Smart Contracts - are the ones deployed in the network and controlled by the contract codes")),(0,o.kt)("p",null,"Note: There is a special type of smart contract in the Conflux network - ",(0,o.kt)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/conflux-rust/internal_contract/internal_contract/"},"the internal contracts"),". They are created automatically when the network is started or upgraded, but not by deploying contract codes. There are currently 6 internal contracts."),(0,o.kt)("h2",{id:"similarities-of-accounts"},"Similarities of Accounts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Both of them can accept, hold, and send CFX and tokens"),(0,o.kt)("li",{parentName:"ul"},"Both of them can interact with smart contracts in the network")),(0,o.kt)("h2",{id:"differences-of-accounts"},"Differences of Accounts"),(0,o.kt)("h3",{id:"external-accounts"},"External Accounts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creating external accounts does not have costs, such as CFX or other resources"),(0,o.kt)("li",{parentName:"ul"},"They can send transactions to others"),(0,o.kt)("li",{parentName:"ul"},"Transactions between external accounts can only be CFX or token transactions")),(0,o.kt)("h3",{id:"smart-contracts"},"Smart Contracts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creating smart contracts does have costs, as it uses the network's storage and computational resources"),(0,o.kt)("li",{parentName:"ul"},"Transactions can only be sent to other contracts as a response to a received transaction"),(0,o.kt)("li",{parentName:"ul"},"Transactions sent from external accounts to contract accounts can trigger the smart contract's codes to perform many different operations, such as token transfers, creating new contracts, etc.")),(0,o.kt)("h2",{id:"external-accounts-and-public-private-key-pairs"},"External Accounts and Public-private Key Pairs"),(0,o.kt)("p",null,"When you want to create an external account, you can use a wallet, like FluentWallet, or any language library, where essentially both of them generate a random private key."),(0,o.kt)("p",null,"A private key contains 64 hexadecimal characters and can be encrypted using a password."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036415f\n")),(0,o.kt)("p",null,"The public key is calculated from the private key by the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm"},"Elliptic Curve Cryptography Algorithm"),". Then, Keccak-256 hashing is performed on the public key, and the Conflux address is yielded by encoding the last 20 bytes (the first 4 bit will be set to 0001) of the result with base 32 formats."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Mainnet address\ncfx:aatktb2te25ub7dmyag3p8bbdgr31vrbeackztm2rj\n// Testnet address\ncfxtest:aatktb2te25ub7dmyag3p8bbdgr31vrbeajcg9pwkc\n")),(0,o.kt)("p",null,"The public key can be calculated from the private key, but the private key cannot be calculated from the public key. The private key has to be kept safe by the user."),(0,o.kt)("h2",{id:"smart-contract-account"},"Smart Contract Account"),(0,o.kt)("p",null,"Smart contracts also have base32 encoded addresses"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cfx:acf2rcsh8payyxpg6xj7b0ztswwh81ute60tsw35j7\n")),(0,o.kt)("p",null,"This address is determined when the contract is deployed and is calculated by the deployed transaction's ",(0,o.kt)("inlineCode",{parentName:"p"},"sender address"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"nonce"),", and the smart contract's code."),(0,o.kt)("p",null,"Note: The addresses of internal contracts are special - they are assigned by the network itself."),(0,o.kt)("h2",{id:"details-of-accounts"},"Details of Accounts"),(0,o.kt)("p",null,"The global state of Conflux is composed of individual account states, each of which is an address-state pair (key pair)."),(0,o.kt)("p",null,"A Conflux account state includes five parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Basic state")," is the basic state of the account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Storage state")," is a key/value database or storage space that can be used to store custom states or data of smart contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Code information")," is the code information of the smart contract account. It includes the contract codes and the ",(0,o.kt)("inlineCode",{parentName:"li"},"address")," of the account that paid the fee for the storage space occupied by the codes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Staking deposit list")," is the list of Staking operations of the accounts (it will be removed in the next Hardfork)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Staking vote lock list")," is the list of lock operations performed by the account to participate in DAO voting.")),(0,o.kt)("p",null,"The basic status of the account consists of eight fields as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Nonce")," is a counter to keep track of the number of transactions sent by an account. It is also used to ensure that each transaction can only be executed once. For contract accounts, this value indicates the number of ",(0,o.kt)("inlineCode",{parentName:"li"},"contracts created by this contract"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Balance")," is the number of CFX of the address in Drip. Drip is the smallest unit of CFX, where 1CFX=1018 Drip."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CodeHash")," is the hash of the code of the contract account. The user can reference the contract code, the code cannot be modified after the contract is created. The code will be executed when the contract receives a message call. For external accounts, codeHash is a hash of an empty string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StakingBalance")," is the balance of the staked amount. Similarly, the unit is Drip."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Admin")," is the administrator address of the ",(0,o.kt)("inlineCode",{parentName:"li"},"contract account")," recorded in the AdminControl internal contract. In default, the contract administrator is set to the account which deployed this contract when it is created. The administrator can destroy the contract it manages through the internal contract AdminControl, or give the administrator role to another account. The administrator address of an external account is itself."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SponsorInfo")," is the information of the contract sponsor. It contains ",(0,o.kt)("inlineCode",{parentName:"li"},"sponsor for gas"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"sponsor for collateral"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"sponsor gas limit"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"sponsor balance for gas"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"sponsor balance for collateral"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StorageCollateral")," is the amount of Drip staked to use the storage spaces."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AccumulatedInterestReturn")," is the amount of cumulative reward of the account from Staking. The unit of it is Drip. Starting with Conflux 2.0, users must also participate in PoS in order to receive the reward.")),(0,o.kt)("p",null,"For more details about accounts, please refer to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Accounts")," section in ",(0,o.kt)("a",{parentName:"p",href:"https://www.confluxnetwork.org/files/Conflux_Protocol_Specification.pdf"},"Conflux Protocol Specification"),"."))}f.isMDXComponent=!0}}]);