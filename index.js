require('dotenv').config()
const express = require('express')
const { Telegraf } = require('telegraf')
const SheduleService = require('./services/SheduleService')

const bot = new Telegraf(process.env.BOT_TOKEN)
const app = express()
const port = process.env.PORT || 3030
 
const chatIds = [-376994152, -1001309901017]

app.use(express.json())

app.get('/', (req, res) => {
  res.json({status: 'petrosyn bot OK!'})
})


app.listen(port, () => {
    bot.launch()

    SheduleService.start({jobHandel: () => {
      for (const id of chatIds) {
       bot.telegram.sendMessage(id, "Петроясн dance👍\nhttps://www.youtube.com/watch?v=ld87aAdGIvc")
      }
      
  }, cron:'0 20 * * *', nameJob: 'bot-petrosyn'})

  console.log(`Example app listening on port ${port}`)
})
