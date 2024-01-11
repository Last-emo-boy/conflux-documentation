"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[746],{85697:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var c=t(85893),r=t(11151);const o={sidebar_position:1,title:"AdminControl",displayed_sidebar:"coreSidebar"},a=void 0,s={id:"core/core-space-basics/internal-contracts/admin",title:"AdminControl",description:"Overview",source:"@site/docs/core/core-space-basics/internal-contracts/admin.md",sourceDirName:"core/core-space-basics/internal-contracts",slug:"/core/core-space-basics/internal-contracts/admin",permalink:"/docs/core/core-space-basics/internal-contracts/admin",draft:!1,unlisted:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/core-space-basics/internal-contracts/admin.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"AdminControl",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"Internal Contracts",permalink:"/docs/core/core-space-basics/internal-contracts/"},next:{title:"SponsorWhitelistControl",permalink:"/docs/core/core-space-basics/internal-contracts/sponsor-whitelist-control"}},d={},i=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"JS Example",id:"js-example",level:2}];function l(n){const e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,c.jsxs)(e.p,{children:["The ",(0,c.jsx)(e.code,{children:"AdminControl"})," contract is a debug tool for contract development. When a contract is created during a transaction, the sender for the current transaction will become the contract admin automatically."]}),"\n",(0,c.jsxs)(e.p,{children:["The ",(0,c.jsx)(e.code,{children:"admin"})," address can transfer the administrator rights to another ",(0,c.jsx)(e.strong,{children:"normal address"})," or ",(0,c.jsx)(e.strong,{children:"zero address"})," by calling interface ",(0,c.jsx)(e.code,{children:"setAdmin(address contractAddr, address newAdmin)"}),". ",(0,c.jsx)(e.strong,{children:"A contract can never be an admin"}),"."]}),"\n",(0,c.jsxs)(e.p,{children:["The admin of a contract has several administrator rights. It can call interface ",(0,c.jsx)(e.code,{children:"destroy(address contractAddr)"})," to destroy contract, just like a contract calling ",(0,c.jsx)(e.code,{children:"suicide()"})," function. The SponsorWhitelist internal contract provides some functions can only be called by admin address. These functions can update the whitelist in sponsor mechanism. They will be introduced later."]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"Note: For all the interfaces requiring administrator rights, no matter the execution success or not, no error or exception will be triggered during internal contract execution."})," For example, if a non-admin address tries to transfer the admin address to itself, this transaction will success but nothing will be changed."]}),"\n",(0,c.jsxs)(e.p,{children:["ConfluxScan may mark a contract as debug mode if the contract has non-zero admin address. ",(0,c.jsx)(e.strong,{children:"So remember, if you think the contract is ready for production environment, you should set admin address to zero."})]}),"\n",(0,c.jsxs)(e.p,{children:["The ",(0,c.jsx)(e.code,{children:"AdminControl"})," contract also provides a query interface ",(0,c.jsx)(e.code,{children:"getAdmin(address contractAddr)"})," which can be called by anyone."]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"Corner cases:"})}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsxs)(e.li,{children:["The admin is set at the start of contract creation. So if sender ",(0,c.jsx)(e.code,{children:"A"})," creates contract ",(0,c.jsx)(e.code,{children:"B"})," and set admin to ",(0,c.jsx)(e.code,{children:"C"})," during contract construction, the admin will be ",(0,c.jsx)(e.code,{children:"C"})," when the contract is deployed."]}),"\n",(0,c.jsxs)(e.li,{children:["However, if sender ",(0,c.jsx)(e.code,{children:"A"})," calls contract ",(0,c.jsx)(e.code,{children:"B"}),", then contract ",(0,c.jsx)(e.code,{children:"B"})," creates contract ",(0,c.jsx)(e.code,{children:"C"})," and then set admin to ",(0,c.jsx)(e.code,{children:"D"})," during contract contraction, then the set will fail because the admin of ",(0,c.jsx)(e.code,{children:"C"})," is ",(0,c.jsx)(e.code,{children:"A"})," and the sender for creating ",(0,c.jsx)(e.code,{children:"C"})," is ",(0,c.jsx)(e.code,{children:"B"}),"."]}),"\n",(0,c.jsxs)(e.li,{children:["But, Conflux introduces a special policy. In case 2, if ",(0,c.jsx)(e.code,{children:"D"})," is zero address, the set admin will success. ",(0,c.jsx)(e.strong,{children:'This means that a contract can declare "I don\'t need admin" during contract creation.'})]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,c.jsxs)(e.p,{children:["AdminControl's hex40 address is ",(0,c.jsx)(e.code,{children:"0x0888000000000000000000000000000000000000"}),", with interface:"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"pragma solidity >=0.4.15;\n\ncontract AdminControl {\n    /*** Query Functions ***/\n    /**\n     * @dev get admin of specific contract\n     * @param contractAddr The address of specific contract\n     */\n    function getAdmin(address contractAddr) public view returns (address) {}\n    \n    /**\n     * @dev Contract admin set the administrator of contract `contractAddr` to `newAdmin`.\n     * @param contractAddr The address of the contract\n     * @param newAdmin The new admin address\n     */\n    function setAdmin(address contractAddr, address newAdmin) public {}\n\n   /**\n     * @dev Contract admin destroy contract `contractAddr`.\n     * @param contractAddr The contract to be destroied\n     */\n    function destroy(address contractAddr) public {}\n}\n"})}),"\n",(0,c.jsx)(e.h2,{id:"js-example",children:"JS Example"}),"\n",(0,c.jsxs)(e.p,{children:["Consider you have deployed a contract whose address is ",(0,c.jsx)(e.code,{children:"contractAddr"}),". The administrator can call ",(0,c.jsx)(e.code,{children:"AdminControl.setAdmin(contractAddr, new_admin)"})," to change the administrator and call ",(0,c.jsx)(e.code,{children:"AdminControl.destroy(contractAddr)"})," to kill the contract."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"const { Conflux } = require('js-conflux-sdk');\n\nfunction main() {\n    const cfx = new Conflux({\n    url: 'https://test.confluxrpc.com',\n    networkId: 1,\n    });\n\n    const PRIVATE_KEY = '0xxxxxxx';\n    const account = cfx.wallet.addPrivateKey(PRIVATE_KEY); // create account instance\n\n    const adminContract = cfx.InternalContract('AdminControl');\n\n    // make sure account is the admin of contractAddr\n    const contractAddr = 'cfxtest:acepe88unk7fvs18436178up33hb4zkuf62a9dk1gv';\n\n    // to change administrator\n    adminContract.setAdmin(contractAddr, new_admin).sendTransaction({\n    from: account,\n    }).executed();\n\n    // to kill the contract\n    adminContract.destroy(contractAddr).sendTransaction({\n    from: account,\n    }).executed();\n}\n\nmain();\n"})})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(l,{...n})}):l(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>a});var c=t(67294);const r={},o=c.createContext(r);function a(n){const e=c.useContext(o);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),c.createElement(o.Provider,{value:e},n.children)}}}]);