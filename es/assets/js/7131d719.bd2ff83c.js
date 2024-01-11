"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1211],{65428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(85893),s=t(11151);const o={sidebar_position:2,title:"Ledger",displayed_sidebar:"generalSidebar"},i=void 0,l={id:"general/tutorials/wallets/ledger",title:"Ledger",description:"This wallet supports both Core and eSpace",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/tutorials/wallets/ledger.md",sourceDirName:"general/tutorials/wallets",slug:"/general/tutorials/wallets/ledger",permalink:"/es/docs/general/tutorials/wallets/ledger",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Ledger",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Fluent",permalink:"/es/docs/general/tutorials/wallets/fluent"},next:{title:"Transferring Funds",permalink:"/es/docs/category/transferring-funds"}},a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Using Ledger on Core Space",id:"using-ledger-on-core-space",level:2},{value:"Before You Start",id:"before-you-start",level:3},{value:"Installation",id:"installation",level:3},{value:"Connecting Your Ledger Device to Fluent",id:"connecting-your-ledger-device-to-fluent",level:3},{value:"Using Ledger: Sending Crypto Assets",id:"using-ledger-sending-crypto-assets",level:3},{value:"Next Steps",id:"next-steps",level:3},{value:"Using Ledger on eSpace",id:"using-ledger-on-espace",level:2},{value:"Before You Start",id:"before-you-start-1",level:3},{value:"Installation",id:"installation-1",level:3},{value:"Setting up MetaMask",id:"setting-up-metamask",level:3},{value:"Connecting Your MetaMask Wallet to Conflux eSpace",id:"connecting-your-metamask-wallet-to-conflux-espace",level:4},{value:"Connecting Your Ledger Device to MetaMask",id:"connecting-your-ledger-device-to-metamask",level:4},{value:"Using Ledger",id:"using-ledger",level:3},{value:"Sending Crypto Assets",id:"sending-crypto-assets",level:4},{value:"Receiving Crypto Assets",id:"receiving-crypto-assets",level:4},{value:"Obtaining CFX",id:"obtaining-cfx",level:4},{value:"Checking Your Balance",id:"checking-your-balance",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"This wallet supports both Core and eSpace"})}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["You can now use your ",(0,r.jsx)(n.strong,{children:"Ledger Nano S"})," or ",(0,r.jsx)(n.strong,{children:"Ledger Nano X"})," hardware wallet to securely store your assets on both Core and eSpace. In this guide, we will show you how to interact with Conflux using your Ledger device and how to transfer assets."]}),"\n",(0,r.jsx)(n.h2,{id:"using-ledger-on-core-space",children:"Using Ledger on Core Space"}),"\n",(0,r.jsx)(n.h3,{id:"before-you-start",children:"Before You Start"}),"\n",(0,r.jsx)(n.p,{children:"Before you start, make sure that you have done the following:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"-"}),"  Initialized your ",(0,r.jsx)(n.a,{href:"https://support.ledger.com/hc/en-us/articles/360000613793-Set-up-your-Ledger-Nano-S?docs=true",children:"Nano S"})," or ",(0,r.jsx)(n.a,{href:"https://support.ledger.com/hc/en-us/articles/360018784134-Set-up-your-Ledger-Nano-X?docs=true",children:"Nano X"})," device."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"-"}),"  Updated your ",(0,r.jsx)(n.a,{href:"https://support.ledger.com/hc/en-us/articles/360002731113-Update-Ledger-Nano-S-firmware?docs=true",children:"Nano S"})," or ",(0,r.jsx)(n.a,{href:"https://support.ledger.com/hc/en-us/articles/360013349800-Update-Ledger-Nano-X-firmware?docs=true",children:"Nano X"})," device to the latest firmware version."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"-"}),"  Installed ",(0,r.jsx)(n.a,{href:"https://www.ledger.com/ledger-live",children:"Ledger Live"})," and updated it to the latest version."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"-"}),"  Installed ",(0,r.jsx)(n.a,{href:"https://fluentwallet.com/",children:"Fluent Wallet"})," on a compatible desktop browser."]}),"\n",(0,r.jsxs)(n.p,{children:["If you encounter any issues, find us on ",(0,r.jsx)(n.a,{href:"https://discord.com/invite/aCZkf2C",children:"Discord"})," or ",(0,r.jsx)(n.a,{href:"https://t.me/Conflux_English",children:"Telegram"}),", we are happy to help."]}),"\n",(0,r.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The Conflux Ledger app is currently available as an ",(0,r.jsx)(n.strong,{children:"unaudited developer release"}),". Please use it at your own risk."]})}),"\n",(0,r.jsxs)(n.p,{children:["You can install the ",(0,r.jsx)(n.strong,{children:"Conflux app"})," on your Ledger device by following these steps:"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"1."})," Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"2."}),"  Unlock your device by entering your PIN."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"3."}),"  Open Ledger Live."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4."}),"  Click on the gear icon in the top right corner to open Settings."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"5."}),'  Go to "Experimental features" and enable "Developer mode".']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"6."}),'  In the menu on the left, click "Manager" to open the Ledger Live app manager.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"7."}),'  When your Ledger device displays "Allow Ledger manager", press both buttons to continue.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"8."}),'  Back in Ledger Live, under the "App catalog" tab, enter "Conflux" in the search field.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"9."}),'  Once Ledger Live shows the Conflux app, press "Install".']}),"\n",(0,r.jsx)(n.p,{children:"The Conflux app is now installed successfully."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Ledger",src:t(51479).Z+"",width:"2272",height:"1624"})}),"\n",(0,r.jsx)(n.h3,{id:"connecting-your-ledger-device-to-fluent",children:"Connecting Your Ledger Device to Fluent"}),"\n",(0,r.jsx)(n.p,{children:"You can import accounts from your Ledger device into your Fluent wallet by following these steps:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"1."})," Quit Ledger Live if it is currently opened."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"2."})," Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"3."})," Unlock your device by entering your PIN."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4."})," Navigate to the Conflux app on your device and press both buttons to open it."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"5."}),' In Fluent, open the menu in the top right corner and select "Account Management".']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"6."}),' Click "Add" and select "Hardware Wallet". Read the instructions carefully and click "Ready".']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"7."}),' On the "Connect your Ledger" page, click "Connect".']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"8."}),' A browser popup will appear saying "Fluent wants to connect". Select your Ledger device from the list and click "Connect".']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"9."}),' After a few seconds, the "Choose Address" page shows up in Fluent. Select one or more accounts that you would like to import to Fluent and click "Import".']}),"\n",(0,r.jsx)(n.p,{children:'Your account is now available in Fluent as "LedgerNanoS-1" (or similar).'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Ledger",src:t(17309).Z+"",width:"2016",height:"1654"})}),"\n",(0,r.jsx)(n.h3,{id:"using-ledger-sending-crypto-assets",children:"Using Ledger: Sending Crypto Assets"}),"\n",(0,r.jsx)(n.p,{children:"Assuming your account on the Ledger device has some CFX tokens, the steps below show how to make a CFX transfer on Conflux."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you do not have CFX, you can purchase at one of the exchanges listed ",(0,r.jsx)(n.a,{href:"https://123cfx.com/#Exchanges",children:"here"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"Make sure you have already imported your Ledger account into your Fluent wallet by following the steps in the previous section. Quit Ledger Live if it is currently opened."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"1."})," Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"2."})," Unlock your device by entering your PIN."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"3."})," Navigate to the ",(0,r.jsx)(n.strong,{children:"Conflux app"})," on your device and press both buttons to open it."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4."}),' In Fluent, select your Ledger account (e.g., "LedgerNanoS-1").']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"5."}),' Click "Send" and enter the recipient address.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"6."}),' Under "Token and Amount", enter the amount of CFX to transfer and click "Next".']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"7."}),' Double check the transaction details, and click "Confirm".']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"8."}),' Your Ledger device will now show "Review transaction". ',(0,r.jsx)(n.strong,{children:"Carefully review the transaction amount and receipient address"})," by repeatedly pressing the right button on your device."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"9."}),' If everything looks correct, press both buttons at the "Accept and send" screen to approve the transaction. Otherwise, press both buttons at the "Reject" screen to reject the transaction.']}),"\n",(0,r.jsxs)(n.p,{children:['After the transaction has been approved, it is now signed and sent to the Conflux Network. You can see the transaction status in Fluent. If you click on "History", then click on the arrow icon at the top right corner of your transaction, you can see more details on ',(0,r.jsx)(n.a,{href:"https://confluxscan.io",children:"Conflux Scan"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Ledger",src:t(6324).Z+"",width:"2136",height:"1594"})}),"\n",(0,r.jsx)(n.h3,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsxs)(n.p,{children:["You can learn more about Conflux at ",(0,r.jsx)(n.a,{href:"https://confluxnetwork.org",children:"confluxnetwork.org"}),". You can check transaction and account details on ",(0,r.jsx)(n.a,{href:"https://confluxscan.io",children:"Conflux Scan"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you encounter any issues, find us on ",(0,r.jsx)(n.a,{href:"https://discord.com/invite/aCZkf2C",children:"Discord"})," or ",(0,r.jsx)(n.a,{href:"https://t.me/Conflux_English",children:"Telegram"}),", we are happy to help."]}),"\n",(0,r.jsx)(n.h2,{id:"using-ledger-on-espace",children:"Using Ledger on eSpace"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"The Conflux eSpace Ledger app is not yet available in Ledger Live."})})}),"\n",(0,r.jsx)(n.h3,{id:"before-you-start-1",children:"Before You Start"}),"\n",(0,r.jsx)(n.p,{children:"Before you start, make sure that you have done the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Initialized your ",(0,r.jsx)(n.a,{href:"https://support.ledger.com/hc/en-us/articles/360000613793-Set-up-your-Ledger-Nano-S?docs=true",children:"Nano S"})," or ",(0,r.jsx)(n.a,{href:"https://support.ledger.com/hc/en-us/articles/360018784134-Set-up-your-Ledger-Nano-X?docs=true",children:"Nano X"})," device."]}),"\n",(0,r.jsxs)(n.li,{children:["Updated your ",(0,r.jsx)(n.a,{href:"https://support.ledger.com/hc/en-us/articles/360002731113-Update-Ledger-Nano-S-firmware?docs=true",children:"Nano S"})," or ",(0,r.jsx)(n.a,{href:"https://support.ledger.com/hc/en-us/articles/360013349800-Update-Ledger-Nano-X-firmware?docs=true",children:"Nano X"})," device to the latest firmware version."]}),"\n",(0,r.jsxs)(n.li,{children:["Installed ",(0,r.jsx)(n.a,{href:"https://www.ledger.com/ledger-live",children:"Ledger Live"})," and updated it to the latest version."]}),"\n",(0,r.jsxs)(n.li,{children:["Installed ",(0,r.jsx)(n.a,{href:"https://MetaMask.io",children:"MetaMask"})," on a compatible desktop browser."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you encounter any issues, find us on ",(0,r.jsx)(n.a,{href:"https://discord.com/invite/aCZkf2C",children:"Discord"})," or ",(0,r.jsx)(n.a,{href:"https://t.me/Conflux_English",children:"Telegram"}),", we are happy to help."]}),"\n",(0,r.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["You can install the ",(0,r.jsx)(n.strong,{children:"Ethereum app"})," on your Ledger device by following these steps:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."}),"\n",(0,r.jsx)(n.li,{children:"Unlock your device by entering your PIN."}),"\n",(0,r.jsx)(n.li,{children:"Open Ledger Live."}),"\n",(0,r.jsx)(n.li,{children:'In the menu on the left, click "Manager" to open the Ledger Live app manager.'}),"\n",(0,r.jsx)(n.li,{children:'When your Ledger device displays "Allow Ledger manager", press both buttons to continue.'}),"\n",(0,r.jsx)(n.li,{children:'Back in Ledger Live, under the "App catalog" tab, enter "Ethereum" in the search field.'}),"\n",(0,r.jsx)(n.li,{children:'Once Ledger Live shows the Ethereum app, press "Install".'}),"\n",(0,r.jsx)(n.li,{children:"The Ethereum app is now installed successfully."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"setting-up-metamask",children:"Setting up MetaMask"}),"\n",(0,r.jsx)(n.h4,{id:"connecting-your-metamask-wallet-to-conflux-espace",children:"Connecting Your MetaMask Wallet to Conflux eSpace"}),"\n",(0,r.jsx)(n.p,{children:"You can add the Conflux eSpace network to your MetaMask wallet by following these steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Open your browser and navigate to ",(0,r.jsx)(n.a,{href:"https://evmchainlist.org",children:"https://evmchainlist.org"}),"."]}),"\n",(0,r.jsx)(n.li,{children:'Search for "Conflux eSpace".'}),"\n",(0,r.jsx)(n.li,{children:'Click "Connect Wallet" to allow this site to send requests to MetaMask.'}),"\n",(0,r.jsx)(n.li,{children:'Click "Add to MetaMask" under "Conflux eSpace".'}),"\n",(0,r.jsx)(n.li,{children:'When MetaMask prompts "Allow this site to add a network?", click "Approve".'}),"\n",(0,r.jsx)(n.li,{children:'When MetaMask prompts "Allow this site to switch the network?", click "Approve".'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Your MetaMask wallet is now connected to Conflux eSpace. You can switch to other networks anytime through the network selection dropdown menu in MetaMask."}),"\n",(0,r.jsx)(n.p,{children:'Alternatively, you can add Conflux eSpace to MetaMask manually under "Settings", "Networks", "Add Network":'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Network Name"}),": Conflux eSpace"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"New RPC URL"}),": ",(0,r.jsx)(n.a,{href:"https://evm.confluxrpc.com",children:"https://evm.confluxrpc.com"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Chain ID"}),": 1030"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Currency Symbol"}),": CFX"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Block Explorer URL"}),": ",(0,r.jsx)(n.a,{href:"https://evm.confluxscan.net",children:"https://evm.confluxscan.net"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"connecting-your-ledger-device-to-metamask",children:"Connecting Your Ledger Device to MetaMask"}),"\n",(0,r.jsx)(n.p,{children:"You can import accounts from your Ledger device into your MetaMask wallet by following these steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Quit Ledger Live if it is currently opened."}),"\n",(0,r.jsx)(n.li,{children:"Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."}),"\n",(0,r.jsx)(n.li,{children:"Unlock your device by entering your PIN."}),"\n",(0,r.jsx)(n.li,{children:"Navigate to the Ethereum app on your device and press both buttons to open it."}),"\n",(0,r.jsx)(n.li,{children:'In MetaMask, navigate to "Settings", "Advanced", "Preferred Ledger Connection Type" and choose "WebHID".'}),"\n",(0,r.jsx)(n.li,{children:'Open the menu in the top right corner in MetaMask and click "Connect Hardware Wallet".'}),"\n",(0,r.jsx)(n.li,{children:'Select "Ledger" and click "Continue".'}),"\n",(0,r.jsx)(n.li,{children:'A browser popup will appear saying "MetaMask wants to connect to a HID device". Select your Ledger device from the list and click "Connect".'}),"\n",(0,r.jsx)(n.li,{children:'After a few seconds, the "Select an Account" page shows up in MetaMask. Select one or more accounts that you would like to import to MetaMask and click "Unlock".'}),"\n",(0,r.jsx)(n.li,{children:'Your account is now visible in MetaMask as "Ledger 1".'}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"using-ledger",children:"Using Ledger"}),"\n",(0,r.jsx)(n.h4,{id:"sending-crypto-assets",children:"Sending Crypto Assets"}),"\n",(0,r.jsx)(n.p,{children:"Assuming your account on the Ledger device has some CFX tokens, the steps below show how to make a CFX transfer on Conflux eSpace."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Note: If you do not have CFX, you can purchase at one of the exchanges listed ",(0,r.jsx)(n.a,{href:"../transferring-funds/from-exchanges",children:"here"}),"."]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Make sure you have already imported your Ledger account into your MetaMask wallet by following the steps in the previous section. Quit Ledger Live if it is currently opened."}),"\n",(0,r.jsx)(n.li,{children:"Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."}),"\n",(0,r.jsx)(n.li,{children:"Unlock your device by entering your PIN."}),"\n",(0,r.jsx)(n.li,{children:"Navigate to the Ethereum app on your device and press both buttons to open it."}),"\n",(0,r.jsx)(n.li,{children:'In MetaMask, select your Ledger account (e.g., "Ledger 1").'}),"\n",(0,r.jsxs)(n.li,{children:['Click "Send" and enter the recipient address (should start with ',(0,r.jsx)(n.code,{children:"0x"}),")."]}),"\n",(0,r.jsx)(n.li,{children:'Under "Amount", enter the amount of CFX to transfer and click "Next".'}),"\n",(0,r.jsx)(n.li,{children:'Double check the transaction details, and click "Confirm".'}),"\n",(0,r.jsxs)(n.li,{children:['Your Ledger device will now show "Review transaction". ',(0,r.jsx)(n.strong,{children:"Carefully review the transaction amount and receipient address"})," by repeatedly pressing the right button on your device."]}),"\n",(0,r.jsx)(n.li,{children:'If everything looks correct, press both buttons at the "Accept and send" screen to approve the transaction. Otherwise, press both buttons at the "Reject" screen to reject the transaction.'}),"\n",(0,r.jsxs)(n.li,{children:['After the transaction has been approved, it is now signed and sent to the Conflux Network. You can see the transaction status in MetaMask. If you click on the transaction and click "View on block explorer", you can see more details on ',(0,r.jsx)(n.a,{href:"https://evm.confluxscan.io",children:"Conflux Scan"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"receiving-crypto-assets",children:"Receiving Crypto Assets"}),"\n",(0,r.jsx)(n.p,{children:'In order to receive CFX and ERC20 tokens to your Ledger wallet account, simply copy your address from MetaMask and share it with the sender. You only need to sign transactions using your Ledger device when sending funds, not when receiving them. MetaMask can also provide you with an easy-to-use QR code under "Account details".'}),"\n",(0,r.jsx)(n.h4,{id:"obtaining-cfx",children:"Obtaining CFX"}),"\n",(0,r.jsx)(n.p,{children:"There are multiple ways of obtaining CFX and other tokens on Conflux eSpace."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You can obtain CFX and withdraw it to Conflux eSpace through a variety of centralized exchanges (e.g., ",(0,r.jsx)(n.a,{href:"https://www.kucoin.com",children:"KuCoin"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["You can also use a decentralized exchange like ",(0,r.jsx)(n.a,{href:"https://app.swappi.io/#/swap",children:"Swappi"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Finally, you can also transfer crypto assets from other chains to Conflux eSpace through cross-chain apps like ",(0,r.jsx)(n.a,{href:"https://app.multichain.org/#/router",children:"Multichain"}),", ",(0,r.jsx)(n.a,{href:"https://meson.fi/",children:"meson.fi"}),", ",(0,r.jsx)(n.a,{href:"https://cbridge.celer.network/#/transfer",children:"cBridge"}),", or the ",(0,r.jsx)(n.a,{href:"https://confluxhub.io/espace-bridge",children:"Conflux eSpace Bridge"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"checking-your-balance",children:"Checking Your Balance"}),"\n",(0,r.jsx)(n.p,{children:"The easiest way to check your CFX and ERC20 token balances held by your Ledger account is to simply view them in MetaMask."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"conflux-app-in-ledger-live",src:t(23758).Z+"",width:"1664",height:"1644"})}),"\n",(0,r.jsxs)(n.p,{children:['Alternatively, you can click on "View Account in Explorer", or navigate to ',(0,r.jsx)(n.a,{href:"https://evm.confluxscan.net",children:"https://evm.confluxscan.net"})," and manually search for your address to see your token balances and transaction history."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"conflux-app-in-ledger-live",src:t(96301).Z+"",width:"1664",height:"1184"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},17309:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/add-ledger-accounts-in-fluent-0-59146e34f75736c9851e3112f2288b96.jpg"},51479:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/conflux-app-in-ledger-live-1621e851c98e720df39966f63d885b05.jpg"},23758:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/metamask-view-balance-9e558f0db402afa799f16d678e68c6e1-9e558f0db402afa799f16d678e68c6e1.png"},96301:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/scan-view-balance-bf5b143069670feb9634e0b31c13296c-bf5b143069670feb9634e0b31c13296c.png"},6324:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/send-tx-using-ledger-b9ea17d09195baf480d270dcfdc5bcb5.jpg"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(67294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);