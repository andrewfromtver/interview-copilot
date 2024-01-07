export let apiUrl = "https://api.openai.com"
export let apiKey = ""
export let lang = "en-US"
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
    if (sessionStorage.getItem("lang")) lang = sessionStorage.getItem("lang")
    document.querySelector("#voice-lang").onchange = () => {
        console.log("[INFO] - voice recognition lang changed: " + document.querySelector("#voice-lang").value)
        lang = document.querySelector("#voice-lang").value
        sessionStorage.setItem("lang", lang)
        uiTranslate()
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
        if (!togler.checked) {
            window.speechSynthesis.cancel()
        }
    }
}