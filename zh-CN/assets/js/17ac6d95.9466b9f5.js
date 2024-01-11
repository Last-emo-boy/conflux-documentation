"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[984],{41976:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>t});var s=c(85893),a=c(11151);const r={sidebar_position:10,title:"\u8d26\u6237\u548c\u5730\u5740",displayed_sidebar:"generalSidebar"},i=void 0,d={id:"general/conflux-basics/accounts",title:"\u8d26\u6237\u548c\u5730\u5740",description:"\u6982\u89c8",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/conflux-basics/accounts.md",sourceDirName:"general/conflux-basics",slug:"/general/conflux-basics/accounts",permalink:"/zh-CN/docs/general/conflux-basics/accounts",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u8d26\u6237\u548c\u5730\u5740",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u4ea4\u6613",permalink:"/zh-CN/docs/general/conflux-basics/transactions"},next:{title:"\u71c3\u6c14",permalink:"/zh-CN/docs/general/conflux-basics/gas"}},o={},t=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u5730\u5740",id:"\u5730\u5740",level:2},{value:"\u8d26\u6237\u7c7b\u578b",id:"\u8d26\u6237\u7c7b\u578b",level:2},{value:"\u5916\u90e8\u8d26\u6237\u548c\u516c\u79c1\u94a5\u5bf9",id:"\u5916\u90e8\u8d26\u6237\u548c\u516c\u79c1\u94a5\u5bf9",level:3},{value:"\u667a\u80fd\u5408\u7ea6\u8d26\u6237",id:"\u667a\u80fd\u5408\u7ea6\u8d26\u6237",level:3},{value:"Comparison of Different Account Types",id:"comparison-of-different-account-types",level:2},{value:"\u76f8\u4f3c\u4e4b\u5904",id:"\u76f8\u4f3c\u4e4b\u5904",level:3},{value:"\u5dee\u5f02",id:"\u5dee\u5f02",level:3},{value:"\u5916\u90e8\u8d26\u6237",id:"\u5916\u90e8\u8d26\u6237",level:4},{value:"\u667a\u80fd\u5408\u7ea6",id:"\u667a\u80fd\u5408\u7ea6",level:4},{value:"\u76f8\u5173\u4e3b\u9898",id:"\u76f8\u5173\u4e3b\u9898",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u6982\u89c8",children:"\u6982\u89c8"}),"\n",(0,s.jsx)(n.p,{children:'Accounts in Conflux can be compared to "bank accounts", as they store CFX. \u7528\u6237\u53ef\u4ee5\u521b\u5efa\u548c\u7ba1\u7406\u4ed6\u4eec\u7684\u8d26\u6237\uff0c\u5b58\u5165CFX\uff0c\u5e76\u53d1\u9001\u4ea4\u6613\u3002 \u8d26\u6237\u5730\u5740\u662f\u4e00\u4e2a\u6807\u8bc6\u8d26\u6237\u7684\u552f\u4e00\u7684\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u4eceConflux VM\u7684\u5de8\u5927\u8868\u4e2d\u68c0\u7d22\u8d26\u6237\u4fe1\u606f\uff0c\u8be5\u8868\u5b58\u50a8\u4e86\u8d26\u6237\u5185\u5bb9\u548c\u4f59\u989d\u3002'}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The account implementation, including the account content and address computing rule is slightly different in ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/core/core-space-basics/accounts",children:"core space"})," and ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/espace/build/accounts",children:"espace"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"\u5730\u5740",children:"\u5730\u5740"}),"\n",(0,s.jsxs)(n.p,{children:["Account addresses, like bank account numbers, identify accounts and can be examined on ",(0,s.jsx)(n.a,{href:"https://confluxscan.io",children:"ConfluxScan"}),". However, the address format differs between ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/core/core-space-basics/addresses",children:"core space"})," and espace. Core space\u4f7f\u7528CIP-37\u7f16\u7801\u65b9\u6848\uff0c\u800cespace\u4f7f\u7528\u4e0e\u4ee5\u592a\u574a\u76f8\u540c\u7684\u683c\u5f0f\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e9b\u793a\u4f8b\uff0c\u663e\u793a\u4e86\u4e24\u4e2a\u7a7a\u95f4\u4e2d\u7684\u5730\u5740\u683c\u5f0f\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"// espace address\n0x1e97870f263700f46aa00d967821199b9bc5a120\n// Core Space Mainnet address\ncfx:aatktb2te25ub7dmyag3p8bbdgr31vrbeackztm2rj\n// Core Space Testnet address\ncfxtest:aatktb2te25ub7dmyag3p8bbdgr31vrbeajcg9pwkc\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8d26\u6237\u7c7b\u578b",children:"\u8d26\u6237\u7c7b\u578b"}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u4e24\u79cd\u8d26\u6237\u7c7b\u578b\uff0c\u5916\u90e8\u62e5\u6709\u7684\u8d26\u6237\uff08externally-owned account, EOA\uff09\u548c\u5408\u7ea6\u8d26\u6237\u3002 EOA\u7531\u62e5\u6709\u8be5\u8d26\u6237\u79c1\u94a5\u7684\u4efb\u4f55\u4eba\u63a7\u5236\uff0c\u800c\u5408\u7ea6\u8d26\u6237\u662f\u90e8\u7f72\u5728\u7f51\u7edc\u4e0a\u7684\u667a\u80fd\u5408\u7ea6\uff0c\u7531\u5176\u4ee3\u7801\u63a7\u5236\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5916\u90e8\u8d26\u6237\u548c\u516c\u79c1\u94a5\u5bf9",children:"\u5916\u90e8\u8d26\u6237\u548c\u516c\u79c1\u94a5\u5bf9"}),"\n",(0,s.jsx)(n.p,{children:"EOA\u7531\u4e00\u5bf9\u52a0\u5bc6\u5bc6\u94a5\u7ec4\u6210\uff1a\u4e00\u4e2a\u516c\u94a5\u548c\u4e00\u4e2a\u79c1\u94a5\u3002 \u79c1\u94a5\u662f\u4e00\u4e2a64\u4e2a\u5341\u516d\u8fdb\u5236\u5b57\u7b26\u7684\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u7b7e\u7f72\u4ea4\u6613\u5e76\u638c\u7ba1\u4e0e\u8be5\u8d26\u6237\u76f8\u5173\u7684\u8d44\u91d1\u3002 \u516c\u94a5\u5bc6\u7801\u5b66\u786e\u4fdd\u4ea4\u6613\u4e0d\u4f1a\u88ab\u4f2a\u9020\uff0c\u5e76\u4e14\u53d1\u9001\u8005\u53ef\u4ee5\u8bc1\u660e\u4ea4\u6613\u8bf7\u6c42\u7684\u771f\u5b9e\u6027\u3002 \u8fd9\u53ef\u4ee5\u9632\u6b62\u6076\u610f\u884c\u4e3a\u8005\u5e7f\u64ad\u5047\u4ea4\u6613\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u4f5c\u4e3a\u793a\u4f8b\u7684\u79c1\u94a5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"c5eca1e5de819725cf7c6764f4bba7eea95549a40275b21eaff91554c59bef90\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u516c\u94a5\u662f\u901a\u8fc7 ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm",children:"\u692d\u5706\u66f2\u7ebf\u52a0\u5bc6\u7b97\u6cd5"}),"\u4ece\u79c1\u94a5\u8ba1\u7b97\u51fa\u6765\u7684"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"0xa82d8039606ea598798ae1c995e2dbad90561d67ffa9555f96e0bc3dbc38c32aa1ede8ab17a137b8515b94b158b49a746c77abc432c2677cb0a6d3240be98872\n"})}),"\n",(0,s.jsx)(n.p,{children:"EOA\u7684\u5730\u5740\u4ece\u5176\u516c\u94a5\u8ba1\u7b97\u51fa\u6765\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"// espace address, encoded in EIP-55 checksum format\n0x7058Ce27AF14B05943B879E530Df642867dFcf57\n// core space mainnet address (encoded in CIP-37 format)\ncfx:aajfvxvhz6mna0md1b68mpg9puygt18tm6nynadnf6\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u667a\u80fd\u5408\u7ea6\u8d26\u6237",children:"\u667a\u80fd\u5408\u7ea6\u8d26\u6237"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/zh-CN/docs/general/conflux-basics/contracts",children:"\u667a\u80fd\u5408\u7ea6"}),"\u4e5f\u6709\u5730\u5740\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u53d1\u9001\u4ea4\u6613\u4e0e\u5b83\u4eec\u4ea4\u4e92\u3002 \u5408\u7ea6\u5730\u5740\u5728\u5408\u7ea6\u90e8\u7f72\u65f6\u786e\u5b9a\uff0c\u8ba1\u7b97\u89c4\u5219\u5728core space\u548cespace\u4e4b\u95f4\u6709\u6240\u4e0d\u540c\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"comparison-of-different-account-types",children:"Comparison of Different Account Types"}),"\n",(0,s.jsx)(n.h3,{id:"\u76f8\u4f3c\u4e4b\u5904",children:"\u76f8\u4f3c\u4e4b\u5904"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5b83\u4eec\u90fd\u53ef\u4ee5\u63a5\u53d7\u3001\u6301\u6709\u548c\u53d1\u9001CFX\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5b83\u4eec\u90fd\u53ef\u4ee5\u4e0e\u7f51\u7edc\u4e2d\u7684\u667a\u80fd\u5408\u7ea6\u4ea4\u4e92"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5dee\u5f02",children:"\u5dee\u5f02"}),"\n",(0,s.jsx)(n.h4,{id:"\u5916\u90e8\u8d26\u6237",children:"\u5916\u90e8\u8d26\u6237"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u521b\u5efa\u5916\u90e8\u8d26\u6237\u6ca1\u6709\u6210\u672c\uff0c\u4f8b\u5982CFX\u6216\u5176\u4ed6\u8d44\u6e90"}),"\n",(0,s.jsx)(n.li,{children:"\u5b83\u4eec\u53ef\u4ee5\u5411\u5176\u4ed6\u4eba\u53d1\u9001\u4ea4\u6613"}),"\n",(0,s.jsx)(n.li,{children:"Transactions between external accounts can only be CFX or token transactions"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u667a\u80fd\u5408\u7ea6",children:"\u667a\u80fd\u5408\u7ea6"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u521b\u5efa\u667a\u80fd\u5408\u7ea6\u6709\u6210\u672c\uff0c\u56e0\u4e3a\u5b83\u4f7f\u7528\u4e86\u7f51\u7edc\u7684\u5b58\u50a8\u548c\u8ba1\u7b97\u8d44\u6e90"}),"\n",(0,s.jsx)(n.li,{children:"Transactions can only be sent to other contracts as a response to a received transaction"}),"\n",(0,s.jsx)(n.li,{children:"\u4ece\u5916\u90e8\u8d26\u6237\u53d1\u9001\u5230\u5408\u7ea6\u8d26\u6237\u7684\u4ea4\u6613\u53ef\u4ee5\u89e6\u53d1\u667a\u80fd\u5408\u7ea6\u7684\u4ee3\u7801\u6267\u884c\u8bb8\u591a\u4e0d\u540c\u7684\u64cd\u4f5c\uff0c\u4f8b\u5982\u4ee3\u5e01\u8f6c\u79fb\uff0c\u521b\u5efa\u65b0\u5408\u7ea6\u7b49\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u76f8\u5173\u4e3b\u9898",children:"\u76f8\u5173\u4e3b\u9898"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/accounts/",children:"Ethereum Accounts"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/zh-CN/docs/core/core-space-basics/accounts",children:"Core space accounts"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/zh-CN/docs/espace/build/accounts",children:"espace accounts"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/zh-CN/docs/core/core-space-basics/addresses",children:"Core space addresses"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>d,a:()=>i});var s=c(67294);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);