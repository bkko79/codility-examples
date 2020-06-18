function Blocks(H){
  let res = [];
  let count = 0;
  res[0] = H[0];

  for( let i = 1; i < H.length; i++ ){
      if(res[res.length-1]===H[i]){
          count++;
      }
      else if(res[res.length-1]>H[i]){
          while(res[res.length-1]>H[i]){
              res.pop();
          }
          if(res[res.length-1]===H[i]){
              count++;
          }
          else{
              res.push(H[i]);
          }
      }
      else{
          res.push(H[i]);
      }
  }
  return H.length-count;
}

console.log(Blocks([8,8,5,7,9,8,7,4,8]))