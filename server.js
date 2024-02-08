const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();
const PORT = 3000;

// Logging Middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(
    `🔎 | Server | ${req.method} ${req.baseUrl}${req.url} ${delta}ms `
  );
});

// Static file Middleware
app.use('/site', express.static(path.join(__dirname, 'public')));

// Json parsing Middleware
app.use(express.json());

// Routers
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
