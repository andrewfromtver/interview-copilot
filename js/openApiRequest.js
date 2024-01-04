import { apiKey, apiUrl } from "./config.js";

export const apiRequest = (query) => {
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
                return response.json();
            } else {
                if (document.querySelector("#answer-text")) document.querySelector("#answer-text").value = `HTTP error! status: ${response.status}`
            }
        })
        .then(data => {
            if (data && document.querySelector("#answer-text")) document.querySelector("#answer-text").value = data.choices[0].message.content
        }).catch(error => {
            if (document.querySelector("#answer-text")) document.querySelector("#answer-text").value = `Error: ${error}`
        });
}