"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1794],{41212:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>h,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>i});var s=n(85893),o=n(11151);const t={sidebar_position:1,title:"\u8282\u70b9\u914d\u7f6e",displayed_sidebar:"eSpaceSidebar"},h=void 0,d={id:"espace/build/infrastructure/graph/setup-graph-node",title:"\u8282\u70b9\u914d\u7f6e",description:"Graph Node\u662f\u7d22\u5f15\u5b50\u56fe\u5e76\u901a\u8fc7 GraphQL API \u63d0\u4f9b\u67e5\u8be2\u7ed3\u679c\u6570\u636e\u7684\u7ec4\u4ef6\u3002 \u56e0\u6b64\uff0c\u5b83\u662f\u7d22\u5f15\u5668\u5806\u6808\u7684\u6838\u5fc3\uff0cGraph Node\u7684\u6b63\u786e\u64cd\u4f5c\u5bf9\u4e8e\u8fd0\u884c\u6210\u529f\u7684\u7d22\u5f15\u5668\u81f3\u5173\u91cd\u8981\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/build/infrastructure/graph/setup-graph-node.md",sourceDirName:"espace/build/infrastructure/graph",slug:"/espace/build/infrastructure/graph/setup-graph-node",permalink:"/zh-CN/docs/espace/build/infrastructure/graph/setup-graph-node",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u8282\u70b9\u914d\u7f6e",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"The Graph",permalink:"/zh-CN/docs/espace/build/infrastructure/graph/"},next:{title:"\u521b\u5efa\u5b50\u56fe",permalink:"/zh-CN/docs/espace/build/infrastructure/graph/create-subgraphs"}},c={},i=[{value:"Graph Node",id:"graph-node",level:2},{value:"PostgreSQL \u6570\u636e\u5e93",id:"postgresql-\u6570\u636e\u5e93",level:3},{value:"Network clients",id:"network-clients",level:3},{value:"IPFS Nodes",id:"ipfs-nodes",level:3},{value:"Getting started from source",id:"getting-started-from-source",level:3},{value:"Install prerequisites",id:"install-prerequisites",level:3},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",level:3},{value:"\u4ece\u4f7f\u7528 Docker\u5f00\u59cb",id:"\u4ece\u4f7f\u7528-docker\u5f00\u59cb",level:3},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e-1",level:3}];function l(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Graph Node\u662f\u7d22\u5f15\u5b50\u56fe\u5e76\u901a\u8fc7 GraphQL API \u63d0\u4f9b\u67e5\u8be2\u7ed3\u679c\u6570\u636e\u7684\u7ec4\u4ef6\u3002 \u56e0\u6b64\uff0c\u5b83\u662f\u7d22\u5f15\u5668\u5806\u6808\u7684\u6838\u5fc3\uff0cGraph Node\u7684\u6b63\u786e\u64cd\u4f5c\u5bf9\u4e8e\u8fd0\u884c\u6210\u529f\u7684\u7d22\u5f15\u5668\u81f3\u5173\u91cd\u8981\u3002"}),"\n",(0,s.jsxs)(r.p,{children:["\u6b64\u6587\u63d0\u4f9b\u4e86Graph Node\u7684\u6982\u8ff0\uff0c\u4ee5\u53ca\u4e00\u4e9b\u7d22\u5f15\u5668\u53ef\u7528\u7684\u66f4\u9ad8\u7ea7\u9009\u9879\u3002 \u8be6\u7ec6\u7684\u6587\u6863\u548c\u8bf4\u660e\u53ef\u4ee5\u5728",(0,s.jsx)(r.a,{href:"https://github.com/graphprotocol/graph-node",children:"Graph Node repository"}),"\u4e2d\u627e\u5230\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"graph-node",children:"Graph Node"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://github.com/graphprotocol/graph-node",children:"Graph Node"})," \u662f\u5728 The Graph Network \u4e0a\u4e3a Subgraphs \u8fdb\u884c\u7d22\u5f15\u7684\u53c2\u8003\u5b9e\u73b0\uff0c\u5b83\u8fde\u63a5\u533a\u5757\u94fe\u5ba2\u6237\u7aef\uff0c\u7d22\u5f15 subgraphs \u5e76\u4f7f\u7d22\u5f15\u7684\u6570\u636e\u53ef\u4f9b\u67e5\u8be2\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["Graph Node\uff08\u4ee5\u53ca\u6574\u4e2a\u7d22\u5f15\u5668\u5806\u6808\uff09\u53ef\u4ee5\u5728\u88f8\u673a\u6216\u4e91\u73af\u5883\u4e2d\u8fd0\u884c\u3002 \u8be5\u4e2d\u5fc3\u5316\u7d22\u5f15\u7ec4\u4ef6\u7684\u7075\u6d3b\u6027\u5bf9\u4e8eThe Graph Protocol\u7684\u9c81\u68d2\u6027\u81f3\u5173\u91cd\u8981\u3002 Graph Node\u53ef\u4ee5\u901a\u8fc7",(0,s.jsx)(r.a,{href:"https://github.com/graphprotocol/graph-node",children:"\u6e90\u4ee3\u7801\u7f16\u8bd1\u6784\u5efa"}),"\uff0c\u7d22\u5f15\u5668\u53ef\u4ee5\u4f7f\u7528\u63d0\u4f9b\u7684",(0,s.jsx)(r.a,{href:"https://hub.docker.com/r/graphprotocol/graph-node",children:"Docker\u955c\u50cf"}),"\u4e4b\u4e00\u3002"]}),"\n",(0,s.jsx)(r.h3,{id:"postgresql-\u6570\u636e\u5e93",children:"PostgreSQL \u6570\u636e\u5e93"}),"\n",(0,s.jsx)(r.p,{children:"Graph Node \u7684\u4e3b\u8981\u5b58\u50a8\u5e93\uff0c\u5176\u4e2d\u5b58\u50a8\u4e86 Subgraph \u6570\u636e\uff0c\u4ee5\u53ca\u5173\u4e8e Subgraph \u7684\u5143\u6570\u636e\u548c\u4e0e Subgraph \u65e0\u5173\u7684\u7f51\u7edc\u6570\u636e\uff0c\u4f8b\u5982\u5757\u7f13\u5b58\u548c eth_call \u7f13\u5b58\u3002"}),"\n",(0,s.jsx)(r.h3,{id:"network-clients",children:"Network clients"}),"\n",(0,s.jsx)(r.p,{children:"\u4e3a\u4e86\u5bf9\u4e00\u4e2a\u7f51\u7edc\u8fdb\u884c\u7d22\u5f15\uff0cGraph Node\u9700\u8981\u901a\u8fc7EVM\u517c\u5bb9\u7684JSON-RPC API\u8bbf\u95ee\u7f51\u7edc\u5ba2\u6237\u7aef\u3002 \u8be5 RPC \u53ef\u80fd\u8fde\u63a5\u5230\u5355\u4e2a\u5ba2\u6237\u7aef\uff0c\u4e5f\u53ef\u80fd\u662f\u66f4\u590d\u6742\u7684\u8bbe\u7f6e\uff0c\u8de8\u591a\u4e2a\u5ba2\u6237\u7aef\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u3002"}),"\n",(0,s.jsxs)(r.p,{children:["\u4e00\u4e9b\u5b50\u56fe\u53ea\u9700\u8981\u4e00\u4e2a\u5168\u8282\u70b9\u5c31\u80fd\u652f\u6301\u7d22\u5f15\u7279\u6027\uff0c\u800c\u90e8\u5206\u5b50\u56fe\u53ef\u80fd\u9700\u8981\u652f\u6301\u989d\u5916RPC\u529f\u80fd\u7684\u8282\u70b9\u3002 \u5177\u4f53\u800c\u8a00\uff0c\u4f5c\u4e3a\u7d22\u5f15\u7684\u4e00\u90e8\u5206\u8fdb\u884c",(0,s.jsx)(r.code,{children:"eth_calls"}),"\u7684\u5b50\u56fe\u5c06\u9700\u8981\u652f\u6301",(0,s.jsx)(r.a,{href:"https://eips.ethereum.org/EIPS/eip-1898",children:"EIP-1898"}),"\u7684\u5b58\u6863\u8282\u70b9\uff0c\u800c\u5177\u6709",(0,s.jsx)(r.code,{children:"callHandlers"}),"\u3001",(0,s.jsx)(r.code,{children:"blockHandlers"}),"\u548c",(0,s.jsx)(r.code,{children:"call"}),"\u8fc7\u6ee4\u5668\u7684\u5b50\u56fe\u5219\u9700\u8981\u652f\u6301",(0,s.jsx)(r.code,{children:"trace_filter"}),"\uff08",(0,s.jsx)(r.a,{href:"https://openethereum.github.io/JSONRPC-trace-module",children:"\u8bf7\u53c2\u89c1\u6b64\u5904\u7684\u8ddf\u8e2a\u6a21\u5757\u6587\u6863"}),"\uff09\u3002"]}),"\n",(0,s.jsx)(r.h3,{id:"ipfs-nodes",children:"IPFS Nodes"}),"\n",(0,s.jsxs)(r.p,{children:["Subgraph \u90e8\u7f72\u5143\u6570\u636e\u5b58\u50a8\u5728 IPFS \u7f51\u7edc\u4e2d\u3002 Graph Node\u4e3b\u8981\u5728\u5b50\u56fe\u90e8\u7f72\u671f\u95f4\u8bbf\u95eeIPFS\u8282\u70b9\uff0c\u4ee5\u83b7\u53d6\u5b50\u56fe\u6e05\u5355\u548c\u6240\u6709\u94fe\u63a5\u6587\u4ef6\u3002 \u7f51\u7edc\u7d22\u5f15\u7a0b\u5e8f\u4e0d\u9700\u8981\u6258\u7ba1\u81ea\u5df1\u7684IPFS\u8282\u70b9\u3002 \u7f51\u7edc\u7684IPFS\u8282\u70b9\u6258\u7ba1\u5728",(0,s.jsx)(r.a,{href:"https://ipfs.network.thegraph.com/",children:"https://ipfs.network.thegraph.com"}),"\u3002"]}),"\n",(0,s.jsx)(r.h3,{id:"getting-started-from-source",children:"Getting started from source"}),"\n",(0,s.jsx)(r.h3,{id:"install-prerequisites",children:"Install prerequisites"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"Rust"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"PostgreSQL"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"IPFS"})}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Ubuntu \u7528\u6237\u7684\u989d\u5916\u8981\u6c42"})," - \u5728 Ubuntu \u4e0a\u8fd0\u884c Graph Node \u9700\u8981\u5b89\u88c5\u4e00\u4e9b\u989d\u5916\u7684\u8f6f\u4ef6\u5305\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"sudo apt-get install -y clang libpg-dev libssl-dev pkg-config"})}),"\n",(0,s.jsx)(r.h3,{id:"\u8bbe\u7f6e",children:"\u8bbe\u7f6e"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u542f\u52a8 PostgreSQL \u6570\u636e\u5e93\u670d\u52a1\u5668\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"initdb -D .postgres pg_ctl -D .postgres -l logfile start createdb graph-node"})}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\u514b\u9686",(0,s.jsx)(r.a,{href:"https://github.com/graphprotocol/graph-node",children:"Graph Node"}),"\u4ed3\u5e93\u5e76\u901a\u8fc7\u8fd0\u884c",(0,s.jsx)(r.code,{children:"cargo build"}),"\u6784\u5efa\u6e90\u4ee3\u7801\u3002"]}),"\n",(0,s.jsx)(r.li,{children:"\u73b0\u5728\u6240\u6709\u4f9d\u8d56\u9879\u90fd\u8bbe\u7f6e\u597d\u4e86\uff0c\u53ef\u4ee5\u542f\u52a8Graph Node\u4e86\uff1a"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"cargo run -p graph-node --release -- \\   --postgres-url postgresql://[USERNAME]:[PASSWORD]@localhost:5432/graph-node \\   --ethereum-rpc [NETWORK_NAME]:[URL] \\   --ipfs https://ipfs.network.thegraph.com"})}),"\n",(0,s.jsx)(r.h3,{id:"\u4ece\u4f7f\u7528-docker\u5f00\u59cb",children:"\u4ece\u4f7f\u7528 Docker\u5f00\u59cb"}),"\n",(0,s.jsx)(r.h3,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Ethereum node"})," - \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cdocker compose\u8bbe\u7f6e\u5c06\u4f7f\u7528 mainnet: ",(0,s.jsx)(r.a,{href:"http://host.docker.internal:8545/",children:"http://host.docker.internal:8545"})," \u8fde\u63a5\u5230\u60a8\u4e3b\u673a\u4e0a\u7684\u4ee5\u592a\u574a\u8282\u70b9\u3002 \u4f60\u53ef\u4ee5\u901a\u8fc7\u66f4\u65b0",(0,s.jsx)(r.code,{children:"docker-compose.yml"}),"\u6587\u4ef6\u4e2d\u7684\u7f51\u7edc\u540d\u79f0\u548cURL\u6765\u66ff\u6362\u6b64\u8bbe\u7f6e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"\u8bbe\u7f6e-1",children:"\u8bbe\u7f6e"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u514b\u9686Graph Node\u5e76\u5207\u6362\u5230Docker\u76ee\u5f55\uff1a"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"git clone http://github.com/graphprotocol/graph-node cd graph-node/docker"})}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u5bf9\u4e8e Linux \u7528\u6237 - \u4f7f\u7528\u5305\u542b\u5728\u811a\u672c\u4e2d\u7684\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5c06 docker-compose.yml \u6587\u4ef6\u4e2d\u7684 host.docker.internal \u66ff\u6362\u4e3a\u4e3b\u673a\u7684 IP \u5730\u5740\uff1a"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"./setup.sh"})}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u542f\u52a8\u4e00\u4e2a\u672c\u5730\u7684Graph Node\uff0c\u4f7f\u5176\u8fde\u63a5\u5230\u4f60\u7684Ethereum\u8282\u70b9\uff1a"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"docker-compose up"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"\u53c2\u8003\u8d44\u6599"})})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://thegraph.com/docs/en/operating-graph-node/",children:"https://thegraph.com/docs/en/operating-graph-node/"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://hub.docker.com/r/graphprotocol/graph-node/",children:"https://hub.docker.com/r/graphprotocol/graph-node/"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/pranavdaa/Graph-Node-Local",children:"https://github.com/pranavdaa/Graph-Node-Local"})})]})}function a(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>h});var s=n(67294);const o={},t=s.createContext(o);function h(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:h(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);