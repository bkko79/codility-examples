function Dominator(A){
  const map = {}
  for (let i = 0; i < A.length; i++) {
      const key = '' + A[i]
      map[key] = key in map ? map[key] + 1 : 1
      if (map[key] > A.length / 2) return i
  }
  return -1
}

console.log(Dominator([3,4,3,2,3,1,3,3]))
console.log(Dominator([5,5,5,4,4,4,4,5]))
