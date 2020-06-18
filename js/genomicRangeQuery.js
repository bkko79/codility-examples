function GenomicRangeQuery(S,P,Q){
  let answer = []

  for ( let i = 0; i < P.length; i++){
    let part = S.slice(P[i], Q[i]+1)

    if ( part.indexOf('A') !== -1 ){
      answer.push(1)
    } else if ( part.indexOf('C') !== -1 ){
      answer.push(2)
    } else if ( part.indexOf('G') !== -1 ){
      answer.push(3)
    } else if ( part.indexOf('T') !== -1 ){
      answer.push(4)
    }
  }
  return answer
}

//console.log(GenomicRangeQuery('CAGCCTA', [2,5,0], [4,5,6]))
//console.log(GenomicRangeQuery('TC', [0, 0, 1], [0, 1, 1]))