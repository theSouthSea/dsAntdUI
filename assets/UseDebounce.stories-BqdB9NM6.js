import{r as a}from"./index-BwDkhjyp.js";import{d as R}from"./debounce-CJ01Vb4c.js";import{s as b}from"./index-Ci5d_AUt.js";import{a as l,j as e,F as g}from"./emotion-react-jsx-runtime.browser.esm-C4yDm8mC.js";import{R as d}from"./index-D7aJMiJq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./jsx-runtime-Nms4Y4qS.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm--wlgpIj0.js";import"./useSize-DEaGCPa-.js";import"./assertThisInitialized-yxL75rf1.js";import"./index-CReuRBEY.js";import"./context-DyWsVHVj.js";import"./wrapNativeSuper-BQyYc5aO.js";import"./pickAttrs-B2l-wuCG.js";const w=(t,n=1e3)=>{const r=a.useRef();return a.useEffect(()=>{r.current=t},[t]),a.useMemo(()=>R(()=>{var u;(u=r.current)==null||u.call(r)},n),[n])},q=()=>{const[t,n]=a.useState(""),[r,s]=a.useState([]),u=w(async()=>{console.log("请求成功"),await b(1e3),s([{title:"react "+t,description:"react description",url:"/react.html"},{title:"vue "+t,description:"vue description",url:"/vue.html"},{title:"angular "+t,description:"angular description",url:"/angular.html"}])},500),o=i=>{n(i.target.value),u()};return l(g,{children:[e("p",{children:"搜索-使用useDebounce防抖"}),e("input",{type:"text",value:t,onChange:o}),e("p",{children:"搜索结果"}),e("ol",{children:r.map(i=>e("li",{children:i.title},i.url))})]})},j=()=>{const[t,n]=a.useState(""),[r,s]=a.useState([]),c=async()=>{console.log("请求成功"),await b(1e3),s([{title:"react "+t,description:"react description",url:"/react.html"},{title:"vue "+t,description:"vue description",url:"/vue.html"},{title:"angular "+t,description:"angular description",url:"/angular.html"}])},u=o=>{n(o.target.value),c()};return l(g,{children:[e("p",{children:"搜索-不使用防抖"}),e("input",{type:"text",value:t,onChange:u}),e("p",{children:"搜索结果"}),e("ol",{children:r.map(o=>e("li",{children:o.title},o.url))})]})},E=()=>{const[t,n]=a.useState(""),[r,s]=a.useState([]),c=async()=>{console.log("请求成功"),await b(1e3),s([{title:"react "+t,description:"react description",url:"/react.html"},{title:"vue "+t,description:"vue description",url:"/vue.html"},{title:"angular "+t,description:"angular description",url:"/angular.html"}])},u=R(o=>{n(o.target.value),c()},1e3);return l(g,{children:[e("p",{children:"搜索-直接使用Debounce防抖"}),e("input",{type:"text",value:t,onChange:u}),e("p",{children:"搜索结果"}),e("ol",{children:r.map(o=>e("li",{children:o.title},o.url))})]})},K=({type:t})=>{const[n,r]=a.useState(t),s=c=>{console.log("radio checked",c.target.value),r(c.target.value)};return l(g,{children:[l(d.Group,{onChange:s,value:n,children:[e(d,{value:"useDebounce",children:"使用useDebounce防抖"}),e(d,{value:"none",children:"不使用防抖"}),e(d,{value:"debounce",children:"使用debounce防抖"})]}),n==="useDebounce"&&e(q,{}),n==="none"&&e(j,{}),n==="debounce"&&e(E,{})]})},J={title:"hooks/useDebounce",component:K,argTypes:{type:{control:"radio",options:["useDebounce","debounce","none"]}},parameters:{controls:{expanded:!0}}},p={args:{type:"useDebounce"}},m={args:{type:"none"}},h={args:{type:"debounce"}};var D,y,v;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: "useDebounce"
  }
}`,...(v=(y=p.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var C,f,k;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: "none"
  }
}`,...(k=(f=m.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var S,U,x;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: "debounce"
  }
}`,...(x=(U=h.parameters)==null?void 0:U.docs)==null?void 0:x.source}}};const L=["UsedUseDebounce","NoUsedDebounce","UsedDebounce"];export{m as NoUsedDebounce,h as UsedDebounce,p as UsedUseDebounce,L as __namedExportsOrder,J as default};
