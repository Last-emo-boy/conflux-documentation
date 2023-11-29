"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8413],{4137:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(o),f=r,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return o?n.createElement(h,s(s({ref:t},p),{},{components:o})):n.createElement(h,s({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},963:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=o(7462),r=(o(7294),o(4137));const i={sidebar_position:4,title:"Foundation Gas Sponsorship",displayed_sidebar:"coreSidebar"},s=void 0,a={unversionedId:"core/build/gas-sponsorship",id:"core/build/gas-sponsorship",title:"Foundation Gas Sponsorship",description:"Developers can submit a request to the Foundation for sponsorship.",source:"@site/docs/core/build/gas-sponsorship.md",sourceDirName:"core/build",slug:"/core/build/gas-sponsorship",permalink:"/docs/core/build/gas-sponsorship",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/build/gas-sponsorship.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Foundation Gas Sponsorship",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"Fluent Wallet Integration",permalink:"/docs/core/build/fluent"},next:{title:"Token Standards",permalink:"/docs/core/build/token-standards"}},c={},l=[{value:"Tutorial",id:"tutorial",level:2},{value:"Rules of Sponsorship",id:"rules-of-sponsorship",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Developers can submit a request to the Foundation for sponsorship."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/learn/core-space-basics/internal-contracts/sponsor-whitelist-control"},"SponsorWhitelistControl")," and check out the basics of sponsorship mechanism.")),(0,r.kt)("h2",{id:"tutorial"},"Tutorial"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ConfluxScan official website (confluxscan.io)"),(0,r.kt)("li",{parentName:"ol"},'Click on "Blockchain", select "Sponsorship Contracts" under "Contracts" column and enter the sponsorship contract interface'),(0,r.kt)("li",{parentName:"ol"},'Fill in the search field with the address of the contract you want to apply for sponsorship, click "Search"'),(0,r.kt)("li",{parentName:"ol"},'Click on "Apply"')),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(653).Z,width:"1920",height:"389"}),"\n",(0,r.kt)("img",{src:o(948).Z,width:"1920",height:"813"})),(0,r.kt)("h2",{id:"rules-of-sponsorship"},"Rules of Sponsorship"),(0,r.kt)("p",null,"Undifferentiated storage collateral sponsorship: 1 ",(0,r.kt)("em",{parentName:"p"}," 10 cfx.\nUndifferentiated gas sponsorship: 5 ")," 1 Gdrip, upper bound 500,000 drip (roughly Gas with price 1 and Gas limit of no more than 500,000)"),(0,r.kt)("p",null,"Applications for sponsorship require individual negotiation for each project specifically (currently self-service is not open), project groups are requested to complete the following two steps and wait for review.\nComplete the contract verification on Confluxscan, fix the warning messages in the project, and set the built-in contract Admin (note: not the admin in contract management)to zero address.\nAfter completing item 1, contract ",(0,r.kt)("a",{parentName:"p",href:"mailto:scan@confluxnetwork.org"},"scan@confluxnetwork.org")," with the following details:\nProject Name.\nPurpose (gas sponsorship/storage sponsorship).\nContract Address.\nContact information."),(0,r.kt)("p",null,"Usually, the result will be returned within 7 business days. Please note that the submission does not mean the sponsorship application is approved. Therefore, please pay attention to the reply to the email and the contact information filled in the application."))}d.isMDXComponent=!0},653:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2023-03-06-18-12-16-08e881acaf77fb5988ca837cdc1aa833.png"},948:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2023-03-06-18-12-27-238c13f93f4628379152d17cc7a7362c.png"}}]);