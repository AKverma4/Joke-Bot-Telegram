const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
require('dotenv').config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);

// Webhook handler
module.exports = async (req, res) => {
    try {
        if (req.method !== 'POST') {
            res.status(200).json({ message: 'Webhook is working' });
            return;
        }

        const { message } = req.body;
        
        if (!message || !message.text) {
            res.status(200).json({ message: 'No message text' });
            return;
        }

        if (message.text === '/joke') {
            const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
            const { setup, punchline } = response.data;
            
            await bot.sendMessage(message.chat.id, setup + " , " + punchline);
        }

        res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error('Error in webhook handler:', error);
        res.status(500).json({ error: 'Failed to process message' });
    }
}; 