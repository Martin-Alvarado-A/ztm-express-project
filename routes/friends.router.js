const express = require('express');

const {
  getAllFriends,
  getFriend,
  postFriend,
} = require('../controllers/friends.controller');

const friendsRouter = express.Router();

// Special middlewarte just for this router
friendsRouter.use((req, res, next) => {
  console.log(`🔎 | Friends Router | ipAddress: ${req.ip}`);
  next();
});

friendsRouter.get('/', getAllFriends);
friendsRouter.get('/:friendId', getFriend);
friendsRouter.post('/', postFriend);

module.exports = friendsRouter;
