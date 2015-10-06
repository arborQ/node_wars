import { arborBot } from '../bots/arborBot'
import { bot } from '../bots/botBase'
var express = require('express');
var router = express.Router();
router.get('/:name', function(req, res, next) {
  var neBot = new  bot(req.params.name);
  res.send(`bot ${neBot.info.Name} calculated name`);
});

module.exports = router;
