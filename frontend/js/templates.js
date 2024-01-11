import apiUnhealthyImg from "../assets/api-unhelthy.png"
import welcomeImg from "../assets/welcome-image.png"
import listenImg from "../assets/listen.gif"
import standbyImg from "../assets/standby-image.gif"

export const errorInner = `
<div class="card card-init animate__animated animate__fadeIn">
    <h3 class="lang en-US">
        The API is unavailable, please try again later
    </h3>
    <h3 class="lang ru-RU">
        API недоступен, повторите попытку позже
    </h3>
    <img src=${apiUnhealthyImg} alt="API unavailable">
    <p></p>
    <button id="reload_page_btn">Try again</button>
</div>
`

export const successInner = `
<div class="card card-init animate__animated animate__fadeIn">
    <h3 class="lang en-US">
        Welcome to the interview with the co-pilot
    </h3>
    <h3 class="lang ru-RU">
        Добро пожаловать на интервью со вторым пилотом
    </h3>
    <img id="welcome-image" src=${welcomeImg} alt="Welcome image">
    <img hidden id="listen-image" src=${listenImg} alt="Listener">
    <p class="lang en-US">
        Press the button below to record the question, 
        we will listen until you press the "Done" button
    </p>
    <p class="lang ru-RU">
        Нажмите на кнопку ниже, чтобы записать вопрос, 
        мы будем слушать, пока вы не нажмете кнопку "Done"
    </p>
    <button id="record_question_btn">Click me</button>
    <button hidden id="cancel_question_btn">Cancel</button>
</div>
`

export const resultPlaceholder = `
<div class="card card-init animate__animated animate__fadeIn">
    <h3 class="lang en-US">
        We are deciphering your question, please wait ...
    </h3>
    <h3 class="lang ru-RU">
        Мы расшифровываем ваш вопрос, пожалуйста, подождите ...
    </h3>
    <img  src=${standbyImg} alt="PLease standby">
    <p class="lang en-US"">
        Deciphering ...
    <p>
    <p class="lang ru-RU"">
        Расшифровка ...
    <p>
</div>
`

export const recognizedTextPlaceholder = `
<div class="card card-init animate__animated animate__fadeIn">
    <h3 class="lang en-US">
        The question
    </h3>
    <h3 class="lang ru-RU">
        Ваш вопрос
    </h3>
    <input type="text" id="recognized-text"></input>
    <h3 class="lang en-US">
        GPT 3.5-turbo answer
    </h3>
    <h3 class="lang ru-RU">
        Ответ GPT 3.5-turbo
    </h3>
    <textarea id="answer-text">Loading ...</textarea>
    <button id="new_question_btn">New question</button>
    <button id="reload_question_btn">Try again</button>
</div>
`

export const newQuestionInner = `
<div class="card card-init animate__animated animate__fadeIn">
    <h3 class="lang en-US">
        We are ready to accept new questions
    </h3>
    <h3 class="lang ru-RU">
        Мы готовы принять новые вопросы
    </h3>
    <img id="welcome-image" src=${welcomeImg} alt="Welcome image">
    <img hidden id="listen-image" src=${listenImg} alt="Listener">
    <p class="lang en-US">
        Press the button below to record the question, 
        we will listen until you press the "Done" button
    </p>
    <p class="lang ru-RU">
        Нажмите на кнопку ниже, чтобы записать вопрос, 
        мы будем слушать, пока вы не нажмете кнопку "Done"
    </p>
    <button id="record_question_btn">Click me</button>
    <button hidden id="cancel_question_btn">Cancel</button>
</div>
`