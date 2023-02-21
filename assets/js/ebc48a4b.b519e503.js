"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8785],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||s;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6961:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_position:1,title:"Addresses"},o="Addresses",i={unversionedId:"core/learn/core-space-basics/addresses",id:"core/learn/core-space-basics/addresses",title:"Addresses",description:"Overview",source:"@site/docs/core/learn/core-space-basics/addresses.md",sourceDirName:"core/learn/core-space-basics",slug:"/core/learn/core-space-basics/addresses",permalink:"/docs/core/learn/core-space-basics/addresses",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Addresses"},sidebar:"tutorialSidebar",previous:{title:"Core Space Basics",permalink:"/docs/category/core-space-basics"},next:{title:"Transactions",permalink:"/docs/category/transactions"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Core Space",id:"core-space",level:2},{value:"Advanced",id:"advanced",level:2}],d={toc:l};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"addresses"},"Addresses"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Each Conflux ",(0,n.kt)("a",{parentName:"p",href:"https://hackmd.io/@thegaram/rymwcvajq"},"account")," is identified by its address. When sending tokens to someone or interacting with a smart contract, you will need to know their address. You can also share your address with other people so that you can receive token transfers."),(0,n.kt)("p",null,"The address of an account is derived from its ",(0,n.kt)("a",{parentName:"p",href:"https://hackmd.io/@thegaram/rymwcvajq"},"private key"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"private key (secret) --\x3e public key (public) --\x3e address (public)\n")),(0,n.kt)("p",null,"If you view an account as a mailbox, then the private key is the key that opens it, while the address is the name and address written on the mailbox."),(0,n.kt)("p",null,"Your accounts and addresses are usually managed by wallets like ",(0,n.kt)("a",{parentName:"p",href:"https://fluentwallet.com/"},"Fluent")," and ",(0,n.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),". It is also possible to create and process addresses programmatically."),(0,n.kt)("h2",{id:"core-space"},"Core Space"),(0,n.kt)("p",null,"Below are some examples of valid Core Space addresses:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cfx:aakdjzx2xm8r76awgvnhvgz6552berc0ta2dgfsdkf\nCFX:TYPE.USER:AAKDJZX2XM8R76AWGVNHVGZ6552BERC0TA2DGFSDKF\n\ncfxtest:ace41xttaevym36kztg88akdjzx2xm8r76rytme9nh\nCFXTEST:TYPE.CONTRACT:ACE41XTTAEVYM36KZTG88AKDJZX2XM8R76RYTME9NH\n")),(0,n.kt)("p",null,"This address format is called base32 checksum address, or CIP-37 address since it was defined in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-37.md"},"CIP-37"),"."),(0,n.kt)("p",null,"Each base32 address begins with a network prefix: ",(0,n.kt)("inlineCode",{parentName:"p"},"cfx")," for mainnet, ",(0,n.kt)("inlineCode",{parentName:"p"},"cfxtest")," for testnet addresses. Since base32 addresses use a checksum, if you make a typo, the resulting address will become invalid."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff"},"- cfx:aakdjzx2xm8r76awgvnhvgz6552berc0ta2dgfsdk0\n")),(0,n.kt)("h2",{id:"advanced"},"Advanced"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Under the hood, addresses are 20-byte binary data that have multiple string representations, including base32 and hex."),(0,n.kt)("li",{parentName:"ul"},"For a custom network, the network prefix becomes ",(0,n.kt)("inlineCode",{parentName:"li"},"net[id]"),". Example: ",(0,n.kt)("inlineCode",{parentName:"li"},"net11:aakdjzx2xm8r76awgvnhvgz6552berc0ta21v8h0fr")),(0,n.kt)("li",{parentName:"ul"},"Core Space RPCs typically expect base32 addresses. However, in Solidity source code, you will need to use the hex checksum address format defined in ",(0,n.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-55"},"EIP-55"),". You can use ",(0,n.kt)("a",{parentName:"li",href:"https://confluxscan.io/address-converter"},"this tool")," to convert between base32 and hex format."),(0,n.kt)("li",{parentName:"ul"},"In hex representation, Core Space user addresses start with ",(0,n.kt)("inlineCode",{parentName:"li"},"0x1"),", contract addresses start with ",(0,n.kt)("inlineCode",{parentName:"li"},"0x8"),", and ",(0,n.kt)("a",{parentName:"li",href:"https://hackmd.io/@thegaram/rymwcvajq"},"internal contract")," addresses start with ",(0,n.kt)("inlineCode",{parentName:"li"},"0x0"),". Any other prefix is invalid on Core Space."),(0,n.kt)("li",{parentName:"ul"},"The same private key might result in different addresses on Core Space and eSpace. \u26a0\ufe0f Do not use a hex-encoded Core Space address on eSpace. For cross-space transfers, please refer to the ",(0,n.kt)("a",{parentName:"li",href:"https://hackmd.io/@thegaram/rymwcvajq"},"relevant documentation"),"."),(0,n.kt)("li",{parentName:"ul"},"When generating HD wallet accounts following the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"},"BIP-32")," standard, we use the following derivation paths: ",(0,n.kt)("inlineCode",{parentName:"li"},"m/44'/60'/0'/0")," for eSpace, ",(0,n.kt)("inlineCode",{parentName:"li"},"m/44'/503'/0'/0")," for Core Space, as defined in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md"},"SLIP-0044"),".")))}p.isMDXComponent=!0}}]);