const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '882468554:AAH_8_eE4dATkcsVygNY0FuSPqVGMd4Q1Oc'
//C:\Users\Хозяина\WebstormProjects\heruku_bot9
const bot = new TelegramBot (TOKEN, {polling: true} )





    bot.on('message', msg =>
    {bot.sendMessage (msg.chat.id, 'helloy epta yeba)))/start11')})

    var id=msg.from.id;

    bot.on('message', function(msg){
    if(msg.text=="/start11"){
        bot.sendMessage(id, 'кнопка перевела вот сюда');}
    


});
