"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1050],{92625:(e,c,a)=>{a.r(c),a.d(c,{assets:()=>t,contentTitle:()=>n,default:()=>s,frontMatter:()=>b,metadata:()=>o,toc:()=>i});var d=a(85893),f=a(11151);const b={sidebar_position:9,title:"\u5b98\u65b9\u542f\u52a8\u8282\u70b9\u5217\u8868",displayed_sidebar:"generalSidebar"},n=void 0,o={id:"general/run-a-node/advanced-topics/official-bootnodes",title:"\u5b98\u65b9\u542f\u52a8\u8282\u70b9\u5217\u8868",description:"Bootnodes\u662f\u4e00\u7ec4Conflux\u8282\u70b9\u7684\u5217\u8868\uff0c\u8fd9\u4e9b\u8282\u70b9\u662f\u53ef\u4fe1\u7684\uff0c\u5f53\u8282\u70b9\u542f\u52a8\u65f6\u4f1a\u7528\u4e8e\u540c\u6b65\u533a\u5757\u94fe\u3002 The value is a string divided by comma without space, and every entry is a node A node is identified by cfxnodePORT. \u8fd9\u91cc\u63d0\u4f9b\u7684\u662f Conflux \u56e2\u961f\u5728\u4e16\u754c\u8303\u56f4\u5185\u7ef4\u62a4\u7684\u8282\u70b9\u5217\u8868\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/run-a-node/advanced-topics/official-bootnodes.md",sourceDirName:"general/run-a-node/advanced-topics",slug:"/general/run-a-node/advanced-topics/official-bootnodes",permalink:"/zh-CN/docs/general/run-a-node/advanced-topics/official-bootnodes",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"\u5b98\u65b9\u542f\u52a8\u8282\u70b9\u5217\u8868",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u547d\u4ee4\u884c\u53ef\u7528\u547d\u4ee4",permalink:"/zh-CN/docs/general/run-a-node/advanced-topics/cli_sub_commands"},next:{title:"\u8fd0\u884c\u8f7b\u8282\u70b9",permalink:"/zh-CN/docs/general/run-a-node/advanced-topics/running-light-node"}},t={},i=[];function r(e){const c={code:"code",p:"p",pre:"pre",...(0,f.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(c.p,{children:["Bootnodes\u662f\u4e00\u7ec4Conflux\u8282\u70b9\u7684\u5217\u8868\uff0c\u8fd9\u4e9b\u8282\u70b9\u662f\u53ef\u4fe1\u7684\uff0c\u5f53\u8282\u70b9\u542f\u52a8\u65f6\u4f1a\u7528\u4e8e\u540c\u6b65\u533a\u5757\u94fe\u3002 The value is a string divided by comma without space, and every entry is a node A node is identified by ",(0,d.jsx)(c.code,{children:"cfxnode://NODEID@PUBLICIP:PORT"}),". \u8fd9\u91cc\u63d0\u4f9b\u7684\u662f Conflux \u56e2\u961f\u5728\u4e16\u754c\u8303\u56f4\u5185\u7ef4\u62a4\u7684\u8282\u70b9\u5217\u8868\u3002"]}),"\n",(0,d.jsx)(c.pre,{children:(0,d.jsx)(c.code,{children:'bootnodes="\ncfxnode://dc79bc70833e797ba41eff5bda67c0484abca4918ef38289b5f96acd3daa890eadc85d46fc71f250a8ac51b0c4ab70b3812b1ed3c8f10a9e996b6663be34f1f1@47.88.79.174:32323,\ncfxnode://25265e1aa470d9d8667947820c4830a64e9f9678d6cb23ecde91e0447527f4926257b9637923a305ce91e15c929ed28164e6c32b76213764eb4a9624120ae1d7@39.97.180.246:32323,\ncfxnode://2b72adc3f52a80945db10fa35c3f6d02c73f65ff98b4a9eae4f7b244e8a51f01690e7dcef7a30bfb67fb07fcb2949e67c27487169623d40f6a9e55a8d04ca34f@39.107.143.220:32323,\ncfxnode://5da942ac58e392e9f68784876a1800ffe5756f8498aa1a7a9a869fe9370c2e838a114dfce33fff9674633700a0094aed8b46722fb6b03619842602a2473223de@39.97.170.199:32323,\ncfxnode://28d3cdf07b7deb41bb52dee0a952fc599f46f6b89cc513ecfd1020d5a66e73e7cfe68543e64962aefbcae7123a6c390a43144f5900f0bc181c3c89ffdf9ff81b@39.97.225.254:32323,\ncfxnode://f94343e4c806b2968c5e4bf4cbc49736d04af03fab4b797bc11aea2af2cb23d706d1d9c5dfae430a2df1d7fe6a6a988aff43c50898dc087161e51fa69d603997@13.69.186.42:32323,\ncfxnode://012d0f7e59f62220e2a90e458cf0d65e5690d09dad59ce05f03f5878a7142bef9f412decdbefa7716e8331e94d68f05c2ce943db4ffa5440e496f2130d3feb50@23.96.108.96:32323,\ncfxnode://7e2e4918d3aff819afdb8782c13544ea63193d82d9529dfbab3efb101754b322fc161c771a784e1b0420da8f78dbb127fbac24d1d626b634b462542ad8953bd7@52.231.28.50:32323,\ncfxnode://8949669b26e015acd6c3e1ba5f87e2a7242a8611eec224428d5553005e45b4c6b2e352721be6334a445340441c8d6f8dfeab20472fbb0ce9733c293f0c1c781c@13.67.73.51:32323,\ncfxnode://49ff58db6b4c5f92c2145e69ea0625134cbe35885f0e5979191ba9c67e4c9374234ed7fbeb65f82d4d197568110a4f100f078bfbac896f391b362bec77be19ea@39.103.68.228:32323,\ncfxnode://97497107e94ac463f6bad526d74e0058d46154e97cbf758edaf3d360e2f3347ae5946ca337eb0d201df8f625e7ae5bfc32e8394d2ce37bd2dc35fa5a4bcecd01@8.131.69.64:32323,\ncfxnode://c22ad0736f5cc2cc3b11ce5f43345213c2e44994dfaa5e3b0cebe8bd9c78cc52e1a22949ff5953aea80476f648e42b502172e04629c172f4400a0af4caf97efb@8.131.68.192:32323,\ncfxnode://04cee414977f68a0c2f0215199dde4ec1c27350e447ea855ce000054336f4ccb1c43f0c5ebe8172ad51c7d7b88ac98c037a85ae949e79734449ac38a23fd1d60@106.14.64.36:32323,\ncfxnode://f1750b818c5828fc5f22667f4b45d4a39b17a1cf40f71ae8f74b6195485a93bf16892a3785bda36132ebae64b83b91b216eaccb7a02185a01f37c7ad89c513ad@101.132.133.254:32323,\ncfxnode://72a21ec3d2d7c5545b4a46656eaca6ab4ec3ac85628f665bd205e7c52273d345d1583efface277b967fca963a81fbf8b7a81ae97f0a46234cd5fb34853c95fd2@47.101.39.91:32323,\ncfxnode://b7aeba1f1b2b3e5dfdc7ac93df4281a440ccbdc89894444e094f15242ffa1578d90f9fd447b899be89a57542616e26a82180bd2bfb3b81f82a4dffdfe180f44e@8.210.110.149:32323,\ncfxnode://07faaf8be8bff4243b496363fb02bd0a21be97e291febcd9aabb29996de90d0a10065f3383beff09f05cb0bdfaa9655d90550c8abcbf97be0658ce6efd8f9b64@47.254.67.249:32323,\ncfxnode://b77e95cb41cae81dd82a29a07b776549ff37d93954b46214aa32036280c412cefee57350f3e1a4e9db21785ee5a4370961a55a856f7fcb664e511f2fb17f7881@35.171.101.208:32323,\ncfxnode://0f69308d246238e5a5a91769ab1757962e787bbdbf2c478a60cb6aed1cee8c57045d0402cdea5ee0227a884e92d72ede7742c6a3ac6f2eeb283e68ceb9503a7f@52.52.5.142:32323,\ncfxnode://deb45647edf5b918f813dfc5e678570026e8a25ecc48a72f45d09f8d7b579af51d783c8e639a40304c07776f162b012603c2b14577ad77ccffdac273e16cb7d1@54.71.187.184:32323,\ncfxnode://cac5aed8c474dab7815d53a8c16434893d750455341252590e09353608106a6bc47c5e78409a47f740ca2c88be83140a660d20ceb665e8e6dd8d5ce57851a891@54.94.4.66:32323,\ncfxnode://e5189aed19303ee171be0a8cc206324fd7a5fe4a2a52a02aba5d869a01ba6a7865e6aeeab32db97b9bbd216e7b7ebc72bb1aed53df659cf13142a65c13cd3dd9@15.184.179.185:32323,\ncfxnode://70dba74973f9deac76fb6e3987c07f434d8d162cb3f5ae9db4aa717caf02c6f5c5fefac4e21b01635a697127ef9333465eeb5e2f3a539ffbcba786875c075433@18.132.169.41:32323,\ncfxnode://be27a2f6f4b06919ecc76fa1263b5beb067a1011746371747786ec1c75e1186254f26d7209ac3b7185109db208fcb098032f1d616cb93227bec750226f246f45@13.51.0.234:32323,\ncfxnode://838ee636dd6ebd18cbc50eb1448dc41b54fb9e7c2de679f2b119ef52df60fa23797d9cba41111c1431693b29aba9a3351c8ae29d3691ddb8261d677d7e1b7cd8@18.158.251.2:32323,\ncfxnode://b69865a15548528c3734f581294a022dc8f3c8a14e2d1fe82f5cbce63906316c5af321990c984c9ebe2c990b77d7991d389645d278e31e86c64a32b1f41f3a9a@18.136.130.20:32323,\ncfxnode://e7f13b08d8bd80cf62dff22bd57d423bade2aa8a87c7c5ad7332ccd57d7c642956a3dae898a9d56c3542200de1b696689f1105132196916cd5c82cf3e5a5c2a0@3.114.73.12:32323,\ncfxnode://4c19a0e862b6884cd0f9a85612f9778b7aee42103752a1e3beb67d450aac94645b72a8cb452bb6d997b78f83243c2df769d528bdec547ae512f916a8a5fac5d1@35.72.61.150:32323,\ncfxnode://c65a039e657bfe5ec6005feca4450a705f43cd36656ae45033d68425edc8c002983a9ec941e6eb2529580888fa7348934ccc9a5396c2fe3d0d5036ed4e806efd@3.37.149.79:32323,\ncfxnode://6d6d9c474f792bcb7fa68ec04e81831e9cb18407a3b3b37b9140e32f94403b820193920a281c97875717c01c3827429ee3eefef30dc0c65b1436228d065e8179@18.163.95.162:32323\n"\n'})})]})}function s(e={}){const{wrapper:c}={...(0,f.a)(),...e.components};return c?(0,d.jsx)(c,{...e,children:(0,d.jsx)(r,{...e})}):r(e)}},11151:(e,c,a)=>{a.d(c,{Z:()=>o,a:()=>n});var d=a(67294);const f={},b=d.createContext(f);function n(e){const c=d.useContext(b);return d.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function o(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(f):e.components||f:n(e.components),d.createElement(b.Provider,{value:c},e.children)}}}]);