const prices = [12, 4, 5, 6, 9, 9]

// My Solution - super slow.
const maxProfit = (arr) => {
  const helper = (arr, profit) => {
    if (arr.length <= 1) return profit
    const MIN = Math.min(...arr);
    console.log(MIN)
    const minIdx = arr.indexOf(MIN)


    const currArr = arr.splice(minIdx);
    const MAX = Math.max(...currArr);
    console.log(MAX)
    if (profit < MAX - MIN) profit = MAX - MIN;

    if (arr.length || arr) {

      return helper(arr, profit)
    } else {
      return profit;
    }
  }
  return helper(arr, 0)
}

console.log(maxProfit(prices));