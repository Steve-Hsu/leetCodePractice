/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// My Solution --- worked
var searchInsert = function (nums, target) {
  let idx = 0
  for (let i = 0; i < nums.length; i++) {
    idx = i
    if (nums[i] > target || nums[i] === target) return idx;
  }
  return nums.length
};

let arr = [1, 3, 5, 6, 9]
let target = 7

console.log(
  searchInsert(arr, target)
)

// My Solution --- worked, this faster, start search from middle
var searchInsert_1 = function (nums, target) {
  let idx = 0
  let rightMinIdx = Math.floor(nums.length / 2)
  if (nums[rightMinIdx] === target) return rightMinIdx

  if (nums[rightMinIdx] > target) {
    for (let i = 0; i <= rightMinIdx; i++) {
      idx = i
      if (nums[i] > target || nums[i] === target) return idx;
    }
  } else {
    for (let i = rightMinIdx + 1; i < nums.length; i++) {
      idx = i
      if (nums[i] > target || nums[i] === target) return idx;
    }
  }
  return nums.length
};
console.log(
  searchInsert_1(arr, target)
)


// Other solution 
// From https://leetcode.com/problems/search-insert-position/discuss/274547/Fastest-Javascript-solution-Binary-Search-log-n
// Binary Search lon n
function searchInsert_2(nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};

function binarySearch(array, target, start, end) {
  // If the target is less then the very last item then insert it at that item index
  // because anything index less then that has already been confirmed to be less then the target.
  // Otherwise insert it at that item index + 1
  // because any index grater then that has already been confirmed to be greater then the target
  if (start > end) return start;

  const midPoint = Math.floor((start + end) / 2);

  // found target
  if (array[midPoint] === target) return midPoint;

  // search the left side
  if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
  // search the right side
  if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}