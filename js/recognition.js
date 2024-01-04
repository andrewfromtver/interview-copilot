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
            console.log("[INFO] - text recognition chunk: " + transcript)
            document.querySelector("#recognition-indicator").innerHTML += `
            <div class="speech-placeholder">...</div>
        `
            resultQuestionText += " " + transcript
            if (recognition) {
                recognition.stop()
                recognition.start()
            }
        }
        recognition.onend = (event) => {
            console.log("[INFO] - empty text recognition chunk")
            if (recognition) {
                recognition.stop()
                recognition.start()
            }
        }
        recognition.onerror = (event) => {
            console.log("[ERROR] - text recognition chunk not parsed")
            if (recognition) {
                recognition.stop()
                recognition.start()
            }
        }
    } else {
        if (recognition) {
            recognition.stop()
        }
        recognition = undefined
    }
}