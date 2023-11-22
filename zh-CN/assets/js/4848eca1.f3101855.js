"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3761],{4137:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var r=n(7294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,s=function(t,e){if(null==t)return{};var n,r,s={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},p="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,s=t.mdxType,l=t.originalType,i=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=c(n),d=s,h=p["".concat(i,".").concat(d)]||p[d]||f[d]||l;return n?r.createElement(h,a(a({ref:e},u),{},{components:n})):r.createElement(h,a({ref:e},u))}));function h(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[p]="string"==typeof t?t:s,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9344:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),s=(n(7294),n(4137));const l={sidebar_position:1,title:"ShuttleFlow"},a=void 0,o={unversionedId:"general/tutorials/transferring-funds/across-chains/transferring-funds-across-chains",id:"general/tutorials/transferring-funds/across-chains/transferring-funds-across-chains",title:"ShuttleFlow",description:"\u4f7f\u7528ShuttleFlow\u8de8\u94fe\u8f6c\u79fb\u8d44\u91d1",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/tutorials/transferring-funds/across-chains/transferring-funds-across-chains.md",sourceDirName:"general/tutorials/transferring-funds/across-chains",slug:"/general/tutorials/transferring-funds/across-chains/transferring-funds-across-chains",permalink:"/zh-CN/docs/general/tutorials/transferring-funds/across-chains/transferring-funds-across-chains",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"ShuttleFlow"},sidebar:"tutorialSidebar",previous:{title:"Across Chains",permalink:"/zh-CN/docs/category/across-chains"},next:{title:"Meson",permalink:"/zh-CN/docs/general/tutorials/transferring-funds/across-chains/transfer-stablecoins-across-chains-using-meson"}},i={},c=[{value:"\u4f7f\u7528ShuttleFlow\u8de8\u94fe\u8f6c\u79fb\u8d44\u91d1",id:"\u4f7f\u7528shuttleflow\u8de8\u94fe\u8f6c\u79fb\u8d44\u91d1",level:2}],u={toc:c},p="wrapper";function f(t){let{components:e,...l}=t;return(0,s.kt)(p,(0,r.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u4f7f\u7528shuttleflow\u8de8\u94fe\u8f6c\u79fb\u8d44\u91d1"},"\u4f7f\u7528ShuttleFlow\u8de8\u94fe\u8f6c\u79fb\u8d44\u91d1"),(0,s.kt)("p",null,"\u8981\u5c06\u8d44\u91d1\u4ece\u5176\u4ed6\u94fe\u8f6c\u5230Conflux Core Space\uff0c\u7528\u6237\u53ef\u4ee5\u5728 ",(0,s.kt)("a",{parentName:"p",href:"https://www.confluxhub.io/shuttle-flow"},"ConfluxHub"),"\u7684ShuttleFlow \u9875\u9762\u505a\u5230\u8fd9\u4e00\u70b9\u3002"),(0,s.kt)("p",null,"ShuttleFlow\u662f\u4e00\u4e2a\u53bb\u4e2d\u5fc3\u5316\u7684\u8de8\u94fe\u8d44\u4ea7\u8f6c\u79fb\u534f\u8bae\uff0c\u5141\u8bb8\u7528\u6237\u5728\u4e0d\u540c\u7684\u533a\u5757\u94fe\u7f51\u7edc\u4e4b\u95f4\u8f6c\u79fb\u4ed6\u4eec\u7684\u8d44\u4ea7\uff0c\u4f8b\u5982Conflux Core\u3001\u4ee5\u592a\u574a\u548c\u5e01\u5b89\u667a\u80fd\u94fe\u3002 \u901a\u8fc7\u4f7f\u7528ShuttleFlow\uff0c\u7528\u6237\u53ef\u4ee5\u5feb\u901f\u3001\u5b89\u5168\u548c\u4f4e\u6210\u672c\u5730\u8f6c\u79fb\u5176\u8d44\u4ea7\u3002"),(0,s.kt)("p",null,"\u4e0b\u9762\u662f\u5173\u4e8e\u5982\u4f55\u4f7f\u7528ShuttleFlow\u8f6c\u79fb\u8d44\u4ea7\u7684\u5206\u6b65\u6307\u5357\uff1a"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7b2c 1 \u6b65\uff1a\u8fde\u63a5\u60a8\u7684\u94b1\u5305")),(0,s.kt)("p",null,"\u7b2c\u4e00\u6b65\u662f\u8fde\u63a5\u4f60\u7684\u94b1\u5305\u3002 \u60a8\u9700\u8981\u5728Conflux Core\u7f51\u7edc\u4e0a\u4f7f\u7528Fluent\u94b1\u5305\uff0c\u5728\u5176\u4ed6\u7f51\u7edc\u4e0a\u4f7f\u7528MetaMask\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"shuttleflow",src:n(2364).Z,width:"1280",height:"631"})," ",(0,s.kt)("img",{alt:"shuttleflow1",src:n(7126).Z,width:"1280",height:"495"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7b2c 2 \u6b65\uff1a\u9009\u62e9\u8d44\u4ea7\u548c\u7f51\u7edc")),(0,s.kt)("p",null,"\u4e00\u65e6\u4f60\u7684\u94b1\u5305\u8fde\u63a5\u6210\u529f\uff0c\u9009\u62e9\u4f60\u60f3\u8981\u8f6c\u79fb\u7684\u8d44\u4ea7\u548c\u4f60\u60f3\u8981\u8f6c\u79fb\u5230\u7684\u7f51\u7edc\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c06\u4eceConflux Core\u8f6c\u79fbCFX\u5230Binance Smart Chain\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"shuttleflow5",src:n(49).Z,width:"1103",height:"958"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7b2c 3 \u6b65\uff1a\u53d1\u8d77\u8f6c\u8d26")),(0,s.kt)("p",null,"\u70b9\u51fb ",(0,s.kt)("strong",{parentName:"p"},"Next")," \u6309\u94ae\u6765\u53d1\u8d77\u8f6c\u8d26\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"shuttleflow4",src:n(6199).Z,width:"1092",height:"955"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7b2c 4 \u6b65\uff1a\u8f93\u5165\u8f6c\u8d26\u4fe1\u606f")),(0,s.kt)("p",null,"\u8f93\u5165\u60a8\u60f3\u8981\u8f6c\u79fb\u7684CFX\u6570\u91cf\u548c\u60a8\u5e0c\u671b\u63a5\u6536\u4ee3\u5e01\u7684BSC\u5730\u5740\u3002 \u60a8\u8fd8\u9700\u8981\u6279\u51c6\u4ea4\u6613\u5e76\u652f\u4ed8\u71c3\u6c14\u8d39\u7528\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"shuttleflow2",src:n(5754).Z,width:"1280",height:"730"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7b2c5\u6b65\uff1a\u786e\u8ba4\u5e76\u7b49\u5f85\u8f6c\u8d26\u5b8c\u6210")),(0,s.kt)("p",null,"\u4e00\u65e6\u60a8\u8f93\u5165\u4e86\u6240\u6709\u5fc5\u8981\u7684\u4fe1\u606f\u5e76\u652f\u4ed8\u4e86\u71c3\u6c14\u8d39\u7528\uff0c\u8bf7\u786e\u8ba4\u4ea4\u6613\u3002 \u968f\u540e\uff0cShuttleFlow \u5c06\u5904\u7406\u8be5\u8f6c\u8d26\uff0c\u5e76\u4e14\u60a8\u9700\u8981\u7b49\u5f85\u4ea4\u6613\u786e\u8ba4\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"shuttleflow3",src:n(6587).Z,width:"1280",height:"469"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7b2c 6 \u6b65\uff1a\u68c0\u67e5\u60a8\u7684\u94b1\u5305")),(0,s.kt)("p",null,"\u8f6c\u79fb\u5b8c\u6210\u540e\uff0c\u60a8\u5e94\u8be5\u5728\u60a8\u7684 BSC \u94b1\u5305\u4e2d\u770b\u5230\u5df2\u8f6c\u79fb\u7684\u8d44\u4ea7\u3002 \u606d\u559c\uff01 \u60a8\u5df2\u6210\u529f\u4f7f\u7528 ShuttleFlow \u8f6c\u79fb\u60a8\u7684\u8d44\u4ea7\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"shuttleflow6",src:n(3181).Z,width:"1157",height:"693"})),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u5f53\u4ece\u53e6\u4e00\u4e2a\u94fe\u8f6c\u79fb\u8d44\u4ea7\u5230 Conflux Core \u65f6\uff0c\u8be5\u8fc7\u7a0b\u7c7b\u4f3c\u3002")))}f.isMDXComponent=!0},2364:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/shuttleflow-6160dce282beaccd06d1536607b1fca3.jpg"},7126:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/shuttleflow1-423afc6b3c8c22d76d1966811a3f0edb.jpg"},5754:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/shuttleflow2-15d24319874269015893da5371884307.jpg"},6587:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/shuttleflow3-0383fedf78ba295084686d674e2207f4.jpg"},6199:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/shuttleflow4-c31e1ff1f55f30b1a2fd9a7d38d4abe1.jpg"},49:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/shuttleflow5-ae77474ee9e61597c679d20287c795b2.jpg"},3181:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/shuttleflow6-37ac9604fc4d94e1edbd523b810b1183.jpg"}}]);