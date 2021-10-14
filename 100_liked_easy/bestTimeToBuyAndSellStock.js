const prices = [1, 4, 5, 6, 9, 9]

// My Solution - super slow.
const maxProfit = (arr) => {
  const helper = (arr, profit) => {
    if (arr.length <= 1) return profit
    const MIN = Math.min(...arr);
    const minIdx = arr.indexOf(MIN);
    const currArr = arr.splice(minIdx);
    const MAX = Math.max(...currArr);
    if (profit < MAX - MIN) profit = MAX - MIN;
    return helper(arr, profit)
  }
  return helper(arr, 0)
}

console.log(maxProfit(prices));

// One Pass

const onePass = (arr) => {
  let minPrice = Math.max(...arr);
  let maxProfit = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    } else if (arr[i] - minPrice > maxProfit) {
      maxProfit = arr[i] - minPrice
    }
  }
  return maxProfit;
}

// Other solution 
// From pbriss  https://leetcode.com/pbriss/
const maxProfit_1 = (arr) => {
  var min = Number.MAX_SAFE_INTEGER;
  var max = 0;
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
}

// Clean one pass
// From https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/853090/JavaScript-Clean-One-Pass-Solution
const onePass_2 = (arr) => {
  let maxProf = 0, curr = arr[0];
  for (let x of arr) {
    if (curr < x) maxProf = Math.max(maxProf, x - curr);
    else curr = x;
  }
  return maxProf;
}