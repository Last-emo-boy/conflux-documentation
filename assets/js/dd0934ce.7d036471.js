"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1351],{53651:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=n(85893),i=n(11151),s=n(17661);const c={sidebar_position:2,title:"Getting Started",displayed_sidebar:"coreSidebar"},o=void 0,a={id:"core/getting-started/getting-started",title:"Getting Started",description:"",source:"@site/docs/core/getting-started/getting-started.mdx",sourceDirName:"core/getting-started",slug:"/core/getting-started/",permalink:"/docs/core/getting-started/",draft:!1,unlisted:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/getting-started/getting-started.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Getting Started",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"Overview",permalink:"/docs/core/Overview"},next:{title:"Installing a Wallet",permalink:"/docs/core/getting-started/installing-a-wallet"}},d={},l=[];function u(t){return(0,r.jsx)(s.Z,{})}function m(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(u,{...t})}):u()}},17661:(t,e,n)=>{n.d(e,{Z:()=>x});n(67294);var r=n(36905),i=n(78259),s=n(34791),c=n(2735),o=n(97325),a=n(13899);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(85893);function u(t){let{href:e,children:n}=t;return(0,l.jsx)(s.Z,{href:e,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function m(t){let{href:e,icon:n,title:i,description:s}=t;return(0,l.jsxs)(u,{href:e,children:[(0,l.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),s&&(0,l.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function f(t){let{item:e}=t;const n=(0,i.LM)(e);return n?(0,l.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function g(t){let{item:e}=t;const n=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(e.docId??void 0);return(0,l.jsx)(m,{href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function p(t){let{item:e}=t;switch(e.type){case"link":return(0,l.jsx)(g,{item:e});case"category":return(0,l.jsx)(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function h(t){let{className:e}=t;const n=(0,i.jA)();return(0,l.jsx)(x,{items:n.items,className:e})}function x(t){const{items:e,className:n}=t;if(!e)return(0,l.jsx)(h,{...t});const s=(0,i.MN)(e);return(0,l.jsx)("section",{className:(0,r.Z)("row",n),children:s.map(((t,e)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(p,{item:t})},e)))})}},11151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>c});var r=n(67294);const i={},s=r.createContext(i);function c(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:c(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);