class moveAction {
  constructor(action, direction){
    if(!action){
      action = {};
    }

    this.Direction = direction;
    this.Action = 'None';
  }
};

export class moveUp extends moveAction {
  constructor(action){
    super(action, 'Up')
  }
};

export class moveDown extends moveAction {
  constructor(action){
    super(action, 'Down')
  }
};

export class moveLeft extends moveAction {
  constructor(action){
    super(action, 'Left')
  }
};

export class moveRight extends moveAction {
  constructor(action){
    super(action, 'Right')
  }
};
