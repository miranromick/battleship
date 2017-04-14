var missCounter = 25
var hitCounter = 5
var otherCounter = 0
var SHIPSIZE =[5, 4, 3, 3, 2]
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
// x
  var a = row - 1
  if (a < 0) {
    a = row
  }
// xx
  var aa = row + 1
  if (aa > 9) {
    aa = row
  }
// y
  var d = cell - 1
  if (d < 0) {
    d = cell
  }
// yy
  var dd = cell + 1
  if (dd > 9) {
    dd = cell
  }

  return (ships[row][cell] === "ship" ||
          ships[row][d] === "ship" ||
          ships[row][dd] === "ship" ||
          ships[a][cell] === "ship" ||
          ships[a][d] === "ship" ||
          ships[a][dd] === "ship" ||
          ships[aa][cell] === "ship" ||
          ships[aa][d] === "ship" ||
          ships[aa][dd] === "ship"
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
  var row = coordinate[0]
  var col = coordinate[1]

  // var row =
  if(ships[row][col] === "ship" && hitCounter > 0 && missCounter > 0) {
    document.getElementById(coordinate).className = "hit"
    document.getElementById(coordinate).innerHTML = "<img src='http://www.clker.com/cliparts/c/Z/f/z/4/J/navy-ship-hi.png'/>"
    hitCounter--
    document.getElementById("hits").innerHTML = "Remaining Ships: " + hitCounter
  }
  if(ships[row][col] === "" && hitCounter > 0 && missCounter > 0 && document.getElementById(coordinate).className != "hit" && document.getElementById(coordinate).className != "miss") {
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
