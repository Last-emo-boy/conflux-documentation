"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,g=p["".concat(c,".").concat(u)]||p[u]||h[u]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2,title:"Why Transaction is Pending?",keywords:["transaction"]},i=void 0,s={unversionedId:"general/faq/core-space-transactions/why-transaction-is-pending",id:"general/faq/core-space-transactions/why-transaction-is-pending",title:"Why Transaction is Pending?",description:"Because today\u2019s blockchain systems may have problems such as low throughput and high entry barriers, it is inevitable that some transactions will not be packaged when sent through the blockchain. Take Conflux as an example, the Conflux network normally produces two blocks per second. After a transaction is successfully sent, it should be packaged and executed within 20 seconds depending on the network congestion level. If the transaction is not packaged for a long time, it\u2019s very likely that something went wrong, and requires the sender to manually intervene.",source:"@site/docs/general/faq/core-space-transactions/why-transaction-is-pending.md",sourceDirName:"general/faq/core-space-transactions",slug:"/general/faq/core-space-transactions/why-transaction-is-pending",permalink:"/docs/general/faq/core-space-transactions/why-transaction-is-pending",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/faq/core-space-transactions/why-transaction-is-pending.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Why Transaction is Pending?",keywords:["transaction"]},sidebar:"tutorialSidebar",previous:{title:"FAQs of Core Space Transactions",permalink:"/docs/general/faq/core-space-transactions/core-transaction-faqs"},next:{title:"Common RPC errors",permalink:"/docs/general/faq/Errors/common_rpc_error"}},c={},l=[{value:"How to find out the reason for a pending transaction",id:"how-to-find-out-the-reason-for-a-pending-transaction",level:2},{value:"Wrong nonce",id:"wrong-nonce",level:3},{value:"Ready to pack",id:"ready-to-pack",level:3},{value:"How to set gasPrice correctly",id:"how-to-set-gasprice-correctly",level:2}],d={toc:l},p="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Because today\u2019s blockchain systems may have problems such as low throughput and high entry barriers, it is inevitable that some transactions will not be packaged when sent through the blockchain. Take Conflux as an example, the Conflux network normally produces two blocks per second. After a transaction ",(0,o.kt)("inlineCode",{parentName:"p"},"is successfully sent"),", it should be packaged and executed within ",(0,o.kt)("inlineCode",{parentName:"p"},"20 seconds")," depending on the network congestion level. If the transaction is not packaged for a long time, it\u2019s very likely that something went wrong, and requires the sender to manually intervene."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tx Pending",src:n(2834).Z,width:"350",height:"402"})),(0,o.kt)("h2",{id:"how-to-find-out-the-reason-for-a-pending-transaction"},"How to find out the reason for a pending transaction"),(0,o.kt)("p",null,"If the pending transaction is successfully inserted into the transaction pool of the node used by ",(0,o.kt)("a",{parentName:"p",href:"https://www.confluxscan.io/"},"Scan"),", the transaction can be searched by hash on Scan, and the status of the transaction can be seen as ",(0,o.kt)("inlineCode",{parentName:"p"},"Pending")," on the transaction details page. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tx Pending",src:n(6477).Z,width:"2786",height:"1408"})),(0,o.kt)("p",null," At this time, we can go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"account details page")," of the transaction sender, and view the pending transactions of the user through the ",(0,o.kt)("inlineCode",{parentName:"p"},"View Pending Txns")," tab on the account page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tx Pending",src:n(1363).Z,width:"2812",height:"1468"}),"/"),(0,o.kt)("p",null,"In this tab, you can see the total number of pending transactions of this user and the earliest pending transactions (up to 10). The most important thing is that you can also see the pending reasons for the first pending transaction. There are three possible reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Wrong nonce"),(0,o.kt)("li",{parentName:"ul"},"Insufficient balance"),(0,o.kt)("li",{parentName:"ul"},"Ready to pack")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tx Pending",src:n(4607).Z,width:"2826",height:"1286"})),(0,o.kt)("p",null,"This page uses the RPC method ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/build/json-rpc/json_rpc#cfx_getaccountpendingtransactions"},(0,o.kt)("inlineCode",{parentName:"a"},"cfx_getAccountPendingTransactions"))," to obtain the current pending transaction information of an account."),(0,o.kt)("h3",{id:"wrong-nonce"},"Wrong nonce"),(0,o.kt)("p",null,"This kind of error means that the sent transaction used the wrong nonce. Normally, the transaction needs to be executed one by one in the order of nonce. If there are transactions with a smaller nonce pending in the queue, this transaction will wait until all previous transactions are successfully executed."),(0,o.kt)("p",null,"In this case, we need to resend the transaction with the correct nonce. It should be noted that the pending transaction will be automatically executed after all previous transactions are executed (and the balance is sufficient)."),(0,o.kt)("h3",{id:"ready-to-pack"},"Ready to pack"),(0,o.kt)("p",null,"This situation is quite special, which means that the transaction itself has reached the conditions that can be packaged, but because the entire network is relatively congested or for other reasons, it has not been packaged."),(0,o.kt)("p",null,"If the transaction is in this state for a long time, the gasPrice of the transaction can be increased appropriately to resend the transaction, which can improve the speed to package and execute a transaction."),(0,o.kt)("h2",{id:"how-to-set-gasprice-correctly"},"How to set gasPrice correctly"),(0,o.kt)("p",null,"The speed to package and execute a transaction is mainly affected by the gasPrice of the transaction. The higher the gasPrice, the faster it is packaged by miners, so it is very important to set the gasPrice correctly."),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"cfx_gasPrice")," RPC method of fullnode to get a suggested gasPrice value. This method will give a recommended value based on the gas usage of a certain number of the latest blocks and the gasPrice of the transactions in it."))}h.isMDXComponent=!0},6477:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scan-pending-detail-02-2e688fd1d0d2ab438274b226aefc545b.png"},1363:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scan-pending-entry-03-e49e27948df9341d61ad8a37d684b048.png"},4607:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scan-pending-tx-list-04-44522efa4034f309163b830b27a9e345.png"},2834:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tx-pending-01-b1f2e9964d8aa9c0d65c697a7db0f236.png"}}]);