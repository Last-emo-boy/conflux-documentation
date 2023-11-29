"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[80],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,h=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(4137));const i={id:"ipfs",title:"IPFS Overview",sidebar_position:1,keywords:["conflux","ipfs"],displayed_sidebar:"generalSidebar"},o=void 0,s={unversionedId:"general/build/nfts/ipfs",id:"general/build/nfts/ipfs",title:"IPFS Overview",description:"Introduction to IPFS",source:"@site/docs/general/build/nfts/ipfs.md",sourceDirName:"general/build/nfts",slug:"/general/build/nfts/ipfs",permalink:"/docs/general/build/nfts/ipfs",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/build/nfts/ipfs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"ipfs",title:"IPFS Overview",sidebar_position:1,keywords:["conflux","ipfs"],displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"NFTs",permalink:"/docs/category/nfts"},next:{title:"Uploading files to IPFS using Pinata",permalink:"/docs/general/build/nfts/pinata"}},l={},d=[{value:"Introduction to IPFS",id:"introduction-to-ipfs",level:2},{value:"How Does IPFS Work?",id:"how-does-ipfs-work",level:2},{value:"How to Use IPFS",id:"how-to-use-ipfs",level:2},{value:"Advantages and Disadvantages of IPFS",id:"advantages-and-disadvantages-of-ipfs",level:2},{value:"Additional Resources:",id:"additional-resources",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction-to-ipfs"},"Introduction to IPFS"),(0,r.kt)("p",null,"IPFS (InterPlanetary File System) is a peer-to-peer distributed file system that allows users to store and access files in a decentralized network. IPFS provides a secure, scalable, and fault-tolerant way to store and share files, making it an ideal choice for NFT storage."),(0,r.kt)("h2",{id:"how-does-ipfs-work"},"How Does IPFS Work?"),(0,r.kt)("p",null,"IPFS uses a content-addressed system, which means that files are identified by their content, rather than by their location. When a file is added to IPFS, it is broken up into small pieces called blocks, and each block is given a unique hash that represents its content. The blocks are then stored on different nodes in the network, and the file can be retrieved by requesting any of the nodes that have a copy of the blocks."),(0,r.kt)("h2",{id:"how-to-use-ipfs"},"How to Use IPFS"),(0,r.kt)("p",null,"To use IPFS, you'll need to download and install an IPFS client, such as IPFS Desktop or IPFS Companion. Once you have the client installed, you can add files to IPFS by using the command-line interface or by using a web-based interface. When you add a file to IPFS, you'll receive a content-addressed hash that represents the file, and you can use this hash to retrieve the file from any node in the network."),(0,r.kt)("h2",{id:"advantages-and-disadvantages-of-ipfs"},"Advantages and Disadvantages of IPFS"),(0,r.kt)("p",null,"Some of the advantages of using IPFS for NFT storage include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decentralization: Files are stored on a distributed network, making them resistant to censorship and data loss."),(0,r.kt)("li",{parentName:"ul"},"Content Addressing: Files are identified by their content, which ensures their authenticity and immutability."),(0,r.kt)("li",{parentName:"ul"},"Speed: IPFS can provide faster file retrieval times by caching files closer to the user."),(0,r.kt)("li",{parentName:"ul"},"Scalability: IPFS can handle large amounts of data and can scale to meet increasing demand.")),(0,r.kt)("p",null,"Some of the disadvantages of using IPFS for NFT storage include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Complexity: IPFS can be complex to set up and use, especially for non-technical users."),(0,r.kt)("li",{parentName:"ul"},"Centralization: While IPFS is designed to be a decentralized network, there are still some centralization risks, such as the reliance on gateway providers and seed nodes."),(0,r.kt)("li",{parentName:"ul"},"Security: IPFS does not provide built-in encryption or access control, which can make it vulnerable to attacks or unauthorized access.")),(0,r.kt)("p",null,"To reduce the complexity of using IPFS, many projects use tools such as Pinata, that can help to upload and manage files in IPFS very easily."),(0,r.kt)("h2",{id:"additional-resources"},"Additional Resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ipfs.tech/"},"https://docs.ipfs.tech/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/technical-guide-to-ipfs-decentralized-storage-of-web3/"},"https://www.freecodecamp.org/news/technical-guide-to-ipfs-decentralized-storage-of-web3/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://decrypt.co/resources/how-to-use-ipfs-the-backbone-of-web3"},"https://decrypt.co/resources/how-to-use-ipfs-the-backbone-of-web3"))))}p.isMDXComponent=!0}}]);