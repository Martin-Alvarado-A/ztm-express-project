const express = require('express');
const {
  getAllFriends,
  getFriend,
  postFriend,
} = require('./controllers/friends.controller');
const {
  getMessages,
  postMessages,
} = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;

// Logging Middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`🔎 | Server | ${req.method} ${req.url} ${delta}ms `);
});

// Json parsing Middleware
app.use(express.json());

app.get('/friends', getAllFriends);
app.get('/friends/:friendId', getFriend);
app.post('/friends', postFriend);

app.get('/messages', getMessages);
app.post('/messages', postMessages);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
