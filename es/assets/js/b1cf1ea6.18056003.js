"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9066],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(a),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||c;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<c;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8104:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var n=a(7462),r=(a(7294),a(4137));const c={sidebar_position:6,title:"CrossSpaceCall"},o=void 0,s={unversionedId:"core/learn/core-space-basics/internal-contracts/crossSpaceCall",id:"core/learn/core-space-basics/internal-contracts/crossSpaceCall",title:"CrossSpaceCall",description:"CrossSpaceCall Interface",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/core/learn/core-space-basics/internal-contracts/crossSpaceCall.md",sourceDirName:"core/learn/core-space-basics/internal-contracts",slug:"/core/learn/core-space-basics/internal-contracts/crossSpaceCall",permalink:"/es/docs/core/learn/core-space-basics/internal-contracts/crossSpaceCall",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"CrossSpaceCall"},sidebar:"references",previous:{title:"PoSRegister",permalink:"/es/docs/core/learn/core-space-basics/internal-contracts/poSRegister"},next:{title:"ParamsControl",permalink:"/es/docs/core/learn/core-space-basics/internal-contracts/params-control"}},l={},i=[{value:"CrossSpaceCall Interface",id:"crossspacecall-interface",level:2},{value:"Further Explain",id:"further-explain",level:2},{value:"Space Bridge Dapp",id:"space-bridge-dapp",level:2}],p={toc:i},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"crossspacecall-interface"},"CrossSpaceCall Interface"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"CIP-90")," introduces a new internal contract: ",(0,r.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall"),". CrossSpaceCall enables ",(0,r.kt)("strong",{parentName:"p"},"CFX and data")," to be transferred between the two spaces. This contract is located at ",(0,r.kt)("strong",{parentName:"p"},"core")," address: ",(0,r.kt)("inlineCode",{parentName:"p"},"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa2sn102vjv")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// SPDX-License-Identifier: MIT\npragma solidity >=0.5.0;\n\ninterface CrossSpaceCall {\n    event Call(bytes20 indexed sender, bytes20 indexed receiver, uint256 value, uint256 nonce, bytes data);\n\n    event Create(bytes20 indexed sender, bytes20 indexed contract_address, uint256 value, uint256 nonce, bytes init);\n\n    event Withdraw(bytes20 indexed sender, address indexed receiver, uint256 value, uint256 nonce);\n\n    event Outcome(bool success);\n\n    /**\n     * @dev Deploy a contract in eSpace\n     * @param init bytes -  The contract init bytecode\n     * @return bytes20 - The hex address of the deployed contract\n     */\n    function createEVM(bytes calldata init) external payable returns (bytes20);\n\n    /**\n     * @dev Transfer CFX from Core space to eSpace specify address. Transfer amount is specified by transaction value.\n     * @param to bytes20 - The hex address of the receiver address in eSpace\n     * @return output bytes\n     */\n    function transferEVM(bytes20 to) external payable returns (bytes memory output);\n\n    /**\n     * @dev Call eSpace contract method from Core space\n     * @param to bytes20 - The hex address of the contract in eSpace\n     * @param data bytes - The contract method call data\n     * @return output bytes - Method call result\n     */ \n    function callEVM(bytes20 to, bytes calldata data) external payable returns (bytes memory output);\n\n    /**\n     * @dev Static call eSpace contract method from Core space\n     * @param to bytes20 - The hex address of the contract in eSpace\n     * @param data bytes - The contract method call data\n     * @return output bytes - Method call result\n     */ \n    function staticCallEVM(bytes20 to, bytes calldata data) external view returns (bytes memory output);\n\n    /**\n     * @dev Widthdraw CFX from eSpace mapped account's balance\n     * @param value uint256 - The amount of CFX to be withdrawn\n     */ \n    function withdrawFromMapped(uint256 value) external;\n\n    /**\n     * @dev Query eSpace mapped account's CFX balance\n     * @param addr address - The core address to query\n     * @return uint256 - Balance\n     */\n    function mappedBalance(address addr) external view returns (uint256);\n\n    /**\n     * @dev Query eSpace mapped account's nonce\n     * @param addr address - The core address to query\n     * @return uint256 - Balance\n     * */ \n    function mappedNonce(address addr) external view returns (uint256);\n}\n")),(0,r.kt)("p",null,"If you want to interact with this contract in Solidity, you can use address ",(0,r.kt)("inlineCode",{parentName:"p"},"0x0888000000000000000000000000000000000006"),"."),(0,r.kt)("p",null,"NOTE: The ",(0,r.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall")," contract is deployed in the Core Space. It can only be call from the Core Space."),(0,r.kt)("h2",{id:"further-explain"},"Further Explain"),(0,r.kt)("p",null,"For detail information about how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall")," contract cross CFX and data between Core Space and eSpace ",(0,r.kt)("a",{parentName:"p",href:"/docs/espace/build/cross-space-bridge"},"check here"),". You can also find  JS and Solidity examples in there."),(0,r.kt)("h2",{id:"space-bridge-dapp"},"Space Bridge Dapp"),(0,r.kt)("p",null,"Common users can use the ",(0,r.kt)("a",{parentName:"p",href:"https://confluxhub.io/espace-bridge/cross-space"},"Space Bridge Dapp")," to cross CFX directly through their wallets(Fluent and MetaMask) easily."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://confluxhub.io/espace-bridge/cross-space"},"Mainnet Space Bridge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://test.confluxhub.io/espace-bridge/cross-space"},"Testnet Space Bridge"))))}u.isMDXComponent=!0}}]);