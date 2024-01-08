(()=>{"use strict";var e={902:(e,n,t)=>{t.d(n,{Z:()=>p});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),c=t(667),s=t.n(c),l=new URL(t(632),t.b),d=a()(r()),u=s()(l);d.push([e.id,`:root {\n    --button-width: 48px;\n    --button-height: 24px;\n    --toggle-diameter: 20px;\n    --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);\n    --toggle-shadow-offset: 10px;\n    --toggle-wider: 24px;\n    --color-grey: #E9E9E9;\n    --color-dark-grey: #39393D;\n    --color-green: #30D158;\n}\n\n* {\n    font-family: sans-serif;\n}\n\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-image: url(${u});\n}\n\n#voice-lang, #voice-mode {\n    background-color: #fff;\n    color: #333;\n    border: none;\n    outline: none;\n    width: 56px;\n    position: fixed;\n    top: 0;\n    right: 0;\n    padding: 4px 8px;\n    margin: 12px;\n    border: none;\n    outline: none;\n    border-radius: 8px;\n    box-shadow: 0 0 4px #333;\n    cursor: pointer;\n}\n\n#voice-mode {\n    margin-right: 80px;\n    \n}\n\ntextarea {\n    width: calc(100% - 40px);\n    resize: vertical;\n    min-height: 300px;\n    max-height: calc(100vh - 366px);\n    background-color: black;\n    color: #fff;\n    padding: 16px;\n    border-radius: 8px;\n}\n\nbutton {\n    padding: 16px;\n    border-radius: 16px;\n    border: none;\n    background-color: #fff;\n    color: #333;\n    cursor: pointer;\n}\n\nbutton:hover {\n    box-shadow: 0 0 16px #777;\n}\n\nbutton:active {\n    background: none;\n    color: #fff;\n    box-shadow: 0 0 2px #fff;\n}\n\n#app {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n#recognition-indicator {\n    position: fixed;\n    top: o;\n    left: 0;\n    background-color: #333;\n    height: 50px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    border-radius: 0 0 8px 8px;\n    box-shadow: 0 0 16px #333;\n}\n\n#reload_question_btn, #cancel_question_btn {\n    margin-left: 16px;\n}\n\n.speech-placeholder {\n    border-radius: 8px;\n    background-color: lightgreen;\n    margin: 8px;\n    padding: 2px 16px;\n    text-align: center;\n    color: #333;\n    font-size: 24px;\n}\n\n.card {\n    border-radius: 16px;\n    background-color: #333;\n    box-shadow: 0 0 16px #333;\n    color: #fff;\n    padding: 8px;\n    text-align: center;\n    width: calc(100% - 32px);\n    max-width: 480px;\n    margin: 64px auto 48px auto;\n}\n\n.card-init>img {\n    height: auto;\n    width: 100%;\n    max-width: 256px;\n}\n\n.card-init>button {\n    margin: 8px auto;\n}\n\n.speech-toggle {\n    margin: 12px;\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    cursor: pointer;\n    display: flex;\n    flex-direction: row;\n}\n\n.speech-toggle-title {\n    background-color: #fff;\n    color: #333;\n    padding: 4px;\n    border-radius: 8px;\n    margin: 0 12px 0 0;\n    font-size: 12px;\n}\n\nspan {\n    display: inline-block;\n    width: var(--button-width);\n    height: var(--button-height);\n    background-color: var(--color-grey);\n    border-radius: calc(var(--button-height) / 2);\n    position: relative;\n    transition: .3s all ease-in-out;\n}\n\nspan::after {\n    content: '';\n    display: inline-block;\n    width: var(--toggle-diameter);\n    height: var(--toggle-diameter);\n    background-color: #fff;\n    border-radius: calc(var(--toggle-diameter) / 2);\n    position: absolute;\n    top: var(--button-toggle-offset);\n    transform: translateX(var(--button-toggle-offset));\n    box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, .10);\n    transition: .3s all ease-in-out;\n}\n\ninput[type="checkbox"]:checked+span {\n    background-color: var(--color-green);\n}\n\ninput[type="checkbox"]:checked+span::after {\n    transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));\n    box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, .10);\n}\n\ninput[type="checkbox"] {\n    display: none;\n}\n\ninput[type="checkbox"]:active+span::after {\n    width: var(--toggle-wider);\n}\n\ninput[type="checkbox"]:checked:active+span::after {\n    transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)));\n}\n\n@media(prefers-color-scheme: dark) {\n    body {\n        background-color: black;\n    }\n\n    span {\n        background-color: var(--color-dark-grey);\n    }\n}`,""]);const p=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var g=r(h,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=o(e,r),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},632:(e,n,t)=>{e.exports=t.p+"63a1f4fb3262f8cf5e3f.gif"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),h=t(902),g={};g.styleTagTransform=p(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),n()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const f=t.p+"0907a0ef4ed28f557e68.png",m=t.p+"fff2221894a72034e921.png",v=t.p+"48299a4e5713f4ad114d.gif",b=t.p+"45df2d82dca079e9214f.gif",y=`\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        The API is unavailable, please try again later\n    </h3>\n    <h3 class="lang ru-RU">\n        API недоступен, повторите попытку позже\n    </h3>\n    <img src=${f} alt="API unavailable">\n    <p></p>\n    <button id="reload_page_btn">Try again</button>\n</div>\n`,x=`\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        Welcome to the interview with the co-pilot\n    </h3>\n    <h3 class="lang ru-RU">\n        Добро пожаловать на интервью со вторым пилотом\n    </h3>\n    <img id="welcome-image" src=${m} alt="Welcome image">\n    <img hidden id="listen-image" src=${v} alt="Listener">\n    <p class="lang en-US">\n        Press the button below to record the question, \n        we will listen until you press the "Done" button\n    </p>\n    <p class="lang ru-RU">\n        Нажмите на кнопку ниже, чтобы записать вопрос, \n        мы будем слушать, пока вы не нажмете кнопку "Done"\n    </p>\n    <button id="record_question_btn">Click me</button>\n    <button hidden id="cancel_question_btn">Cancel</button>\n</div>\n`,w=`\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        We are deciphering your question, please wait ...\n    </h3>\n    <h3 class="lang ru-RU">\n        Мы расшифровываем ваш вопрос, пожалуйста, подождите ...\n    </h3>\n    <img  src=${b} alt="PLease standby">\n    <p class="lang en-US"">\n        Deciphering ...\n    <p>\n    <p class="lang ru-RU"">\n        Расшифровка ...\n    <p>\n</div>\n`,S=`\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        We are ready to accept new questions\n    </h3>\n    <h3 class="lang ru-RU">\n        Мы готовы принять новые вопросы\n    </h3>\n    <img id="welcome-image" src=${m} alt="Welcome image">\n    <img hidden id="listen-image" src=${v} alt="Listener">\n    <p class="lang en-US">\n        Press the button below to record the question, \n        we will listen until you press the "Done" button\n    </p>\n    <p class="lang ru-RU">\n        Нажмите на кнопку ниже, чтобы записать вопрос, \n        мы будем слушать, пока вы не нажмете кнопку "Done"\n    </p>\n    <button id="record_question_btn">Click me</button>\n    <button hidden id="cancel_question_btn">Cancel</button>\n</div>\n`,q={},k="undefined"==typeof globalThis?window:globalThis,_={status:"created"},T={};q.debug=e=>{E="function"==typeof e?e:()=>{}};let E=()=>{};q.detect=()=>$();const $=()=>{const e={};["speechSynthesis","speechSynthesisUtterance","speechSynthesisVoice","speechSynthesisEvent","speechSynthesisErrorEvent"].forEach((n=>{e[n]=A(n)})),e.onvoiceschanged=I(e.speechSynthesis,"onvoiceschanged");const n=I(e.speechSynthesisUtterance,"prototype");return H.forEach((t=>{const o=`on${t}`;e[o]=n&&I(e.speechSynthesisUtterance.prototype,o)})),T.isAndroid=U(),T.isFirefox=N()||R(),T.isSafari=M(),E(`is android: ${!!T.isAndroid}`),E(`is firefox: ${!!T.isFirefox}`),E(`is safari: ${!!T.isSafari}`),e},I=(e={},n)=>Object.hasOwnProperty.call(e,n)||n in e||!!e[n],L=()=>(k.navigator||{}).userAgent||"",U=()=>/android/i.test(L()),R=()=>/kaios/i.test(L()),N=()=>void 0!==k.InstallTrigger||/firefox/i.test(L()),M=()=>void 0!==k.GestureEvent,O=["webKit","moz","ms","o"],A=e=>{const n=`${(t=e).charAt(0).toUpperCase()}${t.slice(1)}`;var t;const o=O.map((e=>`${e}${n}`)),r=[e,n].concat(o).find(P);return k[r]},P=e=>k[e];q.status=()=>({..._});const z=e=>{E(e),_.status=e};q.init=function({maxTimeout:e=5e3,interval:n=250,quiet:t,maxLengthExceeded:o}={}){return new Promise(((r,i)=>{if(_.initialized)return r(!1);let a,c;q.reset(),z("init: start");let s=!1;_.maxLengthExceeded=o||"warn";const l=e=>(z(`init: failed (${e})`),clearInterval(a),_.initialized=!1,t?r(!1):i(new Error(`EasySpeech: ${e}`))),d=()=>{if(!s)return z("init: complete"),s=!0,_.initialized=!0,clearInterval(a),p.onvoiceschanged=null,c&&p.removeEventListener("voiceschanged",c),r(!0)},u=$();if(!u.speechSynthesis||!u.speechSynthesisUtterance)return l("browser misses features");Object.keys(u).forEach((e=>{_[e]=u[e]}));const{speechSynthesis:p}=_,h=()=>{const e=p.getVoices()||[];if(e.length>0){if(_.voices=e,z(`voices loaded: ${e.length}`),_.defaultVoice=e.find((e=>e.default)),!_.defaultVoice){const n=((k.navigator||{}).language||"").split("-")[0];_.defaultVoice=e.find((e=>e.lang&&(e.lang.indexOf(`${n}-`)>-1||e.lang.indexOf(`${n}_`)>-1)))}return _.defaultVoice||(_.defaultVoice=e[0]),!0}return!1};if(z("init: voices"),h())return d();const g=()=>{z("init: voices (timer)");let t=0;a=setInterval((()=>h()?d():t>e?l("browser has no voices (timeout)"):void(t+=n)),n)};u.onvoiceschanged?(z("init: voices (onvoiceschanged)"),p.onvoiceschanged=()=>h()?d():g(),setTimeout((()=>h()?d():l("browser has no voices (timeout)")),e)):(I(p,"addEventListener")&&(z("init: voices (addEventListener)"),c=()=>{if(h())return d()},p.addEventListener("voiceschanged",c)),g())}))};const C=({force:e}={})=>{if(!e&&!_.initialized)throw new Error("EasySpeech: not initialized. Run EasySpeech.init() first")};q.voices=()=>(C(),_.voices),q.on=e=>(C(),H.forEach((n=>{const t=e[n];j.handler(t)&&(_.handlers[n]=t)})),{..._.handlers});const H=["boundary","end","error","mark","pause","resume","start"],j={isNumber:e=>"number"==typeof e&&!Number.isNaN(e),pitch:e=>j.isNumber(e)&&e>=0&&e<=2,volume:e=>j.isNumber(e)&&e>=0&&e<=1,rate:e=>j.isNumber(e)&&e>=.1&&e<=10,text:e=>"string"==typeof e,handler:e=>"function"==typeof e,voice:e=>e&&e.lang&&e.name&&e.voiceURI};q.defaults=e=>(C(),e&&(_.defaults=_.defaults||{},["voice","pitch","rate","volume"].forEach((n=>{const t=e[n];(0,j[n])(t)&&(_.defaults[n]=t)}))),{..._.defaults}),q.speak=({text:e,voice:n,pitch:t,rate:o,volume:r,force:i,infiniteResume:a,...c})=>{if(C({force:i}),!j.text(e))throw new Error("EasySpeech: at least some valid text is required to speak");if((new TextEncoder).encode(e).length>4096){const e="EasySpeech: text exceeds max length of 4096 bytes, which will not work with some voices.";switch(_.maxLengthExceeded){case"none":break;case"error":throw new Error(e);default:console.warn(e)}}const s=e=>{const[n,t]=Object.entries(e)[0];return j[n](t)?t:_.defaults?.[n]};return new Promise(((i,l)=>{z("init speak");const d=(e=>new(0,_.speechSynthesisUtterance)(e))(e),u=(e=>e||_.defaults?.voice||_.defaultVoice||_.voices?.[0])(n);u&&(d.voice=u,d.lang=u.lang,d.voiceURI=u.voiceURI),d.text=e,d.pitch=s({pitch:t}),d.rate=s({rate:o}),d.volume=s({volume:r}),F(d),H.forEach((e=>{const n=c[e];j.handler(n)&&d.addEventListener(e,n),_.handlers?.[e]&&d.addEventListener(e,_.handlers[e])})),d.addEventListener("start",(()=>{T.paused=!1,T.speaking=!0,("boolean"==typeof a?a:!T.isFirefox&&!T.isSafari&&!0!==T.isAndroid)&&D(d)})),d.addEventListener("end",(e=>{z("speak complete"),T.paused=!1,T.speaking=!1,clearTimeout(V),i(e)})),d.addEventListener("error",((e={})=>{z(`speak failed: ${e.message}`),T.paused=!1,T.speaking=!1,clearTimeout(V),l(e)})),clearTimeout(V),_.speechSynthesis.cancel(),setTimeout((()=>{_.speechSynthesis.speak(d)}),10)}))};const F=({voice:e,pitch:n,rate:t,volume:o})=>{E(`utterance: voice=${e?.name} volume=${o} rate=${t} pitch=${n}`)};let V;function D(e){if(!e&&V)return E("force-clear timeout"),k.clearTimeout(V);const{paused:n,speaking:t}=_.speechSynthesis,o=t||T.speaking,r=n||T.paused;E(`resumeInfinity isSpeaking=${o} isPaused=${r}`),o&&!r&&(_.speechSynthesis.pause(),_.speechSynthesis.resume()),V=k.setTimeout((function(){D(e)}),5e3)}q.cancel=()=>{C(),z("cancelling"),_.speechSynthesis.cancel(),T.paused=!1,T.speaking=!1},q.resume=()=>{C(),z("resuming"),T.paused=!1,T.speaking=!0,_.speechSynthesis.resume()},q.pause=()=>{if(C(),z("pausing"),T.isAndroid)return E("patch pause on Android with cancel"),_.speechSynthesis.cancel();_.speechSynthesis.pause(),T.paused=!0,T.speaking=!1},q.reset=()=>{Object.assign(_,{status:"reset",initialized:!1,speechSynthesis:null,speechSynthesisUtterance:null,speechSynthesisVoice:null,speechSynthesisEvent:null,speechSynthesisErrorEvent:null,voices:null,defaultVoice:null,defaults:{pitch:1,rate:1,volume:1,voice:null},handlers:{}})};let W="https://api.openai.com",Z="",G="en-US",B=[],K=0,X=!1,J=!0;const Q=()=>{sessionStorage.getItem("lang")&&(G=sessionStorage.getItem("lang")),document.querySelector("#voice-lang").value=G,document.querySelectorAll(".lang").forEach((e=>{e.classList.contains(G)?e.hidden=!1:e.hidden=!0}))};let Y,ee="";const ne=(e=!0)=>{e?(ee="",document.querySelector("#recognition-indicator").innerHTML="",Y=new(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition),Y.lang=G,Y.abort(),Y.start(),Y.onresult=e=>{let n=e.results[0][0].transcript;console.info("[INFO] - text recognition chunk: "+n),document.querySelector("#recognition-indicator").innerHTML+='\n                <div class="speech-placeholder">...</div>\n            ',ee+=" "+n,document.querySelector("#record_question_btn").innerText="Done",document.querySelector("#cancel_question_btn").hidden=!1,document.querySelector("#cancel_question_btn").onclick=()=>{Y.abort(),Y=void 0,ie()}},Y.onend=()=>{console.info("[INFO] - empty text recognition chunk"),Y&&(Y.abort(),Y.start())},Y.onerror=()=>{console.warn("[WARN] - text recognition chunk not parsed")}):(Y.abort(),Y=void 0)};let te=0;const oe=e=>{document.querySelector("#reload_question_btn").onclick=()=>{q.cancel(),document.querySelector("#answer-text").value="Reloading ...",oe(document.querySelector("#recognized-text").innerText)},fetch(`${W}/v1/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Z}`},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:e}]})}).then((n=>{if(200===n.status)return te=0,n.json();document.querySelector("#answer-text")&&(document.querySelector("#answer-text").value=`HTTP error! status: ${n.status}`,te<20?(te++,document.querySelector("#answer-text").value=`Retrying [${te} of 20]`,oe(e)):te=0)})).then((e=>{if(e&&document.querySelector("#answer-text")&&(document.querySelector("#answer-text").value=e.choices[0].message.content,X))try{q.speak({text:document.querySelector("#answer-text").value,voice:B[K],pitch:1,rate:1,volume:1,boundary:e=>console.info("[INFO] - boundary reached")}),console.info(`[INFO] - speek event with ${B[0]}`)}catch(e){te=0,console.error(e)}})).catch((e=>{te=0,document.querySelector("#answer-text")&&(document.querySelector("#answer-text").value=`Error: ${e}`)}))};let re=0;const ie=()=>{re=0,document.querySelector("#recognition-indicator").innerHTML="",document.querySelector("#app").innerHTML=S;let e=document.querySelector("#record_question_btn");ae(e)},ae=e=>{e.onclick=()=>{0===re?(document.querySelector("#listen-image").hidden=!1,document.querySelector("#welcome-image").hidden=!0,re++,e.innerText="Cancel",ne()):(ne(!1),ee?(document.querySelector("#app").innerHTML=w,Q(),re=0,setTimeout((()=>{document.querySelector("#recognition-indicator").innerHTML="",document.querySelector("#app").innerHTML='\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        The decoded question\n    </h3>\n    <h3 class="lang ru-RU">\n        Расшифрованный вопрос\n    </h3>\n    <p id="recognized-text"></p>\n    <h3 class="lang en-US">\n        GPT 3.5-turbo answer\n    </h3>\n    <h3 class="lang ru-RU">\n        Ответ GPT 3.5-turbo\n    </h3>\n    <textarea id="answer-text">Loading ...</textarea>\n    <button id="new_question_btn">New question</button>\n    <button id="reload_question_btn">Try again</button>\n</div>\n',document.querySelector("#recognized-text").innerText=ee,document.querySelector("#new_question_btn").onclick=()=>{q.cancel(),ie()},oe(ee),Q()}),2500)):ie())},Q()},ce=e=>{if(e){document.querySelector("#app").innerHTML=x;let e=document.querySelector("#record_question_btn");ae(e)}else document.querySelector("#app").innerHTML=y,document.querySelector("#reload_page_btn").onclick=()=>{sessionStorage.getItem("apiKey")&&sessionStorage.removeItem("apiKey"),window.location.reload()};Q()};window.onload=()=>{q.init({maxTimeout:5e3,interval:250}).then((()=>{console.info("[INFO] - EasySpeech init completed");let e=q.voices();B=[],document.querySelector("#voice-mode").innerHTML="";let n=0;e.forEach((e=>{e.lang===G&&(B.push(e),document.querySelector("#voice-mode").innerHTML+=`\n                        <option value="${n}">${e.name}</option>\n                    `,n++)})),B.length>0&&(console.info(`[INFO] - ${B.length} voices available for ${G} lang`),document.querySelector("#speech_toggle").disabled=!1)})).catch((e=>console.error(e))),sessionStorage.getItem("lang")&&(G=sessionStorage.getItem("lang")),document.querySelector("#voice-lang").onchange=()=>{K=0,console.info("[INFO] - voice recognition lang changed: "+document.querySelector("#voice-lang").value),q.init({maxTimeout:5e3,interval:250}).then((()=>{console.info("[INFO] - EasySpeech init completed");let e=q.voices();B=[],document.querySelector("#voice-mode").innerHTML="";let n=0;e.forEach((e=>{e.lang===G&&(B.push(e),document.querySelector("#voice-mode").innerHTML+=`\n                        <option value="${n}">${e.name}</option>\n                    `,n++)}))})).catch((e=>console.error(e))),G=document.querySelector("#voice-lang").value,sessionStorage.setItem("lang",G),Q()},"andrewfromtver.github.io"===window.location.host?J=!1:W=`${window.location.protocol}//${window.location.host}`,(e=>{J||(Z="en-US"===G?prompt("Please enter your api.openai.com key"):prompt("Пожалуйста, введите свой ключ api.openai.com")),document.querySelector("#voice-lang").hidden=!1,(()=>{let e=document.querySelector("#speech_toggle");e.onchange=()=>{X=e.checked,document.querySelector("#voice-mode").value=0,document.querySelector("#voice-mode").onchange=()=>{K=Number(document.querySelector("#voice-mode").value)},document.querySelector("#voice-mode").hidden=!e.checked,e.checked||q.cancel()}})(),J?ce(!0):fetch(e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Z}`}}).then((e=>{200===e.status?ce(!0):ce(!1)})).catch((e=>{console.error(e),ce(!1)}))})(`${W}/v1/models`)}})()})();