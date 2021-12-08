var at=Object.defineProperty,ht=Object.defineProperties;var ct=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var Q=(s,t,e)=>t in s?at(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,x=(s,t)=>{for(var e in t||(t={}))_.call(t,e)&&Q(s,e,t[e]);if(H)for(var e of H(t))K.call(t,e)&&Q(s,e,t[e]);return s},Y=(s,t)=>ht(s,ct(t));var Z=s=>typeof s=="symbol"?s:s+"",$=(s,t)=>{var e={};for(var i in s)_.call(s,i)&&t.indexOf(i)<0&&(e[i]=s[i]);if(s!=null&&H)for(var i of H(s))t.indexOf(i)<0&&K.call(s,i)&&(e[i]=s[i]);return e};var o=(s,t,e)=>(Q(s,typeof t!="symbol"?t+"":t,e),e),J=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var b=(s,t,e)=>(J(s,t,"read from private field"),e?e.call(s):t.get(s)),z=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},B=(s,t,e,i)=>(J(s,t,"write to private field"),i?i.call(s,e):t.set(s,e),e),tt=(s,t,e,i)=>({set _(n){B(s,t,n,e)},get _(){return b(s,t,i)}});import{r as m,j as et,p as dt,s as lt,u as ut,a as pt}from"./vendor.d2279358.js";const gt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}};gt();class P{constructor(t){o(this,"isInit",!1);o(this,"x",0);o(this,"y",0);o(this,"width",0);o(this,"height",0);o(this,"game");this.game=t}init(){return this}update(t=0,e=0){}render(t){}down({x:t=0,y:e=0}){}up({x:t=0,y:e=0}){}click({x:t=0,y:e=0}){}static init(t){return new this(t).init()}}const c=2,v={width:144,height:256,speed:3e3},R={width:26,height:160,speed:1400},F={width:144,height:56,speed:1400},st={width:17,height:12},it="flappy-bird-best",ft="https://github.com/vicimpa/scrappy-bird2";function mt(s,t){for(("base"in t)&&(t=t.base);s&&s instanceof HTMLElement&&s.parentElement!=t;){if(s==document.body)return!1;s=s.parentElement}return s instanceof HTMLElement}function S(s){return(e,i,n)=>typeof n.value!="function"?n:{get(){return this[`__${i}`]||(this[`__${i}`]=n.value.bind(s||this))}}}function q(s,t=0){return t?Math.floor(Math.random()*(t-s+1))+s:Math.floor(Math.random()*(s+1))}function wt(){return"ontouchstart"in window||!!navigator.maxTouchPoints||!!navigator.msMaxTouchPoints}function yt(s,t=c){const e=x({},s);for(let i in e)e[i]=e[i]*t;return e}function V(){const{offsetWidth:s,offsetHeight:t}=document.body,{width:e,height:i}=yt(v);return Math.min(s/e,t/i)}class ot{constructor(t){o(this,"_symbol",Symbol("listener"));o(this,"_state");o(this,"_dispatchList",[]);o(this,"_setState",t=>{this.setState(t)});this._state=t instanceof Function?t():t}get state(){return this._state}setState(t){return this._state=t instanceof Function?t(this._state):t,this._dispatchList.forEach(e=>{e[this._symbol]?e.call(this,this._state):e(this._state)}),this}useState(){const[t,e]=m.exports.useState(this._state);return m.exports.useEffect(()=>(this._dispatchList.push(e),()=>{const i=this._dispatchList.indexOf(e);i!==-1&&this._dispatchList.splice(i,1)}),[]),[t,this._setState]}onChange(t){return t[this._symbol]=!0,this._dispatchList.push(t),this}offChange(t){if(!t)for(;t=this._dispatchList.find(i=>i[this._symbol]);)this.offChange(t);let e=-1;for(;(e=this._dispatchList.indexOf(t))!==-1;)this._dispatchList.splice(e,1);return this}}var vt="./assets/die.c978e138.wav",At="./assets/hit.f9ace295.wav",bt="./assets/hitPipe.909a05d6.wav",St="./assets/point.dfa52509.wav",Ct="./assets/swooshing.63809f4d.wav",It="./assets/wing.53796d22.wav";const U=new(AudioContext||window.webkitAudioContext),G=U.createGain(),E=new ot(+(localStorage.getItem("save-volume")||.5));E.onChange(s=>{G.gain.value=s,localStorage.setItem("save-volume",`${s}`),w.wing.play()});G.gain.value=E.state;G.connect(U.destination);var T,L;const k=class{constructor(t=""){z(this,T,void 0);this.loadSound(t)}loadSound(t=""){const e=new XMLHttpRequest;e.open("GET",t,!0),e.responseType="arraybuffer",e.onload=()=>{U.decodeAudioData(e.response).then(i=>{B(this,T,i)},console.error)},e.send()}play(){const t=U.createBufferSource();t.buffer=b(this,T),t.connect(G),t.start(0),t.onended=()=>{t.disconnect(G),t.onended=null}}static test(){const t=[this.die,this.hit,this.hitPipe,this.point,this.swooshing,this.wing];t[b(this,L)]||B(this,L,0),t[tt(this,L)._++].play()}};let w=k;T=new WeakMap,L=new WeakMap,z(w,L,0),o(w,"die",new k(vt)),o(w,"hit",new k(At)),o(w,"hitPipe",new k(bt)),o(w,"point",new k(St)),o(w,"swooshing",new k(Ct)),o(w,"wing",new k(It));var Nt="./assets/bird.ee1ffc7c.png";const{abs:kt}=Math,Ft=Math.PI/70,Et=Math.PI/2,Lt=Math.PI/180;class Mt extends P{constructor(){super(...arguments);o(this,"image");o(this,"ready",!1);o(this,"sX",20);o(this,"sY",100);o(this,"auto",!1);o(this,"width",st.width);o(this,"height",st.height);o(this,"frame",0);o(this,"color",0);o(this,"death",0);o(this,"rotate",0);o(this,"speed",0);o(this,"maxSpeed",30);o(this,"maxSpeed2",50);o(this,"minSpeed",-15);o(this,"frames",0);o(this,"colors",0);o(this,"upFly",80);o(this,"upFlyNeed",this.upFly);o(this,"upFlyCount",250);o(this,"upFlyLast",performance.now());o(this,"free",0)}init(){return this.image=new Image,this.image.src=Nt,this.image.onload=()=>{this.ready=!0,this.frames=this.image.width/this.width,this.colors=this.image.height/this.height,this.reset()},super.init()}reset(){this.x=20,this.y=100,this.rotate=0,this.color=q(0,this.colors-1)}click(){this.game.state.stage==1&&(this.upFlyLast=performance.now(),this.y>-this.height&&(this.upFly=this.upFlyNeed/4,this.speed=this.minSpeed,w.wing.play()))}update(t=0,e=0){const{upFly:i,height:n,game:r,frames:a}=this,{state:{stage:h},heightFiel:d,objects:g}=r,f=h==1?this.maxSpeed:this.maxSpeed2;if(this.upFly!=this.upFlyNeed&&e-this.upFlyLast>=this.upFlyCount&&(this.upFly=this.upFlyNeed),h<2&&(this.frame=kt(e%(i*a*2)-i*a)/i|0),h==0&&(this.y=100+Math.cos(Et+e*.005)*10),this.auto){h==0&&this.game.click(),h==3&&++this.frame>200&&(this.free=0,this.game.reset());for(let y=0;y<g.length;y++){const p=g[y];if(!(p.x+p.width<this.x)){(this.speed>this.minSpeed+3&&p.y+p.door<this.y+this.height+2||this.y>r.height-80)&&this.click();break}}}for(let y=0;y<g.length;y++){const p=g[y];!p.isInit||(p.x<this.x&&!p.score&&(p.score=!0,r.addScore(),w.point.play()),p.isColize(this)&&h==1&&(r.state.stage=2,w.hit.play(),setTimeout(u=>{w.die.play()},300),this.x-6+this.width>p.x?this.y>p.y?this.speed=this.minSpeed*.7:this.speed=Math.abs(this.speed)*.6:this.speed=0))}(h==1||h==2)&&(this.rotate=(this.speed*50*Ft-10)*Lt,this.y<d-n&&(this.speed+=.04*t),this.speed>f&&(this.speed=f),this.y+=this.speed*t*.01,this.y>d-n&&(this.y=d-n,this.game.state.stage=3,w.hit.play()))}render({ctx:t}){if(!this.ready)return;const{image:e,x:i,y:n,width:r,height:a}=this,{color:h,frame:d,death:g}=this,f=r*c,y=a*c,p=i*c,u=n*c,j=f*.5,D=y*.5;t==null||t.beginPath(),t==null||t.save(),t==null||t.translate(p+j,u+D),t==null||t.rotate(this.rotate),t==null||t.drawImage(e,r*d+r*3*g,h*a,r,a,-j,-D,f,y),t==null||t.rotate(-this.rotate),t==null||t.translate(-p-j,-u-D),t==null||t.restore(),t==null||t.closePath()}}class jt extends P{constructor(){super(...arguments);o(this,"data",new ot({}))}get(t){return this.data.state[t]}set(t,e){const{state:i}=this.data;this.get(t)!=e&&this.data.setState(Y(x({},i),{[t]:`${e}`}))}del(t){const{state:e}=this.data,r=e,{[t]:i}=r,n=$(r,[Z(t)]);this.get(t)&&this.data.setState(n)}}var zt="./assets/pipe.8357c92b.png";class nt extends P{constructor(){super(...arguments);o(this,"image");o(this,"ready",!1);o(this,"go",!1);o(this,"score",!1);o(this,"width",R.width);o(this,"height",R.height);o(this,"speed",v.width/R.speed);o(this,"padding",40);o(this,"door",40);o(this,"deltaPad",this.padding);o(this,"div",1/R.speed);o(this,"marg",0)}margin(t=0){return this.marg=t,this}init(){const{padding:t}=this,{height:e}=v,{height:i}=F,{door:n}=this;return this.image=new Image,this.image.src=zt,this.image.onload=()=>{this.ready=!0},this.x=v.width+50,this.y=q(t,e-i-n-t/2),super.init()}isColize(t){return!(this.x+3>t.x+t.width||this.x+this.width-3<t.x||t.y+2>this.y&&t.y+t.height-2<this.y+this.door)}update(t=0,e){const{game:i}=this;i.state.stage==1&&(this.x-=t*this.speed),this.x<-this.width&&i.dropPipe(this),this.x<i.width*.5&&!this.go&&(this.go=!0,i.addPipe())}render({ctx:t}){if(!this.ready)return;const{image:e,width:i,height:n,x:r,y:a,door:h}=this,d=i*c,g=n*c,f=n-a+40-h;t==null||t.drawImage(e,i*0,n*0,i,n,r*c,a*c-g,d,g),t==null||t.drawImage(e,i*1,n*0,i,f,r*c,a*c+h*c,d,f*c)}}const l=et.exports.jsx,C=et.exports.jsxs;var M,O;class Pt extends m.exports.Component{constructor(t){super({});z(this,M,document.createElement("canvas"));z(this,O,m.exports.createRef());this.game=t}get can(){return b(this,M).width=this.game.width*c,b(this,M).height=this.game.height*c,b(this,O).current||b(this,M)}get ctx(){return this.can.ctx||this.can&&(this.can.ctx=this.can.getContext("2d"))}render(){return l("canvas",{onMouseDown:this.game.click,width:this.game.width*c,height:this.game.height*c,ref:b(this,O)})}}M=new WeakMap,O=new WeakMap;var Gt="./assets/back.8fe32fd6.png";class Tt extends P{constructor(){super(...arguments);o(this,"image");o(this,"ready",!1);o(this,"width",v.width);o(this,"height",v.height);o(this,"speed",v.width/v.speed);o(this,"color",0);o(this,"position",0);o(this,"colors",0)}init(){return this.image=new Image,this.image.src=Gt,this.image.onload=()=>{this.ready=!0,this.colors=this.image.height/this.height,this.reset()},super.init()}reset(){this.color=q(0,this.colors-1)}update(t,e){const{width:i,game:n}=this;n.state.stage<2&&(this.position+=t*this.speed),this.position%=i}render({ctx:t}){if(!this.ready)return;const{width:e,height:i}=this,{color:n,position:r,image:a}=this,h=r,d=e-h,g=e*c,f=i*c;t==null||t.drawImage(a,0,i*n,e,i,-h*c,0,g,f),t==null||t.drawImage(a,0,i*n,e,i,d*c-1,0,g,f)}}var Ot="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAA4CAIAAADmTySgAAAACXBIWXMAAC4jAAAuIwF4pT92AAABPElEQVR4Ae2XoQ3CQBhGe6SGNUighoSEMAAS2wFQ7NANECzARCyAxKCZAcURSO7nFLZ5r+q4IHjv8Ymm/bZvfHgG0uN55lFL3KTjZVNp6Gar6uZ2v1Y3ficKGaOfSQTIZ4tGIWMs+udv/glvdUj1jFnCW51TvYS3Oqr6N7zVadXf4a0OrJ6R0+E0j+SeIQbaYbGGoIoZDbTT5S5+9gwxUF7nIMBifgwYHvpPMLzhoQag2C7e8FADUGwXb3ioASi2izc81AAU28UbHmoAiu3iDQ81AMV28YaHGoBiu3jDQw1AsV284aEGoNgu3vBQA1BsF294qAEotos3PNQAFNvFGx5qAIrt4g0PNQDFdvGGhxqAYrt4w0MNQLFdvOGhBqDYLt7wUANQbBdveKgBKLaLNzzUABTbxRseagCK/QJzMis3up6rZwAAAABJRU5ErkJggg==";class Ht extends P{constructor(){super(...arguments);o(this,"image");o(this,"ready",!1);o(this,"color",0);o(this,"position",0);o(this,"speed",F.width/F.speed);o(this,"width",F.width);o(this,"height",F.height)}init(){return this.image=new Image,this.image.src=Ot,this.image.onload=()=>{this.ready=!0},super.init()}update(t,e){const{width:i,game:n}=this;n.state.stage<2&&(this.position+=t*this.speed),this.position%=i}render({ctx:t}){if(!this.ready)return;const{width:e,height:i,game:n}=this,{color:r,position:a,image:h}=this,d=a,g=e-d,f=e*c,y=i*c,p=n.height*c-y;t==null||t.drawImage(h,0,i*r,e,i,-d*c,p,f,y),t==null||t.drawImage(h,0,i*r,e,i,g*c-1,p,f,y)}}var xt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,I=(s,t,e,i)=>{for(var n=i>1?void 0:i?Bt(t,e):t,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(t,e,n):a(n))||n);return i&&n&&xt(t,e,n),n};const X={score:0,stage:0,start:!1,end:!1};class A{constructor(){o(this,"state",dt(Y(x({},X),{hiscore:(()=>{let t=+localStorage.getItem(it);return isNaN(t)?0:t})()})));o(this,"width",v.width);o(this,"height",v.height);o(this,"heightFiel",this.height-F.height);o(this,"display",new Pt(this));o(this,"back",Tt.init(this));o(this,"road",Ht.init(this));o(this,"bird",Mt.init(this));o(this,"debug",jt.init(this));o(this,"objects",[]);o(this,"work",!0);o(this,"last",performance.now());lt(this.state,()=>{this.change()}),this.update()}click(){this.state.stage==0&&(this.state.stage=1,this.objects.length==0&&this.addPipe()),this.bird.click()}change(){const{state:t}=this;let{score:e,hiscore:i}=t;e>i&&(i=e,t.hiscore=i,localStorage.setItem(it,`${i}`))}addScore(){this.state.score++}reset(){for(const t in X)this.state[t]=X[t];this.objects.splice(0),this.bird.reset(),this.back.reset(),w.swooshing.play()}github(){window.open(ft)}addPipe(){this.objects.push(new nt(this))}dropPipe(t){const{objects:e}=this;if(!t){const{length:n}=e;for(let r=0;r<n;r++){const a=e[r];a instanceof nt&&this.dropPipe(a)}return}let i=e.indexOf(t);i!=-1&&e.splice(i,1)}update(){const t=performance.now(),e=t-this.last;this.last=t;const{objects:i}=this,{length:n}=i;this.back.update(e,t),this.road.update(e,t);for(let r=0;r<n;r++){const a=i[r];!a||(a.isInit||(a.init(),a.isInit=!0),a.update(e,t))}if(this.bird.update(e,t),this.debug.update(e,t),e>100&&this.work)return requestAnimationFrame(this.update);this.render()}render(){var n,r;const{display:t,objects:e}=this,{length:i}=e;((n=t.ctx)==null?void 0:n.imageSmoothingEnabled)&&(t.ctx.imageSmoothingEnabled=!1),(r=t.ctx)==null||r.clearRect(0,0,this.width*c,this.height*c),this.back.render(t),this.road.render(t);for(let a=0;a<i;a++){const h=e[a];h==null||h.render(t)}if(this.bird.render(t),this.debug.render(t),this.work)return requestAnimationFrame(this.update)}}I([S()],A.prototype,"click",1);I([S()],A.prototype,"change",1);I([S()],A.prototype,"addScore",1);I([S()],A.prototype,"reset",1);I([S()],A.prototype,"github",1);I([S()],A.prototype,"addPipe",1);I([S()],A.prototype,"dropPipe",1);I([S()],A.prototype,"update",1);I([S()],A.prototype,"render",1);function W(s,...t){m.exports.useEffect(()=>(s.addEventListener.call(s,...t),()=>s.removeEventListener.call(s,...t)))}const Rt=m.exports.forwardRef((s,t)=>{const{show:e=!1,score:i=0,hiscore:n=0}=s,r=m.exports.useRef(),a=m.exports.useRef();return m.exports.useEffect(()=>{const h=()=>{r.current&&r.current.innerText!=`${i}`&&(r.current.innerText=`${i}`),a.current&&a.current.innerText!=`${n}`&&(a.current.innerText=`${n}`)},d=setInterval(h,100);return h(),()=>clearInterval(d)}),l("div",{style:{"--zoom":c},"data-show":e,className:"end",children:C("div",{ref:t,className:"block",children:[C("p",{className:"score",children:["Score ",l("span",{ref:r,children:i})]}),C("p",{className:"hiscore",children:["Best ",l("span",{ref:a,children:n})]}),l("div",{className:"space"}),s.children]})})});var Ut="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAxCAYAAABgSwHoAAAACXBIWXMAAC4jAAAuIwF4pT92AAACjklEQVRoBe2aMW7bQBBFKcOFz5BaF8gJYp0gsMoASacrpHTh0ldwl/TxEewb5ABS7TOks/0FPGK8HJFLkLMBKQ5AzO5wdvb/meWSoriqCsn365tXb6rfz48rzz4pm8jpsGL7p8hPhqQls9/vX3VYG8SjiV5EZUzAfz39qQ6Hw/Gw88iG/NhsK/lFEg0hKcC3D/cNchArrUNItpEQ+bvdzzoBqmK0hOxs3tITOSsi6skkdlsR1AZjhQ3Hbj60U+0lyEtGH9tlH+dc3/V6/cFVVaOStCdfSaqYVpCqUW366IgqKtujXZMCyPWUgqWKtrxeJRlv/cZohyzXBthd1Xika/iMwaZEjLSCJebMmWO05cpkluhkqwWZVFty6blZ9UX0bMjOqnILmXPNwOyvVxGUzJYoBHmm/fbla+MJaNKrOyUI0dlVNCVammDx1x//Y1mG/ArxiOit3CJLBpYMLBlYMhCRgdL3RzicxX3ygsesIZqMpbqrcl3nFW8ILsau1Pj3+VOKr1f/6u9LtXoXb5CIeC+0TtltjNGwEUhAEUhjS/vyw8aYNqL49NHgYgxY1GdubGk/9amvSRzRCqC2DoIxOLVhFzC1T4mql7tEwUEs+ug++EZ9dhUAEfWWrsjV/0Vutu4SFiGNhwgEh+pWkraCTITNA6JzHkHG5miNzyUKFhsXm8XXShJHBioYNhtY7TEIEjOXKFi68GVnDQCeziFol6v92eXtvMyRW1H8PX1MgAINFS+4tbHhePN0bUTemL42iyWkLRIStAewi+hQYPUtZGigrvH1ztrlGHC+GMkA7Nkhw0lqY9FGY7/CykY3NUddd/oAIhXZoq/JormCKF97lCLY+jAQkQHvq4+IeWzMN+U5aCQQHZDWAAAAAElFTkSuQmCC";const Dt=({show:s=!1})=>l("div",{style:{"--zoom":c},"data-show":s,className:"start",children:l("img",{src:Ut})});function rt(s,t){return s==document.body||!(s instanceof HTMLElement)?!0:s==t?!1:rt(s.parentElement,t)}const Qt=({onClick:s=()=>null})=>{const[t]=E.useState();let e="mute2";t>0&&(e="mute"),t>.25&&(e="low"),t>.5&&(e="medium"),t>.75&&(e="high");const i=n=>{n.preventDefault(),n.stopPropagation(),s(n)};return l("i",{style:{["--zoom"]:c},onMouseDown:i,className:`volume-btn icon-volume-${e}`})},Yt=s=>{const{show:t=!1,onOutsideClick:e=()=>null}=s,[i]=E.useState(),n=m.exports.useRef(),r=(h=0)=>()=>{let d=E.state+h;d<0&&(d=0),d>1&&(d=1),E.setState(d)};return l("div",{onMouseDown:h=>{if(rt(h.target,n.current))return e(h);t&&h.stopPropagation()},style:{"--zoom":c},"data-show":t,className:"volume",children:C("div",{ref:n,className:"block",children:[C("p",{className:"score",children:["Volume:",C("span",{children:["  ",i*100|0,"%"]})]}),l("div",{className:"space"}),C("p",{className:"btns",children:[l("i",{onClick:r(-.1),className:"icon-volume-decrease"}),l("i",{onClick:r(.1),className:"icon-volume-increase"})]}),l("div",{className:"space"}),l("button",{onClick:()=>w.test(),children:"Test"}),l("button",{onClick:e,children:"Ok"})]})})},N=new A,qt=()=>{const[s,t]=m.exports.useState(V()),[e,i]=m.exports.useState(!1),{stage:n,score:r,hiscore:a}=ut(N.state),h=m.exports.createRef(),d=n==3,g=m.exports.useRef(),f={transform:`scale(${s})`,width:`${v.width*c}px`,height:`${v.height*c}px`};return W(window,"resize",()=>{const u=V();s!=u&&t(u)}),W(window,"contextmenu",u=>{u.preventDefault()}),W(window,"keydown",u=>{u.preventDefault(),(u.key==" "||u.key=="Space")&&N.click(),u.key=="Enter"&&n==3&&N.reset()}),m.exports.useEffect(()=>{t(V())}),m.exports.useEffect(()=>{const u=()=>{h.current&&h.current.innerText!=`${r}`&&(h.current.innerText=`${r}`)},j=setInterval(u,100);return u(),()=>clearInterval(j)}),C("div",{style:f,onMouseDown:u=>{d||u.preventDefault(),!(mt(u.target,g.current)&&d)&&!wt()&&u.button==0&&N.click()},onTouchStart:u=>{d||u.preventDefault(),N.click()},className:"game",children:[l(Qt,{onClick:()=>i(!e)}),N.display.render(),l("div",{"data-show":n==1||n==2,className:"debug",children:l("p",{ref:h,children:r})}),l(Dt,{show:n==0}),C(Rt,{ref:g,show:d,score:r,hiscore:a,children:[l("button",{onClick:N.reset,children:"Restart (Enter)"}),l("button",{onClick:N.github,children:"Github"})]}),l(Yt,{onOutsideClick:()=>i(!1),show:e})]})},Vt=document.getElementById("app");pt.exports.render(l(qt,{}),Vt);location.protocol=="https:"&&(document.head.innerHTML+=`
    <link rel="manifest" href="./manifest.json">
    <link rel="shortcut icon" href="favicon.png" type="image/png">
  `,addEventListener("load",()=>{navigator.serviceWorker&&navigator.serviceWorker.getRegistration("./service.js").then(s=>s||navigator.serviceWorker.register("./servise.js",{scope:location.pathname})).catch(()=>{})}));
