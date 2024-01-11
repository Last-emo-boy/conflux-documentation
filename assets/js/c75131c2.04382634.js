"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9504],{67874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(85893),o=t(11151);const s={sidebar_position:11,title:"Running a Full Node",displayed_sidebar:"generalSidebar"},r=void 0,l={id:"general/run-a-node/advanced-topics/running-full-node",title:"Running a Full Node",description:"Requirements",source:"@site/docs/general/run-a-node/advanced-topics/running-full-node.md",sourceDirName:"general/run-a-node/advanced-topics",slug:"/general/run-a-node/advanced-topics/running-full-node",permalink:"/docs/general/run-a-node/advanced-topics/running-full-node",draft:!1,unlisted:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/run-a-node/advanced-topics/running-full-node.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Running a Full Node",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Running a Light Node",permalink:"/docs/general/run-a-node/advanced-topics/running-light-node"},next:{title:"Running an Archive Node",permalink:"/docs/general/run-a-node/advanced-topics/running-archive-node"}},d={},c=[{value:"Requirements",id:"requirements",level:3},{value:"Configuring Conflux Full Node",id:"configuring-conflux-full-node",level:2},{value:"Running Test",id:"running-test",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"At least 16GB of RAM."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A minimum of 1TB free disk space (SSD is recommended)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A stable internet connection."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-conflux-full-node",children:"Configuring Conflux Full Node"}),"\n",(0,i.jsx)(n.p,{children:"Conflux can be configured using either the CLI options or a config file. Should the CLI flags and the config file disagree about a setting, the CLI takes precedence."}),"\n",(0,i.jsxs)(n.p,{children:["The config file follows the format of ",(0,i.jsx)(n.a,{href:"https://github.com/toml-lang/toml",children:"TOML"}),". The path of the configuration file can be set with the CLI option ",(0,i.jsx)(n.code,{children:"--config path/to/conflux.toml"}),". A default configuration file ",(0,i.jsx)(n.code,{children:"hydra.toml"})," with every configuration explained has been provided in the directory ",(0,i.jsx)(n.code,{children:"run"}),", and you can start customizing your configuration from there."]}),"\n",(0,i.jsxs)(n.p,{children:["You can list all CLI options by running  ",(0,i.jsx)(n.code,{children:"$ ./conflux --help"}),". The vast majority of CLI options map to a setting in the TOML file, for example ",(0,i.jsx)(n.code,{children:"--public-address 127.0.0.1:32323"})," can be set by creating a config file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'public_address="127.0.0.1:32323"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If you are going to set up a node and let it join the Conflux mainnet(testnet), you need to set the ",(0,i.jsx)(n.code,{children:"public_address"}),' appropriately. It should be set as the IP address of your node which can be accessed publicly from Internet. If your node is covered under a public gateway, you can get its public address by searching "ip" in ',(0,i.jsx)(n.a,{href:"https://www.google.com",children:"Google"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to let your node participate the mining process, you need to enable it by setting ",(0,i.jsx)(n.code,{children:"start_mining"}),' as "true" and ',(0,i.jsx)(n.code,{children:"mining_author"})," as the account address that receives the mining reward."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to open the http or websocket RPC, you need to enable it by setting ",(0,i.jsx)(n.code,{children:"jsonrpc_http_port"})," or ",(0,i.jsx)(n.code,{children:"jsonrpc_ws_port"}),".\n",(0,i.jsxs)(n.strong,{children:["Note that to serve transaction-related RPCs, ",(0,i.jsx)(n.code,{children:"persist_tx_index"})," should also be set to ",(0,i.jsx)(n.code,{children:"true"})," or the node will only be able to handle very recent transactions."]})]}),"\n",(0,i.jsx)(n.h2,{id:"running-test",children:"Running Test"}),"\n",(0,i.jsx)(n.p,{children:"We have both unit tests written in Rust and integration tests written in python. After you make some modifications to the code, you can run these tests to see if the system still runs correctly."}),"\n",(0,i.jsxs)(n.p,{children:["First, you need to install the dependencies as instructed in ",(0,i.jsx)(n.a,{href:"/docs/general/run-a-node/advanced-topics/compiling-conflux-client#install-test-dependencies",children:"Install Test Dependencies"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Then you can run the tests as follows"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Linux:"}),"\n",(0,i.jsx)(n.p,{children:"$ ./dev-support/test.sh"}),"\n",(0,i.jsx)(n.p,{children:"This will automatically run the unit tests in our Rust code and the python tests."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Others:"}),"\n",(0,i.jsx)(n.p,{children:"To run unit tests in Rust:"}),"\n",(0,i.jsx)(n.p,{children:"$ cargo test --release --all"}),"\n",(0,i.jsx)(n.p,{children:"To run python integration tests:"}),"\n",(0,i.jsx)(n.p,{children:"$ ./tests/test_all.py"}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(67294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);