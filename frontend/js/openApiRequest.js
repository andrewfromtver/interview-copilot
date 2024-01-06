import { apiKey, apiUrl, lang, persistentMode, speechApi, retryCount } from "./config.js";

let persistentModeCount = 0
export const apiRequest = (query) => {
    document.querySelector("#reload_question_btn").onclick = () => {
        window.speechSynthesis.cancel()
        document.querySelector("#answer-text").value = "Reloading ..."
        apiRequest(document.querySelector("#recognized-text").innerText)
    }
    fetch(`${apiUrl}/v1/chat/completions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "user",
                    "content": query
                }
            ]
        })
    })
        .then((response) => {
            if (response.status === 200) {
                persistentModeCount = 0
                return response.json()
            } else {
                if (document.querySelector("#answer-text")) {
                    document.querySelector("#answer-text").value = `HTTP error! status: ${response.status}`
                    if (persistentMode && persistentModeCount < retryCount) {
                        persistentModeCount ++
                        document.querySelector("#answer-text").value = `Retrying [${persistentModeCount} of 10]`
                        apiRequest(query)
                    } else {
                        persistentModeCount = 0
                    }
                }
            }
        })
        .then(data => {
            if (data && document.querySelector("#answer-text")) {
                document.querySelector("#answer-text").value = data.choices[0].message.content
                if (speechApi) {
                    try {
                        window.speechSynthesis.cancel()
                        let msg = new SpeechSynthesisUtterance()
                        msg.rate = 1.15
                        msg.pitch = 1
                        msg.lang = lang
                        msg.text = document.querySelector("#answer-text").value
                        window.speechSynthesis.speak(msg)
                    }
                    catch (e) {
                        persistentModeCount = 0
                        window.speechSynthesis.cancel()
                        console.error(e)
                    }
                }
            }
        }).catch(error => {
            if (document.querySelector("#answer-text")) document.querySelector("#answer-text").value = `Error: ${error}`
        });
}