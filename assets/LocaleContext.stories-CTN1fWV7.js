var _=Object.defineProperty;var j=(t,e,o)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var h=(t,e,o)=>j(t,typeof e!="symbol"?e+"":e,o);import{S as A}from"./index-Ci5d_AUt.js";import{r as s,R as C}from"./index-BwDkhjyp.js";import{j as c,a as b}from"./emotion-react-jsx-runtime.browser.esm-C4yDm8mC.js";import{c as D}from"./assertThisInitialized-yxL75rf1.js";import{I as N}from"./button-CfjClziF.js";import{S as U}from"./index-Cjnwf7oM.js";import{R as $,D as F}from"./index-DEJqNCFN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./jsx-runtime-Nms4Y4qS.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm--wlgpIj0.js";import"./useSize-DEaGCPa-.js";import"./index-CReuRBEY.js";import"./context-DyWsVHVj.js";import"./wrapNativeSuper-BQyYc5aO.js";var H={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"}}]},name:"smile",theme:"outlined"},J=function(e,o){return s.createElement(N,D({},e,{ref:o,icon:H}))},K=s.forwardRef(J);function T(t){const e={};function o(l){return s.useContext(e[l])}let n,r;function E(l){if(n=t(),r)for(const a in r)A(r[a],n[a])&&(n[a]=r[a]);r=n;let i=Object.keys(n),d=0;const p=i.length;function m(a,u,S){const V=e[a]||(e[a]=s.createContext(u[a])),y=++d;return C.createElement(V.Provider,{value:u[a]},y<p?m(i[y],u,S):S)}return m(i[d],n,l.children)}function L(l){return n[l]}function P(l,i){return function(d){return m=>{const a=o(l),u=i(a);return C.createElement(d,{...m,...u})}}}return{useModel:o,connectModel:P,StoreProvider:E,getModel:L}}const v={home:"home",second:"second",third:"third",forth:"forth",fifth:"fifth",contact:"contact"},k={home:"首页",second:"第二",third:"第三",forth:"第四",fifth:"第五",contact:"联系方式"};function q(t){const e=s.useRef(t);e.current=s.useMemo(()=>t,[t]);const o=s.useRef();return o.current||(o.current=function(...n){return e.current.apply(this,n)}),o.current}const G="com.drpanda.chatgpt.";class Q{constructor(e,o){h(this,"key");h(this,"defaultValue");this.key=G+e,this.defaultValue=o}setItem(e){sessionStorage.setItem(this.key,JSON.stringify(e))}getItem(){const e=sessionStorage[this.key]&&sessionStorage.getItem(this.key);if(e===void 0)return this.defaultValue;try{return e&&e!=="null"&&e!=="undefined"?JSON.parse(e):this.defaultValue}catch{return e&&e!=="null"&&e!=="undefined"?e:this.defaultValue}}removeItem(){sessionStorage.removeItem(this.key)}}const W=()=>{const t=navigator.language||navigator.languages[0],[e,o]=t.split("-");return e},x={enUS:v,zhCN:k,default:W()==="zh"?k:v},M=new Q("locale",void 0),X=()=>{const[t,e]=s.useState(M.getItem()||"default"),o=s.useMemo(()=>t?x[t]:x.default,[t]),n=q(r=>{typeof r=="function"&&(r=r(t)),M.setItem(r),e(r)});return{...o,locale:t,setLocale:n}},Y=()=>({locales:X()}),Z=T(Y),{useModel:ee,StoreProvider:te,getModel:ye,connectModel:Ce}=Z,oe=()=>{const{home:t,setLocale:e}=ee("locales"),o=r=>{e(r)},n=[{key:"1",label:c("a",{target:"#",onClick:o.bind(void 0,"zhCN"),children:"中文"})},{key:"2",label:c("a",{target:"#",onClick:o.bind(void 0,"enUS"),children:"English"}),icon:c(K,{}),disabled:!0},{key:"3",label:c("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item (disabled)"}),disabled:!0},{key:"4",danger:!0,label:"a danger item"}];return b(te,{children:[c(F,{menu:{items:n},children:c("a",{onClick:r=>r.preventDefault(),children:b(U,{children:["Hover me",c($,{})]})})}),c("div",{children:t})]})},be={title:"components/base/LocaleContext",component:oe,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},f={args:{primary:!0,label:"Button"}},g={args:{label:"Button"}};var I,z,R;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(R=(z=f.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var w,O,B;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...(B=(O=g.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const ve=["Primary","Secondary"];export{f as Primary,g as Secondary,ve as __namedExportsOrder,be as default};
