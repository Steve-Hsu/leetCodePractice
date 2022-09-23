/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// https://leetcode.com/problems/search-in-rotated-sorted-array/submissions/

// My solution_1, worked well. just that easy. The question is not complicated.
var search_1 = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] == target) return i
  }
  return -1
};

// let arr = [1, 3]
// let t = 3
let arr = [266, 267, 268, 269, 271, 278, 282, 292, 293, 298, 6, 9, 15, 19, 21, 26, 33, 35, 37, 38, 39, 46, 49, 54, 65, 71, 74, 77, 79, 82, 83, 88, 92, 93, 94, 97, 104, 108, 114, 115, 117, 122, 123, 127, 128, 129, 134, 137, 141, 142, 144, 147, 150, 154, 160, 163, 166, 169, 172, 173, 177, 180, 183, 184, 188, 198, 203, 208, 210, 214, 218, 220, 223, 224, 233, 236, 241, 243, 253, 256, 257, 262, 263]
let t = 208

// My binary search, worked, but slower then My solution_1, 
var search_2 = function (nums, target) {
  const binarySearch = function (idx_f, idx_l) {
    let m = idx_f + (Math.floor((idx_l - idx_f) / 2))
    if (target === nums[m]) return m
    if (target === nums[idx_f]) return idx_f
    if (target === nums[idx_l]) return idx_l
    if (target > nums[m] && target < nums[idx_l] ||
      target > nums[m] && target > nums[idx_l] && nums[m] > nums[idx_l] ||
      target < nums[m] && target < nums[idx_l] && nums[m] > nums[idx_l]
    ) {
      // console.log("right")
      let length = idx_l - m + 1
      if (length > 6) {
        return binarySearch(m, idx_l)
      } else {
        for (let i = m; i < idx_l; i++) {
          // console.log("r")
          if (nums[i] == target) return i
        }
        return -1
      }
    }
    else {
      // console.log("left")
      let length = m - idx_f + 1
      if (length > 6) {
        return binarySearch(idx_f, m)
      } else {
        for (let i = idx_f; i < m; i++) {
          // console.log("l")
          if (nums[i] == target) return i
        }
        return -1
      }
    }
  }

  return binarySearch(0, nums.length - 1)
};


console.log(
  search(arr, t)
)
// My binary search, worked, more neat, 
var search = function (nums, T) {
  const binarySearch = function (idx_l, idx_r) {
    // let idx_m = idx_l + (Math.floor((idx_r - idx_l) / 2)) this Line basically same as the L70, but more long-winded.
    let idx_m = Math.floor((idx_r + idx_l) / 2)
    let length = idx_r - idx_l + 1

    for (idx of [idx_l, idx_m, idx_r]) if (nums[idx] === T) return idx
    if (length <= 3) return -1

    // T = target, M = mid, R = rightmost, btw = between, grt = great than, sml = small than
    let T_btw_M_R = T > nums[idx_m] && T < nums[idx_r],
      T_grt_M_R = T > nums[idx_m] && T > nums[idx_r],
      M_grt_R = nums[idx_m] > nums[idx_r],
      T_sml_M_R = T < nums[idx_m] && T < nums[idx_r];

    if (T_btw_M_R || M_grt_R && T_grt_M_R | T_sml_M_R) return binarySearch(idx_m + 1, idx_r - 1)
    return binarySearch(idx_l + 1, idx_m - 1)

  }
  return binarySearch(0, nums.length - 1)
};

// My binary search, worked, with the if logic of the solution from himbhr, 
var search_3 = function (nums, T) {
  const binarySearch = function (l, r) {
    // let mid = l + (Math.floor((r - l) / 2)) this Line basically same as the L70, but more long-winded.
    let mid = Math.floor((l + r) / 2)
    let length = r - l + 1

    for (idx of [l, mid, r]) if (nums[idx] === T) return idx
    if (length <= 3) return -1

    if (nums[mid] > nums[r]) {
      if (nums[mid] < T || T <= nums[r]) return binarySearch(mid + 1, r)
      return binarySearch(l, mid)
    } else {
      if (nums[mid] < T && T <= nums[r]) return binarySearch(mid + 1, r)
      return binarySearch(l, mid)
    }

  }
  return binarySearch(0, nums.length - 1)
};

// Best solution and neat
// from himbhr : https://leetcode.com/HimanshuBhoir/
// Same idea as my solution, but more neat straightforward and easy to understand
var search_other_3 = function (nums, target) {
  let l = 0, r = nums.length - 1
  while (l < r) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] > nums[r]) {
      if (nums[mid] < target || target <= nums[r]) l = mid + 1 // either nums[mid] < target || target <= nums[r] means mid is must not the target, so mid + 1 to ignore mid, whereas the other situaiton, mid still have change to be the target, so the r = mid, include mid to check again
      else r = mid
    } else {
      if (nums[mid] < target && target <= nums[r]) l = mid + 1
      else r = mid
    }
  }
  return nums[l] == target ? l : -1
};

// Other solution 
// https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/273622/Javascript-Simple-O(log-N)-Binary-Search-Solution
// Not faster than me, but easy to understand
var search_other_1 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // When dividing the roated array into two halves, one must be sorted.

    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // target is in the left
        right = mid - 1;

      } else {
        // target is in the right
        left = mid + 1;
      }
    }

    // Otherwise, the right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        // target is in the right
        left = mid + 1;

      } else {
        // target is in the left
        right = mid - 1;
      }
    }


  }

  return -1;
};
// https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/532078/Fastest-Most-Concise-JavaScript-Solution-O(logn)
//Strategy: Use Binary Search to find the index at which the array is rotated with findPiv . If the array has been rotated, find which of the two subarrays contains target. Then, Binary Search again to find the target
const search_other_2 = (nums, target) => {
  let piv = findPiv(nums)
  let left, right
  if (piv === 0) {
    left = 0; right = nums.length - 1;
  } else if (target <= nums[nums.length - 1]) {
    left = piv; right = nums.length - 1
  } else {
    left = 0; right = piv - 1
  }
  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (nums[middle] === target) return middle
    nums[middle] > target ? right = middle - 1 : left = middle + 1
  }
  return -1
};
const findPiv = arr => {
  if (arr[0] < arr[arr.length - 1]) return 0
  let left = 0, right = arr.length - 1
  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (arr[middle] > arr[middle + 1]) return middle + 1
    else if (arr[middle] >= arr[left]) left = middle + 1
    else right = middle - 1
  }
  return 0
}
