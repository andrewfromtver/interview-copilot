import EasySpeech from 'easy-speech'
import { resultPlaceholder, recognizedTextPlaceholder, newQuestionInner } from "./templates.js"
import { initRecognition, resultQuestionText } from "./recognition.js"
import { apiRequest } from "./openApiRequest.js"
import { uiTranslate } from "./config.js"

let recordBtnDownCounter = 0

const printRecognizedText = () => {
    document.querySelector("#recognition-indicator").innerHTML = ""
    document.querySelector("#app").innerHTML = recognizedTextPlaceholder
    document.querySelector("#recognized-text").value = resultQuestionText
    document.querySelector("#recognized-text").onkeydown = (event) => {
        if (event.keyCode === 13) {
            apiRequest(document.querySelector("#recognized-text").value)
            document.querySelector("#recognized-text").value = "Loading ..."
        }
    }
    let newQuestionBtn = document.querySelector("#new_question_btn")
    newQuestionBtn.onclick = () => {
        EasySpeech.cancel()
        reInitApp()
    }
    apiRequest(resultQuestionText)
    uiTranslate()
}

export const reInitApp = () => {
    recordBtnDownCounter = 0
    document.querySelector("#recognition-indicator").innerHTML = ""
    document.querySelector("#app").innerHTML = newQuestionInner
    let recordBtn = document.querySelector("#record_question_btn")
    recordSound(recordBtn)
}

const spacebarPressToTalk = (recordBtn) => {
    recordBtn.onkeydown = (e) => {
        if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
            document.querySelector("#listen-image").hidden = false
            document.querySelector("#welcome-image").hidden = true
            recordBtn.innerText = "Listening ..."
            initRecognition()
        }
    }
    recordBtn.onkeyup = (e) => {
        if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
            initRecognition(false)
            if (resultQuestionText) {
                document.querySelector("#app").innerHTML = resultPlaceholder
                uiTranslate()
                setTimeout(() => { printRecognizedText() }, 2500)
            } else {
                reInitApp()
            }
        }
    }
}

export const recordSound = (recordBtn) => {
    recordBtn.onclick = () => {
        if (recordBtnDownCounter === 0) {
            document.querySelector("#listen-image").hidden = false
            document.querySelector("#welcome-image").hidden = true
            recordBtnDownCounter++
            recordBtn.innerText = "Cancel"
            initRecognition()
        } else {
            initRecognition(false)
            if (resultQuestionText) {
                document.querySelector("#app").innerHTML = resultPlaceholder
                uiTranslate()
                recordBtnDownCounter = 0
                setTimeout(() => { printRecognizedText() }, 2500)
            } else {
                reInitApp()
            }
        }
    }
    // spacebarPressToTalk(recordBtn)
    uiTranslate()
}
