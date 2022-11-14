const {getHoroscope} = require("./response");
const {bot} = require('./BotManager')
const {optionsMainMenu, optionsMenu, optionsStart} = require('./options')

async function main() {
    let horoscope = {};

    await bot.setMyCommands([
        {command: '/start', description: 'Welcome'}
    ])

    bot.on('message', async msg => {

        const {text, chat, message_id} = msg;
        const chatId = chat.id;
        const name = chat.first_name;
        if (text === '/start') {
            await bot.sendMessage(chatId, `Выберите тип гороскопа ${name}`, optionsMainMenu)
            return bot.deleteMessage(chatId, message_id)
        } else {
            await bot.sendMessage(chatId, `Неправильный ввод команды войдите в меню`, optionsMenu)
            return bot.deleteMessage(chatId, message_id)
        }

    });

    bot.on('callback_query', async res => {
        const {data, message} = res;

        const chatId = message.chat.id
        const name = res.from.first_name;
        const messageID = message.message_id
        if (["ero", 'com', "lov"].includes(data)) {
            await bot.sendMessage(chatId, `Ваш знак зодиака, ${name}`, optionsStart);
            horoscope = await getHoroscope(data);
            return bot.deleteMessage(chatId, messageID)
        }
        if (data === '/menu') {
            await bot.sendMessage(chatId, `Выберите тип гороскопа`, optionsMainMenu)
            return bot.deleteMessage(chatId, messageID)
        }
        if (data) {
            const text = horoscope[data.substr(1)].today
            await bot.sendMessage(chatId, text, optionsMenu)
            await bot.deleteMessage(chatId, messageID)
        }
    })

}

main();