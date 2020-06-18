function OddOccurrencesInArray( A ){
  let result = 0;
  for (let element of A) {
      result ^= element
  }

  return result
}

//console.log(OddOccurrencesInArray([9,3,9,3,7]))