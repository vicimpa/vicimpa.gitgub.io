(function(){"use strict";const d="modulepreload",c={},u="./",l=function(s,o){return s()};var g=void 0;try{if(!(self instanceof Window))throw"Hi"}catch{const s={log(...o){postMessage(JSON.stringify({program:"log",args:o}))},error(...o){postMessage(JSON.stringify({program:"error",args:o}))},clear(){postMessage(JSON.stringify({program:"clear",args:[]}))}};addEventListener("message",async({data:o})=>{const{program:r="",args:n=[],cmd:i,env:t}=JSON.parse(o);globalThis.env=t,(async()=>{try{let e={},m=i.split('"')[1];if(!m)throw new Error(`commands/${r}`);try{e=await l(()=>import(`${m}`),void 0)}catch{try{e=await l(()=>import(`../commands/${r}`),void 0)}catch{}}const a=n[0];if(!e)throw new Error(`commands/${r}`);return!e.default&&!e[a]?`Error executable in "${r}"`:e[a]?typeof e[a]=="function"?await e[a].apply(s,n.splice(1)):e[a]:typeof e.default=="function"?await e.default.apply(s,n):e.default}catch(e){return e instanceof Error&&(e.message.indexOf(`commands/${r}`)!=-1||e.message.indexOf("import")!=-1)?`bsh: command not found: ${r}`:String(e)}})().then(s.log).catch(s.error).finally(()=>{postMessage(JSON.stringify({program:"end",args:[]}))})})}return g})();
