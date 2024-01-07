import EasySpeech from 'easy-speech'

export let apiUrl = "https://api.openai.com"
export let apiKey = ""
export let lang = "en-US"
export let currentVoices = []
export let currentVoiceId = 0
export let speechApi = false
export let deploymentWithBackend = true
export let persistentMode = true
export const retryCount = 20

export const deploymentTypeDetector = () => {
    if (window.location.host === "andrewfromtver.github.io") {
        deploymentWithBackend = false
    } else {
        apiUrl = `${window.location.protocol}//${window.location.host}`
    }
}

export const langChanger = () => {
    EasySpeech.init({ maxTimeout: 5000, interval: 250 })
        .then(() => {
            console.info('[INFO] - EasySpeech init completed')
            let voices = EasySpeech.voices()
            currentVoices = []
            document.querySelector("#voice-mode").innerHTML = ""
            let counter = 0
            voices.forEach(voice => {
                if (voice.lang === lang) {
                    currentVoices.push(voice)
                    document.querySelector("#voice-mode").innerHTML += `
                        <option value="${counter}">${voice.name}</option>
                    `
                    counter++
                }
            })
            if (currentVoices.length > 0) {
                console.info(`[INFO] - ${currentVoices.length} voices available for ${lang} lang`)
                document.querySelector("#speech_toggle").disabled = false
            }
        })
        .catch(e => console.error(e))
    if (sessionStorage.getItem("lang")) lang = sessionStorage.getItem("lang")
    document.querySelector("#voice-lang").onchange = () => {
        console.info("[INFO] - voice recognition lang changed: " + document.querySelector("#voice-lang").value)
        EasySpeech.init({ maxTimeout: 5000, interval: 250 })
            .then(() => {
                console.info('[INFO] - EasySpeech init completed')
                let voices = EasySpeech.voices()
                currentVoices = []
                document.querySelector("#voice-mode").innerHTML = ""
                let counter = 0
                voices.forEach(voice => {
                    if (voice.lang === lang) {
                        currentVoices.push(voice)
                        document.querySelector("#voice-mode").innerHTML += `
                        <option value="${counter}">${voice.name}</option>
                    `
                        counter++
                    }
                })
            })
            .catch(e => console.error(e))
        lang = document.querySelector("#voice-lang").value
        sessionStorage.setItem("lang", lang)
        uiTranslate()
    }
    document.querySelector("#voice-mode").onchange = () => {
        currentVoiceId = Number(document.querySelector("#voice-mode").value)
    }
}

export const apiKeyInputPromt = () => {
    if (!deploymentWithBackend) {
        if (lang === "en-US") apiKey = prompt("Please enter your api.openai.com key")
        else apiKey = prompt("Пожалуйста, введите свой ключ api.openai.com")
    }
    document.querySelector("#voice-lang").hidden = false
}

export const uiTranslate = () => {
    if (sessionStorage.getItem("lang")) lang = sessionStorage.getItem("lang")
    document.querySelector("#voice-lang").value = lang
    document.querySelectorAll(".lang").forEach(elem => {
        if (elem.classList.contains(lang)) elem.hidden = false
        else elem.hidden = true
    })
}

export const speachToggleListener = () => {
    let togler = document.querySelector("#speech_toggle")
    togler.onchange = () => {
        speechApi = togler.checked
        document.querySelector("#voice-mode").hidden = !togler.checked
        if (!togler.checked) {
            EasySpeech.cancel()
        }
    }
}