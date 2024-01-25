"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[4696],{74043:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=n(85893),i=n(11151);const s={sidebar_position:4,title:"\u8fd0\u884c PoS \u8d28\u62bc\u6c60",displayed_sidebar:"generalSidebar"},r=void 0,a={id:"general/mine-stake/stake/running-staking-pool",title:"\u8fd0\u884c PoS \u8d28\u62bc\u6c60",description:"In this section we present a guide for how to deploy, configure and manage a POS Pool that will allow CFX holders to join to the PoS protocol just interacting with the front-end application of the PoS Pool and without dealing with the technical complexities.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/mine-stake/stake/running-staking-pool.md",sourceDirName:"general/mine-stake/stake",slug:"/general/mine-stake/stake/running-staking-pool",permalink:"/zh-CN/docs/general/mine-stake/stake/running-staking-pool",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u8fd0\u884c PoS \u8d28\u62bc\u6c60",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u8d28\u62bc\u6ce8\u610f\u4e8b\u9879",permalink:"/zh-CN/docs/general/mine-stake/stake/staking-considerations"},next:{title:"Run a PoS Node on AWS",permalink:"/zh-CN/docs/general/mine-stake/stake/run-pos-node-on-aws"}},l={},c=[{value:"Reference Architecture",id:"reference-architecture",level:2},{value:"conflux-fans/pos-pool",id:"conflux-fanspos-pool",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"Run a full/archive node",id:"run-a-fullarchive-node",level:3},{value:"Deploy PoS Pool Contract",id:"deploy-pos-pool-contract",level:3},{value:"Setup Pool Interface",id:"setup-pool-interface",level:3},{value:"Summary",id:"summary",level:2}];function d(e){const o={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["In this section we present a guide for how to deploy, configure and manage a ",(0,t.jsx)(o.strong,{children:"POS Pool"})," that will allow CFX holders to join to the PoS protocol just interacting with the front-end application of the PoS Pool and without dealing with the technical complexities."]}),"\n",(0,t.jsx)(o.h2,{id:"reference-architecture",children:"Reference Architecture"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Architecture",src:n(87273).Z+"",width:"1295",height:"605"})}),"\n",(0,t.jsx)(o.p,{children:"Please note this configuration guide is to do the technical setup of the PoS Pool staking environment."}),"\n",(0,t.jsx)(o.p,{children:"Conflux PoS Pool configuration has two major components: Interface application and full node. It needs technical knowledge for configuration of instances, ports, contracts deployment and storage configuration."}),"\n",(0,t.jsx)(o.p,{children:"The configuration of a reverse proxy and a firewall is recommended but is out of the scope of this guide."}),"\n",(0,t.jsx)(o.h2,{id:"conflux-fanspos-pool",children:"conflux-fans/pos-pool"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"https://github.com/conflux-fans/pos-pool",children:"conflux-fans/pos-pool"})," is a open source project that provides a PoS Pool interface and a PoS Pool contract. We can use it to setup a PoS Pool dApp."]}),"\n",(0,t.jsx)(o.h3,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,t.jsx)(o.p,{children:"The POS Pool operator needs to have the infrastructure to run the following:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"A full/archive node"}),"\n",(0,t.jsx)(o.li,{children:"A Web Server Farm, or a single web server to run the POS Pool application"}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"run-a-fullarchive-node",children:"Run a full/archive node"}),"\n",(0,t.jsxs)(o.p,{children:["First of all, we need to run a full/archive node following the ",(0,t.jsx)(o.a,{href:"../../run-a-node/",children:"instructions"})," in the Conflux documentation."]}),"\n",(0,t.jsx)(o.h3,{id:"deploy-pos-pool-contract",children:"Deploy PoS Pool Contract"}),"\n",(0,t.jsxs)(o.p,{children:["Then we need to deploy the PoS Pool contract following the ",(0,t.jsx)(o.a,{href:"https://github.com/conflux-fans/pos-pool/tree/main/contract#setup",children:"instructions"})," in pos-pool's documentation."]}),"\n",(0,t.jsx)(o.h3,{id:"setup-pool-interface",children:"Setup Pool Interface"}),"\n",(0,t.jsxs)(o.p,{children:["Finally, we need to setup the PoS Pool interface following the ",(0,t.jsx)(o.a,{href:"https://github.com/conflux-fans/pos-pool/blob/main/interface/README.md",children:"instructions"})]}),"\n",(0,t.jsx)(o.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Conflux-fans/pos-pool"})," is just a reference implementation of a PoS Pool. Use it at your own risk. If you have encountered any problems, you can check it's ",(0,t.jsx)(o.a,{href:"https://github.com/conflux-fans/pos-pool/tree/main/contract/docs",children:"documentation"}),", ",(0,t.jsx)(o.a,{href:"https://github.com/conflux-fans/pos-pool/tree/main#faqs",children:"faqs"})," and ",(0,t.jsx)(o.a,{href:"https://github.com/conflux-fans/pos-pool/issues",children:"issues"}),"."]})]})}function u(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},87273:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/PoSReferenceArchitecture-bb0738164cefdbb3732bd31348c79daf.png"},11151:(e,o,n)=>{n.d(o,{Z:()=>a,a:()=>r});var t=n(67294);const i={},s=t.createContext(i);function r(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);