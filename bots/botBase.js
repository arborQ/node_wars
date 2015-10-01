import { moveUp, moveDown, moveLeft, moveRight } from '../actions/move'
var settings = require('../package');
export class bot{

  constructor(name){
    this.gameType = 'TankBlaster';
    this.avatar = 'https://node-os.com/images/nodejs.png';
    this.info = {
      Name: `${name} (${settings.version})`,
      AvatarUrl: this.avatar,
      GameType: this.gameType,
      Description: `node bot in ${settings.version} version`
    };

    this.action = () => {
      var index = Math.floor((Math.random() * 10) + 1) % 4;
      var moves = [ moveUp, moveDown, moveLeft, moveRight ];
      console.log(index);
      return new moves[index]({});
    };
  }
}
