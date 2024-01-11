"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[585],{56797:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=n(85893),a=n(11151);const i={title:"FAQs",keywords:["pos","faq"],sidebar_position:3,displayed_sidebar:"generalSidebar"},s=void 0,c={id:"general/conflux-basics/consensus-mechanisms/proof-of-stake/faqs",title:"FAQs",description:"What is the new Proof-of-Stake chain for Conflux?",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/conflux-basics/consensus-mechanisms/proof-of-stake/faqs.md",sourceDirName:"general/conflux-basics/consensus-mechanisms/proof-of-stake",slug:"/general/conflux-basics/consensus-mechanisms/proof-of-stake/faqs",permalink:"/es/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/faqs",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"FAQs",keywords:["pos","faq"],sidebar_position:3,displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\xbfPor qu\xe9 introducir PoS?",permalink:"/es/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos"},next:{title:"Glosario",permalink:"/es/docs/general/conflux-basics/glossary"}},r={},h=[{value:"What is the new Proof-of-Stake chain for Conflux?",id:"what-is-the-new-proof-of-stake-chain-for-conflux",level:2},{value:"How is PoS in Conflux different from other PoS-based chains?",id:"how-is-pos-in-conflux-different-from-other-pos-based-chains",level:2},{value:"Will the PoS upgrade break compatibility?",id:"will-the-pos-upgrade-break-compatibility",level:2},{value:"How can I become a validator in the PoS chain?",id:"how-can-i-become-a-validator-in-the-pos-chain",level:2},{value:"What are the main advantages of the PoS chain?",id:"what-are-the-main-advantages-of-the-pos-chain",level:2},{value:"I&#39;m a developer, how will the PoS upgrade affect me?",id:"im-a-developer-how-will-the-pos-upgrade-affect-me",level:2},{value:"What is CIP-43 doing?",id:"what-is-cip-43-doing",level:2},{value:"Will Conflux become a PoS chain after CIP-43?",id:"will-conflux-become-a-pos-chain-after-cip-43",level:2},{value:"Conflux does not recognize PoS, so why did it choose to introduce it?",id:"conflux-does-not-recognize-pos-so-why-did-it-choose-to-introduce-it",level:2},{value:"Does PoS increase the complexity of transaction confirmation?",id:"does-pos-increase-the-complexity-of-transaction-confirmation",level:2}];function l(e){const o={a:"a",h2:"h2",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"what-is-the-new-proof-of-stake-chain-for-conflux",children:"What is the new Proof-of-Stake chain for Conflux?"}),"\n",(0,t.jsx)(o.p,{children:"The PoS chain is an overlay chain that works alongside the PoW chain. The PoS chain will bring added security to the PoW chain and provide finality to transactions."}),"\n",(0,t.jsx)(o.h2,{id:"how-is-pos-in-conflux-different-from-other-pos-based-chains",children:"How is PoS in Conflux different from other PoS-based chains?"}),"\n",(0,t.jsx)(o.p,{children:"Conflux will use a hybrid PoW-PoS chain. There is currently no plan to do a full migration to a PoS chain."}),"\n",(0,t.jsx)(o.h2,{id:"will-the-pos-upgrade-break-compatibility",children:"Will the PoS upgrade break compatibility?"}),"\n",(0,t.jsx)(o.p,{children:"Yes. Users running Conflux nodes will need to update their clients to be able to run the PoS chain."}),"\n",(0,t.jsx)(o.h2,{id:"how-can-i-become-a-validator-in-the-pos-chain",children:"How can I become a validator in the PoS chain?"}),"\n",(0,t.jsxs)(o.p,{children:["For instructions on how to join the PoS checking ",(0,t.jsx)(o.a,{href:"/es/docs/general/mine-stake/stake/become-a-solo-validator",children:"Become a solo validator"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"what-are-the-main-advantages-of-the-pos-chain",children:"What are the main advantages of the PoS chain?"}),"\n",(0,t.jsx)(o.p,{children:"There are two main advantages to the PoS chain: increased security and transaction finality."}),"\n",(0,t.jsx)(o.p,{children:"With the upgrade, the network can sustain a 51% attack without risking the integrity of the pivot chain."}),"\n",(0,t.jsx)(o.p,{children:"In a scenario where an attacker successfully takes over 17% of the committee members, the PoW chain will continue to operate as usual, but it transactions won't be finalized until the attacker disappears."}),"\n",(0,t.jsx)(o.p,{children:"To conduct a successful attack where the pivot chain can diverge, an attacker will need to to control at least 84% of the committee members."}),"\n",(0,t.jsx)(o.h2,{id:"im-a-developer-how-will-the-pos-upgrade-affect-me",children:"I'm a developer, how will the PoS upgrade affect me?"}),"\n",(0,t.jsx)(o.p,{children:"The PoS upgrade won't affect the execution environment of smart contracts."}),"\n",(0,t.jsx)(o.h2,{id:"what-is-cip-43-doing",children:"What is CIP-43 doing?"}),"\n",(0,t.jsx)(o.p,{children:"CIP-43 introduces a PoS chain as the witness chain to prevent 51% attacks."}),"\n",(0,t.jsx)(o.h2,{id:"will-conflux-become-a-pos-chain-after-cip-43",children:"Will Conflux become a PoS chain after CIP-43?"}),"\n",(0,t.jsx)(o.p,{children:"In CIP-43, PoS requires the consensus from at least 84% of the PoS participants to interfere with the PoW chain's behavior. Also need to mention that according to the protocol, PoS nodes should only sign blocks that have been confirmed by the PoW consensus."}),"\n",(0,t.jsx)(o.p,{children:"This means that unless more than 84% of staking voters unite to attack the network, Conflux acts no differently than running with only the PoW chain if there are no PoW attacks. Transaction packaging, transaction executing, and block sorting are still done by the miners."}),"\n",(0,t.jsx)(o.p,{children:"If users believe that at least 17% of the PoS nodes are honest, then they only need to consider the PoW rules."}),"\n",(0,t.jsx)(o.h2,{id:"conflux-does-not-recognize-pos-so-why-did-it-choose-to-introduce-it",children:"Conflux does not recognize PoS, so why did it choose to introduce it?"}),"\n",(0,t.jsx)(o.p,{children:"In a PoS chain, a group with more than 34% of the Stake can prevent any transaction from being recorded to the chain and thus stop the chain. A group with more than 67% of the Stake can take full control of the chain and launch a double-spend attack at will. In Long Range Attacks, the attacker can rewrite the whole history by buying the private keys of the investors who made a sell-off."}),"\n",(0,t.jsx)(o.p,{children:"Then what does CIP-43 look like? Without a 51% attack, 34% of the Stake can't do anything, and 67% of the Stake still can't do anything either. (17% of the Stake can stop the PoS chain, but the PoW chain can still run as usual, just like how it behaves without CIP-43). It takes at least 84% of the Stake (>5/6) to have a tangible impact on the PoW chain, and the Long Range Attacks of PoS have almost no effects here as well."}),"\n",(0,t.jsx)(o.p,{children:"Overall, the dependency of CIP-43 on Staking nodes is completely different from that of a pure PoS chain."}),"\n",(0,t.jsx)(o.h2,{id:"does-pos-increase-the-complexity-of-transaction-confirmation",children:"Does PoS increase the complexity of transaction confirmation?"}),"\n",(0,t.jsx)(o.p,{children:"Firstly, due to the special nature of the Conflux consensus, the transaction confirmation cannot be achieved by simply counting the number of confirmed blocks. If you know anything about GHOST, the GHOST protocol requires comparing the size of each level of subtrees and sibling subtrees. Conflux's GHAST protocol is even more complex. Conflux transaction confirmation rules are listed below. The process in which you saw the flashing of the \u201csecurity level\u201d icon on ConfluxScan is in fact supported by these mathematical formulas in behind."}),"\n",(0,t.jsx)(o.p,{children:"Compared with these formulas, it is not very expensive to take an extra look at the state of the PoS chain."}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Locale Dropdown",src:n(8455).Z+"",width:"654",height:"649"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Locale Dropdown",src:n(62040).Z+"",width:"688",height:"764"})})]})}function d(e={}){const{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8455:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/4finalization-236dca6eab0a10b3c90706c675d9bdba.png"},62040:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/5finalization-ebd5ff3e899bd07f4f6f350f66a75e5b.png"},11151:(e,o,n)=>{n.d(o,{Z:()=>c,a:()=>s});var t=n(67294);const a={},i=t.createContext(a);function s(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);