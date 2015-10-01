var moveAction = ({ action, direction }) => {
  if(!action){
    action = {};
  }

  action.Direction = direction;
  action.Action = 'None';
  return action;
};

export var moveUp = (action) => {
  this.prototype = new moveAction(action, 'Up');
  return this;
};

export var moveDown = (action) => {
  this.prototype = new moveAction(action, 'Down');
  return this;
};

export var moveLeft = (action) => {
  this.prototype = new moveAction(action, 'Left');
  return this;
};

export var moveRight = (action) => {
  this.prototype = new moveAction(action, 'Right');
  return this;
};
