//import { moveUp, moveDown} from '../actions/move'
var settings = require('../package');
export class bot{
  constructor(name){
    this.info = {
      Name: `${name} (${settings.version})`,
      AvatarUrl: "https://node-os.com/images/nodejs.png",
      GameType: "TankBlaster",
      Description: `node bot in ${settings.version} version`
    };

    this.action = () => {
      return new moveDown({});
    };
  }
}
