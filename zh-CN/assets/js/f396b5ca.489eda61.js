"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8412],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(4137));const a={sidebar_position:5,title:"Token Standards",displayed_sidebar:"coreSidebar"},i=void 0,s={unversionedId:"core/build/token-standards",id:"core/build/token-standards",title:"Token Standards",description:"\u8fd9\u4e2a\u6587\u6863\u9875\u9762\u76ee\u524d\u6b63\u5728\u5efa\u8bbe\u4e2d\u3002 \u4f5c\u4e3a\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u6211\u4eec\u4f9d\u9760\u8d21\u732e\u8005\u7684\u534f\u4f5c\u6765\u521b\u5efa\u5168\u9762\u548c\u6700\u65b0\u7684\u5185\u5bb9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/build/token-standards.md",sourceDirName:"core/build",slug:"/core/build/token-standards",permalink:"/zh-CN/docs/core/build/token-standards",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Token Standards",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"\u57fa\u91d1\u4f1a Gas \u8d5e\u52a9",permalink:"/zh-CN/docs/core/build/gas-sponsorship"},next:{title:"JSON-RPC",permalink:"/zh-CN/docs/core/build/json-rpc/"}},l={},p=[{value:"Related Links",id:"related-links",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u6587\u6863\u9875\u9762\u76ee\u524d\u6b63\u5728\u5efa\u8bbe\u4e2d\u3002 \u4f5c\u4e3a\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u6211\u4eec\u4f9d\u9760\u8d21\u732e\u8005\u7684\u534f\u4f5c\u6765\u521b\u5efa\u5168\u9762\u548c\u6700\u65b0\u7684\u5185\u5bb9\u3002"),(0,o.kt)("p",{parentName:"admonition"},"To track the progress of this page or get involved, please visit the corresponding GitHub issue: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-documentation/issues/109"},"Complete core/build/token-standards page"),". \u5982\u679c\u4f60\u6709\u5174\u8da3\u4e3a\u8fd9\u4e2a\u9875\u9762\u7684\u5b8c\u6210\u505a\u51fa\u8d21\u732e\uff0c\u6b22\u8fce",(0,o.kt)("strong",{parentName:"p"},"\u5728issue\u4e0b\u7559\u8a00"),"\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u8ba1\u5212\u53d1\u653ePOAP NFT\u4f5c\u4e3a\u5bf9\u5e2e\u52a9\u6587\u6863\u7684\u8d21\u732e\u8005\u7684\u611f\u8c22\u3002 \u60a8\u5bf9\u9879\u76ee\u7684\u53c2\u4e0e\u5c06\u5f97\u5230\u8ba4\u53ef\u548c\u5956\u52b1\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u611f\u8c22\u60a8\u5bf9Conflux\u7684\u5173\u6ce8\u3002 \u6211\u4eec\u671f\u5f85\u4e0e\u60a8\u5206\u4eab\u5b8c\u6210\u7684\u5185\u5bb9\u3002")),(0,o.kt)("h2",{id:"related-links"},"Related Links"),(0,o.kt)("p",null,"Here are some links relating to this topic:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-20"},"ERC-20")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-721"},"ERC-721")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-777"},"ERC-777")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1155"},"ERC-1155")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-1820.md"},"CIP-1820"))))}d.isMDXComponent=!0}}]);