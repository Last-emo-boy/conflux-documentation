"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8933],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(a),f=r,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||c;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,s=new Array(c);s[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<c;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=a(7462),r=(a(7294),a(4137));const c={sidebar_position:10,title:"Accounts and Addresses",displayed_sidebar:"generalSidebar"},s=void 0,o={unversionedId:"general/conflux-basics/accounts",id:"general/conflux-basics/accounts",title:"Accounts and Addresses",description:"Overview",source:"@site/docs/general/conflux-basics/accounts.md",sourceDirName:"general/conflux-basics",slug:"/general/conflux-basics/accounts",permalink:"/docs/general/conflux-basics/accounts",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/conflux-basics/accounts.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Accounts and Addresses",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Transactions",permalink:"/docs/general/conflux-basics/transactions"},next:{title:"Gas",permalink:"/docs/general/conflux-basics/gas"}},i={},l=[{value:"Overview",id:"overview",level:2},{value:"Address",id:"address",level:2},{value:"Account Types",id:"account-types",level:2},{value:"External Accounts and Public-private Key Pairs",id:"external-accounts-and-public-private-key-pairs",level:3},{value:"Smart Contract Accounts",id:"smart-contract-accounts",level:3},{value:"Comparison of Different Account Types",id:"comparison-of-different-account-types",level:2},{value:"Similarities",id:"similarities",level:3},{value:"Differences",id:"differences",level:3},{value:"External Accounts",id:"external-accounts",level:4},{value:"Smart Contracts",id:"smart-contracts",level:4},{value:"Related Topics",id:"related-topics",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,'Accounts in Conflux can be compared to "bank accounts", as they store CFX. Users can create and manage their accounts, deposit CFX, and send transactions. The account address is a unique string that identifies an account and is used to retrieve account information from the Conflux VM\'s huge table, which stores the account content and balance. '),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The account implementation, including the account content and address computing rule is slightly different in ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/learn/core-space-basics/accounts"},"core space")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/espace/build/accounts"},"espace"),".")),(0,r.kt)("h2",{id:"address"},"Address"),(0,r.kt)("p",null,"Account addresses, like bank account numbers, identify accounts and can be examined on ",(0,r.kt)("a",{parentName:"p",href:"https://confluxscan.io"},"ConfluxScan"),". However, the address format differs between ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/learn/core-space-basics/addresses"},"core space")," and espace. Core space uses the CIP-37 encoding scheme, while espace uses the same format as Ethereum."),(0,r.kt)("p",null,"Here are examples showing the address format in the 2 spaces:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// espace address\n0x1e97870f263700f46aa00d967821199b9bc5a120\n// Core Space Mainnet address\ncfx:aatktb2te25ub7dmyag3p8bbdgr31vrbeackztm2rj\n// Core Space Testnet address\ncfxtest:aatktb2te25ub7dmyag3p8bbdgr31vrbeajcg9pwkc\n")),(0,r.kt)("h2",{id:"account-types"},"Account Types"),(0,r.kt)("p",null,"There are two account types, the externally-owned account (EOA) and the contract account. The EOA is controlled by anyone with the private keys of the account, while the contract account is a smart contract deployed on the network, controlled by its code."),(0,r.kt)("h3",{id:"external-accounts-and-public-private-key-pairs"},"External Accounts and Public-private Key Pairs"),(0,r.kt)("p",null,"EOAs consist of a cryptographic pair of keys: a public and a private key. The private key, which is a 64 hexadecimal character string, is used to sign transactions and grants custody over the funds associated with the account. Public-key cryptography ensures that a transaction is not forged and that the sender can prove the authenticity of the transaction request. This protects against malicious actors broadcasting fake transactions."),(0,r.kt)("p",null,"Here is an example of private key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"c5eca1e5de819725cf7c6764f4bba7eea95549a40275b21eaff91554c59bef90\n")),(0,r.kt)("p",null,"The public key is calculated from the private key by the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm"},"Elliptic Curve Cryptography Algorithm"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0xa82d8039606ea598798ae1c995e2dbad90561d67ffa9555f96e0bc3dbc38c32aa1ede8ab17a137b8515b94b158b49a746c77abc432c2677cb0a6d3240be98872\n")),(0,r.kt)("p",null,"An EOA's address is then computed from its public key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// espace address, encoded in EIP-55 checksum format\n0x7058Ce27AF14B05943B879E530Df642867dFcf57\n// core space mainnet address (encoded in CIP-37 format)\ncfx:aajfvxvhz6mna0md1b68mpg9puygt18tm6nynadnf6\n")),(0,r.kt)("h3",{id:"smart-contract-accounts"},"Smart Contract Accounts"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/general/conflux-basics/contracts"},"Smart contracts")," also have addresses, and users can interact with them by sending transactions. The contract address is determined when the contract is deployed, and the computation rule differs between core space and espace."),(0,r.kt)("h2",{id:"comparison-of-different-account-types"},"Comparison of Different Account Types"),(0,r.kt)("h3",{id:"similarities"},"Similarities"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Both of them can accept, hold, and send CFX."),(0,r.kt)("li",{parentName:"ul"},"Both of them can interact with smart contracts in the network")),(0,r.kt)("h3",{id:"differences"},"Differences"),(0,r.kt)("h4",{id:"external-accounts"},"External Accounts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating external accounts does not have costs, such as CFX or other resources"),(0,r.kt)("li",{parentName:"ul"},"They can send transactions to others"),(0,r.kt)("li",{parentName:"ul"},"Transactions between external accounts can only be CFX or token transactions")),(0,r.kt)("h4",{id:"smart-contracts"},"Smart Contracts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating smart contracts does have costs, as it uses the network's storage and computational resources"),(0,r.kt)("li",{parentName:"ul"},"Transactions can only be sent to other contracts as a response to a received transaction"),(0,r.kt)("li",{parentName:"ul"},"Transactions sent from external accounts to contract accounts can trigger the smart contract's codes to perform many different operations, such as token transfers, creating new contracts, etc.")),(0,r.kt)("h2",{id:"related-topics"},"Related Topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/accounts/"},"Ethereum Accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/core/learn/core-space-basics/accounts"},"Core space accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/espace/build/accounts"},"espace accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/core/learn/core-space-basics/addresses"},"Core space addresses"))))}p.isMDXComponent=!0}}]);