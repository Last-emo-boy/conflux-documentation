"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2540],{4137:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(t),f=r,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||c;return t?n.createElement(m,s(s({ref:a},d),{},{components:t})):n.createElement(m,s({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,s=new Array(c);s[0]=f;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<c;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9274:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=t(7462),r=(t(7294),t(4137));const c={sidebar_position:10,title:"Cuentas y Direcciones"},s=void 0,o={unversionedId:"general/conflux-basics/accounts",id:"general/conflux-basics/accounts",title:"Cuentas y Direcciones",description:"Informaci\xf3n general",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/conflux-basics/accounts.md",sourceDirName:"general/conflux-basics",slug:"/general/conflux-basics/accounts",permalink:"/es/docs/general/conflux-basics/accounts",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Cuentas y Direcciones"},sidebar:"tutorialSidebar",previous:{title:"Transactions",permalink:"/es/docs/general/conflux-basics/transactions"},next:{title:"Gas",permalink:"/es/docs/general/conflux-basics/gas"}},i={},l=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Address",id:"address",level:2},{value:"Tipos de cuentas",id:"tipos-de-cuentas",level:2},{value:"Cuentas de propiedad externa (EOA) y pares de claves p\xfablica-privada",id:"cuentas-de-propiedad-externa-eoa-y-pares-de-claves-p\xfablica-privada",level:3},{value:"Smart Contract Accounts",id:"smart-contract-accounts",level:3},{value:"Comparison of Different Account Types",id:"comparison-of-different-account-types",level:2},{value:"Similarities",id:"similarities",level:3},{value:"Differences",id:"differences",level:3},{value:"External Accounts",id:"external-accounts",level:4},{value:"Smart Contracts",id:"smart-contracts",level:4},{value:"Related Topics",id:"related-topics",level:2}],d={toc:l},u="wrapper";function p(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"informaci\xf3n-general"},"Informaci\xf3n general"),(0,r.kt)("p",null,'Las cuentas en Conflux se pueden comparar con "cuentas bancarias", ya que almacenan CFX. Los usuarios pueden crear y administrar sus cuentas, depositar CFX y enviar transacciones. La direcci\xf3n de la cuenta es una cadena \xfanica que identifica una cuenta y se utiliza para recuperar la informaci\xf3n de la cuenta de la enorme tabla de la Conflux VM, que almacena la informaci\xf3n y el saldo de la cuenta.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"La apertura de la cuenta, incluyendo el contenido de la cuenta y la regla de c\xe1lculo de direcciones es ligeramente diferente en ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/core/learn/core-space-basics/accounts"},"Core Space")," y ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/espace/learn/accounts"},"eSpace"),".")),(0,r.kt)("h2",{id:"address"},"Address"),(0,r.kt)("p",null,"Las direcciones de las cuentas, como n\xfameros de cuenta bancaria, identifican las cuentas y pueden ser examinadas en ",(0,r.kt)("a",{parentName:"p",href:"https://confluxscan.io"},"ConfluxScan"),". Sin embargo, el formato difieren entre el ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/core/learn/core-space-basics/addresses"},"Core Space")," y el eSpace. El espacio central utiliza el esquema de codificaci\xf3n CIP-37, mientras que el espacio utiliza el mismo formato que Ethereum."),(0,r.kt)("p",null,"Estos son ejemplos que muestran el formato de las direcciones en los 2 espacios:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// espace address\n0x1e97870f263700f46aa00d967821199b9bc5a120\n// Core Space Mainnet address\ncfx:aatktb2te25ub7dmyag3p8bbdgr31vrbeackztm2rj\n// Core Space Testnet address\ncfxtest:aatktb2te25ub7dmyag3p8bbdgr31vrbeajcg9pwkc\n")),(0,r.kt)("h2",{id:"tipos-de-cuentas"},"Tipos de cuentas"),(0,r.kt)("p",null,"Existen dos tipos de cuentas, las cuentas de propiedad externa (EOA) y las cuentas de los contratos. La EOA est\xe1 controlada por quien posea las claves privadas de la cuenta, mientras que la cuenta de un contrato es un Smart Contract (contrato inteligente) desplegado en la red, controlado por su c\xf3digo."),(0,r.kt)("h3",{id:"cuentas-de-propiedad-externa-eoa-y-pares-de-claves-p\xfablica-privada"},"Cuentas de propiedad externa (EOA) y pares de claves p\xfablica-privada"),(0,r.kt)("p",null,"EOAs consist of a cryptographic pair of keys: a public and a private key. The private key, which is a 64 hexadecimal character string, is used to sign transactions and grants custody over the funds associated with the account. Public-key cryptography ensures that a transaction is not forged and that the sender can prove the authenticity of the transaction request. This protects against malicious actors broadcasting fake transactions."),(0,r.kt)("p",null,"Here is an example of private key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"c5eca1e5de819725cf7c6764f4bba7eea95549a40275b21eaff91554c59bef90\n")),(0,r.kt)("p",null,"The public key is calculated from the private key by the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm"},"Elliptic Curve Cryptography Algorithm"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0xa82d8039606ea598798ae1c995e2dbad90561d67ffa9555f96e0bc3dbc38c32aa1ede8ab17a137b8515b94b158b49a746c77abc432c2677cb0a6d3240be98872\n")),(0,r.kt)("p",null,"An EOA's address is then computed from its public key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// espace address, encoded in EIP-55 checksum format\n0x7058Ce27AF14B05943B879E530Df642867dFcf57\n// core space mainnet address (encoded in CIP-37 format)\ncfx:aajfvxvhz6mna0md1b68mpg9puygt18tm6nynadnf6\n")),(0,r.kt)("h3",{id:"smart-contract-accounts"},"Smart Contract Accounts"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/es/docs/general/conflux-basics/contracts"},"Smart contracts")," also have addresses, and users can interact with them by sending transactions. The contract address is determined when the contract is deployed, and the computation rule differs between core space and espace."),(0,r.kt)("h2",{id:"comparison-of-different-account-types"},"Comparison of Different Account Types"),(0,r.kt)("h3",{id:"similarities"},"Similarities"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Both of them can accept, hold, and send CFX."),(0,r.kt)("li",{parentName:"ul"},"Both of them can interact with smart contracts in the network")),(0,r.kt)("h3",{id:"differences"},"Differences"),(0,r.kt)("h4",{id:"external-accounts"},"External Accounts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating external accounts does not have costs, such as CFX or other resources"),(0,r.kt)("li",{parentName:"ul"},"They can send transactions to others"),(0,r.kt)("li",{parentName:"ul"},"Transactions between external accounts can only be CFX or token transactions")),(0,r.kt)("h4",{id:"smart-contracts"},"Smart Contracts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating smart contracts does have costs, as it uses the network's storage and computational resources"),(0,r.kt)("li",{parentName:"ul"},"Transactions can only be sent to other contracts as a response to a received transaction"),(0,r.kt)("li",{parentName:"ul"},"Transactions sent from external accounts to contract accounts can trigger the smart contract's codes to perform many different operations, such as token transfers, creating new contracts, etc.")),(0,r.kt)("h2",{id:"related-topics"},"Related Topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/accounts/"},"Ethereum Accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/es/docs/core/learn/core-space-basics/accounts"},"Core space accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/es/docs/espace/learn/accounts"},"espace accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/es/docs/core/learn/core-space-basics/addresses"},"Core space addresses"))))}p.isMDXComponent=!0}}]);