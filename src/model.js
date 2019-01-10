let botShips = {};
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

const fireStatus = function(location){
  return true;
}

const loadBotShips = function() {
  Object.assign(botShips, ships);
  Object.keys(botShips).forEach(
    shipModel =>
      (botShips[shipModel].positions = getRandomShipPosition(
        botShips[shipModel]
      ))
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

const getRandomShipPosition = function(ship) {
  let shipSize = ship.size;
  let pos = Math.floor(Math.random() * 100);
  let directions = getPossibleAlignments(pos, shipSize);
  return directions[Math.floor(Math.random() * directions.length)](
    pos,
    shipSize
  );
};

const toTheRight = function(pos, shipSize) {
  let botLocations = new Array(shipSize).fill(pos);
  return botLocations.map((value, index) => value + index);
};

const toTheLeft = function(pos, shipSize) {
  let botLocations = new Array(shipSize).fill(pos);
  return botLocations.map((value, index) => value - index);
};
