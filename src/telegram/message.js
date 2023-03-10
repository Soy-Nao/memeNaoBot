const { Telegraf } = require('telegraf');
const fs = require('fs');
require("dotenv").config();

// Lista blanca de IDs de chat de usuarios autorizados
const authorizedUserIds = [700716730, 1980959278, 1681037361];

const bot = new Telegraf(process.env.TOKEN);

bot.on('photo', async (ctx) => {
    try {
        const senderId = ctx.from.id;
        
        // Verificar si el ID del chat del remitente está en la lista blanca
        if (!authorizedUserIds.includes(senderId)) {
            await ctx.reply('No estás autorizado para guardar memes');
            return;
        }
        
        // Verificar si la imagen tiene un texto/caption
        if (!ctx.message.caption) {
            await ctx.reply('La imagen no tiene texto, no se puede guardar');
            return;
        }
        
        // Resto del código para guardar los datos en el archivo JSON
        const photoId = ctx.message.photo[ctx.message.photo.length - 1].file_id;
        const photoInfo = await ctx.telegram.getFile(photoId);
        const fileId = photoInfo.file_path.split('/').pop(); // Obtener el ID del archivo
        
        const file = 'src/assets/data.json';
        
        let jsonData = [];
        let content = '';
        if (fs.existsSync(file)) {
            content = fs.readFileSync(file, 'utf-8');
            jsonData = JSON.parse(content);
        }
        
        // Comprobar si el ID del archivo ya está en el archivo JSON
        const fileExists = jsonData.some((data) => data.caption === ctx.message.caption);
        if (fileExists) {
            await ctx.reply(`El archivo con ID ${photoId} ya está guardado`);
            return;
        }
        
        // Si el ID del archivo no existe, guardar los datos de la imagen
        const numId = JSON.parse(content);
        const arrId = numId[numId.length - 1];
        const id = arrId ? arrId.id + 1 : 1;
        const caption = ctx.message.caption;
        const data = {
            id: id,
            photo_id: photoId,
            caption: caption,
        };
        jsonData.push(data);
        fs.writeFileSync(file, JSON.stringify(jsonData, null, 2));
        await ctx.reply(`ID del archivo (${photoId}): ${fileId} y texto (${caption}) guardados correctamente`);
        console.log(fileId);
    } catch (err) {
        console.log(err);
        await ctx.reply('Ha ocurrido un error al guardar los datos de la imagen');
    }
});

bot.launch();

module.exports = bot;