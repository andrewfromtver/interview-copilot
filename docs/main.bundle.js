(()=>{"use strict";var e={902:(e,n,t)=>{t.d(n,{Z:()=>p});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(632),t.b),d=i()(r()),u=s()(l);d.push([e.id,`:root {\n    --button-width: 48px;\n    --button-height: 24px;\n    --toggle-diameter: 20px;\n    --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);\n    --toggle-shadow-offset: 10px;\n    --toggle-wider: 24px;\n    --color-grey: #E9E9E9;\n    --color-dark-grey: #39393D;\n    --color-green: #30D158;\n}\n\n* {\n    font-family: sans-serif;\n}\n\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-image: url(${u});\n}\n\nselect {\n    position: fixed;\n    top: 0;\n    right: 0;\n    padding: 4px 16px;\n    margin: 12px;\n    border: none;\n    outline: none;\n    border-radius: 8px;\n    box-shadow: 0 0 4px #333;\n    cursor: pointer;\n}\n\ntextarea {\n    width: calc(100% - 40px);\n    resize: vertical;\n    min-height: 300px;\n    max-height: calc(100vh - 366px);\n    background-color: black;\n    color: #fff;\n    padding: 16px;\n    border-radius: 8px;\n}\n\nbutton {\n    padding: 16px;\n    border-radius: 16px;\n    border: none;\n    background-color: #fff;\n    color: #333;\n    cursor: pointer;\n}\n\nbutton:hover {\n    box-shadow: 0 0 16px #777;\n}\n\nbutton:active {\n    background: none;\n    color: #fff;\n    box-shadow: 0 0 2px #fff;\n}\n\n#app {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n#recognition-indicator {\n    position: fixed;\n    top: o;\n    left: 0;\n    background-color: #333;\n    height: 50px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    border-radius: 0 0 8px 8px;\n    box-shadow: 0 0 16px #333;\n}\n\n#reload_question_btn {\n    margin-left: 16px;\n}\n\n.speech-placeholder {\n    border-radius: 8px;\n    background-color: lightgreen;\n    margin: 8px;\n    padding: 2px 16px;\n    text-align: center;\n    color: #333;\n    font-size: 24px;\n}\n\n.card {\n    border-radius: 16px;\n    background-color: #333;\n    box-shadow: 0 0 16px #333;\n    color: #fff;\n    padding: 8px;\n    text-align: center;\n    width: calc(100% - 32px);\n    max-width: 480px;\n    margin: 64px auto 48px auto;\n}\n\n.card-init>img {\n    height: auto;\n    width: 100%;\n    max-width: 256px;\n}\n\n.card-init>button {\n    margin: 8px auto;\n}\n\n.speech-toggle {\n    margin: 12px;\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    cursor: pointer;\n    display: flex;\n    flex-direction: row;\n}\n\n.speech-toggle-title {\n    background-color: #fff;\n    color: #333;\n    padding: 4px;\n    border-radius: 8px;\n    margin: 0 12px 0 0;\n    font-size: 12px;\n}\n\nspan {\n    display: inline-block;\n    width: var(--button-width);\n    height: var(--button-height);\n    background-color: var(--color-grey);\n    border-radius: calc(var(--button-height) / 2);\n    position: relative;\n    transition: .3s all ease-in-out;\n}\n\nspan::after {\n    content: '';\n    display: inline-block;\n    width: var(--toggle-diameter);\n    height: var(--toggle-diameter);\n    background-color: #fff;\n    border-radius: calc(var(--toggle-diameter) / 2);\n    position: absolute;\n    top: var(--button-toggle-offset);\n    transform: translateX(var(--button-toggle-offset));\n    box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, .10);\n    transition: .3s all ease-in-out;\n}\n\ninput[type="checkbox"]:checked+span {\n    background-color: var(--color-green);\n}\n\ninput[type="checkbox"]:checked+span::after {\n    transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));\n    box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, .10);\n}\n\ninput[type="checkbox"] {\n    display: none;\n}\n\ninput[type="checkbox"]:active+span::after {\n    width: var(--toggle-wider);\n}\n\ninput[type="checkbox"]:checked:active+span::after {\n    transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)));\n}\n\n@media(prefers-color-scheme: dark) {\n    body {\n        background-color: black;\n    }\n\n    span {\n        background-color: var(--color-dark-grey);\n    }\n}`,""]);const p=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(g);else{var h=r(g,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},632:(e,n,t)=>{e.exports=t.p+"63a1f4fb3262f8cf5e3f.gif"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),g=t(902),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),n()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;const m=t.p+"0907a0ef4ed28f557e68.png",f=t.p+"fff2221894a72034e921.png",v=t.p+"48299a4e5713f4ad114d.gif",b=t.p+"45df2d82dca079e9214f.gif",y=`\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        The API is unavailable, please try again later\n    </h3>\n    <h3 class="lang ru-RU">\n        API недоступен, повторите попытку позже\n    </h3>\n    <img src=${m} alt="API unavailable">\n    <p></p>\n    <button id="reload_page_btn">Try again</button>\n</div>\n`,w=`\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        Welcome to the interview with the co-pilot\n    </h3>\n    <h3 class="lang ru-RU">\n        Добро пожаловать на интервью со вторым пилотом\n    </h3>\n    <img id="welcome-image" src=${f} alt="Welcome image">\n    <img hidden id="listen-image" src=${v} alt="Listener">\n    <p class="lang en-US">\n        Press the space bar or click on the button below to record the question, \n        we will listen while you hold down the space bar\n    </p>\n    <p class="lang ru-RU">\n        Нажмите пробел или нажмите на кнопку ниже, чтобы записать вопрос, \n        мы будем слушать, пока вы удерживаете нажатой клавишу пробела\n    </p>\n    <button id="record_question_btn">Click me</button>\n</div>\n`,x=`\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        We are deciphering your question, please wait ...\n    </h3>\n    <h3 class="lang ru-RU">\n        Мы расшифровываем ваш вопрос, пожалуйста, подождите ...\n    </h3>\n    <img  src=${b} alt="PLease standby">\n    <p class="lang en-US"">\n        Deciphering ...\n    <p>\n    <p class="lang ru-RU"">\n        Расшифровка ...\n    <p>\n</div>\n`,S=`\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        We are ready to accept new questions\n    </h3>\n    <h3 class="lang ru-RU">\n        Мы готовы принять новые вопросы\n    </h3>\n    <img id="welcome-image" src=${f} alt="Welcome image">\n    <img hidden id="listen-image" src=${v} alt="Listener">\n    <p class="lang en-US">\n        Press the space bar or click on the button below to record the question, \n        we will listen while you hold down the space bar\n    </p>\n    <p class="lang ru-RU">\n        Нажмите пробел или нажмите на кнопку ниже, чтобы записать вопрос, \n        мы будем слушать, пока вы удерживаете нажатой клавишу пробела\n    </p>\n    <button id="record_question_btn">Click me</button>\n</div>\n`;let q="https://api.openai.com",k="",_="en-US",T=!1,I=!0;const U=()=>{document.querySelector("#voice-lang").onclick=()=>{"ru-RU"===document.querySelector("#voice-lang").value?document.querySelector("#voice-lang").value="en-US":document.querySelector("#voice-lang").value="ru-RU",console.log("[INFO] - voice recognition lang changed: "+document.querySelector("#voice-lang").value),_=document.querySelector("#voice-lang").value,sessionStorage.setItem("lang",_),U()},sessionStorage.getItem("lang")&&(_=sessionStorage.getItem("lang")),document.querySelector("#voice-lang").value=_,document.querySelectorAll(".lang").forEach((e=>{e.classList.contains(_)?e.hidden=!1:e.hidden=!0}))};let R,L="";const $=(e=!0)=>{e?(L="",document.querySelector("#recognition-indicator").innerHTML="",R=new(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition),R.lang=_,R.start(),R.onresult=e=>{let n=e.results[0][0].transcript;console.log("[INFO] - text recognition chunk: "+n),document.querySelector("#recognition-indicator").innerHTML+='\n                <div class="speech-placeholder">...</div>\n            ',L+=" "+n},R.onend=()=>{console.log("[INFO] - empty text recognition chunk"),R&&(R.abort(),R.start())},R.onerror=()=>{console.log("[ERROR] - text recognition chunk not parsed"),R&&(R.abort(),R.start())}):(R&&R.abort(),R=void 0)};let M=0;const P=e=>{document.querySelector("#reload_question_btn").onclick=()=>{window.speechSynthesis.cancel(),document.querySelector("#answer-text").value="Reloading ...",P(document.querySelector("#recognized-text").innerText)},fetch(`${q}/v1/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k}`},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:e}]})}).then((n=>{if(200===n.status)return M=0,n.json();document.querySelector("#answer-text")&&(document.querySelector("#answer-text").value=`HTTP error! status: ${n.status}`,M<20?(M++,document.querySelector("#answer-text").value=`Retrying [${M} of 20]`,P(e)):M=0)})).then((e=>{if(e&&document.querySelector("#answer-text")&&(document.querySelector("#answer-text").value=e.choices[0].message.content,T))try{window.speechSynthesis.cancel();let e=new SpeechSynthesisUtterance;e.rate=1.15,e.pitch=1,e.lang=_,e.text=document.querySelector("#answer-text").value,window.speechSynthesis.speak(e)}catch(e){M=0,window.speechSynthesis.cancel(),console.error(e)}})).catch((e=>{document.querySelector("#answer-text")&&(document.querySelector("#answer-text").value=`Error: ${e}`)}))};let E=0;const C=()=>{document.querySelector("#recognition-indicator").innerHTML="",document.querySelector("#app").innerHTML='\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        The decoded question\n    </h3>\n    <h3 class="lang ru-RU">\n        Расшифрованный вопрос\n    </h3>\n    <p id="recognized-text"></p>\n    <h3 class="lang en-US">\n        GPT 3.5-turbo answer\n    </h3>\n    <h3 class="lang ru-RU">\n        ответ GPT 3.5-turbo\n    </h3>\n    <textarea id="answer-text">Loading ...</textarea>\n    <button id="new_question_btn">New question</button>\n    <button id="reload_question_btn">Try again</button>\n</div>\n',document.querySelector("#recognized-text").innerText=L;let e=document.querySelector("#new_question_btn");e.onclick=()=>{window.speechSynthesis.cancel(),H()},setInterval((()=>{e&&e.focus()}),100),P(L),U()},H=()=>{document.querySelector("#recognition-indicator").innerHTML="",document.querySelector("#app").innerHTML=S;let e=document.querySelector("#record_question_btn");setInterval((()=>{e&&e.focus()}),100),A(e)},A=e=>{e.onclick=()=>{0===E?(document.querySelector("#listen-image").hidden=!1,document.querySelector("#welcome-image").hidden=!0,E++,e.innerText="Done",$()):($(!1),L?(document.querySelector("#app").innerHTML=x,U(),E=0,setTimeout((()=>{C()}),2500)):(E=0,H()))},e.onkeydown=n=>{" "!=n.key&&"Space"!=n.code&&32!=n.keyCode||0===E&&(document.querySelector("#listen-image").hidden=!1,document.querySelector("#welcome-image").hidden=!0,E++,e.innerText="Listening ...",$())},e.onkeyup=e=>{" "!=e.key&&"Space"!=e.code&&32!=e.keyCode||($(!1),L?(document.querySelector("#app").innerHTML=x,U(),E=0,setTimeout((()=>{C()}),2500)):(E=0,H()))},U()},j=e=>{if(e){document.querySelector("#app").innerHTML=w;let e=document.querySelector("#record_question_btn");setInterval((()=>{e&&e.focus()}),100),A(e)}else document.querySelector("#app").innerHTML=y,document.querySelector("#reload_page_btn").onclick=()=>{sessionStorage.getItem("apiKey")&&sessionStorage.removeItem("apiKey"),window.location.reload()};U()};window.onload=()=>{"andrewfromtver.github.io"===window.location.host?I=!1:q=`${window.location.protocol}//${window.location.host}`,(e=>{sessionStorage.getItem("lang")&&(_=sessionStorage.getItem("lang")),document.querySelector("#voice-lang").onchange=()=>{console.log("[INFO] - voice recognition lang changed: "+document.querySelector("#voice-lang").value),_=document.querySelector("#voice-lang").value,sessionStorage.setItem("lang",_),U()},I||(k="en-US"===_?prompt("Please enter your api.openai.com key"):prompt("Пожалуйста, введите свой ключ api.openai.com")),document.querySelector("#voice-lang").hidden=!1,(()=>{let e=document.querySelector("#speech_toggle");e.onchange=()=>{T=e.checked,e.checked||window.speechSynthesis.cancel()}})(),I?j(!0):fetch(e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k}`}}).then((e=>{200===e.status?j(!0):j(!1)})).catch((e=>{console.error(e),j(!1)}))})(`${q}/v1/models`)}})()})();