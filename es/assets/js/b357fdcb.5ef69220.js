"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5016],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(o),h=r,f=c["".concat(i,".").concat(h)]||c[h]||u[h]||a;return o?n.createElement(f,s(s({ref:t},p),{},{components:o})):n.createElement(f,s({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<a;d++)s[d]=o[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},80294:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const a={sidebar_position:4,title:"Upgrade a Node",displayed_sidebar:"generalSidebar"},s=void 0,l={unversionedId:"general/run-a-node/how-to-upgrad",id:"general/run-a-node/how-to-upgrad",title:"Upgrade a Node",description:"When the node software releases a new version, node operators need to upgrade the node software to ensure its proper functioning.",source:"@site/docs/general/run-a-node/how-to-upgrad.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/how-to-upgrad",permalink:"/es/docs/general/run-a-node/how-to-upgrad",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Upgrade a Node",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Snapshot Tool",permalink:"/es/docs/general/run-a-node/snapshot-tool"},next:{title:"Advanced",permalink:"/es/docs/category/advanced"}},i={},d=[{value:"How to Upgrade",id:"how-to-upgrade",level:2},{value:"1. Download the New Node Software",id:"1-download-the-new-node-software",level:3},{value:"2. Stop the Old Node Process",id:"2-stop-the-old-node-process",level:3},{value:"3. Replace the Old Node Software and Start",id:"3-replace-the-old-node-software-and-start",level:3},{value:"FAQs",id:"faqs",level:2},{value:"How to Check the Version of the Node Software?",id:"how-to-check-the-version-of-the-node-software",level:3},{value:"How to Know When the Node Software Releases the Latest Version?",id:"how-to-know-when-the-node-software-releases-the-latest-version",level:3},{value:"What Happens if Nodes Do Not Upgrade After a New Version Release?",id:"what-happens-if-nodes-do-not-upgrade-after-a-new-version-release",level:3},{value:"After Restarting the Node, How Long Does It Take to Sync Block Data to the Latest?",id:"after-restarting-the-node-how-long-does-it-take-to-sync-block-data-to-the-latest",level:3},{value:"How to Migrate Nodes?",id:"how-to-migrate-nodes",level:3},{value:"How to Upgrade if Using Docker?",id:"how-to-upgrade-if-using-docker",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When the node software releases a new version, node operators need to upgrade the node software to ensure its proper functioning."),(0,r.kt)("h2",{id:"how-to-upgrade"},"How to Upgrade"),(0,r.kt)("p",null,"The upgrade process is straightforward. Simply replace the old node software (Conflux) with the new one and restart."),(0,r.kt)("h3",{id:"1-download-the-new-node-software"},"1. Download the New Node Software"),(0,r.kt)("p",null,"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/releases"},"Release page")," of Conflux-Rust and download the latest node software. After extracting, you will find an executable file named ",(0,r.kt)("inlineCode",{parentName:"p"},"conflux"),"."),(0,r.kt)("h3",{id:"2-stop-the-old-node-process"},"2. Stop the Old Node Process"),(0,r.kt)("p",null,"Typically, on Linux, you can stop the node software by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl + C"),". If it cannot be stopped, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"kill")," command to force stop."),(0,r.kt)("p",null,"If you are running a PoS node, additional steps are required to prevent forced retirement. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/general/mine-stake/stake/faqs#how-can-i-safely-restart-my-pos-node"},"How to Safely Restart a PoS Node"),"."),(0,r.kt)("h3",{id:"3-replace-the-old-node-software-and-start"},"3. Replace the Old Node Software and Start"),(0,r.kt)("p",null,"Copy the new node software ",(0,r.kt)("inlineCode",{parentName:"p"},"conflux")," to the directory where the node software is located and restart the node software."),(0,r.kt)("h2",{id:"faqs"},"FAQs"),(0,r.kt)("h3",{id:"how-to-check-the-version-of-the-node-software"},"How to Check the Version of the Node Software?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/conflux --version\nconflux conflux-rust/v2.3.3-89f0ce5-20231215/x86_64-linux-gnu/rustc1.73.0\n")),(0,r.kt)("h3",{id:"how-to-know-when-the-node-software-releases-the-latest-version"},"How to Know When the Node Software Releases the Latest Version?"),(0,r.kt)("p",null,"We will notify node operators through forums, communities, and other channels. You can also check the latest version on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/releases"},"Release page"),"."),(0,r.kt)("h3",{id:"what-happens-if-nodes-do-not-upgrade-after-a-new-version-release"},"What Happens if Nodes Do Not Upgrade After a New Version Release?"),(0,r.kt)("p",null,"If the released version is a hardfork version, not upgrading the nodes will result in the nodes being unable to synchronize blocks, thus causing the nodes to malfunction. For other versions, not upgrading will not have a significant impact, but it is recommended to upgrade, especially for bugfix versions."),(0,r.kt)("h3",{id:"after-restarting-the-node-how-long-does-it-take-to-sync-block-data-to-the-latest"},"After Restarting the Node, How Long Does It Take to Sync Block Data to the Latest?"),(0,r.kt)("p",null,"If your node was already synchronized with the latest block before the upgrade, the node will sync from the last synchronized block after the upgrade. It usually takes several minutes to several tens of minutes."),(0,r.kt)("h3",{id:"how-to-migrate-nodes"},"How to Migrate Nodes?"),(0,r.kt)("p",null,"If the machine needs replacement or expansion, and you need to migrate the node data to a new machine, copy the entire node software directory to the new machine and start the node software."),(0,r.kt)("h3",{id:"how-to-upgrade-if-using-docker"},"How to Upgrade if Using Docker?"),(0,r.kt)("p",null,"If you are using Docker, stop the Docker container first, then update the Docker image to the latest version, and finally, start the Docker container."))}u.isMDXComponent=!0}}]);