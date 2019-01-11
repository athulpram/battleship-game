let botShips = {};
let fireLog = [];

class Ship {
  constructor(size) {
    this.size = size;
    this.damages = [];
    this.positions = getRandomShipPosition(size);
  }
  isAlive() {
    return !(this.damages.length == this.size);
  }
}

const ships = {
  aircraftCarrier: {
    size: 2
  },
  battleShip: {
    size: 4
  },
  cruiser: {
    size: 3
  },
  submarine: {
    size: 3
  },
  destroyer: {
    size: 2
  }
};

const fireStatus = function(location) {
  let firingStatus = { status: false };
  status = Object.keys(botShips).forEach(ship => {
    if (botShips[ship].positions.includes(location)) {
      botShips[ship].damages.push(location);
      firingStatus.status = true;
      firingStatus[ship] = botShips[ship].isAlive();
    }
  });
  fireLog.push(firingStatus);
  return firingStatus;
};

const loadBotShips = function() {
  Object.assign(botShips, ships);
  Object.keys(botShips).forEach(
    shipModel => (botShips[shipModel] = new Ship(ships[shipModel].size))
  );
};

const getPossibleAlignments = function(pos, shipSize) {
  let directions = [];
  if (10 - (pos % 10) > shipSize) {
    directions.push(toTheRight);
  }
  if (pos % 10 > shipSize) {
    directions.push(toTheLeft);
  }
  return directions;
};

const getRandomShipPosition = function(shipSize) {
  let pos = Math.floor(Math.random() * 100);
  let directions = getPossibleAlignments(pos, shipSize);
  return directions[Math.floor(Math.random() * directions.length)](
    pos,
    shipSize
  );
};

const toTheRight = function(pos, shipSize) {
  let botpositions = new Array(shipSize).fill(pos);
  return botpositions.map((value, index) => value + index);
};

const toTheLeft = function(pos, shipSize) {
  let botpositions = new Array(shipSize).fill(pos);
  return botpositions.map((value, index) => value - index);
};
