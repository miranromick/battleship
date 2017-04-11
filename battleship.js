var ships = [
  "ship","ship","ship","ship","ship","","","","","",
  "","","","","","","","","","",
  "","","","","","","","","","",
  "","","","","","","","","","",
  "","","","","","","","","","",
  "","","","","","","","","","",
  "","","","","","","","","","",
  "","","","","","","","","","",
  "","","","","","","","","","",
  "","","","","","","","","","",
]

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
    console.log(ships[coordinate])
    document.getElementById(coordinate).className = "hit"
}

// if(ships[this.id] = "ship") {
//   var coordinate = e.target.id
//   document.getElementById(coordinate).className = "hit"
// } else document.getElementById(coordinate).className = "miss"
// var ships = [
//   ["ship","ship","ship","ship","ship","","","","",""],
//   ["","","","","","","","","",""],
//   ["","","","","","","","","",""],
//   ["","","","","","","","","",""],
//   ["","","","","","","","","",""],
//   ["","","","","","","","","",""],
//   ["","","","","","","","","",""],
//   ["","","","","","","","","",""],
//   ["","","","","","","","","",""],
//   ["","","","","","","","","",""],
// ]
