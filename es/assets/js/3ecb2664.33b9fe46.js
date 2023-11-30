"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9142],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(4137));const o={displayed_sidebar:"generalSidebar"},a="Stratum Protocol in Conflux-Rust",l={unversionedId:"general/build/node-development/stratum",id:"general/build/node-development/stratum",title:"Stratum Protocol in Conflux-Rust",description:"Design Goal",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/build/node-development/stratum.md",sourceDirName:"general/build/node-development",slug:"/general/build/node-development/stratum",permalink:"/es/docs/general/build/node-development/stratum",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",frontMatter:{displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Rigorous Testing Tools for Conflux",permalink:"/es/docs/general/build/node-development/rigorous-testing"},next:{title:"Block Synchronization Process",permalink:"/es/docs/general/build/node-development/sync"}},s={},u=[{value:"Design Goal",id:"design-goal",level:2},{value:"General Workflow",id:"general-workflow",level:2},{value:"RPC Interface",id:"rpc-interface",level:2},{value:"Server-side RPCs",id:"server-side-rpcs",level:3},{value:"mining.subscribe",id:"miningsubscribe",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Example",id:"example",level:5},{value:"mining.submit",id:"miningsubmit",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Example",id:"example-1",level:5},{value:"Client-side Notification",id:"client-side-notification",level:3},{value:"mining.notify",id:"miningnotify",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Example",id:"example-2",level:5}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stratum-protocol-in-conflux-rust"},"Stratum Protocol in Conflux-Rust"),(0,i.kt)("h2",{id:"design-goal"},"Design Goal"),(0,i.kt)("p",null,"Rust is an excellent language to develop distributed systems like Conflux, but\nit is not very so good for developing miners. Miners are typically developed\nvia languages like C/C++ that can operate with high performance and GPUs. We\ntherefore design a stratum-like protocol in Conflux-Rust to enable external\nminers to connect to Conflux."),(0,i.kt)("p",null,"Note that to keep the protocol simple, the design goal of the stratum-like\nprotocol is for solo-mining only, i.e., Conflux-Rust are connected with miner\nprocesses in local or remote machines that belong to the same entity. It is not\ndesigned to run as a mining pool server. For those who wish to run a mining\npool, it is recommended to build their own customized proxy server that\nconnects to Conflux-Rust."),(0,i.kt)("h2",{id:"general-workflow"},"General Workflow"),(0,i.kt)("p",null,"In the scenario where an external miner connecting to Conflux-Rust via its\nstratum port (default 32525), here is the typical workflow."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The miner connects via TCP to the stratum port. Conflux-Rust must run with\nthe configuration that enables stratum.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The miner sends a ",(0,i.kt)("inlineCode",{parentName:"p"},"mining.subscribe")," RPC call via the TCP stream. It informs\nConflux-Rust the miner name. ",(0,i.kt)("inlineCode",{parentName:"p"},"mining.subscribe")," also performs a basic password\nbased authentication, where the password can be set at the configuration file\nof Conflux-Rust.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After successful subscription, Conflux-Rust will continue to send\n",(0,i.kt)("inlineCode",{parentName:"p"},"mining.notify")," RPC calls to the miner via the TCP stream. Each ",(0,i.kt)("inlineCode",{parentName:"p"},"mining.notify"),"\ncorresponds to a new proof-of-work (PoW) problem for the miner to solve. Miners\nare expected to work on the last received job.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Whenever miner solves a PoW problem, it returns the solution (i.e., the\nnonce) to Conflux-Rust via calling ",(0,i.kt)("inlineCode",{parentName:"p"},"mining.submit")," RPC calls.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Miner can simply disconnect any time in this process to quit."))),(0,i.kt)("h2",{id:"rpc-interface"},"RPC Interface"),(0,i.kt)("h3",{id:"server-side-rpcs"},"Server-side RPCs"),(0,i.kt)("h4",{id:"miningsubscribe"},"mining.subscribe"),(0,i.kt)("p",null,"Start to subscribe the proof-of-work notification from the stratum server"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"WORKER","_","ID, string - the name of the miner"),(0,i.kt)("li",{parentName:"ol"},"Secret, empty or 32-bytes, the secret that corresponds to the keccak result\nof the password in the configuration. Empty if password is not enabled.")),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Bool")," - ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if successful, ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," if not."),(0,i.kt)("h5",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'// Request\n\'{"jsonrpc":"2.0","method":"mining.subscribe","params":["cfxmine", ""],"id":1}\'\n\n// Response\n{\n  "jsonrpc": "2.0",\n  "result": "true",\n  "id": 1\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"miningsubmit"},"mining.submit"),(0,i.kt)("p",null,"Submit a PoW solution to the stratum server"),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"WORKER","_","ID, string - the name of the miner"),(0,i.kt)("li",{parentName:"ol"},"JOB","_","ID, hex-string - the identifier of the job, which is typically same as\nthe hash of the PoW problem."),(0,i.kt)("li",{parentName:"ol"},"NONCE, hex-string of 32-bytes - the nonce solution of the PoW problem"),(0,i.kt)("li",{parentName:"ol"},"HASH, hex-string of 32-bytes - the hash of the solved PoW problem.")),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Array")," - A single element of ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if successful, the first element will be\n",(0,i.kt)("inlineCode",{parentName:"p"},"false")," if not and the second element will explain reasons in string."),(0,i.kt)("h5",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'// Request\n\'{"jsonrpc":"2.0","method":"mining.submit","params":["cfxmine", "0x2106e1162d1199483fa010bcaa7d4f05b23b85d456b4a7089d787ae2e880deaf","0x21b49d385865819a171ed8cd9d9f80acc468e501f3486d3600000000000c786c","0x2106e1162d1199483fa010bcaa7d4f05b23b85d456b4a7089d787ae2e880deaf"],"id":1}\'\n\n// Response\n{\n  "jsonrpc": "2.0",\n  "result": ["true"],\n  "id": 1\n}\n\n{\n  "jsonrpc": "2.0",\n  "result": ["false", "invlaid nonce"],\n  "id": 1\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"client-side-notification"},"Client-side Notification"),(0,i.kt)("p",null,"Note that although the server notifies the mining client via a RPC like\nrequest, it is not a true RPC -- it does not expect the client to return any\nresponse. Instead, the client will just update the PoW problem it works on and\nsubmits whenever it finds solution."),(0,i.kt)("h4",{id:"miningnotify"},"mining.notify"),(0,i.kt)("p",null,"Notify the client about a new PoW problem."),(0,i.kt)("h5",{id:"parameters-2"},"Parameters"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"JOB","_","ID, hex-string - the identifier of the job."),(0,i.kt)("li",{parentName:"ol"},"HASH, 32-bytes - the hash of the PoW problem."),(0,i.kt)("li",{parentName:"ol"},"BOUNDARY, U256 - the difficulty boundary of the problem. For a nonce to be valid, the resulting\nhash must be smaller than the BOUNDARY.")),(0,i.kt)("h5",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'// Request\n\'{"jsonrpc":"2.0","method":"mining.notify","params":["0x4e08db21d43a7696afa3d00ed948568210f3ab3f34673f1d17198625ec175a9c","0x4e08db21d43a7696afa3d00ed948568210f3ab3f34673f1d17198625ec175a9c","0x1a4e3422948568210f3ab3f34673f1d17198625ec175a9c"],"id":3}\'\n\n---\n')))}d.isMDXComponent=!0}}]);