"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9208],{66410:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var o=s(85893),r=s(11151);const t={sidebar_position:3,title:"GHAST",displayed_sidebar:"generalSidebar"},c=void 0,i={id:"general/conflux-basics/consensus-mechanisms/proof-of-work/ghast",title:"GHAST",description:"GHAST (Greedy-Heaviest-Adaptive-SubTree)",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/conflux-basics/consensus-mechanisms/proof-of-work/ghast.md",sourceDirName:"general/conflux-basics/consensus-mechanisms/proof-of-work",slug:"/general/conflux-basics/consensus-mechanisms/proof-of-work/ghast",permalink:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/proof-of-work/ghast",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"GHAST",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u6811\u56fe\u8d26\u672c\u7ed3\u6784",permalink:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/proof-of-work/tree-graph"},next:{title:"PoS \u6982\u89c8",permalink:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/pos_overview"}},a={},l=[];function u(e){const n={p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"GHAST (Greedy-Heaviest-Adaptive-SubTree)"}),"\n",(0,o.jsx)(n.p,{children:"Conflux Research Group\u5f00\u53d1\u4e86GHAST\u673a\u5236\uff0c\u4ee5\u89e3\u51b3\u201c\u6d3b\u6027\u653b\u51fb\u201d\u95ee\u9898\u3002 \u8be5\u673a\u5236\u6d89\u53ca\u5e94\u7528\u6700\u91cd\u94fe\u89c4\u5219\uff0c\u4f46\u91c7\u7528\u4e86\u4fee\u6539\u540e\u7684\u533a\u5757\u6743\u91cd\u7cfb\u7edf\u3002 \u533a\u5757\u7684\u7c7b\u578b\u662f\u6839\u636e\u533a\u5757\u7684\u5386\u53f2\u6811\u56fe\u7ed3\u6784\u51b3\u5b9a\u7684\uff0c\u800c\u4e0d\u662f\u77ff\u5de5\u7684\u81ea\u7531\u88c1\u91cf\u3002 \u5728GHAST\u673a\u5236\u4e0b\uff0c\u6700\u91cd\u94fe\u89c4\u5219\u662f\u901a\u8fc7\u4ece\u5f53\u524d\u6700\u540e\u4e3b\u94fe\u533a\u5757\u7684\u5b50\u6811\u4e2d\u9009\u62e9\u6743\u91cd\u6700\u9ad8\u7684\u5b50\u533a\u5757\u6765\u5b9e\u73b0\u7684\u3002 \u5b50\u6811\u7684\u533a\u5757\u6743\u91cd\u7684\u8ba1\u7b97\u4e0d\u518d\u4ec5\u57fa\u4e8e\u533a\u5757\u6570\u91cf\uff0c\u800c\u4e14\u8fd8\u8981\u8003\u8651\u6743\u91cd\u4e4b\u548c\u3002 GHAST\u673a\u5236\u901a\u8fc7\u5141\u8bb8\u77ff\u5de5\u751f\u6210\u7279\u6b8a\u533a\u5757\uff0c\u589e\u52a0\u4e86\u533a\u5757\u96be\u5ea6\u5e76\u964d\u4f4e\u4e86\u533a\u5757\u751f\u6210\u901f\u5ea6\uff0c\u4ece\u800c\u6709\u52a9\u4e8e\u89e3\u51b3\u201c\u6d3b\u6027\u653b\u51fb\u201d\u95ee\u9898\u3002"}),"\n",(0,o.jsx)(n.p,{children:"GHAST\u673a\u5236\u7684\u6838\u5fc3\u90e8\u5206\u53ef\u4ee5\u603b\u7ed3\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(n.p,{children:"\u5e94\u7528\u6700\u91cd\u94fe\u89c4\u5219\uff0c\u4f46\u662f\u533a\u5757\u6709\u4e09\u79cd\u4e0d\u540c\u7684\u6743\u91cd\uff1a0\u30011\u3001X\u3002\u5176\u4e2dX\u662f\u4e00\u4e2a\u76f8\u5bf9\u8f83\u5927\u7684\u6570\u5b57\uff0c\u4f8b\u5982X=1000\uff08\u5ffd\u7565\u6d89\u53ca\u6316\u77ff\u96be\u5ea6\u8c03\u6574\u7684\u60c5\u51b5\uff09\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u7f51\u7edc\u4e2d\u6709\u4e24\u79cd\u7c7b\u578b\u7684\u533a\u5757\uff1a\u666e\u901a\u533a\u5757\u548c\u7279\u6b8a\u533a\u5757\u3002 \u666e\u901a\u533a\u5757\u7684\u6743\u91cd\u59cb\u7ec8\u4e3a1\uff1b\u7279\u6b8a\u533a\u5757\u7684\u6743\u91cd\u6839\u636e\u533a\u5757\u7684\u96be\u5ea6\uff08Difficulty\uff09\u786e\u5b9a\u2014\u2014\u67091/X\u7684\u7279\u6b8a\u533a\u5757\u6743\u91cd\u4e3aX\uff0c\u5176\u4f59\u4e3a0\u3002 \u6316\u6398\u666e\u901a\u533a\u5757\u548c\u7279\u6b8a\u533a\u5757\u5177\u6709\u76f8\u540c\u7684\u96be\u5ea6\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u533a\u5757\u7684\u7c7b\u578b\u7531\u533a\u5757\u7684\u5386\u53f2\u6811\u56fe\u7ed3\u6784\u51b3\u5b9a\u3002 \u4f5c\u4e3a\u4e00\u4e2a\u533a\u5757\u7684\u751f\u6210\u8005\uff0c\u4e0d\u80fd\u4efb\u610f\u6307\u5b9a\u533a\u5757\u7c7b\u578b\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u6ca1\u6709\u653b\u51fb\u7684\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u7531\u8bda\u5b9e\u53c2\u4e0e\u8005\u751f\u6210\u7684\u65b0\u533a\u5757\u90fd\u5e94\u8be5\u6210\u4e3a\u666e\u901a\u533a\u5757\uff1b\u5728\u653b\u51fb\u8005\u8fdb\u884c\u4efb\u4f55\u5f62\u5f0f\u7684\u201c\u6d3b\u6027\u653b\u51fb\u201d\u5e76\u6301\u7eed\u8db3\u591f\u957f\u65f6\u95f4\u540e\uff0c\u6240\u6709\u7531\u8bda\u5b9e\u53c2\u4e0e\u8005\u751f\u6210\u7684\u65b0\u533a\u5757\u90fd\u53d8\u6210\u7279\u6b8a\u533a\u5757\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var o=s(67294);const r={},t=o.createContext(r);function c(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);