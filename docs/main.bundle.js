(()=>{"use strict";var e={902:(e,n,t)=>{t.d(n,{Z:()=>p});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(632),t.b),d=i()(r()),u=s()(l);d.push([e.id,`* {\n    font-family: sans-serif;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-image: url(${u});\n}\n\nselect {\n    position: fixed;\n    top: 0;\n    right: 0;\n    padding: 4px 16px;\n    margin: 12px;\n    border: none;\n    outline: none;\n    border-radius: 8px;\n    box-shadow: 0 0 4px #333;\n    cursor: pointer;\n}\n\ntextarea {\n    width: calc(100% - 40px);\n    resize: vertical;\n    min-height: 320px;\n    background-color: black;\n    color: #fff;\n    padding: 16px;\n}\n\nbutton {\n    padding: 16px;\n    border-radius: 16px;\n    border: none;\n    background-color: #fff;\n    color: #333;\n    cursor: pointer;\n}\n\nbutton:hover {\n    box-shadow: 0 0 16px #777;\n}\n\nbutton:active {\n    background: none;\n    color: #fff;\n    box-shadow: 0 0 2px #fff;\n}\n\n#app {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100vh;\n}\n\n#recognition-indicator {\n    position: fixed;\n    top: o;\n    left: 0;\n    background-color: #333;\n    height: 50px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    opacity: 0.8;\n}\n\n.speech-placeholder {\n    border-radius: 8px;\n    background-color: lightgreen;\n    margin: 8px;\n    padding: 2px 16px;\n    text-align: center;\n    color: #333;\n    font-size: 24px;\n}\n\n.card {\n    border-radius: 16px;\n    background-color: #333;\n    box-shadow: 0 0 16px #333;\n    color: #fff;\n    padding: 8px;\n    text-align: center;\n    width: calc(100% - 32px);\n    max-width: 480px;\n    margin: 0 auto;\n}\n\n.card-init > img {\n    height: auto;\n    width: 100%;\n    max-width: 256px;\n}\n\n.card-init > button {\n    margin: 8px auto;\n}\n`,""]);const p=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(g);else{var m=r(g,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},632:(e,n,t)=>{e.exports=t.p+"63a1f4fb3262f8cf5e3f.gif"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),g=t(902),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),n()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals;const h=t.p+"0907a0ef4ed28f557e68.png",f=t.p+"fff2221894a72034e921.png",v=t.p+"48299a4e5713f4ad114d.gif",y=t.p+"45df2d82dca079e9214f.gif",b=`\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        The API is unavailable, please try again later\n    </h3>\n    <h3 class="lang ru-RU">\n        API недоступен, повторите попытку позже\n    </h3>\n    <img src=${h} alt="API unavailable">\n    <p></p>\n    <button id="reload_page_btn">Try again</button>\n</div>\n`,x=`\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        Welcome to the interview with the co-pilot\n    </h3>\n    <h3 class="lang ru-RU">\n        Добро пожаловать на интервью со вторым пилотом\n    </h3>\n    <img id="welcome-image" src=${f} alt="Welcome image">\n    <img hidden id="listen-image" src=${v} alt="Listener">\n    <p class="lang en-US">\n        Press the space bar or click on the button below to record the question, \n        we will listen while you hold down the space bar\n    </p>\n    <p class="lang ru-RU">\n        Нажмите пробел или нажмите на кнопку ниже, чтобы записать вопрос, \n        мы будем слушать, пока вы удерживаете нажатой клавишу пробела\n    </p>\n    <button id="record_question_btn">Click me</button>\n</div>\n`,S=`\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        We are deciphering your question, please wait ...\n    </h3>\n    <h3 class="lang ru-RU">\n        Мы расшифровываем ваш вопрос, пожалуйста, подождите ...\n    </h3>\n    <img  src=${y} alt="PLease standby">\n    <p class="lang en-US"">\n        Deciphering ...\n    <p>\n    <p class="lang ru-RU"">\n        Расшифровка ...\n    <p>\n</div>\n`,w=`\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        We are ready to accept new questions\n    </h3>\n    <h3 class="lang ru-RU">\n        Мы готовы принять новые вопросы\n    </h3>\n    <img id="welcome-image" src=${f} alt="Welcome image">\n    <img hidden id="listen-image" src=${v} alt="Listener">\n    <p class="lang en-US">\n        Press the space bar or click on the button below to record the question, \n        we will listen while you hold down the space bar\n    </p>\n    <p class="lang ru-RU">\n        Нажмите пробел или нажмите на кнопку ниже, чтобы записать вопрос, \n        мы будем слушать, пока вы удерживаете нажатой клавишу пробела\n    </p>\n    <button id="record_question_btn">Click me</button>\n</div>\n`;let q="https://api.openai.com",_="",T="en-US";const I="demo",k=()=>{document.querySelector("#voice-lang").onclick=()=>{"ru-RU"===document.querySelector("#voice-lang").value?document.querySelector("#voice-lang").value="en-US":document.querySelector("#voice-lang").value="ru-RU",console.log("[INFO] - voice recognition lang changed: "+document.querySelector("#voice-lang").value),T=document.querySelector("#voice-lang").value,sessionStorage.setItem("lang",T),k()},sessionStorage.getItem("lang")&&(T=sessionStorage.getItem("lang")),document.querySelector("#voice-lang").value=T,document.querySelectorAll(".lang").forEach((e=>{e.classList.contains(T)?e.hidden=!1:e.hidden=!0}))},U=()=>{_===I&&(q="http://127.0.0.1:5000")};let R,L="";const M=(e=!0)=>{e?(L="",document.querySelector("#recognition-indicator").innerHTML="",R=new(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition),R.lang=T,R.start(),R.onresult=e=>{let n=e.results[0][0].transcript;console.log("[INFO] - text recognition chunk: "+n),document.querySelector("#recognition-indicator").innerHTML+='\n            <div class="speech-placeholder">...</div>\n        ',L+=" "+n,R&&(R.stop(),R.start())},R.onend=e=>{console.log("[INFO] - empty text recognition chunk"),R&&(R.stop(),R.start())},R.onerror=e=>{console.log("[ERROR] - text recognition chunk not parsed"),R&&(R.stop(),R.start())}):(R&&R.stop(),R=void 0)};let $=0;const P=()=>{document.querySelector("#recognition-indicator").innerHTML="",document.querySelector("#app").innerHTML='\n<div class="card card-init animate__animated animate__fadeIn">\n    <h3 class="lang en-US">\n        The decoded question\n    </h3>\n    <h3 class="lang ru-RU">\n        Расшифрованный вопрос\n    </h3>\n    <p id="recognized-text"></p>\n    <h3 class="lang en-US">\n        GPT 3.5-turbo answer\n    </h3>\n    <h3 class="lang ru-RU">\n        ответ GPT 3.5-turbo\n    </h3>\n    <textarea id="answer-text">\n        Loading ...\n    </textarea>\n    <button id="new_question_btn">New question</button>\n</div>\n',document.querySelector("#recognized-text").innerText=L;let e=document.querySelector("#new_question_btn");var n;e.onclick=()=>{C()},setInterval((()=>{e&&e.focus()}),100),n=L,fetch(`${q}/v1/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${_}`},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:n}]})}).then((e=>{if(200===e.status)return e.json();document.querySelector("#answer-text")&&(document.querySelector("#answer-text").value=`HTTP error! status: ${e.status}`)})).then((e=>{e&&document.querySelector("#answer-text")&&(document.querySelector("#answer-text").value=e.choices[0].message.content)})).catch((e=>{document.querySelector("#answer-text")&&(document.querySelector("#answer-text").value=`Error: ${e}`)})),k()},C=()=>{document.querySelector("#recognition-indicator").innerHTML="",document.querySelector("#app").innerHTML=w;let e=document.querySelector("#record_question_btn");setInterval((()=>{e&&e.focus()}),100),H(e)},H=e=>{e.onclick=()=>{0===$?(document.querySelector("#listen-image").hidden=!1,$++,e.innerText="Done",M()):(M(!1),L?(document.querySelector("#app").innerHTML=S,k(),$=0,setTimeout((()=>{P()}),2500)):($=0,C()))},e.onkeydown=n=>{" "!=n.key&&"Space"!=n.code&&32!=n.keyCode||0===$&&(document.querySelector("#listen-image").hidden=!1,$++,e.innerText="Listening ...",M())},e.onkeyup=e=>{" "!=e.key&&"Space"!=e.code&&32!=e.keyCode||(M(!1),L?(document.querySelector("#app").innerHTML=S,k(),$=0,setTimeout((()=>{P()}),2500)):($=0,C()))},k()},A=e=>{if(e){document.querySelector("#app").innerHTML=x;let e=document.querySelector("#record_question_btn");setInterval((()=>{e&&e.focus()}),100),H(e)}else document.querySelector("#app").innerHTML=b,document.querySelector("#reload_page_btn").onclick=()=>{sessionStorage.getItem("apiKey")&&sessionStorage.removeItem("apiKey"),window.location.reload()};k()};window.onload=()=>{(e=>{sessionStorage.getItem("lang")&&(T=sessionStorage.getItem("lang")),document.querySelector("#voice-lang").onchange=()=>{console.log("[INFO] - voice recognition lang changed: "+document.querySelector("#voice-lang").value),T=document.querySelector("#voice-lang").value,sessionStorage.setItem("lang",T),k()},_="en-US"===T?prompt("Please enter your api.openai.com key"):prompt("Пожалуйста, введите свой ключ api.openai.com"),document.querySelector("#voice-lang").hidden=!1,_===I?(U(),A(!0)):fetch(e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${_}`}}).then((e=>{200===e.status?A(!0):A(!1)})).catch((e=>{console.error(e),A(!1)}))})(`${q}/v1/models`)}})()})();