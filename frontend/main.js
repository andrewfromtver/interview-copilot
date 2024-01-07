import "./style.css"

import { errorInner, successInner } from "./js/templates.js"
import { apiUrl, apiKey, apiKeyInputPromt, uiTranslate, deploymentWithBackend, speachToggleListener, deploymentTypeDetector, langChanger, lang } from "./js/config.js"
import { recordSound } from "./js/sondRecorder.js"

const detectMobileOrDesctop = () => {
    // setInterval(() => { if (recordBtn) recordBtn.focus() }, 100)
    // setInterval(() => { if (newQuestionBtn) { newQuestionBtn.focus() } }, 100)
    // to do
}

const initApp = (apiHelthy) => {
    if (apiHelthy) {
        document.querySelector("#app").innerHTML = successInner
        let recordBtn = document.querySelector("#record_question_btn")
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
    speachToggleListener()
    if (deploymentWithBackend) {
        initApp(true)
    } else {
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
}

window.onload = () => {
    //detectMobileOrDesctop()
    langChanger()
    deploymentTypeDetector()
    apiHelthcheck(`${apiUrl}/v1/models`)
}
