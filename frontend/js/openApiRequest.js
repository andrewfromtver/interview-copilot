import EasySpeech from 'easy-speech'
import { apiKey, apiUrl, currentVoices, currentVoiceId, persistentMode, speechApi, retryCount } from "./config.js"

let persistentModeCount = 0
export const apiRequest = (query) => {
    document.querySelector("#reload_question_btn").onclick = () => {
        EasySpeech.cancel()
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
                        persistentModeCount++
                        document.querySelector("#answer-text").value = `Retrying [${persistentModeCount} of 20]`
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
                        EasySpeech.speak({
                            text: document.querySelector("#answer-text").value,
                            voice: currentVoices[currentVoiceId],
                            pitch: 1,
                            rate: 1,
                            volume: 1,
                            boundary: e => console.info('[INFO] - boundary reached')
                        })
                        console.info(`[INFO] - speek event with ${currentVoices[0]}`)
                    }
                    catch (e) {
                        persistentModeCount = 0
                        console.error(e)
                    }
                }
            }
        }).catch(error => {
            persistentModeCount = 0
            if (document.querySelector("#answer-text")) document.querySelector("#answer-text").value = `Error: ${error}`
        });
}