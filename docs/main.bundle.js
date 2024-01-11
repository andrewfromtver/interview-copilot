(()=>{"use strict";var e={902:(e,n,t)=>{t.d(n,{Z:()=>p});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),c=t(667),s=t.n(c),l=new URL(t(632),t.b),d=a()(r()),u=s()(l);d.push([e.id,`:root {\n    --button-width: 48px;\n    --button-height: 24px;\n    --toggle-diameter: 20px;\n    --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);\n    --toggle-shadow-offset: 10px;\n    --toggle-wider: 24px;\n    --color-grey: #E9E9E9;\n    --color-dark-grey: #39393D;\n    --color-green: #30D158;\n}\n\n* {\n    font-family: sans-serif;\n}\n\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-image: url(${u});\n}\n\n#recognized-text {\n    width: calc(100% - 32px);\n    border-radius: 8px;\n}\n\n#text-question-btn {\n    position: fixed;\n    top: 0;\n    left: 0;\n    margin: 6px 12px;\n    width: 36px;\n    height: 36px;\n    box-shadow: 0 0 4px #333;\n    border-radius: 8px;\n    padding: 6px 0 0 0;\n}\n\n#voice-lang, #voice-mode {\n    background-color: #fff;\n    color: #333;\n    border: none;\n    outline: none;\n    width: 56px;\n    position: fixed;\n    top: 0;\n    right: 0;\n    padding: 4px 8px;\n    margin: 12px;\n    border: none;\n    outline: none;\n    border-radius: 8px;\n    box-shadow: 0 0 4px #333;\n    cursor: pointer;\n}\n\n#voice-mode {\n    margin-right: 80px;\n    \n}\n\ntextarea {\n    width: calc(100% - 40px);\n    resize: vertical;\n    min-height: 128px;\n    background-color: black;\n    color: #fff;\n    padding: 16px;\n    border-radius: 8px;\n}\n\nbutton {\n    padding: 16px;\n    border-radius: 8px;\n    border: none;\n    background-color: #fff;\n    color: #333;\n    cursor: pointer;\n}\n\nbutton:hover {\n    box-shadow: 0 0 16px #777;\n}\n\nbutton:active {\n    background: none;\n    color: #fff;\n    box-shadow: 0 0 2px #fff;\n}\n\n#app {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n#recognition-indicator {\n    position: fixed;\n    top: o;\n    left: 0;\n    background-color: #333;\n    height: 50px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    border-radius: 0 0 8px 8px;\n    box-shadow: 0 0 16px #333;\n    padding-left: 56px;\n}\n\n#reload_question_btn, #cancel_question_btn {\n    margin-left: 16px;\n}\n\n.donate_btn {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    margin: 8px;\n    height: 32px;\n    width: 216px;\n}\n\n.speech-placeholder {\n    border-radius: 8px;\n    background-color: lightgreen;\n    margin: 8px;\n    padding: 2px 16px;\n    text-align: center;\n    color: #333;\n    font-size: 24px;\n}\n\n.card {\n    border-radius: 8px;\n    background-color: #333;\n    box-shadow: 0 0 16px #333;\n    color: #fff;\n    padding: 8px;\n    text-align: center;\n    width: calc(100% - 32px);\n    max-width: 480px;\n    margin: 64px auto 48px auto;\n}\n\n.card-init>img {\n    height: auto;\n    width: 100%;\n    max-width: 256px;\n}\n\n.card-init>button {\n    margin: 8px auto;\n}\n\n.speech-toggle {\n    margin: 12px;\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    cursor: pointer;\n    display: flex;\n    flex-direction: row;\n}\n\n.speech-toggle-title {\n    background-color: #fff;\n    color: #333;\n    padding: 4px;\n    border-radius: 8px;\n    margin: 0 12px 0 0;\n    font-size: 12px;\n}\n\nspan {\n    display: inline-block;\n    width: var(--button-width);\n    height: var(--button-height);\n    background-color: var(--color-grey);\n    border-radius: calc(var(--button-height) / 2);\n    position: relative;\n    transition: .3s all ease-in-out;\n}\n\nspan::after {\n    content: '';\n    display: inline-block;\n    width: var(--toggle-diameter);\n    height: var(--toggle-diameter);\n    background-color: #fff;\n    border-radius: calc(var(--toggle-diameter) / 2);\n    position: absolute;\n    top: var(--button-toggle-offset);\n    transform: translateX(var(--button-toggle-offset));\n    box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, .10);\n    transition: .3s all ease-in-out;\n}\n\ninput[type="checkbox"]:checked+span {\n    background-color: var(--color-green);\n}\n\ninput[type="checkbox"]:checked+span::after {\n    transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));\n    box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, .10);\n}\n\ninput[type="checkbox"] {\n    display: none;\n}\n\ninput[type="checkbox"]:active+span::after {\n    width: var(--toggle-wider);\n}\n\ninput[type="checkbox"]:checked:active+span::after {\n    transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)));\n}\n\n@media(prefers-color-scheme: dark) {\n    body {\n        background-color: black;\n    }\n\n    span {\n        background-color: var(--color-dark-grey);\n    }\n}\n\n@media (max-width: 400px) { \n    .speech-toggle {\n        display: none;\n    }\n}`,""]);const p=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var g=r(h,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=o(e,r),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},632:(e,n,t)=>{e.exports=t.p+"63a1f4fb3262f8cf5e3f.gif"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),h=t(902),g={};g.styleTagTransform=p(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),n()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const f=t.p+"c283fc8222840697788bb24221e6130f.webmanifest",m=t.p+"f2a1121f80987119a373.svg",v=t.p+"0907a0ef4ed28f557e68.png",y=t.p+"fff2221894a72034e921.png",b=t.p+"48299a4e5713f4ad114d.gif",x=t.p+"45df2d82dca079e9214f.gif",w=`\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        The API is unavailable, please try again later\n    </h3>\n    <h3 class="lang ru-RU">\n        API недоступен, повторите попытку позже\n    </h3>\n    <img src=${v} alt="API unavailable">\n    <p></p>\n    <button id="reload_page_btn">Send request</button>\n</div>\n`,S=`\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        Welcome to the interview with the co-pilot\n    </h3>\n    <h3 class="lang ru-RU">\n        Добро пожаловать на интервью со вторым пилотом\n    </h3>\n    <img id="welcome-image" src=${y} alt="Welcome image">\n    <img hidden id="listen-image" src=${b} alt="Listener">\n    <p class="lang en-US">\n        Press the button below to record the question, \n        we will listen until you press the "Done" button\n    </p>\n    <p class="lang ru-RU">\n        Нажмите на кнопку ниже, чтобы записать вопрос, \n        мы будем слушать, пока вы не нажмете кнопку "Done"\n    </p>\n    <button id="record_question_btn">Click me</button>\n    <button hidden id="cancel_question_btn">Cancel</button>\n</div>\n`,q=`\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        We are deciphering your question, please wait ...\n    </h3>\n    <h3 class="lang ru-RU">\n        Мы расшифровываем ваш вопрос, пожалуйста, подождите ...\n    </h3>\n    <img  src=${x} alt="PLease standby">\n    <p class="lang en-US"">\n        Deciphering ...\n    <p>\n    <p class="lang ru-RU"">\n        Расшифровка ...\n    <p>\n</div>\n`,k=`\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        We are ready to accept new questions\n    </h3>\n    <h3 class="lang ru-RU">\n        Мы готовы принять новые вопросы\n    </h3>\n    <img id="welcome-image" src=${y} alt="Welcome image">\n    <img hidden id="listen-image" src=${b} alt="Listener">\n    <p class="lang en-US">\n        Press the button below to record the question, \n        we will listen until you press the "Done" button\n    </p>\n    <p class="lang ru-RU">\n        Нажмите на кнопку ниже, чтобы записать вопрос, \n        мы будем слушать, пока вы не нажмете кнопку "Done"\n    </p>\n    <button id="record_question_btn">Click me</button>\n    <button hidden id="cancel_question_btn">Cancel</button>\n</div>\n`,_={},E="undefined"==typeof globalThis?window:globalThis,T={status:"created"},$={};_.debug=e=>{I="function"==typeof e?e:()=>{}};let I=()=>{};_.detect=()=>L();const L=()=>{const e={};["speechSynthesis","speechSynthesisUtterance","speechSynthesisVoice","speechSynthesisEvent","speechSynthesisErrorEvent"].forEach((n=>{e[n]=P(n)})),e.onvoiceschanged=U(e.speechSynthesis,"onvoiceschanged");const n=U(e.speechSynthesisUtterance,"prototype");return F.forEach((t=>{const o=`on${t}`;e[o]=n&&U(e.speechSynthesisUtterance.prototype,o)})),$.isAndroid=N(),$.isFirefox=z()||M(),$.isSafari=A(),I(`is android: ${!!$.isAndroid}`),I(`is firefox: ${!!$.isFirefox}`),I(`is safari: ${!!$.isSafari}`),e},U=(e={},n)=>Object.hasOwnProperty.call(e,n)||n in e||!!e[n],R=()=>(E.navigator||{}).userAgent||"",N=()=>/android/i.test(R()),M=()=>/kaios/i.test(R()),z=()=>void 0!==E.InstallTrigger||/firefox/i.test(R()),A=()=>void 0!==E.GestureEvent,O=["webKit","moz","ms","o"],P=e=>{const n=`${(t=e).charAt(0).toUpperCase()}${t.slice(1)}`;var t;const o=O.map((e=>`${e}${n}`)),r=[e,n].concat(o).find(C);return E[r]},C=e=>E[e];_.status=()=>({...T});const H=e=>{I(e),T.status=e};_.init=function({maxTimeout:e=5e3,interval:n=250,quiet:t,maxLengthExceeded:o}={}){return new Promise(((r,i)=>{if(T.initialized)return r(!1);let a,c;_.reset(),H("init: start");let s=!1;T.maxLengthExceeded=o||"warn";const l=e=>(H(`init: failed (${e})`),clearInterval(a),T.initialized=!1,t?r(!1):i(new Error(`EasySpeech: ${e}`))),d=()=>{if(!s)return H("init: complete"),s=!0,T.initialized=!0,clearInterval(a),p.onvoiceschanged=null,c&&p.removeEventListener("voiceschanged",c),r(!0)},u=L();if(!u.speechSynthesis||!u.speechSynthesisUtterance)return l("browser misses features");Object.keys(u).forEach((e=>{T[e]=u[e]}));const{speechSynthesis:p}=T,h=()=>{const e=p.getVoices()||[];if(e.length>0){if(T.voices=e,H(`voices loaded: ${e.length}`),T.defaultVoice=e.find((e=>e.default)),!T.defaultVoice){const n=((E.navigator||{}).language||"").split("-")[0];T.defaultVoice=e.find((e=>e.lang&&(e.lang.indexOf(`${n}-`)>-1||e.lang.indexOf(`${n}_`)>-1)))}return T.defaultVoice||(T.defaultVoice=e[0]),!0}return!1};if(H("init: voices"),h())return d();const g=()=>{H("init: voices (timer)");let t=0;a=setInterval((()=>h()?d():t>e?l("browser has no voices (timeout)"):void(t+=n)),n)};u.onvoiceschanged?(H("init: voices (onvoiceschanged)"),p.onvoiceschanged=()=>h()?d():g(),setTimeout((()=>h()?d():l("browser has no voices (timeout)")),e)):(U(p,"addEventListener")&&(H("init: voices (addEventListener)"),c=()=>{if(h())return d()},p.addEventListener("voiceschanged",c)),g())}))};const j=({force:e}={})=>{if(!e&&!T.initialized)throw new Error("EasySpeech: not initialized. Run EasySpeech.init() first")};_.voices=()=>(j(),T.voices),_.on=e=>(j(),F.forEach((n=>{const t=e[n];V.handler(t)&&(T.handlers[n]=t)})),{...T.handlers});const F=["boundary","end","error","mark","pause","resume","start"],V={isNumber:e=>"number"==typeof e&&!Number.isNaN(e),pitch:e=>V.isNumber(e)&&e>=0&&e<=2,volume:e=>V.isNumber(e)&&e>=0&&e<=1,rate:e=>V.isNumber(e)&&e>=.1&&e<=10,text:e=>"string"==typeof e,handler:e=>"function"==typeof e,voice:e=>e&&e.lang&&e.name&&e.voiceURI};_.defaults=e=>(j(),e&&(T.defaults=T.defaults||{},["voice","pitch","rate","volume"].forEach((n=>{const t=e[n];(0,V[n])(t)&&(T.defaults[n]=t)}))),{...T.defaults}),_.speak=({text:e,voice:n,pitch:t,rate:o,volume:r,force:i,infiniteResume:a,...c})=>{if(j({force:i}),!V.text(e))throw new Error("EasySpeech: at least some valid text is required to speak");if((new TextEncoder).encode(e).length>4096){const e="EasySpeech: text exceeds max length of 4096 bytes, which will not work with some voices.";switch(T.maxLengthExceeded){case"none":break;case"error":throw new Error(e);default:console.warn(e)}}const s=e=>{const[n,t]=Object.entries(e)[0];return V[n](t)?t:T.defaults?.[n]};return new Promise(((i,l)=>{H("init speak");const d=(e=>new(0,T.speechSynthesisUtterance)(e))(e),u=(e=>e||T.defaults?.voice||T.defaultVoice||T.voices?.[0])(n);u&&(d.voice=u,d.lang=u.lang,d.voiceURI=u.voiceURI),d.text=e,d.pitch=s({pitch:t}),d.rate=s({rate:o}),d.volume=s({volume:r}),D(d),F.forEach((e=>{const n=c[e];V.handler(n)&&d.addEventListener(e,n),T.handlers?.[e]&&d.addEventListener(e,T.handlers[e])})),d.addEventListener("start",(()=>{$.paused=!1,$.speaking=!0,("boolean"==typeof a?a:!$.isFirefox&&!$.isSafari&&!0!==$.isAndroid)&&Z(d)})),d.addEventListener("end",(e=>{H("speak complete"),$.paused=!1,$.speaking=!1,clearTimeout(W),i(e)})),d.addEventListener("error",((e={})=>{H(`speak failed: ${e.message}`),$.paused=!1,$.speaking=!1,clearTimeout(W),l(e)})),clearTimeout(W),T.speechSynthesis.cancel(),setTimeout((()=>{T.speechSynthesis.speak(d)}),10)}))};const D=({voice:e,pitch:n,rate:t,volume:o})=>{I(`utterance: voice=${e?.name} volume=${o} rate=${t} pitch=${n}`)};let W;function Z(e){if(!e&&W)return I("force-clear timeout"),E.clearTimeout(W);const{paused:n,speaking:t}=T.speechSynthesis,o=t||$.speaking,r=n||$.paused;I(`resumeInfinity isSpeaking=${o} isPaused=${r}`),o&&!r&&(T.speechSynthesis.pause(),T.speechSynthesis.resume()),W=E.setTimeout((function(){Z(e)}),5e3)}_.cancel=()=>{j(),H("cancelling"),T.speechSynthesis.cancel(),$.paused=!1,$.speaking=!1},_.resume=()=>{j(),H("resuming"),$.paused=!1,$.speaking=!0,T.speechSynthesis.resume()},_.pause=()=>{if(j(),H("pausing"),$.isAndroid)return I("patch pause on Android with cancel"),T.speechSynthesis.cancel();T.speechSynthesis.pause(),$.paused=!0,$.speaking=!1},_.reset=()=>{Object.assign(T,{status:"reset",initialized:!1,speechSynthesis:null,speechSynthesisUtterance:null,speechSynthesisVoice:null,speechSynthesisEvent:null,speechSynthesisErrorEvent:null,voices:null,defaultVoice:null,defaults:{pitch:1,rate:1,volume:1,voice:null},handlers:{}})};let B="https://api.openai.com",G="",K="en-US",X=[],J=0,Q=!1,Y=!0;const ee=()=>{sessionStorage.getItem("lang")&&(K=sessionStorage.getItem("lang")),document.querySelector("#voice-lang").value=K,document.querySelectorAll(".lang").forEach((e=>{e.classList.contains(K)?e.hidden=!1:e.hidden=!0}))};let ne=0;const te=e=>{document.querySelector("#reload_question_btn").onclick=()=>{_.cancel(),document.querySelector("#answer-text").value="Reloading ...",te(document.querySelector("#recognized-text").value)},fetch(`${B}/v1/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${G}`},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:e}]})}).then((n=>{if(200===n.status)return ne=0,n.json();document.querySelector("#answer-text")&&(document.querySelector("#answer-text").value=`HTTP error! status: ${n.status}`,ne<20?(ne++,document.querySelector("#answer-text").value=`Retrying [${ne} of 20]`,te(e)):ne=0)})).then((e=>{if(e&&document.querySelector("#answer-text")&&(document.querySelector("#answer-text").value=e.choices[0].message.content,Q))try{_.speak({text:document.querySelector("#answer-text").value,voice:X[J],pitch:1,rate:1,volume:1,boundary:e=>console.info("[INFO] - boundary reached")}),console.info(`[INFO] - speek event with ${X[0]}`)}catch(e){ne=0,console.error(e)}})).catch((e=>{ne=0,document.querySelector("#answer-text")&&(document.querySelector("#answer-text").value=`Error: ${e}`)}))};let oe,re="";const ie=(e=!0)=>{e?(re="",document.querySelector("#recognition-indicator").innerHTML="",oe=new(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition),oe.lang=K,oe.abort(),oe.start(),oe.onresult=e=>{let n=e.results[0][0].transcript;console.info("[INFO] - text recognition chunk: "+n),document.querySelector("#recognition-indicator").innerHTML+='\n                <div class="speech-placeholder">...</div>\n            ',re+=n+"\n",document.querySelector("#record_question_btn").innerText="Done",document.querySelector("#cancel_question_btn").hidden=!1,document.querySelector("#cancel_question_btn").onclick=()=>{oe.abort(),oe=void 0,se()}},oe.onend=()=>{console.info("[INFO] - empty text recognition chunk"),oe&&(oe.abort(),oe.start())},oe.onerror=()=>{console.warn("[WARN] - text recognition chunk not parsed")}):(oe.abort(),oe=void 0)};let ae=0;const ce=()=>{document.querySelector("#recognition-indicator").innerHTML="",document.querySelector("#app").innerHTML='\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        The question\n    </h3>\n    <h3 class="lang ru-RU">\n        Ваш вопрос\n    </h3>\n    <textarea id="recognized-text"></textarea>\n    <h3 class="lang en-US">\n        GPT 3.5-turbo answer\n    </h3>\n    <h3 class="lang ru-RU">\n        Ответ GPT 3.5-turbo\n    </h3>\n    <textarea readonly id="answer-text">Loading ...</textarea>\n    <button id="new_question_btn">Back</button>\n    <button id="reload_question_btn">Send request</button>\n</div>\n',document.querySelector("#recognized-text").value=re,document.querySelector("#recognized-text").onkeydown=e=>{13===e.keyCode&&e.shiftKey&&(te(document.querySelector("#recognized-text").value),document.querySelector("#answer-text").value="Loading ...")},document.querySelector("#new_question_btn").onclick=()=>{_.cancel(),se()},re&&te(re),ee()},se=()=>{ae=0,document.querySelector("#recognition-indicator").innerHTML="",document.querySelector("#app").innerHTML=k;let e=document.querySelector("#record_question_btn");le(e)},le=e=>{e.onclick=()=>{0===ae?(document.querySelector("#listen-image").hidden=!1,document.querySelector("#welcome-image").hidden=!0,ae++,e.innerText="Cancel",ie()):(ie(!1),re?(document.querySelector("#app").innerHTML=q,ee(),ae=0,setTimeout((()=>{ce()}),2500)):se())},ee()},de=e=>{if(e){document.querySelector("#app").innerHTML=S;let e=document.querySelector("#record_question_btn");le(e)}else document.querySelector("#app").innerHTML=w,document.querySelector("#reload_page_btn").onclick=()=>{sessionStorage.getItem("apiKey")&&sessionStorage.removeItem("apiKey"),window.location.reload()};ee()};window.onload=()=>{document.querySelector("#text-question-img").src=m,document.querySelector("#text-question-btn").onclick=()=>{re="",ce(),document.querySelector("#reload_question_btn").onclick=()=>{_.cancel(),document.querySelector("#answer-text").value="Loading ...",te(document.querySelector("#recognized-text").value)},document.querySelector("#recognized-text").placeholder="Type your question here",document.querySelector("#answer-text").value="Ready for question ..."},document.querySelector("#my-manifest-placeholder").setAttribute("href",f),_.init({maxTimeout:5e3,interval:250}).then((()=>{console.info("[INFO] - EasySpeech init completed");let e=_.voices();X=[],document.querySelector("#voice-mode").innerHTML="";let n=0;e.forEach((e=>{e.lang===K&&(X.push(e),document.querySelector("#voice-mode").innerHTML+=`\n                        <option value="${n}">${e.name}</option>\n                    `,n++)})),X.length>0&&(console.info(`[INFO] - ${X.length} voices available for ${K} lang`),document.querySelector("#speech_toggle").disabled=!1)})).catch((e=>console.error(e))),sessionStorage.getItem("lang")&&(K=sessionStorage.getItem("lang")),document.querySelector("#voice-lang").onchange=()=>{J=0,console.info("[INFO] - voice recognition lang changed: "+document.querySelector("#voice-lang").value),_.init({maxTimeout:5e3,interval:250}).then((()=>{console.info("[INFO] - EasySpeech init completed");let e=_.voices();X=[],document.querySelector("#voice-mode").innerHTML="";let n=0;e.forEach((e=>{e.lang===K&&(X.push(e),document.querySelector("#voice-mode").innerHTML+=`\n                        <option value="${n}">${e.name}</option>\n                    `,n++)}))})).catch((e=>console.error(e))),K=document.querySelector("#voice-lang").value,sessionStorage.setItem("lang",K),ee()},"andrewfromtver.github.io"===window.location.host?Y=!1:B=`${window.location.protocol}//${window.location.host}`,(e=>{Y||(G="en-US"===K?prompt("Please enter your api.openai.com key"):prompt("Пожалуйста, введите свой ключ api.openai.com")),document.querySelector("#voice-lang").hidden=!1,(()=>{let e=document.querySelector("#speech_toggle");e.onchange=()=>{Q=e.checked,document.querySelector("#voice-mode").value=0,document.querySelector("#voice-mode").onchange=()=>{J=Number(document.querySelector("#voice-mode").value)},document.querySelector("#voice-mode").hidden=!e.checked,e.checked||_.cancel()}})(),Y?de(!0):fetch(e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${G}`}}).then((e=>{200===e.status?de(!0):de(!1)})).catch((e=>{console.error(e),de(!1)}))})(`${B}/v1/models`),document.querySelector("body").hidden=!1}})()})();