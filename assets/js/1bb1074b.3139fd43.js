"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8890],{65980:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=s(85893),i=s(11151);const t={title:"cfx_estimateGasAndCollateral Behaviour",sidebar_position:8,description:"Behaviour of cfx_estimateGasAndCollateral",displayed_sidebar:"coreSidebar",keywords:["cfx_estimateGasAndCollateral","errors"],toc_max_heading_level:4,tags:["cfx_estimateGasAndCollateral","errors"]},o=void 0,a={id:"core/build/json-rpc/rpc-behaviour/cfx_estimateGasAndCollateral-behaviour",title:"cfx_estimateGasAndCollateral Behaviour",description:"Behaviour of cfx_estimateGasAndCollateral",source:"@site/docs/core/build/json-rpc/rpc-behaviour/cfx_estimateGasAndCollateral-behaviour.md",sourceDirName:"core/build/json-rpc/rpc-behaviour",slug:"/core/build/json-rpc/rpc-behaviour/cfx_estimateGasAndCollateral-behaviour",permalink:"/docs/core/build/json-rpc/rpc-behaviour/cfx_estimateGasAndCollateral-behaviour",draft:!1,unlisted:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/build/json-rpc/rpc-behaviour/cfx_estimateGasAndCollateral-behaviour.md",tags:[{label:"cfx_estimateGasAndCollateral",permalink:"/docs/tags/cfx-estimate-gas-and-collateral"},{label:"errors",permalink:"/docs/tags/errors"}],version:"current",sidebarPosition:8,frontMatter:{title:"cfx_estimateGasAndCollateral Behaviour",sidebar_position:8,description:"Behaviour of cfx_estimateGasAndCollateral",displayed_sidebar:"coreSidebar",keywords:["cfx_estimateGasAndCollateral","errors"],toc_max_heading_level:4,tags:["cfx_estimateGasAndCollateral","errors"]},sidebar:"coreSidebar",previous:{title:"cfx_sendRawTransaction Errors",permalink:"/docs/core/build/json-rpc/rpc-behaviour/cfx_sendTransaction-errors"},next:{title:"SDKs and Tools",permalink:"/docs/category/sdks-and-tools"}},c={},l=[{value:"Behavior in the Absence or Defaulting of Parameters",id:"behavior-in-the-absence-or-defaulting-of-parameters",level:2},{value:"Handling Redundant Parameters",id:"handling-redundant-parameters",level:3},{value:"Gas is Specified",id:"gas-is-specified",level:4},{value:"Storage Limit is Specified",id:"storage-limit-is-specified",level:4},{value:"Other Considerations",id:"other-considerations",level:3},{value:"Errors",id:"errors",level:2},{value:"Estimation isn&#39;t accurate: transaction is reverted",id:"estimation-isnt-accurate-transaction-is-reverted",level:3},{value:"Can not estimate: transaction execution failed, all gas will be charged",id:"can-not-estimate-transaction-execution-failed-all-gas-will-be-charged",level:3},{value:"VmError(OutOfGas)",id:"vmerroroutofgas",level:4},{value:"NotEnoughCash",id:"notenoughcash",level:4},{value:"ConflictAddress(0x...)",id:"conflictaddress0x",level:4},{value:"VmError(BadInstruction 214)",id:"vmerrorbadinstruction-214",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"cfx_estimateGasAndCollateral"})," interface is a critical component of the Conflux blockchain, as it allows users to estimate the gas and storage collateral required for their transactions. This document aims to clearly outline the functioning of the ",(0,r.jsx)(n.code,{children:"cfx_estimateGasAndCollateral"})," interface, with a particular emphasis on its response to various parameter configurations."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The behaviors described below are implemented by ",(0,r.jsx)(n.a,{href:"https://github.com/Conflux-Chain/conflux-rust",children:"conflux-rust"}),", the official Rust implementation of the Conflux protocol."]})}),"\n",(0,r.jsx)(n.h2,{id:"behavior-in-the-absence-or-defaulting-of-parameters",children:"Behavior in the Absence or Defaulting of Parameters"}),"\n",(0,r.jsx)(n.p,{children:"The response of the interface is contingent on whether specific fields in the input are present or absent:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["If ",(0,r.jsx)(n.code,{children:"from"})," is Absent"]}),": The interface will not perform any checks related to the ",(0,r.jsx)(n.code,{children:"balance"}),". (However, execution might fail because ",(0,r.jsx)(n.code,{children:"from"})," is absent)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["If ",(0,r.jsx)(n.code,{children:"gas_price"})," is Absent"]}),": It skips the checks for gas-related transaction fees and the ",(0,r.jsx)(n.a,{href:"/docs/core/core-space-basics/internal-contracts/sponsor-whitelist-control",children:"Sponsor Gas Upper Bound"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["If ",(0,r.jsx)(n.code,{children:"nonce"})," is Absent"]}),": The interface automatically fills in the current correct nonce. Conversely, if ",(0,r.jsx)(n.code,{children:"nonce"})," is provided, the transaction will proceed with the specified nonce and avoid failing due to nonce-related errors."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["If ",(0,r.jsx)(n.code,{children:"value"})," is Absent"]}),": The default is set to a value of 0."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["If ",(0,r.jsx)(n.code,{children:"data"})," is Absent"]}),": It defaults to empty."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["If ",(0,r.jsx)(n.code,{children:"to"})," is Absent"]}),": The interface defaults to contract creation."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Typically, the ",(0,r.jsx)(n.code,{children:"cfx_estimateGasAndCollateral"})," is invoked automatically by the Conflux SDK (e.g., ",(0,r.jsx)(n.code,{children:"js-conflux-sdk"}),", ",(0,r.jsx)(n.code,{children:"java-conflux-sdk"}),", etc.) when sending a transaction. If you are not directly invoking ",(0,r.jsx)(n.code,{children:"cfx_estimateGasAndCollateral"}),", the presence or absence of the above parameters will depend on the behavior of the SDK you are using."]})}),"\n",(0,r.jsx)(n.h3,{id:"handling-redundant-parameters",children:"Handling Redundant Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["While the primary function of the ",(0,r.jsx)(n.code,{children:"cfx_estimate"})," is to estimate gas and storage collateral, it also accepts user inputs for these parameters. This section delineates the logic applied in such scenarios:"]}),"\n",(0,r.jsx)(n.h4,{id:"gas-is-specified",children:"Gas is Specified"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The transaction executes using the specified ",(0,r.jsx)(n.code,{children:"gas"}),". This the only scenario for an ",(0,r.jsx)(n.code,{children:"OutOfGas"})," error other than the gas consumption exceeds the 15 million limit."]}),"\n",(0,r.jsxs)(n.li,{children:["If both ",(0,r.jsx)(n.code,{children:"from"})," and ",(0,r.jsx)(n.code,{children:"gas_price"})," are specified, transaction fees are deducted during the estimation. Otherwise, fees are rechecked post-execution."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"storage-limit-is-specified",children:"Storage Limit is Specified"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The specified ",(0,r.jsx)(n.code,{children:"storage_limit"}),' is disregarded during transaction execution estimation. After the estimation, it"s assessed whether the provided storage limit suffices.']}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"other-considerations",children:"Other Considerations"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Sponsored Storage"}),": In cases where storage is sponsored, the ",(0,r.jsx)(n.code,{children:"storage_limit"}),' check is not performed, adhering to Conflux"s intrinsic logic.']}),"\n",(0,r.jsx)(n.h2,{id:"errors",children:"Errors"}),"\n",(0,r.jsx)(n.h3,{id:"estimation-isnt-accurate-transaction-is-reverted",children:"Estimation isn't accurate: transaction is reverted"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "code": -32015,\n    "message": "Estimation isn\'t accurate: transaction is reverted. Innermost error is at CFX:TYPE.CONTRACT:ACDUZTJBPM9PPP9F0K5VT3PJU0EJUDNHP2ZM7WS35N: Vm reverted. .",\n    "data": "CFX:TYPE.CONTRACT:ACDUZTJBPM9PPP9F0K5VT3PJU0EJUDNHP2ZM7WS35N: Vm reverted. \\nCFX:TYPE.CONTRACT:ACD5E6SPRGMDVG15FDXF2B8AH7DAN7GMZAGXA10EPZ: Vm reverted. "\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Encountering this error means that the interface failed to return the estimation result because, because transaction was reverted ( contract method code failed to execute). There are various possible causes for this error, such as: insufficient balance of related ERC-20 tokens or NFTs; parameter errors for the contract method; lack of permission or authorization, and so on."}),"\n",(0,r.jsxs)(n.p,{children:["If an error message is thrown during contract execution, the specific reason for the contract execution failure can be seen in the RPC error message. For example, the following error occurred when transferring NFT (1155), indicating insufficient balance: ",(0,r.jsx)(n.code,{children:"Estimation isn't accurate: transaction is reverted: ERC1155: insufficient balance for transfer. Innermost error is at xxxx: Vm reverted. ERC1155: insufficient balance for transfer"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Solution"}),": You should review the logic of the contract based on the error message. In specific scenarios (like when a ",(0,r.jsx)(n.strong,{children:"solidity custom error"})," is thrown), the error might not be shown in the error string. In such cases, using ",(0,r.jsx)(n.code,{children:"cfx_call"})," with identical parameters will return the into the corresponding hex error string. You are advised to refer to ",(0,r.jsx)(n.a,{href:"https://soliditylang.org/blog/2021/04/21/custom-errors/",children:"Custom Errors in Solidity"})," or language-specific SDKs to understand how to resolve the hex error string."]}),"\n",(0,r.jsx)(n.h3,{id:"can-not-estimate-transaction-execution-failed-all-gas-will-be-charged",children:"Can not estimate: transaction execution failed, all gas will be charged"}),"\n",(0,r.jsx)(n.h4,{id:"vmerroroutofgas",children:"VmError(OutOfGas)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Can not estimate: transaction execution failed, all gas will be charged (execution error: VmError(OutOfGas))"\n    },\n    "id": "15922956697249514502"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Solution"}),": This error means ",(0,r.jsx)(n.code,{children:"gas"})," is not enough for transaction execution and it typically means the gas exceeds the maximum amount for a single transaction, which is half of the block gas limit (15,000,000). There's a need to optimize the logic of your contract execution to reduce the gas consumption. Notably, if ",(0,r.jsx)(n.code,{children:"gas"})," is specified in the estimation request, an ",(0,r.jsx)(n.code,{children:"OutOfGas"})," error can still occur even though the required gas is less than 15 million."]}),"\n",(0,r.jsx)(n.h4,{id:"notenoughcash",children:"NotEnoughCash"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "id": 8,\n    "error": {\n        "code": -32015,\n        "message": "Can not estimate: transaction execution failed, all gas will be charged (execution error: NotEnoughCash { required: 1000, got: 0, actual_gas_cost: 0, max_storage_limit_cost: 0 })",\n        "data": "NotEnoughCash { required: 1000, got: 0, actual_gas_cost: 0, max_storage_limit_cost: 0 }"\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This error means the ",(0,r.jsx)(n.code,{children:"from"})," account does not have enough balance to pay for transaction cost, including ",(0,r.jsx)(n.code,{children:"value"})," + ",(0,r.jsx)(n.code,{children:"gas cost"})," + ",(0,r.jsx)(n.code,{children:"storage collateral"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Solution"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the ",(0,r.jsx)(n.code,{children:"to"})," contract is not ",(0,r.jsx)(n.a,{href:"/docs/core/core-space-basics/internal-contracts/sponsor-whitelist-control",children:"sponsored"}),", ensure that ",(0,r.jsx)(n.code,{children:"from"})," account is having enough CFX as balance."]}),"\n",(0,r.jsxs)(n.li,{children:["If the ",(0,r.jsx)(n.code,{children:"to"})," contract is sponsored, it is recommended to check why the sponsorship does not take effect by calling ",(0,r.jsx)(n.a,{href:"/docs/core/build/json-rpc/cfx-namespace#cfx_checkbalanceagainsttransaction",children:"cfx_checkBalanceAgainstTransaction"})," RPC. And the actual reason could be:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"from"})," account is not in ",(0,r.jsx)(n.a,{href:"/docs/core/core-space-basics/internal-contracts/sponsor-whitelist-control#whitelist-maintenance",children:"sponsor whitelist"}),". Adding"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SponsoredBalanceForGas"})," or ",(0,r.jsx)(n.code,{children:"SponsoredBalanceForCollateral"})," is not enough to pay for transaction cost, which value can be get from ",(0,r.jsx)(n.a,{href:"/docs/core/build/json-rpc/cfx-namespace#cfx_getsponsorinfo",children:"cfx_getSponsorInfo"})," RPC. In this case, appending sponsored balance will solve the issue."]}),"\n",(0,r.jsxs)(n.li,{children:["Transaction gas cost(",(0,r.jsx)(n.code,{children:"gas limit"})," * ",(0,r.jsx)(n.code,{children:"gas price"}),") exceeds the sponsorship ",(0,r.jsx)(n.code,{children:"upperBound"})," setting, which value can be get from ",(0,r.jsx)(n.a,{href:"/docs/core/build/json-rpc/cfx-namespace#cfx_getsponsorinfo",children:"cfx_getSponsorInfo"})," RPC. In this case, you need to call ",(0,r.jsx)(n.a,{href:"../../../core-space-basics/internal-contracts/sponsor-whitelist-control#setsponsorforgas-and-setsponsorforcollateral-behavior",children:"setSponsorForGas"})," to increase gas sponsorship uppper bound."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"conflictaddress0x",children:"ConflictAddress(0x...)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "code": -32015,\n  "message": "Can not estimate: transaction execution failed, all gas will be charged (execution error: VmError(ConflictAddress(0x87e69792aab04a1e54faa54b41a688335199c1bb)))\n",\n  "data": "VmError(ConflictAddress(0x87e69792aab04a1e54faa54b41a688335199c1bb))"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:'This means the operation being estimated will deploy the contract to an address with contract existed. The deployed contract address is determined by the deployer"s address, the deployer"s nonce and the contract"s bytecode. And this issue typically incurred because a nonce already used is specified.'}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Solution"}),": Check if the ",(0,r.jsx)(n.code,{children:"nonce"})," specified in the estimation parameters is reused and use the correct ",(0,r.jsx)(n.code,{children:"nonce"})," field."]}),"\n",(0,r.jsx)(n.h4,{id:"vmerrorbadinstruction-214",children:"VmError(BadInstruction 214)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "code": -32015,\n  "message": "Can not estimate: transaction execution failed, all gas will be charged (execution error: VmError(BadInstruction { instruction: 214 }))\n",\n  "data": "VmError(BadInstruction { instruction: 214 })"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This means the ",(0,r.jsx)(n.code,{children:"data"})," field contains bad instruction. This error typically occurs because the ",(0,r.jsx)(n.code,{children:"to"})," field is missing so the ",(0,r.jsx)(n.code,{children:"data"})," cannot be resolved as expected."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Solution"}),": Check if ",(0,r.jsx)(n.code,{children:"to"})," field is missing from the estimation request and fill the right value."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var r=s(67294);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);