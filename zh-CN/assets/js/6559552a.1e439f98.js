"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6897],{96762:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=i(85893),s=i(11151);const o={sidebar_position:5,title:"Run a PoS Node on AWS",displayed_sidebar:"generalSidebar"},l=void 0,a={id:"general/mine-stake/stake/run-pos-node-on-aws",title:"Run a PoS Node on AWS",description:"This tutorial will help you set up a Conflux node on AWS.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/mine-stake/stake/run-pos-node-on-aws.md",sourceDirName:"general/mine-stake/stake",slug:"/general/mine-stake/stake/run-pos-node-on-aws",permalink:"/zh-CN/docs/general/mine-stake/stake/run-pos-node-on-aws",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Run a PoS Node on AWS",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u8fd0\u884c PoS \u8d28\u62bc\u6c60",permalink:"/zh-CN/docs/general/mine-stake/stake/running-staking-pool"},next:{title:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",permalink:"/zh-CN/docs/general/mine-stake/stake/faqs"}},r={},c=[{value:"Setting up an AWS Instance",id:"setting-up-an-aws-instance",level:2},{value:"Logging in to the EC2 Instance",id:"logging-in-to-the-ec2-instance",level:2},{value:"First Steps on the Server",id:"first-steps-on-the-server",level:2},{value:"Setting Up Your Conflux Node",id:"setting-up-your-conflux-node",level:2},{value:"Installing &amp; Configuring the Conflux Client",id:"installing--configuring-the-conflux-client",level:2},{value:"Running the Conflux Client and Syncing the Node",id:"running-the-conflux-client-and-syncing-the-node",level:2}];function d(n){const e={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"This tutorial will help you set up a Conflux node on AWS."}),"\n",(0,t.jsx)(e.h2,{id:"setting-up-an-aws-instance",children:"Setting up an AWS Instance"}),"\n",(0,t.jsx)(e.p,{children:"In this section, you\u2019ll configure and launch an AWS EC2 instance where your Conflux PoS staking pool will be hosted."}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Create an AWS account or log in your existing account."}),"\n",(0,t.jsx)(e.li,{children:"In AWS, go to Services > EC2 Management Console and launch a new EC2 instance."}),"\n",(0,t.jsx)(e.li,{children:"Click select on the Ubuntu Server 20.04 64-bit (x86) image. You can optionally use other Linux or Windows-based images, but we\u2019ll stick to this one in this tutorial."}),"\n",(0,t.jsx)(e.li,{children:"Select the t2.large instance type and click Next: Configure Instance Details."}),"\n",(0,t.jsx)(e.li,{children:"Leave the default Configure Instance Details parameters and click Next: Add Storage."}),"\n",(0,t.jsxs)(e.li,{children:["In Add Storage, set an image size of 1000 GiB and click Review and Launch. :::note",(0,t.jsx)(e.br,{}),"\n","You can resize this later to 400 GiB, but this will greatly speed up the node setup process.\n:::"]}),"\n",(0,t.jsx)(e.li,{children:"Review the instance details and click Launch."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"You have successfully created and launched an EC2 instance. Now let\u2019s log in to it from our local machine."}),"\n",(0,t.jsx)(e.h2,{id:"logging-in-to-the-ec2-instance",children:"Logging in to the EC2 Instance"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"In this section, you\u2019ll login to the EC2 instance for the first time."}),"\n",(0,t.jsx)(e.li,{children:"Once your instance is created, in the EC2 Management Console go to Network & Security > Key Pairs. If you already have an AWS key pair, you can skip to Step 6."}),"\n",(0,t.jsx)(e.li,{children:"In Key Pairs, click Create key pair."}),"\n",(0,t.jsx)(e.li,{children:"Create and download a key pair."}),"\n",(0,t.jsx)(e.li,{children:"In Create key pair, enter a name for your key pair (in this case, we\u2019ll enter the name conflux), then click create Create key pair."}),"\n",(0,t.jsx)(e.li,{children:"Download the newly-created key pair."}),"\n",(0,t.jsx)(e.li,{children:"In the EC2 Management Console, go to Instances > Instances."}),"\n",(0,t.jsx)(e.li,{children:"Go to your newly-created instance details by click its Instance ID."}),"\n",(0,t.jsx)(e.li,{children:"In the Instance summary, ensure that the instance state is \u201cRunning\u201d and copy its Public IPv4 address."}),"\n",(0,t.jsx)(e.li,{children:"Go to your local machine\u2019s terminal, and connect to your instance. You can do this by typing:"}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"You\u2019ll need to change your key pair file\u2019s permissions."})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"ssh -i <path to your key pair> ubuntu@<your machine's IP address or IPv4 DNS> \n"})}),"\n",(0,t.jsxs)(e.ol,{start:"11",children:["\n",(0,t.jsx)(e.li,{children:"Enter the password that you defined in your key pair."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"You have successfully logged in to your EC2 instance! Now let\u2019s log in to our instance and prepare the server."}),"\n",(0,t.jsx)(e.h2,{id:"first-steps-on-the-server",children:"First Steps on the Server"}),"\n",(0,t.jsx)(e.p,{children:"Some of the recommended first steps are the following:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Upgrade currently installed applications."}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"sudo apt-get update\nsudo apt-get upgrade\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Adding a new dedicated user for your PoS node."}),"\n",(0,t.jsx)(e.li,{children:"Add your user to sudoers."}),"\n",(0,t.jsx)(e.li,{children:"Changing your server\u2019s hostname."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"None of these are essential steps, so you can skip them or save them for later."}),"\n",(0,t.jsx)(e.p,{children:"Now that you have done this initial set up on your server, let\u2019s move on and set up a Conflux node following the initial steps described on this guide."}),"\n",(0,t.jsx)(e.h2,{id:"setting-up-your-conflux-node",children:"Setting Up Your Conflux Node"}),"\n",(0,t.jsx)(e.p,{children:"In this section, you\u2019ll download, install, configure, run, synchronize your Conflux node."}),"\n",(0,t.jsx)(e.p,{children:"This will be, roughly, a two-step process:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Installing and configuring the Conflux client."}),"\n",(0,t.jsx)(e.li,{children:"Running the Conflux client and syncing the node."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"installing--configuring-the-conflux-client",children:"Installing & Configuring the Conflux Client"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Download the archive node snapshot. This will help us speed up the node synchronization process by downloading a recent snapshot of the chain."}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"The archivenode snapshot has a file size of around 200GB. Downloading it might take a few hours."})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"wget https://conflux-blockchain-data.oss-cn-beijing.aliyuncs.com/fullnode-db/M/download.sh\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Follow the instructions on downloading the Conflux client pre-built binaries ",(0,t.jsx)(e.a,{href:"../../run-a-node/advanced-topics/downloading-conflux-client",children:"here"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Extract the archive node snapshot to conflux-rust/run"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"tar -xvzf <archive-node-snapshot>.tar.gz conflux-rust/run \n"})}),"\n",(0,t.jsxs)(e.ol,{start:"4",children:["\n",(0,t.jsxs)(e.li,{children:["Follow the instructions on configuring and running a Conflux node ",(0,t.jsx)(e.a,{href:"../../run-a-node",children:"here"})]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"running-the-conflux-client-and-syncing-the-node",children:"Running the Conflux Client and Syncing the Node"}),"\n",(0,t.jsx)(e.p,{children:"In this process, we\u2019ll run a Conflux node. Once the node is running, it will first sync to the latest PoW block. Once this process is done it will then sync to the latest PoS block."}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Run the Conflux client."}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"cd run \n./conflux --config hydra.toml \n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:"Set a secure PoS encryption password."}),"\n",(0,t.jsx)(e.li,{children:"Wait for the PoS node to sync."}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"This step might take a few hours."})}),"\n",(0,t.jsx)(e.p,{children:"You have successfully installed, configured, and ran a fully-synched Conflux PoS node!"})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>a,a:()=>l});var t=i(67294);const s={},o=t.createContext(s);function l(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);