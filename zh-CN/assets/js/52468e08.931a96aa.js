"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3350],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=o.createContext({}),c=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(r.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,m=h["".concat(r,".").concat(p)]||h[p]||d[p]||a;return n?o.createElement(m,l(l({ref:t},u),{},{components:n})):o.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[h]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),i=(n(7294),n(4137));const a={id:"pos_overview",title:"PoS Overview",keywords:["pos","overview"],sidebar_position:2,displayed_sidebar:"generalSidebar"},l=void 0,s={unversionedId:"general/conflux-basics/consensus-mechanisms/proof-of-stake/pos_overview",id:"general/conflux-basics/consensus-mechanisms/proof-of-stake/pos_overview",title:"PoS Overview",description:"This document is to introduce Conflux PoS Finality without practical details. It is to help readers understand PoS in general, and it is essential for reading other technical documents.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/conflux-basics/consensus-mechanisms/proof-of-stake/pos_overview.md",sourceDirName:"general/conflux-basics/consensus-mechanisms/proof-of-stake",slug:"/general/conflux-basics/consensus-mechanisms/proof-of-stake/pos_overview",permalink:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/pos_overview",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"pos_overview",title:"PoS Overview",keywords:["pos","overview"],sidebar_position:2,displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"GHAST",permalink:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/proof-of-work/ghast"},next:{title:"Why Introducing PoS?",permalink:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos"}},r={},c=[{value:"PoS Account",id:"pos-account",level:2},{value:"Address",id:"address",level:3},{value:"Wallet",id:"wallet",level:3},{value:"Become a consensus node",id:"become-a-consensus-node",level:3},{value:"Participating in PoS Consensus",id:"participating-in-pos-consensus",level:2},{value:"Get voting rights",id:"get-voting-rights",level:3},{value:"Withdraw voting rights",id:"withdraw-voting-rights",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"The Work of PoS Consensus",id:"the-work-of-pos-consensus",level:2},{value:"Candidate committee",id:"candidate-committee",level:3},{value:"As a member",id:"as-a-member",level:3},{value:"Incentive Plan",id:"incentive-plan",level:3},{value:"Points composition",id:"points-composition",level:3},{value:"Accrued interest",id:"accrued-interest",level:3},{value:"Risk Reminder",id:"risk-reminder",level:2},{value:"Principal Loss",id:"principal-loss",level:3},{value:"Liquidity Risk",id:"liquidity-risk",level:3},{value:"Revenue Loss",id:"revenue-loss",level:3}],u={toc:c},h="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document is to introduce Conflux PoS Finality without practical details. It is to help readers understand PoS in general, and it is essential for reading other technical documents."),(0,i.kt)("p",null,"There might be a ",(0,i.kt)("inlineCode",{parentName:"p"},"51%")," attack problem in the early stage of a PoW chain when the hashing power is low. This became an even more significant issue when hashpower rental platforms emerged along with the development of public blockchains. Ethereum Classic, Grin, and Verge have all been the victims of the 51% attack last year."),(0,i.kt)("p",null,"To deal with the threats caused by 51% attacks, Conflux will introduce a stand-alone PoS chain. The consensus participants of the PoS chain will sign the pivot of the tree structure regularly. All PoW miners should select the pivot with enough signatures into the pivot chain, even if its sibling blocks have higher weights. Briefly speaking, the PoS chain specifies a pivot block, and all PoW miners should follow that block."),(0,i.kt)("p",null,"This means as long as the PoS consensus votes to a pivot block, even if the 51% attackers try to reverse the block, it won\u2019t be recognized by the PoW nodes."),(0,i.kt)("p",null,"Conflux requires the PoS consensus to use the power of specifying pivot blocks in a restrictive manner. A block must be confirmed for a few minutes under the PoW rules before the honest PoS nodes will sign it. This means that the block sorting and confirmation of the tree graph are still accomplished by the PoW miners."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The PoS chain is only used to deal with 51% of attacks. Therefore, it only includes basic features such as pivot block voting and voting committee election. It does not include the functionalities of general blockchains such as transactions and contract executions"),(0,i.kt)("li",{parentName:"ul"},"The PoS chain features are built-in functionalities in the nodes of Conflux. Externally, there is still only one program: conflux-rust."),(0,i.kt)("li",{parentName:"ul"},"In this document, the Conflux chain refers to the running blockchain, and the PoS chain refers to the newly introduced chain."),(0,i.kt)("li",{parentName:"ul"},"There is approximately 1 PoS block generated per minute. All the times stated below are corresponding to the number of blocks.")),(0,i.kt)("h2",{id:"pos-account"},"PoS Account"),(0,i.kt)("h3",{id:"address"},"Address"),(0,i.kt)("p",null,"Generally speaking, the account model on a blockchain is: a private key creates a public key, and a public key produces an address. The accounts on the PoS chain are similar, but there are two private keys called the BLS private key and the VRF private key, corresponding to the BLS public key and the VRF public key respectively. The two public keys are hashed to obtain the PoS address, which is currently 256-bit long."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"0xd731d7633dd38c47769c2a62926b9a54d288a5e664f4d2108ac5bb6601bb30f5\n")),(0,i.kt)("h3",{id:"wallet"},"Wallet"),(0,i.kt)("p",null,"The primary responsibility of a PoS account is to maintain the Conflux consensus protocol. Each PoS account should run an independent Conflux node. Thus, the Conflux core code has the built-in wallet functionality for PoS accounts, including: When the Conflux node is launched for the first time and is running in the PoS account mode, it will automatically generate the PoS private key and require users to provide the password. The private key that is encrypted by the supplied password is stored locally."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the Conflux node restarts, the user is required to enter the password to unlock the private key file if the encrypted private key file is detected."),(0,i.kt)("li",{parentName:"ul"},"The transactions are automatically processed under the consensus protocol of PoS during operation, without user intervention."),(0,i.kt)("li",{parentName:"ul"},"Since the wallet is implemented by a full node, the interaction with the wallet is primitive, which may involve copying files manually, etc.")),(0,i.kt)("h3",{id:"become-a-consensus-node"},"Become a consensus node"),(0,i.kt)("p",null,"After a PoS account is created, it can only become a legal consensus node by staking and registering on the PoW chain."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Staking: no difference from the current staking process."),(0,i.kt)("li",{parentName:"ul"},"Registration: interact with specific internal contact on the Conflux chain; submit relevant information provided by the full node; lock the staked amount, one vote per ",(0,i.kt)("inlineCode",{parentName:"li"},"1000")," locked CFX.")),(0,i.kt)("p",null,"After completing the registration, the PoW account that staked and the PoS account form a one-to-one binding relationship. The PoS account cannot change its bound PoW account. The PoW account can bind to another PoS account as long as it releases the previous binding relationship."),(0,i.kt)("h2",{id:"participating-in-pos-consensus"},"Participating in PoS Consensus"),(0,i.kt)("h3",{id:"get-voting-rights"},"Get voting rights"),(0,i.kt)("p",null,"PoS accounts can get voting rights by locking CFX. (refer to chapter \u201cBecome a consensus node\u201d)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Conflux-rust will automatically monitor the registration information. Therefore, after the PoS account is registered, it will perform corresponding operations without the user\u2019s intervention."),(0,i.kt)("li",{parentName:"ul"},"Users can lock more CFX tokens on the Conflux chain at any time to obtain more voting rights."),(0,i.kt)("li",{parentName:"ul"},"After the token is locked, it takes about ",(0,i.kt)("inlineCode",{parentName:"li"},"10 minutes")," to synchronize the state from the Conflux chain to the PoS chain. The user will get the voting rights after the synchronization.")),(0,i.kt)("h3",{id:"withdraw-voting-rights"},"Withdraw voting rights"),(0,i.kt)("p",null,"The PoS account can withdraw the voting rights and unlock CFX."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users need to use the bound PoW account to send transactions on the Conflux chain to apply for unlocking tokens (referred to as \u2018retirement\u2019 in the code). Users can unlock any number of locked tokens."),(0,i.kt)("li",{parentName:"ul"},"Users can apply for unlocking at any time. Once the unlock is requested, the corresponding voting rights will become invalid immediately. However, the tokens will be unlocked only when the following conditions are met:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"The tokens have been locked for at least 14 days."),(0,i.kt)("li",{parentName:"ol"},"The request for unlocking has passed for 7 days"))),(0,i.kt)("li",{parentName:"ul"},"If there are multiple transactions locking tokens, they will be unlocked in chronological order until the required unlocking quantity is met.")),(0,i.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("p",null,"Suppose that user A locks 2000 CFX on Jan 1st, 3rd, and 5th, respectively, and applies to unlock 3000 CFX on Jan 9th."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The 2000 CFX locked on Jan 1st will unlock first."),(0,i.kt)("li",{parentName:"ul"},"14-day requirement for locking: Jan 1st + 14 days = Jan 15th."),(0,i.kt)("li",{parentName:"ul"},"7-day requirement after unlocking request: Jan 9th + 7 days = Jan 16th."),(0,i.kt)("li",{parentName:"ul"},"Therefore, there will be 2000 CFX unlocked on Jan 16th."),(0,i.kt)("li",{parentName:"ul"},"After that, 1000 CFX on Jan 3rd will unlock."),(0,i.kt)("li",{parentName:"ul"},"14-day requirement for locking: Jan 3rd + 14 days = Jan 17th."),(0,i.kt)("li",{parentName:"ul"},"7-day requirement after unlocking request: Jan 9th + 7 days = Jan 16th."),(0,i.kt)("li",{parentName:"ul"},"Therefore, there will be 1000 CFX unlocked on Jan 17th, which will satisfy the requested unlocking amount, 3000.")),(0,i.kt)("p",null,"At the end, the user is left with 1000 CFX locked on Jan 3rd and 2000 CFX locked on Jan 5th."),(0,i.kt)("h2",{id:"the-work-of-pos-consensus"},"The Work of PoS Consensus"),(0,i.kt)("p",null,"The following content is about what the PoS node does automatically, for your information."),(0,i.kt)("h3",{id:"candidate-committee"},"Candidate committee"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The PoS account will join the election of a committee of up to ",(0,i.kt)("inlineCode",{parentName:"li"},"300")," seats through VRF."),(0,i.kt)("li",{parentName:"ul"},"The committee consists of 6 groups of members, each with 50 seats."),(0,i.kt)("li",{parentName:"ul"},"Every hour, one of the 6 groups that served the longest time will retire, and a new group succeeds."),(0,i.kt)("li",{parentName:"ul"},"The election starts 1.5 hours in advance and ends half an hour in advance."),(0,i.kt)("li",{parentName:"ul"},"The vote of each PoS account is regarded as an independent candidate at the time of election. If a PoS account has 10 votes, it will be considered as 10 different candidates participating in the election. If 2 votes of this account have been elected, it will occupy 2 seats in this committee, and the remaining 8 votes can participate in the next election."),(0,i.kt)("li",{parentName:"ul"},"The PoS account submits the result of the VRF during the election period. The hash value is calculated based on the result, and the 50 votes with the smallest hash value will be selected.")),(0,i.kt)("p",null,"For instance, if the VRF result is x, and the PoS account has 5 votes, then the hash value is hash(x, 0) ~ hash(x, 4)."),(0,i.kt)("h3",{id:"as-a-member"},"As a member"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The members of the committee will participate in the PoS consensus and vote on the pivot block of the Conflux chain.")),(0,i.kt)("h3",{id:"incentive-plan"},"Incentive Plan"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The existing staking interest for Conflux will be cancelled.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After the PoS account participates in the election or becomes a committee member, points will be awarded based on different actions it takes. The total point is 6,000,000."),(0,i.kt)("li",{parentName:"ul"},"The points are settled when the committee changes (every 60 blocks). The interest generated by the Conflux chain during this period will be divided into 6,000,000 shares evenly. The interest will be distributed to the PoW accounts that are bound to the PoS accounts according to the points they have."),(0,i.kt)("li",{parentName:"ul"},"The points produced by a committee may be less than 6,000,000. The interest that is not distributed will be burned.")),(0,i.kt)("h3",{id:"points-composition"},"Points composition"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The 10000 votes that participate in the election and have the smallest hash value get 120 points each, forming a total of 1.2M points."),(0,i.kt)("li",{parentName:"ul"},"15,000 points will be awarded to PoS accounts per elected vote. There will be a total of 4.5M points for 300 committee votes."),(0,i.kt)("li",{parentName:"ul"},"Becoming the leader of a PoS block will be awarded 3,000 points. There are 60 blocks for a total of 180,000 points."),(0,i.kt)("li",{parentName:"ul"},"Each PoS block requires 201 out of 300 signatures, but the leader can pack more than 200 signatures. Starting with the 200th signature, each additional signature will receive 20 points up to 2,000 points. There are 60 blocks for a maximum of 120,000 points.")),(0,i.kt)("h3",{id:"accrued-interest"},"Accrued interest"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Since the amount of staking and the total issuance of CFX are changing, the interest generated by each Conflux chain block is also changing. The interest generated by each block on the Conflux chain is:  sqrt(total staking amount / total CFX circulating) * 4% / number of blocks per year."),(0,i.kt)("li",{parentName:"ul"},"No interest will be accrued if the PoS committee has not been changed after 7,200 consecutive blocks on the Conflux chain. Interest accruing will resume only after the current interest is distributed. This is to prevent PoS nodes from deliberately slowing down the consensus to obtain more interest.")),(0,i.kt)("h2",{id:"risk-reminder"},"Risk Reminder"),(0,i.kt)("h3",{id:"principal-loss"},"Principal Loss"),(0,i.kt)("p",null,"If a PoS account signs two different PoS blocks with the same height, its CFX tokens will be locked permanently. This situation may occur when:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The account attacks the consensus protocol by modifying the Conflux node;"),(0,i.kt)("li",{parentName:"ul"},"Using the same PoS account on multiple Conflux nodes. (This will cause the same account to perform conflicting operations, which is considered as an attack to the consensus protocol.)"),(0,i.kt)("li",{parentName:"ul"},"Losing PoS private key files.")),(0,i.kt)("h3",{id:"liquidity-risk"},"Liquidity Risk"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All the locked votes will unlock automatically if a candidate is elected to join the committee but does not participate in signing between two elections. All newly locked votes will unlock automatically in the next ",(0,i.kt)("inlineCode",{parentName:"li"},"7")," days as well.")),(0,i.kt)("h3",{id:"revenue-loss"},"Revenue Loss"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the node bound to the PoS account is not launched successfully, there may be no gains.")))}d.isMDXComponent=!0}}]);