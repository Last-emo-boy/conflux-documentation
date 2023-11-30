"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[551],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7661:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7294),o=r(6010),a=r(3734),i=r(3699),c=r(2735),s=r(7325);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",l.cardContainer)},r)}function u(e){let{href:t,icon:r,title:a,description:i}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:a},r," ",a),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:i},i))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function d(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const i=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e})))))}},8917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(4137)),a=r(7661);const i={sidebar_position:1,title:"\u5de5\u4f5c\u91cf\u8bc1\u660e\uff08PoW\uff09",displayed_sidebar:"generalSidebar"},c=void 0,s={unversionedId:"general/conflux-basics/consensus-mechanisms/proof-of-work/proof-of-work",id:"general/conflux-basics/consensus-mechanisms/proof-of-work/proof-of-work",title:"\u5de5\u4f5c\u91cf\u8bc1\u660e\uff08PoW\uff09",description:"PoW\u7684\u6982\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/conflux-basics/consensus-mechanisms/proof-of-work/proof-of-work.mdx",sourceDirName:"general/conflux-basics/consensus-mechanisms/proof-of-work",slug:"/general/conflux-basics/consensus-mechanisms/proof-of-work/",permalink:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/proof-of-work/",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5de5\u4f5c\u91cf\u8bc1\u660e\uff08PoW\uff09",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Consensus",permalink:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/"},next:{title:"The Tree-Graph",permalink:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/proof-of-work/tree-graph"}},l={},p=[{value:"PoW\u7684\u6982\u5ff5",id:"pow\u7684\u6982\u5ff5",level:2},{value:"\u6bd4\u7279\u5e01\u7684PoW\u5171\u8bc6",id:"\u6bd4\u7279\u5e01\u7684pow\u5171\u8bc6",level:2},{value:"Conflux\u7684PoW\u5171\u8bc6",id:"conflux\u7684pow\u5171\u8bc6",level:2}],u={toc:p},f="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pow\u7684\u6982\u5ff5"},"PoW\u7684\u6982\u5ff5"),(0,o.kt)("p",null,"\u5de5\u4f5c\u91cf\u8bc1\u660e\uff08PoW\uff09\u7684\u6982\u5ff5\u6700\u65e9\u7531Cynthia Dwork\u548cMoni Naor\u57281993\u5e74\u63d0\u51fa\uff0c\u4f5c\u4e3a\u4e00\u79cd\u9632\u6b62\u5783\u573e\u90ae\u4ef6\u7684\u624b\u6bb5\u3002 The concept was simple: require the email sender to solve a computational problem before sending. The computational problem is designed to be time-consuming, requiring certain amount of computational power to solve.  The receiver of the email would then verify that the sender had solved the computational problem before accepting the email. This verification process would ensure that only legitimate emails are accepted and that spammers are unable to flood the receiver's inbox with unsolicited emails."),(0,o.kt)("p",null,"\u8fd9\u6837\u505a\u7684\u76ee\u7684\u662f\u8ba9\u53d1\u9001\u5927\u91cf\u5783\u573e\u90ae\u4ef6\u7684\u4eba\u66f4\u52a0\u56f0\u96be\u548c\u8017\u8d39\u8d44\u6e90\uff0c\u540c\u65f6\u4ecd\u7136\u5141\u8bb8\u5408\u6cd5\u7684\u90ae\u4ef6\u53d1\u9001\u8005\u51e0\u4e4e\u4e0d\u53d7\u4efb\u4f55\u4e0d\u4fbf\u5730\u53d1\u9001\u4ed6\u4eec\u7684\u90ae\u4ef6\u3002 \u867d\u7136PoW\u7528\u4e8e\u9632\u6b62\u5783\u573e\u90ae\u4ef6\u7684\u6982\u5ff5\u662f\u5408\u7406\u7684\uff0c\u4f46\u7531\u4e8e\u5b83\u7ed9\u5408\u6cd5\u7684\u90ae\u4ef6\u53d1\u9001\u8005\u5e26\u6765\u4e86\u4e0d\u4fbf\uff0c\u5b83\u5e76\u6ca1\u6709\u5f97\u5230\u5e7f\u6cdb\u7684\u91c7\u7528\u3002 \u7136\u800c\uff0cPoW\u7684\u6982\u5ff5\u540e\u6765\u88ab\u4e2d\u672c\u806a\u6539\u9020\uff0c\u5e76\u7528\u4e8e\u521b\u5efa\u201c\u70b9\u5bf9\u70b9\u7535\u5b50\u73b0\u91d1\u7cfb\u7edf\u201d\uff0c\u5373\u533a\u5757\u94fe\u201c\u6bd4\u7279\u5e01\u201d\u3002"),(0,o.kt)("h2",{id:"\u6bd4\u7279\u5e01\u7684pow\u5171\u8bc6"},"\u6bd4\u7279\u5e01\u7684PoW\u5171\u8bc6"),(0,o.kt)("p",null,"\u6bd4\u7279\u5e01\u4f7f\u7528PoW\u673a\u5236\u6765\u51b3\u5b9a\u8c01\u53ef\u4ee5\u5728\u533a\u5757\u94fe\u4e0a\u6316\u6398\u65b0\u7684\u533a\u5757\u3002 \u6316\u6398\u4e00\u4e2a\u533a\u5757\u7684\u8fc7\u7a0b\u6d89\u53ca\u91cd\u590d\u5730\u5bf9\u533a\u5757\u5934\u548c\u4e00\u4e2a\u968f\u673a\u6570\u8fdb\u884c\u54c8\u5e0c\u8fd0\u7b97\uff0c\u4ee5\u627e\u5230\u4e00\u4e2a\u6ee1\u8db3\u7f51\u7edc\u5f53\u524d\u96be\u5ea6\u76ee\u6807\u7684\u54c8\u5e0c\u503c\u3002 \u77ff\u5de5\u4eec\u7ade\u4e89\u89e3\u51b3\u8fd9\u4e2a\u96be\u9898\uff0c\u7b2c\u4e00\u4e2a\u89e3\u51b3\u5b83\u7684\u77ff\u5de5\u4f1a\u5f97\u5230\u65b0\u94f8\u9020\u7684\u6bd4\u7279\u5e01\u548c\u4e0e\u533a\u5757\u4e2d\u4ea4\u6613\u76f8\u5173\u7684\u4efb\u4f55\u4ea4\u6613\u8d39\u7528\u4f5c\u4e3a\u5956\u52b1\u3002"),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u6bd4\u7279\u5e01\u5f15\u5165\u4e86",(0,o.kt)("strong",{parentName:"p"},"\u6700\u957f\u94fe\u89c4\u5219"),"\uff0c\u4ee5\u786e\u4fdd\u7f51\u7edc\u5728\u533a\u5757\u94fe\u7684\u5355\u4e00\u7248\u672c\u4e0a\u8fbe\u6210\u4e00\u81f4\u3002 \u5982\u679c\u4e24\u4e2a\u77ff\u5de5\u540c\u65f6\u521b\u5efa\u533a\u5757\uff0c\u5c31\u4f1a\u53d1\u751f\u533a\u5757\u94fe\u7684\u5206\u53c9\uff0c\u5f62\u6210\u4e24\u4e2a\u7ade\u4e89\u7684\u533a\u5757\u94fe\u7248\u672c\u3002 \u800c\u4e3a\u4e86\u786e\u5b9a\u4e24\u4e2a\u5206\u53c9\u4e2d\u7684\u54ea\u4e00\u4e2a\u662f\u6709\u6548\u7684\uff0c\u8981\u5e94\u7528\u6700\u957f\u94fe\u89c4\u5219\u3002 \u8fd9\u6761\u89c4\u5219\u6307\u51fa\uff0c\u6709\u6548\u7684\u5206\u53c9\u662f\u62e5\u6709\u6700\u957f\u533a\u5757\u94fe\u7684\u5206\u53c9\uff0c\u6362\u8a00\u4e4b\uff0c\u5305\u542b\u6700\u591a\u5de5\u4f5c\u8bc1\u660e\u7684\u5206\u53c9\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u4f7f\u521b\u5efa\u65b0\u533a\u5757\u53d8\u5f97\u56f0\u96be\u548c\u8d44\u6e90\u5bc6\u96c6\uff0cPoW\u786e\u4fdd\u4e86\u7f51\u7edc\u7684\u5b89\u5168\u6027\uff0c\u4ee5\u53ca\u9664\u975e\u67d0\u4e2a\u5b9e\u4f53\u63a7\u5236\u4e86\u8d85\u8fc751%\u7684\u8ba1\u7b97\u80fd\u529b\uff0c\u5426\u5219\u65e0\u6cd5\u63a7\u5236\u7cfb\u7edf\u3002 \u6b64\u5916\uff0c\u5956\u52b1\u673a\u5236\u6fc0\u52b1\u77ff\u5de5\u53c2\u4e0e\u5e76\u7ef4\u62a4\u7f51\u7edc\u3002 PoW\u7684\u5f15\u5165\u5f7b\u5e95\u6539\u53d8\u4e86\u6211\u4eec\u5bf9\u53bb\u4e2d\u5fc3\u5316\u7cfb\u7edf\u7684\u601d\u8003\u65b9\u5f0f\uff0c\u5e76\u4e3a\u8bb8\u591a\u5176\u4ed6\u52a0\u5bc6\u8d27\u5e01\u548c\u533a\u5757\u94fe\u5e94\u7528\u7684\u53d1\u5c55\u94fa\u5e73\u4e86\u9053\u8def\u3002"),(0,o.kt)("h2",{id:"conflux\u7684pow\u5171\u8bc6"},"Conflux\u7684PoW\u5171\u8bc6"),(0,o.kt)("p",null,"Conflux\u4e5f\u4f7f\u7528PoW\u5171\u8bc6\u673a\u5236\u6765\u4fdd\u62a4\u5176\u7f51\u7edc\u3002 \u7ed3\u5408",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1805.03870.pdf"},"Tree-Graph"),"\u8d26\u672c\u7ed3\u6784\u548c ",(0,o.kt)("a",{parentName:"p",href:"https://confluxnetwork.medium.com/conflux-research-group-ghast-mechanism-adaptive-weight-ghast-explained-part-1-ffe8224a7282"},"GHAST"),"\u94fe\u9009\u62e9\u89c4\u5219\uff0c\u5b83\u53ef\u4ee5\u5728\u4fdd\u6301\u4e0e\u6bd4\u7279\u5e01\u548c\u4ee5\u592a\u574a\u76f8\u540c\u7684\u53bb\u4e2d\u5fc3\u5316\u548c\u5b89\u5168\u6027\u6c34\u5e73\u7684\u540c\u65f6\uff0c\u5c06\u4ea4\u6613\u541e\u5410\u91cf(TPS)\u548c\u786e\u8ba4\u5ef6\u8fdf\u63d0\u9ad8\u4e24\u4e2a\u6570\u91cf\u7ea7\u4ee5\u4e0a\u3002 "),(0,o.kt)(a.Z,{mdxType:"DocCardList"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://confluxnetwork.org/files/Conflux_Technical_Presentation_20200309.pdf"},"Conflux Technical Presentation")," page 45-47 for the most accurate description of Conflux's throughput.")))}m.isMDXComponent=!0}}]);