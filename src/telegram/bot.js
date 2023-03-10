require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => ctx.reply('¡Hola! Bienvenido.'));

bot.on('text', (ctx) => {
  const messageText = ctx.message.text;
  const chatId = ctx.chat.id;

  // Aquí puedes agregar la lógica que necesites para procesar el mensaje.

  ctx.reply(`Recibido: ${messageText}`);
});

bot.launch();

module.exports = bot;
