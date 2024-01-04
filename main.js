import "./style.css"

import { errorInner, successInner } from "./js/templates.js"
import { apiUrl, apiKey, apiKeyInputPromt, uiTranslate } from "./js/config.js"
import { recordSound } from "./js/sondRecorder.js"

const initApp = (apiHelthy) => {
    if (apiHelthy) {
        document.querySelector("#app").innerHTML = successInner
        let recordBtn = document.querySelector("#record_question_btn")
        setInterval(() => { if (recordBtn) recordBtn.focus() }, 100)
        recordSound(recordBtn)
    } else {
        document.querySelector("#app").innerHTML = errorInner
        document.querySelector("#reload_page_btn").onclick = () => {
            if (sessionStorage.getItem("apiKey")) {
                sessionStorage.removeItem("apiKey")
            }
            window.location.reload()
        }
    }
    uiTranslate()
}

const apiHelthcheck = (apiUrl) => {
    apiKeyInputPromt()
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        }
    })
        .then((response) => {
            if (response.status === 200) {
                initApp(true)
            } else {
                initApp(false)
            }
        })
        .catch(err => {
            console.error(err)
            initApp(false)
        })
}

window.onload = () => {
    apiHelthcheck(`${apiUrl}/v1/models`)
}
