"use strict"

import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import http from "http"
import { Client } from "gpt-free"
import consoleStamp from 'console-stamp';

consoleStamp(console, 'yyyy/mm/dd HH:MM:ss.l');

const app = express()
app.use(cors({ origin: "*" }))
app.use(bodyParser.urlencoded({ limit: '1mb', extended: false }))
app.use(bodyParser.json({ limit: '1mb' }))
const server = http.createServer(app)
server.timeout = 30000
server.listen(80)

app.post("/v1/chat/completions", (req, resp) => {
    try {
        let query = req.body.messages[0].content
        console.info(`text query: ${query}`)
        const client = new Client()
        const conversation = client.model("chat")
        const response = conversation.ask(query)
        response.onEnd((result) => {
            resp.send({
                status: "OK",
                msg: `Query processed successfully`,
                choices: [
                    {
                        message: {
                            content: result
                        }
                    }
                ]
            })
        })
    } catch (err) {
        console.error(err)
        resp.send({
            status: "BAD",
            msg: `Server side error - ${err}`,
            choices: null
        })
    }
})

app.get("/healthcheck", (req, resp) => {
    try {
        resp.send({
            status: "OK",
            msg: `Query processed successfully`,
            choices: null
        })
    } catch (err) {
        resp.send({
            status: "BAD",
            msg: `Server side error - ${err}`,
            choices: null
        })
    }
})