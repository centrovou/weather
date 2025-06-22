(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function lo(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const re={},Un=[],_t=()=>{},_f=()=>!1,Ms=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),co=t=>t.startsWith("onUpdate:"),He=Object.assign,uo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yf=Object.prototype.hasOwnProperty,le=(t,e)=>yf.call(t,e),G=Array.isArray,Fn=t=>Ls(t)==="[object Map]",fc=t=>Ls(t)==="[object Set]",Z=t=>typeof t=="function",ye=t=>typeof t=="string",$t=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",dc=t=>(me(t)||Z(t))&&Z(t.then)&&Z(t.catch),pc=Object.prototype.toString,Ls=t=>pc.call(t),vf=t=>Ls(t).slice(8,-1),gc=t=>Ls(t)==="[object Object]",ho=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yi=lo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Us=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wf=/-(\w)/g,Nt=Us(t=>t.replace(wf,(e,n)=>n?n.toUpperCase():"")),If=/\B([A-Z])/g,Ht=Us(t=>t.replace(If,"-$1").toLowerCase()),mc=Us(t=>t.charAt(0).toUpperCase()+t.slice(1)),_r=Us(t=>t?`on${mc(t)}`:""),We=(t,e)=>!Object.is(t,e),ls=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},_c=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},jr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ja;const Fs=()=>ja||(ja=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yn(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=ye(i)?Ef(i):Yn(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(ye(t)||me(t))return t}const bf=/;(?![^(]*\))/g,Tf=/:([^]+)/,Cf=/\/\*[^]*?\*\//g;function Ef(t){const e={};return t.replace(Cf,"").split(bf).forEach(n=>{if(n){const i=n.split(Tf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function js(t){let e="";if(ye(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const i=js(t[n]);i&&(e+=i+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Af=lo(Sf);function yc(t){return!!t||t===""}const vc=t=>!!(t&&t.__v_isRef===!0),nt=t=>ye(t)?t:t==null?"":G(t)||me(t)&&(t.toString===pc||!Z(t.toString))?vc(t)?nt(t.value):JSON.stringify(t,wc,2):String(t),wc=(t,e)=>vc(e)?wc(t,e.value):Fn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],o)=>(n[yr(i,o)+" =>"]=r,n),{})}:fc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>yr(n))}:$t(e)?yr(e):me(e)&&!G(e)&&!gc(e)?String(e):e,yr=(t,e="")=>{var n;return $t(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Be;class Rf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Be,!e&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Be;try{return Be=this,e()}finally{Be=n}}}on(){++this._on===1&&(this.prevScope=Be,Be=this)}off(){this._on>0&&--this._on===0&&(Be=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Pf(){return Be}let de;const vr=new WeakSet;class Ic{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Be&&Be.active&&Be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vr.has(this)&&(vr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Tc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$a(this),Cc(this);const e=de,n=ct;de=this,ct=!0;try{return this.fn()}finally{Ec(this),de=e,ct=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)go(e);this.deps=this.depsTail=void 0,$a(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$r(this)&&this.run()}get dirty(){return $r(this)}}let bc=0,vi,wi;function Tc(t,e=!1){if(t.flags|=8,e){t.next=wi,wi=t;return}t.next=vi,vi=t}function fo(){bc++}function po(){if(--bc>0)return;if(wi){let e=wi;for(wi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;vi;){let e=vi;for(vi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Cc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ec(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),go(i),Of(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function $r(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Sc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Sc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ri)||(t.globalVersion=Ri,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!$r(t))))return;t.flags|=2;const e=t.dep,n=de,i=ct;de=t,ct=!0;try{Cc(t);const r=t.fn(t._value);(e.version===0||We(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{de=n,ct=i,Ec(t),t.flags&=-3}}function go(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)go(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Of(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ct=!0;const Ac=[];function xt(){Ac.push(ct),ct=!1}function Mt(){const t=Ac.pop();ct=t===void 0?!0:t}function $a(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=de;de=void 0;try{e()}finally{de=n}}}let Ri=0;class kf{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $s{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!de||!ct||de===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==de)n=this.activeLink=new kf(de,this),de.deps?(n.prevDep=de.depsTail,de.depsTail.nextDep=n,de.depsTail=n):de.deps=de.depsTail=n,Rc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=de.depsTail,n.nextDep=void 0,de.depsTail.nextDep=n,de.depsTail=n,de.deps===n&&(de.deps=i)}return n}trigger(e){this.version++,Ri++,this.notify(e)}notify(e){fo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{po()}}}function Rc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Rc(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Hr=new WeakMap,wn=Symbol(""),Vr=Symbol(""),Pi=Symbol("");function xe(t,e,n){if(ct&&de){let i=Hr.get(t);i||Hr.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new $s),r.map=i,r.key=n),r.track()}}function Pt(t,e,n,i,r,o){const l=Hr.get(t);if(!l){Ri++;return}const u=h=>{h&&h.trigger()};if(fo(),e==="clear")l.forEach(u);else{const h=G(t),d=h&&ho(n);if(h&&n==="length"){const _=Number(i);l.forEach((E,S)=>{(S==="length"||S===Pi||!$t(S)&&S>=_)&&u(E)})}else switch((n!==void 0||l.has(void 0))&&u(l.get(n)),d&&u(l.get(Pi)),e){case"add":h?d&&u(l.get("length")):(u(l.get(wn)),Fn(t)&&u(l.get(Vr)));break;case"delete":h||(u(l.get(wn)),Fn(t)&&u(l.get(Vr)));break;case"set":Fn(t)&&u(l.get(wn));break}}po()}function Dn(t){const e=ae(t);return e===t?e:(xe(e,"iterate",Pi),it(t)?e:e.map(Se))}function Hs(t){return xe(t=ae(t),"iterate",Pi),t}const Df={__proto__:null,[Symbol.iterator](){return wr(this,Symbol.iterator,Se)},concat(...t){return Dn(this).concat(...t.map(e=>G(e)?Dn(e):e))},entries(){return wr(this,"entries",t=>(t[1]=Se(t[1]),t))},every(t,e){return At(this,"every",t,e,void 0,arguments)},filter(t,e){return At(this,"filter",t,e,n=>n.map(Se),arguments)},find(t,e){return At(this,"find",t,e,Se,arguments)},findIndex(t,e){return At(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return At(this,"findLast",t,e,Se,arguments)},findLastIndex(t,e){return At(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return At(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ir(this,"includes",t)},indexOf(...t){return Ir(this,"indexOf",t)},join(t){return Dn(this).join(t)},lastIndexOf(...t){return Ir(this,"lastIndexOf",t)},map(t,e){return At(this,"map",t,e,void 0,arguments)},pop(){return gi(this,"pop")},push(...t){return gi(this,"push",t)},reduce(t,...e){return Ha(this,"reduce",t,e)},reduceRight(t,...e){return Ha(this,"reduceRight",t,e)},shift(){return gi(this,"shift")},some(t,e){return At(this,"some",t,e,void 0,arguments)},splice(...t){return gi(this,"splice",t)},toReversed(){return Dn(this).toReversed()},toSorted(t){return Dn(this).toSorted(t)},toSpliced(...t){return Dn(this).toSpliced(...t)},unshift(...t){return gi(this,"unshift",t)},values(){return wr(this,"values",Se)}};function wr(t,e,n){const i=Hs(t),r=i[e]();return i!==t&&!it(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=n(o.value)),o}),r}const Nf=Array.prototype;function At(t,e,n,i,r,o){const l=Hs(t),u=l!==t&&!it(t),h=l[e];if(h!==Nf[e]){const E=h.apply(t,o);return u?Se(E):E}let d=n;l!==t&&(u?d=function(E,S){return n.call(this,Se(E),S,t)}:n.length>2&&(d=function(E,S){return n.call(this,E,S,t)}));const _=h.call(l,d,i);return u&&r?r(_):_}function Ha(t,e,n,i){const r=Hs(t);let o=n;return r!==t&&(it(t)?n.length>3&&(o=function(l,u,h){return n.call(this,l,u,h,t)}):o=function(l,u,h){return n.call(this,l,Se(u),h,t)}),r[e](o,...i)}function Ir(t,e,n){const i=ae(t);xe(i,"iterate",Pi);const r=i[e](...n);return(r===-1||r===!1)&&vo(n[0])?(n[0]=ae(n[0]),i[e](...n)):r}function gi(t,e,n=[]){xt(),fo();const i=ae(t)[e].apply(t,n);return po(),Mt(),i}const xf=lo("__proto__,__v_isRef,__isVue"),Pc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($t));function Mf(t){$t(t)||(t=String(t));const e=ae(this);return xe(e,"has",t),e.hasOwnProperty(t)}class Oc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(r?o?zf:xc:o?Nc:Dc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const l=G(e);if(!r){let h;if(l&&(h=Df[n]))return h;if(n==="hasOwnProperty")return Mf}const u=Reflect.get(e,n,Pe(e)?e:i);return($t(n)?Pc.has(n):xf(n))||(r||xe(e,"get",n),o)?u:Pe(u)?l&&ho(n)?u:u.value:me(u)?r?Mc(u):_o(u):u}}class kc extends Oc{constructor(e=!1){super(!1,e)}set(e,n,i,r){let o=e[n];if(!this._isShallow){const h=rn(o);if(!it(i)&&!rn(i)&&(o=ae(o),i=ae(i)),!G(e)&&Pe(o)&&!Pe(i))return h?!1:(o.value=i,!0)}const l=G(e)&&ho(n)?Number(n)<e.length:le(e,n),u=Reflect.set(e,n,i,Pe(e)?e:r);return e===ae(r)&&(l?We(i,o)&&Pt(e,"set",n,i):Pt(e,"add",n,i)),u}deleteProperty(e,n){const i=le(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Pt(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!$t(n)||!Pc.has(n))&&xe(e,"has",n),i}ownKeys(e){return xe(e,"iterate",G(e)?"length":wn),Reflect.ownKeys(e)}}class Lf extends Oc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uf=new kc,Ff=new Lf,jf=new kc(!0);const Br=t=>t,is=t=>Reflect.getPrototypeOf(t);function $f(t,e,n){return function(...i){const r=this.__v_raw,o=ae(r),l=Fn(o),u=t==="entries"||t===Symbol.iterator&&l,h=t==="keys"&&l,d=r[t](...i),_=n?Br:e?ms:Se;return!e&&xe(o,"iterate",h?Vr:wn),{next(){const{value:E,done:S}=d.next();return S?{value:E,done:S}:{value:u?[_(E[0]),_(E[1])]:_(E),done:S}},[Symbol.iterator](){return this}}}}function ss(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Hf(t,e){const n={get(r){const o=this.__v_raw,l=ae(o),u=ae(r);t||(We(r,u)&&xe(l,"get",r),xe(l,"get",u));const{has:h}=is(l),d=e?Br:t?ms:Se;if(h.call(l,r))return d(o.get(r));if(h.call(l,u))return d(o.get(u));o!==l&&o.get(r)},get size(){const r=this.__v_raw;return!t&&xe(ae(r),"iterate",wn),Reflect.get(r,"size",r)},has(r){const o=this.__v_raw,l=ae(o),u=ae(r);return t||(We(r,u)&&xe(l,"has",r),xe(l,"has",u)),r===u?o.has(r):o.has(r)||o.has(u)},forEach(r,o){const l=this,u=l.__v_raw,h=ae(u),d=e?Br:t?ms:Se;return!t&&xe(h,"iterate",wn),u.forEach((_,E)=>r.call(o,d(_),d(E),l))}};return He(n,t?{add:ss("add"),set:ss("set"),delete:ss("delete"),clear:ss("clear")}:{add(r){!e&&!it(r)&&!rn(r)&&(r=ae(r));const o=ae(this);return is(o).has.call(o,r)||(o.add(r),Pt(o,"add",r,r)),this},set(r,o){!e&&!it(o)&&!rn(o)&&(o=ae(o));const l=ae(this),{has:u,get:h}=is(l);let d=u.call(l,r);d||(r=ae(r),d=u.call(l,r));const _=h.call(l,r);return l.set(r,o),d?We(o,_)&&Pt(l,"set",r,o):Pt(l,"add",r,o),this},delete(r){const o=ae(this),{has:l,get:u}=is(o);let h=l.call(o,r);h||(r=ae(r),h=l.call(o,r)),u&&u.call(o,r);const d=o.delete(r);return h&&Pt(o,"delete",r,void 0),d},clear(){const r=ae(this),o=r.size!==0,l=r.clear();return o&&Pt(r,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=$f(r,t,e)}),n}function mo(t,e){const n=Hf(t,e);return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(le(n,r)&&r in i?n:i,r,o)}const Vf={get:mo(!1,!1)},Bf={get:mo(!1,!0)},Wf={get:mo(!0,!1)};const Dc=new WeakMap,Nc=new WeakMap,xc=new WeakMap,zf=new WeakMap;function Kf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gf(t){return t.__v_skip||!Object.isExtensible(t)?0:Kf(vf(t))}function _o(t){return rn(t)?t:yo(t,!1,Uf,Vf,Dc)}function qf(t){return yo(t,!1,jf,Bf,Nc)}function Mc(t){return yo(t,!0,Ff,Wf,xc)}function yo(t,e,n,i,r){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=Gf(t);if(o===0)return t;const l=r.get(t);if(l)return l;const u=new Proxy(t,o===2?i:n);return r.set(t,u),u}function jn(t){return rn(t)?jn(t.__v_raw):!!(t&&t.__v_isReactive)}function rn(t){return!!(t&&t.__v_isReadonly)}function it(t){return!!(t&&t.__v_isShallow)}function vo(t){return t?!!t.__v_raw:!1}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function Jf(t){return!le(t,"__v_skip")&&Object.isExtensible(t)&&_c(t,"__v_skip",!0),t}const Se=t=>me(t)?_o(t):t,ms=t=>me(t)?Mc(t):t;function Pe(t){return t?t.__v_isRef===!0:!1}function Mn(t){return Xf(t,!1)}function Xf(t,e){return Pe(t)?t:new Yf(t,e)}class Yf{constructor(e,n){this.dep=new $s,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ae(e),this._value=n?e:Se(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||it(e)||rn(e);e=i?e:ae(e),We(e,n)&&(this._rawValue=e,this._value=i?e:Se(e),this.dep.trigger())}}function yn(t){return Pe(t)?t.value:t}const Zf={get:(t,e,n)=>e==="__v_raw"?t:yn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Pe(r)&&!Pe(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Lc(t){return jn(t)?t:new Proxy(t,Zf)}class Qf{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new $s,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function ed(t){return new Qf(t)}class td{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new $s(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ri-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return Tc(this,!0),!0}get value(){const e=this.dep.track();return Sc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function nd(t,e,n=!1){let i,r;return Z(t)?i=t:(i=t.get,r=t.set),new td(i,r,n)}const rs={},_s=new WeakMap;let mn;function id(t,e=!1,n=mn){if(n){let i=_s.get(n);i||_s.set(n,i=[]),i.push(t)}}function sd(t,e,n=re){const{immediate:i,deep:r,once:o,scheduler:l,augmentJob:u,call:h}=n,d=H=>r?H:it(H)||r===!1||r===0?Ot(H,1):Ot(H);let _,E,S,P,U=!1,$=!1;if(Pe(t)?(E=()=>t.value,U=it(t)):jn(t)?(E=()=>d(t),U=!0):G(t)?($=!0,U=t.some(H=>jn(H)||it(H)),E=()=>t.map(H=>{if(Pe(H))return H.value;if(jn(H))return d(H);if(Z(H))return h?h(H,2):H()})):Z(t)?e?E=h?()=>h(t,2):t:E=()=>{if(S){xt();try{S()}finally{Mt()}}const H=mn;mn=_;try{return h?h(t,3,[P]):t(P)}finally{mn=H}}:E=_t,e&&r){const H=E,he=r===!0?1/0:r;E=()=>Ot(H(),he)}const J=Pf(),ee=()=>{_.stop(),J&&J.active&&uo(J.effects,_)};if(o&&e){const H=e;e=(...he)=>{H(...he),ee()}}let Q=$?new Array(t.length).fill(rs):rs;const X=H=>{if(!(!(_.flags&1)||!_.dirty&&!H))if(e){const he=_.run();if(r||U||($?he.some((ge,I)=>We(ge,Q[I])):We(he,Q))){S&&S();const ge=mn;mn=_;try{const I=[he,Q===rs?void 0:$&&Q[0]===rs?[]:Q,P];Q=he,h?h(e,3,I):e(...I)}finally{mn=ge}}}else _.run()};return u&&u(X),_=new Ic(E),_.scheduler=l?()=>l(X,!1):X,P=H=>id(H,!1,_),S=_.onStop=()=>{const H=_s.get(_);if(H){if(h)h(H,4);else for(const he of H)he();_s.delete(_)}},e?i?X(!0):Q=_.run():l?l(X.bind(null,!0),!0):_.run(),ee.pause=_.pause.bind(_),ee.resume=_.resume.bind(_),ee.stop=ee,ee}function Ot(t,e=1/0,n){if(e<=0||!me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Pe(t))Ot(t.value,e,n);else if(G(t))for(let i=0;i<t.length;i++)Ot(t[i],e,n);else if(fc(t)||Fn(t))t.forEach(i=>{Ot(i,e,n)});else if(gc(t)){for(const i in t)Ot(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ot(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mi(t,e,n,i){try{return i?t(...i):t()}catch(r){Vs(r,e,n)}}function wt(t,e,n,i){if(Z(t)){const r=Mi(t,e,n,i);return r&&dc(r)&&r.catch(o=>{Vs(o,e,n)}),r}if(G(t)){const r=[];for(let o=0;o<t.length;o++)r.push(wt(t[o],e,n,i));return r}}function Vs(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||re;if(e){let u=e.parent;const h=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;u;){const _=u.ec;if(_){for(let E=0;E<_.length;E++)if(_[E](t,h,d)===!1)return}u=u.parent}if(o){xt(),Mi(o,null,10,[t,h,d]),Mt();return}}rd(t,n,r,i,l)}function rd(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const je=[];let pt=-1;const $n=[];let Jt=null,Nn=0;const Uc=Promise.resolve();let ys=null;function od(t){const e=ys||Uc;return t?e.then(this?t.bind(this):t):e}function ad(t){let e=pt+1,n=je.length;for(;e<n;){const i=e+n>>>1,r=je[i],o=Oi(r);o<t||o===t&&r.flags&2?e=i+1:n=i}return e}function wo(t){if(!(t.flags&1)){const e=Oi(t),n=je[je.length-1];!n||!(t.flags&2)&&e>=Oi(n)?je.push(t):je.splice(ad(e),0,t),t.flags|=1,Fc()}}function Fc(){ys||(ys=Uc.then($c))}function ld(t){G(t)?$n.push(...t):Jt&&t.id===-1?Jt.splice(Nn+1,0,t):t.flags&1||($n.push(t),t.flags|=1),Fc()}function Va(t,e,n=pt+1){for(;n<je.length;n++){const i=je[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;je.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function jc(t){if($n.length){const e=[...new Set($n)].sort((n,i)=>Oi(n)-Oi(i));if($n.length=0,Jt){Jt.push(...e);return}for(Jt=e,Nn=0;Nn<Jt.length;Nn++){const n=Jt[Nn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Jt=null,Nn=0}}const Oi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function $c(t){try{for(pt=0;pt<je.length;pt++){const e=je[pt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Mi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pt<je.length;pt++){const e=je[pt];e&&(e.flags&=-2)}pt=-1,je.length=0,jc(),ys=null,(je.length||$n.length)&&$c()}}let Ae=null,Hc=null;function vs(t){const e=Ae;return Ae=t,Hc=t&&t.type.__scopeId||null,e}function Wr(t,e=Ae,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Za(-1);const o=vs(e);let l;try{l=t(...r)}finally{vs(o),i._d&&Za(1)}return l};return i._n=!0,i._c=!0,i._d=!0,i}function Vc(t,e){if(Ae===null)return t;const n=Gs(Ae),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,u,h=re]=e[r];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&Ot(l),i.push({dir:o,instance:n,value:l,oldValue:void 0,arg:u,modifiers:h}))}return t}function pn(t,e,n,i){const r=t.dirs,o=e&&e.dirs;for(let l=0;l<r.length;l++){const u=r[l];o&&(u.oldValue=o[l].value);let h=u.dir[i];h&&(xt(),wt(h,n,8,[t.el,u,t,e]),Mt())}}const cd=Symbol("_vte"),ud=t=>t.__isTeleport;function Io(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Io(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Bc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ws(t,e,n,i,r=!1){if(G(t)){t.forEach((U,$)=>ws(U,e&&(G(e)?e[$]:e),n,i,r));return}if(Hn(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ws(t,e,n,i.component.subTree);return}const o=i.shapeFlag&4?Gs(i.component):i.el,l=r?null:o,{i:u,r:h}=t,d=e&&e.r,_=u.refs===re?u.refs={}:u.refs,E=u.setupState,S=ae(E),P=E===re?()=>!1:U=>le(S,U);if(d!=null&&d!==h&&(ye(d)?(_[d]=null,P(d)&&(E[d]=null)):Pe(d)&&(d.value=null)),Z(h))Mi(h,u,12,[l,_]);else{const U=ye(h),$=Pe(h);if(U||$){const J=()=>{if(t.f){const ee=U?P(h)?E[h]:_[h]:h.value;r?G(ee)&&uo(ee,o):G(ee)?ee.includes(o)||ee.push(o):U?(_[h]=[o],P(h)&&(E[h]=_[h])):(h.value=[o],t.k&&(_[t.k]=h.value))}else U?(_[h]=l,P(h)&&(E[h]=l)):$&&(h.value=l,t.k&&(_[t.k]=l))};l?(J.id=-1,Je(J,n)):J()}}}Fs().requestIdleCallback;Fs().cancelIdleCallback;const Hn=t=>!!t.type.__asyncLoader,Wc=t=>t.type.__isKeepAlive;function hd(t,e){zc(t,"a",e)}function fd(t,e){zc(t,"da",e)}function zc(t,e,n=Me){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Bs(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Wc(r.parent.vnode)&&dd(i,e,n,r),r=r.parent}}function dd(t,e,n,i){const r=Bs(e,t,i,!0);bo(()=>{uo(i[e],r)},n)}function Bs(t,e,n=Me,i=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...l)=>{xt();const u=Li(n),h=wt(e,n,t,l);return u(),Mt(),h});return i?r.unshift(o):r.push(o),o}}const Vt=t=>(e,n=Me)=>{(!Di||t==="sp")&&Bs(t,(...i)=>e(...i),n)},pd=Vt("bm"),Kc=Vt("m"),gd=Vt("bu"),md=Vt("u"),_d=Vt("bum"),bo=Vt("um"),yd=Vt("sp"),vd=Vt("rtg"),wd=Vt("rtc");function Id(t,e=Me){Bs("ec",t,e)}const bd=Symbol.for("v-ndc");function Ba(t,e,n,i){let r;const o=n,l=G(t);if(l||ye(t)){const u=l&&jn(t);let h=!1,d=!1;u&&(h=!it(t),d=rn(t),t=Hs(t)),r=new Array(t.length);for(let _=0,E=t.length;_<E;_++)r[_]=e(h?d?ms(Se(t[_])):Se(t[_]):t[_],_,void 0,o)}else if(typeof t=="number"){r=new Array(t);for(let u=0;u<t;u++)r[u]=e(u+1,u,void 0,o)}else if(me(t))if(t[Symbol.iterator])r=Array.from(t,(u,h)=>e(u,h,void 0,o));else{const u=Object.keys(t);r=new Array(u.length);for(let h=0,d=u.length;h<d;h++){const _=u[h];r[h]=e(t[_],_,h,o)}}else r=[];return r}function Wa(t,e,n={},i,r){if(Ae.ce||Ae.parent&&Hn(Ae.parent)&&Ae.parent.ce)return e!=="default"&&(n.name=e),oe(),Ye($e,null,[Re("slot",n,i)],64);let o=t[e];o&&o._c&&(o._d=!1),oe();const l=o&&Gc(o(n)),u=n.key||l&&l.key,h=Ye($e,{key:(u&&!$t(u)?u:`_${e}`)+""},l||[],l&&t._===1?64:-2);return o&&o._c&&(o._d=!0),h}function Gc(t){return t.some(e=>So(e)?!(e.type===Lt||e.type===$e&&!Gc(e.children)):!0)?t:null}const zr=t=>t?gu(t)?Gs(t):zr(t.parent):null,Ii=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zr(t.parent),$root:t=>zr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Jc(t),$forceUpdate:t=>t.f||(t.f=()=>{wo(t.update)}),$nextTick:t=>t.n||(t.n=od.bind(t.proxy)),$watch:t=>Wd.bind(t)}),br=(t,e)=>t!==re&&!t.__isScriptSetup&&le(t,e),Td={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:o,accessCache:l,type:u,appContext:h}=t;let d;if(e[0]!=="$"){const P=l[e];if(P!==void 0)switch(P){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(br(i,e))return l[e]=1,i[e];if(r!==re&&le(r,e))return l[e]=2,r[e];if((d=t.propsOptions[0])&&le(d,e))return l[e]=3,o[e];if(n!==re&&le(n,e))return l[e]=4,n[e];Gr&&(l[e]=0)}}const _=Ii[e];let E,S;if(_)return e==="$attrs"&&xe(t.attrs,"get",""),_(t);if((E=u.__cssModules)&&(E=E[e]))return E;if(n!==re&&le(n,e))return l[e]=4,n[e];if(S=h.config.globalProperties,le(S,e))return S[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return br(r,e)?(r[e]=n,!0):i!==re&&le(i,e)?(i[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:o}},l){let u;return!!n[l]||t!==re&&le(t,l)||br(e,l)||(u=o[0])&&le(u,l)||le(i,l)||le(Ii,l)||le(r.config.globalProperties,l)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Kr(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Ws(t,e){const n=Kr(t);for(const i in e){if(i.startsWith("__skip"))continue;let r=n[i];r?G(r)||Z(r)?r=n[i]={type:r,default:e[i]}:r.default=e[i]:r===null&&(r=n[i]={default:e[i]}),r&&e[`__skip_${i}`]&&(r.skipFactory=!0)}return n}let Gr=!0;function Cd(t){const e=Jc(t),n=t.proxy,i=t.ctx;Gr=!1,e.beforeCreate&&za(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:l,watch:u,provide:h,inject:d,created:_,beforeMount:E,mounted:S,beforeUpdate:P,updated:U,activated:$,deactivated:J,beforeDestroy:ee,beforeUnmount:Q,destroyed:X,unmounted:H,render:he,renderTracked:ge,renderTriggered:I,errorCaptured:p,serverPrefetch:y,expose:w,inheritAttrs:b,components:C,directives:m,filters:qe}=e;if(d&&Ed(d,i,null),l)for(const ue in l){const ie=l[ue];Z(ie)&&(i[ue]=ie.bind(n))}if(r){const ue=r.call(n,n);me(ue)&&(t.data=_o(ue))}if(Gr=!0,o)for(const ue in o){const ie=o[ue],rt=Z(ie)?ie.bind(n,n):Z(ie.get)?ie.get.bind(n,n):_t,ln=!Z(ie)&&Z(ie.set)?ie.set.bind(n):_t,Tt=tn({get:rt,set:ln});Object.defineProperty(i,ue,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:ve=>Tt.value=ve})}if(u)for(const ue in u)qc(u[ue],i,n,ue);if(h){const ue=Z(h)?h.call(n):h;Reflect.ownKeys(ue).forEach(ie=>{Yc(ie,ue[ie])})}_&&za(_,t,"c");function be(ue,ie){G(ie)?ie.forEach(rt=>ue(rt.bind(n))):ie&&ue(ie.bind(n))}if(be(pd,E),be(Kc,S),be(gd,P),be(md,U),be(hd,$),be(fd,J),be(Id,p),be(wd,ge),be(vd,I),be(_d,Q),be(bo,H),be(yd,y),G(w))if(w.length){const ue=t.exposed||(t.exposed={});w.forEach(ie=>{Object.defineProperty(ue,ie,{get:()=>n[ie],set:rt=>n[ie]=rt})})}else t.exposed||(t.exposed={});he&&t.render===_t&&(t.render=he),b!=null&&(t.inheritAttrs=b),C&&(t.components=C),m&&(t.directives=m),y&&Bc(t)}function Ed(t,e,n=_t){G(t)&&(t=qr(t));for(const i in t){const r=t[i];let o;me(r)?"default"in r?o=Bn(r.from||i,r.default,!0):o=Bn(r.from||i):o=Bn(r),Pe(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function za(t,e,n){wt(G(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function qc(t,e,n,i){let r=i.includes(".")?lu(n,i):()=>n[i];if(ye(t)){const o=e[t];Z(o)&&cs(r,o)}else if(Z(t))cs(r,t.bind(n));else if(me(t))if(G(t))t.forEach(o=>qc(o,e,n,i));else{const o=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(o)&&cs(r,o,t)}}function Jc(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:l}}=t.appContext,u=o.get(e);let h;return u?h=u:!r.length&&!n&&!i?h=e:(h={},r.length&&r.forEach(d=>Is(h,d,l,!0)),Is(h,e,l)),me(e)&&o.set(e,h),h}function Is(t,e,n,i=!1){const{mixins:r,extends:o}=e;o&&Is(t,o,n,!0),r&&r.forEach(l=>Is(t,l,n,!0));for(const l in e)if(!(i&&l==="expose")){const u=Sd[l]||n&&n[l];t[l]=u?u(t[l],e[l]):e[l]}return t}const Sd={data:Ka,props:Ga,emits:Ga,methods:_i,computed:_i,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:_i,directives:_i,watch:Rd,provide:Ka,inject:Ad};function Ka(t,e){return e?t?function(){return He(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function Ad(t,e){return _i(qr(t),qr(e))}function qr(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ue(t,e){return t?[...new Set([].concat(t,e))]:e}function _i(t,e){return t?He(Object.create(null),t,e):e}function Ga(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:He(Object.create(null),Kr(t),Kr(e??{})):e}function Rd(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const i in e)n[i]=Ue(t[i],e[i]);return n}function Xc(){return{app:null,config:{isNativeTag:_f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pd=0;function Od(t,e){return function(i,r=null){Z(i)||(i=He({},i)),r!=null&&!me(r)&&(r=null);const o=Xc(),l=new WeakSet,u=[];let h=!1;const d=o.app={_uid:Pd++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:up,get config(){return o.config},set config(_){},use(_,...E){return l.has(_)||(_&&Z(_.install)?(l.add(_),_.install(d,...E)):Z(_)&&(l.add(_),_(d,...E))),d},mixin(_){return o.mixins.includes(_)||o.mixins.push(_),d},component(_,E){return E?(o.components[_]=E,d):o.components[_]},directive(_,E){return E?(o.directives[_]=E,d):o.directives[_]},mount(_,E,S){if(!h){const P=d._ceVNode||Re(i,r);return P.appContext=o,S===!0?S="svg":S===!1&&(S=void 0),t(P,_,S),h=!0,d._container=_,_.__vue_app__=d,Gs(P.component)}},onUnmount(_){u.push(_)},unmount(){h&&(wt(u,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(_,E){return o.provides[_]=E,d},runWithContext(_){const E=Vn;Vn=d;try{return _()}finally{Vn=E}}};return d}}let Vn=null;function Yc(t,e){if(Me){let n=Me.provides;const i=Me.parent&&Me.parent.provides;i===n&&(n=Me.provides=Object.create(i)),n[t]=e}}function Bn(t,e,n=!1){const i=Me||Ae;if(i||Vn){let r=Vn?Vn._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(i&&i.proxy):e}}const Zc={},Qc=()=>Object.create(Zc),eu=t=>Object.getPrototypeOf(t)===Zc;function kd(t,e,n,i=!1){const r={},o=Qc();t.propsDefaults=Object.create(null),tu(t,e,r,o);for(const l in t.propsOptions[0])l in r||(r[l]=void 0);n?t.props=i?r:qf(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function Dd(t,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:l}}=t,u=ae(r),[h]=t.propsOptions;let d=!1;if((i||l>0)&&!(l&16)){if(l&8){const _=t.vnode.dynamicProps;for(let E=0;E<_.length;E++){let S=_[E];if(zs(t.emitsOptions,S))continue;const P=e[S];if(h)if(le(o,S))P!==o[S]&&(o[S]=P,d=!0);else{const U=Nt(S);r[U]=Jr(h,u,U,P,t,!1)}else P!==o[S]&&(o[S]=P,d=!0)}}}else{tu(t,e,r,o)&&(d=!0);let _;for(const E in u)(!e||!le(e,E)&&((_=Ht(E))===E||!le(e,_)))&&(h?n&&(n[E]!==void 0||n[_]!==void 0)&&(r[E]=Jr(h,u,E,void 0,t,!0)):delete r[E]);if(o!==u)for(const E in o)(!e||!le(e,E))&&(delete o[E],d=!0)}d&&Pt(t.attrs,"set","")}function tu(t,e,n,i){const[r,o]=t.propsOptions;let l=!1,u;if(e)for(let h in e){if(yi(h))continue;const d=e[h];let _;r&&le(r,_=Nt(h))?!o||!o.includes(_)?n[_]=d:(u||(u={}))[_]=d:zs(t.emitsOptions,h)||(!(h in i)||d!==i[h])&&(i[h]=d,l=!0)}if(o){const h=ae(n),d=u||re;for(let _=0;_<o.length;_++){const E=o[_];n[E]=Jr(r,h,E,d[E],t,!le(d,E))}}return l}function Jr(t,e,n,i,r,o){const l=t[n];if(l!=null){const u=le(l,"default");if(u&&i===void 0){const h=l.default;if(l.type!==Function&&!l.skipFactory&&Z(h)){const{propsDefaults:d}=r;if(n in d)i=d[n];else{const _=Li(r);i=d[n]=h.call(null,e),_()}}else i=h;r.ce&&r.ce._setProp(n,i)}l[0]&&(o&&!u?i=!1:l[1]&&(i===""||i===Ht(n))&&(i=!0))}return i}const Nd=new WeakMap;function nu(t,e,n=!1){const i=n?Nd:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,l={},u=[];let h=!1;if(!Z(t)){const _=E=>{h=!0;const[S,P]=nu(E,e,!0);He(l,S),P&&u.push(...P)};!n&&e.mixins.length&&e.mixins.forEach(_),t.extends&&_(t.extends),t.mixins&&t.mixins.forEach(_)}if(!o&&!h)return me(t)&&i.set(t,Un),Un;if(G(o))for(let _=0;_<o.length;_++){const E=Nt(o[_]);qa(E)&&(l[E]=re)}else if(o)for(const _ in o){const E=Nt(_);if(qa(E)){const S=o[_],P=l[E]=G(S)||Z(S)?{type:S}:He({},S),U=P.type;let $=!1,J=!0;if(G(U))for(let ee=0;ee<U.length;++ee){const Q=U[ee],X=Z(Q)&&Q.name;if(X==="Boolean"){$=!0;break}else X==="String"&&(J=!1)}else $=Z(U)&&U.name==="Boolean";P[0]=$,P[1]=J,($||le(P,"default"))&&u.push(E)}}const d=[l,u];return me(t)&&i.set(t,d),d}function qa(t){return t[0]!=="$"&&!yi(t)}const To=t=>t[0]==="_"||t==="$stable",Co=t=>G(t)?t.map(gt):[gt(t)],xd=(t,e,n)=>{if(e._n)return e;const i=Wr((...r)=>Co(e(...r)),n);return i._c=!1,i},iu=(t,e,n)=>{const i=t._ctx;for(const r in t){if(To(r))continue;const o=t[r];if(Z(o))e[r]=xd(r,o,i);else if(o!=null){const l=Co(o);e[r]=()=>l}}},su=(t,e)=>{const n=Co(e);t.slots.default=()=>n},ru=(t,e,n)=>{for(const i in e)(n||!To(i))&&(t[i]=e[i])},Md=(t,e,n)=>{const i=t.slots=Qc();if(t.vnode.shapeFlag&32){const r=e._;r?(ru(i,e,n),n&&_c(i,"_",r,!0)):iu(e,i)}else e&&su(t,e)},Ld=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,l=re;if(i.shapeFlag&32){const u=e._;u?n&&u===1?o=!1:ru(r,e,n):(o=!e.$stable,iu(e,r)),l=e}else e&&(su(t,e),l={default:1});if(o)for(const u in r)!To(u)&&l[u]==null&&delete r[u]},Je=Yd;function Ud(t){return Fd(t)}function Fd(t,e){const n=Fs();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:l,createText:u,createComment:h,setText:d,setElementText:_,parentNode:E,nextSibling:S,setScopeId:P=_t,insertStaticContent:U}=t,$=(g,v,R,D=null,O=null,k=null,j=void 0,M=null,x=!!v.dynamicChildren)=>{if(g===v)return;g&&!mi(g,v)&&(D=Ct(g),ve(g,O,k,!0),g=null),v.patchFlag===-2&&(x=!1,v.dynamicChildren=null);const{type:N,ref:B,shapeFlag:F}=v;switch(N){case Ks:J(g,v,R,D);break;case Lt:ee(g,v,R,D);break;case Cr:g==null&&Q(v,R,D,j);break;case $e:C(g,v,R,D,O,k,j,M,x);break;default:F&1?he(g,v,R,D,O,k,j,M,x):F&6?m(g,v,R,D,O,k,j,M,x):(F&64||F&128)&&N.process(g,v,R,D,O,k,j,M,x,ft)}B!=null&&O&&ws(B,g&&g.ref,k,v||g,!v)},J=(g,v,R,D)=>{if(g==null)i(v.el=u(v.children),R,D);else{const O=v.el=g.el;v.children!==g.children&&d(O,v.children)}},ee=(g,v,R,D)=>{g==null?i(v.el=h(v.children||""),R,D):v.el=g.el},Q=(g,v,R,D)=>{[g.el,g.anchor]=U(g.children,v,R,D,g.el,g.anchor)},X=({el:g,anchor:v},R,D)=>{let O;for(;g&&g!==v;)O=S(g),i(g,R,D),g=O;i(v,R,D)},H=({el:g,anchor:v})=>{let R;for(;g&&g!==v;)R=S(g),r(g),g=R;r(v)},he=(g,v,R,D,O,k,j,M,x)=>{v.type==="svg"?j="svg":v.type==="math"&&(j="mathml"),g==null?ge(v,R,D,O,k,j,M,x):y(g,v,O,k,j,M,x)},ge=(g,v,R,D,O,k,j,M)=>{let x,N;const{props:B,shapeFlag:F,transition:V,dirs:z}=g;if(x=g.el=l(g.type,k,B&&B.is,B),F&8?_(x,g.children):F&16&&p(g.children,x,null,D,O,Tr(g,k),j,M),z&&pn(g,null,D,"created"),I(x,g,g.scopeId,j,D),B){for(const Y in B)Y!=="value"&&!yi(Y)&&o(x,Y,null,B[Y],k,D);"value"in B&&o(x,"value",null,B.value,k),(N=B.onVnodeBeforeMount)&&dt(N,D,g)}z&&pn(g,null,D,"beforeMount");const W=jd(O,V);W&&V.beforeEnter(x),i(x,v,R),((N=B&&B.onVnodeMounted)||W||z)&&Je(()=>{N&&dt(N,D,g),W&&V.enter(x),z&&pn(g,null,D,"mounted")},O)},I=(g,v,R,D,O)=>{if(R&&P(g,R),D)for(let k=0;k<D.length;k++)P(g,D[k]);if(O){let k=O.subTree;if(v===k||hu(k.type)&&(k.ssContent===v||k.ssFallback===v)){const j=O.vnode;I(g,j,j.scopeId,j.slotScopeIds,O.parent)}}},p=(g,v,R,D,O,k,j,M,x=0)=>{for(let N=x;N<g.length;N++){const B=g[N]=M?Xt(g[N]):gt(g[N]);$(null,B,v,R,D,O,k,j,M)}},y=(g,v,R,D,O,k,j)=>{const M=v.el=g.el;let{patchFlag:x,dynamicChildren:N,dirs:B}=v;x|=g.patchFlag&16;const F=g.props||re,V=v.props||re;let z;if(R&&gn(R,!1),(z=V.onVnodeBeforeUpdate)&&dt(z,R,v,g),B&&pn(v,g,R,"beforeUpdate"),R&&gn(R,!0),(F.innerHTML&&V.innerHTML==null||F.textContent&&V.textContent==null)&&_(M,""),N?w(g.dynamicChildren,N,M,R,D,Tr(v,O),k):j||ie(g,v,M,null,R,D,Tr(v,O),k,!1),x>0){if(x&16)b(M,F,V,R,O);else if(x&2&&F.class!==V.class&&o(M,"class",null,V.class,O),x&4&&o(M,"style",F.style,V.style,O),x&8){const W=v.dynamicProps;for(let Y=0;Y<W.length;Y++){const te=W[Y],Oe=F[te],Te=V[te];(Te!==Oe||te==="value")&&o(M,te,Oe,Te,O,R)}}x&1&&g.children!==v.children&&_(M,v.children)}else!j&&N==null&&b(M,F,V,R,O);((z=V.onVnodeUpdated)||B)&&Je(()=>{z&&dt(z,R,v,g),B&&pn(v,g,R,"updated")},D)},w=(g,v,R,D,O,k,j)=>{for(let M=0;M<v.length;M++){const x=g[M],N=v[M],B=x.el&&(x.type===$e||!mi(x,N)||x.shapeFlag&198)?E(x.el):R;$(x,N,B,null,D,O,k,j,!0)}},b=(g,v,R,D,O)=>{if(v!==R){if(v!==re)for(const k in v)!yi(k)&&!(k in R)&&o(g,k,v[k],null,O,D);for(const k in R){if(yi(k))continue;const j=R[k],M=v[k];j!==M&&k!=="value"&&o(g,k,M,j,O,D)}"value"in R&&o(g,"value",v.value,R.value,O)}},C=(g,v,R,D,O,k,j,M,x)=>{const N=v.el=g?g.el:u(""),B=v.anchor=g?g.anchor:u("");let{patchFlag:F,dynamicChildren:V,slotScopeIds:z}=v;z&&(M=M?M.concat(z):z),g==null?(i(N,R,D),i(B,R,D),p(v.children||[],R,B,O,k,j,M,x)):F>0&&F&64&&V&&g.dynamicChildren?(w(g.dynamicChildren,V,R,O,k,j,M),(v.key!=null||O&&v===O.subTree)&&ou(g,v,!0)):ie(g,v,R,B,O,k,j,M,x)},m=(g,v,R,D,O,k,j,M,x)=>{v.slotScopeIds=M,g==null?v.shapeFlag&512?O.ctx.activate(v,R,D,j,x):qe(v,R,D,O,k,j,x):Bt(g,v,x)},qe=(g,v,R,D,O,k,j)=>{const M=g.component=ip(g,D,O);if(Wc(g)&&(M.ctx.renderer=ft),rp(M,!1,j),M.asyncDep){if(O&&O.registerDep(M,be,j),!g.el){const x=M.subTree=Re(Lt);ee(null,x,v,R)}}else be(M,g,v,R,O,k,j)},Bt=(g,v,R)=>{const D=v.component=g.component;if(Jd(g,v,R))if(D.asyncDep&&!D.asyncResolved){ue(D,v,R);return}else D.next=v,D.update();else v.el=g.el,D.vnode=v},be=(g,v,R,D,O,k,j)=>{const M=()=>{if(g.isMounted){let{next:F,bu:V,u:z,parent:W,vnode:Y}=g;{const ke=au(g);if(ke){F&&(F.el=Y.el,ue(g,F,j)),ke.asyncDep.then(()=>{g.isUnmounted||M()});return}}let te=F,Oe;gn(g,!1),F?(F.el=Y.el,ue(g,F,j)):F=Y,V&&ls(V),(Oe=F.props&&F.props.onVnodeBeforeUpdate)&&dt(Oe,W,F,Y),gn(g,!0);const Te=Xa(g),Qe=g.subTree;g.subTree=Te,$(Qe,Te,E(Qe.el),Ct(Qe),g,O,k),F.el=Te.el,te===null&&Xd(g,Te.el),z&&Je(z,O),(Oe=F.props&&F.props.onVnodeUpdated)&&Je(()=>dt(Oe,W,F,Y),O)}else{let F;const{el:V,props:z}=v,{bm:W,m:Y,parent:te,root:Oe,type:Te}=g,Qe=Hn(v);gn(g,!1),W&&ls(W),!Qe&&(F=z&&z.onVnodeBeforeMount)&&dt(F,te,v),gn(g,!0);{Oe.ce&&Oe.ce._injectChildStyle(Te);const ke=g.subTree=Xa(g);$(null,ke,R,D,g,O,k),v.el=ke.el}if(Y&&Je(Y,O),!Qe&&(F=z&&z.onVnodeMounted)){const ke=v;Je(()=>dt(F,te,ke),O)}(v.shapeFlag&256||te&&Hn(te.vnode)&&te.vnode.shapeFlag&256)&&g.a&&Je(g.a,O),g.isMounted=!0,v=R=D=null}};g.scope.on();const x=g.effect=new Ic(M);g.scope.off();const N=g.update=x.run.bind(x),B=g.job=x.runIfDirty.bind(x);B.i=g,B.id=g.uid,x.scheduler=()=>wo(B),gn(g,!0),N()},ue=(g,v,R)=>{v.component=g;const D=g.vnode.props;g.vnode=v,g.next=null,Dd(g,v.props,D,R),Ld(g,v.children,R),xt(),Va(g),Mt()},ie=(g,v,R,D,O,k,j,M,x=!1)=>{const N=g&&g.children,B=g?g.shapeFlag:0,F=v.children,{patchFlag:V,shapeFlag:z}=v;if(V>0){if(V&128){ln(N,F,R,D,O,k,j,M,x);return}else if(V&256){rt(N,F,R,D,O,k,j,M,x);return}}z&8?(B&16&&un(N,O,k),F!==N&&_(R,F)):B&16?z&16?ln(N,F,R,D,O,k,j,M,x):un(N,O,k,!0):(B&8&&_(R,""),z&16&&p(F,R,D,O,k,j,M,x))},rt=(g,v,R,D,O,k,j,M,x)=>{g=g||Un,v=v||Un;const N=g.length,B=v.length,F=Math.min(N,B);let V;for(V=0;V<F;V++){const z=v[V]=x?Xt(v[V]):gt(v[V]);$(g[V],z,R,null,O,k,j,M,x)}N>B?un(g,O,k,!0,!1,F):p(v,R,D,O,k,j,M,x,F)},ln=(g,v,R,D,O,k,j,M,x)=>{let N=0;const B=v.length;let F=g.length-1,V=B-1;for(;N<=F&&N<=V;){const z=g[N],W=v[N]=x?Xt(v[N]):gt(v[N]);if(mi(z,W))$(z,W,R,null,O,k,j,M,x);else break;N++}for(;N<=F&&N<=V;){const z=g[F],W=v[V]=x?Xt(v[V]):gt(v[V]);if(mi(z,W))$(z,W,R,null,O,k,j,M,x);else break;F--,V--}if(N>F){if(N<=V){const z=V+1,W=z<B?v[z].el:D;for(;N<=V;)$(null,v[N]=x?Xt(v[N]):gt(v[N]),R,W,O,k,j,M,x),N++}}else if(N>V)for(;N<=F;)ve(g[N],O,k,!0),N++;else{const z=N,W=N,Y=new Map;for(N=W;N<=V;N++){const Ce=v[N]=x?Xt(v[N]):gt(v[N]);Ce.key!=null&&Y.set(Ce.key,N)}let te,Oe=0;const Te=V-W+1;let Qe=!1,ke=0;const Wt=new Array(Te);for(N=0;N<Te;N++)Wt[N]=0;for(N=z;N<=F;N++){const Ce=g[N];if(Oe>=Te){ve(Ce,O,k,!0);continue}let et;if(Ce.key!=null)et=Y.get(Ce.key);else for(te=W;te<=V;te++)if(Wt[te-W]===0&&mi(Ce,v[te])){et=te;break}et===void 0?ve(Ce,O,k,!0):(Wt[et-W]=N+1,et>=ke?ke=et:Qe=!0,$(Ce,v[et],R,null,O,k,j,M,x),Oe++)}const ni=Qe?$d(Wt):Un;for(te=ni.length-1,N=Te-1;N>=0;N--){const Ce=W+N,et=v[Ce],Wi=Ce+1<B?v[Ce+1].el:D;Wt[N]===0?$(null,et,R,Wi,O,k,j,M,x):Qe&&(te<0||N!==ni[te]?Tt(et,R,Wi,2):te--)}}},Tt=(g,v,R,D,O=null)=>{const{el:k,type:j,transition:M,children:x,shapeFlag:N}=g;if(N&6){Tt(g.component.subTree,v,R,D);return}if(N&128){g.suspense.move(v,R,D);return}if(N&64){j.move(g,v,R,ft);return}if(j===$e){i(k,v,R);for(let F=0;F<x.length;F++)Tt(x[F],v,R,D);i(g.anchor,v,R);return}if(j===Cr){X(g,v,R);return}if(D!==2&&N&1&&M)if(D===0)M.beforeEnter(k),i(k,v,R),Je(()=>M.enter(k),O);else{const{leave:F,delayLeave:V,afterLeave:z}=M,W=()=>{g.ctx.isUnmounted?r(k):i(k,v,R)},Y=()=>{F(k,()=>{W(),z&&z()})};V?V(k,W,Y):Y()}else i(k,v,R)},ve=(g,v,R,D=!1,O=!1)=>{const{type:k,props:j,ref:M,children:x,dynamicChildren:N,shapeFlag:B,patchFlag:F,dirs:V,cacheIndex:z}=g;if(F===-2&&(O=!1),M!=null&&(xt(),ws(M,null,R,g,!0),Mt()),z!=null&&(v.renderCache[z]=void 0),B&256){v.ctx.deactivate(g);return}const W=B&1&&V,Y=!Hn(g);let te;if(Y&&(te=j&&j.onVnodeBeforeUnmount)&&dt(te,v,g),B&6)cn(g.component,R,D);else{if(B&128){g.suspense.unmount(R,D);return}W&&pn(g,null,v,"beforeUnmount"),B&64?g.type.remove(g,v,R,ft,D):N&&!N.hasOnce&&(k!==$e||F>0&&F&64)?un(N,v,R,!1,!0):(k===$e&&F&384||!O&&B&16)&&un(x,v,R),D&&we(g)}(Y&&(te=j&&j.onVnodeUnmounted)||W)&&Je(()=>{te&&dt(te,v,g),W&&pn(g,null,v,"unmounted")},R)},we=g=>{const{type:v,el:R,anchor:D,transition:O}=g;if(v===$e){Qs(R,D);return}if(v===Cr){H(g);return}const k=()=>{r(R),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(g.shapeFlag&1&&O&&!O.persisted){const{leave:j,delayLeave:M}=O,x=()=>j(R,k);M?M(g.el,k,x):x()}else k()},Qs=(g,v)=>{let R;for(;g!==v;)R=S(g),r(g),g=R;r(v)},cn=(g,v,R)=>{const{bum:D,scope:O,job:k,subTree:j,um:M,m:x,a:N,parent:B,slots:{__:F}}=g;Ja(x),Ja(N),D&&ls(D),B&&G(F)&&F.forEach(V=>{B.renderCache[V]=void 0}),O.stop(),k&&(k.flags|=8,ve(j,g,v,R)),M&&Je(M,v),Je(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},un=(g,v,R,D=!1,O=!1,k=0)=>{for(let j=k;j<g.length;j++)ve(g[j],v,R,D,O)},Ct=g=>{if(g.shapeFlag&6)return Ct(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const v=S(g.anchor||g.el),R=v&&v[cd];return R?S(R):v};let ei=!1;const Bi=(g,v,R)=>{g==null?v._vnode&&ve(v._vnode,null,null,!0):$(v._vnode||null,g,v,null,null,null,R),v._vnode=g,ei||(ei=!0,Va(),jc(),ei=!1)},ft={p:$,um:ve,m:Tt,r:we,mt:qe,mc:p,pc:ie,pbc:w,n:Ct,o:t};return{render:Bi,hydrate:void 0,createApp:Od(Bi)}}function Tr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function gn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function jd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ou(t,e,n=!1){const i=t.children,r=e.children;if(G(i)&&G(r))for(let o=0;o<i.length;o++){const l=i[o];let u=r[o];u.shapeFlag&1&&!u.dynamicChildren&&((u.patchFlag<=0||u.patchFlag===32)&&(u=r[o]=Xt(r[o]),u.el=l.el),!n&&u.patchFlag!==-2&&ou(l,u)),u.type===Ks&&(u.el=l.el),u.type===Lt&&!u.el&&(u.el=l.el)}}function $d(t){const e=t.slice(),n=[0];let i,r,o,l,u;const h=t.length;for(i=0;i<h;i++){const d=t[i];if(d!==0){if(r=n[n.length-1],t[r]<d){e[i]=r,n.push(i);continue}for(o=0,l=n.length-1;o<l;)u=o+l>>1,t[n[u]]<d?o=u+1:l=u;d<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,l=n[o-1];o-- >0;)n[o]=l,l=e[l];return n}function au(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:au(e)}function Ja(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Hd=Symbol.for("v-scx"),Vd=()=>Bn(Hd);function Bd(t,e){return Eo(t,null,{flush:"sync"})}function cs(t,e,n){return Eo(t,e,n)}function Eo(t,e,n=re){const{immediate:i,deep:r,flush:o,once:l}=n,u=He({},n),h=e&&i||!e&&o!=="post";let d;if(Di){if(o==="sync"){const P=Vd();d=P.__watcherHandles||(P.__watcherHandles=[])}else if(!h){const P=()=>{};return P.stop=_t,P.resume=_t,P.pause=_t,P}}const _=Me;u.call=(P,U,$)=>wt(P,_,U,$);let E=!1;o==="post"?u.scheduler=P=>{Je(P,_&&_.suspense)}:o!=="sync"&&(E=!0,u.scheduler=(P,U)=>{U?P():wo(P)}),u.augmentJob=P=>{e&&(P.flags|=4),E&&(P.flags|=2,_&&(P.id=_.uid,P.i=_))};const S=sd(t,e,u);return Di&&(d?d.push(S):h&&S()),S}function Wd(t,e,n){const i=this.proxy,r=ye(t)?t.includes(".")?lu(i,t):()=>i[t]:t.bind(i,i);let o;Z(e)?o=e:(o=e.handler,n=e);const l=Li(this),u=Eo(r,o.bind(i),n);return l(),u}function lu(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function zd(t,e,n=re){const i=sp(),r=Nt(e),o=Ht(e),l=cu(t,r),u=ed((h,d)=>{let _,E=re,S;return Bd(()=>{const P=t[r];We(_,P)&&(_=P,d())}),{get(){return h(),n.get?n.get(_):_},set(P){const U=n.set?n.set(P):P;if(!We(U,_)&&!(E!==re&&We(P,E)))return;const $=i.vnode.props;$&&(e in $||r in $||o in $)&&(`onUpdate:${e}`in $||`onUpdate:${r}`in $||`onUpdate:${o}`in $)||(_=P,d()),i.emit(`update:${e}`,U),We(P,U)&&We(P,E)&&!We(U,S)&&d(),E=P,S=U}}});return u[Symbol.iterator]=()=>{let h=0;return{next(){return h<2?{value:h++?l||re:u,done:!1}:{done:!0}}}},u}const cu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Nt(e)}Modifiers`]||t[`${Ht(e)}Modifiers`];function Kd(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||re;let r=n;const o=e.startsWith("update:"),l=o&&cu(i,e.slice(7));l&&(l.trim&&(r=n.map(_=>ye(_)?_.trim():_)),l.number&&(r=n.map(jr)));let u,h=i[u=_r(e)]||i[u=_r(Nt(e))];!h&&o&&(h=i[u=_r(Ht(e))]),h&&wt(h,t,6,r);const d=i[u+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[u])return;t.emitted[u]=!0,wt(d,t,6,r)}}function uu(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let l={},u=!1;if(!Z(t)){const h=d=>{const _=uu(d,e,!0);_&&(u=!0,He(l,_))};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!o&&!u?(me(t)&&i.set(t,null),null):(G(o)?o.forEach(h=>l[h]=null):He(l,o),me(t)&&i.set(t,l),l)}function zs(t,e){return!t||!Ms(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,Ht(e))||le(t,e))}function Xa(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[o],slots:l,attrs:u,emit:h,render:d,renderCache:_,props:E,data:S,setupState:P,ctx:U,inheritAttrs:$}=t,J=vs(t);let ee,Q;try{if(n.shapeFlag&4){const H=r||i,he=H;ee=gt(d.call(he,H,_,E,P,S,U)),Q=u}else{const H=e;ee=gt(H.length>1?H(E,{attrs:u,slots:l,emit:h}):H(E,null)),Q=e.props?u:Gd(u)}}catch(H){bi.length=0,Vs(H,t,1),ee=Re(Lt)}let X=ee;if(Q&&$!==!1){const H=Object.keys(Q),{shapeFlag:he}=X;H.length&&he&7&&(o&&H.some(co)&&(Q=qd(Q,o)),X=Gn(X,Q,!1,!0))}return n.dirs&&(X=Gn(X,null,!1,!0),X.dirs=X.dirs?X.dirs.concat(n.dirs):n.dirs),n.transition&&Io(X,n.transition),ee=X,vs(J),ee}const Gd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ms(n))&&((e||(e={}))[n]=t[n]);return e},qd=(t,e)=>{const n={};for(const i in t)(!co(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Jd(t,e,n){const{props:i,children:r,component:o}=t,{props:l,children:u,patchFlag:h}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return i?Ya(i,l,d):!!l;if(h&8){const _=e.dynamicProps;for(let E=0;E<_.length;E++){const S=_[E];if(l[S]!==i[S]&&!zs(d,S))return!0}}}else return(r||u)&&(!u||!u.$stable)?!0:i===l?!1:i?l?Ya(i,l,d):!0:!!l;return!1}function Ya(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==t[o]&&!zs(n,o))return!0}return!1}function Xd({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const hu=t=>t.__isSuspense;function Yd(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):ld(t)}const $e=Symbol.for("v-fgt"),Ks=Symbol.for("v-txt"),Lt=Symbol.for("v-cmt"),Cr=Symbol.for("v-stc"),bi=[];let Xe=null;function oe(t=!1){bi.push(Xe=t?null:[])}function Zd(){bi.pop(),Xe=bi[bi.length-1]||null}let ki=1;function Za(t,e=!1){ki+=t,t<0&&Xe&&e&&(Xe.hasOnce=!0)}function fu(t){return t.dynamicChildren=ki>0?Xe||Un:null,Zd(),ki>0&&Xe&&Xe.push(t),t}function Ie(t,e,n,i,r,o){return fu(q(t,e,n,i,r,o,!0))}function Ye(t,e,n,i,r){return fu(Re(t,e,n,i,r,!0))}function So(t){return t?t.__v_isVNode===!0:!1}function mi(t,e){return t.type===e.type&&t.key===e.key}const du=({key:t})=>t??null,us=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ye(t)||Pe(t)||Z(t)?{i:Ae,r:t,k:e,f:!!n}:t:null);function q(t,e=null,n=null,i=0,r=null,o=t===$e?0:1,l=!1,u=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&du(e),ref:e&&us(e),scopeId:Hc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ae};return u?(Ao(h,n),o&128&&t.normalize(h)):n&&(h.shapeFlag|=ye(n)?8:16),ki>0&&!l&&Xe&&(h.patchFlag>0||o&6)&&h.patchFlag!==32&&Xe.push(h),h}const Re=Qd;function Qd(t,e=null,n=null,i=0,r=null,o=!1){if((!t||t===bd)&&(t=Lt),So(t)){const u=Gn(t,e,!0);return n&&Ao(u,n),ki>0&&!o&&Xe&&(u.shapeFlag&6?Xe[Xe.indexOf(t)]=u:Xe.push(u)),u.patchFlag=-2,u}if(cp(t)&&(t=t.__vccOpts),e){e=ep(e);let{class:u,style:h}=e;u&&!ye(u)&&(e.class=js(u)),me(h)&&(vo(h)&&!G(h)&&(h=He({},h)),e.style=Yn(h))}const l=ye(t)?1:hu(t)?128:ud(t)?64:me(t)?4:Z(t)?2:0;return q(t,e,n,i,r,l,o,!0)}function ep(t){return t?vo(t)||eu(t)?He({},t):t:null}function Gn(t,e,n=!1,i=!1){const{props:r,ref:o,patchFlag:l,children:u,transition:h}=t,d=e?pu(r||{},e):r,_={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&du(d),ref:e&&e.ref?n&&o?G(o)?o.concat(us(e)):[o,us(e)]:us(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:u,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?l===-1?16:l|16:l,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gn(t.ssContent),ssFallback:t.ssFallback&&Gn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&i&&Io(_,h.clone(_)),_}function bs(t=" ",e=0){return Re(Ks,null,t,e)}function qn(t="",e=!1){return e?(oe(),Ye(Lt,null,t)):Re(Lt,null,t)}function gt(t){return t==null||typeof t=="boolean"?Re(Lt):G(t)?Re($e,null,t.slice()):So(t)?Xt(t):Re(Ks,null,String(t))}function Xt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gn(t)}function Ao(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ao(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!eu(e)?e._ctx=Ae:r===3&&Ae&&(Ae.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:Ae},n=32):(e=String(e),i&64?(n=16,e=[bs(e)]):n=8);t.children=e,t.shapeFlag|=n}function pu(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=js([e.class,i.class]));else if(r==="style")e.style=Yn([e.style,i.style]);else if(Ms(r)){const o=e[r],l=i[r];l&&o!==l&&!(G(o)&&o.includes(l))&&(e[r]=o?[].concat(o,l):l)}else r!==""&&(e[r]=i[r])}return e}function dt(t,e,n,i=null){wt(t,e,7,[n,i])}const tp=Xc();let np=0;function ip(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||tp,o={uid:np++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nu(i,r),emitsOptions:uu(i,r),emit:null,emitted:null,propsDefaults:re,inheritAttrs:i.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Kd.bind(null,o),t.ce&&t.ce(o),o}let Me=null;const sp=()=>Me||Ae;let Ts,Xr;{const t=Fs(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),o=>{r.length>1?r.forEach(l=>l(o)):r[0](o)}};Ts=e("__VUE_INSTANCE_SETTERS__",n=>Me=n),Xr=e("__VUE_SSR_SETTERS__",n=>Di=n)}const Li=t=>{const e=Me;return Ts(t),t.scope.on(),()=>{t.scope.off(),Ts(e)}},Qa=()=>{Me&&Me.scope.off(),Ts(null)};function gu(t){return t.vnode.shapeFlag&4}let Di=!1;function rp(t,e=!1,n=!1){e&&Xr(e);const{props:i,children:r}=t.vnode,o=gu(t);kd(t,i,o,e),Md(t,r,n||e);const l=o?op(t,e):void 0;return e&&Xr(!1),l}function op(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Td);const{setup:i}=n;if(i){xt();const r=t.setupContext=i.length>1?lp(t):null,o=Li(t),l=Mi(i,t,0,[t.props,r]),u=dc(l);if(Mt(),o(),(u||t.sp)&&!Hn(t)&&Bc(t),u){if(l.then(Qa,Qa),e)return l.then(h=>{el(t,h)}).catch(h=>{Vs(h,t,0)});t.asyncDep=l}else el(t,l)}else mu(t)}function el(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=Lc(e)),mu(t)}function mu(t,e,n){const i=t.type;t.render||(t.render=i.render||_t);{const r=Li(t);xt();try{Cd(t)}finally{Mt(),r()}}}const ap={get(t,e){return xe(t,"get",""),t[e]}};function lp(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ap),slots:t.slots,emit:t.emit,expose:e}}function Gs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Lc(Jf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ii)return Ii[n](t)},has(e,n){return n in e||n in Ii}})):t.proxy}function cp(t){return Z(t)&&"__vccOpts"in t}const tn=(t,e)=>nd(t,e,Di),up="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yr;const tl=typeof window<"u"&&window.trustedTypes;if(tl)try{Yr=tl.createPolicy("vue",{createHTML:t=>t})}catch{}const _u=Yr?t=>Yr.createHTML(t):t=>t,hp="http://www.w3.org/2000/svg",fp="http://www.w3.org/1998/Math/MathML",Rt=typeof document<"u"?document:null,nl=Rt&&Rt.createElement("template"),dp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Rt.createElementNS(hp,t):e==="mathml"?Rt.createElementNS(fp,t):n?Rt.createElement(t,{is:n}):Rt.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Rt.createTextNode(t),createComment:t=>Rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,o){const l=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{nl.innerHTML=_u(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const u=nl.content;if(i==="svg"||i==="mathml"){const h=u.firstChild;for(;h.firstChild;)u.appendChild(h.firstChild);u.removeChild(h)}e.insertBefore(u,n)}return[l?l.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pp=Symbol("_vtc");function gp(t,e,n){const i=t[pp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const il=Symbol("_vod"),mp=Symbol("_vsh"),_p=Symbol(""),yp=/(^|;)\s*display\s*:/;function vp(t,e,n){const i=t.style,r=ye(n);let o=!1;if(n&&!r){if(e)if(ye(e))for(const l of e.split(";")){const u=l.slice(0,l.indexOf(":")).trim();n[u]==null&&hs(i,u,"")}else for(const l in e)n[l]==null&&hs(i,l,"");for(const l in n)l==="display"&&(o=!0),hs(i,l,n[l])}else if(r){if(e!==n){const l=i[_p];l&&(n+=";"+l),i.cssText=n,o=yp.test(n)}}else e&&t.removeAttribute("style");il in t&&(t[il]=o?i.display:"",t[mp]&&(i.display="none"))}const sl=/\s*!important$/;function hs(t,e,n){if(G(n))n.forEach(i=>hs(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=wp(t,e);sl.test(n)?t.setProperty(Ht(i),n.replace(sl,""),"important"):t[i]=n}}const rl=["Webkit","Moz","ms"],Er={};function wp(t,e){const n=Er[e];if(n)return n;let i=Nt(e);if(i!=="filter"&&i in t)return Er[e]=i;i=mc(i);for(let r=0;r<rl.length;r++){const o=rl[r]+i;if(o in t)return Er[e]=o}return e}const ol="http://www.w3.org/1999/xlink";function al(t,e,n,i,r,o=Af(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ol,e.slice(6,e.length)):t.setAttributeNS(ol,e,n):n==null||o&&!yc(n)?t.removeAttribute(e):t.setAttribute(e,o?"":$t(n)?String(n):n)}function ll(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?_u(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const u=o==="OPTION"?t.getAttribute("value")||"":t.value,h=n==null?t.type==="checkbox"?"on":"":String(n);(u!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=yc(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(r||e)}function xn(t,e,n,i){t.addEventListener(e,n,i)}function Ip(t,e,n,i){t.removeEventListener(e,n,i)}const cl=Symbol("_vei");function bp(t,e,n,i,r=null){const o=t[cl]||(t[cl]={}),l=o[e];if(i&&l)l.value=i;else{const[u,h]=Tp(e);if(i){const d=o[e]=Sp(i,r);xn(t,u,d,h)}else l&&(Ip(t,u,l,h),o[e]=void 0)}}const ul=/(?:Once|Passive|Capture)$/;function Tp(t){let e;if(ul.test(t)){e={};let i;for(;i=t.match(ul);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ht(t.slice(2)),e]}let Sr=0;const Cp=Promise.resolve(),Ep=()=>Sr||(Cp.then(()=>Sr=0),Sr=Date.now());function Sp(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;wt(Ap(i,n.value),e,5,[i])};return n.value=t,n.attached=Ep(),n}function Ap(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const hl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Rp=(t,e,n,i,r,o)=>{const l=r==="svg";e==="class"?gp(t,i,l):e==="style"?vp(t,n,i):Ms(e)?co(e)||bp(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pp(t,e,i,l))?(ll(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&al(t,e,i,l,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ye(i))?ll(t,Nt(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),al(t,e,i,l))};function Pp(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&hl(e)&&Z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return hl(e)&&ye(n)?!1:e in t}const fl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>ls(e,n):e};function Op(t){t.target.composing=!0}function dl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ar=Symbol("_assign"),kp={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Ar]=fl(r);const o=i||r.props&&r.props.type==="number";xn(t,e?"change":"input",l=>{if(l.target.composing)return;let u=t.value;n&&(u=u.trim()),o&&(u=jr(u)),t[Ar](u)}),n&&xn(t,"change",()=>{t.value=t.value.trim()}),e||(xn(t,"compositionstart",Op),xn(t,"compositionend",dl),xn(t,"change",dl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:o}},l){if(t[Ar]=fl(l),t.composing)return;const u=(o||t.type==="number")&&!/^0\d/.test(t.value)?jr(t.value):t.value,h=e??"";u!==h&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===h)||(t.value=h))}},Dp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Np=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=r=>{if(!("key"in r))return;const o=Ht(r.key);if(e.some(l=>l===o||Dp[l]===o))return t(r)})},xp=He({patchProp:Rp},dp);let pl;function Mp(){return pl||(pl=Ud(xp))}const Lp=(...t)=>{const e=Mp().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Fp(i);if(!r)return;const o=e._component;!Z(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const l=n(r,!1,Up(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},e};function Up(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Fp(t){return ye(t)?document.querySelector(t):t}const bt=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},jp={},$p={xmlns:"http://www.w3.org/2000/svg",width:"23",height:"24",viewBox:"0 0 33 33",fill:"none"};function Hp(t,e){return oe(),Ie("svg",$p,e[0]||(e[0]=[q("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.96875 13.75C9.96875 10.1429 12.8929 7.21875 16.5 7.21875C20.1071 7.21875 23.0313 10.1429 23.0313 13.75C23.0313 17.3571 20.1071 20.2812 16.5 20.2812C12.8929 20.2812 9.96875 17.3571 9.96875 13.75ZM16.5 9.28125C14.032 9.28125 12.0313 11.282 12.0313 13.75C12.0313 16.218 14.032 18.2188 16.5 18.2188C18.968 18.2188 20.9688 16.218 20.9688 13.75C20.9688 11.282 18.968 9.28125 16.5 9.28125Z",fill:"white"},null,-1),q("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.846 12.1782C5.3332 6.26758 10.2724 1.71875 16.203 1.71875H16.797C22.7276 1.71875 27.6668 6.26758 28.154 12.1782C28.4157 15.3532 27.435 18.506 25.4183 20.9723L18.8278 29.0322C17.6247 30.5036 15.3753 30.5036 14.1722 29.0322L7.5817 20.9723C5.56505 18.506 4.58429 15.3532 4.846 12.1782ZM16.203 3.78125C11.3458 3.78125 7.30055 7.50678 6.90153 12.3476C6.68371 14.9901 7.49997 17.6141 9.17838 19.6667L15.7688 27.7267C16.1467 28.1888 16.8533 28.1888 17.2312 27.7267L23.8216 19.6667C25.5 17.6141 26.3163 14.9901 26.0985 12.3476C25.6995 7.50678 21.6542 3.78125 16.797 3.78125H16.203Z",fill:"white"},null,-1)]))}const yu=bt(jp,[["render",Hp]]),Ro=Symbol("city"),Vp="https://api.weatherapi.com/v1",Bp=new Map([[1006,"Указанный город не найден"],["empty_input","Поле не может быть пустым"]]),Wp=["fill"],zp=["fill"],Kp=["fill"],Gp=["fill"],qp=["fill"],Jp=["fill"],Xp=["fill"],Yp=["fill"],Zp=["fill"],vu={__name:"iconSun",props:Ws({color:String,size:Number},{color:"white",size:54}),setup(t){return(e,n)=>(oe(),Ie("svg",{xmlns:"http://www.w3.org/2000/svg",width:"56",height:"55",viewBox:"0 0 56 55",fill:"none",style:Yn({scale:t.size/54})},[q("path",{d:"M28.0049 3.54557C28.945 3.54557 29.7071 4.30134 29.7071 5.23363V7.48438C29.7071 8.41666 28.945 9.17243 28.0049 9.17243C27.0647 9.17243 26.3026 8.41666 26.3026 7.48438V5.23363C26.3026 4.30134 27.0647 3.54557 28.0049 3.54557Z",fill:t.color},null,8,Wp),q("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.9545 27.7411C14.9545 20.5935 20.7973 14.7993 28.0049 14.7993C35.2124 14.7993 41.0552 20.5935 41.0552 27.7411C41.0552 34.8886 35.2124 40.6828 28.0049 40.6828C20.7973 40.6828 14.9545 34.8886 14.9545 27.7411ZM28.0049 18.1754C22.6776 18.1754 18.3589 22.4581 18.3589 27.7411C18.3589 33.024 22.6776 37.3067 28.0049 37.3067C33.3322 37.3067 37.6508 33.024 37.6508 27.7411C37.6508 22.4581 33.3322 18.1754 28.0049 18.1754Z",fill:t.color},null,8,zp),q("path",{d:"M13.1598 10.6323C12.4951 9.97309 11.4173 9.97309 10.7525 10.6323C10.0878 11.2915 10.0878 12.3604 10.7525 13.0196L12.3574 14.6111C13.0222 15.2703 14.0999 15.2703 14.7647 14.6111C15.4295 13.9519 15.4295 12.8831 14.7647 12.2238L13.1598 10.6323Z",fill:t.color},null,8,Kp),q("path",{d:"M52.4034 27.7411C52.4034 28.6734 51.6413 29.4291 50.7012 29.4291H48.4315C47.4914 29.4291 46.7293 28.6734 46.7293 27.7411C46.7293 26.8088 47.4914 26.053 48.4315 26.053H50.7012C51.6413 26.053 52.4034 26.8088 52.4034 27.7411Z",fill:t.color},null,8,Gp),q("path",{d:"M45.2572 13.0196C45.9219 12.3603 45.9219 11.2915 45.2572 10.6323C44.5924 9.97307 43.5146 9.97307 42.8499 10.6323L41.245 12.2238C40.5802 12.883 40.5802 13.9519 41.245 14.6111C41.9098 15.2703 42.9875 15.2703 43.6523 14.6111L45.2572 13.0196Z",fill:t.color},null,8,qp),q("path",{d:"M28.0049 46.3097C28.945 46.3097 29.7071 47.0655 29.7071 47.9978V50.2485C29.7071 51.1808 28.945 51.9366 28.0049 51.9366C27.0647 51.9366 26.3026 51.1808 26.3026 50.2485V47.9978C26.3026 47.0655 27.0647 46.3097 28.0049 46.3097Z",fill:t.color},null,8,Jp),q("path",{d:"M43.6525 40.8711C42.9877 40.2118 41.9099 40.2118 41.2452 40.8711C40.5804 41.5303 40.5804 42.5991 41.2452 43.2583L42.85 44.8498C43.5148 45.5091 44.5926 45.5091 45.2573 44.8498C45.9221 44.1906 45.9221 43.1218 45.2573 42.4626L43.6525 40.8711Z",fill:t.color},null,8,Xp),q("path",{d:"M9.2804 27.7411C9.2804 28.6734 8.51829 29.4291 7.57818 29.4291H5.30855C4.36843 29.4291 3.60632 28.6734 3.60632 27.7411C3.60632 26.8088 4.36843 26.053 5.30855 26.053H7.57818C8.51829 26.053 9.2804 26.8088 9.2804 27.7411Z",fill:t.color},null,8,Yp),q("path",{d:"M14.7645 43.2583C15.4293 42.5991 15.4293 41.5303 14.7645 40.871C14.0998 40.2118 13.022 40.2118 12.3572 40.871L10.7524 42.4626C10.0876 43.1218 10.0876 44.1906 10.7524 44.8498C11.4171 45.5091 12.4949 45.5091 13.1597 44.8498L14.7645 43.2583Z",fill:t.color},null,8,Zp)],4))}},Qp={"clip-path":"url(#clip0_102_40)"},eg=["fill"],tg=["fill"],ng={id:"clip0_102_40"},ig=["fill"],wu={__name:"iconCloud",props:Ws({color:String,size:Number},{color:"white",size:56}),setup(t){return(e,n)=>(oe(),Ie("svg",{xmlns:"http://www.w3.org/2000/svg",width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",style:Yn({scale:t.size/54})},[q("g",Qp,[q("path",{d:"M23.625 27C25.1919 26.9998 26.7433 27.3114 28.1887 27.9166C29.6341 28.5218 30.9446 29.4085 32.044 30.5252C33.1433 31.6418 34.0095 32.966 34.5921 34.4206C35.1747 35.8753 35.4621 37.4313 35.4375 38.9981C35.4335 39.2575 35.4894 39.5144 35.6008 39.7487C35.7123 39.983 35.8762 40.1884 36.0799 40.349C36.2837 40.5097 36.5217 40.6212 36.7755 40.6749C37.0293 40.7285 37.2921 40.723 37.5435 40.6586C38.2918 40.4669 39.0741 40.4486 39.8305 40.6052C40.587 40.7618 41.2977 41.0891 41.9085 41.5621C42.5192 42.0352 43.0139 42.6415 43.3547 43.3347C43.6955 44.028 43.8734 44.79 43.875 45.5625C43.875 46.9052 43.3416 48.1928 42.3922 49.1422C41.4428 50.0916 40.1551 50.625 38.8125 50.625H10.125C9.22756 50.6199 8.34017 50.436 7.51471 50.0839C6.68925 49.7318 5.94229 49.2186 5.31752 48.5744C4.69275 47.9301 4.20271 47.1678 3.87608 46.3319C3.54944 45.4961 3.39276 44.6035 3.4152 43.7063C3.43764 42.8092 3.63875 41.9255 4.00676 41.107C4.37478 40.2886 4.90232 39.5517 5.55851 38.9395C6.21471 38.3273 6.98639 37.8521 7.82842 37.5417C8.67045 37.2313 9.56593 37.0919 10.4625 37.1317C10.8513 37.1518 11.2352 37.0367 11.5489 36.806C11.8626 36.5753 12.0869 36.2433 12.1837 35.8661C12.8384 33.3292 14.3174 31.0817 16.3884 29.4768C18.4594 27.8719 21.0049 27.0007 23.625 27ZM38.7213 37.125C38.3416 33.7032 36.8106 30.512 34.3793 28.0745C31.9479 25.637 28.7606 24.0979 25.3398 23.7095C21.9189 23.3211 18.4677 24.1065 15.5518 25.937C12.6359 27.7674 10.4285 30.5342 9.29134 33.7837C6.68564 33.997 4.26344 35.21 2.53177 37.1687C0.800096 39.1274 -0.1068 41.68 0.000914741 44.2922C0.10863 46.9044 1.2226 49.3736 3.10966 51.1831C4.99671 52.9926 7.51055 54.002 10.125 54H38.8125C41.0502 54 43.1963 53.1111 44.7787 51.5287C46.361 49.9464 47.25 47.8003 47.25 45.5625C47.25 43.3247 46.361 41.1786 44.7787 39.5963C43.1963 38.0139 41.0502 37.125 38.8125 37.125H38.7213Z",fill:t.color},null,8,eg),q("path",{d:"M35.4375 5.0625C35.4375 4.61495 35.2597 4.18572 34.9432 3.86926C34.6268 3.55279 34.1976 3.375 33.75 3.375C33.3025 3.375 32.8732 3.55279 32.5568 3.86926C32.2403 4.18572 32.0625 4.61495 32.0625 5.0625V8.4375C32.0625 8.88505 32.2403 9.31427 32.5568 9.63074C32.8732 9.94721 33.3025 10.125 33.75 10.125C34.1976 10.125 34.6268 9.94721 34.9432 9.63074C35.2597 9.31427 35.4375 8.88505 35.4375 8.4375V5.0625ZM48.0701 11.691C48.2313 11.5353 48.3599 11.3491 48.4483 11.1432C48.5367 10.9374 48.5833 10.7159 48.5852 10.4919C48.5872 10.2678 48.5445 10.0456 48.4596 9.8382C48.3748 9.63082 48.2495 9.4424 48.091 9.28396C47.9326 9.12551 47.7442 9.00021 47.5368 8.91536C47.3294 8.83051 47.1072 8.78782 46.8831 8.78977C46.6591 8.79171 46.4376 8.83826 46.2318 8.9267C46.0259 9.01514 45.8397 9.1437 45.684 9.30487L43.2945 11.691C42.9776 12.0079 42.7996 12.4376 42.7996 12.8857C42.7996 13.3339 42.9776 13.7636 43.2945 14.0805C43.6114 14.3974 44.0411 14.5754 44.4893 14.5754C44.9374 14.5754 45.3671 14.3974 45.684 14.0805L48.0701 11.691ZM21.816 9.30487C21.4977 8.99748 21.0715 8.82739 20.629 8.83124C20.1866 8.83508 19.7633 9.01255 19.4504 9.32543C19.1376 9.63831 18.9601 10.0616 18.9562 10.504C18.9524 10.9465 19.1225 11.3727 19.4299 11.691L21.816 14.0805C21.9729 14.2374 22.1592 14.3619 22.3642 14.4468C22.5692 14.5317 22.7889 14.5754 23.0108 14.5754C23.2326 14.5754 23.4524 14.5317 23.6573 14.4468C23.8623 14.3619 24.0486 14.2374 24.2055 14.0805C24.3624 13.9236 24.4869 13.7373 24.5718 13.5323C24.6567 13.3273 24.7004 13.1076 24.7004 12.8857C24.7004 12.6639 24.6567 12.4442 24.5718 12.2392C24.4869 12.0342 24.3624 11.8479 24.2055 11.691L21.816 9.30487ZM27.6683 20.6921C28.0877 19.8229 28.6887 19.0537 29.4307 18.4364C30.1728 17.8192 31.0385 17.3682 31.9696 17.114C32.9007 16.8598 33.8755 16.8082 34.8282 16.9627C35.781 17.1173 36.6895 17.4743 37.4925 18.0098C38.2955 18.5453 38.9743 19.2468 39.4832 20.067C39.992 20.8871 40.3191 21.8069 40.4423 22.7642C40.5655 23.7214 40.4819 24.694 40.1973 25.6163C39.9126 26.5385 39.4335 27.389 38.7923 28.1104C39.4639 29.0588 40.0478 30.0746 40.5338 31.1411C41.6775 30.1077 42.5702 28.8268 43.1438 27.396C43.7174 25.9652 43.9567 24.4223 43.8435 22.885C43.7303 21.3476 43.2676 19.8565 42.4906 18.5251C41.7137 17.1937 40.643 16.0574 39.3602 15.2026C38.0774 14.3479 36.6164 13.7973 35.0885 13.5929C33.5606 13.3885 32.0062 13.5356 30.5439 14.0231C29.0815 14.5106 27.7497 15.3256 26.6501 16.4058C25.5505 17.4861 24.7121 18.8032 24.1988 20.2568C25.3868 20.2939 26.5478 20.4424 27.6683 20.6921ZM42.8018 34.4419C44.8268 35.1675 46.5986 36.4331 47.9385 38.0599C48.1222 37.9111 48.2727 37.7253 48.38 37.5147C48.4874 37.304 48.5493 37.0732 48.5617 36.837C48.5741 36.6009 48.5367 36.3649 48.4521 36.1441C48.3674 35.9234 48.2373 35.7229 48.0701 35.5556L45.684 33.1695C45.4434 32.9275 45.1352 32.7641 44.7998 32.7009C44.4645 32.6377 44.1179 32.6776 43.8057 32.8154C43.4936 32.9532 43.2305 33.1824 43.0513 33.4728C42.872 33.7632 42.785 34.1011 42.8018 34.4419ZM48.9375 21.9375C48.49 21.9375 48.0607 22.1153 47.7443 22.4318C47.4278 22.7482 47.25 23.1774 47.25 23.625C47.25 24.0726 47.4278 24.5018 47.7443 24.8182C48.0607 25.1347 48.49 25.3125 48.9375 25.3125H52.3125C52.7601 25.3125 53.1893 25.1347 53.5057 24.8182C53.8222 24.5018 54 24.0726 54 23.625C54 23.1774 53.8222 22.7482 53.5057 22.4318C53.1893 22.1153 52.7601 21.9375 52.3125 21.9375H48.9375Z",fill:t.color},null,8,tg)]),q("defs",null,[q("clipPath",ng,[q("rect",{width:"54",height:"54",fill:t.color},null,8,ig)])])],4))}},sg={"clip-path":"url(#clip0_102_44)"},rg=["fill"],og={id:"clip0_102_44"},ag=["fill"],Iu={__name:"iconRain",props:Ws({color:String,size:Number},{color:"white",size:54}),setup(t){return(e,n)=>(oe(),Ie("svg",{xmlns:"http://www.w3.org/2000/svg",width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",style:Yn({scale:t.size/54})},[q("g",sg,[q("path",{d:"M14.0333 40.5844C14.2437 40.6545 14.4382 40.7654 14.6056 40.9108C14.7731 41.0562 14.9103 41.2331 15.0093 41.4315C15.1084 41.6299 15.1674 41.8459 15.1829 42.0671C15.1984 42.2883 15.1702 42.5105 15.0998 42.7208L13.4123 47.7833C13.2587 48.1918 12.9527 48.5249 12.5587 48.7126C12.1647 48.9004 11.7132 48.9282 11.2992 48.7902C10.8851 48.6521 10.5406 48.359 10.338 47.9724C10.1355 47.5858 10.0906 47.1358 10.2128 46.7167L11.9003 41.6542C12.0413 41.2295 12.3452 40.8782 12.7452 40.6776C13.1452 40.477 13.6086 40.4434 14.0333 40.5844ZM24.1583 40.5844C24.3687 40.6545 24.5632 40.7654 24.7306 40.9108C24.8981 41.0562 25.0353 41.2331 25.1343 41.4315C25.2334 41.6299 25.2924 41.8459 25.3079 42.0671C25.3234 42.2883 25.2952 42.5105 25.2248 42.7208L21.8498 52.8458C21.6962 53.2543 21.3902 53.5874 20.9962 53.7751C20.6022 53.9629 20.1507 53.9907 19.7367 53.8527C19.3226 53.7146 18.9781 53.4215 18.7755 53.0349C18.573 52.6483 18.5281 52.1983 18.6503 51.7792L22.0253 41.6542C22.1663 41.2295 22.4702 40.8782 22.8702 40.6776C23.2702 40.477 23.7336 40.4434 24.1583 40.5844ZM34.2833 40.5844C34.4937 40.6545 34.6882 40.7654 34.8556 40.9108C35.0231 41.0562 35.1603 41.2331 35.2593 41.4315C35.3584 41.6299 35.4174 41.8459 35.4329 42.0671C35.4484 42.2883 35.4202 42.5105 35.3498 42.7208L33.6623 47.7833C33.5087 48.1918 33.2027 48.5249 32.8087 48.7126C32.4147 48.9004 31.9632 48.9282 31.5492 48.7902C31.1351 48.6521 30.7906 48.359 30.588 47.9724C30.3855 47.5858 30.3406 47.1358 30.4628 46.7167L32.1503 41.6542C32.2913 41.2295 32.5952 40.8782 32.9952 40.6776C33.3952 40.477 33.8586 40.4434 34.2833 40.5844ZM44.4083 40.5844C44.6187 40.6545 44.8132 40.7654 44.9806 40.9108C45.1481 41.0562 45.2853 41.2331 45.3843 41.4315C45.4834 41.6299 45.5424 41.8459 45.5579 42.0671C45.5734 42.2883 45.5452 42.5105 45.4748 42.7208L42.0998 52.8458C42.0362 53.0637 41.9294 53.2665 41.7856 53.4422C41.6418 53.6178 41.464 53.7627 41.263 53.868C41.0619 53.9734 40.8417 54.0371 40.6154 54.0553C40.3891 54.0735 40.1615 54.0459 39.9462 53.9742C39.7308 53.9024 39.5322 53.7879 39.3621 53.6375C39.192 53.4872 39.054 53.3041 38.9564 53.0991C38.8588 52.8942 38.8035 52.6717 38.7938 52.4449C38.7842 52.2181 38.8204 51.9917 38.9003 51.7792L42.2753 41.6542C42.4163 41.2295 42.7202 40.8782 43.1202 40.6776C43.5202 40.477 43.9836 40.4434 44.4083 40.5844ZM45.2419 16.9661C44.541 13.433 42.7283 10.2168 40.0687 7.78774C37.4091 5.35865 34.0422 3.84408 30.4602 3.46548C26.8783 3.08688 23.2691 3.86411 20.1605 5.68353C17.0518 7.50295 14.6068 10.2691 13.1828 13.5776C11.5859 13.3937 9.9682 13.5376 8.42883 14.0005C6.88946 14.4635 5.46078 15.2358 4.23026 16.2701C2.99974 17.3044 1.99328 18.579 1.27249 20.0159C0.551706 21.4527 0.131766 23.0215 0.0383826 24.6263C-0.0550009 26.2311 0.180137 27.838 0.7294 29.3487C1.27866 30.8595 2.13049 32.2422 3.23274 33.4123C4.33498 34.5823 5.66444 35.5151 7.13972 36.1535C8.615 36.7919 10.2051 37.1225 11.8125 37.125H43.875C46.4438 37.1279 48.9176 36.1544 50.7954 34.4016C52.6732 32.6488 53.8146 30.2478 53.9884 27.685C54.1622 25.1221 53.3554 22.589 51.7313 20.5988C50.1073 18.6085 47.7875 17.31 45.2419 16.9661ZM28.6875 6.75C32.0084 6.74931 35.213 7.97266 37.6886 10.1861C40.1642 12.3996 41.7371 15.4479 42.1065 18.7481C42.1524 19.1628 42.3503 19.5457 42.6619 19.8231C42.9735 20.1004 43.3769 20.2525 43.794 20.25H43.875C45.6653 20.25 47.3821 20.9612 48.648 22.227C49.9139 23.4929 50.625 25.2098 50.625 27C50.625 28.7902 49.9139 30.5071 48.648 31.773C47.3821 33.0388 45.6653 33.75 43.875 33.75H11.8125C10.618 33.7494 9.43728 33.4952 8.34837 33.0042C7.25945 32.5132 6.28721 31.7965 5.49594 30.9017C4.70468 30.0068 4.11244 28.9542 3.75839 27.8134C3.40434 26.6725 3.29655 25.4695 3.44217 24.284C3.58778 23.0984 3.98347 21.9572 4.60306 20.936C5.22265 19.9147 6.05201 19.0367 7.0363 18.3599C8.02058 17.6831 9.13735 17.2231 10.3127 17.0101C11.4881 16.7972 12.6953 16.8363 13.8544 17.1248C14.268 17.2279 14.7052 17.1707 15.0783 16.9648C15.4515 16.7588 15.7328 16.4193 15.8659 16.0144C16.7579 13.3183 18.4769 10.972 20.7786 9.30886C23.0804 7.6457 25.8478 6.75033 28.6875 6.75Z",fill:t.color},null,8,rg)]),q("defs",null,[q("clipPath",og,[q("rect",{width:"54",height:"54",fill:t.color},null,8,ag)])])],4))}},lg={class:"left"},cg={class:"left__top-menu"},ug={class:"left__title-day"},hg={class:"left__date"},fg={class:"left__city"},dg={class:"left__bootom-panel"},pg={class:"left__icon"},gg={class:"left__temp"},mg={class:"left__textInfo"},_g={__name:"LeftPanel",props:{dayData:Object},setup(t){const e=Bn(Ro),n=tn(()=>new Date(t.dayData.date).toLocaleDateString("ru-RU",{weekday:"long"})),i=tn(()=>new Date(t.dayData.date).toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"})),r=tn(()=>t.dayData.day.condition.code);return(o,l)=>(oe(),Ie("div",lg,[q("div",cg,[q("span",ug,nt(n.value),1),q("span",hg,nt(i.value),1),q("span",fg,[Re(yu),bs(nt(yn(e)),1)])]),q("div",dg,[q("div",pg,[r.value<=1003?(oe(),Ye(vu,{key:0,size:"95"})):r.value>1003&&r.value<1063?(oe(),Ye(wu,{key:1,size:"95"})):r.value>=1063?(oe(),Ye(Iu,{key:2,size:"95"})):qn("",!0)]),q("span",gg,nt(t.dayData.day.avgtemp_c)+" °C",1),q("span",mg,nt(t.dayData.day.condition.text),1)])]))}},yg=bt(_g,[["__scopeId","data-v-ca425b1f"]]),vg={class:"button"},wg={__name:"Button",setup(t){return bo(()=>{console.log("DELETE")}),(e,n)=>(oe(),Ie("button",vg,[q("div",null,[Wa(e.$slots,"icon",{},void 0)]),Wa(e.$slots,"default",{},void 0)]))}},gl=bt(wg,[["__scopeId","data-v-4ed9cc0d"]]),Ig={__name:"Input",props:{modelValue:{type:String,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(t){const e=zd(t,"modelValue");return(n,i)=>(oe(),Ie("div",null,[Vc(q("input",{"onUpdate:modelValue":i[0]||(i[0]=r=>e.value=r),class:"input",type:"text",placeholder:"Введите город"},null,512),[[kp,e.value]])]))}},bg=bt(Ig,[["__scopeId","data-v-2534be0d"]]),Tg={class:"city-select"},Cg={key:0},Eg={key:1,class:"zxc"},Sg={__name:"CitySelect",setup(t){const e=Mn(!1),n=Bn(Ro),i=Mn(n.value),r=()=>{e.value=!1,n.value=i.value},o=()=>{e.value=!0},l={mounted:u=>u.focus()};return(u,h)=>(oe(),Ie("div",Tg,[e.value?(oe(),Ie("div",Eg,[Vc(Re(bg,{modelValue:i.value,"onUpdate:modelValue":h[0]||(h[0]=d=>i.value=d),onKeyup:Np(r,["enter"])},null,8,["modelValue"]),[[l]]),Re(gl,{onClick:r},{default:Wr(()=>h[2]||(h[2]=[bs(" Сохранить ")])),_:1,__:[2]})])):(oe(),Ie("div",Cg,[Re(gl,{onClick:o},{default:Wr(()=>[Re(yu),h[1]||(h[1]=bs(" Изменить город "))]),_:1,__:[1]})]))]))}},Ag=bt(Sg,[["__scopeId","data-v-e27e55d1"]]),Rg={class:"day__icon"},Pg={class:"day__item"},Og={class:"day__date"},kg={class:"day__number"},Dg={class:"day__temp"},Ng={__name:"DayCard",props:{weatherCode:Number,temp:Number,date:Date,nums:String,isActive:Boolean},setup(t){const e=tn(()=>t.isActive?"black":"white"),n=tn(()=>t.temp>0?`+${Math.round(t.temp)}`:Math.round(t.temp));return(i,r)=>(oe(),Ie("button",{class:js(["day__wrapper",{active:t.isActive}])},[q("div",Rg,[t.weatherCode<=1003?(oe(),Ye(vu,{key:0,color:e.value},null,8,["color"])):t.weatherCode>1003&&t.weatherCode<1063?(oe(),Ye(wu,{key:1,color:e.value},null,8,["color"])):t.weatherCode>=1063?(oe(),Ye(Iu,{key:2,color:e.value},null,8,["color"])):qn("",!0)]),q("div",Pg,[q("span",Og,nt(t.date.toLocaleDateString("ru-RU",{weekday:"short"})),1),q("span",kg,nt(t.nums),1),q("span",Dg,nt(n.value)+" °C",1)])],2))}},xg=bt(Ng,[["__scopeId","data-v-923837a0"]]),Mg={key:0,class:"error"},Lg={__name:"Error",props:{error:String},setup(t){return(e,n)=>t.error?(oe(),Ie("div",Mg,nt(t.error),1)):qn("",!0)}},Ug=bt(Lg,[["__scopeId","data-v-ffd4bfff"]]),Fg={class:"stat"},jg={class:"stat__name"},$g={class:"stat__value"},Hg={__name:"Stat",props:Ws({label:String,stat:String},{label:"ноу"}),setup(t){return(e,n)=>(oe(),Ie("div",Fg,[q("span",jg,nt(t.label),1),q("span",$g,nt(t.stat),1)]))}},Vg=bt(Hg,[["__scopeId","data-v-4a69fcba"]]),Bg={key:1,class:"wrapper_days"},Wg={class:"stat__items"},zg={class:"days"},Kg={__name:"rightPanel",props:{error:Object,data:Object,activeIndex:Number},emits:"select-index",setup(t,{emit:e}){const n=e,i=tn(()=>{var l,u;return Bp.get((u=(l=t.error)==null?void 0:l.error)==null?void 0:u.code)}),r=tn(()=>[{label:"Влажность",stat:t.data.forecast.forecastday[t.activeIndex].day.avghumidity+"%"},{label:"Вероятность дождя",stat:t.data.forecast.forecastday[t.activeIndex].day.daily_chance_of_rain+"%"},{label:"ВЕТЕР",stat:t.data.forecast.forecastday[t.activeIndex].day.maxwind_kph+" км/ч"}]),o=l=>` ${new Date(l).getDate()}`;return(l,u)=>(oe(),Ie($e,null,[t.error?(oe(),Ye(Ug,{key:0,error:i.value},null,8,["error"])):qn("",!0),t.data?(oe(),Ie("div",Bg,[q("div",Wg,[(oe(!0),Ie($e,null,Ba(r.value,h=>(oe(),Ye(Vg,pu({class:"stat"},{ref_for:!0},h,{key:h.label}),null,16))),128))]),q("div",zg,[(oe(!0),Ie($e,null,Ba(t.data.forecast.forecastday,(h,d)=>(oe(),Ye(xg,{key:h.date,weatherCode:h.day.condition.code,date:new Date(h.date),temp:h.day.avgtemp_c,nums:o(h.date),isActive:t.activeIndex==d,onClick:()=>n("select-index",d)},null,8,["weatherCode","date","temp","nums","isActive","onClick"]))),128))])])):qn("",!0),Re(Ag)],64))}},Gg=bt(Kg,[["__scopeId","data-v-c73dbdc1"]]),qg=()=>{};var ml={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Jg=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],l=t[n++],u=t[n++],h=((r&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],l=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|l&63)}}return e.join("")},Tu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const o=t[r],l=r+1<t.length,u=l?t[r+1]:0,h=r+2<t.length,d=h?t[r+2]:0,_=o>>2,E=(o&3)<<4|u>>4;let S=(u&15)<<2|d>>6,P=d&63;h||(P=64,l||(S=64)),i.push(n[_],n[E],n[S],n[P])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],u=r<t.length?n[t.charAt(r)]:0;++r;const d=r<t.length?n[t.charAt(r)]:64;++r;const E=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||u==null||d==null||E==null)throw new Xg;const S=o<<2|u>>4;if(i.push(S),d!==64){const P=u<<4&240|d>>2;if(i.push(P),E!==64){const U=d<<6&192|E;i.push(U)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yg=function(t){const e=bu(t);return Tu.encodeByteArray(e,!0)},Cs=function(t){return Yg(t).replace(/\./g,"")},Cu=function(t){try{return Tu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=()=>Zg().__FIREBASE_DEFAULTS__,em=()=>{if(typeof process>"u"||typeof ml>"u")return;const t=ml.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cu(t[1]);return e&&JSON.parse(e)},Po=()=>{try{return qg()||Qg()||em()||tm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Eu=t=>{var e,n;return(n=(e=Po())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nm=t=>{const e=Eu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Su=()=>{var t;return(t=Po())===null||t===void 0?void 0:t.config},Au=t=>{var e;return(e=Po())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){return t.endsWith(".cloudworkstations.dev")}async function Ru(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Cs(JSON.stringify(n)),Cs(JSON.stringify(l)),""].join(".")}const Ti={};function rm(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ti))Ti[e]?t.emulator.push(e):t.prod.push(e);return t}function om(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let _l=!1;function Pu(t,e){if(typeof window>"u"||typeof document>"u"||!Ui(window.location.host)||Ti[t]===e||Ti[t]||_l)return;Ti[t]=e;function n(S){return`__firebase__banner__${S}`}const i="__firebase__banner",o=rm().prod.length>0;function l(){const S=document.getElementById(i);S&&S.remove()}function u(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function h(S,P){S.setAttribute("width","24"),S.setAttribute("id",P),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function d(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{_l=!0,l()},S}function _(S,P){S.setAttribute("id",P),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function E(){const S=om(i),P=n("text"),U=document.getElementById(P)||document.createElement("span"),$=n("learnmore"),J=document.getElementById($)||document.createElement("a"),ee=n("preprendIcon"),Q=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const X=S.element;u(X),_(J,$);const H=d();h(Q,ee),X.append(Q,U,J,H),document.body.appendChild(X)}o?(U.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function am(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function lm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ou(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function um(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ku(){try{return typeof indexedDB=="object"}catch{return!1}}function Du(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function hm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="FirebaseError";class ht extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=fm,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,En.prototype.create)}}class En{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],l=o?dm(o,i):"Error",u=`${this.serviceName}: ${l} (${r}).`;return new ht(r,u,i)}}function dm(t,e){return t.replace(pm,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const pm=/\{\$([^}]+)}/g;function gm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function on(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const o=t[r],l=e[r];if(yl(o)&&yl(l)){if(!on(o,l))return!1}else if(o!==l)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function yl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function mm(t,e){const n=new _m(t,e);return n.subscribe.bind(n)}class _m{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");ym(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Rr),r.error===void 0&&(r.error=Rr),r.complete===void 0&&(r.complete=Rr);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ym(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rr(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=1e3,wm=2,Im=4*60*60*1e3,bm=.5;function vl(t,e=vm,n=wm){const i=e*Math.pow(n,t),r=Math.round(bm*i*(Math.random()-.5)*2);return Math.min(Im,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t){return t&&t._delegate?t._delegate:t}class ut{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new im;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Em(e))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=_n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_n){return this.instances.has(e)}getOptions(e=_n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);i===u&&l.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const l=this.instances.get(r);return l&&e(l,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Cm(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=_n){return this.component?this.component.multipleInstances?e:_n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cm(t){return t===_n?void 0:t}function Em(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Am={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Rm=ce.INFO,Pm={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Om=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Pm[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qs{constructor(e){this.name=e,this._logLevel=Rm,this._logHandler=Om,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Am[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const km=(t,e)=>e.some(n=>t instanceof n);let wl,Il;function Dm(){return wl||(wl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nm(){return Il||(Il=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nu=new WeakMap,Zr=new WeakMap,xu=new WeakMap,Pr=new WeakMap,Oo=new WeakMap;function xm(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",l)},o=()=>{n(nn(t.result)),r()},l=()=>{i(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&Nu.set(n,t)}).catch(()=>{}),Oo.set(e,t),e}function Mm(t){if(Zr.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",l),t.removeEventListener("abort",l)},o=()=>{n(),r()},l=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",l),t.addEventListener("abort",l)});Zr.set(t,e)}let Qr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lm(t){Qr=t(Qr)}function Um(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Or(this),e,...n);return xu.set(i,e.sort?e.sort():[e]),nn(i)}:Nm().includes(t)?function(...e){return t.apply(Or(this),e),nn(Nu.get(this))}:function(...e){return nn(t.apply(Or(this),e))}}function Fm(t){return typeof t=="function"?Um(t):(t instanceof IDBTransaction&&Mm(t),km(t,Dm())?new Proxy(t,Qr):t)}function nn(t){if(t instanceof IDBRequest)return xm(t);if(Pr.has(t))return Pr.get(t);const e=Fm(t);return e!==t&&(Pr.set(t,e),Oo.set(e,t)),e}const Or=t=>Oo.get(t);function Mu(t,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const l=indexedDB.open(t,e),u=nn(l);return i&&l.addEventListener("upgradeneeded",h=>{i(nn(l.result),h.oldVersion,h.newVersion,nn(l.transaction),h)}),n&&l.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),r&&h.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const jm=["get","getKey","getAll","getAllKeys","count"],$m=["put","add","delete","clear"],kr=new Map;function bl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kr.get(e))return kr.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=$m.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||jm.includes(n)))return;const o=async function(l,...u){const h=this.transaction(l,r?"readwrite":"readonly");let d=h.store;return i&&(d=d.index(u.shift())),(await Promise.all([d[n](...u),r&&h.done]))[0]};return kr.set(e,o),o}Lm(t=>({...t,get:(e,n,i)=>bl(e,n)||t.get(e,n,i),has:(e,n)=>!!bl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vm(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Vm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eo="@firebase/app",Tl="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new qs("@firebase/app"),Bm="@firebase/app-compat",Wm="@firebase/analytics-compat",zm="@firebase/analytics",Km="@firebase/app-check-compat",Gm="@firebase/app-check",qm="@firebase/auth",Jm="@firebase/auth-compat",Xm="@firebase/database",Ym="@firebase/data-connect",Zm="@firebase/database-compat",Qm="@firebase/functions",e1="@firebase/functions-compat",t1="@firebase/installations",n1="@firebase/installations-compat",i1="@firebase/messaging",s1="@firebase/messaging-compat",r1="@firebase/performance",o1="@firebase/performance-compat",a1="@firebase/remote-config",l1="@firebase/remote-config-compat",c1="@firebase/storage",u1="@firebase/storage-compat",h1="@firebase/firestore",f1="@firebase/ai",d1="@firebase/firestore-compat",p1="firebase",g1="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="[DEFAULT]",m1={[eo]:"fire-core",[Bm]:"fire-core-compat",[zm]:"fire-analytics",[Wm]:"fire-analytics-compat",[Gm]:"fire-app-check",[Km]:"fire-app-check-compat",[qm]:"fire-auth",[Jm]:"fire-auth-compat",[Xm]:"fire-rtdb",[Ym]:"fire-data-connect",[Zm]:"fire-rtdb-compat",[Qm]:"fire-fn",[e1]:"fire-fn-compat",[t1]:"fire-iid",[n1]:"fire-iid-compat",[i1]:"fire-fcm",[s1]:"fire-fcm-compat",[r1]:"fire-perf",[o1]:"fire-perf-compat",[a1]:"fire-rc",[l1]:"fire-rc-compat",[c1]:"fire-gcs",[u1]:"fire-gcs-compat",[h1]:"fire-fst",[d1]:"fire-fst-compat",[f1]:"fire-vertex","fire-js":"fire-js",[p1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new Map,_1=new Map,no=new Map;function Cl(t,e){try{t.container.addComponent(e)}catch(n){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function It(t){const e=t.name;if(no.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;no.set(e,t);for(const n of Es.values())Cl(n,t);for(const n of _1.values())Cl(n,t);return!0}function Sn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sn=new En("app","Firebase",y1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=g1;function Lu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:to,automaticDataCollectionEnabled:!0},e),r=i.name;if(typeof r!="string"||!r)throw sn.create("bad-app-name",{appName:String(r)});if(n||(n=Su()),!n)throw sn.create("no-options");const o=Es.get(r);if(o){if(on(n,o.options)&&on(i,o.config))return o;throw sn.create("duplicate-app",{appName:r})}const l=new Sm(r);for(const h of no.values())l.addComponent(h);const u=new v1(n,i,l);return Es.set(r,u),u}function ko(t=to){const e=Es.get(t);if(!e&&t===to&&Su())return Lu();if(!e)throw sn.create("no-app",{appName:t});return e}function st(t,e,n){var i;let r=(i=m1[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const u=[`Unable to register library "${r}" with version "${e}":`];o&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(u.join(" "));return}It(new ut(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1="firebase-heartbeat-database",I1=1,Ni="firebase-heartbeat-store";let Dr=null;function Uu(){return Dr||(Dr=Mu(w1,I1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ni)}catch(n){console.warn(n)}}}}).catch(t=>{throw sn.create("idb-open",{originalErrorMessage:t.message})})),Dr}async function b1(t){try{const n=(await Uu()).transaction(Ni),i=await n.objectStore(Ni).get(Fu(t));return await n.done,i}catch(e){if(e instanceof ht)Ut.warn(e.message);else{const n=sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}async function El(t,e){try{const i=(await Uu()).transaction(Ni,"readwrite");await i.objectStore(Ni).put(e,Fu(t)),await i.done}catch(n){if(n instanceof ht)Ut.warn(n.message);else{const i=sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(i.message)}}}function Fu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=1024,C1=30;class E1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new A1(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Sl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>C1){const l=R1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Ut.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sl(),{heartbeatsToSend:i,unsentEntries:r}=S1(this._heartbeatsCache.heartbeats),o=Cs(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Ut.warn(n),""}}}function Sl(){return new Date().toISOString().substring(0,10)}function S1(t,e=T1){const n=[];let i=t.slice();for(const r of t){const o=n.find(l=>l.agent===r.agent);if(o){if(o.dates.push(r.date),Al(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Al(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class A1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ku()?Du().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await b1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return El(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return El(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Al(t){return Cs(JSON.stringify({version:2,heartbeats:t})).length}function R1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t){It(new ut("platform-logger",e=>new Hm(e),"PRIVATE")),It(new ut("heartbeat",e=>new E1(e),"PRIVATE")),st(eo,Tl,t),st(eo,Tl,"esm2017"),st("fire-js","")}P1("");var O1="firebase",k1="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st(O1,k1,"app");const ju="@firebase/installations",Do="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=1e4,Hu=`w:${Do}`,Vu="FIS_v2",D1="https://firebaseinstallations.googleapis.com/v1",N1=60*60*1e3,x1="installations",M1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},bn=new En(x1,M1,L1);function Bu(t){return t instanceof ht&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu({projectId:t}){return`${D1}/projects/${t}/installations`}function zu(t){return{token:t.token,requestStatus:2,expiresIn:F1(t.expiresIn),creationTime:Date.now()}}async function Ku(t,e){const i=(await e.json()).error;return bn.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Gu({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function U1(t,{refreshToken:e}){const n=Gu(t);return n.append("Authorization",j1(e)),n}async function qu(t){const e=await t();return e.status>=500&&e.status<600?t():e}function F1(t){return Number(t.replace("s","000"))}function j1(t){return`${Vu} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Wu(t),r=Gu(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const l={fid:n,authVersion:Vu,appId:t.appId,sdkVersion:Hu},u={method:"POST",headers:r,body:JSON.stringify(l)},h=await qu(()=>fetch(i,u));if(h.ok){const d=await h.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:zu(d.authToken)}}else throw await Ku("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1=/^[cdef][\w-]{21}$/,io="";function B1(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=W1(t);return V1.test(n)?n:io}catch{return io}}function W1(t){return H1(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=new Map;function Yu(t,e){const n=Js(t);Zu(n,e),z1(n,e)}function Zu(t,e){const n=Xu.get(t);if(n)for(const i of n)i(e)}function z1(t,e){const n=K1();n&&n.postMessage({key:t,fid:e}),G1()}let vn=null;function K1(){return!vn&&"BroadcastChannel"in self&&(vn=new BroadcastChannel("[Firebase] FID Change"),vn.onmessage=t=>{Zu(t.data.key,t.data.fid)}),vn}function G1(){Xu.size===0&&vn&&(vn.close(),vn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="firebase-installations-database",J1=1,Tn="firebase-installations-store";let Nr=null;function No(){return Nr||(Nr=Mu(q1,J1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Tn)}}})),Nr}async function Ss(t,e){const n=Js(t),r=(await No()).transaction(Tn,"readwrite"),o=r.objectStore(Tn),l=await o.get(n);return await o.put(e,n),await r.done,(!l||l.fid!==e.fid)&&Yu(t,e.fid),e}async function Qu(t){const e=Js(t),i=(await No()).transaction(Tn,"readwrite");await i.objectStore(Tn).delete(e),await i.done}async function Xs(t,e){const n=Js(t),r=(await No()).transaction(Tn,"readwrite"),o=r.objectStore(Tn),l=await o.get(n),u=e(l);return u===void 0?await o.delete(n):await o.put(u,n),await r.done,u&&(!l||l.fid!==u.fid)&&Yu(t,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t){let e;const n=await Xs(t.appConfig,i=>{const r=X1(i),o=Y1(t,r);return e=o.registrationPromise,o.installationEntry});return n.fid===io?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function X1(t){const e=t||{fid:B1(),registrationStatus:0};return eh(e)}function Y1(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(bn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Z1(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Q1(t)}:{installationEntry:e}}async function Z1(t,e){try{const n=await $1(t,e);return Ss(t.appConfig,n)}catch(n){throw Bu(n)&&n.customData.serverCode===409?await Qu(t.appConfig):await Ss(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Q1(t){let e=await Rl(t.appConfig);for(;e.registrationStatus===1;)await Ju(100),e=await Rl(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await xo(t);return i||n}return e}function Rl(t){return Xs(t,e=>{if(!e)throw bn.create("installation-not-found");return eh(e)})}function eh(t){return e0(t)?{fid:t.fid,registrationStatus:0}:t}function e0(t){return t.registrationStatus===1&&t.registrationTime+$u<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0({appConfig:t,heartbeatServiceProvider:e},n){const i=n0(t,n),r=U1(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const l={installation:{sdkVersion:Hu,appId:t.appId}},u={method:"POST",headers:r,body:JSON.stringify(l)},h=await qu(()=>fetch(i,u));if(h.ok){const d=await h.json();return zu(d)}else throw await Ku("Generate Auth Token",h)}function n0(t,{fid:e}){return`${Wu(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t,e=!1){let n;const i=await Xs(t.appConfig,o=>{if(!th(o))throw bn.create("not-registered");const l=o.authToken;if(!e&&r0(l))return o;if(l.requestStatus===1)return n=i0(t,e),o;{if(!navigator.onLine)throw bn.create("app-offline");const u=a0(o);return n=s0(t,u),u}});return n?await n:i.authToken}async function i0(t,e){let n=await Pl(t.appConfig);for(;n.authToken.requestStatus===1;)await Ju(100),n=await Pl(t.appConfig);const i=n.authToken;return i.requestStatus===0?Mo(t,e):i}function Pl(t){return Xs(t,e=>{if(!th(e))throw bn.create("not-registered");const n=e.authToken;return l0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function s0(t,e){try{const n=await t0(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Ss(t.appConfig,i),n}catch(n){if(Bu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Qu(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ss(t.appConfig,i)}throw n}}function th(t){return t!==void 0&&t.registrationStatus===2}function r0(t){return t.requestStatus===2&&!o0(t)}function o0(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+N1}function a0(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function l0(t){return t.requestStatus===1&&t.requestTime+$u<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c0(t){const e=t,{installationEntry:n,registrationPromise:i}=await xo(e);return i?i.catch(console.error):Mo(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(t,e=!1){const n=t;return await h0(n),(await Mo(n,e)).token}async function h0(t){const{registrationPromise:e}=await xo(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t){if(!t||!t.options)throw xr("App Configuration");if(!t.name)throw xr("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw xr(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function xr(t){return bn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="installations",d0="installations-internal",p0=t=>{const e=t.getProvider("app").getImmediate(),n=f0(e),i=Sn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},g0=t=>{const e=t.getProvider("app").getImmediate(),n=Sn(e,nh).getImmediate();return{getId:()=>c0(n),getToken:r=>u0(n,r)}};function m0(){It(new ut(nh,p0,"PUBLIC")),It(new ut(d0,g0,"PRIVATE"))}m0();st(ju,Do);st(ju,Do,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="analytics",_0="firebase_id",y0="origin",v0=60*1e3,w0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Lo="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new qs("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ze=new En("analytics","Analytics",I0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(t){if(!t.startsWith(Lo)){const e=Ze.create("invalid-gtag-resource",{gtagURL:t});return Ge.warn(e.message),""}return t}function ih(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function T0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function C0(t,e){const n=T0("firebase-js-sdk-policy",{createScriptURL:b0}),i=document.createElement("script"),r=`${Lo}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function E0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function S0(t,e,n,i,r,o){const l=i[r];try{if(l)await e[l];else{const h=(await ih(n)).find(d=>d.measurementId===r);h&&await e[h.appId]}}catch(u){Ge.error(u)}t("config",r,o)}async function A0(t,e,n,i,r){try{let o=[];if(r&&r.send_to){let l=r.send_to;Array.isArray(l)||(l=[l]);const u=await ih(n);for(const h of l){const d=u.find(E=>E.measurementId===h),_=d&&e[d.appId];if(_)o.push(_);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",i,r||{})}catch(o){Ge.error(o)}}function R0(t,e,n,i){async function r(o,...l){try{if(o==="event"){const[u,h]=l;await A0(t,e,n,u,h)}else if(o==="config"){const[u,h]=l;await S0(t,e,n,i,u,h)}else if(o==="consent"){const[u,h]=l;t("consent",u,h)}else if(o==="get"){const[u,h,d]=l;t("get",u,h,d)}else if(o==="set"){const[u]=l;t("set",u)}else t(o,...l)}catch(u){Ge.error(u)}}return r}function P0(t,e,n,i,r){let o=function(...l){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(o=window[r]),window[r]=R0(o,t,e,n),{gtagCore:o,wrappedGtag:window[r]}}function O0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Lo)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=30,D0=1e3;class N0{constructor(e={},n=D0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const sh=new N0;function x0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function M0(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:x0(i)},o=w0.replace("{app-id}",n),l=await fetch(o,r);if(l.status!==200&&l.status!==304){let u="";try{const h=await l.json();!((e=h.error)===null||e===void 0)&&e.message&&(u=h.error.message)}catch{}throw Ze.create("config-fetch-failed",{httpStatus:l.status,responseMessage:u})}return l.json()}async function L0(t,e=sh,n){const{appId:i,apiKey:r,measurementId:o}=t.options;if(!i)throw Ze.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:i};throw Ze.create("no-api-key")}const l=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new j0;return setTimeout(async()=>{u.abort()},v0),rh({appId:i,apiKey:r,measurementId:o},l,u,e)}async function rh(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=sh){var o;const{appId:l,measurementId:u}=t;try{await U0(i,e)}catch(h){if(u)return Ge.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:l,measurementId:u};throw h}try{const h=await M0(t);return r.deleteThrottleMetadata(l),h}catch(h){const d=h;if(!F0(d)){if(r.deleteThrottleMetadata(l),u)return Ge.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:l,measurementId:u};throw h}const _=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?vl(n,r.intervalMillis,k0):vl(n,r.intervalMillis),E={throttleEndTimeMillis:Date.now()+_,backoffCount:n+1};return r.setThrottleMetadata(l,E),Ge.debug(`Calling attemptFetch again in ${_} millis`),rh(t,E,i,r)}}function U0(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),o=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(o),i(Ze.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function F0(t){if(!(t instanceof ht)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class j0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function $0(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const o=await e,l=Object.assign(Object.assign({},i),{send_to:o});t("event",n,l)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H0(){if(ku())try{await Du()}catch(t){return Ge.warn(Ze.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ge.warn(Ze.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function V0(t,e,n,i,r,o,l){var u;const h=L0(t);h.then(P=>{n[P.measurementId]=P.appId,t.options.measurementId&&P.measurementId!==t.options.measurementId&&Ge.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${P.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(P=>Ge.error(P)),e.push(h);const d=H0().then(P=>{if(P)return i.getId()}),[_,E]=await Promise.all([h,d]);O0(o)||C0(o,_.measurementId),r("js",new Date);const S=(u=l==null?void 0:l.config)!==null&&u!==void 0?u:{};return S[y0]="firebase",S.update=!0,E!=null&&(S[_0]=E),r("config",_.measurementId,S),_.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.app=e}_delete(){return delete Ci[this.app.options.appId],Promise.resolve()}}let Ci={},Ol=[];const kl={};let Mr="dataLayer",W0="gtag",Dl,oh,Nl=!1;function z0(){const t=[];if(Ou()&&t.push("This is a browser extension environment."),hm()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=Ze.create("invalid-analytics-context",{errorInfo:e});Ge.warn(n.message)}}function K0(t,e,n){z0();const i=t.options.appId;if(!i)throw Ze.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ge.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ze.create("no-api-key");if(Ci[i]!=null)throw Ze.create("already-exists",{id:i});if(!Nl){E0(Mr);const{wrappedGtag:o,gtagCore:l}=P0(Ci,Ol,kl,Mr,W0);oh=o,Dl=l,Nl=!0}return Ci[i]=V0(t,Ol,kl,e,Dl,Mr,n),new B0(t)}function G0(t=ko()){t=an(t);const e=Sn(t,As);return e.isInitialized()?e.getImmediate():q0(t)}function q0(t,e={}){const n=Sn(t,As);if(n.isInitialized()){const r=n.getImmediate();if(on(e,n.getOptions()))return r;throw Ze.create("already-initialized")}return n.initialize({options:e})}function J0(t,e,n,i){t=an(t),$0(oh,Ci[t.app.options.appId],e,n,i).catch(r=>Ge.error(r))}const xl="@firebase/analytics",Ml="0.10.16";function X0(){It(new ut(As,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return K0(i,r,n)},"PUBLIC")),It(new ut("analytics-internal",t,"PRIVATE")),st(xl,Ml),st(xl,Ml,"esm2017");function t(e){try{const n=e.getProvider(As).getImmediate();return{logEvent:(i,r,o)=>J0(n,i,r,o)}}catch(n){throw Ze.create("interop-component-reg-failed",{reason:n})}}}X0();function Uo(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function ah(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Y0=ah,lh=new En("auth","Firebase",ah());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new qs("@firebase/auth");function Z0(t,...e){Rs.logLevel<=ce.WARN&&Rs.warn(`Auth (${Zn}): ${t}`,...e)}function fs(t,...e){Rs.logLevel<=ce.ERROR&&Rs.error(`Auth (${Zn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,...e){throw Fo(t,...e)}function yt(t,...e){return Fo(t,...e)}function ch(t,e,n){const i=Object.assign(Object.assign({},Y0()),{[e]:n});return new En("auth","Firebase",i).create(e,{appName:t.name})}function In(t){return ch(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fo(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return lh.create(t,...e)}function K(t,e,...n){if(!t)throw Fo(e,...n)}function kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fs(e),new Error(e)}function jt(t,e){t||kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Q0(){return Ll()==="http:"||Ll()==="https:"}function Ll(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Q0()||Ou()||"connection"in navigator)?navigator.onLine:!0}function t4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=am()||cm()}get(){return e4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i4=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],s4=new ji(3e4,6e4);function $o(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qn(t,e,n,i,r={}){return hh(t,r,async()=>{let o={},l={};i&&(e==="GET"?l=i:o={body:JSON.stringify(i)});const u=Fi(Object.assign({key:t.config.apiKey},l)).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:h},o);return lm()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&Ui(t.emulatorConfig.host)&&(d.credentials="include"),uh.fetch()(await fh(t,t.config.apiHost,n,u),d)})}async function hh(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},n4),e);try{const r=new o4(t),o=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw os(t,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const u=o.ok?l.errorMessage:l.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw os(t,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw os(t,"email-already-in-use",l);if(h==="USER_DISABLED")throw os(t,"user-disabled",l);const _=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ch(t,_,d);Ft(t,_)}}catch(r){if(r instanceof ht)throw r;Ft(t,"network-request-failed",{message:String(r)})}}async function r4(t,e,n,i,r={}){const o=await Qn(t,e,n,i,r);return"mfaPendingCredential"in o&&Ft(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function fh(t,e,n,i){const r=`${e}${n}?${i}`,o=t,l=o.config.emulator?jo(t.config,r):`${t.config.apiScheme}://${r}`;return i4.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(l).toString():l}class o4{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(yt(this.auth,"network-request-failed")),s4.get())})}}function os(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=yt(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a4(t,e){return Qn(t,"POST","/v1/accounts:delete",e)}async function Ps(t,e){return Qn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function l4(t,e=!1){const n=an(t),i=await n.getIdToken(e),r=Ho(i);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:Ei(Lr(r.auth_time)),issuedAtTime:Ei(Lr(r.iat)),expirationTime:Ei(Lr(r.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Lr(t){return Number(t)*1e3}function Ho(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return fs("JWT malformed, contained fewer than 3 sections"),null;try{const r=Cu(n);return r?JSON.parse(r):(fs("Failed to decode base64 JWT payload"),null)}catch(r){return fs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ul(t){const e=Ho(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ht&&c4(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function c4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ei(this.lastLoginAt),this.creationTime=Ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(t){var e;const n=t.auth,i=await t.getIdToken(),r=await xi(t,Ps(n,{idToken:i}));K(r==null?void 0:r.users.length,n,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const l=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?dh(o.providerUserInfo):[],u=f4(t.providerData,l),h=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(u!=null&&u.length),_=h?d:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new ro(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(t,E)}async function h4(t){const e=an(t);await Os(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function f4(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function dh(t){return t.map(e=>{var{providerId:n}=e,i=Uo(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d4(t,e){const n=await hh(t,{},async()=>{const i=Fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,l=await fh(t,r,"/v1/token",`key=${o}`),u=await t._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:u,body:i};return t.emulatorConfig&&Ui(t.emulatorConfig.host)&&(h.credentials="include"),uh.fetch()(l,h)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function p4(t,e){return Qn(t,"POST","/v2/accounts:revokeToken",$o(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ul(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Ul(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:o}=await d4(e,n);this.updateTokensAndExpiration(i,r,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:o}=n,l=new Wn;return i&&(K(typeof i=="string","internal-error",{appName:e}),l.refreshToken=i),r&&(K(typeof r=="string","internal-error",{appName:e}),l.accessToken=r),o&&(K(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class at{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,o=Uo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new u4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ro(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await xi(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return l4(this,e)}reload(){return h4(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new at(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Os(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await xi(this,a4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,o,l,u,h,d,_;const E=(i=n.displayName)!==null&&i!==void 0?i:void 0,S=(r=n.email)!==null&&r!==void 0?r:void 0,P=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,U=(l=n.photoURL)!==null&&l!==void 0?l:void 0,$=(u=n.tenantId)!==null&&u!==void 0?u:void 0,J=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,ee=(d=n.createdAt)!==null&&d!==void 0?d:void 0,Q=(_=n.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:X,emailVerified:H,isAnonymous:he,providerData:ge,stsTokenManager:I}=n;K(X&&I,e,"internal-error");const p=Wn.fromJSON(this.name,I);K(typeof X=="string",e,"internal-error"),qt(E,e.name),qt(S,e.name),K(typeof H=="boolean",e,"internal-error"),K(typeof he=="boolean",e,"internal-error"),qt(P,e.name),qt(U,e.name),qt($,e.name),qt(J,e.name),qt(ee,e.name),qt(Q,e.name);const y=new at({uid:X,auth:e,email:S,emailVerified:H,displayName:E,isAnonymous:he,photoURL:U,phoneNumber:P,tenantId:$,stsTokenManager:p,createdAt:ee,lastLoginAt:Q});return ge&&Array.isArray(ge)&&(y.providerData=ge.map(w=>Object.assign({},w))),J&&(y._redirectEventId=J),y}static async _fromIdTokenResponse(e,n,i=!1){const r=new Wn;r.updateFromServerResponse(n);const o=new at({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Os(o),o}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];K(r.localId!==void 0,"internal-error");const o=r.providerUserInfo!==void 0?dh(r.providerUserInfo):[],l=!(r.email&&r.passwordHash)&&!(o!=null&&o.length),u=new Wn;u.updateFromIdToken(i);const h=new at({uid:r.localId,auth:e,stsTokenManager:u,isAnonymous:l}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new ro(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=new Map;function Dt(t){jt(t instanceof Function,"Expected a class definition");let e=Fl.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fl.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ph.type="NONE";const jl=ph;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t,e,n){return`firebase:${t}:${e}:${n}`}class zn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:o}=this.auth;this.fullUserKey=ds(this.userKey,r.apiKey,o),this.fullPersistenceKey=ds("persistence",r.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ps(this.auth,{idToken:e}).catch(()=>{});return n?at._fromGetAccountInfoResponse(this.auth,n,e):null}return at._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new zn(Dt(jl),e,i);const r=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=r[0]||Dt(jl);const l=ds(i,e.config.apiKey,e.name);let u=null;for(const d of n)try{const _=await d._get(l);if(_){let E;if(typeof _=="string"){const S=await Ps(e,{idToken:_}).catch(()=>{});if(!S)break;E=await at._fromGetAccountInfoResponse(e,S,_)}else E=at._fromJSON(e,_);d!==o&&(u=E),o=d;break}}catch{}const h=r.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new zn(o,e,i):(o=h[0],u&&await o._set(l,u.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(l)}catch{}})),new zn(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wh(e))return"Blackberry";if(Ih(e))return"Webos";if(mh(e))return"Safari";if((e.includes("chrome/")||_h(e))&&!e.includes("edge/"))return"Chrome";if(vh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function gh(t=Ve()){return/firefox\//i.test(t)}function mh(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _h(t=Ve()){return/crios\//i.test(t)}function yh(t=Ve()){return/iemobile/i.test(t)}function vh(t=Ve()){return/android/i.test(t)}function wh(t=Ve()){return/blackberry/i.test(t)}function Ih(t=Ve()){return/webos/i.test(t)}function Vo(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function g4(t=Ve()){var e;return Vo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function m4(){return um()&&document.documentMode===10}function bh(t=Ve()){return Vo(t)||vh(t)||Ih(t)||wh(t)||/windows phone/i.test(t)||yh(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t,e=[]){let n;switch(t){case"Browser":n=$l(Ve());break;case"Worker":n=`${$l(Ve())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((l,u)=>{try{const h=e(o);l(h)}catch(h){u(h)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y4(t,e={}){return Qn(t,"GET","/v2/passwordPolicy",$o(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v4=6;class w4{constructor(e){var n,i,r,o;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:v4,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,o,l,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(i=h.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(r=h.containsLowercaseLetter)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(l=h.containsNumericCharacter)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hl(this),this.idTokenSubscription=new Hl(this),this.beforeStateQueue=new _4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var i,r,o;if(!this._deleted&&(this.persistenceManager=await zn.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ps(this,{idToken:e}),i=await at._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===u)&&(h!=null&&h.user)&&(r=h.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Os(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=t4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(In(this));const n=e?an(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await y4(this),n=new w4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new En("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await p4(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dt(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(u,this,"internal-error"),u.then(()=>{l||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,i,r);return()=>{l=!0,h()}}else{const h=e.addObserver(n);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Th(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Z0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Bo(t){return an(t)}class Hl{constructor(e){this.auth=e,this.observer=null,this.addObserver=mm(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function b4(t){Wo=t}function T4(t){return Wo.loadJS(t)}function C4(){return Wo.gapiScript}function E4(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S4(t,e){const n=Sn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),o=n.getOptions();if(on(o,e??{}))return r;Ft(r,"already-initialized")}return n.initialize({options:e})}function A4(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function R4(t,e,n){const i=Bo(t);K(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,o=Ch(e),{host:l,port:u}=P4(e),h=u===null?"":`:${u}`,d={url:`${o}//${l}${h}/`},_=Object.freeze({host:l,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){K(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),K(on(d,i.config.emulator)&&on(_,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=d,i.emulatorConfig=_,i.settings.appVerificationDisabledForTesting=!0,Ui(l)?(Ru(`${o}//${l}${h}`),Pu("Auth",!0)):O4()}function Ch(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function P4(t){const e=Ch(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const o=r[1];return{host:o,port:Vl(i.substr(o.length+1))}}else{const[o,l]=i.split(":");return{host:o,port:Vl(l)}}}function Vl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function O4(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,n){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(t,e){return r4(t,"POST","/v1/accounts:signInWithIdp",$o(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k4="http://localhost";class Cn extends Eh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,o=Uo(n,["providerId","signInMethod"]);if(!i||!r)return null;const l=new Cn(i,r);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return Kn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Kn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kn(e,n)}buildRequest(){const e={requestUri:k4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends Sh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends $i{constructor(){super("facebook.com")}static credential(e){return Cn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends $i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Zt.credential(n,i)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends $i{constructor(){super("github.com")}static credential(e){return Cn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends $i{constructor(){super("twitter.com")}static credential(e,n){return Cn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return en.credential(n,i)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const o=await at._fromIdTokenResponse(e,i,r),l=Bl(i);return new Jn({user:o,providerId:l,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Bl(i);return new Jn({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Bl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends ht{constructor(e,n,i,r){var o;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,ks.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new ks(e,n,i,r)}}function Ah(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ks._fromErrorAndOperation(t,o,e,i):o})}async function D4(t,e,n=!1){const i=await xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jn._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N4(t,e,n=!1){const{auth:i}=t;if(mt(i.app))return Promise.reject(In(i));const r="reauthenticate";try{const o=await xi(t,Ah(i,r,e,t),n);K(o.idToken,i,"internal-error");const l=Ho(o.idToken);K(l,i,"internal-error");const{sub:u}=l;return K(t.uid===u,i,"user-mismatch"),Jn._forOperation(t,r,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ft(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x4(t,e,n=!1){if(mt(t.app))return Promise.reject(In(t));const i="signIn",r=await Ah(t,i,e),o=await Jn._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(o.user),o}function M4(t,e,n,i){return an(t).onIdTokenChanged(e,n,i)}function L4(t,e,n){return an(t).beforeAuthStateChanged(e,n)}const Ds="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ds,"1"),this.storage.removeItem(Ds),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U4=1e3,F4=10;class Ph extends Rh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,u,h)=>{this.notifyListeners(l,h)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const l=this.storage.getItem(i);!n&&this.localCache[i]===l||this.notifyListeners(i,l)},o=this.storage.getItem(i);m4()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,F4):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},U4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ph.type="LOCAL";const j4=Ph;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh extends Rh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Oh.type="SESSION";const kh=Oh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Ys(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:o}=n.data,l=this.handlersMap[r];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const u=Array.from(l).map(async d=>d(n.origin,o)),h=await $4(u);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ys.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,l;return new Promise((u,h)=>{const d=zo("",20);r.port1.start();const _=setTimeout(()=>{h(new Error("unsupported_event"))},i);l={messageChannel:r,onMessage(E){const S=E;if(S.data.eventId===d)switch(S.data.status){case"ack":clearTimeout(_),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(S.data.response);break;default:clearTimeout(_),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(l),r.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[r.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return window}function V4(t){vt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function B4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function W4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function z4(){return Dh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="firebaseLocalStorageDb",K4=1,Ns="firebaseLocalStorage",xh="fbase_key";class Hi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zs(t,e){return t.transaction([Ns],e?"readwrite":"readonly").objectStore(Ns)}function G4(){const t=indexedDB.deleteDatabase(Nh);return new Hi(t).toPromise()}function oo(){const t=indexedDB.open(Nh,K4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ns,{keyPath:xh})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ns)?e(i):(i.close(),await G4(),e(await oo()))})})}async function Wl(t,e,n){const i=Zs(t,!0).put({[xh]:e,value:n});return new Hi(i).toPromise()}async function q4(t,e){const n=Zs(t,!1).get(e),i=await new Hi(n).toPromise();return i===void 0?null:i.value}function zl(t,e){const n=Zs(t,!0).delete(e);return new Hi(n).toPromise()}const J4=800,X4=3;class Mh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>X4)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ys._getInstance(z4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await B4(),!this.activeServiceWorker)return;this.sender=new H4(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||W4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oo();return await Wl(e,Ds,"1"),await zl(e,Ds),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Wl(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>q4(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=Zs(r,!1).getAll();return new Hi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:o}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),J4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mh.type="LOCAL";const Y4=Mh;new ji(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z4(t,e){return e?Dt(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends Eh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Q4(t){return x4(t.auth,new Ko(t),t.bypassAuthState)}function e2(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),N4(n,new Ko(t),t.bypassAuthState)}async function t2(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),D4(n,new Ko(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n,i,r,o=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:o,error:l,type:u}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q4;case"linkViaPopup":case"linkViaRedirect":return t2;case"reauthViaPopup":case"reauthViaRedirect":return e2;default:Ft(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=new ji(2e3,1e4);class Ln extends Lh{constructor(e,n,i,r,o){super(e,n,r,o),this.provider=i,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=zo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,n2.get())};e()}}Ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2="pendingRedirect",ps=new Map;class s2 extends Lh{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=ps.get(this.auth._key());if(!e){try{const i=await r2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ps.set(this.auth._key(),e)}return this.bypassAuthState||ps.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r2(t,e){const n=l2(e),i=a2(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function o2(t,e){ps.set(t._key(),e)}function a2(t){return Dt(t._redirectPersistence)}function l2(t){return ds(i2,t.config.apiKey,t.name)}async function c2(t,e,n=!1){if(mt(t.app))return Promise.reject(In(t));const i=Bo(t),r=Z4(i,e),l=await new s2(i,r,n).execute();return l&&!n&&(delete l.user._redirectEventId,await i._persistUserIfCurrent(l.user),await i._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2=10*60*1e3;class h2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Uh(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=u2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kl(e))}saveEventToCache(e){this.cachedEventUids.add(Kl(e)),this.lastProcessedEventTime=Date.now()}}function Kl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2(t,e={}){return Qn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g2=/^https?/;async function m2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await d2(t);for(const n of e)try{if(_2(n))return}catch{}Ft(t,"unauthorized-domain")}function _2(t){const e=so(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===i}if(!g2.test(n))return!1;if(p2.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=new ji(3e4,6e4);function Gl(){const t=vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function v2(t){return new Promise((e,n)=>{var i,r,o;function l(){Gl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gl(),n(yt(t,"network-request-failed"))},timeout:y2.get()})}if(!((r=(i=vt().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=vt().gapi)===null||o===void 0)&&o.load)l();else{const u=E4("iframefcb");return vt()[u]=()=>{gapi.load?l():n(yt(t,"network-request-failed"))},T4(`${C4()}?onload=${u}`).catch(h=>n(h))}}).catch(e=>{throw gs=null,e})}let gs=null;function w2(t){return gs=gs||v2(t),gs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=new ji(5e3,15e3),b2="__/auth/iframe",T2="emulator/auth/iframe",C2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},E2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S2(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jo(e,T2):`https://${t.config.authDomain}/${b2}`,i={apiKey:e.apiKey,appName:t.name,v:Zn},r=E2.get(t.config.apiHost);r&&(i.eid=r);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${Fi(i).slice(1)}`}async function A2(t){const e=await w2(t),n=vt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:S2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C2,dontclear:!0},i=>new Promise(async(r,o)=>{await i.restyle({setHideOnLeave:!1});const l=yt(t,"network-request-failed"),u=vt().setTimeout(()=>{o(l)},I2.get());function h(){vt().clearTimeout(u),r(i)}i.ping(h).then(h,()=>{o(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P2=500,O2=600,k2="_blank",D2="http://localhost";class ql{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N2(t,e,n,i=P2,r=O2){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),l=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const h=Object.assign(Object.assign({},R2),{width:i.toString(),height:r.toString(),top:o,left:l}),d=Ve().toLowerCase();n&&(u=_h(d)?k2:n),gh(d)&&(e=e||D2,h.scrollbars="yes");const _=Object.entries(h).reduce((S,[P,U])=>`${S}${P}=${U},`,"");if(g4(d)&&u!=="_self")return x2(e||"",u),new ql(null);const E=window.open(e||"",u,_);K(E,t,"popup-blocked");try{E.focus()}catch{}return new ql(E)}function x2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2="__/auth/handler",L2="emulator/auth/handler",U2=encodeURIComponent("fac");async function Jl(t,e,n,i,r,o){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Zn,eventId:r};if(e instanceof Sh){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",gm(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,E]of Object.entries({}))l[_]=E}if(e instanceof $i){const _=e.getScopes().filter(E=>E!=="");_.length>0&&(l.scopes=_.join(","))}t.tenantId&&(l.tid=t.tenantId);const u=l;for(const _ of Object.keys(u))u[_]===void 0&&delete u[_];const h=await t._getAppCheckToken(),d=h?`#${U2}=${encodeURIComponent(h)}`:"";return`${F2(t)}?${Fi(u).slice(1)}${d}`}function F2({config:t}){return t.emulator?jo(t,L2):`https://${t.authDomain}/${M2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="webStorageSupport";class j2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kh,this._completeRedirectFn=c2,this._overrideRedirectResult=o2}async _openPopup(e,n,i,r){var o;jt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await Jl(e,n,i,so(),r);return N2(e,l,zo())}async _openRedirect(e,n,i,r){await this._originValidation(e);const o=await Jl(e,n,i,so(),r);return V4(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:o}=this.eventManagers[n];return r?Promise.resolve(r):(jt(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await A2(e),i=new h2(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ur,{type:Ur},r=>{var o;const l=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[Ur];l!==void 0&&n(!!l),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=m2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bh()||mh()||Vo()}}const $2=j2;var Xl="@firebase/auth",Yl="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function B2(t){It(new ut("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=i.options;K(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Th(t)},d=new I4(i,r,o,h);return A4(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),It(new ut("auth-internal",e=>{const n=Bo(e.getProvider("auth").getImmediate());return(i=>new H2(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),st(Xl,Yl,V2(t)),st(Xl,Yl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2=5*60,z2=Au("authIdTokenMaxAge")||W2;let Zl=null;const K2=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>z2)return;const r=n==null?void 0:n.token;Zl!==r&&(Zl=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function G2(t=ko()){const e=Sn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=S4(t,{popupRedirectResolver:$2,persistence:[Y4,j4,kh]}),i=Au("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const l=K2(o.toString());L4(n,l,()=>l(n.currentUser)),M4(n,u=>l(u))}}const r=Eu("auth");return r&&R4(n,`http://${r}`),n}function q2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}b4({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const o=yt("internal-error");o.customData=r,n(o)},i.type="text/javascript",i.charset="UTF-8",q2().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});B2("Browser");var Ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fh;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,p){function y(){}y.prototype=p.prototype,I.D=p.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(w,b,C){for(var m=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)m[qe-2]=arguments[qe];return p.prototype[b].apply(w,m)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,p,y){y||(y=0);var w=Array(16);if(typeof p=="string")for(var b=0;16>b;++b)w[b]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(b=0;16>b;++b)w[b]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=I.g[0],y=I.g[1],b=I.g[2];var C=I.g[3],m=p+(C^y&(b^C))+w[0]+3614090360&4294967295;p=y+(m<<7&4294967295|m>>>25),m=C+(b^p&(y^b))+w[1]+3905402710&4294967295,C=p+(m<<12&4294967295|m>>>20),m=b+(y^C&(p^y))+w[2]+606105819&4294967295,b=C+(m<<17&4294967295|m>>>15),m=y+(p^b&(C^p))+w[3]+3250441966&4294967295,y=b+(m<<22&4294967295|m>>>10),m=p+(C^y&(b^C))+w[4]+4118548399&4294967295,p=y+(m<<7&4294967295|m>>>25),m=C+(b^p&(y^b))+w[5]+1200080426&4294967295,C=p+(m<<12&4294967295|m>>>20),m=b+(y^C&(p^y))+w[6]+2821735955&4294967295,b=C+(m<<17&4294967295|m>>>15),m=y+(p^b&(C^p))+w[7]+4249261313&4294967295,y=b+(m<<22&4294967295|m>>>10),m=p+(C^y&(b^C))+w[8]+1770035416&4294967295,p=y+(m<<7&4294967295|m>>>25),m=C+(b^p&(y^b))+w[9]+2336552879&4294967295,C=p+(m<<12&4294967295|m>>>20),m=b+(y^C&(p^y))+w[10]+4294925233&4294967295,b=C+(m<<17&4294967295|m>>>15),m=y+(p^b&(C^p))+w[11]+2304563134&4294967295,y=b+(m<<22&4294967295|m>>>10),m=p+(C^y&(b^C))+w[12]+1804603682&4294967295,p=y+(m<<7&4294967295|m>>>25),m=C+(b^p&(y^b))+w[13]+4254626195&4294967295,C=p+(m<<12&4294967295|m>>>20),m=b+(y^C&(p^y))+w[14]+2792965006&4294967295,b=C+(m<<17&4294967295|m>>>15),m=y+(p^b&(C^p))+w[15]+1236535329&4294967295,y=b+(m<<22&4294967295|m>>>10),m=p+(b^C&(y^b))+w[1]+4129170786&4294967295,p=y+(m<<5&4294967295|m>>>27),m=C+(y^b&(p^y))+w[6]+3225465664&4294967295,C=p+(m<<9&4294967295|m>>>23),m=b+(p^y&(C^p))+w[11]+643717713&4294967295,b=C+(m<<14&4294967295|m>>>18),m=y+(C^p&(b^C))+w[0]+3921069994&4294967295,y=b+(m<<20&4294967295|m>>>12),m=p+(b^C&(y^b))+w[5]+3593408605&4294967295,p=y+(m<<5&4294967295|m>>>27),m=C+(y^b&(p^y))+w[10]+38016083&4294967295,C=p+(m<<9&4294967295|m>>>23),m=b+(p^y&(C^p))+w[15]+3634488961&4294967295,b=C+(m<<14&4294967295|m>>>18),m=y+(C^p&(b^C))+w[4]+3889429448&4294967295,y=b+(m<<20&4294967295|m>>>12),m=p+(b^C&(y^b))+w[9]+568446438&4294967295,p=y+(m<<5&4294967295|m>>>27),m=C+(y^b&(p^y))+w[14]+3275163606&4294967295,C=p+(m<<9&4294967295|m>>>23),m=b+(p^y&(C^p))+w[3]+4107603335&4294967295,b=C+(m<<14&4294967295|m>>>18),m=y+(C^p&(b^C))+w[8]+1163531501&4294967295,y=b+(m<<20&4294967295|m>>>12),m=p+(b^C&(y^b))+w[13]+2850285829&4294967295,p=y+(m<<5&4294967295|m>>>27),m=C+(y^b&(p^y))+w[2]+4243563512&4294967295,C=p+(m<<9&4294967295|m>>>23),m=b+(p^y&(C^p))+w[7]+1735328473&4294967295,b=C+(m<<14&4294967295|m>>>18),m=y+(C^p&(b^C))+w[12]+2368359562&4294967295,y=b+(m<<20&4294967295|m>>>12),m=p+(y^b^C)+w[5]+4294588738&4294967295,p=y+(m<<4&4294967295|m>>>28),m=C+(p^y^b)+w[8]+2272392833&4294967295,C=p+(m<<11&4294967295|m>>>21),m=b+(C^p^y)+w[11]+1839030562&4294967295,b=C+(m<<16&4294967295|m>>>16),m=y+(b^C^p)+w[14]+4259657740&4294967295,y=b+(m<<23&4294967295|m>>>9),m=p+(y^b^C)+w[1]+2763975236&4294967295,p=y+(m<<4&4294967295|m>>>28),m=C+(p^y^b)+w[4]+1272893353&4294967295,C=p+(m<<11&4294967295|m>>>21),m=b+(C^p^y)+w[7]+4139469664&4294967295,b=C+(m<<16&4294967295|m>>>16),m=y+(b^C^p)+w[10]+3200236656&4294967295,y=b+(m<<23&4294967295|m>>>9),m=p+(y^b^C)+w[13]+681279174&4294967295,p=y+(m<<4&4294967295|m>>>28),m=C+(p^y^b)+w[0]+3936430074&4294967295,C=p+(m<<11&4294967295|m>>>21),m=b+(C^p^y)+w[3]+3572445317&4294967295,b=C+(m<<16&4294967295|m>>>16),m=y+(b^C^p)+w[6]+76029189&4294967295,y=b+(m<<23&4294967295|m>>>9),m=p+(y^b^C)+w[9]+3654602809&4294967295,p=y+(m<<4&4294967295|m>>>28),m=C+(p^y^b)+w[12]+3873151461&4294967295,C=p+(m<<11&4294967295|m>>>21),m=b+(C^p^y)+w[15]+530742520&4294967295,b=C+(m<<16&4294967295|m>>>16),m=y+(b^C^p)+w[2]+3299628645&4294967295,y=b+(m<<23&4294967295|m>>>9),m=p+(b^(y|~C))+w[0]+4096336452&4294967295,p=y+(m<<6&4294967295|m>>>26),m=C+(y^(p|~b))+w[7]+1126891415&4294967295,C=p+(m<<10&4294967295|m>>>22),m=b+(p^(C|~y))+w[14]+2878612391&4294967295,b=C+(m<<15&4294967295|m>>>17),m=y+(C^(b|~p))+w[5]+4237533241&4294967295,y=b+(m<<21&4294967295|m>>>11),m=p+(b^(y|~C))+w[12]+1700485571&4294967295,p=y+(m<<6&4294967295|m>>>26),m=C+(y^(p|~b))+w[3]+2399980690&4294967295,C=p+(m<<10&4294967295|m>>>22),m=b+(p^(C|~y))+w[10]+4293915773&4294967295,b=C+(m<<15&4294967295|m>>>17),m=y+(C^(b|~p))+w[1]+2240044497&4294967295,y=b+(m<<21&4294967295|m>>>11),m=p+(b^(y|~C))+w[8]+1873313359&4294967295,p=y+(m<<6&4294967295|m>>>26),m=C+(y^(p|~b))+w[15]+4264355552&4294967295,C=p+(m<<10&4294967295|m>>>22),m=b+(p^(C|~y))+w[6]+2734768916&4294967295,b=C+(m<<15&4294967295|m>>>17),m=y+(C^(b|~p))+w[13]+1309151649&4294967295,y=b+(m<<21&4294967295|m>>>11),m=p+(b^(y|~C))+w[4]+4149444226&4294967295,p=y+(m<<6&4294967295|m>>>26),m=C+(y^(p|~b))+w[11]+3174756917&4294967295,C=p+(m<<10&4294967295|m>>>22),m=b+(p^(C|~y))+w[2]+718787259&4294967295,b=C+(m<<15&4294967295|m>>>17),m=y+(C^(b|~p))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(b+(m<<21&4294967295|m>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+C&4294967295}i.prototype.u=function(I,p){p===void 0&&(p=I.length);for(var y=p-this.blockSize,w=this.B,b=this.h,C=0;C<p;){if(b==0)for(;C<=y;)r(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<p;)if(w[b++]=I.charCodeAt(C++),b==this.blockSize){r(this,w),b=0;break}}else for(;C<p;)if(w[b++]=I[C++],b==this.blockSize){r(this,w),b=0;break}}this.h=b,this.o+=p},i.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;var y=8*this.o;for(p=I.length-8;p<I.length;++p)I[p]=y&255,y/=256;for(this.u(I),I=Array(16),p=y=0;4>p;++p)for(var w=0;32>w;w+=8)I[y++]=this.g[p]>>>w&255;return I};function o(I,p){var y=u;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=p(I)}function l(I,p){this.h=p;for(var y=[],w=!0,b=I.length-1;0<=b;b--){var C=I[b]|0;w&&C==p||(y[b]=C,w=!1)}this.g=y}var u={};function h(I){return-128<=I&&128>I?o(I,function(p){return new l([p|0],0>p?-1:0)}):new l([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return E;if(0>I)return J(d(-I));for(var p=[],y=1,w=0;I>=y;w++)p[w]=I/y|0,y*=4294967296;return new l(p,0)}function _(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return J(_(I.substring(1),p));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(p,8)),w=E,b=0;b<I.length;b+=8){var C=Math.min(8,I.length-b),m=parseInt(I.substring(b,b+C),p);8>C?(C=d(Math.pow(p,C)),w=w.j(C).add(d(m))):(w=w.j(y),w=w.add(d(m)))}return w}var E=h(0),S=h(1),P=h(16777216);t=l.prototype,t.m=function(){if($(this))return-J(this).m();for(var I=0,p=1,y=0;y<this.g.length;y++){var w=this.i(y);I+=(0<=w?w:4294967296+w)*p,p*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(U(this))return"0";if($(this))return"-"+J(this).toString(I);for(var p=d(Math.pow(I,6)),y=this,w="";;){var b=H(y,p).g;y=ee(y,b.j(p));var C=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=b,U(y))return C+w;for(;6>C.length;)C="0"+C;w=C+w}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function U(I){if(I.h!=0)return!1;for(var p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function $(I){return I.h==-1}t.l=function(I){return I=ee(this,I),$(I)?-1:U(I)?0:1};function J(I){for(var p=I.g.length,y=[],w=0;w<p;w++)y[w]=~I.g[w];return new l(y,~I.h).add(S)}t.abs=function(){return $(this)?J(this):this},t.add=function(I){for(var p=Math.max(this.g.length,I.g.length),y=[],w=0,b=0;b<=p;b++){var C=w+(this.i(b)&65535)+(I.i(b)&65535),m=(C>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);w=m>>>16,C&=65535,m&=65535,y[b]=m<<16|C}return new l(y,y[y.length-1]&-2147483648?-1:0)};function ee(I,p){return I.add(J(p))}t.j=function(I){if(U(this)||U(I))return E;if($(this))return $(I)?J(this).j(J(I)):J(J(this).j(I));if($(I))return J(this.j(J(I)));if(0>this.l(P)&&0>I.l(P))return d(this.m()*I.m());for(var p=this.g.length+I.g.length,y=[],w=0;w<2*p;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<I.g.length;b++){var C=this.i(w)>>>16,m=this.i(w)&65535,qe=I.i(b)>>>16,Bt=I.i(b)&65535;y[2*w+2*b]+=m*Bt,Q(y,2*w+2*b),y[2*w+2*b+1]+=C*Bt,Q(y,2*w+2*b+1),y[2*w+2*b+1]+=m*qe,Q(y,2*w+2*b+1),y[2*w+2*b+2]+=C*qe,Q(y,2*w+2*b+2)}for(w=0;w<p;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=p;w<2*p;w++)y[w]=0;return new l(y,0)};function Q(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function X(I,p){this.g=I,this.h=p}function H(I,p){if(U(p))throw Error("division by zero");if(U(I))return new X(E,E);if($(I))return p=H(J(I),p),new X(J(p.g),J(p.h));if($(p))return p=H(I,J(p)),new X(J(p.g),p.h);if(30<I.g.length){if($(I)||$(p))throw Error("slowDivide_ only works with positive integers.");for(var y=S,w=p;0>=w.l(I);)y=he(y),w=he(w);var b=ge(y,1),C=ge(w,1);for(w=ge(w,2),y=ge(y,2);!U(w);){var m=C.add(w);0>=m.l(I)&&(b=b.add(y),C=m),w=ge(w,1),y=ge(y,1)}return p=ee(I,b.j(p)),new X(b,p)}for(b=E;0<=I.l(p);){for(y=Math.max(1,Math.floor(I.m()/p.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),C=d(y),m=C.j(p);$(m)||0<m.l(I);)y-=w,C=d(y),m=C.j(p);U(C)&&(C=S),b=b.add(C),I=ee(I,m)}return new X(b,I)}t.A=function(I){return H(this,I).h},t.and=function(I){for(var p=Math.max(this.g.length,I.g.length),y=[],w=0;w<p;w++)y[w]=this.i(w)&I.i(w);return new l(y,this.h&I.h)},t.or=function(I){for(var p=Math.max(this.g.length,I.g.length),y=[],w=0;w<p;w++)y[w]=this.i(w)|I.i(w);return new l(y,this.h|I.h)},t.xor=function(I){for(var p=Math.max(this.g.length,I.g.length),y=[],w=0;w<p;w++)y[w]=this.i(w)^I.i(w);return new l(y,this.h^I.h)};function he(I){for(var p=I.g.length+1,y=[],w=0;w<p;w++)y[w]=I.i(w)<<1|I.i(w-1)>>>31;return new l(y,I.h)}function ge(I,p){var y=p>>5;p%=32;for(var w=I.g.length-y,b=[],C=0;C<w;C++)b[C]=0<p?I.i(C+y)>>>p|I.i(C+y+1)<<32-p:I.i(C+y);return new l(b,I.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=d,l.fromString=_,Fh=l}).apply(typeof Ql<"u"?Ql:typeof self<"u"?self:typeof window<"u"?window:{});var as=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof as=="object"&&as];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var i=n(this);function r(s,a){if(a)e:{var c=i;s=s.split(".");for(var f=0;f<s.length-1;f++){var T=s[f];if(!(T in c))break e;c=c[T]}s=s[s.length-1],f=c[s],a=a(f),a!=f&&a!=null&&e(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,f=!1,T={next:function(){if(!f&&c<s.length){var A=c++;return{value:a(A,s[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}r("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function d(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,c){return s.call.apply(s.bind,arguments)}function E(s,a,c){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,f),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function S(s,a,c){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:E,S.apply(null,arguments)}function P(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function U(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(f,T,A){for(var L=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)L[fe-2]=arguments[fe];return a.prototype[T].apply(f,L)}}function $(s){const a=s.length;if(0<a){const c=Array(a);for(let f=0;f<a;f++)c[f]=s[f];return c}return[]}function J(s,a){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const T=s.length||0,A=f.length||0;s.length=T+A;for(let L=0;L<A;L++)s[T+L]=f[L]}else s.push(f)}}class ee{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function Q(s){return/^[\s\xa0]*$/.test(s)}function X(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function H(s){return H[" "](s),s}H[" "]=function(){};var he=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function ge(s,a,c){for(const f in s)a.call(c,s[f],f,s)}function I(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function p(s){const a={};for(const c in s)a[c]=s[c];return a}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(s,a){let c,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(c in f)s[c]=f[c];for(let A=0;A<y.length;A++)c=y[A],Object.prototype.hasOwnProperty.call(f,c)&&(s[c]=f[c])}}function b(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function C(s){u.setTimeout(()=>{throw s},0)}function m(){var s=rt;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class qe{constructor(){this.h=this.g=null}add(a,c){const f=Bt.get();f.set(a,c),this.h?this.h.next=f:this.g=f,this.h=f}}var Bt=new ee(()=>new be,s=>s.reset());class be{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,ie=!1,rt=new qe,ln=()=>{const s=u.Promise.resolve(void 0);ue=()=>{s.then(Tt)}};var Tt=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(c){C(c)}var a=Bt;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}ie=!1};function ve(){this.s=this.s,this.C=this.C}ve.prototype.s=!1,ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var Qs=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return s}();function cn(s,a){if(we.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(he){e:{try{H(a.nodeName);var T=!0;break e}catch{}T=!1}T||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:un[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&cn.aa.h.call(this)}}U(cn,we);var un={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Ct="closure_listenable_"+(1e6*Math.random()|0),ei=0;function Bi(s,a,c,f,T){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!f,this.ha=T,this.key=++ei,this.da=this.fa=!1}function ft(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function ti(s){this.src=s,this.g={},this.h=0}ti.prototype.add=function(s,a,c,f,T){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var L=v(s,a,f,T);return-1<L?(a=s[L],c||(a.fa=!1)):(a=new Bi(a,this.src,A,!!f,T),a.fa=c,s.push(a)),a};function g(s,a){var c=a.type;if(c in s.g){var f=s.g[c],T=Array.prototype.indexOf.call(f,a,void 0),A;(A=0<=T)&&Array.prototype.splice.call(f,T,1),A&&(ft(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function v(s,a,c,f){for(var T=0;T<s.length;++T){var A=s[T];if(!A.da&&A.listener==a&&A.capture==!!c&&A.ha==f)return T}return-1}var R="closure_lm_"+(1e6*Math.random()|0),D={};function O(s,a,c,f,T){if(Array.isArray(a)){for(var A=0;A<a.length;A++)O(s,a[A],c,f,T);return null}return c=z(c),s&&s[Ct]?s.K(a,c,d(f)?!!f.capture:!1,T):k(s,a,c,!1,f,T)}function k(s,a,c,f,T,A){if(!a)throw Error("Invalid event type");var L=d(T)?!!T.capture:!!T,fe=F(s);if(fe||(s[R]=fe=new ti(s)),c=fe.add(a,c,f,L,A),c.proxy)return c;if(f=j(),c.proxy=f,f.src=s,f.listener=c,s.addEventListener)Qs||(T=L),T===void 0&&(T=!1),s.addEventListener(a.toString(),f,T);else if(s.attachEvent)s.attachEvent(N(a.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function j(){function s(c){return a.call(s.src,s.listener,c)}const a=B;return s}function M(s,a,c,f,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)M(s,a[A],c,f,T);else f=d(f)?!!f.capture:!!f,c=z(c),s&&s[Ct]?(s=s.i,a=String(a).toString(),a in s.g&&(A=s.g[a],c=v(A,c,f,T),-1<c&&(ft(A[c]),Array.prototype.splice.call(A,c,1),A.length==0&&(delete s.g[a],s.h--)))):s&&(s=F(s))&&(a=s.g[a.toString()],s=-1,a&&(s=v(a,c,f,T)),(c=-1<s?a[s]:null)&&x(c))}function x(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Ct])g(a.i,s);else{var c=s.type,f=s.proxy;a.removeEventListener?a.removeEventListener(c,f,s.capture):a.detachEvent?a.detachEvent(N(c),f):a.addListener&&a.removeListener&&a.removeListener(f),(c=F(a))?(g(c,s),c.h==0&&(c.src=null,a[R]=null)):ft(s)}}}function N(s){return s in D?D[s]:D[s]="on"+s}function B(s,a){if(s.da)s=!0;else{a=new cn(a,this);var c=s.listener,f=s.ha||s.src;s.fa&&x(s),s=c.call(f,a)}return s}function F(s){return s=s[R],s instanceof ti?s:null}var V="__closure_events_fn_"+(1e9*Math.random()>>>0);function z(s){return typeof s=="function"?s:(s[V]||(s[V]=function(a){return s.handleEvent(a)}),s[V])}function W(){ve.call(this),this.i=new ti(this),this.M=this,this.F=null}U(W,ve),W.prototype[Ct]=!0,W.prototype.removeEventListener=function(s,a,c,f){M(this,s,a,c,f)};function Y(s,a){var c,f=s.F;if(f)for(c=[];f;f=f.F)c.push(f);if(s=s.M,f=a.type||a,typeof a=="string")a=new we(a,s);else if(a instanceof we)a.target=a.target||s;else{var T=a;a=new we(f,s),w(a,T)}if(T=!0,c)for(var A=c.length-1;0<=A;A--){var L=a.g=c[A];T=te(L,f,!0,a)&&T}if(L=a.g=s,T=te(L,f,!0,a)&&T,T=te(L,f,!1,a)&&T,c)for(A=0;A<c.length;A++)L=a.g=c[A],T=te(L,f,!1,a)&&T}W.prototype.N=function(){if(W.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],f=0;f<c.length;f++)ft(c[f]);delete s.g[a],s.h--}}this.F=null},W.prototype.K=function(s,a,c,f){return this.i.add(String(s),a,!1,c,f)},W.prototype.L=function(s,a,c,f){return this.i.add(String(s),a,!0,c,f)};function te(s,a,c,f){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,A=0;A<a.length;++A){var L=a[A];if(L&&!L.da&&L.capture==c){var fe=L.listener,Ee=L.ha||L.src;L.fa&&g(s.i,L),T=fe.call(Ee,f)!==!1&&T}}return T&&!f.defaultPrevented}function Oe(s,a,c){if(typeof s=="function")c&&(s=S(s,c));else if(s&&typeof s.handleEvent=="function")s=S(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(s,a||0)}function Te(s){s.g=Oe(()=>{s.g=null,s.i&&(s.i=!1,Te(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Qe extends ve{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Te(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ke(s){ve.call(this),this.h=s,this.g={}}U(ke,ve);var Wt=[];function ni(s){ge(s.g,function(a,c){this.g.hasOwnProperty(c)&&x(a)},s),s.g={}}ke.prototype.N=function(){ke.aa.N.call(this),ni(this)},ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ce=u.JSON.stringify,et=u.JSON.parse,Wi=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function er(){}er.prototype.h=null;function Xo(s){return s.h||(s.h=s.i())}function zh(){}var ii={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tr(){we.call(this,"d")}U(tr,we);function nr(){we.call(this,"c")}U(nr,we);var An={},Yo=null;function ir(){return Yo=Yo||new W}An.La="serverreachability";function Zo(s){we.call(this,An.La,s)}U(Zo,we);function si(s){const a=ir();Y(a,new Zo(a))}An.STAT_EVENT="statevent";function Qo(s,a){we.call(this,An.STAT_EVENT,s),this.stat=a}U(Qo,we);function Le(s){const a=ir();Y(a,new Qo(a,s))}An.Ma="timingevent";function ea(s,a){we.call(this,An.Ma,s),this.size=a}U(ea,we);function ri(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},a)}function oi(){this.g=!0}oi.prototype.xa=function(){this.g=!1};function Kh(s,a,c,f,T,A){s.info(function(){if(s.g)if(A)for(var L="",fe=A.split("&"),Ee=0;Ee<fe.length;Ee++){var se=fe[Ee].split("=");if(1<se.length){var De=se[0];se=se[1];var Ne=De.split("_");L=2<=Ne.length&&Ne[1]=="type"?L+(De+"="+se+"&"):L+(De+"=redacted&")}}else L=null;else L=A;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+a+`
`+c+`
`+L})}function Gh(s,a,c,f,T,A,L){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+a+`
`+c+`
`+A+" "+L})}function Rn(s,a,c,f){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Jh(s,c)+(f?" "+f:"")})}function qh(s,a){s.info(function(){return"TIMEOUT: "+a})}oi.prototype.info=function(){};function Jh(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var f=c[s];if(!(2>f.length)){var T=f[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var L=1;L<T.length;L++)T[L]=""}}}}return Ce(c)}catch{return a}}var sr={NO_ERROR:0,TIMEOUT:8},Xh={},rr;function zi(){}U(zi,er),zi.prototype.g=function(){return new XMLHttpRequest},zi.prototype.i=function(){return{}},rr=new zi;function zt(s,a,c,f){this.j=s,this.i=a,this.l=c,this.R=f||1,this.U=new ke(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ta}function ta(){this.i=null,this.g="",this.h=!1}var na={},or={};function ar(s,a,c){s.L=1,s.v=Ji(Et(a)),s.m=c,s.P=!0,ia(s,null)}function ia(s,a){s.F=Date.now(),Ki(s),s.A=Et(s.v);var c=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),_a(c.i,"t",f),s.C=0,c=s.j.J,s.h=new ta,s.g=Ma(s.j,c?a:null,!s.m),0<s.O&&(s.M=new Qe(S(s.Y,s,s.g),s.O)),a=s.U,c=s.g,f=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(Wt[0]=T.toString()),T=Wt);for(var A=0;A<T.length;A++){var L=O(c,T[A],f||a.handleEvent,!1,a.h||a);if(!L)break;a.g[L.key]=L}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),si(),Kh(s.i,s.u,s.A,s.l,s.R,s.m)}zt.prototype.ca=function(s){s=s.target;const a=this.M;a&&St(s)==3?a.j():this.Y(s)},zt.prototype.Y=function(s){try{if(s==this.g)e:{const Ne=St(this.g);var a=this.g.Ba();const kn=this.g.Z();if(!(3>Ne)&&(Ne!=3||this.g&&(this.h.h||this.g.oa()||Ca(this.g)))){this.J||Ne!=4||a==7||(a==8||0>=kn?si(3):si(2)),lr(this);var c=this.g.Z();this.X=c;t:if(sa(this)){var f=Ca(this.g);s="";var T=f.length,A=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),ai(this);var L="";break t}this.h.i=new u.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(f[a],{stream:!(A&&a==T-1)});f.length=0,this.h.g+=s,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=c==200,Gh(this.i,this.u,this.A,this.l,this.R,Ne,c),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,Ee=this.g;if((fe=Ee.g?Ee.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(fe)){var se=fe;break t}}se=null}if(c=se)Rn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cr(this,c);else{this.o=!1,this.s=3,Le(12),hn(this),ai(this);break e}}if(this.P){c=!0;let ot;for(;!this.J&&this.C<L.length;)if(ot=Yh(this,L),ot==or){Ne==4&&(this.s=4,Le(14),c=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(ot==na){this.s=4,Le(15),Rn(this.i,this.l,L,"[Invalid Chunk]"),c=!1;break}else Rn(this.i,this.l,ot,null),cr(this,ot);if(sa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||L.length!=0||this.h.h||(this.s=1,Le(16),c=!1),this.o=this.o&&c,!c)Rn(this.i,this.l,L,"[Invalid Chunked Response]"),hn(this),ai(this);else if(0<L.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),gr(De),De.M=!0,Le(11))}}else Rn(this.i,this.l,L,null),cr(this,L);Ne==4&&hn(this),this.o&&!this.J&&(Ne==4?ka(this.j,this):(this.o=!1,Ki(this)))}else gf(this.g),c==400&&0<L.indexOf("Unknown SID")?(this.s=3,Le(12)):(this.s=0,Le(13)),hn(this),ai(this)}}}catch{}finally{}};function sa(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Yh(s,a){var c=s.C,f=a.indexOf(`
`,c);return f==-1?or:(c=Number(a.substring(c,f)),isNaN(c)?na:(f+=1,f+c>a.length?or:(a=a.slice(f,f+c),s.C=f+c,a)))}zt.prototype.cancel=function(){this.J=!0,hn(this)};function Ki(s){s.S=Date.now()+s.I,ra(s,s.I)}function ra(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=ri(S(s.ba,s),a)}function lr(s){s.B&&(u.clearTimeout(s.B),s.B=null)}zt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(qh(this.i,this.A),this.L!=2&&(si(),Le(17)),hn(this),this.s=2,ai(this)):ra(this,this.S-s)};function ai(s){s.j.G==0||s.J||ka(s.j,s)}function hn(s){lr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,ni(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function cr(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||ur(c.h,s))){if(!s.K&&ur(c.h,s)&&c.G==3){try{var f=c.Da.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)ts(c),Qi(c);else break e;pr(c),Le(18)}}else c.za=T[1],0<c.za-c.T&&37500>T[2]&&c.F&&c.v==0&&!c.C&&(c.C=ri(S(c.Za,c),6e3));if(1>=la(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else dn(c,11)}else if((s.K||c.g==s)&&ts(c),!Q(a))for(T=c.Da.g.parse(a),a=0;a<T.length;a++){let se=T[a];if(c.T=se[0],se=se[1],c.G==2)if(se[0]=="c"){c.K=se[1],c.ia=se[2];const De=se[3];De!=null&&(c.la=De,c.j.info("VER="+c.la));const Ne=se[4];Ne!=null&&(c.Aa=Ne,c.j.info("SVER="+c.Aa));const kn=se[5];kn!=null&&typeof kn=="number"&&0<kn&&(f=1.5*kn,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const ot=s.g;if(ot){const ns=ot.g?ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ns){var A=f.h;A.g||ns.indexOf("spdy")==-1&&ns.indexOf("quic")==-1&&ns.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(hr(A,A.h),A.h=null))}if(f.D){const mr=ot.g?ot.g.getResponseHeader("X-HTTP-Session-Id"):null;mr&&(f.ya=mr,pe(f.I,f.D,mr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var L=s;if(f.qa=xa(f,f.J?f.ia:null,f.W),L.K){ca(f.h,L);var fe=L,Ee=f.L;Ee&&(fe.I=Ee),fe.B&&(lr(fe),Ki(fe)),f.g=L}else Pa(f);0<c.i.length&&es(c)}else se[0]!="stop"&&se[0]!="close"||dn(c,7);else c.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?dn(c,7):dr(c):se[0]!="noop"&&c.l&&c.l.ta(se),c.v=0)}}si(4)}catch{}}var Zh=class{constructor(s,a){this.g=s,this.map=a}};function oa(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function aa(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function la(s){return s.h?1:s.g?s.g.size:0}function ur(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function hr(s,a){s.g?s.g.add(a):s.h=a}function ca(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}oa.prototype.cancel=function(){if(this.i=ua(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ua(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return $(s.i)}function Qh(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],c=s.length,f=0;f<c;f++)a.push(s[f]);return a}a=[],c=0;for(f in s)a[c++]=s[f];return a}function ef(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const f in s)a[c++]=f;return a}}}function ha(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=ef(s),f=Qh(s),T=f.length,A=0;A<T;A++)a.call(void 0,f[A],c&&c[A],s)}var fa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tf(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var f=s[c].indexOf("="),T=null;if(0<=f){var A=s[c].substring(0,f);T=s[c].substring(f+1)}else A=s[c];a(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function fn(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof fn){this.h=s.h,Gi(this,s.j),this.o=s.o,this.g=s.g,qi(this,s.s),this.l=s.l;var a=s.i,c=new ui;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),da(this,c),this.m=s.m}else s&&(a=String(s).match(fa))?(this.h=!1,Gi(this,a[1]||"",!0),this.o=li(a[2]||""),this.g=li(a[3]||"",!0),qi(this,a[4]),this.l=li(a[5]||"",!0),da(this,a[6]||"",!0),this.m=li(a[7]||"")):(this.h=!1,this.i=new ui(null,this.h))}fn.prototype.toString=function(){var s=[],a=this.j;a&&s.push(ci(a,pa,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(ci(a,pa,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(ci(c,c.charAt(0)=="/"?rf:sf,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",ci(c,af)),s.join("")};function Et(s){return new fn(s)}function Gi(s,a,c){s.j=c?li(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function qi(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function da(s,a,c){a instanceof ui?(s.i=a,lf(s.i,s.h)):(c||(a=ci(a,of)),s.i=new ui(a,s.h))}function pe(s,a,c){s.i.set(a,c)}function Ji(s){return pe(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function li(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function ci(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,nf),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function nf(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var pa=/[#\/\?@]/g,sf=/[#\?:]/g,rf=/[#\?]/g,of=/[#\?@]/g,af=/#/g;function ui(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Kt(s){s.g||(s.g=new Map,s.h=0,s.i&&tf(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}t=ui.prototype,t.add=function(s,a){Kt(this),this.i=null,s=Pn(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function ga(s,a){Kt(s),a=Pn(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function ma(s,a){return Kt(s),a=Pn(s,a),s.g.has(a)}t.forEach=function(s,a){Kt(this),this.g.forEach(function(c,f){c.forEach(function(T){s.call(a,T,f,this)},this)},this)},t.na=function(){Kt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let f=0;f<a.length;f++){const T=s[f];for(let A=0;A<T.length;A++)c.push(a[f])}return c},t.V=function(s){Kt(this);let a=[];if(typeof s=="string")ma(this,s)&&(a=a.concat(this.g.get(Pn(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},t.set=function(s,a){return Kt(this),this.i=null,s=Pn(this,s),ma(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},t.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function _a(s,a,c){ga(s,a),0<c.length&&(s.i=null,s.g.set(Pn(s,a),$(c)),s.h+=c.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var f=a[c];const A=encodeURIComponent(String(f)),L=this.V(f);for(f=0;f<L.length;f++){var T=A;L[f]!==""&&(T+="="+encodeURIComponent(String(L[f]))),s.push(T)}}return this.i=s.join("&")};function Pn(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function lf(s,a){a&&!s.j&&(Kt(s),s.i=null,s.g.forEach(function(c,f){var T=f.toLowerCase();f!=T&&(ga(this,f),_a(this,T,c))},s)),s.j=a}function cf(s,a){const c=new oi;if(u.Image){const f=new Image;f.onload=P(Gt,c,"TestLoadImage: loaded",!0,a,f),f.onerror=P(Gt,c,"TestLoadImage: error",!1,a,f),f.onabort=P(Gt,c,"TestLoadImage: abort",!1,a,f),f.ontimeout=P(Gt,c,"TestLoadImage: timeout",!1,a,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else a(!1)}function uf(s,a){const c=new oi,f=new AbortController,T=setTimeout(()=>{f.abort(),Gt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:f.signal}).then(A=>{clearTimeout(T),A.ok?Gt(c,"TestPingServer: ok",!0,a):Gt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Gt(c,"TestPingServer: error",!1,a)})}function Gt(s,a,c,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(c)}catch{}}function hf(){this.g=new Wi}function ff(s,a,c){const f=c||"";try{ha(s,function(T,A){let L=T;d(T)&&(L=Ce(T)),a.push(f+A+"="+encodeURIComponent(L))})}catch(T){throw a.push(f+"type="+encodeURIComponent("_badmap")),T}}function Xi(s){this.l=s.Ub||null,this.j=s.eb||!1}U(Xi,er),Xi.prototype.g=function(){return new Yi(this.l,this.j)},Xi.prototype.i=function(s){return function(){return s}}({});function Yi(s,a){W.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(Yi,W),t=Yi.prototype,t.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,fi(this)},t.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hi(this)),this.readyState=0},t.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,fi(this)),this.g&&(this.readyState=3,fi(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ya(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function ya(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}t.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?hi(this):fi(this),this.readyState==3&&ya(this)}},t.Ra=function(s){this.g&&(this.response=this.responseText=s,hi(this))},t.Qa=function(s){this.g&&(this.response=s,hi(this))},t.ga=function(){this.g&&hi(this)};function hi(s){s.readyState=4,s.l=null,s.j=null,s.v=null,fi(s)}t.setRequestHeader=function(s,a){this.u.append(s,a)},t.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function fi(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function va(s){let a="";return ge(s,function(c,f){a+=f,a+=":",a+=c,a+=`\r
`}),a}function fr(s,a,c){e:{for(f in c){var f=!1;break e}f=!0}f||(c=va(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):pe(s,a,c))}function _e(s){W.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(_e,W);var df=/^https?$/i,pf=["POST","PUT"];t=_e.prototype,t.Ha=function(s){this.J=s},t.ea=function(s,a,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rr.g(),this.v=this.o?Xo(this.o):Xo(rr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){wa(this,A);return}if(s=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)c.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())c.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),T=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(pf,a,void 0))||f||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,L]of c)this.g.setRequestHeader(A,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ta(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){wa(this,A)}};function wa(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Ia(s),Zi(s)}function Ia(s){s.A||(s.A=!0,Y(s,"complete"),Y(s,"error"))}t.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Y(this,"complete"),Y(this,"abort"),Zi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zi(this,!0)),_e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ba(this):this.bb())},t.bb=function(){ba(this)};function ba(s){if(s.h&&typeof l<"u"&&(!s.v[1]||St(s)!=4||s.Z()!=2)){if(s.u&&St(s)==4)Oe(s.Ea,0,s);else if(Y(s,"readystatechange"),St(s)==4){s.h=!1;try{const L=s.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var c;if(!(c=a)){var f;if(f=L===0){var T=String(s.D).match(fa)[1]||null;!T&&u.self&&u.self.location&&(T=u.self.location.protocol.slice(0,-1)),f=!df.test(T?T.toLowerCase():"")}c=f}if(c)Y(s,"complete"),Y(s,"success");else{s.m=6;try{var A=2<St(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",Ia(s)}}finally{Zi(s)}}}}function Zi(s,a){if(s.g){Ta(s);const c=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||Y(s,"ready");try{c.onreadystatechange=f}catch{}}}function Ta(s){s.I&&(u.clearTimeout(s.I),s.I=null)}t.isActive=function(){return!!this.g};function St(s){return s.g?s.g.readyState:0}t.Z=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),et(a)}};function Ca(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function gf(s){const a={};s=(s.g&&2<=St(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(Q(s[f]))continue;var c=b(s[f]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=a[T]||[];a[T]=A,A.push(c)}I(a,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function di(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function Ea(s){this.Aa=0,this.i=[],this.j=new oi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=di("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=di("baseRetryDelayMs",5e3,s),this.cb=di("retryDelaySeedMs",1e4,s),this.Wa=di("forwardChannelMaxRetries",2,s),this.wa=di("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new oa(s&&s.concurrentRequestLimit),this.Da=new hf,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ea.prototype,t.la=8,t.G=1,t.connect=function(s,a,c,f){Le(0),this.W=s,this.H=a||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=xa(this,null,this.W),es(this)};function dr(s){if(Sa(s),s.G==3){var a=s.U++,c=Et(s.I);if(pe(c,"SID",s.K),pe(c,"RID",a),pe(c,"TYPE","terminate"),pi(s,c),a=new zt(s,s.j,a),a.L=2,a.v=Ji(Et(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=Ma(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Ki(a)}Na(s)}function Qi(s){s.g&&(gr(s),s.g.cancel(),s.g=null)}function Sa(s){Qi(s),s.u&&(u.clearTimeout(s.u),s.u=null),ts(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function es(s){if(!aa(s.h)&&!s.s){s.s=!0;var a=s.Ga;ue||ln(),ie||(ue(),ie=!0),rt.add(a,s),s.B=0}}function mf(s,a){return la(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=ri(S(s.Ga,s,a),Da(s,s.B)),s.B++,!0)}t.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new zt(this,this.j,s);let A=this.o;if(this.S&&(A?(A=p(A),w(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)e:{for(var a=0,c=0;c<this.i.length;c++){t:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(a+=f,4096<a){a=c;break e}if(a===4096||c===this.i.length-1){a=c+1;break e}}a=1e3}else a=1e3;a=Ra(this,T,a),c=Et(this.I),pe(c,"RID",s),pe(c,"CVER",22),this.D&&pe(c,"X-HTTP-Session-Id",this.D),pi(this,c),A&&(this.O?a="headers="+encodeURIComponent(String(va(A)))+"&"+a:this.m&&fr(c,this.m,A)),hr(this.h,T),this.Ua&&pe(c,"TYPE","init"),this.P?(pe(c,"$req",a),pe(c,"SID","null"),T.T=!0,ar(T,c,null)):ar(T,c,a),this.G=2}}else this.G==3&&(s?Aa(this,s):this.i.length==0||aa(this.h)||Aa(this))};function Aa(s,a){var c;a?c=a.l:c=s.U++;const f=Et(s.I);pe(f,"SID",s.K),pe(f,"RID",c),pe(f,"AID",s.T),pi(s,f),s.m&&s.o&&fr(f,s.m,s.o),c=new zt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Ra(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),hr(s.h,c),ar(c,f,a)}function pi(s,a){s.H&&ge(s.H,function(c,f){pe(a,f,c)}),s.l&&ha({},function(c,f){pe(a,f,c)})}function Ra(s,a,c){c=Math.min(s.i.length,c);var f=s.l?S(s.l.Na,s.l,s):null;e:{var T=s.i;let A=-1;for(;;){const L=["count="+c];A==-1?0<c?(A=T[0].g,L.push("ofs="+A)):A=0:L.push("ofs="+A);let fe=!0;for(let Ee=0;Ee<c;Ee++){let se=T[Ee].g;const De=T[Ee].map;if(se-=A,0>se)A=Math.max(0,T[Ee].g-100),fe=!1;else try{ff(De,L,"req"+se+"_")}catch{f&&f(De)}}if(fe){f=L.join("&");break e}}}return s=s.i.splice(0,c),a.D=s,f}function Pa(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;ue||ln(),ie||(ue(),ie=!0),rt.add(a,s),s.v=0}}function pr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=ri(S(s.Fa,s),Da(s,s.v)),s.v++,!0)}t.Fa=function(){if(this.u=null,Oa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=ri(S(this.ab,this),s)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Le(10),Qi(this),Oa(this))};function gr(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Oa(s){s.g=new zt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Et(s.qa);pe(a,"RID","rpc"),pe(a,"SID",s.K),pe(a,"AID",s.T),pe(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&pe(a,"TO",s.ja),pe(a,"TYPE","xmlhttp"),pi(s,a),s.m&&s.o&&fr(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=Ji(Et(a)),c.m=null,c.P=!0,ia(c,s)}t.Za=function(){this.C!=null&&(this.C=null,Qi(this),pr(this),Le(19))};function ts(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function ka(s,a){var c=null;if(s.g==a){ts(s),gr(s),s.g=null;var f=2}else if(ur(s.h,a))c=a.D,ca(s.h,a),f=1;else return;if(s.G!=0){if(a.o)if(f==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;f=ir(),Y(f,new ea(f,c)),es(s)}else Pa(s);else if(T=a.s,T==3||T==0&&0<a.X||!(f==1&&mf(s,a)||f==2&&pr(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),T){case 1:dn(s,5);break;case 4:dn(s,10);break;case 3:dn(s,6);break;default:dn(s,2)}}}function Da(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function dn(s,a){if(s.j.info("Error code "+a),a==2){var c=S(s.fb,s),f=s.Xa;const T=!f;f=new fn(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Gi(f,"https"),Ji(f),T?cf(f.toString(),c):uf(f.toString(),c)}else Le(2);s.G=0,s.l&&s.l.sa(a),Na(s),Sa(s)}t.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function Na(s){if(s.G=0,s.ka=[],s.l){const a=ua(s.h);(a.length!=0||s.i.length!=0)&&(J(s.ka,a),J(s.ka,s.i),s.h.i.length=0,$(s.i),s.i.length=0),s.l.ra()}}function xa(s,a,c){var f=c instanceof fn?Et(c):new fn(c);if(f.g!="")a&&(f.g=a+"."+f.g),qi(f,f.s);else{var T=u.location;f=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var A=new fn(null);f&&Gi(A,f),a&&(A.g=a),T&&qi(A,T),c&&(A.l=c),f=A}return c=s.D,a=s.ya,c&&a&&pe(f,c,a),pe(f,"VER",s.la),pi(s,f),f}function Ma(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new _e(new Xi({eb:c})):new _e(s.pa),a.Ha(s.J),a}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function La(){}t=La.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function tt(s,a){W.call(this),this.g=new Ea(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!Q(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!Q(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new On(this)}U(tt,W),tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tt.prototype.close=function(){dr(this.g)},tt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=Ce(s),s=c);a.i.push(new Zh(a.Ya++,s)),a.G==3&&es(a)},tt.prototype.N=function(){this.g.l=null,delete this.j,dr(this.g),delete this.g,tt.aa.N.call(this)};function Ua(s){tr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){e:{for(const c in a){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}U(Ua,tr);function Fa(){nr.call(this),this.status=1}U(Fa,nr);function On(s){this.g=s}U(On,La),On.prototype.ua=function(){Y(this.g,"a")},On.prototype.ta=function(s){Y(this.g,new Ua(s))},On.prototype.sa=function(s){Y(this.g,new Fa)},On.prototype.ra=function(){Y(this.g,"b")},tt.prototype.send=tt.prototype.o,tt.prototype.open=tt.prototype.m,tt.prototype.close=tt.prototype.close,sr.NO_ERROR=0,sr.TIMEOUT=8,sr.HTTP_ERROR=6,Xh.COMPLETE="complete",zh.EventType=ii,ii.OPEN="a",ii.CLOSE="b",ii.ERROR="c",ii.MESSAGE="d",W.prototype.listen=W.prototype.K,_e.prototype.listenOnce=_e.prototype.L,_e.prototype.getLastError=_e.prototype.Ka,_e.prototype.getLastErrorCode=_e.prototype.Ba,_e.prototype.getStatus=_e.prototype.Z,_e.prototype.getResponseJson=_e.prototype.Oa,_e.prototype.getResponseText=_e.prototype.oa,_e.prototype.send=_e.prototype.ea,_e.prototype.setWithCredentials=_e.prototype.Ha}).apply(typeof as<"u"?as:typeof self<"u"?self:typeof window<"u"?window:{});const ec="@firebase/firestore",tc="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new qs("@firebase/firestore");function lt(t,...e){if(Xn.logLevel<=ce.DEBUG){const n=e.map(Go);Xn.debug(`Firestore (${Vi}): ${t}`,...n)}}function jh(t,...e){if(Xn.logLevel<=ce.ERROR){const n=e.map(Go);Xn.error(`Firestore (${Vi}): ${t}`,...n)}}function J2(t,...e){if(Xn.logLevel<=ce.WARN){const n=e.map(Go);Xn.warn(`Firestore (${Vi}): ${t}`,...n)}}function Go(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,Hh(t,i,n)}function Hh(t,e,n){let i=`FIRESTORE (${Vi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw jh(i),new Error(i)}function Si(t,e,n,i){let r="Unexpected state";typeof n=="string"?r=n:i=n,t||Hh(e,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Ke extends ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class X2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class Y2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Z2{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Si(this.o===void 0,42304);let i=this.i;const r=h=>this.i!==i?(i=this.i,n(h)):Promise.resolve();let o=new Ai;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ai,e.enqueueRetryable(()=>r(this.currentUser))};const l=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},u=h=>{lt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(lt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ai)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(lt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Si(typeof i.accessToken=="string",31837,{l:i}),new Vh(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Si(e===null||typeof e=="string",2055,{h:e}),new Fe(e)}}class Q2{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class e_{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new Q2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class t_{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Si(this.o===void 0,3512);const i=o=>{o.error!=null&&lt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,lt("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const r=o=>{lt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):lt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new nc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Si(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new nc(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function n_(t){return t.name==="IndexedDbTransactionError"}const ao="(default)";class xs{constructor(e,n){this.projectId=e,this.database=n||ao}static empty(){return new xs("","")}get isDefaultDatabase(){return this.database===ao}isEqual(e){return e instanceof xs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ic,ne;(ne=ic||(ic={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Fh([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=1048576;function Fr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n,i=1e3,r=1.5,o=6e4){this.xi=e,this.timerId=n,this.A_=i,this.R_=r,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),i=Math.max(0,Date.now()-this.g_),r=Math.max(0,n-i);r>0&&lt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,r,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,i,r,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=o,this.deferred=new Ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,o){const l=Date.now()+i,u=new qo(e,n,l,r,o);return u.start(i),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ke(ze.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var sc,rc;(rc=sc||(sc={})).xa="default",rc.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Map;function a_(t,e,n,i){if(e===!0&&i===!0)throw new Ke(ze.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function l_(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$h(12329,{type:typeof t})}function c_(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ke(ze.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=l_(t);throw new Ke(ze.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="firestore.googleapis.com",ac=!0;class lc{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Ke(ze.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bh,this.ssl=ac}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ac;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=i_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<s_)throw new Ke(ze.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}a_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=o_((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Ke(ze.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Ke(ze.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Ke(ze.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wh{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ke(ze.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ke(ze.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new X2;switch(i.type){case"firstParty":return new e_(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Ke(ze.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=oc.get(n);i&&(lt("ComponentProvider","Removing Datastore"),oc.delete(n),i.terminate())}(this),Promise.resolve()}}function u_(t,e,n,i={}){var r;t=c_(t,Wh);const o=Ui(e),l=t._getSettings(),u=Object.assign(Object.assign({},l),{emulatorOptions:t._getEmulatorOptions()}),h=`${e}:${n}`;o&&(Ru(`https://${h}`),Pu("Firestore",!0)),l.host!==Bh&&l.host!==h&&J2("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},l),{host:h,ssl:o,emulatorOptions:i});if(!on(d,u)&&(t._setSettings(d),i.mockUserToken)){let _,E;if(typeof i.mockUserToken=="string")_=i.mockUserToken,E=Fe.MOCK_USER;else{_=sm(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const S=i.mockUserToken.sub||i.mockUserToken.user_id;if(!S)throw new Ke(ze.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Fe(S)}t._authCredentials=new Y2(new Vh(_,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="AsyncQueue";class uc{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new r_(this,"async_queue_retry"),this.rc=()=>{const i=Fr();i&&lt(cc,"Visibility state changed to "+i.visibilityState),this.x_.b_()},this.sc=e;const n=Fr();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=Fr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new Ai;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!n_(e))throw e;lt(cc,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(i=>{throw this.Xu=i,this.ec=!1,jh("INTERNAL UNHANDLED ERROR: ",hc(i)),i}).then(i=>(this.ec=!1,i))));return this.sc=n,n}enqueueAfterDelay(e,n,i){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const r=qo.createAndSchedule(this,e,n,i,o=>this.uc(o));return this.Zu.push(r),r}oc(){this.Xu&&$h(47125,{cc:hc(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function hc(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class h_ extends Wh{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new uc,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new uc(e),this._firestoreClient=void 0,await e}}}function f_(t,e){const n=typeof t=="object"?t:ko(),i=typeof t=="string"?t:ao,r=Sn(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const o=nm("firestore");o&&u_(r,...o)}return r}(function(e,n=!0){(function(r){Vi=r})(Zn),It(new ut("firestore",(i,{instanceIdentifier:r,options:o})=>{const l=i.getProvider("app").getImmediate(),u=new h_(new Z2(i.getProvider("auth-internal")),new t_(l,i.getProvider("app-check-internal")),function(d,_){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Ke(ze.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xs(d.options.projectId,_)}(l,r),l);return o=Object.assign({useFetchStreams:n},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),st(ec,tc,e),st(ec,tc,"esm2017")})();const d_={apiKey:"AIzaSyDVzSGo1iGgrX9XWzJokJewh06dya0yIok",authDomain:"weather-69f94.firebaseapp.com",projectId:"weather-69f94",storageBucket:"weather-69f94.appspot.com",messagingSenderId:"655303374113",appId:"1:655303374113:web:e5f107463b572405c6ba60",measurementId:"G-EYN7VQHT7B"},Jo=Lu(d_);G0(Jo);G2(Jo);f_(Jo);const p_={class:"wrapper"},g_={class:"right"},m_={__name:"App",setup(t){let e=Mn();const n=Mn();let i=Mn(0);const r=Mn("Самара");Yc(Ro,r),cs(r,()=>{l(r.value)}),Kc(()=>{l(r.value)});const o="1fb86202199e4022ad0205736251606",l=async u=>{const h=new URLSearchParams({q:u,lang:"ru",key:o,days:4}),d=await fetch(`${Vp}/forecast.json?${h.toString()}`);if(d.status!=200){n.value=await d.json(),e.value=null;return}n.value=null,e.value=await d.json(),console.log(e.value)};return(u,h)=>(oe(),Ie("div",p_,[q("div",null,[yn(e)?(oe(),Ye(yg,{key:0,dayData:yn(e).forecast.forecastday[yn(i)]},null,8,["dayData"])):qn("",!0)]),q("div",g_,[Re(Gg,{data:yn(e),error:n.value,activeIndex:yn(i),onSelectIndex:h[0]||(h[0]=d=>Pe(i)?i.value=d:i=d)},null,8,["data","error","activeIndex"])])]))}},__=bt(m_,[["__scopeId","data-v-0d07b9e7"]]);Lp(__).mount("#app");
