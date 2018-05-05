// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
// reveseInt(12) === 21
// reveseInt(300) === 3
// reveseInt(-80) === -8

function reveseInt(n) {
  let res = n.toString()

  res = res.split("").reverse().join("")

  return console.log(parseInt(res) * Math.sign(n))
}

reveseInt(12)
reveseInt(300)
reveseInt(-80)
