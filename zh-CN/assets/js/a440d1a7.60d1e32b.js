"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1206],{58531:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var c=t(85893),o=t(11151);const s={sidebar_position:3,title:"Staking",displayed_sidebar:"coreSidebar"},r=void 0,i={id:"core/core-space-basics/internal-contracts/staking",title:"Staking",description:"\u6982\u89c8",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/core-space-basics/internal-contracts/staking.md",sourceDirName:"core/core-space-basics/internal-contracts",slug:"/core/core-space-basics/internal-contracts/staking",permalink:"/zh-CN/docs/core/core-space-basics/internal-contracts/staking",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Staking",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"SponsorWhitelistControl",permalink:"/zh-CN/docs/core/core-space-basics/internal-contracts/sponsor-whitelist-control"},next:{title:"ConfluxContext",permalink:"/zh-CN/docs/core/core-space-basics/internal-contracts/conflux-context"}},a={},l=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"Deposit and Withdraw",id:"deposit-and-withdraw",level:2},{value:"Locking and Vote Power",id:"locking-and-vote-power",level:2},{value:"Interface",id:"interface",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u6982\u89c8",children:"\u6982\u89c8"}),"\n",(0,c.jsx)(e.p,{children:"Conflux \u5f15\u5165\u4e86\u8d28\u62bc\u673a\u5236\uff0c\u6709\u4e24\u4e2a\u539f\u56e0\uff1a\u7b2c\u4e00\uff0c\u8d28\u62bc\u673a\u5236\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u597d\u7684\u65b9\u5f0f\u6765\u6536\u53d6\u5b58\u50a8\u7a7a\u95f4\u7684\u5360\u7528\u8d39\u7528\uff08\u4e0e\u201c\u4e00\u6b21\u4ed8\u8d39\uff0c\u6c38\u4e45\u5360\u7528\u201d\u76f8\u6bd4\uff09\uff1b\u7b2c\u4e8c\uff0c\u8fd9\u79cd\u673a\u5236\u4e5f\u6709\u52a9\u4e8e\u5728\u53bb\u4e2d\u5fc3\u5316\u6cbb\u7406\u4e2d\u5b9a\u4e49\u6295\u7968\u6743\u3002"}),"\n",(0,c.jsxs)(e.p,{children:["\u4ece\u9ad8\u5c42\u6b21\u6765\u770b\uff0cConflux \u5b9e\u73b0\u4e86\u4e00\u4e2a\u5185\u7f6e\u7684",(0,c.jsx)(e.strong,{children:"Staking"}),"\u5408\u7ea6\uff0c\u7528\u4e8e\u8bb0\u5f55\u6240\u6709\u8d26\u6237\u7684\u8d28\u62bc\u4fe1\u606f\uff0c\u5305\u62ec\u666e\u901a\u5730\u5740\u548c\u667a\u80fd\u5408\u7ea6\u3002 \u901a\u8fc7\u5411\u8fd9\u4e2a\u5408\u7ea6\u53d1\u9001\u4ea4\u6613\uff0c\u7528\u6237\uff08\u5305\u62ec\u5916\u90e8\u7528\u6237\u548c\u667a\u80fd\u5408\u7ea6\uff09\u53ef\u4ee5\u5b58\u5165/\u53d6\u51fa\u8d44\u91d1\uff0c\u8fd9\u4e5f\u88ab\u79f0\u4e3a\u5728\u5408\u7ea6\u4e2d\u7684\u8d28\u62bc\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"deposit-and-withdraw",children:"Deposit and Withdraw"}),"\n",(0,c.jsxs)(e.p,{children:["\u7528\u6237\uff08\u6216\u5408\u7ea6\uff09\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",(0,c.jsx)(e.code,{children:"deposit(uint amount)"})," \u6765\u5b58\u5165\u4f59\u989d\u8fdb\u884c\u8d28\u62bc\uff0c\u7136\u540e ",(0,c.jsx)(e.code,{children:"amount"})," Drip \u5c06\u4ece\u5176",(0,c.jsx)(e.code,{children:"balance"}),"\u8f6c\u79fb\u5230 ",(0,c.jsx)(e.code,{children:"stakingBalance"}),"\u3002 Notice that this function is non-payable, the user only needs to specify the amount to be staked without transferring any funds to internal contract and the ",(0,c.jsx)(e.strong,{children:"minimum deposit amount is 1 CFX"}),"."]}),"\n",(0,c.jsxs)(e.p,{children:["\u7528\u6237\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(e.code,{children:"withdraw(uint amount) "}),"\u6765\u63d0\u53d6\u4f59\u989d\u3002 \u8c03\u7528\u8005\u53ef\u4ee5\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u4ece Staking \u5408\u7ea6\u4e2d\u63d0\u53d6\u4e00\u4e9b\u4ee3\u5e01\u3002 \u8d28\u62bc\u672c\u91d1\u5c06\u53ca\u65f6\u8f6c\u79fb\u5230\u7528\u6237\u7684\u4f59\u989d\u4e2d\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"locking-and-vote-power",children:"Locking and Vote Power"}),"\n",(0,c.jsxs)(e.p,{children:["\u901a\u8fc7\u9501\u5b9a\u8d28\u62bc\u4f59\u989d\uff08stakingBalance\uff09\uff0c\u7528\u6237\u53ef\u4ee5\u83b7\u5f97",(0,c.jsx)(e.em,{children:"\u6295\u7968\u6743"}),"\uff0c\u8fdb\u800c\u8fdb\u884c\u94fe\u4e0a\u6cbb\u7406\u3002 With function ",(0,c.jsx)(e.code,{children:"voteLock(uint amount, uint unlock_block_number)"}),', the account makes a promise that "My ',(0,c.jsx)(e.code,{children:"stakingBalance"})," will always have at least ",(0,c.jsx)(e.code,{children:"amount"})," Drip before the block with block number ",(0,c.jsx)(e.code,{children:"unlock_block_number"}),'". \u8d26\u6237\u53ef\u4ee5\u505a\u51fa\u591a\u4e2a\u627f\u8bfa\uff0c\u6bd4\u5982\u201c\u6211\u4eca\u5e74\u603b\u662f\u81f3\u5c11\u6709 10 CFX\uff0c\u660e\u5e74\u603b\u662f\u81f3\u5c11\u6709 5 CFX\u3002\u201d  **\u4e00\u65e6\u505a\u51fa\u4e86\u627f\u8bfa\uff0c\u5c31\u6ca1\u6709\u529e\u6cd5\u53d6\u6d88\u5b83\uff01**\u4f46\u662f\u8d26\u6237\u53ef\u4ee5\u901a\u8fc7\u9501\u5b9a\u66f4\u591a\u7684\u4f59\u989d\u6765\u8986\u76d6\u65e7\u7684\u627f\u8bfa\u3002 \u6bcf\u5f53\u8d26\u6237\u8bd5\u56fe\u63d0\u53d6 ',(0,c.jsx)(e.code,{children:"stakingBalance"})," \u65f6\uff0c\u5185\u90e8\u5408\u7ea6\u5c06\u68c0\u67e5\u5269\u4f59\u7684\u4f59\u989d\u662f\u5426\u7b26\u5408\u9501\u5b9a\u7684\u627f\u8bfa\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u901a\u8fc7\u4e3e\u51e0\u4e2a\u4f8b\u5b50\u6765\u4ecb\u7ecd\u9501\u5b9a\u4f59\u989d\u7684\u8be6\u7ec6\u903b\u8f91\u3002 \u5047\u8bbe\u5f53\u524d\u7684\u533a\u5757\u53f7\u662f ",(0,c.jsx)(e.code,{children:"base"}),"\uff0cConflux \u5728\u4eca\u5e74\u5269\u4f59\u7684\u65f6\u95f4\u5185\u5927\u7ea6\u4f1a\u751f\u6210 ",(0,c.jsx)(e.code,{children:"x"})," \u4e2a\u533a\u5757\uff0c\u5728\u660e\u5e74\u4f1a\u751f\u6210 ",(0,c.jsx)(e.code,{children:"y"})," \u4e2a\u533a\u5757\u3002 \u7531\u4e8e Conflux \u6bcf\u79d2\u751f\u6210\u4e24\u4e2a\u533a\u5757\uff0c",(0,c.jsx)(e.code,{children:"y"})," \u5927\u7ea6\u7b49\u4e8e ",(0,c.jsx)(e.code,{children:"2 * 60 * 60 * 24 * 365"}),". \u800c ",(0,c.jsx)(e.code,{children:"x"})," \u7684\u503c\u53d6\u51b3\u4e8e\u4f60\u9605\u8bfb\u8fd9\u7bc7\u6587\u7ae0\u7684\u65f6\u95f4\u3002"]}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsxs)(e.li,{children:["\u5982\u679c\u4e00\u4e2a\u8d26\u6237\u5728 ",(0,c.jsx)(e.code,{children:"stakingBalance"})," \u4e2d\u6709 10 CFX\uff0c\u5e76\u4e14\u5b83\u8c03\u7528\u4e86 ",(0,c.jsx)(e.code,{children:"voteLock(100 * 10^18, base + x)"}),"\uff0c\u90a3\u4e48\u4ea4\u6613\u5c06\u5931\u8d25\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u8d26\u6237\u8bd5\u56fe\u7528\u4e0d\u8db3\u7684 ",(0,c.jsx)(e.code,{children:"stakingBalance"})," \u9501\u5b9a 100 CFX\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:["\u7136\u800c\uff0c\u5982\u679c\u8fd9\u4e2a\u8d26\u6237\u8c03\u7528\u4e86 ",(0,c.jsx)(e.code,{children:"voteLock(8 * 10^18, base + x)"}),"\uff0c\u90a3\u4e48\u4ea4\u6613\u5c06\u6210\u529f\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:["\u5728\u6b64\u4e4b\u540e\uff0c\u5982\u679c\u8fd9\u4e2a\u8d26\u6237\u8c03\u7528\u4e86 ",(0,c.jsx)(e.code,{children:"voteLock(6 * 10^18, base + x + y)"}),"\uff0c\u90a3\u4e48\u4ea4\u6613\u4e5f\u5c06\u6210\u529f\u3002 \u8fd9\u610f\u5473\u7740 8 - 6 = 2 CFX \u5c06\u5728\u4eca\u5e74\u5e74\u5e95\u89e3\u9501\uff0c\u53e6\u5916 6 CFX \u5c06\u5728\u660e\u5e74\u5e74\u5e95\u89e3\u9501\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:["\u7136\u540e\uff0c\u5982\u679c\u8fd9\u4e2a\u8d26\u6237\u8c03\u7528\u4e86 ",(0,c.jsx)(e.code,{children:"voteLock(0, base + x)"}),"\uff0c\u4ec0\u4e48\u4e5f\u4e0d\u4f1a\u53d1\u751f\u3002 \u4ea4\u6613\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u89e6\u53d1\u9519\u8bef\u3002 \u5185\u7f6e\u5408\u7ea6\u5c06\u628a\u8fd9\u4e2a\u8c03\u7528\u89c6\u4e3a\u4e00\u4e2a\u65e0\u610f\u4e49\u7684\u627f\u8bfa\uff1a\u8d26\u6237\u5c06\u81f3\u5c11\u8d28\u62bc 0 CFX\u3002 \u7b2c 2 \u6b65\u548c\u7b2c 3 \u6b65\u505a\u51fa\u7684\u65e7\u627f\u8bfa\u4ecd\u7136\u6709\u6548\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:["\u5982\u679c\u8fd9\u4e2a\u8d26\u6237\u8c03\u7528\u4e86 ",(0,c.jsx)(e.code,{children:"voteLock(9 * 10^18, base + x + y)"}),"\uff0c\u90a3\u4e48\u65e7\u7684\u4e24\u4e2a\u627f\u8bfa\u5c06\u88ab\u8986\u76d6\uff0c\u56e0\u4e3a\u201c\u5728\u660e\u5e74\u5e74\u5e95\u4e4b\u524d\u9501\u5b9a 9 CFX\u201d\u662f\u4e00\u4e2a\u66f4\u5f3a\u7684\u627f\u8bfa\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:["\u5728\u4efb\u4f55\u65f6\u5019\uff0c\u6bcf\u4e2a\u9501\u5b9a\u7684 Drip \u90fd\u4f1a\u6839\u636e\u5176\u89e3\u9501\u65f6\u95f4\u88ab\u5206\u914d\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684",(0,c.jsx)(e.em,{children:"\u6295\u7968\u6743"}),"\u3002 \u5728\u4e00\u5e74\u4ee5\u4e0a\u89e3\u9501\u7684 Drip \u5c06\u62e5\u6709\u5b8c\u5168\u7684\u6295\u7968\u6743\u3002 \u66f4\u591a\u7ec6\u8282\u8bf7\u53c2\u89c1 ",(0,c.jsx)(e.a,{href:"https://conflux-protocol.s3-ap-southeast-1.amazonaws.com/tech-specification.pdf",children:"Conflux \u534f\u8bae\u89c4\u8303"}),"\u7b2c 8.3.2 \u8282\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,c.jsxs)(e.p,{children:["The address of the internal contract: ",(0,c.jsx)(e.code,{children:"0x0888000000000000000000000000000000000002"})]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"pragma solidity >=0.4.15;\n\ncontract Staking {\n    /*** Query Functions ***/\n    /**\n     * @dev get user's staking balance\n     * @param user The address of specific user\n     */\n    function getStakingBalance(address user) public view returns (uint256) {}\n\n    /**\n     * @dev get user's locked staking balance at given blockNumber\n     * @param user The address of specific user\n     * @param blockNumber The blockNumber as index.\n     */\n    // ------------------------------------------------------------------------\n    // Note: if the blockNumber is less than the current block number, function\n    // will return current locked staking balance.\n    // ------------------------------------------------------------------------\n    function getLockedStakingBalance(address user, uint256 blockNumber) public view returns (uint256) {}\n\n\n    /**\n     * @dev get user's vote power staking balance at given blockNumber\n     * @param user The address of specific user\n     * @param blockNumber The blockNumber as index.\n     */\n    // ------------------------------------------------------------------------\n    // Note: if the blockNumber is less than the current block number, function\n    // will return current vote power.\n    // ------------------------------------------------------------------------\n    function getVotePower(address user, uint256 blockNumber) public view returns (uint256) {}\n\n    function deposit(uint256 amount) external {}\n\n    function withdraw(uint256 amount) external {}\n\n    function voteLock(uint256 amount, uint256 unlockBlockNumber) external {}\n}\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"const PRIVATE_KEY = '0xxxxxxx';\nconst cfx = new Conflux({\n  url: 'https://test.confluxrpc.com',\n  logger: console,\n  networkId: 1,\n});\nconst account = cfx.wallet.addPrivateKey(PRIVATE_KEY); // create account instance\n\nconst staking_contract = cfx.InternalContract('Staking');\n// deposit some amount of tokens\nstaking_contract.deposit(your_number_of_tokens).sendTransaction({\n  from: account,\n}).confirmed();\n\n// withdraw some amount of tokens\nstaking_contract.withdraw(your_number_of_tokens).sendTransaction({\n  from: account,\n}).confirmed();\n\n// lock some tokens until some block number\nstaking_contract.voteLock(your_number_of_tokens, your_unlock_block_number).sendTransaction({\n  from: account,\n}).confirmed();\n"})})]})}function u(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>r});var c=t(67294);const o={},s=c.createContext(o);function r(n){const e=c.useContext(s);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),c.createElement(s.Provider,{value:e},n.children)}}}]);