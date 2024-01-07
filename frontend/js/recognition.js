import { lang } from "./config.js"

export let recognition = undefined
export let resultQuestionText = ""

export const initRecognition = (firstInit = true) => {
    if (firstInit) {
        resultQuestionText = ""
        document.querySelector("#recognition-indicator").innerHTML = ""
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()
        recognition.lang = lang
        recognition.start()

        recognition.onresult = (event) => {
            let transcript = event.results[0][0].transcript
            console.info("[INFO] - text recognition chunk: " + transcript)
            document.querySelector("#recognition-indicator").innerHTML += `
                <div class="speech-placeholder">...</div>
            `
            resultQuestionText += " " + transcript
            document.querySelector("#record_question_btn").innerText = "Done"
            document.querySelector("#cancel_question_btn").hidden = false
        }
        recognition.onend = () => {
            console.info("[INFO] - empty text recognition chunk")
            if (recognition) {
                recognition.abort()
                recognition.start()
            }
        }
        recognition.onerror = () => {
            console.info("[INFO] - text recognition chunk not parsed")
            if (recognition) {
                recognition.abort()
                recognition.start()
            }
        }
    } else {
        if (recognition) {
            recognition.abort()
        }
        recognition = undefined
    }
}