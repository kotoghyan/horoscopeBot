function createBot(){
    const TelegramApi = require('node-telegram-bot-api');
    const envConfig = require('dotenv').config();
    const token = process.env["BOT_TOKEN"];
    return new TelegramApi( token, {polling: true});

}
module.exports = {bot: createBot()}

