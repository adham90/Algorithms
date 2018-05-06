// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1,2,3,4,5], 2) => [[1,2],[3,4]]

function chunk(arr, size) {
  let res = []
  while(arr.length) {
    res.push(arr.splice(0, size)) 
  }
  console.log(res);
}

chunk([1,2,3,4,5,6,7,8], 2)

