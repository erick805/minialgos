// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// Time Complexity
// O(n^2) time

// Space Complexity
// O(1) space
function maxProfit(stockPrices) {
  let profit = 0;

  for (let i = 0; i < stockPrices.length; i++) {
    let boughtStock = stockPrices[i];
    for (let j = i + 1; j < stockPrices.length; j++) {
      let soldStock = stockPrices[j];
      if (boughtStock < soldStock) {
        if (profit < soldStock - boughtStock) {
          profit = soldStock - boughtStock;
        }
      }
    }
  }
  return profit;
}

//Optimized Approach - one pass

// Time Complexity
// O(n) time

// Space Complexity
// O(1) space
function maxProfit(stockPrices) {
  let minPrice = Infinity;
  let profit = 0;

  for (let i = 0; i < stockPrices.length; i++) {
    const currStock = stockPrices[i];
    // Loop through each stockPrice and find the minimum price.
    if (currStock < minPrice) {
      minPrice = currStock;
      // Followed by the highest peak
    } else if (currStock - minPrice > profit) {
      // save the highest profit
      profit = currStock - minPrice;
    }
  }
  return profit;
}
