var missCounter = 25
var hitCounter = 5
var otherCounter = 0
var ships = [
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
]


// if(ships[random + 1] == "ship" || ships[random - 1] == "ship"){otherCounter++}

var randomRow = Math.floor(Math.random()*10)
var randomCell = Math.floor(Math.random()*10)


//something is broken with the randomRow Random Cell generator and the check for hit

function fit(row, cell) {

  var x = row - 1
  if (x < 0) {
    x = row
  }

  var xx = row + 1
  if (xx > 9) {
    xx = row
  }

  var y = cell - 1
  if (y < 0) {
    y = cell
  }

  var yy = cell + 1
  if (yy > 9) {
    yy = cell
  }

  return (ships[row][cell] === "ship" ||
          ships[row][y] === "ship" ||
          ships[row][yy] === "ship" ||
          ships[x][cell] === "ship" ||
          ships[x][y] === "ship" ||
          ships[x][yy] === "ship" ||
          ships[xx][cell] === "ship" ||
          ships[xx][y] === "ship" ||
          ships[xx][yy] === "ship"
          )
}

function generateShips() {
  while (otherCounter < 5) {
    while(fit(randomRow, randomCell)) {
      randomRow = Math.floor(Math.random()*10)
      randomCell = Math.floor(Math.random()*10)
    }
    console.log("Row: " + randomRow + " Cell: " + randomCell)
    ships[randomRow][randomCell] = "ship"
    otherCounter++
    randomRow = Math.floor(Math.random()*10)
    randomCell = Math.floor(Math.random()*10)
  }
}


// first loop create the rows
// second loop create the td cells
//
for (var x = 0; x < 10; x++) {
  var createRows = document.querySelector('#gameBoard')
  var tr = createRows.insertRow(x)
  tr.id = x
  for (var y = 0; y < 10; y++) {
    var createCells = document.getElementById(x)
    var td = createCells.insertCell(y)
    td.setAttribute("onclick", "checkForHits(event)")
    td.id = "" + x + y
  }
}


function checkForHits(e){
  var coordinate = e.target.id
  // var row =
  if(ships[parseInt(tr.id)][coordinate.split("")[1]] === "ship" && hitCounter > 0 && missCounter > 0) {
    document.getElementById(coordinate).className = "hit"
    document.getElementById(coordinate).innerHTML = "<img src='http://www.clker.com/cliparts/c/Z/f/z/4/J/navy-ship-hi.png'/>"
    hitCounter--
    document.getElementById("hits").innerHTML = "Remaining Ships: " + hitCounter
  }
  if(ships[parseInt(tr.id)][coordinate.split("")[1]] === "" && hitCounter > 0 && missCounter > 0) {
    document.getElementById(coordinate).className = "miss"
    missCounter--
    document.getElementById("misses").innerHTML = "Remaining torpedos: " + missCounter
  }
  if(hitCounter == 0 && missCounter > 0) {
    document.getElementById("outcome").innerHTML = "You Win"
  }
  if(hitCounter > 0 && missCounter == 0) {
    document.getElementById("outcome").innerHTML = "You Lose"
  }
}
