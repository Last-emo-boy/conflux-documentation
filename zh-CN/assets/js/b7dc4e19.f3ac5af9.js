"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9934],{4137:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>f});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},i=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(f,c(c({ref:a},i),{},{components:t})):n.createElement(f,c({ref:a},i))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5603:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),r=(t(7294),t(4137));const o={sidebar_position:4,title:"CrossSpaceCall Contract",description:"Detail explain of CrossSpaceCall contract"},c=void 0,s={unversionedId:"espace/build/cross-space-bridge",id:"espace/build/cross-space-bridge",title:"CrossSpaceCall Contract",description:"Detail explain of CrossSpaceCall contract",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/build/cross-space-bridge.md",sourceDirName:"espace/build",slug:"/espace/build/cross-space-bridge",permalink:"/zh-CN/docs/espace/build/cross-space-bridge",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"CrossSpaceCall Contract",description:"Detail explain of CrossSpaceCall contract"},sidebar:"tutorialSidebar",previous:{title:"JSON-RPC Compatibility",permalink:"/zh-CN/docs/espace/build/jsonrpc-compatibility"},next:{title:"eSpace Mapped Addresses(Cross Space)",permalink:"/zh-CN/docs/espace/build/accounts"}},l={},p=[{value:"CrossSpaceCall \u63a5\u53e3",id:"crossspacecall-\u63a5\u53e3",level:2},{value:"Transfer CFX between eSpace and Core Space",id:"transfer-cfx-between-espace-and-core-space",level:2},{value:"From Core Space to eSpace",id:"from-core-space-to-espace",level:3},{value:"JS Example",id:"js-example",level:4},{value:"From eSpace to Core Space",id:"from-espace-to-core-space",level:3},{value:"\u8de8\u7a7a\u95f4\u64cd\u4f5c\u4e2d\u7684\u6620\u5c04\u5730\u5740",id:"\u8de8\u7a7a\u95f4\u64cd\u4f5c\u4e2d\u7684\u6620\u5c04\u5730\u5740",level:4},{value:"Transfer Steps",id:"transfer-steps",level:4},{value:"JS Example",id:"js-example-1",level:4},{value:"Call eSpace Contract from Core Space",id:"call-espace-contract-from-core-space",level:2},{value:"Resources",id:"resources",level:2}],i={toc:p},d="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Conflux eSpace and Core space are two separate space, you can not send CFX from base32 address to hex address directly. You can only use ",(0,r.kt)("a",{parentName:"p",href:"https://confluxhub.io/espace-bridge/cross-space"},"Confluxhub Space Bridge")," to cross CFX between eSpace and Core Space."),(0,r.kt)("p",null,"Under the hood there is a internal contract named ",(0,r.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall")," in Core Space, which is used to transfer CFX between eSpace and Core Space. \u901a\u8fc7CrossSpaceCall\uff0c\u5728Core Space\u5185\u76f4\u63a5\u4e0eeSpace\u5408\u7ea6\u8fdb\u884c\u4e92\u52a8\u6210\u4e3a\u53ef\u80fd\u3002 This contract is introduced by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"CIP-90"),"."),(0,r.kt)("h2",{id:"crossspacecall-\u63a5\u53e3"},"CrossSpaceCall \u63a5\u53e3"),(0,r.kt)("p",null,"This contract is available on Core Space under the address:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"base32 address: ",(0,r.kt)("a",{parentName:"li",href:"https://confluxscan.io/address/cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa2sn102vjv"},(0,r.kt)("inlineCode",{parentName:"a"},"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa2sn102vjv"))),(0,r.kt)("li",{parentName:"ul"},"hex address(use in solidity): ",(0,r.kt)("inlineCode",{parentName:"li"},"0x0888000000000000000000000000000000000006"))),(0,r.kt)("p",null,"Below is the interface of this contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"interface CrossSpaceCall {\n    /**\n     * @dev Deploy a contract in eSpace\n     * @param init bytes -  The contract init bytecode\n     * @return bytes20 - The hex address of the deployed contract\n     */\n    function createEVM(bytes calldata init) external payable returns (bytes20);\n    /* methods for cross-space CFX transfers */\n\n    /**\n     * @dev Transfer CFX from Core space to eSpace specify address. Transfer amount is specified by transaction value.\n     * @param to bytes20 - The hex address of the receiver address in eSpace\n     * @return output bytes\n     */\n    function transferEVM(bytes20 to) external payable returns (bytes memory output);\n    \n    /**\n     * @dev Widthdraw CFX from eSpace mapped account's balance\n     * @param value uint256 - The amount of CFX to be withdrawn\n     */ \n    function withdrawFromMapped(uint256 value) external;\n\n    /**\n     * @dev Query eSpace mapped account's CFX balance\n     * @param addr address - The core address to query\n     * @return uint256 - Balance\n     */\n    function mappedBalance(address addr) external view returns (uint256);\n\n\n    /**\n     * @dev Query eSpace mapped account's nonce\n     * @param addr address - The core address to query\n     * @return uint256 - Balance\n     * */ \n    function mappedNonce(address addr) external view returns (uint256);\n    \n    /* methods for other cross-space operations */\n\n    /**\n     * @dev Call eSpace contract method from Core space\n     * @param to bytes20 - The hex address of the contract in eSpace\n     * @param data bytes - The contract method call data\n     * @return output bytes - Method call result\n     */ \n    function callEVM(bytes20 to, bytes calldata data) external payable returns (bytes memory output);\n\n    /**\n     * @dev Static call eSpace contract method from Core space\n     * @param to bytes20 - The hex address of the contract in eSpace\n     * @param data bytes - The contract method call data\n     * @return output bytes - Method call result\n     */ \n    function staticCallEVM(bytes20 to, bytes calldata data) external view returns (bytes memory output);\n}\n")),(0,r.kt)("h2",{id:"transfer-cfx-between-espace-and-core-space"},"Transfer CFX between eSpace and Core Space"),(0,r.kt)("p",null,"Cross CFX between eSpace and Core Space can be achieved through call ",(0,r.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall")," internal contract's related methods."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall")," (like other internal contracts) can only be accessed in the Conflux Core space."),(0,r.kt)("h3",{id:"from-core-space-to-espace"},"From Core Space to eSpace"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Core to eSpace"),": To transfer CFX from Conflux Core to Conflux eSpace, the ",(0,r.kt)("inlineCode",{parentName:"p"},"transferEVM(bytes20 to)")," method of this contract needs to be called. The destination address of this transfer is specified by the method parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"to"),". \u8de8\u7a7a\u95f4\u8f6c\u79fb\u5c06\u5728\u4e00\u4e2a\u5355\u4e00\u7684\u539f\u5b50\u6b65\u9aa4\u4e2d\u6267\u884c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function transferEVM(bytes20 to) external payable returns (bytes memory output);\n")),(0,r.kt)("h4",{id:"js-example"},"JS Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Conflux, Drip } = require('js-conflux-sdk');\n\nconst conflux = new Conflux({\n  url: 'https://main.confluxrpc.com',\n  chainId: 1029,\n});\n\nconst account = conflux.wallet.addPrivateKey(process.env.PRIVATE_KEY);\n\nconst crossSpaceCall = conflux.InternalContract('CrossSpaceCall');\n\nasync function main() {\n    const eSpaceAddress = '0x3D69D968e3673e188B2D2d42b6a385686186258f';\n\n    const receipt = await crossSpaceCall.transferEVM(eSpaceAddress)\n        .sendTransaction({\n            from: account,\n            value: Drip.fromCFX(1),  // transfer 1 CFX, the amount is specify by value\n        }).executed();\n\n    console.log(`Transfer to ${eSpaceAddress} ${receipt.outcomeStatus === 0 ? 'succeed' : 'failed'}`);\n}\n\nmain()\n")),(0,r.kt)("h3",{id:"from-espace-to-core-space"},"From eSpace to Core Space"),(0,r.kt)("h4",{id:"\u8de8\u7a7a\u95f4\u64cd\u4f5c\u4e2d\u7684\u6620\u5c04\u5730\u5740"},"\u8de8\u7a7a\u95f4\u64cd\u4f5c\u4e2d\u7684\u6620\u5c04\u5730\u5740"),(0,r.kt)("p",null,"To cross CFX from eSpace to Core Space, a mapped address is required. Each account in Core Space has a ",(0,r.kt)("strong",{parentName:"p"},"mapped account")," (hex40) in eSpace. Only the Core space account can withdraw CFX from it's mapped account."),(0,r.kt)("p",null,"For details about the mapped address, see ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/espace/build/accounts#mapped-addresses-in-cross-space-operations"},"Mapped Addresses"),"."),(0,r.kt)("h4",{id:"transfer-steps"},"Transfer Steps"),(0,r.kt)("p",null,"\u8981\u5c06 CFX \u4ece Conflux eSpace \u8f6c\u79fb\u5230 Conflux Core\uff0c\u9700\u8981\u4e24\u4e2a\u6b65\u9aa4\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Transfer CFX to the eSpace mapped account that belongs to the Core destination account. \u8fd9\u4e2a\u64cd\u4f5c\u9700\u8981\u4e00\u4e2a eSpace \u4ea4\u6613\u3002"),(0,r.kt)("li",{parentName:"ol"},"Call the ",(0,r.kt)("inlineCode",{parentName:"li"},"withdrawFromMapped(uint256 value)")," method of the ",(0,r.kt)("inlineCode",{parentName:"li"},"CrossSpaceCall")," internal contract. \u8fd9\u4e2a\u8c03\u7528\u5c06\u628a CFX \u4ece\u6620\u5c04\u8d26\u6237\u8f6c\u56de\u5230\u76f8\u5e94\u7684\u76ee\u6807\u5730\u5740\u3002 Another method ",(0,r.kt)("inlineCode",{parentName:"li"},"mappedBalance")," can be used to query the balance of one core address's mapped address.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function withdrawFromMapped(uint256 value) external;\n\n// parameter addr is a core account address\nfunction mappedBalance(address addr) external view returns (uint256);\n")),(0,r.kt)("h4",{id:"js-example-1"},"JS Example"),(0,r.kt)("p",null,"Step1: use js-conflux-sdk's address utility method to get the mapped address of the Core Space destination account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { address } = require('js-conflux-sdk');\n\nconst base32Address = 'cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91';\n\nconst mappedAddress = address.cfxMappedEVMSpaceAddress(base32Address);\n\n// 0x12Bf6283CcF8Ad6ffA63f7Da63EDc217228d839A\n")),(0,r.kt)("p",null,"Step2: transfer CFX to the mapped address in eSpace through wallet or ethers.js"),(0,r.kt)("p",null,"Step3: invoke the ",(0,r.kt)("inlineCode",{parentName:"p"},"withdrawFromMapped")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall")," internal contract in Core Space to withdraw CFX from the mapped address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Conflux, Drip, address } = require('js-conflux-sdk');\n\nconst conflux = new Conflux({\n  url: 'https://main.confluxrpc.com',\n  chainId: 1029,\n});\n\nconst account = conflux.wallet.addPrivateKey(process.env.PRIVATE_KEY);\n\nconst crossSpaceCall = conflux.InternalContract('CrossSpaceCall');\n\nasync function main() {\n    const receipt = await crossSpaceCall.withdrawFromMapped(Drip.fromCFX(1))\n        .sendTransaction({\n            from: account,\n        }).executed();\n\n    console.log(`Withdraw from eSpace ${receipt.outcomeStatus === 0 ? 'succeed' : 'failed'}`);\n}\n\nmain()\n")),(0,r.kt)("h2",{id:"call-espace-contract-from-core-space"},"Call eSpace Contract from Core Space"),(0,r.kt)("p",null,"Through CrossSpaceCall contract, it is possible the read or write eSpace contract's state from Core Space. We will give a simple example to show how to call eSpace contract from Core Space."),(0,r.kt)("p",null,"Below is a contract deployed in eSpace at address ",(0,r.kt)("inlineCode",{parentName:"p"},"0x8c2a2b6b4c3b6e7e7d3b5e8b4b6b6b6b6b6b6b6b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"contract SimpleStore {\n    uint256 public value;\n\n    function setValue(uint256 _value) public {\n        value = _value;\n    }\n}\n")),(0,r.kt)("p",null,"And below is a contract deployed in Core Space:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'\ncontract CrossCallExample {\n\n    CrossSpace public crossSpaceCall = CrossSpace(0x0888000000000000000000000000000000000006);\n\n    function readValue() public returns (uint256) {\n        bytes20 to = bytes20(0x8c2a2b6b4c3b6e7e7d3b5e8b4b6b6b6b6b6b6b6b);\n        bytes memory num = crossSpaceCall.staticCallEVM(to, abi.encodeWithSignature("value()"));\n        return abi.decode(num, (uint256))\n    }\n\n    function setValue(uint256 _value) public {\n        bytes20 to = bytes20(0x8c2a2b6b4c3b6e7e7d3b5e8b4b6b6b6b6b6b6b6b);\n        bytes memory data = abi.encodeWithSignature("setValue(uint256)", 100);\n        crossSpaceCall.callEVM(to, data);\n    }\n}\n\n')),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"CIP-90")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/espace/build/accounts#mapped-addresses-in-cross-space-operations"},"Mapped Addresses")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/core/learn/core-space-basics/internal-contracts/crossSpaceCall"},"CrossSpaceCall")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/espace/build/evm-compatibility#phantom-transactions"},"eSpace Phantom Transactions"))))}u.isMDXComponent=!0}}]);