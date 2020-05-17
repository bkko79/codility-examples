function frogRiverOne(X, A){
  if ( A.length === 1){
    if (A[0] === 1 && X === 1 ) return 0;
    else return -1 
  }

  const leaf = [];
  const counts = {};
  let pos = -1;
  for (let i = 0; i < A.length; i++) {
    if (!counts[A[i]]) {
        counts[A[i]] = true;
        leaf.push(counts[i]);
    }
    if (leaf.length === X) {
        pos = i;
        break;
    }
 }
 return pos;
}

//console.log(frogRiverOne(5, [1,3,1,4,2,3,5,4]))