"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9142],{87753:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(85893),s=i(11151);const r={displayed_sidebar:"generalSidebar"},o="Stratum Protocol in Conflux-Rust",l={id:"general/build/node-development/stratum",title:"Stratum Protocol in Conflux-Rust",description:"Design Goal",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/build/node-development/stratum.md",sourceDirName:"general/build/node-development",slug:"/general/build/node-development/stratum",permalink:"/es/docs/general/build/node-development/stratum",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",frontMatter:{displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Rigorous Testing Tools for Conflux",permalink:"/es/docs/general/build/node-development/rigorous-testing"},next:{title:"Block Synchronization Process",permalink:"/es/docs/general/build/node-development/sync"}},a={},d=[{value:"Design Goal",id:"design-goal",level:2},{value:"General Workflow",id:"general-workflow",level:2},{value:"RPC Interface",id:"rpc-interface",level:2},{value:"Server-side RPCs",id:"server-side-rpcs",level:3},{value:"mining.subscribe",id:"miningsubscribe",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Example",id:"example",level:5},{value:"mining.submit",id:"miningsubmit",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Example",id:"example-1",level:5},{value:"Client-side Notification",id:"client-side-notification",level:3},{value:"mining.notify",id:"miningnotify",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Example",id:"example-2",level:5}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"stratum-protocol-in-conflux-rust",children:"Stratum Protocol in Conflux-Rust"}),"\n",(0,t.jsx)(n.h2,{id:"design-goal",children:"Design Goal"}),"\n",(0,t.jsx)(n.p,{children:"Rust is an excellent language to develop distributed systems like Conflux, but\nit is not very so good for developing miners. Miners are typically developed\nvia languages like C/C++ that can operate with high performance and GPUs. We\ntherefore design a stratum-like protocol in Conflux-Rust to enable external\nminers to connect to Conflux."}),"\n",(0,t.jsx)(n.p,{children:"Note that to keep the protocol simple, the design goal of the stratum-like\nprotocol is for solo-mining only, i.e., Conflux-Rust are connected with miner\nprocesses in local or remote machines that belong to the same entity. It is not\ndesigned to run as a mining pool server. For those who wish to run a mining\npool, it is recommended to build their own customized proxy server that\nconnects to Conflux-Rust."}),"\n",(0,t.jsx)(n.h2,{id:"general-workflow",children:"General Workflow"}),"\n",(0,t.jsx)(n.p,{children:"In the scenario where an external miner connecting to Conflux-Rust via its\nstratum port (default 32525), here is the typical workflow."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The miner connects via TCP to the stratum port. Conflux-Rust must run with\nthe configuration that enables stratum."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The miner sends a ",(0,t.jsx)(n.code,{children:"mining.subscribe"})," RPC call via the TCP stream. It informs\nConflux-Rust the miner name. ",(0,t.jsx)(n.code,{children:"mining.subscribe"})," also performs a basic password\nbased authentication, where the password can be set at the configuration file\nof Conflux-Rust."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["After successful subscription, Conflux-Rust will continue to send\n",(0,t.jsx)(n.code,{children:"mining.notify"})," RPC calls to the miner via the TCP stream. Each ",(0,t.jsx)(n.code,{children:"mining.notify"}),"\ncorresponds to a new proof-of-work (PoW) problem for the miner to solve. Miners\nare expected to work on the last received job."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Whenever miner solves a PoW problem, it returns the solution (i.e., the\nnonce) to Conflux-Rust via calling ",(0,t.jsx)(n.code,{children:"mining.submit"})," RPC calls."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Miner can simply disconnect any time in this process to quit."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"rpc-interface",children:"RPC Interface"}),"\n",(0,t.jsx)(n.h3,{id:"server-side-rpcs",children:"Server-side RPCs"}),"\n",(0,t.jsx)(n.h4,{id:"miningsubscribe",children:"mining.subscribe"}),"\n",(0,t.jsx)(n.p,{children:"Start to subscribe the proof-of-work notification from the stratum server"}),"\n",(0,t.jsx)(n.h5,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"WORKER_ID, string - the name of the miner"}),"\n",(0,t.jsx)(n.li,{children:"Secret, empty or 32-bytes, the secret that corresponds to the keccak result\nof the password in the configuration. Empty if password is not enabled."}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Bool"})," - ",(0,t.jsx)(n.code,{children:"true"})," if successful, ",(0,t.jsx)(n.code,{children:"false"})," if not."]}),"\n",(0,t.jsx)(n.h5,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'// Request\n\'{"jsonrpc":"2.0","method":"mining.subscribe","params":["cfxmine", ""],"id":1}\'\n\n// Response\n{\n  "jsonrpc": "2.0",\n  "result": "true",\n  "id": 1\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"miningsubmit",children:"mining.submit"}),"\n",(0,t.jsx)(n.p,{children:"Submit a PoW solution to the stratum server"}),"\n",(0,t.jsx)(n.h5,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"WORKER_ID, string - the name of the miner"}),"\n",(0,t.jsx)(n.li,{children:"JOB_ID, hex-string - the identifier of the job, which is typically same as\nthe hash of the PoW problem."}),"\n",(0,t.jsx)(n.li,{children:"NONCE, hex-string of 32-bytes - the nonce solution of the PoW problem"}),"\n",(0,t.jsx)(n.li,{children:"HASH, hex-string of 32-bytes - the hash of the solved PoW problem."}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Array"})," - A single element of ",(0,t.jsx)(n.code,{children:"true"})," if successful, the first element will be\n",(0,t.jsx)(n.code,{children:"false"})," if not and the second element will explain reasons in string."]}),"\n",(0,t.jsx)(n.h5,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'// Request\n\'{"jsonrpc":"2.0","method":"mining.submit","params":["cfxmine", "0x2106e1162d1199483fa010bcaa7d4f05b23b85d456b4a7089d787ae2e880deaf","0x21b49d385865819a171ed8cd9d9f80acc468e501f3486d3600000000000c786c","0x2106e1162d1199483fa010bcaa7d4f05b23b85d456b4a7089d787ae2e880deaf"],"id":1}\'\n\n// Response\n{\n  "jsonrpc": "2.0",\n  "result": ["true"],\n  "id": 1\n}\n\n{\n  "jsonrpc": "2.0",\n  "result": ["false", "invlaid nonce"],\n  "id": 1\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"client-side-notification",children:"Client-side Notification"}),"\n",(0,t.jsx)(n.p,{children:"Note that although the server notifies the mining client via a RPC like\nrequest, it is not a true RPC -- it does not expect the client to return any\nresponse. Instead, the client will just update the PoW problem it works on and\nsubmits whenever it finds solution."}),"\n",(0,t.jsx)(n.h4,{id:"miningnotify",children:"mining.notify"}),"\n",(0,t.jsx)(n.p,{children:"Notify the client about a new PoW problem."}),"\n",(0,t.jsx)(n.h5,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"JOB_ID, hex-string - the identifier of the job."}),"\n",(0,t.jsx)(n.li,{children:"HASH, 32-bytes - the hash of the PoW problem."}),"\n",(0,t.jsx)(n.li,{children:"BOUNDARY, U256 - the difficulty boundary of the problem. For a nonce to be valid, the resulting\nhash must be smaller than the BOUNDARY."}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"example-2",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'// Request\n\'{"jsonrpc":"2.0","method":"mining.notify","params":["0x4e08db21d43a7696afa3d00ed948568210f3ab3f34673f1d17198625ec175a9c","0x4e08db21d43a7696afa3d00ed948568210f3ab3f34673f1d17198625ec175a9c","0x1a4e3422948568210f3ab3f34673f1d17198625ec175a9c"],"id":3}\'\n\n---\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var t=i(67294);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);