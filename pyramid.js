// --- Directions
// Wirte a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character, Make sure the
// pyramid has spaces on both the left and right hasn sides
// --- Ex
// pyramid(3)
//    '  #  '
//    ' ### '
//    '#####'


function pyramid(n) {
  let count = 1
  n += 2

  while(count <= n) {
    let shift = Math.floor((n - count) / 2)
    let spaces = ' '.repeat(shift)
    let output = spaces + "#".repeat(count)

    console.log(output)

    count += 2
  }
}

pyramid(3)

