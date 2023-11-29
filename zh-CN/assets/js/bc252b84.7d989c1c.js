"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1598],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(4137));const o={displayed_sidebar:"generalSidebar"},i="Introduction to Transaction Traces",l={unversionedId:"general/build/node-development/trace-introduction",id:"general/build/node-development/trace-introduction",title:"Introduction to Transaction Traces",description:"Traces are used to record the transaction execution details. It can be used to debug or retrieve more information (like getting contract addresses created within transaction execution).",source:"@site/docs/general/build/node-development/trace-introduction.md",sourceDirName:"general/build/node-development",slug:"/general/build/node-development/trace-introduction",permalink:"/zh-CN/docs/general/build/node-development/trace-introduction",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",frontMatter:{displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Test Framework",permalink:"/zh-CN/docs/general/build/node-development/test-framework"},next:{title:"Tools",permalink:"/zh-CN/docs/category/tools"}},s={},c=[{value:"Trace Types",id:"trace-types",level:2},{value:"Call",id:"call",level:3},{value:"CallResult",id:"callresult",level:3},{value:"Create",id:"create",level:3},{value:"CreateResult",id:"createresult",level:3},{value:"InternalTransferAction",id:"internaltransferaction",level:3},{value:"Discussion of Failure",id:"discussion-of-failure",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-transaction-traces"},"Introduction to Transaction Traces"),(0,r.kt)("p",null,"Traces are used to record the transaction execution details. It can be used to debug or retrieve more information (like getting contract addresses created within transaction execution)."),(0,r.kt)("h2",{id:"trace-types"},"Trace Types"),(0,r.kt)("h3",{id:"call"},"Call"),(0,r.kt)("p",null,"The trace is recorded for all ",(0,r.kt)("inlineCode",{parentName:"p"},"Call")," operations, including balance transferring or contract calling, executed either by the transaction itself or inside a contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Call {\n    /// The sending account.\n    pub from: Address,\n    /// The destination account.\n    pub to: Address,\n    /// The value transferred to the destination account.\n    pub value: U256,\n    /// The gas available for executing the call.\n    pub gas: U256,\n    /// The input data provided to the call.\n    pub input: Bytes,\n    /// The type of the call.\n    pub call_type: CallType,\n}\n\npub enum CallType {\n    /// Not a CALL.\n    None,\n    /// CALL.\n    Call,\n    /// CALLCODE.\n    CallCode,\n    /// DELEGATECALL.\n    DelegateCall,\n    /// STATICCALL\n    StaticCall,\n}\n")),(0,r.kt)("p",null,"If a transaction itself is calling a contract (",(0,r.kt)("inlineCode",{parentName:"p"},"to")," is a contract address), this trace will always be the first one in the trace list of this transaction."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"call_type")," can never be ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Call")," traces."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"gas"),' is the "provided" gas for the execution of the callee, so the gas overhead has been deducted. For example, it is ',(0,r.kt)("inlineCode",{parentName:"p"},"0")," for a simple balance transferring transaction of ",(0,r.kt)("inlineCode",{parentName:"p"},"21000")," gas, because the base gas cost (",(0,r.kt)("inlineCode",{parentName:"p"},"21000"),") has been deducted in advance. The gas cost for call-related opcodes (",(0,r.kt)("inlineCode",{parentName:"p"},"CALL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DELEGATECALL"),", e.t.c.) or the 1/64 gas reserve for calling are also deducted in advance during contract execution."),(0,r.kt)("h3",{id:"callresult"},"CallResult"),(0,r.kt)("p",null,"The trace is recorded after a ",(0,r.kt)("inlineCode",{parentName:"p"},"Call")," operation finishes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct CallResult {\n    /// The outcome of the result\n    pub outcome: Outcome,\n    /// The amount of gas left\n    pub gas_left: U256,\n    /// Output data\n    pub return_data: Bytes,\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum Outcome {\n    Success,\n    Reverted,\n    Fail,\n}\n")),(0,r.kt)("h3",{id:"create"},"Create"),(0,r.kt)("p",null,"The trace is recorded for all operations that create contracts, including executing contract creation transactions or successfully executing the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE2")," opcode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Create {\n    /// The address of the creator.\n    pub from: Address,\n    /// The value with which the new account is endowed.\n    pub value: U256,\n    /// The gas available for the creation init code.\n    pub gas: U256,\n    /// The init code.\n    pub init: Bytes,\n}\n")),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"Call"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"gas"),' is the "provided" gas for the ',(0,r.kt)("inlineCode",{parentName:"p"},"Create")," operation."),(0,r.kt)("h3",{id:"createresult"},"CreateResult"),(0,r.kt)("p",null,"The trace is recorded after a ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," operation finishes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct CreateResult {\n    /// The outcome of the create\n    pub outcome: Outcome,\n    /// The created contract address\n    pub addr: Address,\n    /// The amount of gas left\n    pub gas_left: U256,\n    /// Output data\n    pub return_data: Bytes,\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"addr")," can only be used if ",(0,r.kt)("inlineCode",{parentName:"p"},"outcome")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Success"),"."),(0,r.kt)("h3",{id:"internaltransferaction"},"InternalTransferAction"),(0,r.kt)("p",null,"The trace is recorded for the balance transfer triggered by internal contracts. It includes contract suicide, sponsor replacement (including storage collateral sponsor and gas sponsor) , and staking."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct InternalTransferAction {\n    /// The source address. If it is zero, then it is an interest mint action.\n    pub from: Address,\n    /// The destination address. If it is zero, then it is a burnt action.\n    pub to: Address,\n    /// The amount of CFX\n    pub value: U256,\n}\n")),(0,r.kt)("p",null,"For contract suicide, if the refund address is the to-be-destroyed contract , the refund balance will be burnt, so ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," will be the null address instead of the refund address."),(0,r.kt)("p",null,"For sponsor replacement, ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," is set to the sponsor whitelist contract address (",(0,r.kt)("inlineCode",{parentName:"p"},"0x0888000000000000000000000000000000000001"),", i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaegg2r16ar"),")."),(0,r.kt)("p",null,"For staking deposit, ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," is set to the staking interest contract address (",(0,r.kt)("inlineCode",{parentName:"p"},"0x0888000000000000000000000000000000000002"),", i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaajrwuc9jnb"),")."),(0,r.kt)("p",null,"For staking withdraw, two ",(0,r.kt)("inlineCode",{parentName:"p"},"InternalTransferAction")," traces will be recorded. The first is for withdrawing the original staked balance (",(0,r.kt)("inlineCode",{parentName:"p"},"from")," is set to the staking interest contract address), and the second is for withdrawing the staking interest (",(0,r.kt)("inlineCode",{parentName:"p"},"from")," is set to the null address)."),(0,r.kt)("h2",{id:"discussion-of-failure"},"Discussion of Failure"),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"Call")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," executed within contract execution, it is only recorded after the actual trap is triggered during execution, and the result is recorded after the trap is processed. If the transaction/instruction fails without triggering the trap (for example, the sender does not have enough balance, reentrancy is detected, or the stack has reached the max depth), no trace will be recorded."),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"Call")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Create"),' triggered by the original transaction, the trace is only recorded after passing the preliminary checks. First, traces will only be recorded for "executed" transactions, so if the nonce does not match, this transaction will not be executed and there will be no trace. If the transaction is executed (the nonce of the sender increases), but the sender does not have enough balance to execute the transactions, there are also no traces. For ',(0,r.kt)("inlineCode",{parentName:"p"},"Create"),", if the to-be-created contract address was created before and has code, we will also return directly without recording traces."))}p.isMDXComponent=!0}}]);