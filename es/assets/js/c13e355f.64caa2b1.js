"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6316],{2890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(85893),r=t(11151);const o={sidebar_position:5,title:"PoSRegister",displayed_sidebar:"coreSidebar"},i=void 0,c={id:"core/core-space-basics/internal-contracts/poSRegister",title:"PoSRegister",description:"This contract is used let user participate in PoS chain. If anyone want to become a PoS node, he need to interact with this contract. This contract provide serveral methods to increase or decrease PoS votes:",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/core/core-space-basics/internal-contracts/poSRegister.md",sourceDirName:"core/core-space-basics/internal-contracts",slug:"/core/core-space-basics/internal-contracts/poSRegister",permalink:"/es/docs/core/core-space-basics/internal-contracts/poSRegister",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"PoSRegister",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"ConfluxContext",permalink:"/es/docs/core/core-space-basics/internal-contracts/conflux-context"},next:{title:"CrossSpaceCall",permalink:"/es/docs/core/core-space-basics/internal-contracts/crossSpaceCall"}},a={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This contract is used let user participate in PoS chain. If anyone want to become a PoS node, he need to interact with this contract. This contract provide serveral methods to increase or decrease PoS votes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"register"})," - Regist in PoS chain to become a PoS node"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"increaseStake"})," - Increase PoS stake"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"retire"})," - Decrease PoS stake"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Also several methods to query one account's PoS info:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"getVotes"})," - Query one account's votes info, will return ",(0,s.jsx)(n.code,{children:"totalStakedVotes"})," and ",(0,s.jsx)(n.code,{children:"totalUnlockedVotes"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"identifierToAddress"})," - Query one PoS account's binded PoW address"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"addressToIdentifier"})," - Query one PoW account's binded PoS address"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PoSRegister"}),"'s hex40 contract address is ",(0,s.jsx)(n.code,{children:"0x0888000000000000000000000000000000000005"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// SPDX-License-Identifier: MIT\npragma solidity >=0.5.0;\n\ninterface PoSRegister {\n    /**\n     * @dev Register PoS account\n     * @param indentifier - PoS account address to register\n     * @param votePower - votes count\n     * @param blsPubKey - BLS public key\n     * @param vrfPubKey - VRF public key\n     * @param blsPubKeyProof - BLS public key\'s proof of legality, used to against some attack, generated by conflux-rust fullnode\n     */\n    function register(\n        bytes32 indentifier,\n        uint64 votePower,\n        bytes calldata blsPubKey,\n        bytes calldata vrfPubKey,\n        bytes[2] calldata blsPubKeyProof\n    ) external;\n\n    /**\n     * @dev Increase specified number votes for msg.sender\n     * @param votePower - count of votes to increase\n     */\n    function increaseStake(uint64 votePower) external;\n\n    /**\n     * @dev Retire specified number votes for msg.sender\n     * @param votePower - count of votes to retire\n     */\n    function retire(uint64 votePower) external;\n\n    /**\n     * @dev Query PoS account\'s lock info. Include "totalStakedVotes" and "totalUnlockedVotes"\n     * @param identifier - PoS address\n     */\n    function getVotes(bytes32 identifier) external view returns (uint256, uint256);\n\n    /**\n     * @dev Query the PoW address binding with specified PoS address\n     * @param identifier - PoS address\n     */\n    function identifierToAddress(bytes32 identifier) external view returns (address);\n\n    /**\n     * @dev Query the PoS address binding with specified PoW address\n     * @param addr - PoW address\n     */\n    function addressToIdentifier(address addr) external view returns (bytes32);\n\n    /**\n     * @dev Emitted when register method executed successfully\n     */\n    event Register(bytes32 indexed identifier, bytes blsPubKey, bytes vrfPubKey);\n\n    /**\n     * @dev Emitted when increaseStake method executed successfully\n     */\n    event IncreaseStake(bytes32 indexed identifier, uint64 votePower);\n\n    /**\n     * @dev Emitted when retire method executed successfully\n     */\n    event Retire(bytes32 indexed identifier, uint64 votePower);\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var s=t(67294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);