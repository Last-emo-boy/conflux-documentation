"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7507],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(a),f=s,h=l["".concat(i,".").concat(f)]||l[f]||u[f]||n;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,o=new Array(n);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[l]="string"==typeof e?e:s,o[1]=c;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var r=a(7462),s=(a(7294),a(4137));const n={sidebar_position:5,title:"eSpace Mapped Addresses(Cross Space)",description:"Mapped addresses in cross-space operations"},o=void 0,c={unversionedId:"espace/build/accounts",id:"espace/build/accounts",title:"eSpace Mapped Addresses(Cross Space)",description:"Mapped addresses in cross-space operations",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/espace/build/accounts.md",sourceDirName:"espace/build",slug:"/espace/build/accounts",permalink:"/es/docs/espace/build/accounts",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"eSpace Mapped Addresses(Cross Space)",description:"Mapped addresses in cross-space operations"},sidebar:"tutorialSidebar",previous:{title:"CrossSpaceCall Contract",permalink:"/es/docs/espace/build/cross-space-bridge"},next:{title:"Resources",permalink:"/es/docs/category/resources"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Mapped Addresses in Cross-Space Operations",id:"mapped-addresses-in-cross-space-operations",level:2},{value:"computation",id:"computation",level:3},{value:"Related Topics",id:"related-topics",level:2}],d={toc:p},l="wrapper";function u(e){let{components:t,...a}=e;return(0,s.kt)(l,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Conflux eSpace is an independent space that is logically isolated from the Core space on Conflux Network. Accounts in the eSpace have their own balance and status. To interact with the eSpace, you need to use hex40 addresses, which are different from ",(0,s.kt)("a",{parentName:"p",href:"/es/docs/core/learn/core-space-basics/addresses"},"base32 addresses")," used for the Core space. You can transfer funds between your Core and eSpace wallets using a ",(0,s.kt)("a",{parentName:"p",href:"/es/docs/general/tutorials/transferring-funds/transfer-funds-across-spaces"},"bridge service"),"."),(0,s.kt)("p",null,"Conflux eSpace is a new feature introduced by Conflux Network in its V2 hard fork. It is an independent space that runs on the same underlying infrastructure as the Core space, but with different rules and specifications. In the eSpace, accounts follow the Ethereum account model and use hex40 addresses instead of ",(0,s.kt)("a",{parentName:"p",href:"/es/docs/core/learn/core-space-basics/addresses"},"base32 addresses"),". This means it is ok to use the same private key in core space and espace, but the account in core space and espace will have different addresses and will have their own balance and status."),(0,s.kt)("p",null,"Hex40 addresses are compatible with Ethereum addresses, which means that users can easily import their Ethereum wallets to Conflux eSpace and vice versa. Learn more about basic model of eSpace accounts and addresses at ",(0,s.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/accounts/"},"Ethereum Accounts"),"."),(0,s.kt)("h2",{id:"mapped-addresses-in-cross-space-operations"},"Mapped Addresses in Cross-Space Operations"),(0,s.kt)("p",null,"Although the two spaces are independent, atomic-crossing of CFX and data can be achieved through the ",(0,s.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall")," internal contract. The following three methods of this contract allow CFX transfers between the two spaces. Note that ",(0,s.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall")," (like other internal contracts) can only be accessed in the Conflux Core space."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function transferEVM(bytes20 to) external payable returns (bytes memory output);\nfunction mappedBalance(address addr) external view returns (uint256);\nfunction withdrawFromMapped(uint256 value) external;\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Core to eSpace"),": To transfer CFX from Conflux Core to Conflux eSpace, the ",(0,s.kt)("inlineCode",{parentName:"p"},"transferEVM(bytes20 to)")," method of this contract needs to be called. The destination address of this transfer is specified by the method parameter ",(0,s.kt)("inlineCode",{parentName:"p"},"to"),". The cross-space transfer will be executed in a single atomic step."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"eSpace to Core"),": Each account in Core Space has a ",(0,s.kt)("strong",{parentName:"p"},"mapped account")," (hex40) in eSpace. To transfer CFX from Conflux eSpace to Conflux Core, two steps are required. First, transfer CFX to the mapped account (eSpace) that belongs to the destination account (Core Space). This action requires an eSpace transaction. Second, call the ",(0,s.kt)("inlineCode",{parentName:"p"},"withdrawFromMapped(uint256 value)")," method of the ",(0,s.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall")," internal contract. This call with transfer the CFX from the mapped account back to the corresponding destination address."),(0,s.kt)("h3",{id:"computation"},"computation"),(0,s.kt)("p",null,"The mapped address is calculated from the base32 address in Conflux Core through the following steps:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Convert the base32 address to hex format, and then convert to bytes type."),(0,s.kt)("li",{parentName:"ol"},"Keccak the bytes from the previous step to get the hash."),(0,s.kt)("li",{parentName:"ol"},"Take the last 160 bits of the hash and convert it to hex40 format, which is the mapped eSpace address.")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"js-conflux-sdk v2.0")," provides a method to get the mapped address of the base32 address:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { address } = require('js-conflux-sdk');\nconst base32Address = 'cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91';\nconst mappedAddress = address.cfxMappedEVMSpaceAddress(base32Address);\n// 0x12Bf6283CcF8Ad6ffA63f7Da63EDc217228d839A\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Notes about the mapped address:"),(0,s.kt)("ol",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ol"},"The mapped address is an address in eSpace, so it has a hex40 format."),(0,s.kt)("li",{parentName:"ol"},"The purpose of the mapped address is to serve as a transit address when crossing CFX back to Core space."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Remember NOT to convert the base32 address directly to hex40 format as the mapped address. This action will result in the loss of your assets")))),(0,s.kt)("h2",{id:"related-topics"},"Related Topics"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Cross space dApp tutorial: ",(0,s.kt)("a",{parentName:"li",href:"/es/docs/general/tutorials/transferring-funds/transfer-funds-across-spaces"},"Transferring Funds Across Spaces"))))}u.isMDXComponent=!0}}]);