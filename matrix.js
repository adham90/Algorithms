// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Ex
//  matrix(2)
//    [
//      [1,2],
//      [4,3]
//    ]

function matrix(n) {
  let arr      = []
  let counter  = 1
  let startCol = 0
  let endCol   = n - 1
  let startRow = 0
  let endRow   = n -1

  for (var i = 0; i < n; i++) {
    arr.push([])
  }

  while (startRow <= endRow && startCol <= endCol) {
    // top row
    for (var i = startCol; i <= endCol; i++) {
      arr[startRow][i] = counter
      counter++
    }
    startRow++

    // right col
    for (var i = startRow; i <= endRow; i++) {
      arr[i][endCol] = counter
      counter++
    }
    endCol--

    // bottom row
    for (var i = endCol; i >= startCol; i--) {
      arr[endRow][i] = counter
      counter++
    }
    endRow--

    // left col
    for (var i = endRow; i >= startRow; i--) {
      arr[i][startCol] = counter
      counter++
    }
    startCol++
  }

  console.log(arr)
}

matrix(2)
matrix(3)
matrix(10)
