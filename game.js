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
  arborBot();
  res.status(200).json({
    Name : `NodeBot_v${settings.version}`,
    AvatarUrl : "https://node-os.com/images/nodejs.png",
    GameType : "AntWars",
    Description : `node bot in ${settings.version} version`
  });
  next();
});

router.post('/PerformNextMove', (req, res, next) =>{

});

module.exports = router;
