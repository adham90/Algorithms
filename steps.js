// --- Directions
// Wirte a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character, Make sure the step
// has spaces on the right hand side!
// --- Ex
// step(2)
//    '# '
//    '##'
// step(3)
//    '#'
//    '##'
//    '###'

function step(n) {
  for (var i = 0; i < n; i++) {
    let output = ''

    for (var j = 0; j < n; j++) {
      if (j > i) {
        output += ' '
      } else {
        output += '#'
      }
    }

    console.log(output)
  }
}

step(2)
step(3)
