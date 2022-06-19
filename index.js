require('dotenv').config()
const express = require('express')
const { Telegraf } = require('telegraf')
const SheduleService = require('./services/SheduleService')

const bot = new Telegraf(process.env.BOT_TOKEN)
const app = express()
const port = 3000
 
const chatIds = [-376994152, -1001309901017]

app.get('/', (req, res) => {
  res.send('petrosyn bot OK!')
})

app.listen(port, () => {
    bot.launch()

    SheduleService.start({jobHandel: () => {
        for (const id of chatIds) {
         bot.telegram.sendMessage(id, "Петроясн dance👍\nhttps://www.youtube.com/watch?v=ld87aAdGIvc")
        }
        
    }, cron:'* * * * *', nameJob: 'bot-petrosyn'})

  console.log(`Example app listening on port ${port}`)
})
