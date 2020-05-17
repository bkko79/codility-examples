function CountDiv(A,B,K){
  return Math.floor(B / K) - Math.floor(A / K) + (A % K === 0 ? 1 : 0);
}

//console.log(CountDiv(6,11,2))