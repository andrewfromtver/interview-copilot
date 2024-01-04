import { lang } from "./config.js"

export let recognition = undefined
export let resultQuestionText = ""

export const initRecognition = (firstInit = false) => {
    if (firstInit) {
        resultQuestionText = ""
        document.querySelector("#recognition-indicator").innerHTML = ""
    }
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()
    recognition.lang = lang
    recognition.start()
    recognition.onresult = (event) => {
        let transcript = event.results[0][0].transcript
        console.log("[INFO] - text recognition chunk: " + transcript)
        document.querySelector("#recognition-indicator").innerHTML += `
            <div class="speech-placeholder">...</div>
        `
        initRecognition(false)
        resultQuestionText += " " + transcript
    }
}