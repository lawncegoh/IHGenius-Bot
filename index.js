const TelegramBot = require('node-telegram-bot-api');
const admin= require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});


const db = admin.firestore();

const token = '931503468:AAFub48hqlVP6_xgW1cMRpOoGAgtIjqJohQ';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id,'What do you need?', {
      reply_markup: {
        inline_keyboard: [[
          {
            text: "Today's Games",
            callback_data: 'today'
          },{
            text: "Tomorrow's Games",
            callback_data: 'tmr'
          },{
            text: "Schedule",
            callback_data: 'schedule'
          }
        ]]
      }
  });
});


let data = {
  date: "24 sep",
  game: "handball",
};

// Add a new document in collection "cities" with ID 'LA'
let setDoc = db.collection('IHG').doc("schedule").set(data);

db.collection('users').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });



 