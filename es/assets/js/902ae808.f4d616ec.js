"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8908],{22523:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>d});var a=n(85893),r=n(11151),s=n(17661);const c={sidebar_position:1,title:"Prueba de trabajo (Proof of Work)",displayed_sidebar:"generalSidebar"},i=void 0,t={id:"general/conflux-basics/consensus-mechanisms/proof-of-work/proof-of-work",title:"Prueba de trabajo (Proof of Work)",description:"Concepto de PoW",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/conflux-basics/consensus-mechanisms/proof-of-work/proof-of-work.mdx",sourceDirName:"general/conflux-basics/consensus-mechanisms/proof-of-work",slug:"/general/conflux-basics/consensus-mechanisms/proof-of-work/",permalink:"/es/docs/general/conflux-basics/consensus-mechanisms/proof-of-work/",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Prueba de trabajo (Proof of Work)",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Consenso",permalink:"/es/docs/general/conflux-basics/consensus-mechanisms/"},next:{title:"La estructura Tree-Graph",permalink:"/es/docs/general/conflux-basics/consensus-mechanisms/proof-of-work/tree-graph"}},l={},d=[{value:"Concepto de PoW",id:"concepto-de-pow",level:2},{value:"Consenso PoW de Bitcoin",id:"consenso-pow-de-bitcoin",level:2},{value:"Consenso de PoW de Conflux",id:"consenso-de-pow-de-conflux",level:2}];function u(e){const o={a:"a",blockquote:"blockquote",h2:"h2",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h2,{id:"concepto-de-pow",children:"Concepto de PoW"}),"\n",(0,a.jsx)(o.p,{children:"El concepto de Prueba de Trabajo (PoW) fue introducido por primera vez por Cynthia Dwork y Moni Naor en 1993 como un medio para prevenir el correo no deseado (spam). El concepto era simple: requiere que el remitente de correo electr\xf3nico resuelva un problema de computaci\xf3n antes de enviarlo. El problema computacional est\xe1 dise\xf1ado para que requiera tiempo, necesitando cierta cantidad de poder computo para resolver.  El receptor del correo electr\xf3nico verificar\xeda entonces que el remitente hab\xeda resuelto el problema computacional antes de aceptar el correo electr\xf3nico. Este proceso de verificaci\xf3n asegurar\xeda que s\xf3lo se aceptar\xe1n correos electr\xf3nicos leg\xedtimos y que los spammers no pueden inundar la bandeja de entrada del receptor con correos electr\xf3nicos no solicitados."}),"\n",(0,a.jsx)(o.p,{children:'La idea detr\xe1s de esto era hacer que resulte mucho m\xe1s dif\xedcil y intensivo en recursos para que los spammers env\xeden correos masivos, mientras que todav\xeda permite a los remitentes leg\xedtimos de correo electr\xf3nico enviar sus mensajes, pero con unas pocas inconveniencias. Mientras que el concepto de PoW para la prevenci\xf3n de spam por correo electr\xf3nico se escuch\xf3, no fue ampliamente adoptada debido a las molestias que plante\xf3 a los remitentes de correo electr\xf3nico leg\xedtimos. Sin embargo, el concepto de PoW fue adaptado m\xe1s tarde por Satoshi Nakamoto para crear el sistema electr\xf3nico de activos digitales peer-to-peer o la blockchain "bitcoin".'}),"\n",(0,a.jsx)(o.h2,{id:"consenso-pow-de-bitcoin",children:"Consenso PoW de Bitcoin"}),"\n",(0,a.jsx)(o.p,{children:"Bitcoin utiliza el mecanismo PoW para determinar qui\xe9n puede agregar nuevos bloques en la cadena de bloques. El proceso de adici\xf3n de un bloque involucra una y otra vez hacer hash en la cabecera del bloque con un valor nonce para encontrar un hash que cumpla con el objetivo de dificultad actual establecido por la red. Los mineros compiten para resolver este rompecabezas, y el primer minero en resolverlo es recompensado con bitcoins reci\xe9n creados y cualquier comisi\xf3n de transacci\xf3n asociada con las transacciones en el bloque."}),"\n",(0,a.jsxs)(o.p,{children:["Adem\xe1s, se introduce la ",(0,a.jsx)(o.strong,{children:"regla de cadena de bloques m\xe1s larga"})," para asegurar que la red acuerde una sola versi\xf3n de la cadena de bloques. Si dos mineros crean bloques al mismo tiempo, una bifurcaci\xf3n en la cadena de bloques ocurre, creando dos versiones competitivas de la cadena de bloques. Para determinar cu\xe1l de las dos bifurcaciones es la v\xe1lida, se aplica la regla de cadena m\xe1s larga. Esta regla establece que la bifurcaci\xf3n v\xe1lida es la que tiene la cadena de bloques m\xe1s larga, es decir el que tiene m\xe1s prueba de trabajo invertido en \xe9l."]}),"\n",(0,a.jsx)(o.p,{children:"Al hacer dif\xedcil y intensivo en recursos crear nuevos bloques, PoW asegura que la red es segura y que ninguna entidad puede controlar el sistema a menos que controle m\xe1s del 51% de la potencia de c\xf3mputo. Adem\xe1s, el sistema de recompensas incentiva a los mineros para participar y mantener la red. La introducci\xf3n de PoW ha revolucionado la manera en que pensamos en los sistemas descentralizados y ha allanado el camino para el desarrollo de muchas otras criptomonedas y aplicaciones de blockchain."}),"\n",(0,a.jsx)(o.h2,{id:"consenso-de-pow-de-conflux",children:"Consenso de PoW de Conflux"}),"\n",(0,a.jsxs)(o.p,{children:["Conflux tambi\xe9n utiliza el mecanismo de consenso PoW para asegurar su red. Combinando la estructura de ledger ",(0,a.jsx)(o.a,{href:"https://arxiv.org/pdf/1805.03870.pdf",children:"Tree-Graph"})," y la ",(0,a.jsx)(o.a,{href:"https://confluxnetwork.medium.com/conflux-research-group-ghast-mechanism-adaptive-weight-ghast-explained-part-1-ffe8224a7282",children:"GHAST"})," regla de selecci\xf3n de cadena, puede lograr el mismo nivel de descentralizaci\xf3n y seguridad que Bitcoin y Ethereum pero proporcionar m\xe1s de dos \xf3rdenes de mejora de magnitud en la transacci\xf3n (TPS) y latencia de confirmaci\xf3n."]}),"\n","\n","\n",(0,a.jsx)(s.Z,{}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsxs)(o.p,{children:["Refer to the ",(0,a.jsx)(o.a,{href:"https://confluxnetwork.org/files/Conflux_Technical_Presentation_20200309.pdf",children:"Conflux Technical Presentation"})," page 45-47 for the most accurate description of Conflux's throughput."]}),"\n"]})]})}function p(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},17661:(e,o,n)=>{n.d(o,{Z:()=>x});n(67294);var a=n(36905),r=n(78259),s=n(34791),c=n(2735),i=n(97325),t=n(13899);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function u(e){let{href:o,children:n}=e;return(0,d.jsx)(s.Z,{href:o,className:(0,a.Z)("card padding--lg",l.cardContainer),children:n})}function p(e){let{href:o,icon:n,title:r,description:s}=e;return(0,d.jsxs)(u,{href:o,children:[(0,d.jsxs)(t.Z,{as:"h2",className:(0,a.Z)("text--truncate",l.cardTitle),title:r,children:[n," ",r]}),s&&(0,d.jsx)("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:s,children:s})]})}function m(e){let{item:o}=e;const n=(0,r.LM)(o);return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:o.label,description:o.description??(0,i.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:o.items.length})}):null}function f(e){let{item:o}=e;const n=(0,c.Z)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,r.xz)(o.docId??void 0);return(0,d.jsx)(p,{href:o.href,icon:n,title:o.label,description:o.description??a?.description})}function h(e){let{item:o}=e;switch(o.type){case"link":return(0,d.jsx)(f,{item:o});case"category":return(0,d.jsx)(m,{item:o});default:throw new Error(`unknown item type ${JSON.stringify(o)}`)}}function b(e){let{className:o}=e;const n=(0,r.jA)();return(0,d.jsx)(x,{items:n.items,className:o})}function x(e){const{items:o,className:n}=e;if(!o)return(0,d.jsx)(b,{...e});const s=(0,r.MN)(o);return(0,d.jsx)("section",{className:(0,a.Z)("row",n),children:s.map(((e,o)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},o)))})}},11151:(e,o,n)=>{n.d(o,{Z:()=>i,a:()=>c});var a=n(67294);const r={},s=a.createContext(r);function c(e){const o=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(s.Provider,{value:o},e.children)}}}]);