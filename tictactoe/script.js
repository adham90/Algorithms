var origBoard;
const huPlayer = 'O'
const aiPlayer = 'X'
const winComp  = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
]

const cells = document.querySelectorAll('.cell');
startGame()

function startGame() {
  origBoard = Array.from(Array(9).keys())
  for (var i = 0; i < cells.length ; i++) {
    cells[i].innerText = ''
    cells[i].style.removeProperty('background-color')
    cells[i].addEventListener('click', turnClick, false)
  }
}

function turnClick(cell) {
  if (typeof origBoard[cell.target.id] == 'number') {
    if (!checkTie()) {
      turn(cell.target.id, huPlayer)
      turn(bestSpot(), aiPlayer)
    }
  }
}

function declareWinner(player) {
  document.getElementById('endgame').innerText = player
}

function emptySpots() {
  return origBoard.filter(s => typeof s == 'number')
}

function bestSpot() {
  return emptySpots()[0]
}

function checkTie() {
  if (emptySpots().length == 0) {
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = 'green'
      cells.removeEventListener('click', turnClick, false)
    }
  }
}

function turn(cellId, player) {
  origBoard[cellId] = player
  console.log(cellId)
  document.getElementById(cellId).innerText = player
  let gameWin = checkWin(origBoard, player)
  if (gameWin) {
    gameOver(gameWin)
  }
}

function checkWin(bord, player) {
 let plays = bord.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []); 
 let gameWon = null
 for (let [index, win] of winComp.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = {index: index, player: player}
      break;
    }
 }
 return gameWon
}

function gameOver(gameWon) {
console.log("gameOver")
  for (const index of winComp[gameWon.index]) {
    document.getElementById(index).style.backgroundColor = gameWon.player == huPlayer ? 'blue' : 'red'
  }
  for (var i = 0; i < cells.length; i++) {
    cells[i].removeEventListener('click', turnClick, false)
  }
  declareWinner(gameWon.player == huPlayer ? "you win" : "you lose")
}
