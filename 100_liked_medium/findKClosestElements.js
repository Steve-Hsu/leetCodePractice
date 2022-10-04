/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// My solution, slow run sleep, less memo use
var findClosestElements = function (arr, k, x) {
  let X_idx = arr.indexOf(x)
  let length = arr.length
  if (X_idx === 0) return arr.slice(0, k)
  if (X_idx === length - 1) return arr.slice(- k)

  if (X_idx === -1) {
    if (x > arr[length - 1]) {
      return arr.slice(-k)
    }
    if (x < arr[0]) {
      return arr.slice(0, k)
    }

    let upper = x
    let lower = x
    while (X_idx === -1) {

      lower = lower - 1
      upper = upper + 1
      if (arr.indexOf(lower) >= 0) X_idx = arr.indexOf(lower)
      if (arr.indexOf(upper) >= 0) X_idx = arr.indexOf(upper)
    }
  }

  let l = X_idx - 1
  let r = X_idx
  while (k--) {
    let a = arr[l]
    let b = arr[r]
    let result;
    if (a === x) {
      result = a
      l = l - 1
      continue
    }
    if (b === x) {
      result = b
      r = r + 1
      continue
    }

    if (a !== undefined && b !== undefined) {
      if (x - a <= b - x && a < b) {
        result = a
        l = l - 1
      }
      else {
        result = b
        r = r + 1
      }
    } else if (b === undefined) {
      result = a
      l = l - 1
    } else {
      result = b
      r = r + 1
    }
  }

  return arr.slice(l + 1, r)
};
// let arr = [1, 10, 15, 25, 35, 45, 50, 59], k = 1, x = 30
// return [25]
// let arr = [1, 3], k = 1, x = 2
// return [1]

// let arr = [-2, -1, 1, 2, 3, 4, 5], k = 7, x = 3;
// return [-2,-1,1,2,3,4,5]

// let arr = [1, 2, 3, 4, 5], k = 4, x = 3;
// return [1,2,3,4]

// let arr = [0, 1, 1, 1, 2, 3, 6, 7, 8, 9], k = 9, x = 4
// return [0,1,1,1,2,3,6,7,8]

let arr = [1, 1, 1, 10, 10, 10], k = 1, x = 9
// return [10]

// let arr = [0, 0, 0, 1, 3, 5, 6, 7, 8, 8], k = 2, x = 2
// return [1,3]

// let arr = [1, 2, 5, 5, 6, 6, 7, 7, 8, 9], k = 7, x = 7
// return [5,5,6,6,7,7,8]

// let arr = [1, 1, 2, 3, 3, 3, 4, 6, 8, 8], k = 6, x = 1
// return [ 1, 1, 2, 3, 3, 3 ]
console.log(
  findClosestElements(arr, k, x)
)

// My solution_2 slow run sleep, less memo use
var findClosestElements = function (arr, k, x) {
  let X_idx = arr.indexOf(x)
  let length = arr.length
  if (X_idx === 0) return arr.slice(0, k)
  if (X_idx === length - 1) return arr.slice(- k)

  if (X_idx === -1) {
    if (x > arr[length - 1]) {
      return arr.slice(-k)
    }
    if (x < arr[0]) {
      return arr.slice(0, k)
    }

    let l = 0
    let r = length
    let mid = 0
    while (l < r) {
      mid = Math.floor((l + r) / 2)
      if (arr[mid] >= x) {
        r = mid;

      } else {
        l = mid + 1
      }
    }
    X_idx = l
  }

  let l = X_idx - 1
  let r = X_idx
  while (k--) {
    let a = arr[l]
    let b = arr[r]
    let result;
    if (a === x) {
      result = a
      l = l - 1
      continue
    }
    if (b === x) {
      result = b
      r = r + 1
      continue
    }

    if (a !== undefined && b !== undefined) {
      if (x - a <= b - x && a < b) {
        result = a
        l = l - 1
      }
      else {
        result = b
        r = r + 1
      }
    } else if (b === undefined) {
      result = a
      l = l - 1
    } else {
      result = b
      r = r + 1
    }
  }

  return arr.slice(l + 1, r)
};


console.log(
  findClosestElements(arr, k, x)
)


// LeetCode Solution_Arrpoach 3: Binary Search To find the Left bound
var findClosestElements = function (arr, k, x) {
  let left = 0
  let right = arr.length - k

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  let res = []
  for (let i = left; i < left + k; i++) {
    res.push(arr[i])
  }
  return res
}
console.log(
  findClosestElements(arr, k, x)
)