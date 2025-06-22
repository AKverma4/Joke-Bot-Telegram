const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

console.log('Environment variables loaded:', process.env.TELEGRAM_TOKEN ? 'Token exists' : 'No token found');

if (!process.env.TELEGRAM_TOKEN) {
    throw new Error('Telegram token not found in environment variables. Make sure you have a .env file with TELEGRAM_TOKEN=your_token');
}

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// bot.on('message', (option) => {
//     console.log("Message received on the bot", option);

//     bot.sendMessage(option.chat.id, "Hello, I am a bot. I am here to help you with your queries. Please type /help to know more about me.");

// });

bot.onText(/\/joke/, async (option) => {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');

    console.log(response.data);

    const setup = response.data.setup;
    const punchline = response.data.punchline;

    bot.sendMessage(option.chat.id, setup + " ,  " + punchline);
});