"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[551],{75848:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=o(85893),r=o(11151),s=o(17661);const i={sidebar_position:1,title:"\u5de5\u4f5c\u91cf\u8bc1\u660e\uff08PoW\uff09",displayed_sidebar:"generalSidebar"},c=void 0,a={id:"general/conflux-basics/consensus-mechanisms/proof-of-work/proof-of-work",title:"\u5de5\u4f5c\u91cf\u8bc1\u660e\uff08PoW\uff09",description:"PoW\u7684\u6982\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/conflux-basics/consensus-mechanisms/proof-of-work/proof-of-work.mdx",sourceDirName:"general/conflux-basics/consensus-mechanisms/proof-of-work",slug:"/general/conflux-basics/consensus-mechanisms/proof-of-work/",permalink:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/proof-of-work/",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5de5\u4f5c\u91cf\u8bc1\u660e\uff08PoW\uff09",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u5171\u8bc6",permalink:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/"},next:{title:"\u6811\u56fe\u8d26\u672c\u7ed3\u6784",permalink:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/proof-of-work/tree-graph"}},l={},d=[{value:"PoW\u7684\u6982\u5ff5",id:"pow\u7684\u6982\u5ff5",level:2},{value:"\u6bd4\u7279\u5e01\u7684PoW\u5171\u8bc6",id:"\u6bd4\u7279\u5e01\u7684pow\u5171\u8bc6",level:2},{value:"Conflux\u7684PoW\u5171\u8bc6",id:"conflux\u7684pow\u5171\u8bc6",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",h2:"h2",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"pow\u7684\u6982\u5ff5",children:"PoW\u7684\u6982\u5ff5"}),"\n",(0,t.jsx)(n.p,{children:"\u5de5\u4f5c\u91cf\u8bc1\u660e\uff08PoW\uff09\u7684\u6982\u5ff5\u6700\u65e9\u7531Cynthia Dwork\u548cMoni Naor\u57281993\u5e74\u63d0\u51fa\uff0c\u4f5c\u4e3a\u4e00\u79cd\u9632\u6b62\u5783\u573e\u90ae\u4ef6\u7684\u624b\u6bb5\u3002 The concept was simple: require the email sender to solve a computational problem before sending. The computational problem is designed to be time-consuming, requiring certain amount of computational power to solve.  The receiver of the email would then verify that the sender had solved the computational problem before accepting the email. This verification process would ensure that only legitimate emails are accepted and that spammers are unable to flood the receiver's inbox with unsolicited emails."}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u6837\u505a\u7684\u76ee\u7684\u662f\u8ba9\u53d1\u9001\u5927\u91cf\u5783\u573e\u90ae\u4ef6\u7684\u4eba\u66f4\u52a0\u56f0\u96be\u548c\u8017\u8d39\u8d44\u6e90\uff0c\u540c\u65f6\u4ecd\u7136\u5141\u8bb8\u5408\u6cd5\u7684\u90ae\u4ef6\u53d1\u9001\u8005\u51e0\u4e4e\u4e0d\u53d7\u4efb\u4f55\u4e0d\u4fbf\u5730\u53d1\u9001\u4ed6\u4eec\u7684\u90ae\u4ef6\u3002 \u867d\u7136PoW\u7528\u4e8e\u9632\u6b62\u5783\u573e\u90ae\u4ef6\u7684\u6982\u5ff5\u662f\u5408\u7406\u7684\uff0c\u4f46\u7531\u4e8e\u5b83\u7ed9\u5408\u6cd5\u7684\u90ae\u4ef6\u53d1\u9001\u8005\u5e26\u6765\u4e86\u4e0d\u4fbf\uff0c\u5b83\u5e76\u6ca1\u6709\u5f97\u5230\u5e7f\u6cdb\u7684\u91c7\u7528\u3002 \u7136\u800c\uff0cPoW\u7684\u6982\u5ff5\u540e\u6765\u88ab\u4e2d\u672c\u806a\u6539\u9020\uff0c\u5e76\u7528\u4e8e\u521b\u5efa\u201c\u70b9\u5bf9\u70b9\u7535\u5b50\u73b0\u91d1\u7cfb\u7edf\u201d\uff0c\u5373\u533a\u5757\u94fe\u201c\u6bd4\u7279\u5e01\u201d\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u6bd4\u7279\u5e01\u7684pow\u5171\u8bc6",children:"\u6bd4\u7279\u5e01\u7684PoW\u5171\u8bc6"}),"\n",(0,t.jsx)(n.p,{children:"\u6bd4\u7279\u5e01\u4f7f\u7528PoW\u673a\u5236\u6765\u51b3\u5b9a\u8c01\u53ef\u4ee5\u5728\u533a\u5757\u94fe\u4e0a\u6316\u6398\u65b0\u7684\u533a\u5757\u3002 \u6316\u6398\u4e00\u4e2a\u533a\u5757\u7684\u8fc7\u7a0b\u6d89\u53ca\u91cd\u590d\u5730\u5bf9\u533a\u5757\u5934\u548c\u4e00\u4e2a\u968f\u673a\u6570\u8fdb\u884c\u54c8\u5e0c\u8fd0\u7b97\uff0c\u4ee5\u627e\u5230\u4e00\u4e2a\u6ee1\u8db3\u7f51\u7edc\u5f53\u524d\u96be\u5ea6\u76ee\u6807\u7684\u54c8\u5e0c\u503c\u3002 \u77ff\u5de5\u4eec\u7ade\u4e89\u89e3\u51b3\u8fd9\u4e2a\u96be\u9898\uff0c\u7b2c\u4e00\u4e2a\u89e3\u51b3\u5b83\u7684\u77ff\u5de5\u4f1a\u5f97\u5230\u65b0\u94f8\u9020\u7684\u6bd4\u7279\u5e01\u548c\u4e0e\u533a\u5757\u4e2d\u4ea4\u6613\u76f8\u5173\u7684\u4efb\u4f55\u4ea4\u6613\u8d39\u7528\u4f5c\u4e3a\u5956\u52b1\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u6bd4\u7279\u5e01\u5f15\u5165\u4e86",(0,t.jsx)(n.strong,{children:"\u6700\u957f\u94fe\u89c4\u5219"}),"\uff0c\u4ee5\u786e\u4fdd\u7f51\u7edc\u5728\u533a\u5757\u94fe\u7684\u5355\u4e00\u7248\u672c\u4e0a\u8fbe\u6210\u4e00\u81f4\u3002 \u5982\u679c\u4e24\u4e2a\u77ff\u5de5\u540c\u65f6\u521b\u5efa\u533a\u5757\uff0c\u5c31\u4f1a\u53d1\u751f\u533a\u5757\u94fe\u7684\u5206\u53c9\uff0c\u5f62\u6210\u4e24\u4e2a\u7ade\u4e89\u7684\u533a\u5757\u94fe\u7248\u672c\u3002 \u800c\u4e3a\u4e86\u786e\u5b9a\u4e24\u4e2a\u5206\u53c9\u4e2d\u7684\u54ea\u4e00\u4e2a\u662f\u6709\u6548\u7684\uff0c\u8981\u5e94\u7528\u6700\u957f\u94fe\u89c4\u5219\u3002 \u8fd9\u6761\u89c4\u5219\u6307\u51fa\uff0c\u6709\u6548\u7684\u5206\u53c9\u662f\u62e5\u6709\u6700\u957f\u533a\u5757\u94fe\u7684\u5206\u53c9\uff0c\u6362\u8a00\u4e4b\uff0c\u5305\u542b\u6700\u591a\u5de5\u4f5c\u8bc1\u660e\u7684\u5206\u53c9\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u4f7f\u521b\u5efa\u65b0\u533a\u5757\u53d8\u5f97\u56f0\u96be\u548c\u8d44\u6e90\u5bc6\u96c6\uff0cPoW\u786e\u4fdd\u4e86\u7f51\u7edc\u7684\u5b89\u5168\u6027\uff0c\u4ee5\u53ca\u9664\u975e\u67d0\u4e2a\u5b9e\u4f53\u63a7\u5236\u4e86\u8d85\u8fc751%\u7684\u8ba1\u7b97\u80fd\u529b\uff0c\u5426\u5219\u65e0\u6cd5\u63a7\u5236\u7cfb\u7edf\u3002 \u6b64\u5916\uff0c\u5956\u52b1\u673a\u5236\u6fc0\u52b1\u77ff\u5de5\u53c2\u4e0e\u5e76\u7ef4\u62a4\u7f51\u7edc\u3002 PoW\u7684\u5f15\u5165\u5f7b\u5e95\u6539\u53d8\u4e86\u6211\u4eec\u5bf9\u53bb\u4e2d\u5fc3\u5316\u7cfb\u7edf\u7684\u601d\u8003\u65b9\u5f0f\uff0c\u5e76\u4e3a\u8bb8\u591a\u5176\u4ed6\u52a0\u5bc6\u8d27\u5e01\u548c\u533a\u5757\u94fe\u5e94\u7528\u7684\u53d1\u5c55\u94fa\u5e73\u4e86\u9053\u8def\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"conflux\u7684pow\u5171\u8bc6",children:"Conflux\u7684PoW\u5171\u8bc6"}),"\n",(0,t.jsxs)(n.p,{children:["Conflux\u4e5f\u4f7f\u7528PoW\u5171\u8bc6\u673a\u5236\u6765\u4fdd\u62a4\u5176\u7f51\u7edc\u3002 \u7ed3\u5408",(0,t.jsx)(n.a,{href:"https://arxiv.org/pdf/1805.03870.pdf",children:"Tree-Graph"}),"\u8d26\u672c\u7ed3\u6784\u548c ",(0,t.jsx)(n.a,{href:"https://confluxnetwork.medium.com/conflux-research-group-ghast-mechanism-adaptive-weight-ghast-explained-part-1-ffe8224a7282",children:"GHAST"}),"\u94fe\u9009\u62e9\u89c4\u5219\uff0c\u5b83\u53ef\u4ee5\u5728\u4fdd\u6301\u4e0e\u6bd4\u7279\u5e01\u548c\u4ee5\u592a\u574a\u76f8\u540c\u7684\u53bb\u4e2d\u5fc3\u5316\u548c\u5b89\u5168\u6027\u6c34\u5e73\u7684\u540c\u65f6\uff0c\u5c06\u4ea4\u6613\u541e\u5410\u91cf(TPS)\u548c\u786e\u8ba4\u5ef6\u8fdf\u63d0\u9ad8\u4e24\u4e2a\u6570\u91cf\u7ea7\u4ee5\u4e0a\u3002"]}),"\n","\n","\n",(0,t.jsx)(s.Z,{}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"https://confluxnetwork.org/files/Conflux_Technical_Presentation_20200309.pdf",children:"Conflux Technical Presentation"})," page 45-47 for the most accurate description of Conflux's throughput."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},17661:(e,n,o)=>{o.d(n,{Z:()=>g});o(67294);var t=o(36905),r=o(78259),s=o(34791),i=o(2735),c=o(97325),a=o(13899);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=o(85893);function u(e){let{href:n,children:o}=e;return(0,d.jsx)(s.Z,{href:n,className:(0,t.Z)("card padding--lg",l.cardContainer),children:o})}function h(e){let{href:n,icon:o,title:r,description:s}=e;return(0,d.jsxs)(u,{href:n,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,t.Z)("text--truncate",l.cardTitle),title:r,children:[o," ",r]}),s&&(0,d.jsx)("p",{className:(0,t.Z)("text--truncate",l.cardDescription),title:s,children:s})]})}function p(e){let{item:n}=e;const o=(0,r.LM)(n);return o?(0,d.jsx)(h,{href:o,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function f(e){let{item:n}=e;const o=(0,i.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,r.xz)(n.docId??void 0);return(0,d.jsx)(h,{href:n.href,icon:o,title:n.label,description:n.description??t?.description})}function m(e){let{item:n}=e;switch(n.type){case"link":return(0,d.jsx)(f,{item:n});case"category":return(0,d.jsx)(p,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e;const o=(0,r.jA)();return(0,d.jsx)(g,{items:o.items,className:n})}function g(e){const{items:n,className:o}=e;if(!n)return(0,d.jsx)(x,{...e});const s=(0,r.MN)(n);return(0,d.jsx)("section",{className:(0,t.Z)("row",o),children:s.map(((e,n)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(m,{item:e})},n)))})}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>i});var t=o(67294);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);