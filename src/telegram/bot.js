require("dotenv").config();
const TelegramBot = require("telegraf");

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

module.exports = bot;