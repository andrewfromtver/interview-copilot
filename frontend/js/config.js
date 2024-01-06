export let apiUrl = "https://api.openai.com"
const demoApiUrl = "http://134.209.194.96:8080"
export let apiKey = ""
export let lang = "en-US"
export const demoModeKeyKode = "demo"
export let speechApi = false

export const apiKeyInputPromt = () => {
    if (sessionStorage.getItem("lang")) lang = sessionStorage.getItem("lang")
    document.querySelector("#voice-lang").onchange = () => {
        console.log("[INFO] - voice recognition lang changed: " + document.querySelector("#voice-lang").value)
        lang = document.querySelector("#voice-lang").value
        sessionStorage.setItem("lang", lang)
        uiTranslate()
    }
    if (lang === "en-US") apiKey = prompt("Please enter your api.openai.com key")
    else apiKey = prompt("Пожалуйста, введите свой ключ api.openai.com")
    document.querySelector("#voice-lang").hidden = false
}

export const uiTranslate = () => {
    document.querySelector("#voice-lang").onclick = () => {
        if (document.querySelector("#voice-lang").value === "ru-RU") {
            document.querySelector("#voice-lang").value = "en-US"
        }
        else {
            document.querySelector("#voice-lang").value = "ru-RU"
        }
        console.log("[INFO] - voice recognition lang changed: " + document.querySelector("#voice-lang").value)
        lang = document.querySelector("#voice-lang").value
        sessionStorage.setItem("lang", lang)
        uiTranslate()
    }
    if (sessionStorage.getItem("lang")) lang = sessionStorage.getItem("lang")
    document.querySelector("#voice-lang").value = lang
    document.querySelectorAll(".lang").forEach(elem => {
        if (elem.classList.contains(lang)) elem.hidden = false
        else elem.hidden = true
    })
}

export const enableDemoMode = () => {
    if (apiKey === demoModeKeyKode) apiUrl = demoApiUrl
    if (apiKey === "onprem") apiUrl = `${window.location.protocol}//${window.location.host}`
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