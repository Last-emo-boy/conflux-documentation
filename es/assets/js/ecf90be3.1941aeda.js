"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8851],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=m;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4746:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=t(7462),o=(t(7294),t(4137));const l={sidebar_position:1,title:"Running a Mining Node",displayed_sidebar:"generalSidebar"},i=void 0,a={unversionedId:"general/mine-stake/mine/running-mining-node",id:"general/mine-stake/mine/running-mining-node",title:"Running a Mining Node",description:"Conflux Network PoW - GPU Mining Instruction",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/mine-stake/mine/running-mining-node.md",sourceDirName:"general/mine-stake/mine",slug:"/general/mine-stake/mine/running-mining-node",permalink:"/es/docs/general/mine-stake/mine/running-mining-node",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Running a Mining Node",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Mining & Staking",permalink:"/es/docs/category/mining--staking"},next:{title:"PoS Staking",permalink:"/es/docs/category/pos-staking"}},u={},s=[{value:"Conflux Network PoW - GPU Mining Instruction",id:"conflux-network-pow---gpu-mining-instruction",level:2},{value:"Downloading the latest version",id:"downloading-the-latest-version",level:2},{value:"Windows Testing Instruction",id:"windows-testing-instruction",level:2},{value:"Run Files",id:"run-files",level:2},{value:"Prepare to Run conflux",id:"prepare-to-run-conflux",level:2},{value:"Configuration Instructions",id:"configuration-instructions",level:2},{value:"Run GPU Mining Program",id:"run-gpu-mining-program",level:2},{value:"Testing Instruction for Linux",id:"testing-instruction-for-linux",level:2},{value:"Prepare to Run conflux",id:"prepare-to-run-conflux-1",level:2},{value:"Configuration Instructions",id:"configuration-instructions-1",level:2},{value:"Run GPU Mining Program",id:"run-gpu-mining-program-1",level:2},{value:"Tips:",id:"tips",level:2}],c={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"conflux-network-pow---gpu-mining-instruction"},"Conflux Network PoW - GPU Mining Instruction"),(0,o.kt)("p",null,"Network: Conflux Hydra"),(0,o.kt)("p",null,"Version: v2.2.1-fixpos"),(0,o.kt)("p",null,"Graphics: Card Type NVIDIA GPU"),(0,o.kt)("p",null,"Graphics Memory: 8G or more"),(0,o.kt)("p",null,"Install NVIDIA Drivers: ",(0,o.kt)("a",{parentName:"p",href:"https://www.nvidia.cn/Download/index.aspx?lang=cn"},"Download")),(0,o.kt)("h2",{id:"downloading-the-latest-version"},"Downloading the latest version"),(0,o.kt)("p",null,"For downloading the latest version of the software, please refer to: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/releases"},"https://github.com/Conflux-Chain/conflux-rust/releases")),(0,o.kt)("h2",{id:"windows-testing-instruction"},"Windows Testing Instruction"),(0,o.kt)("p",null,"Notes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It is recommended to turn off antivirus softwares."),(0,o.kt)("li",{parentName:"ol"},"Win 10, version 1903 and above.")),(0,o.kt)("h2",{id:"run-files"},"Run Files"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"}," cfxmine.win.zip: mining program:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/open-cfxmine/releases"},"Click to see Conflux PoW mining algorithm")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"}," conflux_v2.2.1-fixpos.zip: Fullnode program:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/conflux-rust/releases"},"Click to see fullnode program"))),(0,o.kt)("h2",{id:"prepare-to-run-conflux"},"Prepare to Run conflux"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a directory named \u201cconflux\u201d"),(0,o.kt)("li",{parentName:"ol"},"Extract the download package to the directory"),(0,o.kt)("li",{parentName:"ol"},"Download the pos_config package and move the decompressed folder to the run directory")),(0,o.kt)("p",null,"\u26a0\ufe0f The directory structure should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"conflux\n\u2514\u2500\u2500 run\n    \u2514\u2500\u2500 pos_config\n    \u2514\u2500\u2500 conflux.exe\n    \u2514\u2500\u2500 conflux.pdb\n    \u2514\u2500\u2500 hydra.toml\n    \u2514\u2500\u2500 log.yaml\n    \u2514\u2500\u2500 clear_state.bat\n    \u2514\u2500\u2500 clear_state.sh\n    \u2514\u2500\u2500 libcrypto-1_1-x64.dll\n    \u2514\u2500\u2500 libssl-1_1-x64.dll\n    \u2514\u2500\u2500 start.bat\n    \u2514\u2500\u2500 start.sh\n    \u2514\u2500\u2500 throttling.toml\n")),(0,o.kt)("p",null,"Note: the previous tethys.toml has changed to hydra.toml."),(0,o.kt)("h2",{id:"configuration-instructions"},"Configuration Instructions"),(0,o.kt)("p",null,"If you only run the PoS node, no modification is required here; If you plan to run the GPU mining software, you need to edit hydra.toml file in order to set up the configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# mining_author="cfx:xxxxxxxxxx..."\n')),(0,o.kt)("p",null,"Please change the \u201ccfx:xxxx\u2026\u201d to your own wallet address, and then delete \u201c#\u201d before \u201cmining_author\u2026\u201d"),(0,o.kt)("h2",{id:"run-gpu-mining-program"},"Run GPU Mining Program"),(0,o.kt)("p",null,"Conflux GPU Mining Program ",(0,o.kt)("strong",{parentName:"p"},"cfxmine")," needs to run with the Conflux node program. Follow the steps below to start:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the directory of the ",(0,o.kt)("strong",{parentName:"li"},"run")," executable file in cmd, and start the fullnode:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd conflux\\run\nconflux --config hydra.toml --full 2>stderr.txt\n")),(0,o.kt)("p",null,"Then you can start mining."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the cfxmine executable file in cmd, and start the Conflux GPU Mining Program:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd conflux\ncfxmine --gpu 1\n")),(0,o.kt)("p",null,"Note: The GPU command line is executed after the fullnode synchronization is completed."),(0,o.kt)("h2",{id:"testing-instruction-for-linux"},"Testing Instruction for Linux"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Run Files")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cfxmine.linux.gz:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/open-cfxmine/releases"},"Mining ProgramClick to see Conflux PoW Mining Algorithm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"conflux_linux_v2.2.1-fixpos:")," ","[","Fullnode ProgramClick to see fullnode Program","]"," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/conflux-rust/releases"},"https://github.com/Conflux-Chain/conflux-rust/releases"),")"),(0,o.kt)("li",{parentName:"ul"},"\uff08Differences from the previous version: the default.toml in the mainnet release will be renamed as tethys.toml, and in the testnet it will be testnet.toml.\uff09")),(0,o.kt)("h2",{id:"prepare-to-run-conflux-1"},"Prepare to Run conflux"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a directory named \u201cconflux\u201d"),(0,o.kt)("li",{parentName:"ol"},"Extract the download package to the directory"),(0,o.kt)("li",{parentName:"ol"},"Download the pos_config package and move the decompressed folder to the run directory")),(0,o.kt)("p",null,"\u26a0\ufe0f The directory structure should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"conflux\n\u2514\u2500\u2500 run\n    \u2514\u2500\u2500 pos_config\n    \u2514\u2500\u2500 conflux.exe\n    \u2514\u2500\u2500 conflux.pdb\n    \u2514\u2500\u2500 hydra.toml\n    \u2514\u2500\u2500 log.yaml\n    \u2514\u2500\u2500 clear_state.bat\n    \u2514\u2500\u2500 clear_state.sh\n    \u2514\u2500\u2500 libcrypto-1_1-x64.dll\n    \u2514\u2500\u2500 libssl-1_1-x64.dll\n    \u2514\u2500\u2500 start.bat\n    \u2514\u2500\u2500 start.sh\n    \u2514\u2500\u2500 throttling.toml\n")),(0,o.kt)("p",null,"Note: the previous tethys.toml has changed to hydra.toml."),(0,o.kt)("h2",{id:"configuration-instructions-1"},"Configuration Instructions"),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"run/hydra.toml")," file with a text editor and configure mining related parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# mining_author="cfx:xxxxxxxxxx..."\n')),(0,o.kt)("p",null,"Please change the \u201ccfx:xxxx\u2026\u201d to your own wallet address, and then delete \u201c#\u201d before \u201cmining_author\u2026\u201d"),(0,o.kt)("h2",{id:"run-gpu-mining-program-1"},"Run GPU Mining Program"),(0,o.kt)("p",null,"Conflux GPU Mining Program ",(0,o.kt)("strong",{parentName:"p"},"cfxmine")," needs to run with the Conflux node program. Follow the steps below to start:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"bash")," (or any POSIX compliant Shell), start the fullnode:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd conflux/run\n./conflux --config hydra.toml --full 2>stderr.txt\n")),(0,o.kt)("p",null,"Then you can start mining."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the directory of the cfxmine executable file in bash (or any POSIX compliant Shell), and start the Conflux GPU miningprogram:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd conflux\n./cfxmine --gpu 1\n")),(0,o.kt)("p",null,"Note: The GPU command line is executed after the fullnode synchronization is completed"),(0,o.kt)("h2",{id:"tips"},"Tips:"),(0,o.kt)("p",null,"If the Conflux node program and ",(0,o.kt)("strong",{parentName:"p"},"cfxmine")," are not on the same computer, you can specify the IP address and the port (the default is 32525) of the remote Conflux node program when starting cfxmine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./cfxmine --gpu --addr A.B.C.D\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./cfxmine --gpu --addr A.B.C.D --port xxxx\n")),(0,o.kt)("p",null,"If you want to designate remote node, you need to change the configuration of the node into: stratum_listen_address=\u201c0.0.0.0\u201d\uff0cand delete #"),(0,o.kt)("p",null,"Note: The GPU command line is executed after the fullnode synchronization is completed."))}d.isMDXComponent=!0}}]);