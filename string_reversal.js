function strRev1(str) {
  let res = str.split("").reverse().join("");
  return res;
}

console.log(strRev1("foobar"))

function strRev2(str) {
  let res = []
  for (var i = 0, len = str.length; i < len; i++) {
    res.unshift(str[i])
  }
  return res.join("")
}

console.log(strRev2("foobar"))

function strRev3(str) {
  let res = ""
  for (var i = 0, len = str.length; i < len; i++) {
    res = str[i] + res
  }
  return res;
}

console.log(strRev3("foobar"))
