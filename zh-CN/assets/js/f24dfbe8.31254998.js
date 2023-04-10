"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_postion:6},a="Contributing",s={unversionedId:"general/CONTRIBUTING",id:"general/CONTRIBUTING",title:"Contributing",description:"Thank you for your interest in contributing to our documentation site! We appreciate your support and value the insights and expertise of our community. This page outlines the guidelines and process for contributing, as well as the rewards you can earn for your efforts.",source:"@site/docs/general/CONTRIBUTING.md",sourceDirName:"general",slug:"/general/CONTRIBUTING",permalink:"/zh-CN/docs/general/CONTRIBUTING",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",frontMatter:{sidebar_postion:6},sidebar:"tutorialSidebar",previous:{title:"FAQs",permalink:"/zh-CN/docs/general/mine-stake/stake/faqs"},next:{title:"Build",permalink:"/zh-CN/docs/general/build/"}},l={},u=[{value:"How to Contribute",id:"how-to-contribute",level:2},{value:"Create an Issue",id:"create-an-issue",level:3},{value:"Create a Pull Request",id:"create-a-pull-request",level:3},{value:"Provide Translation",id:"provide-translation",level:3},{value:"Contributor POAPs",id:"contributor-poaps",level:2},{value:"Special POAPs",id:"special-poaps",level:3},{value:"Issuing Rule Updates",id:"issuing-rule-updates",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing"},"Contributing"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Thank you for your interest in contributing to our documentation site! We appreciate your support and value the insights and expertise of our community. This page outlines the guidelines and process for contributing, as well as the rewards you can earn for your efforts.")),(0,o.kt)("h2",{id:"how-to-contribute"},"How to Contribute"),(0,o.kt)("p",null,"We welcome contributions in a variety of forms, including but not limited to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Pointing out a mistake/typo and (optionally) providing a solution"),(0,o.kt)("li",{parentName:"ol"},"Providing translation"),(0,o.kt)("li",{parentName:"ol"},"Creating or improving diagrams, charts, or visual aids"),(0,o.kt)("li",{parentName:"ol"},"Suggesting improvements to the documentation structure or organization"),(0,o.kt)("li",{parentName:"ol"},"Writing or updating a tutorial or guide"),(0,o.kt)("li",{parentName:"ol"},"Creating or updating code samples, examples, or demos"),(0,o.kt)("li",{parentName:"ol"},"Polishing or improving document writing")),(0,o.kt)("p",null,"To submit a contribution, please follow these suggestions:"),(0,o.kt)("h3",{id:"create-an-issue"},"Create an Issue"),(0,o.kt)("p",null,"Create an issue in our documentation repository using an existed template"),(0,o.kt)("h3",{id:"create-a-pull-request"},"Create a Pull Request"),(0,o.kt)("p",null,"Before creating a pull request, it is suggested to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Make sure a relavent issue with "ACCEPTED" label exists.'),(0,o.kt)("li",{parentName:"ol"},"Leave a comment in the issue in case duplicate people working on the same issue."),(0,o.kt)("li",{parentName:"ol"},"Mention the issue ",(0,o.kt)("inlineCode",{parentName:"li"},"#xx")," in the commit message. Example ",(0,o.kt)("inlineCode",{parentName:"li"},"fix: typo. Ref #123456"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"These are not mandatory steps but will decrease the possibility your PR be rejected.")),(0,o.kt)("h3",{id:"provide-translation"},"Provide Translation"),(0,o.kt)("p",null,"We are using ",(0,o.kt)("a",{parentName:"p",href:"https://crowdin.com/project/conflux"},"Crowdin")," for document translation integration. Translation strings will be pushed to Github repo after they are reviewed. A translation PR in the Github repo will NEVER be accepted."),(0,o.kt)("h2",{id:"contributor-poaps"},"Contributor POAPs"),(0,o.kt)("p",null,"Anyone who contributes to the documentation site during a season can mint a contributor POAP. Your contribution must be accepted or implemented to be eligible for the POAP."),(0,o.kt)("h3",{id:"special-poaps"},"Special POAPs"),(0,o.kt)("p",null,"In addition to the regular contributor POAPs, we recognize and reward significant contributions with special POAPs. Examples of significant contributions include high-quality guides or consistent, frequent contributions to the project. The decision to award a special POAP is made on a case-by-case basis by the project maintainers."),(0,o.kt)("h3",{id:"issuing-rule-updates"},"Issuing Rule Updates"),(0,o.kt)("p",null,"Please note that the POAP issuing rules are subject to review and possible changes every 3 months. This ensures that our guidelines remain relevant and effective in promoting and rewarding valuable contributions."),(0,o.kt)("p",null,"We look forward to your contributions and thank you for helping us improve our documentation site! If you have any questions or need assistance, please feel free to create an issue in our Github repo."))}d.isMDXComponent=!0}}]);