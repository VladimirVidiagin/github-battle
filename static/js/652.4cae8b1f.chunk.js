"use strict";(self.webpackChunkgithub_battle=self.webpackChunkgithub_battle||[]).push([[652],{652:(e,s,l)=>{l.r(s),l.d(s,{default:()=>o});var a=l(43),n=l(475),t=l(579);const r=()=>(0,t.jsxs)("section",{className:"instructions-container",children:[(0,t.jsx)("h2",{children:"Instructions"}),(0,t.jsxs)("ol",{children:[(0,t.jsx)("li",{children:"Enter 2 Github users"}),(0,t.jsx)("li",{children:"Battle"}),(0,t.jsx)("li",{children:"See the winners"})]})]}),c=e=>{let{label:s,onSubmit:l}=e;const[n,r]=(0,a.useState)("");return(0,t.jsxs)("form",{className:"card",onSubmit:e=>{e.preventDefault(),l(n)},children:[(0,t.jsx)("label",{htmlFor:"username",className:"player-label",children:s}),(0,t.jsxs)("div",{className:"input-row",children:[(0,t.jsx)("input",{type:"text",id:"username",placeholder:"github username",autoComplete:"off",value:n,onChange:e=>{r(e.target.value)}}),(0,t.jsx)("button",{className:"btn link",type:"submit",disabled:!n,children:"Submit"})]})]})},i=e=>{let{username:s,onReset:l,label:a}=e;return(0,t.jsxs)("article",{className:"card",children:[(0,t.jsx)("h3",{className:"player-label",children:a}),(0,t.jsxs)("div",{className:"split",children:[(0,t.jsxs)("div",{className:"row gap-md",children:[(0,t.jsx)("img",{width:32,height:32,className:"avatar",src:"https://github.com/".concat(s,".png?size=200"),alt:"Avatar for ".concat(s)}),(0,t.jsx)("a",{href:"https://github.com/".concat(s),className:"link",children:s})]}),(0,t.jsx)("button",{onClick:l,className:"btn secondary icon",children:"Close"})]})]})},o=()=>{const[e,s]=(0,a.useState)(null),[l,o]=(0,a.useState)(null),u=(e,l)=>{"playerOne"===e?s(l):"playerTwo"===e&&o(l)},h=e=>{"playerOne"===e?s(null):"playerTwo"===e&&o(null)},m=!e||!l;return(0,t.jsxs)("main",{className:"stack main-stack animate-in",children:[(0,t.jsxs)("div",{className:"split",children:[(0,t.jsx)("h1",{children:"Players"}),(0,t.jsx)(n.N_,{to:{pathname:"/results",search:"?playerOne=".concat(e,"&playerTwo=").concat(l)},className:"btn primary ".concat(m?"disabled":""),children:"Battle"})]}),(0,t.jsxs)("section",{className:"grid",children:[null===e?(0,t.jsx)(c,{label:"Player One",onSubmit:e=>u("playerOne",e)}):(0,t.jsx)(i,{label:"Player One",username:e,onReset:()=>h("playerOne")}),null===l?(0,t.jsx)(c,{label:"Player Two",onSubmit:e=>u("playerTwo",e)}):(0,t.jsx)(i,{label:"Player Two",username:l,onReset:()=>h("playerTwo")})]}),(0,t.jsx)(r,{})]})}}}]);
//# sourceMappingURL=652.4cae8b1f.chunk.js.map