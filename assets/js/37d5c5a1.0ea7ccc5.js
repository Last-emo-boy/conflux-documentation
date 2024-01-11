"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3996],{58433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var a=t(85893),s=t(11151);const o={title:"FAQs of Core Space Transactions",sidebar_position:1,displayed_sidebar:"generalSidebar"},i=void 0,c={id:"general/faq/core-space-transactions/core-transaction-faqs",title:"FAQs of Core Space Transactions",description:"How to send a transaction?",source:"@site/docs/general/faq/core-space-transactions/core-transaction-faqs.md",sourceDirName:"general/faq/core-space-transactions",slug:"/general/faq/core-space-transactions/core-transaction-faqs",permalink:"/docs/general/faq/core-space-transactions/core-transaction-faqs",draft:!1,unlisted:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/faq/core-space-transactions/core-transaction-faqs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"FAQs of Core Space Transactions",sidebar_position:1,displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Community FAQs",permalink:"/docs/general/faq/community-faqs"},next:{title:"Why Transaction is Pending?",permalink:"/docs/general/faq/core-space-transactions/why-transaction-is-pending"}},r={},h=[{value:"How to send a transaction?",id:"how-to-send-a-transaction",level:2},{value:"Can a transaction be canceled or replaced?",id:"can-a-transaction-be-canceled-or-replaced",level:2},{value:"What are the gas and storage fees when sending a transaction?",id:"what-are-the-gas-and-storage-fees-when-sending-a-transaction",level:2},{value:"What information (parameters) need to be specified when using the SDK to send transactions\uff1f",id:"what-information-parameters-need-to-be-specified-when-using-the-sdk-to-send-transactions",level:2},{value:"How to get the correct nonce?",id:"how-to-get-the-correct-nonce",level:2},{value:"When will the nonce increase by 1? Will the nonce increase by 1 if the transaction fails? Why has the nonce not changed when the transaction has been sent?",id:"when-will-the-nonce-increase-by-1-will-the-nonce-increase-by-1-if-the-transaction-fails-why-has-the-nonce-not-changed-when-the-transaction-has-been-sent",level:2},{value:"How to calculate the gas fee actually used in the transaction?",id:"how-to-calculate-the-gas-fee-actually-used-in-the-transaction",level:2},{value:"How to release the storage deposit?",id:"how-to-release-the-storage-deposit",level:2},{value:"Why has the balance not changed after interacting with a contract and the gas fee is paid for this transaction?",id:"why-has-the-balance-not-changed-after-interacting-with-a-contract-and-the-gas-fee-is-paid-for-this-transaction",level:2},{value:"If you want to send transactions in batches, how to manage nonce?",id:"if-you-want-to-send-transactions-in-batches-how-to-manage-nonce",level:2},{value:"How to know the amount of gas and storage used by a transaction?",id:"how-to-know-the-amount-of-gas-and-storage-used-by-a-transaction",level:2},{value:"How do I know that a transaction has been successfully executed?",id:"how-do-i-know-that-a-transaction-has-been-successfully-executed",level:2},{value:"How to determine whether a transaction is safe and confirmed?",id:"how-to-determine-whether-a-transaction-is-safe-and-confirmed",level:2},{value:"What is a receipt, and what information does it contain?",id:"what-is-a-receipt-and-what-information-does-it-contain",level:2},{value:"How does the status of the transaction change?",id:"how-does-the-status-of-the-transaction-change",level:2},{value:"Why does a transaction fail?",id:"why-does-a-transaction-fail",level:2},{value:"Why does a transaction keep on waiting to be packaged?",id:"why-does-a-transaction-keep-on-waiting-to-be-packaged",level:2},{value:"Why would a transaction execution fail?",id:"why-would-a-transaction-execution-fail",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"how-to-send-a-transaction",children:"How to send a transaction?"}),"\n",(0,a.jsx)(n.p,{children:"The easiest way to send a transaction is to use a wallet such as Conflux Fluent, and click \u201csend\u201d to directly set the amount. If you are a developer, you can use the Conflux SDK (JS, Java, Go) to construct the transaction yourself, and then send it to the chain via the node RPC."}),"\n",(0,a.jsx)(n.h2,{id:"can-a-transaction-be-canceled-or-replaced",children:"Can a transaction be canceled or replaced?"}),"\n",(0,a.jsx)(n.p,{children:"If a transaction has not been packed into a block and is in the transaction pool, it can be replaced by sending a new transaction with the same nonce and a higher gasPrice."}),"\n",(0,a.jsx)(n.p,{children:"Transactions cannot be canceled but can be replaced with a transaction of value 0. This is a way to reach the same result as canceling the transaction."}),"\n",(0,a.jsx)(n.h2,{id:"what-are-the-gas-and-storage-fees-when-sending-a-transaction",children:"What are the gas and storage fees when sending a transaction?"}),"\n",(0,a.jsx)(n.p,{children:"The gas fee is a fee required for transaction execution. Miners need to charge a certain amount of fee for packaging and executing the transaction. The way to calculate the gas fee is gasFee = gasPrice * gasUsed.\nAdditionally, the execution of the transaction may occupy new storage space. Even though you don't need to pay for the occupation of this space, a certain amount of CFX needs to be staked for the use of this storage. As the storage is released, the staked CFX will be returned.\nThe storage fee refers to the amount of staked CFX for the storage used, and 1 CFX is required per 1024 bytes used."}),"\n",(0,a.jsx)(n.h2,{id:"what-information-parameters-need-to-be-specified-when-using-the-sdk-to-send-transactions",children:"What information (parameters) need to be specified when using the SDK to send transactions\uff1f"}),"\n",(0,a.jsxs)(n.p,{children:["If you make simple CFX transfers using JS-SDK, you only need to specify ",(0,a.jsx)(n.code,{children:"from"})," (transfer from which account), ",(0,a.jsx)(n.code,{children:"to"})," (send to which account), ",(0,a.jsx)(n.code,{children:"value"})," (quantity to send, unit: Drip)."]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-get-the-correct-nonce",children:"How to get the correct nonce?"}),"\n",(0,a.jsxs)(n.p,{children:["Through the  ",(0,a.jsx)(n.code,{children:"cfx_getNextNonce"})," RPC, the next available nonce of an account can be obtained. The used nonce cannot be used again. The transaction will not be packaged if using a nonce with a value greater than the current nonce."]}),"\n",(0,a.jsx)(n.h2,{id:"when-will-the-nonce-increase-by-1-will-the-nonce-increase-by-1-if-the-transaction-fails-why-has-the-nonce-not-changed-when-the-transaction-has-been-sent",children:"When will the nonce increase by 1? Will the nonce increase by 1 if the transaction fails? Why has the nonce not changed when the transaction has been sent?"}),"\n",(0,a.jsxs)(n.p,{children:["The nonce increases once the transaction is executed, whether it succeeds or fails.\nAfter the transaction is sent, the nonce queried through ",(0,a.jsx)(n.code,{children:"cfx_getNextNonce"})," stays unchanged because the transaction has not been executed. At this time, the transaction may be in the transaction pool and has not been packed, or it may have just been packed and be in the ",(0,a.jsx)(n.code,{children:"defer"})," state, waiting to be executed."]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-calculate-the-gas-fee-actually-used-in-the-transaction",children:"How to calculate the gas fee actually used in the transaction?"}),"\n",(0,a.jsxs)(n.p,{children:["On ConfluxScan, users can view gas usage, gas price, gas fee, and other relevant information of a transaction, which is obtained through ",(0,a.jsx)(n.code,{children:"cfx_getTransactionReceipt"}),": ",(0,a.jsx)(n.code,{children:"gasFee = gasCharged * gasPrice"}),", but the gasCharged is not necessarily equal to gasUsed.\nThere is a rule in Conflux: ",(0,a.jsx)(n.code,{children:"gas"})," is used to set the upper limit of gas that can be used in a transaction. It must be greater than the actual gas used value (gasUsed).\nFor the excessive part, at most, only 1/4 will be refunded: if the excessive part is less than 1/4 of the gasLimit, all will be refunded, but if it is greater than 1/4, only 1/4 will be returned. Hence, try to give an accurate gas value when sending a transaction."]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-release-the-storage-deposit",children:"How to release the storage deposit?"}),"\n",(0,a.jsx)(n.p,{children:"When the storage is released, the deposit is automatically refunded. For example, if the balance of the ERC20 token changes from non-zero to 0, the deposit will be refunded. If a contract is destroyed, the deposit generated by the interaction between all addresses and the contract will be refunded as well."}),"\n",(0,a.jsx)(n.h2,{id:"why-has-the-balance-not-changed-after-interacting-with-a-contract-and-the-gas-fee-is-paid-for-this-transaction",children:"Why has the balance not changed after interacting with a contract and the gas fee is paid for this transaction?"}),"\n",(0,a.jsx)(n.p,{children:"The Conflux network has a sponsor mechanism. If a contract has a sponsor, the gas and storage fees for this contract\u2019s interactions will be paid by the sponsor."}),"\n",(0,a.jsx)(n.h2,{id:"if-you-want-to-send-transactions-in-batches-how-to-manage-nonce",children:"If you want to send transactions in batches, how to manage nonce?"}),"\n",(0,a.jsx)(n.p,{children:"When sending transactions in batches, you need to manually manage the nonce. Every time you send a transaction, the nonce is manually incremented by one.\nIn this case, for a failed transaction of which nonce is not used, you need to manually adjust the transaction parameters to resend it.\nTherefore, you need to keep all transaction hashes and monitor the status of the transactions when sending in batches."}),"\n",(0,a.jsx)(n.h2,{id:"how-to-know-the-amount-of-gas-and-storage-used-by-a-transaction",children:"How to know the amount of gas and storage used by a transaction?"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"cfx_estimateGasAndCollateral"})," RPC can be used to estimate the amount of gas and storage that a transaction needs to use, but the estimation is not 100% accurate.\nHence, the returned gas can be adjusted manually, such as multiplying by ",(0,a.jsx)(n.code,{children:"1.3"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"how-do-i-know-that-a-transaction-has-been-successfully-executed",children:"How do I know that a transaction has been successfully executed?"}),"\n",(0,a.jsxs)(n.p,{children:["Check the ",(0,a.jsx)(n.code,{children:"status"})," field of the transaction or the ",(0,a.jsx)(n.code,{children:"outcomeStatus"})," field of the receipt to determine whether the transaction is successful, 0 means success and 1 means failure."]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-determine-whether-a-transaction-is-safe-and-confirmed",children:"How to determine whether a transaction is safe and confirmed?"}),"\n",(0,a.jsxs)(n.p,{children:["If the epochNumber of the epoch that the transaction belongs to is less than the currently confirmed epochNumber, it is considered safe.\nYou can also get the confirmationRisk of the block that the transaction belongs to through the ",(0,a.jsx)(n.code,{children:"cfx_getConfirmationRiskByHash"})," RPC.\nIf the obtained value is less than 1e-8, it is considered safe."]}),"\n",(0,a.jsx)(n.h2,{id:"what-is-a-receipt-and-what-information-does-it-contain",children:"What is a receipt, and what information does it contain?"}),"\n",(0,a.jsx)(n.p,{children:"A receipt is the receipt information of a transaction. Through a receipt, you can know some results of the transaction execution, such as whether the transaction is successful, whether a contract is created, gas fee usage, eventLog generated by a transaction execution, etc."}),"\n",(0,a.jsx)(n.h2,{id:"how-does-the-status-of-the-transaction-change",children:"How does the status of the transaction change?"}),"\n",(0,a.jsx)(n.p,{children:"After the transaction is submitted through RPC, it will go through several states: Waiting for packaging -> packaging -> execution -> confirmation."}),"\n",(0,a.jsx)(n.h2,{id:"why-does-a-transaction-fail",children:"Why does a transaction fail?"}),"\n",(0,a.jsx)(n.p,{children:"There are several reasons for a failure of a transaction:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Reuse an old nonce."}),"\n",(0,a.jsx)(n.li,{children:"Used a new nonce, but there is a transaction with the same nonce in the transaction pool."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"why-does-a-transaction-keep-on-waiting-to-be-packaged",children:"Why does a transaction keep on waiting to be packaged?"}),"\n",(0,a.jsx)(n.p,{children:"If a transaction has not been packaged for a long time, it\u2019s likely that either the nonce is set incorrectly or the balance is not sufficient."}),"\n",(0,a.jsx)(n.h2,{id:"why-would-a-transaction-execution-fail",children:"Why would a transaction execution fail?"}),"\n",(0,a.jsx)(n.p,{children:"Transaction execution failures are roughly divided into the following situations:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Vm reverted, Reason provided by the contract: \u2019xxxxx\u2019: the contract execution failed, and the contract returned detailed information"}),"\n",(0,a.jsx)(n.li,{children:"VmError(ExceedStorageLimit): the specified storage limit is not enough"}),"\n",(0,a.jsxs)(n.li,{children:["NotEnoughCash ",(0,a.jsx)(n.code,{children:"{required: 22625000000010862646, got: 22062499999972687418, actual_gas_cost: 10862646, max_storage_limit_cost: 22625000000000000000}: insufficient balance"})]}),"\n",(0,a.jsx)(n.li,{children:"VmError(OutOfGas): the specified gas fee is not enough"}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"VmError(BadInstruction {instruction: 238 }): contract deployment failed"})}),"\n",(0,a.jsx)(n.li,{children:"Vm reverted: the contract execution failed, but the contract did not return detailed information."}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var a=t(67294);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);