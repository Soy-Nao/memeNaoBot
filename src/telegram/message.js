// const bot = require("./bot");
// const fs = require("fs");

// // Lista blanca de IDs de chat de usuarios autorizados
// const authorizedUserIds = [700716730, 1980959278, 1681037361];

// bot.on('photo', async (msg) => {
//     try {
//         const senderId = msg.from.id;
      
//         // Verificar si el ID del chat del remitente está en la lista blanca
//         if (!authorizedUserIds.includes(senderId)) {
//             await bot.sendMessage(msg.chat.id, 'No estás autorizado para guardar memes');
//             return;
//         }
      
//         // Verificar si la imagen tiene un texto/caption
//         if (!msg.caption) {
//             await bot.sendMessage(msg.chat.id, 'La imagen no tiene texto, no se puede guardar');
//             return;
//         }
      
//         // Resto del código de guardar los datos en el archivo JSON
//         const photoId = msg.photo[msg.photo.length - 1].file_id;
//         const photoInfo = await bot.getFile(photoId);
//         const fileId = photoInfo.file_path.split('/').pop(); // Obtener el ID del archivo
  
//         const file = 'src/assets/data.json';
  
//         let jsonData = [];
//         let content = '';
//         if (fs.existsSync(file)) {
//             content = fs.readFileSync(file, 'utf-8');
//             jsonData = JSON.parse(content);
//         }
  
//         // Comprobar si el ID del archivo ya está en el archivo JSON
//         const fileExists = jsonData.some((data) => data.caption === msg.caption);
//         if (fileExists) {
//             await bot.sendMessage(msg.chat.id, `El archivo con ID ${photoId} ya está guardado`);
//             return;
//         }
  
//         // Si el ID del archivo no existe, guardar los datos de la imagen
//         const numId = JSON.parse(content);
//         const arrId = numId[numId.length - 1];
//         const id = arrId ? arrId.id + 1 : 1;
//         const caption = msg.caption;
//         const data = {
//             id: id,
//             photo_id: photoId,
//             caption: caption,
//         };
//         jsonData.push(data);
//         fs.writeFileSync(file, JSON.stringify(jsonData, null, 2));
//         await bot.sendMessage(msg.chat.id, `ID del archivo (${photoId}): ${fileId} y texto (${caption}) guardados correctamente`);
//         console.log(fileId);
//     } catch (err) {
//         console.log(err);
//         await bot.sendMessage(msg.chat.id, 'Ha ocurrido un error al guardar los datos de la imagen');
//     }
// });
