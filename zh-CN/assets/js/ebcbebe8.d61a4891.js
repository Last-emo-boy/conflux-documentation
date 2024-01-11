"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8844],{35360:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=t(85893),o=t(11151);const r={sidebar_position:2,title:"\u8282\u70b9\u7c7b\u578b",description:"Learn about the different types of nodes in the Conflux Network.",displayed_sidebar:"generalSidebar"},s=void 0,l={id:"general/run-a-node/node-types",title:"\u8282\u70b9\u7c7b\u578b",description:"Learn about the different types of nodes in the Conflux Network.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/run-a-node/node-types.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/node-types",permalink:"/zh-CN/docs/general/run-a-node/node-types",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u8282\u70b9\u7c7b\u578b",description:"Learn about the different types of nodes in the Conflux Network.",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u8fd0\u884c\u8282\u70b9",permalink:"/zh-CN/docs/general/run-a-node/"},next:{title:"\u8282\u70b9\u5feb\u7167\u5de5\u5177",permalink:"/zh-CN/docs/general/run-a-node/snapshot-tool"}},d={},a=[{value:"Differences Between Node Types",id:"differences-between-node-types",level:2},{value:"Full Node",id:"full-node",level:2},{value:"Requirements",id:"requirements",level:3},{value:"How to Run",id:"how-to-run",level:3},{value:"Archive Node",id:"archive-node",level:2},{value:"Requirements",id:"requirements-1",level:3},{value:"How to Run",id:"how-to-run-1",level:3},{value:"Light Node",id:"light-node",level:2},{value:"Requirements",id:"requirements-2",level:3},{value:"How to Run",id:"how-to-run-2",level:3},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"Why the cfx_getTransactionByHash API returns null?",id:"why-the-cfx_gettransactionbyhash-api-returns-null",level:3},{value:"Is fullnode enough for Exchange?",id:"is-fullnode-enough-for-exchange",level:3},{value:"I want to participate in mining or staking, which node type should I run?",id:"i-want-to-participate-in-mining-or-staking-which-node-type-should-i-run",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In the Conflux Network, there are different types of nodes that you can run, each serving different purposes and having different requirements. There are 3 types of nodes: ",(0,i.jsx)(n.strong,{children:"Archive Node, Full Node and Light Node"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The difference between three types of nodes lies in ",(0,i.jsx)(n.strong,{children:"the amount of data reserved for storage"}),". The Archive Node takes the most and the Light Node takes the least. Of course, more data consumes more hardware resources. In general, ",(0,i.jsx)(n.strong,{children:"if you want to participate in mining, a fullnode will suffice"})," . you need to run an archive node if you want to use it as RPC service. The lightnode is mainly used as a wallet."]}),"\n",(0,i.jsx)(n.p,{children:"Here's a detail on the requirements for running all types of nodes in the Conflux Network, along with the differences between each one."}),"\n",(0,i.jsx)(n.h2,{id:"differences-between-node-types",children:"Differences Between Node Types"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full Node"}),": Stores all block headers and most recent ",(0,i.jsx)(n.strong,{children:"10w Epoch"})," block. ",(0,i.jsx)(n.strong,{children:"Suitable for most users and developers"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Archive Node"}),": Stores the entire blockchain and all historical data. Requires significant storage and is suitable for data analysis and applications that need access to the full historical data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Light Node"}),": Stores only block headers and a small subset of data. Suitable for low-resource devices and provides a way to interact with the network without storing the entire blockchain."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"full-node",children:"Full Node"}),"\n",(0,i.jsxs)(n.p,{children:["A full node stores the entire block headers and most ",(0,i.jsx)(n.strong,{children:"recent 10w Epoch blocks"})," of the blockchain."]}),"\n",(0,i.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"At least 16GB of RAM."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A minimum of 1.5TB free disk space (SSD is recommended)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A stable internet connection."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"how-to-run",children:"How to Run"}),"\n",(0,i.jsx)(n.p,{children:'Follow the steps in the previous tutorial to install and configure the Conflux node, then set the mode parameter in the configuration file to "full":'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'mode = "full" \n'})}),"\n",(0,i.jsx)(n.p,{children:"Start the node with the custom configuration file, using the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"conflux --config ./run/hydra.toml \n"})}),"\n",(0,i.jsx)(n.h2,{id:"archive-node",children:"Archive Node"}),"\n",(0,i.jsx)(n.p,{children:"An archive node stores the entire data of the blockchain, including all blocks, transactions. It requires more storage than a full node."}),"\n",(0,i.jsx)(n.h3,{id:"requirements-1",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"At least 32GB of RAM."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A minimum of 2TB free disk space (SSD is recommended)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A stable internet connection."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"how-to-run-1",children:"How to Run"}),"\n",(0,i.jsx)(n.p,{children:'Set the mode parameter in the configuration file to "archive":'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'mode = "archive" \n'})}),"\n",(0,i.jsx)(n.p,{children:"Start the node with the custom configuration file, using the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"conflux --config ./run/hydra.toml \n"})}),"\n",(0,i.jsx)(n.h2,{id:"light-node",children:"Light Node"}),"\n",(0,i.jsx)(n.p,{children:"A light node only stores the block headers and a small subset of other data, allowing it to verify the authenticity of the data without storing the entire blockchain."}),"\n",(0,i.jsx)(n.h3,{id:"requirements-2",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"At least 4GB of RAM."}),"\n",(0,i.jsx)(n.li,{children:"A minimum of 300GB free disk space (SSD is recommended)."}),"\n",(0,i.jsx)(n.li,{children:"A stable internet connection."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"how-to-run-2",children:"How to Run"}),"\n",(0,i.jsx)(n.p,{children:'Set the mode parameter in the configuration file to "light":'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'mode = "light" \n'})}),"\n",(0,i.jsx)(n.p,{children:"Start the node with the custom configuration file, using the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"conflux --config ./run/hydra.toml \n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"}),"\n",(0,i.jsx)(n.h3,{id:"why-the-cfx_gettransactionbyhash-api-returns-null",children:"Why the cfx_getTransactionByHash API returns null?"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to get the transaction details, you need to run a ",(0,i.jsx)(n.code,{children:"fullnode"})," or ",(0,i.jsx)(n.code,{children:"archivenode"}),", and set the ",(0,i.jsx)(n.code,{children:"persist_tx_index"})," config to ",(0,i.jsx)(n.code,{children:"true"}),". The fullnode only store transactions in latest 10w Epoch."]}),"\n",(0,i.jsx)(n.h3,{id:"is-fullnode-enough-for-exchange",children:"Is fullnode enough for Exchange?"}),"\n",(0,i.jsx)(n.p,{children:"Yes, fullnode only support querying transactions in latest 10w Epoch"}),"\n",(0,i.jsx)(n.h3,{id:"i-want-to-participate-in-mining-or-staking-which-node-type-should-i-run",children:"I want to participate in mining or staking, which node type should I run?"}),"\n",(0,i.jsx)(n.p,{children:"Fullnode will be enough."})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var i=t(67294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);