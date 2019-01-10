const generateGrid = function(gridSize) {
  let table = document.createElement("table");
  for (let row = 0; row < gridSize; row++) {
    table.appendChild(generateRow(row * gridSize, gridSize));
  }
  table.setAttribute("id", "table");
  table.setAttribute("style", "border :1px solid black");
  document
    .getElementById("main")
    .replaceChild(table, document.getElementById("table"));
};

const generateRow = function(stratCell, gridSize) {
  let row = document.createElement("tr");
  for (let cell = stratCell; cell < gridSize + stratCell; cell++) {
    row.appendChild(generateCell(cell, gridSize));
  }
  return row;
};

const generateCell = function(id) {
  let cell = document.createElement("td");
  cell.setAttribute("id", id);
  cell.setAttribute("class", "groundCell");
  return cell;
};

const handleClick = function() {
  gridId = event.target.id;
  if (fireStatus(gridId)) {
    document.getElementById(gridId).innerText = "X";
  }
};

window.onload = function() {
  generateGrid(10);
  loadBotShips();
  document.getElementById("table").onclick = handleClick;
};
