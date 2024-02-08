const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

// Handlebars api connection
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

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

// HandleBar views load
app.get('/', (req, res) => {
  res.render('index', {
    title: 'My Friends Are Very Cleaver',
    caption: "Let's go skiing!",
  });
});

// Routers
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
