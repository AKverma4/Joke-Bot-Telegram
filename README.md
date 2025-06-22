# Telegram Joke Bot

A fun Telegram bot that tells random jokes using the Official Joke API.

## Features

- Responds to `/joke` command with random jokes
- Uses Official Joke API to fetch jokes
- Easy to set up and run
- Deployable to Vercel

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

## Deployment to Vercel

1. Install Vercel CLI:

   ```bash
   npm i -g vercel
   ```

2. Deploy to Vercel:

   ```bash
   vercel
   ```

3. After deployment, get your Vercel deployment URL and set up the webhook with Telegram:
   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=<YOUR_VERCEL_URL>/api/webhook
   ```

## Commands

- `/joke` - Get a random joke

## Technologies Used

- Node.js
- node-telegram-bot-api
- axios
- dotenv
- Vercel Serverless Functions
