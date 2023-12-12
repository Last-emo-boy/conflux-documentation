"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9373],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>p});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),f=l(o),d=a,p=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return o?n.createElement(p,r(r({ref:t},h),{},{components:o})):n.createElement(p,r({ref:t},h))}));function p(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[f]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=o[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},84118:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(87462),a=(o(67294),o(3905));const i={title:"FAQs",keywords:["pos","faq"],sidebar_position:3,displayed_sidebar:"generalSidebar"},r=void 0,s={unversionedId:"general/conflux-basics/consensus-mechanisms/proof-of-stake/faqs",id:"general/conflux-basics/consensus-mechanisms/proof-of-stake/faqs",title:"FAQs",description:"What is the new Proof-of-Stake chain for Conflux?",source:"@site/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/faqs.md",sourceDirName:"general/conflux-basics/consensus-mechanisms/proof-of-stake",slug:"/general/conflux-basics/consensus-mechanisms/proof-of-stake/faqs",permalink:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/faqs",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"FAQs",keywords:["pos","faq"],sidebar_position:3,displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u4e3a\u4ec0\u4e48\u8981\u5f15\u5165 PoS \uff1f",permalink:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos"},next:{title:"\u672f\u8bed\u8868",permalink:"/zh-CN/docs/general/conflux-basics/glossary"}},c={},l=[{value:"What is the new Proof-of-Stake chain for Conflux?",id:"what-is-the-new-proof-of-stake-chain-for-conflux",level:2},{value:"How is PoS in Conflux different from other PoS-based chains?",id:"how-is-pos-in-conflux-different-from-other-pos-based-chains",level:2},{value:"Will the PoS upgrade break compatibility?",id:"will-the-pos-upgrade-break-compatibility",level:2},{value:"How can I become a validator in the PoS chain?",id:"how-can-i-become-a-validator-in-the-pos-chain",level:2},{value:"What are the main advantages of the PoS chain?",id:"what-are-the-main-advantages-of-the-pos-chain",level:2},{value:"I&#39;m a developer, how will the PoS upgrade affect me?",id:"im-a-developer-how-will-the-pos-upgrade-affect-me",level:2},{value:"What is CIP-43 doing?",id:"what-is-cip-43-doing",level:2},{value:"Will Conflux become a PoS chain after CIP-43?",id:"will-conflux-become-a-pos-chain-after-cip-43",level:2},{value:"Conflux does not recognize PoS, so why did it choose to introduce it?",id:"conflux-does-not-recognize-pos-so-why-did-it-choose-to-introduce-it",level:2},{value:"Does PoS increase the complexity of transaction confirmation?",id:"does-pos-increase-the-complexity-of-transaction-confirmation",level:2}],h={toc:l},f="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(f,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-the-new-proof-of-stake-chain-for-conflux"},"What is the new Proof-of-Stake chain for Conflux?"),(0,a.kt)("p",null,"The PoS chain is an overlay chain that works alongside the PoW chain. The PoS chain will bring added security to the PoW chain and provide finality to transactions."),(0,a.kt)("h2",{id:"how-is-pos-in-conflux-different-from-other-pos-based-chains"},"How is PoS in Conflux different from other PoS-based chains?"),(0,a.kt)("p",null,"Conflux will use a hybrid PoW-PoS chain. There is currently no plan to do a full migration to a PoS chain."),(0,a.kt)("h2",{id:"will-the-pos-upgrade-break-compatibility"},"Will the PoS upgrade break compatibility?"),(0,a.kt)("p",null,"Yes. Users running Conflux nodes will need to update their clients to be able to run the PoS chain."),(0,a.kt)("h2",{id:"how-can-i-become-a-validator-in-the-pos-chain"},"How can I become a validator in the PoS chain?"),(0,a.kt)("p",null,"For instructions on how to join the PoS checking ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/general/mine-stake/stake/become-a-solo-validator"},"Become a solo validator"),"."),(0,a.kt)("h2",{id:"what-are-the-main-advantages-of-the-pos-chain"},"What are the main advantages of the PoS chain?"),(0,a.kt)("p",null,"There are two main advantages to the PoS chain: increased security and transaction finality."),(0,a.kt)("p",null,"With the upgrade, the network can sustain a 51% attack without risking the integrity of the pivot chain."),(0,a.kt)("p",null,"In a scenario where an attacker successfully takes over 17% of the committee members, the PoW chain will continue to operate as usual, but it transactions won't be finalized until the attacker disappears."),(0,a.kt)("p",null,"To conduct a successful attack where the pivot chain can diverge, an attacker will need to to control at least 84% of the committee members."),(0,a.kt)("h2",{id:"im-a-developer-how-will-the-pos-upgrade-affect-me"},"I'm a developer, how will the PoS upgrade affect me?"),(0,a.kt)("p",null,"The PoS upgrade won't affect the execution environment of smart contracts."),(0,a.kt)("h2",{id:"what-is-cip-43-doing"},"What is CIP-43 doing?"),(0,a.kt)("p",null,"CIP-43 introduces a PoS chain as the witness chain to prevent 51% attacks."),(0,a.kt)("h2",{id:"will-conflux-become-a-pos-chain-after-cip-43"},"Will Conflux become a PoS chain after CIP-43?"),(0,a.kt)("p",null,"In CIP-43, PoS requires the consensus from at least 84% of the PoS participants to interfere with the PoW chain's behavior. Also need to mention that according to the protocol, PoS nodes should only sign blocks that have been confirmed by the PoW consensus."),(0,a.kt)("p",null,"This means that unless more than 84% of staking voters unite to attack the network, Conflux acts no differently than running with only the PoW chain if there are no PoW attacks. Transaction packaging, transaction executing, and block sorting are still done by the miners."),(0,a.kt)("p",null,"If users believe that at least 17% of the PoS nodes are honest, then they only need to consider the PoW rules."),(0,a.kt)("h2",{id:"conflux-does-not-recognize-pos-so-why-did-it-choose-to-introduce-it"},"Conflux does not recognize PoS, so why did it choose to introduce it?"),(0,a.kt)("p",null,"In a PoS chain, a group with more than 34% of the Stake can prevent any transaction from being recorded to the chain and thus stop the chain. A group with more than 67% of the Stake can take full control of the chain and launch a double-spend attack at will. In Long Range Attacks, the attacker can rewrite the whole history by buying the private keys of the investors who made a sell-off."),(0,a.kt)("p",null,"Then what does CIP-43 look like? Without a 51% attack, 34% of the Stake can't do anything, and 67% of the Stake still can't do anything either. (17% of the Stake can stop the PoS chain, but the PoW chain can still run as usual, just like how it behaves without CIP-43). It takes at least 84% of the Stake (>5/6) to have a tangible impact on the PoW chain, and the Long Range Attacks of PoS have almost no effects here as well."),(0,a.kt)("p",null,"Overall, the dependency of CIP-43 on Staking nodes is completely different from that of a pure PoS chain."),(0,a.kt)("h2",{id:"does-pos-increase-the-complexity-of-transaction-confirmation"},"Does PoS increase the complexity of transaction confirmation?"),(0,a.kt)("p",null,"Firstly, due to the special nature of the Conflux consensus, the transaction confirmation cannot be achieved by simply counting the number of confirmed blocks. If you know anything about GHOST, the GHOST protocol requires comparing the size of each level of subtrees and sibling subtrees. Conflux's GHAST protocol is even more complex. Conflux transaction confirmation rules are listed below. The process in which you saw the flashing of the \u201csecurity level\u201d icon on ConfluxScan is in fact supported by these mathematical formulas in behind."),(0,a.kt)("p",null,"Compared with these formulas, it is not very expensive to take an extra look at the state of the PoS chain."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:o(44935).Z,width:"654",height:"649"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:o(82283).Z,width:"688",height:"764"})))}u.isMDXComponent=!0},44935:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/4finalization-236dca6eab0a10b3c90706c675d9bdba.png"},82283:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/5finalization-ebd5ff3e899bd07f4f6f350f66a75e5b.png"}}]);