const TelegramBot = require('node-telegram-bot-api');
const firebase = require('firebase');

const token = '931503468:AAFub48hqlVP6_xgW1cMRpOoGAgtIjqJohQ';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, 'Okay. Continue');
  });