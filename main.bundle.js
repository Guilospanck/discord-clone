(()=>{"use strict";var e,t={819:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(81),a=n.n(r),l=n(645),i=n.n(l)()(a());i.push([e.id,"/* This CSS is being used because 'contentEditable'\n   don't display 'placeholder' attribute */\n[contentEditable=true]:empty:not(:focus):before{\n  content:attr(placeholder);\n  color: #72767d;\n}",""]);const o=i},501:(e,t,n)=>{var r=n(363),a=n.n(r),l=n(745),i=n(711),o=n(974),c=n(804);const s=c.ZP.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`,d=({SidebarComponent:e,ChannelsComponent:t,ChatComponent:n})=>a().createElement(s,null,a().createElement(e,null),a().createElement(t,null),a().createElement(n,null)),u="#36393f",h=c.ZP.a`
  display: flex;  
  flex: 0 0 auto;
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
  background-color: ${e=>{var t;return null!==(t=e.backgroundColor)&&void 0!==t?t:u}};
  
  outline: none;
  border: none;
  border-radius: ${e=>{var t;return null!==(t=e.borderRadius)&&void 0!==t?t:30}}px;

  cursor: pointer;

  position: relative;

  align-items: center;
  justify-content: center;

  overflow: hidden;

  transition: border-radius .3s ease-out, background-color .3s ease-out;    
  
  &:hover {
    border-radius: 15px;
    background-color: ${e=>{var t;return null!==(t=e.color)&&void 0!==t?t:u}};
  }
`,f=e=>a().createElement(h,{width:e.width,height:e.height,backgroundColor:e.backgroundColor,borderRadius:e.borderRadius,color:e.color,"data-testid":"link-container",onClick:()=>{e.onClickFn&&e.onClickFn(e.elementIndex)}},e.children);var p,m;function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}const v=function(e){return r.createElement("svg",g({viewBox:"0 0 71 55",fill:"current",xmlns:"http://www.w3.org/2000/svg"},e),p||(p=r.createElement("g",{clipPath:"url(#Discord-Logo-Color_svg__a)"},r.createElement("path",{d:"M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.451 4.483.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 0 1 .23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .233.027c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 0 0 .092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084Zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156Zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156Z"}))),m||(m=r.createElement("defs",null,r.createElement("clipPath",{id:"Discord-Logo-Color_svg__a"},r.createElement("path",{d:"M0 0h71v55H0z"})))))},b=c.ZP.nav`
  display: flex;
  flex-direction: column;
  background-color: ${"#202225"};
  
  min-width: 72px;
  height: 100vh;
  max-height: 100vh;

  overflow-y: auto;
  overflow-x: hidden;

  padding: 12px 0 0;
  align-items: center;
  gap: 1%;
  
  &::-webkit-scrollbar {
    width: 0 !important;
    background: transparent !important;
  }

`,x=c.ZP.div`
  margin: 8px 0;
  display: flex;
  justify-content: center;
  width: 72px;

  div {
    height: 2px;
    width: 32px;
    border-radius: 1px;
    background-color: hsla(0,0%,100%,0.06);
  }
`,w=c.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2%;
  width: 100%;
  height: 100%;
`,y=c.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
`,E=c.ZP.div`
  position: absolute;
  top: 20px;
  left: 0;
`,C=c.ZP.span`
  opacity: 1;
  
  position: absolute;
  width: 8px;
  border-radius: 0 4px 4px 0;
  margin-left: -4px;
  background-color: #FFF;
  
  transition: height .3s ease-out, visibility .3s ease-out, transform .3s ease-out;    
  
  height: ${e=>e.hovering&&!e.show?"20":e.show?"40":"8"}px;    
  visibility: ${e=>e.show||e.hovering&&!e.show?"visible":"hidden"};
  transform: ${e=>e.show?"translateY(-15px)":"translateY(-5px)"};
 
`,M=c.ZP.img`  
  width: ${60}px;
  height: ${60}px;
  border-radius: 50%;
  transform: scale(1.5);
  
  &:before {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #FFF;
  }
`,S=a().memo((({discordLogoColor:e})=>a().createElement(f,{key:"discord-link-styled-render",height:48,width:48,color:e},a().createElement(v,{width:28,height:20,fill:"#FFF"}))));S.displayName="DiscordLinkStyledRender";const H=a().memo((({allServers:e,handleOnMouseEnterPillAndImageContainerFn:t,handleOnMouseLeavePillAndImageContainerFn:n,serverSelected:r,serverHover:l,handleSidebarLinkClickFn:i})=>{const o=e.map(((e,o)=>{var c;return a().createElement(y,{key:`pill-${o}`,onMouseEnter:()=>t(e.id),onMouseLeave:()=>n(e.id)},a().createElement(E,null,a().createElement(C,{show:r.id===e.id,hovering:null!==(c=l[e.id])&&void 0!==c&&c})),a().createElement(f,{key:`${e.title}-${o}`,height:48,width:48,onClickFn:i,elementIndex:o},a().createElement(M,{src:e.icon,alt:`Icon of server ${e}`})))}));return a().createElement(a().Fragment,null,o)}));H.displayName="RenderServers";const Z=({viewModel:e})=>a().createElement(b,{"data-testid":"sidebar-component"},a().createElement(S,{discordLogoColor:e.DISCORD_LOGO_COLOR}),a().createElement(x,null,a().createElement("div",null)),a().createElement(w,null,a().createElement(H,{allServers:e.allServers,handleOnMouseEnterPillAndImageContainerFn:e.handleOnMouseEnterPillAndImageContainer,handleOnMouseLeavePillAndImageContainerFn:e.handleOnMouseLeavePillAndImageContainer,serverSelected:e.serverSelected,serverHover:e.serverHover,handleSidebarLinkClickFn:e.handleSidebarLinkClick}))),k=c.ZP.div`
  display: flex;
  flex: 0 0 auto; // {max} {min} {ideal size}. In other words: stay the same size
  flex-direction: column;
  width: 240px;
  background-color: ${"#2f3136"};
`,O=({ChannelsServerTitleComponent:e,ChannelsSectionComponent:t,ChannelsSidebarComponent:n})=>a().createElement(k,null,a().createElement(e,null),a().createElement(n,null),a().createElement(t,null));var A;function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}const I=function(e){return r.createElement("svg",P({width:18,height:18,className:"Discord-dropdown_svg__button-2BMPJJ"},e),A||(A=r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{d:"M0 0h18v18H0"}),r.createElement("path",{stroke:"currentColor",d:"m4.5 4.5 9 9M13.5 4.5l-9 9",strokeLinecap:"round"}))))},j=c.ZP.div`
  cursor: pointer;
`,D=c.ZP.header`
  position: relative;
  font-family: Ginto,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: 500;
  padding: 0 16px;
  height: 48px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  z-index: 3;
  
  transition: background-color .1s linear;
  color: ${"#FFF"};
  
  box-shadow: 0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05);
`,$=c.ZP.h1`
  font-size: 15px;
  line-height: 20px;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex: 1;
  z-index: 1;
`,_=c.ZP.div`
  z-index: 4;
  height: 100%;
  display: flex;
  align-items: center;
`,L=({viewModel:e})=>a().createElement(j,null,a().createElement(D,null,a().createElement($,null,e.title),a().createElement(_,null,a().createElement(I,null))));var R,F;function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}const N=function(e){return r.createElement("svg",U({"aria-hidden":"false",width:20,height:20,viewBox:"0 0 24 24"},e),R||(R=r.createElement("path",{d:"M6.7 11H5c0 1.19.34 2.3.9 3.28l1.23-1.23c-.27-.62-.43-1.31-.43-2.05ZM9.01 11.085c.005.027.01.055.01.085L15 5.18V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 .03.005.057.01.085ZM11.724 16.093l-.76.76-.71.716c.244.064.493.115.746.151V22h2v-4.28c3.28-.49 6-3.31 6-6.72h-1.7c0 3-2.54 5.1-5.3 5.1a5.29 5.29 0 0 1-.276-.007Z",fill:"currentColor"})),F||(F=r.createElement("path",{d:"M21 4.27 19.73 3 3 19.73 4.27 21l4.19-4.18 1.23-1.24 1.66-1.66 3.64-3.64L21 4.27Z",className:"Discord-microphone_svg__strikethrough-2Kl6HF",fill:"currentColor"})))};var T;function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(this,arguments)}const B=function(e){return r.createElement("svg",z({"aria-hidden":"false",width:20,height:20,viewBox:"0 0 24 24"},e),r.createElement("svg",z({width:24,height:24,viewBox:"0 0 24 24"},e),T||(T=r.createElement("path",{d:"M12 2.003c-5.514 0-10 4.485-10 10v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H4v-3c0-4.412 3.589-8 8-8s8 3.588 8 8v3h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-8c0-5.515-4.486-10-10-10Z",fill:"currentColor"}))))};var G;function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}const Y=function(e){return r.createElement("svg",V({"aria-hidden":"false",width:20,height:20,viewBox:"0 0 24 24"},e),G||(G=r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M19.738 10H22v4h-2.261a7.952 7.952 0 0 1-1.174 2.564L20 18l-2 2-1.435-1.436A7.946 7.946 0 0 1 14 19.738V22h-4v-2.262a7.94 7.94 0 0 1-2.564-1.174L6 20l-2-2 1.436-1.436A7.911 7.911 0 0 1 4.262 14H2v-4h2.262a7.9 7.9 0 0 1 1.174-2.564L4 6l2-2 1.436 1.436A7.9 7.9 0 0 1 10 4.262V2h4v2.261a7.967 7.967 0 0 1 2.565 1.174L18 3.999l2 2-1.436 1.437A7.93 7.93 0 0 1 19.738 10ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"})))},W="#b9bbbe",q=c.ZP.section`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;

  background-color: ${"#292b2f"};
  z-index: 1;

  height: 52px;
  align-items: center;
  font-size: 14px;  
  font-weight: 500;

  padding: 0 8px;
  margin-bottom: 1px;
`,K=c.ZP.button`
  display: flex;

  cursor: pointer;

  border: none;
  background: none;
  outline: none;

  border-radius: 30px;

  width: 32px;
  height: 32px;

  margin-right: 8px;
  overflow: hidden;

  & > img {
    transform: translateX(-6px);
  }

`,J=c.ZP.div`
  display: flex;
  flex-direction: column;

  margin-right: 4px;  

  cursor: pointer;
`,X=c.ZP.div`
  display: flex;

  color: ${"#dcddde"};

  font-size: 14px;
  line-height: 18px;  

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`,Q=c.ZP.div`
  color: ${W};

  font-size: 12px;
  line-height: 13px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`,ee=c.ZP.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
`,te=c.ZP.button`
  display: flex;
  outline: none;
  border: none;
  background: none;

  line-height: 0;
  width: 32px;
  height: 32px; 
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: ${W};

  cursor: pointer;

`,ne=({viewModel:e})=>a().createElement(q,null,a().createElement(K,null,a().createElement("img",{src:e.avatarURL,alt:" ","aria-hidden":"true"})),a().createElement(J,null,a().createElement(X,null,e.name),a().createElement(Q,null,e.tag)),a().createElement(ee,null,a().createElement(te,null,a().createElement(N,null)),a().createElement(te,null,a().createElement(B,null)),a().createElement(te,null,a().createElement(Y,null))));var re,ae;function le(){return le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},le.apply(this,arguments)}!function(e){e[e.HASHTAG=0]="HASHTAG",e[e.AUDIO=1]="AUDIO",e[e.DONE_LIST=2]="DONE_LIST"}(re||(re={}));const ie=function(e){return r.createElement("svg",le({className:"Discord-channel-drop_svg__arrow-2HswgU Discord-channel-drop_svg__icon-3zI3d2",viewBox:"0 0 24 24"},e),ae||(ae=r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41Z"})))};var oe;function ce(){return ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ce.apply(this,arguments)}const se=function(e){return r.createElement("svg",ce({className:"Discord-audio_svg__icon-2W8DHg","aria-hidden":"false",viewBox:"0 0 24 24"},e),oe||(oe=r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M11.383 3.079a1.002 1.002 0 0 0-1.09.217L6 8.002H3c-.55 0-1 .451-1 1v6c0 .55.45 1 1 1h3l4.293 4.708A1 1 0 0 0 12 20.002v-16a.998.998 0 0 0-.617-.923ZM14 5.002v2c2.757 0 5 2.244 5 5 0 2.757-2.243 5-5 5v2c3.86 0 7-3.139 7-7 0-3.859-3.14-7-7-7Zm0 4c1.654 0 3 1.347 3 3 0 1.655-1.346 3-3 3v-2c.551 0 1-.449 1-1 0-.551-.449-1-1-1v-2Z","aria-hidden":"true"})))};var de;function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}const he=function(e){return r.createElement("svg",ue({viewBox:"0 0 40 40",fill:"none",className:"Discord-code-of-conduct_svg__icon-2W8DHg"},e),de||(de=r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M33 34.583V7.5h2v29.167H9c-2.209 0-4-1.866-4-4.167v-25c0-2.301 1.791-4.167 4-4.167h22v27.084H9c-1.104 0-2 .931-2 2.083 0 1.151.896 2.083 2 2.083h24ZM23.972 10l-8.083 7.991-3.18-3.147L10 17.506l5.889 5.827 10.778-10.666L23.972 10Z"})))};var fe;function pe(){return pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}const me=function(e){return r.createElement("svg",pe({viewBox:"0 0 24 24",className:"Discord-hashtag_svg__icon-2W8DHg"},e),fe||(fe=r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M5.887 21a.5.5 0 0 1-.493-.587L6 17H2.595a.5.5 0 0 1-.492-.586l.175-1A.5.5 0 0 1 2.77 15h3.58l1.06-6H4.005a.5.5 0 0 1-.492-.586l.175-1A.5.5 0 0 1 4.18 7h3.58l.637-3.587A.5.5 0 0 1 8.889 3h.984a.5.5 0 0 1 .493.587L9.76 7h6l.637-3.587A.5.5 0 0 1 16.889 3h.984a.5.5 0 0 1 .493.587L17.76 7h3.405a.5.5 0 0 1 .492.586l-.175 1A.5.5 0 0 1 20.99 9h-3.58l-1.06 6h3.405a.5.5 0 0 1 .492.586l-.175 1a.5.5 0 0 1-.492.414H16l-.637 3.587a.5.5 0 0 1-.492.413h-.984a.5.5 0 0 1-.493-.587L14 17H8l-.637 3.587a.5.5 0 0 1-.492.413h-.984ZM9.41 9l-1.06 6h6l1.06-6h-6Z"})))},ge="#8e9297",ve="#dcddde",be=c.ZP.nav`
  display: flex;  
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
  
  overflow-x: none;
  overflow-y: auto;

  margin-top: 16px;  
  justify-content: flex-start;
`,xe=c.ZP.div`
  height: 24px;
  padding-right: 8px;
  padding-left: 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: ${ge};

  &:hover > * {
    color: ${ve}
  }
`,we=c.ZP.h2`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  text-transform: uppercase;

  font-size: 12px;
  line-height: 16px;
  letter-spacing: .25px;
  
  font-family: ${'Ginto,"Helvetica Neue",Helvetica,Arial,sans-serif'};
  font-weight: 700;
  color: ${ge};

  flex: 1 1 auto;
`,ye=c.ZP.ul`
  margin-top: 0px;
  padding-right: 8px;
  padding-left: 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
  
  color: ${"#8e9297"};
`,Ee=c.ZP.li`
  height: 34px;
  padding: 1px 8px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: ${ge};

  &:hover {
    background-color: ${"rgba(79,84,92,0.32)"};
  }

  &:hover > h3 {
    color: ${ve}
  }
`,Ce=c.ZP.h3`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  font-size: 16px;
  line-height: 20px;
  
  font-weight: 500;
  color: ${ge};

  flex: 1 1 auto;
`,Me=({viewModel:e})=>{const t=({title:e})=>a().createElement(xe,null,a().createElement(ie,{width:12,height:12}),a().createElement(we,null,e)),n=({categoryId:t,channelsList:n})=>{const l=n.map((n=>a().createElement(Ee,{key:`${t}-${n.id}`,onClick:()=>e.onChannelClick(t,n.id)},a().createElement(r,{key:`${t}-${n.id}-icon`,icon:n.icon}),a().createElement(Ce,{key:`${t}-${n.id}-title`},n.title))));return a().createElement(a().Fragment,null,l)},r=({icon:e})=>{switch(e){case re.AUDIO:return a().createElement(se,{width:20,height:20,style:{marginRight:"6px"}});case re.HASHTAG:return a().createElement(me,{width:20,height:20,style:{marginRight:"6px"}});case re.DONE_LIST:return a().createElement(he,{width:20,height:20,style:{marginRight:"6px"}});default:return a().createElement(me,{width:20,height:20,style:{marginRight:"6px"}})}};return a().createElement(be,null,e.categories.map((e=>a().createElement(a().Fragment,{key:`${e.id}-fragment`},a().createElement(t,{key:`${e.id}-title`,title:e.title}),a().createElement(ye,{key:`${e.id}-channelsul`},a().createElement(n,{key:`${e.id}-channelslist`,categoryId:e.id,channelsList:e.channels}))))))},Se=c.ZP.main`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  background-color: ${"#36393f"};
`,He=({ChatSectionComponent:e,ChatMainComponent:t,ChatFormComponent:n})=>a().createElement(Se,null,a().createElement(e,null),a().createElement(t,null),a().createElement(n,null));var Ze,ke;function Oe(){return Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oe.apply(this,arguments)}const Ae=function(e){return r.createElement("svg",Oe({className:"Discord-threads_svg__icon-2xnN2Y","aria-hidden":"false",width:24,height:24,fill:"none"},e),Ze||(Ze=r.createElement("path",{fill:"currentColor",d:"M5.433 21a.12.12 0 0 1-.118-.141L6 17H2.143a.12.12 0 0 1-.118-.14l.308-1.76a.12.12 0 0 1 .118-.1H6.35l1.06-6H3.553a.12.12 0 0 1-.118-.14l.308-1.76A.12.12 0 0 1 3.86 7H7.76l.692-3.901A.12.12 0 0 1 8.57 3h1.757a.12.12 0 0 1 .118.141L9.76 7h6l.692-3.901A.12.12 0 0 1 16.57 3h1.757a.12.12 0 0 1 .118.141L17.76 7h3.857a.12.12 0 0 1 .118.14l-.308 1.76a.12.12 0 0 1-.118.1h-3.9l-.36 2.04H15.05L15.41 9h-6l-1.06 6h2.21v2H8l-.693 3.901A.12.12 0 0 1 7.19 21H5.433Z"})),ke||(ke=r.createElement("path",{fill:"currentColor",d:"M13.44 12.96a.96.96 0 0 0-.96.96v6.301c0 .53.43.96.96.96h.96a.24.24 0 0 1 .24.24v2.039a.24.24 0 0 0 .4.178l2.446-2.21a.96.96 0 0 1 .643-.247h4.43c.531 0 .96-.43.96-.96V13.92a.96.96 0 0 0-.96-.96h-9.12Z"})))};var Pe;function Ie(){return Ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ie.apply(this,arguments)}const je=function(e){return r.createElement("svg",Ie({className:"Discord-alarms_svg__icon-2xnN2Y","aria-hidden":"false",width:24,height:24,fill:"none"},e),Pe||(Pe=r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M18 9v5a3 3 0 0 0 3 3v1H3v-1a3 3 0 0 0 3-3V9a6 6 0 1 1 12 0Zm-6 12c-1.476 0-2.752-.81-3.445-2h6.89c-.693 1.19-1.97 2-3.445 2Z"})))};var De;function $e(){return $e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$e.apply(this,arguments)}const _e=function(e){return r.createElement("svg",$e({className:"Discord-pin_svg__icon-2xnN2Y","aria-hidden":"false",width:24,height:24},e),De||(De=r.createElement("path",{fill:"currentColor",d:"m22 12-9.899-9.899-1.415 1.413 1.415 1.415-4.95 4.949v.002L5.736 8.465 4.322 9.88l4.243 4.242-5.657 5.656 1.414 1.414 5.657-5.656 4.243 4.242 1.414-1.414-1.414-1.414L19.171 12h.001l1.414 1.414L22 12Z"})))};var Le,Re,Fe;function Ue(){return Ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ue.apply(this,arguments)}const Ne=function(e){return r.createElement("svg",Ue({className:"Discord-memberlist_svg__icon-2xnN2Y","aria-hidden":"false",width:24,height:24},e),Le||(Le=r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M14 8.006c0 2.205-1.794 4-4 4-2.205 0-4-1.795-4-4s1.794-4 4-4 4 1.795 4 4Zm-12 11c0-3.533 3.29-6 8-6 4.711 0 8 2.467 8 6v1H2v-1Z"})),Re||(Re=r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M14 8.006c0 2.205-1.794 4-4 4-2.205 0-4-1.795-4-4s1.794-4 4-4 4 1.795 4 4Zm-12 11c0-3.533 3.29-6 8-6 4.711 0 8 2.467 8 6v1H2v-1Z"})),Fe||(Fe=r.createElement("path",{fill:"currentColor",d:"M20 20.006h2v-1c0-2.563-1.73-4.565-4.479-5.47 1.541 1.377 2.48 3.27 2.48 5.47v1ZM14.883 11.908A4.007 4.007 0 0 0 18 8.006a4.006 4.006 0 0 0-3.503-3.97A5.977 5.977 0 0 1 16 8.007a5.974 5.974 0 0 1-1.362 3.804c.082.032.164.064.245.098Z"})))};var Te;function ze(){return ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ze.apply(this,arguments)}const Be=function(e){return r.createElement("svg",ze({className:"Discord-magnifyingglass_svg__icon-18rqoe Discord-magnifyingglass_svg__visible-2yTnyW","aria-hidden":"false",width:18,height:18,viewBox:"0 0 24 24"},e),Te||(Te=r.createElement("path",{fill:"currentColor",d:"M21.707 20.293 16.314 14.9A7.928 7.928 0 0 0 18 10a7.945 7.945 0 0 0-2.344-5.656A7.94 7.94 0 0 0 10 2a7.94 7.94 0 0 0-5.656 2.344A7.945 7.945 0 0 0 2 10c0 2.137.833 4.146 2.344 5.656A7.94 7.94 0 0 0 10 18a7.922 7.922 0 0 0 4.9-1.686l5.393 5.392 1.414-1.413ZM10 16a5.959 5.959 0 0 1-4.242-1.757A5.958 5.958 0 0 1 4 10c0-1.602.624-3.109 1.758-4.242A5.956 5.956 0 0 1 10 4c1.603 0 3.109.624 4.242 1.758A5.957 5.957 0 0 1 16 10c0 1.603-.624 3.11-1.758 4.243A5.959 5.959 0 0 1 10 16Z"})))};var Ge;function Ve(){return Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ve.apply(this,arguments)}const Ye=function(e){return r.createElement("svg",Ve({className:"Discord-inbox_svg__icon-2xnN2Y","aria-hidden":"false",width:24,height:24,fill:"none"},e),Ge||(Ge=r.createElement("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2Zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10Z",fill:"currentColor"})))};var We;function qe(){return qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qe.apply(this,arguments)}const Ke=function(e){return r.createElement("svg",qe({className:"Discord-help_svg__icon-2xnN2Y","aria-hidden":"false",width:24,height:24},e),We||(We=r.createElement("path",{fill:"currentColor",d:"M12 2C6.486 2 2 6.487 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.513-4.486-10-10-10Zm0 16.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm1-4.375V15h-2v-3h1a2 2 0 1 0-2-2H8c0-2.205 1.795-4 4-4s4 1.795 4 4a4.01 4.01 0 0 1-3 3.875Z"})))},Je="#dcddde",Xe='Ginto,"Helvetica Neue",Helvetica,Arial,sans-serif;',Qe="#72767d",et=c.ZP.section`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;    

  width: 100%;
  height: 48px;
  padding: 0 8px;
  font-size: 16px;
  line-height: 20px;
  
  cursor: default;
  z-index: 2;
  color: ${Je};

  box-shadow: 0 1px 0 rgb(4 4 5 / 20%), 0 1.5px 0 rgb(6 6 7 / 5%), 0 2px 0 rgb(4 4 5 / 5%);
`,tt=c.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`,nt=c.ZP.div`
  display: flex;
  flex: 0 0 auto;
  height: 24px;
  width: auto;
  margin: 0 8px;
  color: ${Qe};
`,rt=c.ZP.h3`
  justify-content: flex-start;
  margin: 0 8px 0 0;
  flex: 0 0 auto;
  min-width: auto;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
  color: ${"#FFF"};
  font-family: ${Xe};
  font-size: 16px;
  line-height: 20px;
`,at=c.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;    
  align-items: center;
  font-family: ${Xe};

  & > button {
    color: ${Qe};
  }
`,lt=c.ZP.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: ${Je};
  }
`,it=c.ZP.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between;    
  align-items: center;

  padding: 0 2px;
  cursor: text;

  border-radius: 4px;
  height: 24px;
  background-color: ${"#202225"};
`,ot=c.ZP.input`
  outline: none;
  border: none;
  transition: width .25s ease;

  width: 144px;
  background: transparent;
  
  color: ${Je};

  &:focus {
    width: 240px;
  }

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  overflow: hidden;
  font-family: inherit;
  padding: 2px 2px;  
`,ct=c.ZP.div`
  color: ${Qe};
  display: flex;
  align-items: center;
`,st=a().memo((()=>a().createElement(at,null,a().createElement(lt,null,a().createElement(Ae,null)),a().createElement(lt,null,a().createElement(je,null)),a().createElement(lt,null,a().createElement(_e,null)),a().createElement(lt,null,a().createElement(Ne,null)),a().createElement(it,null,a().createElement(ot,{placeholder:"Search"}),a().createElement(ct,null,a().createElement(Be,null))),a().createElement(lt,null,a().createElement(Ye,null)),a().createElement(lt,null,a().createElement(Ke,null)))));st.displayName="ButtonIconsContainerFC";const dt=({viewModel:e})=>a().createElement(et,null,a().createElement((()=>a().createElement(tt,null,a().createElement(nt,null,a().createElement(me,null)),a().createElement(rt,null,e.channelTitle))),null),a().createElement(st,null)),ut=c.ZP.article`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  padding: 16px 0;
  margin-bottom: 6px;

  align-items: stretch;
  justify-content: stretch;
  overflow-x: none;
  overflow-y: auto;
  overflow-anchor: none; // when new data appears, it won't move the scrollbar    
`,ht=c.ZP.img`
  position: absolute;
  left: 16px;
  margin-top: calc(10px - .125rem);
  z-index: 1;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  user-select: none;
  flex: 0 0 auto;
  pointer-events: none;
`,ft=c.ZP.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;

  min-height: 2.75rem;
  padding-left: 72px;
  padding-top: .125rem;
  padding-bottom: .125rem;
  padding-right: 48px !important;

  position: relative;
`,pt=c.ZP.h2`
  display: block;
  flex-direction: row;

  margin: 0;

  overflow: hidden;
  line-height: 1.375rem;
  min-height: 1.375rem;
  white-space: break-spaces;
`,mt=c.ZP.span`
  margin-right: .25rem;
  
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.375rem;
  color: ${"#fff"};
  display: inline;
  vertical-align: baseline;
  overflow: hidden;
  flex-shrink: 0;
`,gt=c.ZP.span`
  font-size: 0.75rem;
  line-height: 1.375rem;
  color: ${"#72767d"};
  vertical-align: baseline;

  margin-left: .25rem;

  display: inline-block;
  height: 1.25rem;
  cursor: default;
  pointer-events: none;
  font-weight: 500;
`,vt=c.ZP.time`

`,bt=c.ZP.div`
  user-select: text; 
  color: ${"#dcddde"};
  font-size: 1rem;
  line-height: 1.375rem;
  white-space: pre-wrap;
  white-space: break-spaces;
  word-wrap: break-word;
  user-select: text;
  font-weight: 400;
`,xt=c.ZP.div`
  height: 0;
  border-top: thin solid rgba(79,84,92,0.48);
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 auto;
  pointer-events: none;
  box-sizing: border-box;

  margin-top: 1.5rem;
  margin-bottom: .5rem;
  margin-left: 1rem;
  margin-right: .875rem;
`,wt=c.ZP.span`
  display: block;
  flex: 0 0 auto;
  padding: 2px 4px;
  color: #a3a6aa;
  background: #36393f;
  line-height: 13px;
  font-size: 12px;
  margin-top: -1px;
  font-weight: 600;
  border-radius: 8px;
`,yt=({messages:e})=>{if(!e.length)return a().createElement(a().Fragment,null);const t=e.map(((e,t)=>a().createElement(bt,{key:`${e.id}-${t}`},e.message)));return a().createElement(a().Fragment,null,t)},Et=({avatarURL:e,name:t,date:n})=>a().createElement(a().Fragment,null,a().createElement(ht,{src:e,"aria-hidden":"true",alt:" "}),a().createElement(pt,null,a().createElement(mt,null,t),a().createElement(gt,null,a().createElement(vt,null,n)))),Ct=({user:e,messages:t,index:n,nextDay:r})=>{var l;if(!e||!t.length)return a().createElement(a().Fragment,null);const i=(null===(l=t[0])||void 0===l?void 0:l.timestamp)?new Date(Number(t[0].timestamp)).toLocaleDateString("pt-br"):"";return a().createElement(a().Fragment,null,r&&a().createElement(xt,null,a().createElement(wt,null,i)),a().createElement(ft,{key:`${e.id}-${n}-${t[0].id}`},a().createElement(Et,{key:`${e.id}-${n}-${t[0].id}-user_info`,avatarURL:e.avatarURL,name:e.name,date:i}),a().createElement(yt,{messages:t})))},Mt=({viewModel:e})=>a().createElement(ut,null,e.messages.map(((e,t)=>{var n,r;return a().createElement(Ct,{key:`${e.user.id}-${t}-${null!==(r=null===(n=e.messages[0])||void 0===n?void 0:n.timestamp)&&void 0!==r?r:""}`,user:e.user,messages:e.messages,nextDay:e.nextDay,index:t})}))),St="#dcddde",Ht=c.ZP.form`
  position: relative;
  flex-shrink: 0;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: -8px;
  margin-bottom: 24px;

  border-radius: 8px;

  width: 100%;
  text-indent: 0;
`,Zt=c.ZP.div`
  background-color: ${"#40444b"};
  color: ${St};

  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 8px;
`,kt=c.ZP.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding-left: 16px; 
`,Ot=c.ZP.div`
  position: sticky;
  flex: 0 0 auto;
  align-self: stretch;
`,At=c.ZP.button`
  position: sticky;
  top: 0;

  cursor: pointer;

  margin: 0;
  border: 0;

  margin-left: -16px;
  padding: 10px 16px;  
  height: 44px;

  background: transparent;
  color: currentColor;
`,Pt=c.ZP.div`
  display: flex;  
  width: 100%;

  background-color: transparent;
  resize: none;
  border: none;
  
  appearance: none;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.375rem;
  color: ${St};

  padding-left: 0;
  padding-right: 10px;
`,It=c.ZP.div`
  width: 100%;

  padding-bottom: 11px;
  padding-top: 11px;
  padding-right: 10px;

  background-color: transparent;
  resize: none;
  border: none;
  outline: none;

  /* Use contentEditable */
  min-height: 44px;
  max-height: 50vh;

  text-align: left;
  word-break: break-word;
  white-space: break-spaces !important; 
`,jt=c.ZP.div`
  position: sticky;  
  flex: 0 0 auto;
  align-self: stretch;
  padding: 7px 10px;  
`,Dt=c.ZP.button`
  position: sticky;
  outline: none;
  background: transparent;
  appearance: none;
  border: none;
  color: ${"#b9bbbe"};
  cursor: pointer;

  &:hover {
    color: ${St};
  }
`,$t=c.ZP.div`
  background-image: url(${e=>e.urlImg});
  background-size: 242px 110px;
  background-position: ${e=>e.bgPositionX}px ${e=>e.bgPositionY}px;

  transform: scale(1);
  filter: grayscale(100%);

  background-repeat: no-repeat;
  width: 22px;
  height: 22px;
  display: block;

  &:hover {
    transform: scale(1.14);
    filter: grayscale(0%);    
  }
`;var _t=n(379),Lt=n.n(_t),Rt=n(795),Ft=n.n(Rt),Ut=n(569),Nt=n.n(Ut),Tt=n(565),zt=n.n(Tt),Bt=n(216),Gt=n.n(Bt),Vt=n(589),Yt=n.n(Vt),Wt=n(819),qt={};qt.styleTagTransform=Yt(),qt.setAttributes=zt(),qt.insert=Nt().bind(null,"head"),qt.domAPI=Ft(),qt.insertStyleElement=Gt();Lt()(Wt.Z,qt);Wt.Z&&Wt.Z.locals&&Wt.Z.locals;var Kt;function Jt(){return Jt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jt.apply(this,arguments)}const Xt=function(e){return r.createElement("svg",Jt({width:24,height:24},e),Kt||(Kt=r.createElement("path",{className:"Add-button_svg__attachButtonPlus-3IYelE",fill:"currentColor",d:"M12 2.001c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10Zm5 11h-4v4h-2v-4H7v-2h4v-4h2v4h4v2Z"})))};var Qt;function en(){return en=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},en.apply(this,arguments)}const tn=function(e){return r.createElement("svg",en({width:24,height:24,"aria-hidden":"false"},e),Qt||(Qt=r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M16.886 7.999H20c1.104 0 2 .897 2 2v2H2v-2c0-1.103.897-2 2-2h3.114a5.028 5.028 0 0 1-1.235-.878 3.002 3.002 0 0 1 0-4.242c1.133-1.133 3.107-1.133 4.242-.002 1.637 1.637 1.858 4.718 1.877 5.064a.094.094 0 0 1-.004.032.107.107 0 0 0-.004.026h.02a.108.108 0 0 0-.004-.026c-.003-.01-.005-.02-.004-.031.02-.346.24-3.427 1.877-5.064 1.135-1.133 3.107-1.132 4.242-.001a3.006 3.006 0 0 1 0 4.244 5.028 5.028 0 0 1-1.235.878ZM7.293 5.707A1.002 1.002 0 0 1 8 4c.268 0 .519.103.707.292.59.59.934 1.648 1.118 2.53-.88-.183-1.946-.529-2.532-1.115Zm6.881 1.117c.185-.883.528-1.941 1.119-2.531A.986.986 0 0 1 16 4c.268 0 .519.103.706.291.39.391.391 1.025.001 1.416-.591.591-1.65.935-2.533 1.117ZM3 13.999v6c0 1.103.897 2 2 2h6v-8H3Zm10 0v8h6c1.104 0 2-.897 2-2v-6h-8Z"})))};var nn;function rn(){return rn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rn.apply(this,arguments)}const an=function(e){return r.createElement("svg",rn({width:24,height:24,className:"Discord-gif_svg__icon-1d5zch","aria-hidden":"false"},e),nn||(nn=r.createElement("path",{fill:"currentColor",d:"M2 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm7.764 9.448v4.032c-.864.564-1.884.876-3.024.876-2.628 0-4.08-1.728-4.08-4.284 0-2.568 1.572-4.308 4.128-4.308 1.02 0 1.872.24 2.532.612l-.276 1.788c-.624-.396-1.356-.708-2.208-.708-1.428 0-2.124 1.056-2.124 2.604 0 1.56.72 2.652 2.148 2.652.456 0 .78-.096 1.116-.264v-1.476H6.428v-1.524h3.336Zm1.784-3.528H13.6v8.28h-2.052V7.92Zm8.924 0v1.716h-2.916v1.692h2.304v1.716h-2.304V16.2h-2.04V7.92h4.956Z"})))};var ln,on;function cn(){return cn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cn.apply(this,arguments)}const sn=function(e){return r.createElement("svg",cn({width:22,height:22,className:"Discord-sticker_svg__stickerIcon-3Jx5SE","aria-hidden":"false"},e),ln||(ln=r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M12 .663v4.739A2.594 2.594 0 0 0 14.6 8h4.74a.656.656 0 0 0 .466-1.12L13.121.196A.654.654 0 0 0 12 .663Zm2.576 9.365A4.608 4.608 0 0 1 9.97 5.422V.058H1.994A2 2 0 0 0 0 2.052v15.952a2 2 0 0 0 1.994 1.994h15.952a2 2 0 0 0 1.994-1.994v-7.976h-5.364ZM12 12.22a2 2 0 1 1-4 0H6.668a3.333 3.333 0 0 0 6.666 0H12Zm-7.554 1.111a1.111 1.111 0 1 1-2.222 0 1.111 1.111 0 0 1 2.222 0Zm12.22 1.111a1.11 1.11 0 1 0 0-2.222 1.11 1.11 0 0 0 0 2.222Z"})),on||(on=r.createElement("path",{fill:"currentColor",className:"Discord-sticker_svg__hidden-334jci",fillRule:"evenodd",clipRule:"evenodd",d:"M12 .663v4.739A2.594 2.594 0 0 0 14.6 8h4.74a.656.656 0 0 0 .466-1.12L13.121.196A.654.654 0 0 0 12 .663Zm2.576 9.365A4.608 4.608 0 0 1 9.97 5.422V.058H1.994A2 2 0 0 0 0 2.052v15.952a2 2 0 0 0 1.994 1.994h15.952a2 2 0 0 0 1.994-1.994v-7.976h-5.364ZM12 13H8a2 2 0 1 0 4 0Zm5.777.331a1.11 1.11 0 1 1-2.222 0 1.11 1.11 0 0 1 2.222 0ZM2 12.236 2.535 11l3.09 1.784a.25.25 0 0 1 0 .432L2.535 15 2 13.764 3.323 13 2 12.236Z"})))},dn=a().memo((({x:e,y:t,onMouseEnterFn:n})=>a().createElement(jt,null,a().createElement(Dt,null,a().createElement(tn,null)),a().createElement(Dt,null,a().createElement(an,null)),a().createElement(Dt,null,a().createElement(sn,null)),a().createElement(Dt,{onMouseEnter:()=>n()},a().createElement($t,{urlImg:"media/Discord-emoji.png",bgPositionX:e,bgPositionY:t})))));dn.displayName="EmojisButtonsFC";const un=a().memo((({messageRef:e,onKeyDownFn:t,channelTitle:n})=>a().createElement(Pt,null,a().createElement(It,{contentEditable:!0,ref:e,onKeyDown:e=>t(e),placeholder:`Message #${n}`}))));un.displayName="MessageInputFC";const hn=()=>a().createElement(Ot,null,a().createElement(At,null,a().createElement(Xt,null)));hn.displayName="AddButtonFC";const fn=({viewModel:e})=>a().createElement(Ht,null,a().createElement(Zt,null,a().createElement(kt,null,a().createElement(hn,null),a().createElement(un,{messageRef:e.messageRef,onKeyDownFn:e.onKeyDown,channelTitle:e.channelTitle}),a().createElement(dn,{x:e.emojiCoordinates.x,y:e.emojiCoordinates.y,onMouseEnterFn:e.onMouseEnterEmojiBtn})))),pn=[{id:"5a714803-cb77-4969-92fb-14cdc583d319",title:"Server 1",icon:"https://images.unsplash.com/photo-1648686441339-bc5bf15ea77c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",categories:[{id:"99bace5d-52ab-4797-820c-64585dbd735f",title:"welcome!",channels:[{id:"298ae379-7074-46d8-882c-d5d0ef29760e",title:"welcome",icon:re.HASHTAG},{id:"147b66b8-c822-4f92-82ed-cfc0a0db74a6",title:"code-of-conduct",icon:re.DONE_LIST},{id:"d48ab753-72bb-40cb-ad12-8a91b79dd12b",title:"announcements",icon:re.HASHTAG}]},{id:"f183b545-8280-48b3-a16f-26af4252f52c",title:"canais de voz!",channels:[{id:"14931791-cb59-4429-b6a7-342cbb0b34b2",title:"Pair Working 01",icon:re.AUDIO},{id:"c57af019-c5d3-4444-97d6-8ff4180201fc",title:"Pair Working 02",icon:re.AUDIO}]}]},{id:"4a0ac154-8cc6-4bb1-b53e-3d23997ccb49",title:"Server 2",icon:"https://images.unsplash.com/photo-1648668953838-fc4ae3131420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",categories:[{id:"e64236e8-6348-4d12-a66f-749cc45f0011",title:"events!",channels:[{id:"6e965946-258d-4f8e-9429-27c86fe17745",title:"event-chat",icon:re.HASHTAG},{id:"0be8d5e1-e7f1-4666-b0b8-991b48b3e0c2",title:"Eventos_Channel",icon:re.AUDIO}]},{id:"b80e0463-5e9d-4277-9a82-3aa2622f29d9",title:"off-topic",channels:[{id:"1e77ef9b-9755-466d-987a-577e7e963fde",title:"general",icon:re.HASHTAG},{id:"72194b61-5366-4c4f-95d5-2da86b502eec",title:"introduction",icon:re.HASHTAG}]}]},{id:"7edee8b8-c97c-429c-8e2c-2c7799f64557",title:"Server 3",icon:"https://images.unsplash.com/photo-1631514138684-4b4669af3e56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",categories:[{id:"b35bb8c2-3b25-41e6-b3c3-ad8a0ffa76b6",title:"server",channels:[{id:"24e6ea1d-59d1-42f4-991f-3311481315ba",title:"rules",icon:re.DONE_LIST},{id:"06196382-3da8-448b-ab86-99d9560ef7eb",title:"roles",icon:re.HASHTAG},{id:"b65ed9e8-3296-47ad-91aa-4803dbbdf7b1",title:"suggestions",icon:re.HASHTAG}]},{id:"c3df4522-f111-4172-b6ea-9f7dced96a46",title:"voice chat",channels:[{id:"a8de8e8f-e946-4f72-8a40-8dc084284979",title:"Général",icon:re.AUDIO},{id:"1e1a94f6-f014-4c19-b337-2a6f8d080892",title:"Play and Stream 🎮",icon:re.AUDIO}]}]},{id:"62a1da11-d39f-4ca1-9b85-5fc60e402a0d",title:"Server 4",icon:"https://images.unsplash.com/photo-1630362731206-ac1ef24faf79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80",categories:[{id:"49d7e6a7-fc1e-4aa3-9b54-bd083f985064",title:"jams",channels:[{id:"b03c4a1c-0955-4e36-a183-c5c07a30a580",title:"best-contributors",icon:re.HASHTAG},{id:"9c4974ad-5a2c-48ba-8b09-5929d79aea0f",title:"work-in-progress",icon:re.HASHTAG},{id:"b749f2ea-0afd-4fcc-ba28-da30d50c8c6f",title:"published-games",icon:re.HASHTAG},{id:"b03c4a1c-0955-4e36-a183-c5c07a30a581",title:"cs-config",icon:re.HASHTAG},{id:"9c4974ad-5a2c-48ba-8b09-5929d79aea10",title:"dota-config",icon:re.HASHTAG},{id:"b749f2ea-0afd-4fcc-ba28-da30d50c8c70",title:"elden-config",icon:re.HASHTAG}]},{id:"e0017e5a-f2e6-4a38-b59d-685938dcbeb7",title:"caves",channels:[{id:"df142f16-e1b4-4030-877f-481fba272f7a",title:"programmers-cave",icon:re.HASHTAG},{id:"b8bc6e89-359d-4626-a0e9-3b5500d6625d",title:"artists-cave",icon:re.HASHTAG}]},{id:"c3df4522-f111-4172-b6ea-9f7dced96a47",title:"voice chat",channels:[{id:"a8de8e8f-e946-4f72-8a40-8dc084284980",title:"Général",icon:re.AUDIO},{id:"1e1a94f6-f014-4c19-b337-2a6f8d080893",title:"Play and Stream 🎮",icon:re.AUDIO}]}]},{id:"5a714803-cb77-4969-92fb-14cdc583d320",title:"Server 5",icon:"https://images.unsplash.com/photo-1582819585091-f807881345ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",categories:[]},{id:"5a714803-cb77-4969-92fb-14cdc583d321",title:"Server 6",icon:"https://images.unsplash.com/photo-1582819585091-f807881345ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",categories:[]},{id:"5a714803-cb77-4969-92fb-14cdc583d322",title:"Server 7",icon:"https://images.unsplash.com/photo-1582819585091-f807881345ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",categories:[]},{id:"5a714803-cb77-4969-92fb-14cdc583d323",title:"Server 8",icon:"https://images.unsplash.com/photo-1582819585091-f807881345ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",categories:[]},{id:"5a714803-cb77-4969-92fb-14cdc583d324",title:"Server 9",icon:"https://images.unsplash.com/photo-1582819585091-f807881345ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",categories:[]}],mn=[{id:"943849ea-e76d-4fd1-ae59-bf0dd7bbe55a",name:"guilospanck",tag:"#104",avatarURL:"https://cdn.discordapp.com/avatars/759237066999201852/e780bd32be2d3b5e78179ddc8da20e77.webp?size=32"},{id:"20e5201c-bf61-44ef-90b5-4610d78a034a",name:"thiagort",tag:"#819",avatarURL:"https://cdn.discordapp.com/avatars/891765898086580334/7e4995919829ea66117e85fa4574acc3.webp?size=128"},{id:"9d45b212-194f-4090-9ea3-3a62f39f04c3",name:"Igor",tag:"#457",avatarURL:"https://cdn.discordapp.com/avatars/211169928164671489/380376c68b8241de68985f56fc1d201c.webp?size=80"},{id:"45e48ab1-9d1f-4496-bd21-6aaeba2955ab",name:"Hydra",tag:"#1214",avatarURL:"https://cdn.discordapp.com/avatars/547905866255433758/2fcb77582acae7ecedd97db9c238c1f3.webp?size=80"}],gn=[{id:"648dc227-6cb5-44d0-9a55-77299b3ac9f7",serverId:pn[0].id,categoryId:pn[0].categories[0].id,channelId:pn[0].categories[0].channels[0].id,messages:[{id:"1482b54b-87d0-4da7-8c22-62e65be118b2",userId:mn[0].id,timestamp:"1648822189389",message:"Hi, this is a test!"},{id:"b9dc50b4-e775-4207-8a92-b277a8a49c2b",userId:mn[1].id,timestamp:"1648822230197",message:"Hi! It looks nice!"},{id:"04c1123b-1940-4d6c-b372-82c893ed95b3",userId:mn[0].id,timestamp:"1648822267057",message:"Yes! Even though it is a test!"},{id:"1ad92369-e135-469e-a632-5f56030b777f",userId:mn[0].id,timestamp:"1648822267057",message:"Let us see if this message comes without my avatar..."}]}],vn=(0,r.createContext)(null),bn=({children:e})=>{var t;const[n]=(0,r.useState)(pn),[l,i]=(0,r.useState)(pn[0]),[o,c]=(0,r.useState)(pn[0].categories[0]),[s,d]=(0,r.useState)(pn[0].categories[0].channels[0]),[u,h]=(0,r.useState)(null!==(t=null==s?void 0:s.title)&&void 0!==t?t:""),[f]=(0,r.useState)(mn[0]),[p,m]=(0,r.useState)([]);(0,r.useEffect)((()=>{let e="";s&&(e=s.title),h(e)}),[s]);const g=(0,r.useMemo)((()=>{const e=[{x:0,y:0},{x:-88,y:-88},{x:-88,y:0},{x:-88,y:-22},{x:-88,y:-44},{x:-198,y:-22},{x:0,y:-22}];let t=0;return()=>({next:()=>(void 0!==e[t+1]?t++:t=0,e[t])})}),[]),v={allServers:n,serverSelected:l,setServerSelected:i,categorySelected:o,setCategorySelected:c,channelSelected:s,setChannelSelected:d,backgroundPositionsIterator:g,messages:p,setMessages:m,currentUser:f,channelTitle:u,getAllConsecutiveMessagesFromUser:({msgs:e})=>{const t=e.reduce(((e,t)=>{var n,r;const a=e[e.length-1];if((null===(n=null==a?void 0:a.user)||void 0===n?void 0:n.id)===(null===(r=null==t?void 0:t.user)||void 0===r?void 0:r.id)){return[...e.slice(0,-1),{user:null==t?void 0:t.user,messages:[...a.messages,t.messages[0]]}]}return[...e,t]}),[]);return t},UpdateMessagesToSinalizeNextDay:({msgs:e})=>{const t=new Map,n=e=>{const t=r(e);return`${s.id}-${t}`},r=e=>new Date(Number(e)).toLocaleDateString("pt-br"),a=e=>!s||(e=>{const r=n(e);return!!t.get(r)})(e);return{update:()=>e.map((e=>{var r;if(null===(r=e.messages)||void 0===r?void 0:r.length){const r=e.messages[0].timestamp;if(!a(r))return(e=>{const r=n(e);t.set(r,!0)})(r),Object.assign(Object.assign({},e),{nextDay:!0})}return e}))}}};return a().createElement(vn.Provider,{value:v},e)},xn=({getUserByUserIdUsecase:e})=>{const t=({serverId:e,categoryId:t,channelId:n,fromDB:r=!1})=>{if(!e||!t||!n)return[];let a=[];if(r)a=gn;else{const e=localStorage.getItem("messages");a=e?JSON.parse(e):[]}return a.filter((r=>r.serverId===e&&r.categoryId===t&&r.channelId===n)).reduce(((e,t)=>[...e,...t.messages]),[])};return{getMessages:t,getMessagesWithUserInfo:({serverId:n,categoryId:r,channelId:a,fromDB:l=!1})=>{const i=t({serverId:n,categoryId:r,channelId:a,fromDB:l});return 0===i.length?[]:i.map((t=>({messages:[t],user:e.get(t.userId)})))}}},wn=()=>({get:e=>e?mn.find((t=>t.id===e)):null});var yn=n(586);const En=()=>{const e=(()=>{const{allServers:e,serverSelected:t,setServerSelected:n,setCategorySelected:a,setMessages:l}=(0,r.useContext)(vn),[i,o]=(0,r.useState)({}),c=(0,r.useCallback)((t=>{const r=e[t];l([]),n(r),a(r.categories.length>0?r.categories[0]:null)}),[]),s=(0,r.useCallback)((e=>{o((t=>Object.assign(Object.assign({},t),{[e]:!0})))}),[]),d=(0,r.useCallback)((e=>{o((t=>Object.assign(Object.assign({},t),{[e]:!1})))}),[]);return{allServers:e,DISCORD_LOGO_COLOR:"#5865F2",handleSidebarLinkClick:c,serverSelected:t,handleOnMouseEnterPillAndImageContainer:s,handleOnMouseLeavePillAndImageContainer:d,serverHover:i}})();return a().createElement(Z,{viewModel:e})},Cn=()=>{const e=(()=>{const{serverSelected:e}=(0,r.useContext)(vn),{title:t}=e;return{title:t}})();return a().createElement(L,{viewModel:e})},Mn=()=>{const e=(()=>{const{currentUser:e}=(0,r.useContext)(vn),{name:t,tag:n,avatarURL:a}=e;return{name:t,tag:n,avatarURL:a}})();return a().createElement(ne,{viewModel:e})},Sn=()=>{const e=(()=>{const{serverSelected:e,setCategorySelected:t,setChannelSelected:n}=(0,r.useContext)(vn),{categories:a}=e;return{categories:a,onChannelClick:(r,a)=>{const l=e.categories.find((e=>e.id===r)),i=l.channels.find((e=>e.id===a));t(l),n(i)}}})();return a().createElement(Me,{viewModel:e})},Hn=()=>a().createElement(O,{ChannelsServerTitleComponent:Cn,ChannelsSectionComponent:Mn,ChannelsSidebarComponent:Sn}),Zn=()=>{const e=(()=>{const{channelTitle:e}=(0,r.useContext)(vn);return{channelTitle:e}})();return a().createElement(dt,{viewModel:e})},kn=()=>{const e=wn(),t=(({getMessagesFromChannelSpaceUsecase:e})=>{const{serverSelected:t,categorySelected:n,channelSelected:a,setChannelSelected:l,messages:i,setMessages:o,getAllConsecutiveMessagesFromUser:c,UpdateMessagesToSinalizeNextDay:s}=(0,r.useContext)(vn);return(0,r.useEffect)((()=>{const e=null==t?void 0:t.categories[0],n=null==e?void 0:e.channels[0];if(!e||!n)return o([]),void l(null);l(n)}),[t]),(0,r.useEffect)((()=>{if(!(null==t?void 0:t.id)||!(null==n?void 0:n.id)||!(null==a?void 0:a.id))return;const r=e.getMessagesWithUserInfo({serverId:t.id,categoryId:n.id,channelId:a.id});if(!r||0===r.length)return void o([]);const l=c({msgs:r}),i=s({msgs:l}).update();o(i)}),[a]),{messages:i}})({getMessagesFromChannelSpaceUsecase:xn({getUserByUserIdUsecase:e})});return a().createElement(Mt,{viewModel:t})},On=()=>{const e=wn(),t=xn({getUserByUserIdUsecase:e}),n=(({saveMessageUsecase:e,getMessagesFromChannelSpaceUsecase:t})=>{const{backgroundPositionsIterator:n,serverSelected:a,categorySelected:l,channelSelected:i,currentUser:o,setMessages:c,channelTitle:s,getAllConsecutiveMessagesFromUser:d,UpdateMessagesToSinalizeNextDay:u}=(0,r.useContext)(vn),h=(0,r.useRef)(null),[f,p]=(0,r.useState)({x:0,y:0}),[m,g]=(0,r.useState)(!1),[v,b]=(0,r.useState)(!1);(0,r.useEffect)((()=>{if(!l||0===l.channels.length||!h.current)return h.current.contentEditable="false",h.current.blur(),void b(!v);h.current.contentEditable="true",h.current.focus(),b(!v)}),[h,m,a]);const x=(0,r.useCallback)((e=>{if("Enter"===e.key&&!e.shiftKey){e.preventDefault();const t=h.current.innerText;y(t)}}),[i]),w=(0,r.useCallback)((()=>{const e=n().next();p(e)}),[]),y=n=>{const r={serverId:a.id,categoryId:l.id,channelId:i.id};e.save(Object.assign(Object.assign({},r),{userId:o.id,message:n}));const s=t.getMessagesWithUserInfo(Object.assign({},r)),f=d({msgs:s}),p=u({msgs:f}).update();c(p),h.current.innerText="",g(!m)};return{messageRef:h,onKeyDown:x,onMouseEnterEmojiBtn:w,emojiCoordinates:f,channelTitle:s}})({saveMessageUsecase:(()=>{const e=e=>{const t=[...localStorage.getItem("messages")?JSON.parse(localStorage.getItem("messages")):[],e];localStorage.setItem("messages",JSON.stringify(t))};return{save:({serverId:t,categoryId:n,channelId:r,userId:a,message:l})=>{const i=(new Date).getTime().toString(),o=(0,yn.Z)(),c=(0,yn.Z)();e({id:o,serverId:t,categoryId:n,channelId:r,messages:[{id:c,userId:a,timestamp:i,message:l}]})}}})(),getMessagesFromChannelSpaceUsecase:t});return a().createElement(fn,{viewModel:n})},An=()=>a().createElement(He,{ChatSectionComponent:Zn,ChatMainComponent:kn,ChatFormComponent:On}),Pn=()=>a().createElement(bn,null,a().createElement(d,{SidebarComponent:En,ChannelsComponent:Hn,ChatComponent:An})),In=()=>a().createElement(i.VK,{basename:"/discord-clone"},a().createElement(o.Z5,null,a().createElement(o.AW,{path:"/",element:a().createElement(Pn,null)})));const jn=function(){return a().createElement(In,null)},Dn=c.vJ`
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #36393f;
  }
  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
  }
  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* Changing scrollbar styles */
  *::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  *::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${"#202225"};
    min-height: 40px;
    border: 4px solid transparent;
    background-clip: padding-box;
    border-radius: 8px;
  }

  *::-webkit-scrollbar-track {
    border: 4px solid transparent;
    background-clip: padding-box;
    border-radius: 8px;
    margin-bottom: 8px;
    background-color: ${"#2e3338"};
  }

`,$n=document.getElementById("root");(0,l.s)($n).render(a().createElement(a().StrictMode,null,a().createElement(Dn,null),a().createElement(jn,null)))},363:e=>{e.exports=React},533:e=>{e.exports=ReactDOM}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var l=n[e]={id:e,exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,n,a,l)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,a,l]=e[d],o=!0,c=0;c<n.length;c++)(!1&l||i>=l)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(o=!1,l<i&&(i=l));if(o){e.splice(d--,1);var s=a();void 0!==s&&(t=s)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,a,l]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,l,[i,o,c]=n,s=0;if(i.some((t=>0!==e[t]))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(c)var d=c(r)}for(t&&t(n);s<i.length;s++)l=i[s],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(d)},n=self.webpackChunkdiscord_clone=self.webpackChunkdiscord_clone||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[287],(()=>r(501)));a=r.O(a)})();