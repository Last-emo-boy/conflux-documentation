"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[214],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:o,r[1]=c;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1255:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var a=t(7462),o=(t(7294),t(4137));const l={id:"cli_sub_commands",title:"CLI Sub-commands",sidebar_position:8,keywords:["conflux","cli","sdk"]},r=void 0,c={unversionedId:"general/run-a-node/cli_sub_commands",id:"general/run-a-node/cli_sub_commands",title:"CLI Sub-commands",description:"Conflux CLI sub-commands is a collection of command line interfaces which allows you to interact with a local or remote Conflux node.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/run-a-node/cli.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/cli_sub_commands",permalink:"/es/docs/general/run-a-node/cli_sub_commands",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"cli_sub_commands",title:"CLI Sub-commands",sidebar_position:8,keywords:["conflux","cli","sdk"]},sidebar:"generalSidebar",previous:{title:"Configuration Files",permalink:"/es/docs/general/run-a-node/configuration-files"},next:{title:"Official Bootnodes",permalink:"/es/docs/general/run-a-node/official-bootnodes"}},i={},s=[{value:"Manage Accounts",id:"manage-accounts",level:2},{value:"new",id:"new",level:3},{value:"Usage",id:"usage",level:4},{value:"Example",id:"example",level:4},{value:"list",id:"list",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Example",id:"example-1",level:4},{value:"import",id:"import",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Example",id:"example-2",level:4},{value:"Public APIs",id:"public-apis",level:2},{value:"Get balance",id:"get-balance",level:3},{value:"Get nonce",id:"get-nonce",level:3},{value:"Get current epoch number",id:"get-current-epoch-number",level:3},{value:"Get block(s)",id:"get-blocks",level:3},{value:"Get transaction",id:"get-transaction",level:3},{value:"Get receipt",id:"get-receipt",level:3},{value:"Send signed transaction",id:"send-signed-transaction",level:3},{value:"Misc",id:"misc",level:3},{value:"Private APIs",id:"private-apis",level:2},{value:"net",id:"net",level:3},{value:"Examples",id:"examples",level:4},{value:"txpool",id:"txpool",level:3},{value:"Examples",id:"examples-1",level:4},{value:"sync-phase",id:"sync-phase",level:3},{value:"Send transaction",id:"send-transaction",level:3},{value:"Usage",id:"usage-3",level:4},{value:"Example",id:"example-3",level:4}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Conflux CLI sub-commands is a collection of command line interfaces which allows you to interact with a local or remote Conflux node."),(0,o.kt)("h2",{id:"manage-accounts"},"Manage Accounts"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"account")," sub-command allows you to manage accounts at local machine."),(0,o.kt)("h3",{id:"new"},"new"),(0,o.kt)("p",null,"Create a new account at local machine."),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ ./conflux.exe account new --help\nconflux.exe-account-new\nCreate a new account (and its associated key) for the given --chain (default conflux).\n\nUSAGE:\n    conflux.exe account new [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --keys-iterations <NUM>    Specify the number of iterations to use when deriving key from the password (bigger is more secure). [default: 10240]\n        --password <FILE>          Provide a file containing a password for unlocking an account. Leading and trailing whitespace is trimmed.\n")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./conflux.exe account new")),(0,o.kt)("h3",{id:"list"},"list"),(0,o.kt)("p",null,"List all accounts at local machine."),(0,o.kt)("h4",{id:"usage-1"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ ./conflux.exe account list --help\nconflux.exe-account-list\nList existing accounts of the given --chain (default conflux).\n\nUSAGE:\n    conflux.exe account list\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n")),(0,o.kt)("h4",{id:"example-1"},"Example"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./conflux.exe account list")),(0,o.kt)("h3",{id:"import"},"import"),(0,o.kt)("p",null,"Import accounts from JSON UTC keystore files."),(0,o.kt)("h4",{id:"usage-2"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ ./conflux.exe account import --help\nconflux.exe-account-import\nImport accounts from JSON UTC keystore files to the specified --chain (default conflux)\n\nUSAGE:\n    conflux.exe account import --import-path <PATH>...\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --import-path <PATH>...    A list of file paths to import.\n")),(0,o.kt)("h4",{id:"example-2"},"Example"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./conflux.exe account import --import-path ./keystores")),(0,o.kt)("h2",{id:"public-apis"},"Public APIs"),(0,o.kt)("p",null,"Public API allows you to interact with a local or remote Conflux node via HTTP connection in JSON-RPC protocol. All public APIs are under ",(0,o.kt)("inlineCode",{parentName:"p"},"rpc")," sub-command, and access to the JSON-RPC API at local machine with default ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"OPTIONS:\n        --url <url>    URL of RPC server [default: http://localhost:12539]\n")),(0,o.kt)("p",null,"To access JSON-RPC API of remote Conflux node, please specify the  correct ",(0,o.kt)("inlineCode",{parentName:"p"},"--url")," option (e.g. ",(0,o.kt)("a",{parentName:"p",href:"http://10.1.5.6:12537"},"http://10.1.5.6:12537"),"). By default, JSON-RPC is enabled only for local access for security consideration. You can manually enable remote access by configuring ",(0,o.kt)("inlineCode",{parentName:"p"},"jsonrpc_http_port")," in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"default.toml"))," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},"# jsonrpc_tcp_port=12536\njsonrpc_http_port=12537\n# jsonrpc_local_tcp_port=12538\njsonrpc_local_http_port=12539\n")),(0,o.kt)("p",null,"All available commands are as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ ./conflux.exe rpc --help\nconflux.exe-rpc\nRPC based subcommands to query blockchain information and send transactions\n\nUSAGE:\n    conflux.exe rpc [OPTIONS] <SUBCOMMAND>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --url <url>    URL of RPC server [default: http://localhost:12539]\n\nSUBCOMMANDS:\n    balance                  Get balance of specified account\n    best-block-hash          Get the best block hash\n    block-by-epoch           Get block by epoch\n    block-by-hash            Get block by hash\n    block-with-assumption    Get block by hash with pivot chain assumption\n    blocks                   Get blocks of specified epoch\n    call                     Executes a new message call immediately without creating a transaction\n    code                     Get bytecode of specified contract\n    local                    Local subcommands (requires jsonrpc_local_http_port configured)\n    epoch                    Get epoch number\n    estimate-gas             Executes a call request immediately without creating a transaction and returns the gas used\n    help                     Prints this message or the help of the given subcommand(s)\n    nonce                    Get nonce of specified account\n    price                    Get recent mean gas price\n    receipt                  Get receipt by transaction hash\n    send                     Send a signed transaction and return its hash\n    tx                       Get transaction by hash\n")),(0,o.kt)("h3",{id:"get-balance"},"Get balance"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./conflux.exe rpc balance --address cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg")),(0,o.kt)("h3",{id:"get-nonce"},"Get nonce"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./conflux.exe rpc nonce --address cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg")),(0,o.kt)("h3",{id:"get-current-epoch-number"},"Get current epoch number"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./conflux.exe rpc epoch")),(0,o.kt)("h3",{id:"get-blocks"},"Get block(s)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get Best block hash: ",(0,o.kt)("inlineCode",{parentName:"li"},"./conflux.exe rpc best-block-hash")),(0,o.kt)("li",{parentName:"ul"},"Get block by epoch: ",(0,o.kt)("inlineCode",{parentName:"li"},"./conflux.exe rpc block-by-epoch --epoch latest_state")),(0,o.kt)("li",{parentName:"ul"},"Get block by height: ",(0,o.kt)("inlineCode",{parentName:"li"},"./conflux.exe rpc block-by-epoch --epoch 0x10")),(0,o.kt)("li",{parentName:"ul"},"Get blocks in epoch: ",(0,o.kt)("inlineCode",{parentName:"li"},"./conflux.exe rpc blocks --epoch latest_state"))),(0,o.kt)("h3",{id:"get-transaction"},"Get transaction"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./conflux.exe rpc tx --hash 0x718532fe76dbd8c4208c6c5a79588db35c0bf97e7d8a0faa5988ba66ad88b74c")),(0,o.kt)("h3",{id:"get-receipt"},"Get receipt"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./conflux.exe rpc receipt --hash 0x718532fe76dbd8c4208c6c5a79588db35c0bf97e7d8a0faa5988ba66ad88b74c")),(0,o.kt)("h3",{id:"send-signed-transaction"},"Send signed transaction"),(0,o.kt)("p",null,"Send a signed transaction which encoded in HEX format. Generally, this API is used for Java-Script API to send encoded transaction. To send a transaction with CLI, suggest to use private API ",(0,o.kt)("a",{parentName:"p",href:"#send-transaction"},"send transaction"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./conflux.exe rpc send --raw-bytes 0x...")),(0,o.kt)("h3",{id:"misc"},"Misc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get contract code: ",(0,o.kt)("inlineCode",{parentName:"li"},"./conflux.exe rpc code --address cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp")),(0,o.kt)("li",{parentName:"ul"},"Get recent mean gas price: ",(0,o.kt)("inlineCode",{parentName:"li"},"./conflux.exe rpc price"))),(0,o.kt)("h2",{id:"private-apis"},"Private APIs"),(0,o.kt)("p",null,"Private API allows you to interact with local Conflux node ",(0,o.kt)("strong",{parentName:"p"},"only")," via HTTP connection in JSON-RPC protocol. Private APIs are provided for user to manage the local Conflux node, and requires the ",(0,o.kt)("inlineCode",{parentName:"p"},"jsonrpc_local_http_port")," configured in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"default.toml"))," configuration file."),(0,o.kt)("p",null,"In addition, private APIs also helps developers to debug, test, and monitor the runtime of Conflux node."),(0,o.kt)("p",null,"All private APIs are under ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," sub-command, and access to the JSON-RPC API at local machine with default ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ ./conflux.exe rpc local --help\nconflux.exe-rpc-local\nDebug subcommands (requires jsonrpc_local_http_port configured)\n\nUSAGE:\n    conflux.exe rpc local [OPTIONS] <SUBCOMMAND>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --url <url>    URL of RPC server [default: http://localhost:12539]\n\nSUBCOMMANDS:\n    consensus-graph-state    Get the consensus graph state\n    help                     Prints this message or the help of the given subcommand(s)\n    net                      Network subcommands\n    send                     Send a transaction and return its hash\n    sync-phase               Get the current synchronization phase\n    test                     Test subcommands (used for test purpose only)\n    txpool                   Transaction pool subcommands\n")),(0,o.kt)("h3",{id:"net"},"net"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"net")," sub-command helps you to inspect the P2P network status."),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"List all connected P2P nodes: ",(0,o.kt)("inlineCode",{parentName:"li"},"./conflux.exe rpc local net session")),(0,o.kt)("li",{parentName:"ul"},"List a single P2P node: ",(0,o.kt)("inlineCode",{parentName:"li"},"./conflux.exe rpc local net session --id <node_id>")),(0,o.kt)("li",{parentName:"ul"},"Check network egress: ",(0,o.kt)("inlineCode",{parentName:"li"},"./conflux.exe rpc local net throttling"))),(0,o.kt)("h3",{id:"txpool"},"txpool"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"txpool")," sub-command helps you to inspect the transaction pool."),(0,o.kt)("h4",{id:"examples-1"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"List transaction pool status: ",(0,o.kt)("inlineCode",{parentName:"li"},"./conflux.exe rpc local txpool status")),(0,o.kt)("li",{parentName:"ul"},"List transactions in details: ",(0,o.kt)("inlineCode",{parentName:"li"},"./conflux.exe rpc local txpool content")),(0,o.kt)("li",{parentName:"ul"},"List summary of transactions: ",(0,o.kt)("inlineCode",{parentName:"li"},"./conflux.exe rpc local txpool inspect")),(0,o.kt)("li",{parentName:"ul"},"Inspect a transaction in detail: ",(0,o.kt)("inlineCode",{parentName:"li"},"./conflux.exe rpc local txpool inspect-one --hash <tx_hash>"))),(0,o.kt)("h3",{id:"sync-phase"},"sync-phase"),(0,o.kt)("p",null,"Get the synchronization phase of local conflux node."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./conflux.exe rpc local sync-phase")),(0,o.kt)("h3",{id:"send-transaction"},"Send transaction"),(0,o.kt)("p",null,"Send a transaction to local Conflux node."),(0,o.kt)("h4",{id:"usage-3"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ ./conflux.exe rpc local send --help\nconflux.exe-rpc-local-send\nSend a transaction and return its hash\n\nUSAGE:\n    conflux.exe rpc local send [OPTIONS] --from <ADDRESS> --value <HEX>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --data <HEX>           Hash of the method signature and encoded parameters\n        --from <ADDRESS>       Transaction from address\n        --gas <HEX>            Gas provided for transaction execution [default: 0x5208]\n        --gas-price <HEX>      Transaction gas price [default: 0x2540BE400]\n        --nonce <HEX>          Transaction nonce\n        --to <ADDRESS>         Transaction to address (empty to create contract)\n        --url <url>            URL of RPC server [default: http://localhost:12537]\n        --value <HEX>          value sent with this transaction\n")),(0,o.kt)("h4",{id:"example-3"},"Example"),(0,o.kt)("p",null,"Alice transfer 5 Drip (1 CFX = 10^18 Drip) to Bob. Note, the address of Alice must exist at local machine, otherwise please ",(0,o.kt)("a",{parentName:"p",href:"#new"},"create")," account for alice at first."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./conflux.exe rpc local send --from <alice_address> --to <bob_address> --value 0x5 --password 123456")),(0,o.kt)("p",null,"Alice create a contract with gas 3,000,000. You can use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"solc"))," to compile contract to get the bytecodes."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./conflux.exe rpc local send --from <alice_address> --value 0x0 --gas 0x2DC6C0 --data <HEX_contract_bytecodes> --password 123456")))}d.isMDXComponent=!0}}]);