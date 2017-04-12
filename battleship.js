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


//something is broken with the randomRow Random Cell generator and the check for hits
function generateShips() {
  while (otherCounter < 5) {
    while((ships[randomRow][randomCell - 1] == "ship") ||  (ships[randomRow + 1][randomCell] == "ship") ||
    (ships[randomRow][randomCell + 1] == "ship") ||
    (ships[randomRow][randomCell] == "ship")) {
      randomRow = Math.floor(Math.random()*10)
      randomCell = Math.floor(Math.random()*10)
    }
    console.log(randomRow)
    console.log(randomCell)
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
//checkForHits is a function that reclasses the td's to a hit or miss
//
function checkForHits(e){
  var coordinate = e.target.id

  if(ships[parseInt(tr.id)][coordinate.split("")[1]] === "ship" && hitCounter > 0 && missCounter > 0) {
    document.getElementById(coordinate).className = "hit"
    document.getElementById(coordinate).innerHTML = "<img src='http://www.clker.com/cliparts/c/Z/f/z/4/J/navy-ship-hi.png'/>"
    hitCounter--
    document.getElementById("hits").innerHTML = "Remaining Ships: " + hitCounter
  }
  if(ships[parseInt(tr.id)][coordinate.split("")[1]] === "" && hitCounter > 0 && missCounter > 0) {
    document.getElementById(coordinate.charAt(1)).className = "miss"
    missCounter--
    document.getElementById("misses").innerHTML = "Remaining torpedos: " + missCounter
  }
  if(hitCounter == 0 && missCounter > 0) {
    alert('you win')
  }
  if(hitCounter > 0 && missCounter == 0) {
    alert('you lose')
  }
}
