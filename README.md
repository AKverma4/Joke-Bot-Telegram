# Telegram Joke Bot

A fun Telegram bot that tells random jokes using the Official Joke API.

## Features

- Responds to `/joke` command with random jokes
- Uses Official Joke API to fetch jokes
- Easy to set up and run

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your Telegram bot token:
   ```
   TELEGRAM_TOKEN=your_bot_token_here
   ```
4. Run the bot:
   ```bash
   node index.js
   ```

## Commands

- `/joke` - Get a random joke

## Technologies Used

- Node.js
- node-telegram-bot-api
- axios
- dotenv
