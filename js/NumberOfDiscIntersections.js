function NumberOfDiscIntersections(A){
  const numPoints =  A.length;
  let numIntersections = 0;
  let startAndEndPoints = A.map((currentDisc, i) => [i - A[i], i + A[i]]);
   
  startAndEndPoints.sort((a,b) => a[0] - b[0]);
  console.log(startAndEndPoints)

  for (let j = 0; j < numPoints; j++) {
      const discPoint = startAndEndPoints[j];
      const discEndPoint = discPoint[1];
      for (let k = j + 1; k < numPoints; k++){
          const comparisonDisc = startAndEndPoints[k];
          const comparisonStartPoint = comparisonDisc[0];
          if (comparisonStartPoint <= discEndPoint) {
              // comparison disc is within this disc's area
              numIntersections++;
              if (numIntersections >10000000){
                  return -1;    
              }
          } else {
              // all other discs will be further right than this disc
              break;    
          }
      } 
  }
  return numIntersections;
}

//console.log(NumberOfDiscIntersections([1,5,2,1,4,0]))