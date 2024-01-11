import EasySpeech from 'easy-speech'

import { lang } from "./config.js"
import { reInitApp, printRecognizedText } from "./sondRecorder.js"
import { apiRequest } from "./openApiRequest.js"

export let recognition = undefined
export let resultQuestionText = ""

export const initRecognition = (firstInit = true) => {
    if (firstInit) {
        resultQuestionText = ""
        document.querySelector("#recognition-indicator").innerHTML = ""
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()
        recognition.lang = lang
        recognition.abort()
        recognition.start()

        recognition.onresult = (event) => {
            let transcript = event.results[0][0].transcript
            console.info("[INFO] - text recognition chunk: " + transcript)
            document.querySelector("#recognition-indicator").innerHTML += `
                <div class="speech-placeholder">...</div>
            `
            resultQuestionText += transcript + "\n"
            document.querySelector("#record_question_btn").innerText = "Done"
            document.querySelector("#cancel_question_btn").hidden = false
            document.querySelector("#cancel_question_btn").onclick = () => {
                recognition.abort()
                recognition = undefined
                reInitApp()
            }
        }
        recognition.onend = () => {
            console.info("[INFO] - empty text recognition chunk")
            if (recognition) {
                recognition.abort()
                recognition.start()
            }
        }
        recognition.onerror = () => {
            console.warn("[WARN] - text recognition chunk not parsed")
        }
    } else {
        recognition.abort()
        recognition = undefined
    }
}

export const textQuestionBtnInit = () => {
    document.querySelector("#text-question-btn").onclick = () => {
        resultQuestionText = ""
        printRecognizedText()
        document.querySelector("#reload_question_btn").onclick = () => {
            EasySpeech.cancel()
            document.querySelector("#answer-text").value = "Reloading ..."
            apiRequest(document.querySelector("#recognized-text").value)
        }
        document.querySelector("#recognized-text").placeholder = "Type your question here"
        document.querySelector("#answer-text").value = "Ready for question ..."
    }
}