require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.on("message", (msg) => {
    if (msg.text.toString().toLowerCase() === "/start") {
      bot.sendMessage(msg.chat.id, "¡Hola! Soy un bot de memes para coneversaciones. \n \nMe puedes usar en cualquier chat dentro de Telegram. \n \nPara iniciarme en un chat solo escribes '@memenaobot ' y se cargaran todos los memes, para encontrar rápidamente un meme, puedes buscarlo por alguna palabra que esté en la imagen. \n \n¿No está el meme que buscas? \n \nPuedes subir tus memes, por el momento el unico modo es q me escribas indicando que quieres subir memes para darte el acceso @Soy_Nao");
    }
  });

module.exports = bot;