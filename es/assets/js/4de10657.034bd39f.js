"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2753],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=l.createContext({}),u=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=u(e.components);return l.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return t?l.createElement(h,r(r({ref:n},d),{},{components:t})):l.createElement(h,r({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,r[1]=i;for(var u=2;u<o;u++)r[u]=t[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2856:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var l=t(87462),a=(t(67294),t(3905));const o={sidebar_position:5,title:"Compiling the Conflux Client",displayed_sidebar:"generalSidebar"},r="Compiling the Conflux Client",i={unversionedId:"general/run-a-node/advanced-topics/compiling-conflux-client",id:"general/run-a-node/advanced-topics/compiling-conflux-client",title:"Compiling the Conflux Client",description:"Here is a step by step guide on how to build Conflux from the source code and get a node running.",source:"@site/docs/general/run-a-node/advanced-topics/compiling-conflux-client.md",sourceDirName:"general/run-a-node/advanced-topics",slug:"/general/run-a-node/advanced-topics/compiling-conflux-client",permalink:"/es/docs/general/run-a-node/advanced-topics/compiling-conflux-client",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Compiling the Conflux Client",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Downloading the Conflux Client",permalink:"/es/docs/general/run-a-node/advanced-topics/downloading-conflux-client"},next:{title:"Node Configuration",permalink:"/es/docs/general/run-a-node/advanced-topics/node-configuration"}},s={},u=[{value:"Install Build Dependencies",id:"install-build-dependencies",level:2},{value:"Linux",id:"linux",level:2},{value:"OSX",id:"osx",level:2},{value:"Windows",id:"windows",level:2},{value:"Build from Source Code",id:"build-from-source-code",level:2},{value:"Install Test Dependencies",id:"install-test-dependencies",level:2}],d={toc:u},p="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compiling-the-conflux-client"},"Compiling the Conflux Client"),(0,a.kt)("p",null,"Here is a step by step guide on how to build Conflux from the source code and get a node running."),(0,a.kt)("h2",{id:"install-build-dependencies"},"Install Build Dependencies"),(0,a.kt)("p",null,"Conflux requires ",(0,a.kt)("strong",{parentName:"p"},"Rust 1.62.0"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"clang"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"sqlite")," to build."),(0,a.kt)("p",null,"We recommend installing Rust through ",(0,a.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"rustup"),". If you don't already have ",(0,a.kt)("inlineCode",{parentName:"p"},"rustup")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"clang"),", you can install them like this:"),(0,a.kt)("h2",{id:"linux"},"Linux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n$ rustup install 1.62.0\n")),(0,a.kt)("p",null,"Other dependencies including ",(0,a.kt)("inlineCode",{parentName:"p"},"clang"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cmake (version >= 3.12)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sqlite (version >= 3.8.3)")," can be installed with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ubuntu 18.04:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# The latest cmake version on Ubuntu 18.04 is 3.10, so you'll need to install it from the Kitware repository.\n$ wget -O - https://apt.kitware.com/keys/kitware-archive-latest.asc 2>/dev/null | gpg --dearmor - | sudo tee /usr/share/keyrings/kitware-archive-keyring.gpg >/dev/null\n$ echo 'deb [signed-by=/usr/share/keyrings/kitware-archive-keyring.gpg] https://apt.kitware.com/ubuntu/ bionic main' | sudo tee /etc/apt/sources.list.d/kitware.list >/dev/null\n$ sudo apt-get update\n\n$ sudo apt-get install clang libsqlite3-dev pkg-config libssl-dev cmake\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CentOS 7 / RHEL:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo yum install epel-release\n$ sudo yum install clang gcc gcc-c++ openssl-devel cmake3 wget\n\n# This may fail if you have installed cmake with version 2.8.\n# You can choose to uninstall cmake first.\n$ sudo ln -s /usr/bin/cmake3 /usr/bin/cmake\n\n# The official sqlite version on CentOS 7 is 3.7.17, so we need to install the latest version from the source code.\n# The source code have be downloaded from https://www.sqlite.org/download.html\n$ wget https://www.sqlite.org/2020/sqlite-autoconf-3320100.tar.gz\n$ tar xfvz sqlite-autoconf-3320100.tar.gz\n$ cd sqlite-autoconf-3320100\n$ ./configure\n$ make\n$ sudo make install\n")),(0,a.kt)("h2",{id:"osx"},"OSX"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ curl https://sh.rustup.rs -sSf | sh\n$ rustup install 1.62.0\n")),(0,a.kt)("p",null,"You might need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"brew")," if you need to use it to install ",(0,a.kt)("inlineCode",{parentName:"p"},"clang"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"clang")," comes with Xcode command line tools, and can also be installed with homebrew:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ brew install llvm\n")),(0,a.kt)("p",null,"You also need to install other dependencies with homebrew and set up the environment variables as described after the installation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ brew install openssl pkg-config cmake\n")),(0,a.kt)("h2",{id:"windows"},"Windows"),(0,a.kt)("p",null,"Make sure you have Visual Studio 2015 with C++ support installed. Next, download and run the ",(0,a.kt)("inlineCode",{parentName:"p"},"rustup")," installer from ",(0,a.kt)("a",{parentName:"p",href:"https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe"},"this link"),", start ",(0,a.kt)("inlineCode",{parentName:"p"},"VS2015 x64 Native Tools Command Prompt"),", and use the following command to install and set up the ",(0,a.kt)("inlineCode",{parentName:"p"},"msvc")," toolchain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rustup default stable-x86_64-pc-windows-msvc\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"clang")," can be installed with LLVM. Pre-built binaries can be downloaded from ",(0,a.kt)("a",{parentName:"p",href:"https://releases.llvm.org/download.html#8.0.0"},"Download LLVM"),". Make sure to add LLVM to the system PATH as instructed."),(0,a.kt)("p",null,"Make sure that these binaries are in your ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," (the instruction will be shown after installing ",(0,a.kt)("inlineCode",{parentName:"p"},"rustup"),"). After that, you should be able to build Conflux from source."),(0,a.kt)("h2",{id:"build-from-source-code"},"Build from Source Code"),(0,a.kt)("p",null,"After installing the dependencies mentioned above, now you can clone our repository and start building the executable binary:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# download Conflux code\n$ git clone https://github.com/Conflux-Chain/conflux-rust\n$ cd conflux-rust\n$ git checkout v2.0.0\n\n\n# build in release mode\n$ cargo build --release\n")),(0,a.kt)("p",null,"This produces an executable in the ",(0,a.kt)("inlineCode",{parentName:"p"},"./target/release")," subdirectory."),(0,a.kt)("p",null,"Note, when compiling a crate and you receive errors, it's in most cases your outdated version of Rust, or some of your crates have to be recompiled. Cleaning the repository will most likely solve the issue if you are on the latest stable version of Rust, try:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ cargo clean && cargo update\n")),(0,a.kt)("p",null,"To start running a Conflux full node, you can follow the instructions at ",(0,a.kt)("a",{parentName:"p",href:"/es/docs/general/run-a-node/advanced-topics/running-full-node"},"Running Conflux Full Node"),"."),(0,a.kt)("h2",{id:"install-test-dependencies"},"Install Test Dependencies"),(0,a.kt)("p",null,"We have a test framework written in Python3 (version>=3.6). Required packages can be installed by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ./dev-support/dep_pip3.sh\n")),(0,a.kt)("p",null,"Solidity compiler ",(0,a.kt)("inlineCode",{parentName:"p"},"solc")," is also required, and be installed as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ubuntu")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo add-apt-repository ppa:ethereum/ethereum\n$ sudo apt-get update\n$ sudo apt-get install solc\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OSX")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ brew update\n$ brew upgrade\n$ brew tap ethereum/ethereum\n$ brew install solidity\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Others")),(0,a.kt)("p",null,"You can follow the detailed instructions at ",(0,a.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.5.7/installing-solidity.html#binary-packages"},"Installing the Solidity Compiler"),"."),(0,a.kt)("p",null,"Note that latest solidity compiler may be incompatible with Conflux and may cause the integration test to fail. If you encounter such problem, please install solidity compiler version 0.5.2."),(0,a.kt)("p",null,"To run tests, you can build the source code first and follow the instructions at ",(0,a.kt)("a",{parentName:"p",href:"/es/docs/general/run-a-node/advanced-topics/running-full-node#running-test"},"Running Test"),"."))}c.isMDXComponent=!0}}]);