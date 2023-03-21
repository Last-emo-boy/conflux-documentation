"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5,title:"Glossary"},s=void 0,i={unversionedId:"general/conflux-basics/glossary",id:"general/conflux-basics/glossary",title:"Glossary",description:"account",source:"@site/docs/general/conflux-basics/glossary.md",sourceDirName:"general/conflux-basics",slug:"/general/conflux-basics/glossary",permalink:"/docs/general/conflux-basics/glossary",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/conflux-basics/glossary.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Glossary"},sidebar:"tutorialSidebar",previous:{title:"Why Introducing PoS?",permalink:"/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos"},next:{title:"Economics",permalink:"/docs/general/conflux-basics/economics"}},c={},l=[{value:"account",id:"account",level:2},{value:"address",id:"address",level:2},{value:"CFX",id:"cfx",level:2},{value:"chainId &amp; networkId",id:"chainid--networkid",level:2},{value:"spaces",id:"spaces",level:2},{value:"transactions",id:"transactions",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"account"},"account"),(0,r.kt)("p",null,"The Conflux global state is described in an account model, with the basic storage component called an account. Every actor, which is either a person or an entity that is able to interact with the Conflux world, has its necessary information stored in an account \u03b1 as a key/value pair of ",(0,r.kt)("a",{parentName:"p",href:"#address"},"address")," and corresponding state. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/general/conflux-basics/accounts"},"general-accounts")," for detailed information."),(0,r.kt)("h2",{id:"address"},"address"),(0,r.kt)("p",null,"Address is the identifier of an ",(0,r.kt)("a",{parentName:"p",href:"#account"},"account"),". The address format differs in different Conflux ",(0,r.kt)("a",{parentName:"p",href:"/docs/general/conflux-basics/spaces"},"spaces"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// espace address\n0x1e97870f263700f46aa00d967821199b9bc5a120\n// Core Space Mainnet address\ncfx:aatktb2te25ub7dmyag3p8bbdgr31vrbeackztm2rj\n// Core Space Testnet address\ncfxtest:aatktb2te25ub7dmyag3p8bbdgr31vrbeajcg9pwkc\n")),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/general/conflux-basics/accounts#address"},"general-address"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/learn/core-space-basics/addresses"},"core-address"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/espace/learn/accounts#mapped-addresses-in-cross-space-operations"},"espace-address")," for more information."),(0,r.kt)("h2",{id:"cfx"},"CFX"),(0,r.kt)("p",null,"To incentivize the maintenance of the Conflux network and charge users for consumption of resources, Conflux has a native currency called the Conflux coin, simply denoted by CFX for short. The smallest subdenomination is denoted by Drip, in which all values processed in Conflux are integers. One Conflux is defined as 10^18 Drip. Frequently used subdenominations of Conflux are listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Multiplier (in Drip)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10^0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Drip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10^9"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GDrip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10^12"),(0,r.kt)("td",{parentName:"tr",align:"center"},"uCFX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10^18"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Conflux(CFX)")))),(0,r.kt)("p",null,"As a native token of the Conflux network, CFX plays a very important role in the stability of the system"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- It works as the reward of PoW and PoS consensus \n- the transaction fee for each transaction.\n- DAO voting\n- ...\n")),(0,r.kt)("p",null,"For more information on the genesis creation, distribution, and release of CFX, please refer to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://confluxnetwork.org/files/Conflux_Economic_Paper_20201230.pdf"},"Economics white paper")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/conflux-network/the-role-of-the-cfx-token-in-the-conflux-network-5a56c2b43bb0"},"The Role of the CFX token in the Conflux Network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-94.md"},"On-chain DAO Vote for Chain Parameters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/general/conflux-basics/economics"},"Economics"))),(0,r.kt)("h2",{id:"chainid--networkid"},"chainId & networkId"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chainId")," is a number indicating where a transaction is intended to be executed. It is used to prevent transaction replay attacks.\nThe chainId of Conflux is a constant, currently:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mainnet: ",(0,r.kt)("inlineCode",{parentName:"li"},"1029")),(0,r.kt)("li",{parentName:"ul"},"testnet: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"networkId")," is used to distinguish between blockchains at the network layer. Currently Conflux mainnet/testnet's ",(0,r.kt)("inlineCode",{parentName:"p"},"networkId")," is same as ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId"),".\nYou can get both of these from the ",(0,r.kt)("inlineCode",{parentName:"p"},"cfx_getStatus")," RPC method."),(0,r.kt)("h2",{id:"spaces"},"spaces"),(0,r.kt)("p",null,'In the Conflux v2.0 (Hydra) upgrade, a new feature called "Spaces" was introduced. Spaces is a way to virtually create a sub-chain of the original Conflux network, known as ',(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"eSpace")),".  Core Space refers to the original Conflux network, while eSpace is the virtualized Ethereum chain running on top of the Core Space network. The two spaces are logically independent of each other and do not affect each other."),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/general/conflux-basics/spaces"},"spaces")," for more information."),(0,r.kt)("h2",{id:"transactions"},"transactions"),(0,r.kt)("p",null,"A Conflux transaction is a single instruction composed by an external actor with a Conflux account, and this instruction is cryptographically signed using the sender account's private key to prevent transaction forge. A transaction can involve a simple transfer of CFX (the native currency of Conflux), a transfer of tokens (such as ERC20 or ERC721), a deployment of a new smart contract, or an execution of a function on an existing smart contract. Transactions are the only way to store or update data on the blockchain."),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/general/conflux-basics/transactions"},"transactions")," for more information."))}u.isMDXComponent=!0}}]);