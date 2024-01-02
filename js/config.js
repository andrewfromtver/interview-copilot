export const apiUrl = "https://api.openai.com"
export let apiKey = ""
export let lang = "en-US"

export const apiKeyInputPromt = () => {
    document.querySelector("#voice_lang").onchange = () => {
        console.log("[INFO] - voice recognition lang changed: " + document.querySelector("#voice_lang").value)
        lang = document.querySelector("#voice_lang").value
    }
    apiKey = prompt("Please input OPEN AI API key")
}