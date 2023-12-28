"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,f=u["".concat(i,".").concat(p)]||u[p]||h[p]||l;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=p;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[u]="string"==typeof e?e:o,s[1]=r;for(var d=2;d<l;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const l={sidebar_position:3,title:"Snapshot Tool",description:"Learn how to use the Conflux Snapshot Tool to quickly set up a Conflux node from a snapshot.",displayed_sidebar:"generalSidebar"},s=void 0,r={unversionedId:"general/run-a-node/snapshot-tool",id:"general/run-a-node/snapshot-tool",title:"Snapshot Tool",description:"Learn how to use the Conflux Snapshot Tool to quickly set up a Conflux node from a snapshot.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/run-a-node/snapshot-tool.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/snapshot-tool",permalink:"/es/docs/general/run-a-node/snapshot-tool",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Snapshot Tool",description:"Learn how to use the Conflux Snapshot Tool to quickly set up a Conflux node from a snapshot.",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Node Types",permalink:"/es/docs/general/run-a-node/node-types"},next:{title:"Upgrade a Node",permalink:"/es/docs/general/run-a-node/how-to-upgrad"}},i={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Download Snapshot Data",id:"download-snapshot-data",level:2},{value:"Unzip Snapshot Data",id:"unzip-snapshot-data",level:2},{value:"Resources",id:"resources",level:2},{value:"FAQs",id:"faqs",level:2},{value:"service is not available?",id:"service-is-not-available",level:3},{value:"What&#39;s the snapshot data size?",id:"whats-the-snapshot-data-size",level:3},{value:"Does the archive node snapshot data include the trace data?",id:"does-the-archive-node-snapshot-data-include-the-trace-data",level:3},{value:"Does the archive node snapshot data include the fullstate data?",id:"does-the-archive-node-snapshot-data-include-the-fullstate-data",level:3}],c={toc:d},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The Conflux Blockchain Data Snapshot Tool (aka Archive-Tool) is designed to help users quickly set up a Conflux node from a snapshot. This tool provides the download links, and by default, it downloads the DB snapshot data of the current day. The Snapshot tool can help save weeks of time required to download and sync all the blockchain data at the moment of running a node. Using this tool is optional, ",(0,o.kt)("strong",{parentName:"p"},"but highly recommended"),". The tool supports resuming downloads from breakpoints using the curl command. If an error occurs during the process, users are advised to follow the script prompts."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Ensure you have curl installed on your system. If not, you can download and install it from ",(0,o.kt)("a",{parentName:"p",href:"https://curl.se/"},"here"),"."),(0,o.kt)("h2",{id:"download-snapshot-data"},"Download Snapshot Data"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"For Linux & Mac - Mainnet - Archive Node:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Beijing\nwget https://conflux-blockchain-data.oss-cn-beijing.aliyuncs.com/archivenode-db/M/download.sh\n# US West\nwget https://conflux-blockchain-data-us.s3.us-west-1.amazonaws.com/archivenode-db/M/download.sh\n# EU Central\nwget https://conflux-blockchain-data-eu.s3.eu-central-1.amazonaws.com/archivenode-db/M/download.sh\n\nbash download.sh \n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"For Windows - Mainnet - Archive Node:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Beijing\nwget https://conflux-blockchain-data.oss-cn-beijing.aliyuncs.com/archivenode-db/M/download.bat\n# US West\nwget https://conflux-blockchain-data-us.s3.us-west-1.amazonaws.com/archivenode-db/M/download.bat\n# EU Central\nwget https://conflux-blockchain-data-eu.s3.eu-central-1.amazonaws.com/archivenode-db/M/download.bat\n\ndownload.bat \n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"For Linux & Mac - Mainnet - Full Node:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://conflux-blockchain-data.oss-cn-beijing.aliyuncs.com/fullnode-db/M/download.sh\nbash download.sh \n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"For Linux & Mac - Testnet - Archive Node:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://conflux-blockchain-data.oss-cn-beijing.aliyuncs.com/archivenode-db/T/download.sh\nbash download.sh \n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"For Windows - Testnet - Archive Node:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://conflux-blockchain-data.oss-cn-beijing.aliyuncs.com/archivenode-db/T/download.bat\ndownload.bat \n")),(0,o.kt)("h2",{id:"unzip-snapshot-data"},"Unzip Snapshot Data"),(0,o.kt)("p",null,'Then, you\u2019ll need to unzip the file, and copy (or move) its content into your node folder, usually named "run".'),(0,o.kt)("p",null,"Por ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"tar -xvzf conflux-fullnode-db-snapshot-2023-09-20.tgz ./run\n")),(0,o.kt)("p",null,"The snapshot data also includes the ",(0,o.kt)("inlineCode",{parentName:"p"},"pos_config")," folder, and the Conflux client release will also include the ",(0,o.kt)("inlineCode",{parentName:"p"},"pos_config")," folder. You can use either one."),(0,o.kt)("p",null,"Then you can start your node."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/conflux-fans/archive-tool"},"Conflux Blockchain Data Snapshot Archive-tool"),".")),(0,o.kt)("h2",{id:"faqs"},"FAQs"),(0,o.kt)("h3",{id:"service-is-not-available"},"service is not available?"),(0,o.kt)("p",null,"Please download the latest version of the snapshot tool."),(0,o.kt)("h3",{id:"whats-the-snapshot-data-size"},"What's the snapshot data size?"),(0,o.kt)("p",null,"At the time of writing(2023.12.22), the fullnode snapshot data size is about 200G, the archivenode snapshot data size is 550G."),(0,o.kt)("p",null,"You can check the newest snapshot data size in ",(0,o.kt)("inlineCode",{parentName:"p"},"download.sh")," file."),(0,o.kt)("h3",{id:"does-the-archive-node-snapshot-data-include-the-trace-data"},"Does the archive node snapshot data include the trace data?"),(0,o.kt)("p",null,"Yes, it does."),(0,o.kt)("h3",{id:"does-the-archive-node-snapshot-data-include-the-fullstate-data"},"Does the archive node snapshot data include the fullstate data?"),(0,o.kt)("p",null,"No, it doesn't. If you want to setup a fullstate archive node, you need sync the data from beginning."),(0,o.kt)("p",null,"The Confura public RPC service is a fullstate archive node. You can use it to query the fullstate data."))}h.isMDXComponent=!0}}]);