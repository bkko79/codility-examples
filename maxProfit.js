var maxProfit = function(prices) {
  //Get best profit
  let profit = 0;
  for ( let i = 0; i < prices.length - 1; i++){
    if (prices[i+1] > prices[i]) prices += prices[i+1]-prices[i];
  }
  return profit;
};

//console.log(maxProfit([7,1,5,3,6,4]));