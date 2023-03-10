const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.TOKEN);

// cargamos los metodos
const { searchImages } = require("./src/telegram/inline");
require("./src/telegram/message");

// Verificar que el bot se conectó correctamente a la API de Telegram
bot.telegram.getMe().then((me) => {
console.log(`El bot se ha conectado correctamente como @${me.username}`);

// Cuando se envía una consulta inline con el bot "@your_bot" se ejecuta la siguiente función
bot.on("inline_query", (ctx) => {
const query = ctx.inlineQuery.query; // Consulta inline recibida
const offset = ctx.inlineQuery.offset ? parseInt(ctx.inlineQuery.offset) : 0; // Offset actual
const { results, nextOffset } = searchImages(query, offset);
ctx.answerInlineQuery(results, {
  cache_time: 0,
  next_offset: nextOffset,
});
});
});

module.exports = bot;





