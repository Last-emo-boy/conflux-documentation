"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[562],{4137:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var o=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=o.createContext({}),p=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(u.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),s=p(t),h=l,f=s["".concat(u,".").concat(h)]||s[h]||c[h]||i;return t?o.createElement(f,a(a({ref:n},d),{},{components:t})):o.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=h;var r={};for(var u in n)hasOwnProperty.call(n,u)&&(r[u]=n[u]);r.originalType=e,r[s]="string"==typeof e?e:l,a[1]=r;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2597:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=t(7462),l=(t(7294),t(4137));const i={sidebar_position:1,title:"Running a Node"},a="Running a Node",r={unversionedId:"general/run-a-node/run-a-node",id:"general/run-a-node/run-a-node",title:"Running a Node",description:"Conflux Network is a scalable blockchain platform that aims to achieve high throughput and security. Running a Conflux node allows you to participate in the network, validate transactions, and interact with the Conflux blockchain.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/run-a-node/run-a-node.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/",permalink:"/zh-CN/docs/general/run-a-node/",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Running a Node"},sidebar:"generalSidebar",previous:{title:"Run a Node",permalink:"/zh-CN/docs/category/run-a-node"},next:{title:"Node Types",permalink:"/zh-CN/docs/general/run-a-node/node-types"}},u={},p=[{value:"Requirements",id:"requirements",level:3},{value:"Step 1: Install Dependencies",id:"step-1-install-dependencies",level:2},{value:"Step 2: Using Snapshot Tool (Optional)",id:"step-2-using-snapshot-tool-optional",level:2},{value:"Usage Example: (Linux &amp; Mac - Mainnet - full node)",id:"usage-example-linux--mac---mainnet---full-node",level:3},{value:"Step 3: Download/Build the Conflux Client",id:"step-3-downloadbuild-the-conflux-client",level:2},{value:"Option 1: Downloading the Conflux Client",id:"option-1-downloading-the-conflux-client",level:3},{value:"Option 2: Compiling the Conflux Client",id:"option-2-compiling-the-conflux-client",level:3},{value:"Step 4: Configure the Node",id:"step-4-configure-the-node",level:2},{value:"Step 5: Running the Node",id:"step-5-running-the-node",level:3},{value:"Step 6: Interacting with the Node",id:"step-6-interacting-with-the-node",level:2},{value:"Step 7: Keeping Your Node Updated",id:"step-7-keeping-your-node-updated",level:2}],d={toc:p},s="wrapper";function c(e){let{components:n,...t}=e;return(0,l.kt)(s,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"running-a-node"},"Running a Node"),(0,l.kt)("p",null,"Conflux Network is a scalable blockchain platform that aims to achieve high throughput and security. Running a Conflux node allows you to participate in the network, validate transactions, and interact with the Conflux blockchain."),(0,l.kt)("p",null,"Running a Conflux node is a valuable way to participate in the Conflux network and contribute to its decentralization. The process involves installing dependencies, building the Conflux software, configuring the node, and running it."),(0,l.kt)("p",null,"Here's a step-by-step guide to setting up and running a Conflux node."),(0,l.kt)("h3",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"Requirements depend on the type of node. For the specific requirements of each type of node, please visit the section ",(0,l.kt)("a",{parentName:"p",href:"./node-types"},"Node Types")),(0,l.kt)("p",null,"For a Full Node, requirements are the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A computer with a recent version of Linux or macOS."),(0,l.kt)("li",{parentName:"ul"},"At least 4GB of RAM (8GB or more is recommended)."),(0,l.kt)("li",{parentName:"ul"},"A minimum of 1TB free disk space (SSD is recommended)."),(0,l.kt)("li",{parentName:"ul"},"A stable internet connection.")),(0,l.kt)("h2",{id:"step-1-install-dependencies"},"Step 1: Install Dependencies"),(0,l.kt)("p",null,"Before installing the Conflux node software, you'll need to install some dependencies."),(0,l.kt)("p",null,"On Linux (Ubuntu)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo apt-get update \n\nsudo apt upgrade \u2013y \n\nsudo apt install -y cargo curl git build-essential cmake libssl-dev pkg-config python3 python3-dev \n")),(0,l.kt)("p",null,"On macOS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install cmake git openssl \n")),(0,l.kt)("h2",{id:"step-2-using-snapshot-tool-optional"},"Step 2: Using Snapshot Tool (Optional)"),(0,l.kt)("p",null,"The Conflux Snapshot Tool (aka Archive-Tool) is designed to help users quickly set up a Conflux node from a snapshot. This tool provides the download links, and by default, it downloads the DB snapshot data of the current day. The Snapshot tool can help save weeks of time required to download and sync all the blockchain data at the moment of running a node. Using this tool is optional, but highly recommended."),(0,l.kt)("p",null,"For more information about this tool, visit ",(0,l.kt)("a",{parentName:"p",href:"./snapshot-tool"},"this")," section or the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/conflux-fans/archive-tool"},"github repository"),"."),(0,l.kt)("h3",{id:"usage-example-linux--mac---mainnet---full-node"},"Usage Example: (Linux & Mac - Mainnet - full node)"),(0,l.kt)("p",null,"First, download the snapshot downloading software:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wget <https://conflux-blockchain-data.oss-cn-beijing.aliyuncs.com/fullnode-db/M/download.sh> \n")),(0,l.kt)("p",null,'Second, run the "download" program:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bash download.sh \n")),(0,l.kt)("h2",{id:"step-3-downloadbuild-the-conflux-client"},"Step 3: Download/Build the Conflux Client"),(0,l.kt)("p",null,"There are two options, downloading a pre-built Conflux Client, or compiling the Conflux Client from Source."),(0,l.kt)("h3",{id:"option-1-downloading-the-conflux-client"},"Option 1: Downloading the Conflux Client"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/releases"},"release")," page on the conflux-rust GitHub repository providers pre-built binaries that you can download and run directly. For more detailed instructions, please visit ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/general/run-a-node/downloading-conflux-client"},"this")," page."),(0,l.kt)("h3",{id:"option-2-compiling-the-conflux-client"},"Option 2: Compiling the Conflux Client"),(0,l.kt)("p",null,"Compiling the Conflux Client is another option, and can be done in two steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Clone the Conflux repository:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone https://github.com/Conflux-Chain/conflux-rust.git \n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Build the Conflux Client:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd conflux-rust \ncargo build --release \n")),(0,l.kt)("p",null,"For more detailed instructions, please visit ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/general/run-a-node/compiling-conflux-client"},"this")," page."),(0,l.kt)("h2",{id:"step-4-configure-the-node"},"Step 4: Configure the Node"),(0,l.kt)("p",null,"You may want to configure your Conflux node by editing the configuration file. You can find a sample configuration file in the Conflux repository, usually named hydra.toml or similar, depending on the network version."),(0,l.kt)("p",null,"Copy the sample configuration file and edit it as needed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cp ./run/hydra.toml ./target/release/hydra.toml \nnano ./run/hydra.toml \n")),(0,l.kt)("p",null,"Make sure to review and modify the settings according to your preferences and system capabilities."),(0,l.kt)("p",null,"For more detailed instructions, please visit ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/general/run-a-node/node-configuration"},"this")," page."),(0,l.kt)("h3",{id:"step-5-running-the-node"},"Step 5: Running the Node"),(0,l.kt)("p",null,"You can start the Conflux node by running the following command:"),(0,l.kt)("p",null,"The maximum number of open files are advised to set to 10000. In Linux, the default value is 1024, which is insufficient. You can configure this using the following command on the Linux terminal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ulimit -n 10000 \n")),(0,l.kt)("p",null,"Finally, to run the node, go to the conflux-rust folder and use the following command to launch the Conflux Client using the specified configuration file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./target/release/conflux --config ./run/hydra.toml \n")),(0,l.kt)("p",null,"This will start the Conflux node using the configuration file you edited earlier."),(0,l.kt)("h2",{id:"step-6-interacting-with-the-node"},"Step 6: Interacting with the Node"),(0,l.kt)("p",null,"You can interact with your Conflux node using RPC calls. The Conflux node exposes an HTTP JSON-RPC service that you can use to send requests and interact with the blockchain."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -H "Content-Type: application/json" -X POST \u2013data \'{"jsonrpc":"2.0","method":"cfx_clientVersion","params":[],"id":67}\' 127.0.0.1:12539 \n')),(0,l.kt)("h2",{id:"step-7-keeping-your-node-updated"},"Step 7: Keeping Your Node Updated"),(0,l.kt)("p",null,"Make sure to keep your Conflux node software updated to the latest version to ensure compatibility with the network and to include the latest features and security patches."))}c.isMDXComponent=!0}}]);