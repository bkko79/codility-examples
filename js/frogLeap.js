function frogLeap(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  let distance = Y - X
  let min = Math.ceil(distance / D)
  return min
}

//console.log(frogLeap(10,85,30));