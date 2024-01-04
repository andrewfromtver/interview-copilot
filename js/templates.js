import apiUnhealthyImg from "../assets/api-unhelthy.png"
import welcomeImg from "../assets/welcome-image.png"
import listenImg from "../assets/listen.gif"
import standbyImg from "../assets/standby-image.gif"
 
export const errorInner = `
<div class="card card-init animate__animated animate__fadeIn">
    <h3>API unavailable, please try again later</h3>
    <img src=${apiUnhealthyImg} alt="API unhelthy">
    <p></p>
    <button id="reload_page_btn">Try again</button>
</div>
`

export const successInner = `
<div class="card card-init animate__animated animate__fadeIn">
    <h3>Welcome to interview copilot</h3>
    <img id="welcome-image" src=${welcomeImg} alt="Welcome image">
    <img hidden id="listen-image" src=${listenImg} alt="Listener">
    <p>Hit spasebar or click on button below to record question, we will listen while you keep spacebar pressed</p>
    <button id="record_question_btn">Click me</button>
</div>
`

export const resultPlaceholder = `
<div class="card card-init animate__animated animate__fadeIn">
    <h3>We are decoding your question, please standby ...</h3>
    <img  src=${standbyImg} alt="PLease standby">
    <p class="loading-text">Decoding ...<p>
</div>
`

export const recognizedTextPlaceholder = `
<div class="card card-init animate__animated animate__fadeIn">
    <h3>Recognized question</h3>
    <p id="recognized-text"></p>
    <h3>GPT 3.5-turbo answer</h3>
    <textarea id="answer-text">
        Development in progress, please stay tuned for new features ...
    </textarea>
    <button id="new_question_btn">New question</button>
</div>
`

export const newQuestionInner = `
<div class="card card-init animate__animated animate__fadeIn">
    <h3>Ready to accept new questions</h3>
    <img id="welcome-image" src=${welcomeImg} alt="Welcome image">
    <img hidden id="listen-image" src=${listenImg} alt="Listener">
    <p>Hit spasebar or click on button below to record question, we will listen while you keep spacebar pressed</p>
    <button id="record_question_btn">Click me</button>
</div>
`