"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5,title:"PoSRegister"},a=void 0,s={unversionedId:"core/learn/core-space-basics/internal-contracts/poSRegister",id:"core/learn/core-space-basics/internal-contracts/poSRegister",title:"PoSRegister",description:"\u8fd9\u4e2a\u5408\u7ea6\u7528\u4e8e\u8ba9\u7528\u6237\u53c2\u4e0ePoS\u94fe\u3002 \u9700\u8981\u4e0e\u8fd9\u4e2a\u5408\u7ea6\u4ea4\u4e92\u624d\u80fd\u6210\u4e3aPoS\u8282\u70b9\u3002 \u8fd9\u4e2a\u5408\u7ea6\u63d0\u4f9b\u4e86\u51e0\u4e2a\u65b9\u6cd5\u6765\u589e\u52a0\u6216\u51cf\u5c11PoS\u6295\u7968\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/learn/core-space-basics/internal-contracts/poSRegister.md",sourceDirName:"core/learn/core-space-basics/internal-contracts",slug:"/core/learn/core-space-basics/internal-contracts/poSRegister",permalink:"/zh-CN/docs/core/learn/core-space-basics/internal-contracts/poSRegister",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"PoSRegister"},sidebar:"tutorialSidebar",previous:{title:"ConfluxContext",permalink:"/zh-CN/docs/core/learn/core-space-basics/internal-contracts/conflux-context"},next:{title:"CrossSpaceCall",permalink:"/zh-CN/docs/core/learn/core-space-basics/internal-contracts/crossSpaceCall"}},c={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8fd9\u4e2a\u5408\u7ea6\u7528\u4e8e\u8ba9\u7528\u6237\u53c2\u4e0ePoS\u94fe\u3002 \u9700\u8981\u4e0e\u8fd9\u4e2a\u5408\u7ea6\u4ea4\u4e92\u624d\u80fd\u6210\u4e3aPoS\u8282\u70b9\u3002 \u8fd9\u4e2a\u5408\u7ea6\u63d0\u4f9b\u4e86\u51e0\u4e2a\u65b9\u6cd5\u6765\u589e\u52a0\u6216\u51cf\u5c11PoS\u6295\u7968\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"register")," - \u6ce8\u518c\u5230PoS\u94fe\uff0c\u6210\u4e3a\u4e00\u4e2aPoS\u8282\u70b9"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"increaseStake")," - \u589e\u52a0PoS\u6743\u76ca"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"retire")," - \u51cf\u5c11PoS\u6743\u76ca")),(0,o.kt)("p",null,"\u8fd8\u6709\u51e0\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u67e5\u8be2\u4e00\u4e2a\u8d26\u6237\u7684PoS\u4fe1\u606f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getVotes")," - \u67e5\u8be2\u4e00\u4e2a\u8d26\u6237\u7684\u6295\u7968\u4fe1\u606f\uff0c\u5c06\u8fd4\u56de",(0,o.kt)("inlineCode",{parentName:"li"},"totalStakedVotes"),"\u548c",(0,o.kt)("inlineCode",{parentName:"li"},"totalUnlockedVotes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"identifierToAddress")," - \u67e5\u8be2\u4e00\u4e2aPoS\u8d26\u6237\u7ed1\u5b9a\u7684PoW\u5730\u5740"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"addressToIdentifier")," - \u67e5\u8be2\u4e00\u4e2aPoW\u8d26\u6237\u7ed1\u5b9a\u7684PoS\u5730\u5740")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PoSRegister"),"\u7684hex40\u5408\u7ea6\u5730\u5740\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"0x0888000000000000000000000000000000000005")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// SPDX-License-Identifier: MIT\npragma solidity >=0.5.0;\n\ninterface PoSRegister {\n    /**\n     * @dev Register PoS account\n     * @param indentifier - PoS account address to register\n     * @param votePower - votes count\n     * @param blsPubKey - BLS public key\n     * @param vrfPubKey - VRF public key\n     * @param blsPubKeyProof - BLS public key\'s proof of legality, used to against some attack, generated by conflux-rust fullnode\n     */\n    function register(\n        bytes32 indentifier,\n        uint64 votePower,\n        bytes calldata blsPubKey,\n        bytes calldata vrfPubKey,\n        bytes[2] calldata blsPubKeyProof\n    ) external;\n\n    /**\n     * @dev Increase specified number votes for msg.sender\n     * @param votePower - count of votes to increase\n     */\n    function increaseStake(uint64 votePower) external;\n\n    /**\n     * @dev Retire specified number votes for msg.sender\n     * @param votePower - count of votes to retire\n     */\n    function retire(uint64 votePower) external;\n\n    /**\n     * @dev Query PoS account\'s lock info. Include "totalStakedVotes" and "totalUnlockedVotes"\n     * @param identifier - PoS address\n     */\n    function getVotes(bytes32 identifier) external view returns (uint256, uint256);\n\n    /**\n     * @dev Query the PoW address binding with specified PoS address\n     * @param identifier - PoS address\n     */\n    function identifierToAddress(bytes32 identifier) external view returns (address);\n\n    /**\n     * @dev Query the PoS address binding with specified PoW address\n     * @param addr - PoW address\n     */\n    function addressToIdentifier(address addr) external view returns (bytes32);\n\n    /**\n     * @dev Emitted when register method executed successfully\n     */\n    event Register(bytes32 indexed identifier, bytes blsPubKey, bytes vrfPubKey);\n\n    /**\n     * @dev Emitted when increaseStake method executed successfully\n     */\n    event IncreaseStake(bytes32 indexed identifier, uint64 votePower);\n\n    /**\n     * @dev Emitted when retire method executed successfully\n     */\n    event Retire(bytes32 indexed identifier, uint64 votePower);\n}\n')))}p.isMDXComponent=!0}}]);