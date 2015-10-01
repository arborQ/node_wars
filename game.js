import {  arborBot } from './bots/ArborBot'

var express = require('express');
var settings = require('./package')
var q = require('q');
var router = express.Router();

var calculate = () => {
  var deferred = q.defer();
  setTimeout(() => {
    deferred.resolve('text success');
  }, 1000);
  return deferred.promise;
};

function *foo(times) {
    for(let i = 0; i < times;i++){
      yield calculate()
    }
}


router.get('/Info', (req, res, next) => {
  var bot = new arborBot();
  res.status(200).json(bot.info);
  next();
});

router.get('/getNextMove', (req, res, next) =>{
  console.log('move?');
  var bot = new arborBot();
  res.status(200).json(bot.action());
  next();
});

router.post('/PerformNextMove', (req, res, next) =>{
  console.log('move?');
  var bot = new arborBot();
  res.status(200).json(bot.action());
  next();
});

module.exports = router;
