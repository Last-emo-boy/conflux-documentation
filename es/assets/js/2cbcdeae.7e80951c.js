"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[4286],{4137:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),p=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(d.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=a,m=u["".concat(d,".").concat(h)]||u[h]||c[h]||i;return t?o.createElement(m,r(r({ref:n},s),{},{components:t})):o.createElement(m,r({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=h;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(7462),a=(t(7294),t(4137));const i={sidebar_position:13,title:"Running an Independent Chain"},r="Run an Independent Chain",l={unversionedId:"general/run-a-node/running-independent-chain",id:"general/run-a-node/running-independent-chain",title:"Running an Independent Chain",description:"You may want to run Conflux on a single node chain to develop and test smart contracts. You can run Conflux as your independent chain with several machines.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/run-a-node/running-independent-chain.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/running-independent-chain",permalink:"/es/docs/general/run-a-node/running-independent-chain",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"Running an Independent Chain"},sidebar:"generalSidebar",previous:{title:"Running an Archive Node",permalink:"/es/docs/general/run-a-node/running-archive-node"},next:{title:"Hard Forks",permalink:"/es/docs/general/hardforks/"}},d={},p=[{value:"Run Single Node Development Chain",id:"run-single-node-development-chain",level:2},{value:"Run Multiple Node Production Chain",id:"run-multiple-node-production-chain",level:2},{value:"A Simple Instruction",id:"a-simple-instruction",level:2},{value:"Setting Multiple Bootnodes",id:"setting-multiple-bootnodes",level:2},{value:"Setting Genesis Accounts",id:"setting-genesis-accounts",level:2}],s={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"run-an-independent-chain"},"Run an Independent Chain"),(0,a.kt)("p",null,"You may want to run Conflux on a single node chain to develop and test smart contracts. You can run Conflux as your independent chain with several machines."),(0,a.kt)("h2",{id:"run-single-node-development-chain"},"Run Single Node Development Chain"),(0,a.kt)("p",null,"In order to run a single node Conflux chain for development, you can follow the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get executable Conflux binary file (use precompiled binary or build from the latest source code). You can refer to the document ",(0,a.kt)("a",{parentName:"p",href:"/es/docs/general/run-a-node/downloading-conflux-client"},"Downloading"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a directory and prepare a configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"development.toml"),". You can copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra.toml")," provided in the directory and start from there following the guide ",(0,a.kt)("a",{parentName:"p",href:"/es/docs/general/run-a-node/configuration-files"},"Configuration Files"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootnodes")," parameter in the configuration file to empty (or comment the setting line).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"mode"),' parameter to "dev". If you copy from ',(0,a.kt)("inlineCode",{parentName:"p"},"hydra.toml"),", you should find the line being commented and you can uncomment it.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev_block_interval_ms")," parameter to the block generation interval you want. In the development mode, Conflux will automatically generate a block in a fixed interval.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run Conflux binary with ",(0,a.kt)("inlineCode",{parentName:"p"},"development.toml")," as the configuration file. For example:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ../target/release/conflux --config development.toml\n")),(0,a.kt)("h2",{id:"run-multiple-node-production-chain"},"Run Multiple Node Production Chain"),(0,a.kt)("p",null,"To have your independent Conflux chain with multiple nodes in the production mode, you need to ensure that your nodes can be connected to other nodes in this chain, and will not connect to other chains (like our testnet)."),(0,a.kt)("p",null,"To achieve this, you should setup your own boot node, and let other nodes connect to it. Then they will connect to others with our discovery protocol."),(0,a.kt)("p",null,"You need the IP address, the port number, and the node id of the bootnode for others to connect. The node id is the public key corresponding the the node's unique private key for identification at the network layer. And here is an instruction to let the bootnode generate its private key automatically, and get the node id through the log file."),(0,a.kt)("h2",{id:"a-simple-instruction"},"A Simple Instruction"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get executable Conflux binary file (use precompiled binary or build from the latest source code). You can refer to the document ",(0,a.kt)("a",{parentName:"p",href:"/es/docs/general/run-a-node/downloading-conflux-client"},"Downloading"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a directory and prepare a configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"bootnode.toml")," for the bootnode (the default port is 32323 if not set). You can refer to ",(0,a.kt)("a",{parentName:"p",href:"/es/docs/general/run-a-node/configuration-files"},"Configuration Files"),"."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Ensure that `bootnode.toml` does not contain the `bootnode` entry, and the\nlog level for `network` is at least `debug`.\n\n$ mkdir run\n$ cd run\n# Put Conflux executable `conflux` and the configuration file `bootnode.toml` under `run`\n\n\nIf you are editing based on our provided `hydra.toml`, you need to\ncomment out the `bootnode` entry. Otherwise the node will connect to the\nexisting Conflux net.\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Launch the bootnode, and find the node id in the console print out. The information for node id is ",(0,a.kt)("inlineCode",{parentName:"li"},"Self node id: $ID")," where ",(0,a.kt)("inlineCode",{parentName:"li"},"$ID")," is the 0x-prefixed node id of this bootnode. Remove the 0x prefix and you'll get the node id ",(0,a.kt)("inlineCode",{parentName:"li"},"$NODEID"),". If you missed the line from the screen, you can look at the log file with:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'grep "Self node id" log/conflux.log|awk \'{print $9}\'|sed -e "s/^0x//"\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now we have the ",(0,a.kt)("inlineCode",{parentName:"p"},"$IP"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$PORT$"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"$NODEID")," of the boot node, we can get the url for this boot node with the format ",(0,a.kt)("inlineCode",{parentName:"p"},"cfxnode://$NODEID@$IP:$PORT"),". Denote this as ",(0,a.kt)("inlineCode",{parentName:"p"},"$BOOTNODE_URL"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start other nodes by setting ",(0,a.kt)("inlineCode",{parentName:"p"},'bootnodes="$BOOTNODE_URL"')," in their configuration."))),(0,a.kt)("p",null,"Note that with the instruction above, other nodes connected to the boot node will stay in untrusted state for a while (3 days by default), and untrusted nodes will not be broadcast in our discovery protocol. Thus, the network structure will be a star with the boot node in the center before other nodes are promoted to trusted state. You can change ",(0,a.kt)("inlineCode",{parentName:"p"},"node_table_promotion_timeout_s")," in the configurations to make this period shorter."),(0,a.kt)("h2",{id:"setting-multiple-bootnodes"},"Setting Multiple Bootnodes"),(0,a.kt)("p",null,"You can also setup multiple bootnodes at the very beginning. However, this cannot be done by simply replaying the boot node setup steps above multiple times, because you need to set ",(0,a.kt)("inlineCode",{parentName:"p"},"bootnodes")," of every boot node before they are started."),(0,a.kt)("p",null,"One way to achieve this is to start these bootnodes and stop them immediately. Then gather their node ids, set their configuration, and restart them all."),(0,a.kt)("p",null,"Another better way is to generate their private keys seperately, and manually set their ",(0,a.kt)("inlineCode",{parentName:"p"},"net_key")," to start. This can be done with the functions provided in our python test framework in the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"from conflux.utils import *\n\nnum_of_bootnodes=10\nfor _ in range(num_of_bootnodes):\n    pri_key, pub_key = ec_random_keys()\n    node_id = encode_hex(encode_int32(pub_key[0]) + encode_int32(pub_key[1]))\n    print(encode_hex(pri_key), node_id)\n")),(0,a.kt)("p",null,"Then you can construct the bootnode url with the generated node id, and start each node by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},'net_key="$NET_KEY"')," field to the private key or pass it with the command line option ",(0,a.kt)("inlineCode",{parentName:"p"},"--net-key $NET_KEY"),"."),(0,a.kt)("h2",{id:"setting-genesis-accounts"},"Setting Genesis Accounts"),(0,a.kt)("p",null,"In a production environment, you can initialize the initial genesis state with your accounts by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"genesis_accounts")," to an account file with formats like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'0f947e34fc907008968ec99baa1dbb677b927531="1000000000000"\nab4a32bca7500d94a2cc1f3150e12686c692c590="1000000000000"\n')),(0,a.kt)("p",null,"Every line is an account. The key is the account address, and the value is a string representing its balance in Drip. Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"genesis_accounts")," does not apply if ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"dev"),"."),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"dev"),", you can setup the genesis accounts with their secret keys by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"genesis_secrets"),". Each line is an account private key without 0x-prefix. The balance of each account is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"10000000000000000000000")," by default."))}c.isMDXComponent=!0}}]);