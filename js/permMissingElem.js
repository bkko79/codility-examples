function PermMissingElem(A) {
  let count = A.length + 1
  let gaussian =  count * ( count + 1) / 2
  let sum = A.reduce( (acc, cur) => acc + cur, 0 );
  return gaussian - sum;
}

//console.log(PermMissingElem([1,2,3,5]))