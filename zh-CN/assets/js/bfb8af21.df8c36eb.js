"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3489],{20746:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var c=o(85893),r=o(11151);const s={id:"txpool_rpc",sidebar_position:2,title:"txpool \u547d\u540d\u7a7a\u95f4",keywords:["conflux","txpool-rpc","sdk"],displayed_sidebar:"coreSidebar"},t=void 0,l={id:"core/build/json-rpc/txpool_rpc",title:"txpool \u547d\u540d\u7a7a\u95f4",description:"txpool \u76f8\u5173\u7684 RPC \u53ef\u4ee5\u8ba9\u5f00\u53d1\u8005\u83b7\u53d6\u66f4\u591a\u5173\u4e8e\u4ea4\u6613\u6c60\u7684\u4fe1\u606f\u3002 Which was introduced from conflux-rust v1.1.6.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/build/json-rpc/txpool-namespace.md",sourceDirName:"core/build/json-rpc",slug:"/core/build/json-rpc/txpool_rpc",permalink:"/zh-CN/docs/core/build/json-rpc/txpool_rpc",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"txpool_rpc",sidebar_position:2,title:"txpool \u547d\u540d\u7a7a\u95f4",keywords:["conflux","txpool-rpc","sdk"],displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"cfx \u547d\u540d\u7a7a\u95f4",permalink:"/zh-CN/docs/core/build/json-rpc/cfx-namespace"},next:{title:"pos \u547d\u540d\u7a7a\u95f4",permalink:"/zh-CN/docs/core/build/json-rpc/pos_rpc"}},d={},i=[{value:"RPCs",id:"rpcs",level:2},{value:"txpool_nextNonce",id:"txpool_nextnonce",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"Returns",id:"returns",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4}];function p(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"txpool"})," \u76f8\u5173\u7684 RPC \u53ef\u4ee5\u8ba9\u5f00\u53d1\u8005\u83b7\u53d6\u66f4\u591a\u5173\u4e8e\u4ea4\u6613\u6c60\u7684\u4fe1\u606f\u3002 Which was introduced from ",(0,c.jsx)(n.code,{children:"conflux-rust v1.1.6"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["These RPC methods require node's ",(0,c.jsx)(n.code,{children:"public_rpc_apis"})," config set to ",(0,c.jsx)(n.code,{children:"safe"})," or ",(0,c.jsx)(n.code,{children:"all"}),", or the namespace include ",(0,c.jsx)(n.code,{children:"txpool"})]}),"\n",(0,c.jsx)(n.h2,{id:"rpcs",children:"RPCs"}),"\n",(0,c.jsx)(n.h3,{id:"txpool_nextnonce",children:"txpool_nextNonce"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u4ea4\u6613\u6c60\u4e2d\u4e00\u4e2a\u5730\u5740\u7684\u4e0b\u4e00\u4e2a\u53ef\u7528none\u3002"}),"\n",(0,c.jsx)(n.h4,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"ADDRESS"}),": CIP-37 address"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'params: [\n  "cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91"\n]\n'})}),"\n",(0,c.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"QUANTITY"})," - Account's next usable nonce"]}),"\n",(0,c.jsx)(n.h4,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.p,{children:"\u8bf7\u6c42"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sh",children:'curl --location --request POST \'http://localhost:12537\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "id": 1,\n    "jsonrpc": "2.0",\n    "method": "txpool_nextNonce",\n    "params": ["cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91"]\n}\'\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "result": "0x278"\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>t});var c=o(67294);const r={},s=c.createContext(r);function t(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);