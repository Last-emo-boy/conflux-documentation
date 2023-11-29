"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8862],{4137:(a,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>f});var n=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function i(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function o(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},i=Object.keys(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var c=n.createContext({}),s=function(a){var e=n.useContext(c),t=e;return a&&(t="function"==typeof a?a(e):o(o({},e),a)),t},p=function(a){var e=s(a.components);return n.createElement(c.Provider,{value:e},a.children)},u="mdxType",d={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,i=a.originalType,c=a.parentName,p=l(a,["components","mdxType","originalType","parentName"]),u=s(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?n.createElement(f,o(o({ref:e},p),{},{components:t})):n.createElement(f,o({ref:e},p))}));function f(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=a,l[u]="string"==typeof a?a:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7661:(a,e,t)=>{t.d(e,{Z:()=>C});var n=t(7294),r=t(6010),i=t(3734),o=t(3699),l=t(2735),c=t(7325);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(a){let{href:e,children:t}=a;return n.createElement(o.Z,{href:e,className:(0,r.Z)("card padding--lg",s.cardContainer)},t)}function u(a){let{href:e,icon:t,title:i,description:o}=a;return n.createElement(p,{href:e},n.createElement("h2",{className:(0,r.Z)("text--truncate",s.cardTitle),title:i},t," ",i),o&&n.createElement("p",{className:(0,r.Z)("text--truncate",s.cardDescription),title:o},o))}function d(a){let{item:e}=a;const t=(0,i.Wl)(e);return t?n.createElement(u,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m(a){let{item:e}=a;const t=(0,l.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(e.docId??void 0);return n.createElement(u,{href:e.href,icon:t,title:e.label,description:e.description??r?.description})}function f(a){let{item:e}=a;switch(e.type){case"link":return n.createElement(m,{item:e});case"category":return n.createElement(d,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function k(a){let{className:e}=a;const t=(0,i.jA)();return n.createElement(C,{items:t.items,className:e})}function C(a){const{items:e,className:t}=a;if(!e)return n.createElement(k,a);const o=(0,i.MN)(e);return n.createElement("section",{className:(0,r.Z)("row",t)},o.map(((a,e)=>n.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:a})))))}},5979:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(7462),r=(t(7294),t(4137)),i=t(7661);const o={sidebar_position:4,title:"Internal Contracts",displayed_sidebar:"coreSidebar"},l=void 0,c={unversionedId:"core/learn/core-space-basics/internal-contracts/internal-contracts",id:"core/learn/core-space-basics/internal-contracts/internal-contracts",title:"Internal Contracts",description:"Conflux introduces several built-in internal contracts for better system maintenance and on-chain governance. Now Conflux has seven internal contracts: AdminControl contract, SponsorWhitelistControl contract and Staking contract are introduced from the beginning, ConfluxContext, PoSRegister, ConfluxContext are introduced at v2 hard-fork, ParamsControl is introduced at v2.1 hard-fork. These contracts provide solidity function apis defined here. These function can only be called via CALL or STATICCALL operation. Using operation CALLCODE or DELEGATECALL to interact with internal contracts will trigger an error.",source:"@site/docs/core/learn/core-space-basics/internal-contracts/internal-contracts.mdx",sourceDirName:"core/learn/core-space-basics/internal-contracts",slug:"/core/learn/core-space-basics/internal-contracts/",permalink:"/docs/core/learn/core-space-basics/internal-contracts/",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/learn/core-space-basics/internal-contracts/internal-contracts.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Internal Contracts",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"Storage",permalink:"/docs/core/learn/core-space-basics/storage"},next:{title:"AdminControl",permalink:"/docs/core/learn/core-space-basics/internal-contracts/admin"}},s={},p=[],u={toc:p},d="wrapper";function m(a){let{components:e,...t}=a;return(0,r.kt)(d,(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Conflux introduces several built-in internal contracts for better system maintenance and on-chain governance. Now Conflux has seven internal contracts: ",(0,r.kt)("inlineCode",{parentName:"p"},"AdminControl")," contract, ",(0,r.kt)("inlineCode",{parentName:"p"},"SponsorWhitelistControl")," contract and ",(0,r.kt)("inlineCode",{parentName:"p"},"Staking")," contract are introduced from the beginning, ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfluxContext"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PoSRegister"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfluxContext")," are introduced at v2 hard-fork, ",(0,r.kt)("inlineCode",{parentName:"p"},"ParamsControl")," is introduced at v2.1 hard-fork. These contracts provide solidity function apis defined ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/tree/master/internal_contract/contracts"},(0,r.kt)("inlineCode",{parentName:"a"},"here")),". These function can only be called via ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"STATICCALL")," operation. Using operation ",(0,r.kt)("inlineCode",{parentName:"p"},"CALLCODE")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"DELEGATECALL")," to interact with internal contracts will trigger an error."),(0,r.kt)("p",null,"The addresses of these 7 internal contracts are list as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AdminControl: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x0888000000000000000000000000000000000000"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaawby2s44d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2mhjju8k")))),(0,r.kt)("li",{parentName:"ul"},"SponsorWhitelistControl: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x0888000000000000000000000000000000000001"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaeprn7v0eh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaegg2r16ar")))),(0,r.kt)("li",{parentName:"ul"},"Staking: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x0888000000000000000000000000000000000002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaajh3dw3ctn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaajrwuc9jnb")))),(0,r.kt)("li",{parentName:"ul"},"ConfluxContext: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x0888000000000000000000000000000000000004"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaauv2xpkd3x")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaau5xa6tk73")))),(0,r.kt)("li",{parentName:"ul"},"PoSRegister: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x0888000000000000000000000000000000000005"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaytypk0th1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaayf993ufd7")))),(0,r.kt)("li",{parentName:"ul"},"CrossSpaceCall: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x0888000000000000000000000000000000000006"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa2eaeg85p5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa2sn102vjv")))),(0,r.kt)("li",{parentName:"ul"},"ParamsControl: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x0888000000000000000000000000000000000007"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa64p5db1w9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa6uhjxh70z"))))),(0,r.kt)("p",null,"All the example code in this document will use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/js-conflux-sdk"},"js-conflux-sdk"),"."),(0,r.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);