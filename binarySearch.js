// Find the index of an value that "greater and closest" to the target
// The arr must be sorted
// If not find the mached value, the value "greater" and "closest" will be returned

function findIdxOfTarget(arr, target) {
  let left = 0
  let right = arr.length
  let mid = 0
  while (left < right) {
    mid = Math.floor((left + right) / 2)
    if (arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1
    }
  }
  return left
}

// let arr = [1, 1, 1, 10, 10, 10], t = 9
// return [10]

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], t = 3

// let arr = [1, 100, 120, 121, 123, 125, 160, 167, 168, 169], t = 161
let arr = [55, 56, 57, 58, 59, 60, 61, 62, 63, 64], t = 65

console.log(
  findIdxOfTarget(arr, t)
)