const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const bot = new TelegramBot(process.env.TOKEN, {
  webhook: {
    port: process.env.PORT,
    host: process.env.HOST,
  },
});

bot.setWebHook(`${process.env.WEBHOOK_BASE_URL}/${bot.token}`);

module.exports = bot;
