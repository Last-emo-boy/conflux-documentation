"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2350],{4137:(e,r,a)=>{a.d(r,{Zo:()=>i,kt:()=>m});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function p(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=t.createContext({}),l=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},i=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=l(a),f=n,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||s;return a?t.createElement(m,o(o({ref:r},i),{},{components:a})):t.createElement(m,o({ref:r},i))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=f;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[d]="string"==typeof e?e:n,o[1]=p;for(var l=2;l<s;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2157:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var t=a(7462),n=(a(7294),a(4137));const s={sidebar_position:5,title:"eSpace Mapped Addresses(Cross Space)",description:"Mapped addresses in cross-space operations",displayed_sidebar:"eSpaceSidebar"},o=void 0,p={unversionedId:"espace/build/accounts",id:"espace/build/accounts",title:"eSpace Mapped Addresses(Cross Space)",description:"Mapped addresses in cross-space operations",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/build/accounts.md",sourceDirName:"espace/build",slug:"/espace/build/accounts",permalink:"/zh-CN/docs/espace/build/accounts",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"eSpace Mapped Addresses(Cross Space)",description:"Mapped addresses in cross-space operations",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"CrossSpaceCall Contract",permalink:"/zh-CN/docs/espace/build/cross-space-bridge"},next:{title:"Resources",permalink:"/zh-CN/docs/category/resources"}},c={},l=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u8de8\u7a7a\u95f4\u64cd\u4f5c\u4e2d\u7684\u6620\u5c04\u5730\u5740",id:"\u8de8\u7a7a\u95f4\u64cd\u4f5c\u4e2d\u7684\u6620\u5c04\u5730\u5740",level:2},{value:"\u8ba1\u7b97\u65b9\u6cd5",id:"\u8ba1\u7b97\u65b9\u6cd5",level:3},{value:"\u76f8\u5173\u4e3b\u9898",id:"\u76f8\u5173\u4e3b\u9898",level:2}],i={toc:l},d="wrapper";function u(e){let{components:r,...a}=e;return(0,n.kt)(d,(0,t.Z)({},i,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,n.kt)("p",null,"Conflux\u7684eSpace\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u7a7a\u95f4\uff0c\u4e0e Conflux \u7f51\u7edc\u4e0a\u7684Core Space\u5728\u903b\u8f91\u4e0a\u9694\u79bb\u5f00\u6765\u3002 eSpace\u4e2d\u7684\u8d26\u6237\u6709\u81ea\u5df1\u7684\u4f59\u989d\u548c\u72b6\u6001\u3002 \u8981\u4e0e eSpace \u4ea4\u4e92\uff0c\u60a8\u9700\u8981\u4f7f\u7528 hex40 \u5730\u5740\uff0c\u5b83\u4eec\u4e0e\u7528\u4e8eCore Space\u7684 ",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/core/learn/core-space-basics/addresses"},"base32 \u5730\u5740"),"\u4e0d\u540c\u3002 You can transfer funds between your Core and eSpace wallets using a ",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/general/tutorials/transferring-funds/transfer-funds-across-spaces"},"bridge service"),"."),(0,n.kt)("p",null,"Conflux eSpace \u662f Conflux Network \u5728\u5176 V2 \u786c\u5206\u53c9\u4e2d\u5f15\u5165\u7684\u65b0\u7279\u6027\u3002 \u5b83\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u7a7a\u95f4\uff0c\u8fd0\u884c\u5728\u4e0eCore Space\u76f8\u540c\u7684\u5e95\u5c42\u57fa\u7840\u8bbe\u65bd\u4e0a\uff0c\u4f46\u5177\u6709\u4e0d\u540c\u7684\u89c4\u5219\u548c\u89c4\u8303\u3002 \u5728 eSpace \u4e2d\uff0c\u8d26\u6237\u9075\u5faa\u4ee5\u592a\u574a\u8d26\u6237\u6a21\u578b\uff0c\u5e76\u4f7f\u7528 hex40 \u5730\u5740\u800c\u4e0d\u662f ",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/core/learn/core-space-basics/addresses"},"base32 \u5730\u5740"),"\u3002 \u8fd9\u610f\u5473\u7740\u5728Core Space\u548c eSpace \u4e2d\u4f7f\u7528\u76f8\u540c\u7684\u79c1\u94a5\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u662fCore Space\u548c eSpace \u4e2d\u7684\u8d26\u6237\u5c06\u5177\u6709\u4e0d\u540c\u7684\u5730\u5740\uff0c\u5e76\u4e14\u5c06\u62e5\u6709\u81ea\u5df1\u7684\u4f59\u989d\u548c\u72b6\u6001\u3002"),(0,n.kt)("p",null,"Hex40 \u5730\u5740\u4e0e\u4ee5\u592a\u574a\u5730\u5740\u517c\u5bb9\uff0c\u8fd9\u610f\u5473\u7740\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u5730\u5c06\u4ed6\u4eec\u7684\u4ee5\u592a\u574a\u94b1\u5305\u5bfc\u5165 Conflux eSpace\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002 \u5728",(0,n.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/accounts/"},"\u4ee5\u592a\u574a\u8d26\u6237"),"\u4e2d\u4e86\u89e3\u66f4\u591a\u5173\u4e8e eSpace \u8d26\u6237\u548c\u5730\u5740\u7684\u57fa\u672c\u6a21\u578b\u3002"),(0,n.kt)("h2",{id:"\u8de8\u7a7a\u95f4\u64cd\u4f5c\u4e2d\u7684\u6620\u5c04\u5730\u5740"},"\u8de8\u7a7a\u95f4\u64cd\u4f5c\u4e2d\u7684\u6620\u5c04\u5730\u5740"),(0,n.kt)("p",null,"\u867d\u7136\u4e24\u4e2a\u7a7a\u95f4\u662f\u72ec\u7acb\u7684\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall")," \u5185\u7f6e\u5408\u7ea6\u5b9e\u73b0 CFX \u548c\u6570\u636e\u7684\u539f\u5b50\u8de8\u94fe\u3002 \u8be5\u5408\u7ea6\u7684\u4ee5\u4e0b\u4e09\u79cd\u65b9\u6cd5\u5141\u8bb8\u4e24\u4e2a\u7a7a\u95f4\u4e4b\u95f4\u8fdb\u884c CFX \u8f6c\u79fb\u3002 \u6ce8\u610f\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall"),"\uff08\u50cf\u5176\u4ed6\u5185\u7f6e\u5408\u7ea6\u4e00\u6837\uff09\u53ea\u80fd\u5728 Conflux Core Space\u4e2d\u8bbf\u95ee\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"function transferEVM(bytes20 to) external payable returns (bytes memory output);\nfunction mappedBalance(address addr) external view returns (uint256);\nfunction withdrawFromMapped(uint256 value) external;\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Core\u5230 eSpace"),"\uff1a\u8981\u5c06 CFX \u4ece Conflux Core Space\u8f6c\u79fb\u5230 Conflux eSpace\uff0c\u9700\u8981\u8c03\u7528\u8be5\u5408\u7ea6\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"transferEVM(bytes20 to)")," \u65b9\u6cd5\u3002 \u8be5\u8f6c\u79fb\u7684\u76ee\u6807\u5730\u5740\u7531\u65b9\u6cd5\u53c2\u6570 ",(0,n.kt)("inlineCode",{parentName:"p"},"to")," \u6307\u5b9a\u3002 \u8de8\u7a7a\u95f4\u8f6c\u79fb\u5c06\u5728\u4e00\u4e2a\u5355\u4e00\u7684\u539f\u5b50\u6b65\u9aa4\u4e2d\u6267\u884c\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"eSpace \u5230Core"),"\uff1aCore Space\u4e2d\u7684\u6bcf\u4e2a\u8d26\u6237\u5728 eSpace \u4e2d\u90fd\u6709\u4e00\u4e2a",(0,n.kt)("strong",{parentName:"p"},"\u6620\u5c04\u8d26\u6237"),"\uff08hex40\uff09\u3002 \u8981\u5c06 CFX \u4ece Conflux eSpace \u8f6c\u79fb\u5230 Conflux Core\uff0c\u9700\u8981\u4e24\u4e2a\u6b65\u9aa4\u3002 \u9996\u5148\uff0c\u5c06 CFX \u8f6c\u79fb\u5230\u5c5e\u4e8e\u76ee\u6807\u8d26\u6237\uff08Core Space\uff09\u7684\u6620\u5c04\u8d26\u6237\uff08eSpace\uff09\u3002 \u8fd9\u4e2a\u64cd\u4f5c\u9700\u8981\u4e00\u4e2a eSpace \u4ea4\u6613\u3002 \u5176\u6b21\uff0c\u8c03\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall")," \u5185\u7f6e\u5408\u7ea6\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"withdrawFromMapped(uint256 value)")," \u65b9\u6cd5\u3002 \u8fd9\u4e2a\u8c03\u7528\u5c06\u628a CFX \u4ece\u6620\u5c04\u8d26\u6237\u8f6c\u56de\u5230\u76f8\u5e94\u7684\u76ee\u6807\u5730\u5740\u3002"),(0,n.kt)("h3",{id:"\u8ba1\u7b97\u65b9\u6cd5"},"\u8ba1\u7b97\u65b9\u6cd5"),(0,n.kt)("p",null,"\u6620\u5c04\u5730\u5740\u662f\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u4ece Conflux Core \u4e2d\u7684 base32 \u5730\u5740\u8ba1\u7b97\u51fa\u6765\u7684\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5c06 base32 \u5730\u5740\u8f6c\u6362\u4e3a\u5341\u516d\u8fdb\u5236\u683c\u5f0f\uff0c\u7136\u540e\u8f6c\u6362\u4e3a\u5b57\u8282\u7c7b\u578b\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5bf9\u524d\u4e00\u6b65\u4e2d\u83b7\u5f97\u7684\u5b57\u8282\u8fdb\u884c Keccak\uff0c\u5f97\u5230\u54c8\u5e0c\u503c\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u53d6\u54c8\u5e0c\u503c\u7684\u6700\u540e 160 \u4f4d\uff0c\u5e76\u8f6c\u6362\u4e3a hex40 \u683c\u5f0f\uff0c\u8fd9\u5c31\u662f\u6620\u5c04\u7684 eSpace \u5730\u5740\u3002")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"js-conflux-sdk v2.0")," provides a method to get the mapped address of the base32 address:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { address } = require('js-conflux-sdk');\nconst base32Address = 'cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91';\nconst mappedAddress = address.cfxMappedEVMSpaceAddress(base32Address);\n// 0x12Bf6283CcF8Ad6ffA63f7Da63EDc217228d839A\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u5173\u4e8e\u6620\u5c04\u5730\u5740\u7684\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"\u6620\u5c04\u5730\u5740\u662f eSpace \u4e2d\u7684\u4e00\u4e2a\u5730\u5740\uff0c\u6240\u4ee5\u5b83\u662f hex40 \u683c\u5f0f\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u6620\u5c04\u5730\u5740\u7684\u76ee\u7684\u662f\u5728\u5c06 CFX \u8de8\u56deCore Space\u65f6\u4f5c\u4e3a\u4e00\u4e2a\u4e2d\u8f6c\u5730\u5740\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u8bb0\u4f4f\u4e0d\u8981\u76f4\u63a5\u5c06 base32 \u5730\u5740\u8f6c\u6362\u4e3a hex40 \u683c\u5f0f\u4f5c\u4e3a\u6620\u5c04\u5730\u5740\u3002 \u8fd9\u6837\u505a\u4f1a\u5bfc\u81f4\u60a8\u7684\u8d44\u4ea7\u4e22\u5931\u3002")))),(0,n.kt)("h2",{id:"\u76f8\u5173\u4e3b\u9898"},"\u76f8\u5173\u4e3b\u9898"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cross space dApp tutorial: ",(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/general/tutorials/transferring-funds/transfer-funds-across-spaces"},"Transferring Funds Across Spaces"))))}u.isMDXComponent=!0}}]);