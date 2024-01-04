import { resultPlaceholder, recognizedTextPlaceholder, newQuestionInner } from "./templates.js"
import { initRecognition, resultQuestionText } from "./recognition.js"
import { apiRequest } from "./openApiRequest.js"
import { uiTranslate } from "./config.js"

let recordBtnDownCounter = 0

const printRecognizedText = () => {
    document.querySelector("#recognition-indicator").innerHTML = ""
    document.querySelector("#app").innerHTML = recognizedTextPlaceholder
    document.querySelector("#recognized-text").innerText = resultQuestionText
    let newQuestionBtn = document.querySelector("#new_question_btn")
    newQuestionBtn.onclick = () => {
        reInitApp()
    }
    setInterval(() => {
        if (newQuestionBtn) {
            newQuestionBtn.focus()
        }
    }, 100)
    apiRequest(resultQuestionText)
    uiTranslate()
}

const reInitApp = () => {
    document.querySelector("#recognition-indicator").innerHTML = ""
    document.querySelector("#app").innerHTML = newQuestionInner
    let recordBtn = document.querySelector("#record_question_btn")
    setInterval(() => { if (recordBtn) recordBtn.focus() }, 100)
    recordSound(recordBtn)
}

export const recordSound = (recordBtn) => {
    recordBtn.onclick = () => {
        if (recordBtnDownCounter === 0) {
            document.querySelector("#listen-image").hidden = false
            recordBtnDownCounter++
            recordBtn.innerText = "Done"
            initRecognition()
        } else {
            initRecognition(false)
            if (resultQuestionText) {
                document.querySelector("#app").innerHTML = resultPlaceholder
                uiTranslate()
                recordBtnDownCounter = 0
                setTimeout(() => { printRecognizedText() }, 2500)
            } else {
                recordBtnDownCounter = 0
                reInitApp()
            }
        }
    }
    recordBtn.onkeydown = (e) => {
        if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
            if (recordBtnDownCounter === 0) {
                document.querySelector("#listen-image").hidden = false
                recordBtnDownCounter++
                recordBtn.innerText = "Listening ..."
                initRecognition()
            }
        }
    }
    recordBtn.onkeyup = (e) => {
        if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
            initRecognition(false)
            if (resultQuestionText) {
                document.querySelector("#app").innerHTML = resultPlaceholder
                uiTranslate()
                recordBtnDownCounter = 0
                setTimeout(() => { printRecognizedText() }, 2500)
            } else {
                recordBtnDownCounter = 0
                reInitApp()
            }
        }
    }
    uiTranslate()
}
