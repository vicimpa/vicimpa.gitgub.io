import{r as i,p as k,u as L,j as x,a as b}from"./vendor.3f94e942.js";const j=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function c(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(r){if(r.ep)return;r.ep=!0;const n=c(r);fetch(r.href,n)}};j();const $="modulepreload",v={},O="/",E=function(s,c){return!c||c.length===0?s():Promise.all(c.map(e=>{if(e=`${O}${e}`,e in v)return;v[e]=!0;const r=e.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":$,r||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),r)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",u)})})).then(()=>s())},P=t=>{const[s]=i.exports.useState(()=>k(typeof t=="function"?t():t));return L(s),s};function N(){return new Worker("/assets/worker.58f5d541.js",{type:"module"})}const T={"/src/commands/ping.ts":()=>E(()=>import("./ping.abbb4301.js"),["assets/ping.abbb4301.js","assets/delay.36d5b31f.js"]),"/src/commands/test.ts":()=>E(()=>import("./test.3e283ec3.js"),["assets/test.3e283ec3.js","assets/delay.36d5b31f.js"])},D=()=>{const t=P(()=>({running:!1,output:[]})),s=e=>{!e||t.output.push(e+(e[e.length-1]==`
`?"":`
`))},c={log(...e){s(e.join(" "))},error(...e){s("Error: "+e.join(" "))},clear(){t.output.splice(0)}};return{running:t.running,output:t.output,clear:c.clear,context:c,runCommand(e,r){if(t.output.push(r+e+`
`),e=e.trim(),!e)return;const[n,...o]=e.split(/\s+/);switch(n){case"clear":return c.clear();default:{t.running=!0;const l=[],u=()=>l.splice(0).map(a=>a()),p=new N,m=a=>{a.preventDefault(),a.ctrlKey&&a.key=="c"&&u()};document.addEventListener("keydown",m),new Promise(async a=>{p.onmessage=({data:_})=>{const{program:y,args:w}=JSON.parse(_);if(y=="end")return a();c[y](...w)};const d=T[`/src/commands/${n}.ts`];l.push(()=>{p.terminate(),a()}),p.postMessage(JSON.stringify({program:n,args:o,cmd:(d==null?void 0:d.toString())||""}))}).finally(()=>{u(),t.running=!1,document.removeEventListener("keydown",m)})}}}}},I="_root_1v506_1";var C={root:I};const g={startTime:Date.now(),user:"vic",host:"WSV"},R=(t,s)=>{i.exports.useEffect(()=>(document.addEventListener(t,s),()=>document.removeEventListener(t,s)))},W="_root_1f67r_1";var H={root:W};const f=x.exports.jsx,S=x.exports.jsxs,z=()=>{const[t,s]=i.exports.useState(!0);return i.exports.useEffect(()=>{let c=setTimeout(()=>{s(e=>!e)},500);return()=>clearTimeout(c)}),f("span",{className:t?H.root:void 0})};var A={};const K=({context:t,onSubmit:s=()=>null})=>{const[c]=i.exports.useState(`${g.user}@${g.host} ~ `),[e,r]=i.exports.useState("");return R("keydown",n=>{n.preventDefault();const{key:o,code:l}=n;if(n.ctrlKey&&o=="l"){t.clear();return}switch(o){case"Backspace":r(u=>u.substr(0,u.length-1));break;case"Enter":s(e,c),r("");break;default:o.length==1?r(u=>u+o):console.log(o,l)}}),S("pre",{className:A.root,children:[c+e,f(z,{})]})},M=()=>{const t=i.exports.useRef(),s=i.exports.useMemo(()=>({scroll:0,scrollSize:0,height:0}),[]),{running:c,output:e,runCommand:r,context:n}=D();return i.exports.useEffect(()=>{if(!t.current)return;const{scroll:o,scrollSize:l}=s;o>=l&&(t.current.scrollTop=t.current.scrollHeight);const{offsetHeight:p,scrollTop:m,scrollHeight:h}=t.current;s.scroll=m+p,s.scrollSize=h}),i.exports.useEffect(()=>{var l;const o=()=>{if(!t.current)return;const{offsetHeight:u,scrollTop:p}=t.current;s.scroll=u+p};return(l=t.current)==null||l.addEventListener("scroll",o),()=>{var u;return(u=t.current)==null?void 0:u.removeEventListener("scroll",o)}}),S("div",{ref:t,className:C.root,children:[i.exports.createElement("pre",null,...e),c?null:f(K,{context:n,onSubmit:r})]})};const V=document.getElementById("app");b.exports.render(f(i.exports.StrictMode,{children:f(M,{})}),V);console.log(g);
