/**
 * @param {number[]} height
 * @return {number}
 */

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const height = [2, 3, 4, 5, 18, 17, 6]

// Tow Pointers, after checked the solution of leetCode, I came out this.
var maxArea = function (height) {
  let leftIdx = 0
  let rightIdx = height.length - 1
  let distance = rightIdx - leftIdx
  let left = height[leftIdx]
  let right = height[rightIdx]
  let lower = left <= right ? left : right
  let maxWaterArea = lower * distance;
  while (leftIdx < rightIdx) {
    if (left <= right) {
      leftIdx++;
      left = height[leftIdx]
    } else {
      rightIdx--;
      right = height[rightIdx]
    }
    distance = rightIdx - leftIdx
    lower = left <= right ? left : right
    maxWaterArea = lower * distance > maxWaterArea ? lower * distance : maxWaterArea
  }
  return maxWaterArea
};

console.log(
  maxArea(height)
)

// Tow pointers
// Solution from sgallivan https://leetcode.com/problems/container-with-most-water/discuss/1069746/JS-Python-Java-C%2B%2B-or-2-Pointer-Solution-w-Visual-Explanation-or-beats-100
var maxArea_1 = function (H) {
  let ans = 0, i = 0, j = H.length - 1
  while (i < j) {
    ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i))
    H[i] <= H[j] ? i++ : j--
  }
  return ans
};

// Solution from hbjORbj https://leetcode.com/problems/container-with-most-water/discuss/720648/Easy-O(n)-JS-Solution-(Two-Pointer)
var maxArea_2 = function (heights) {
  let l = 0, r = heights.length - 1;
  let max = 0;
  while (l < r) {
    let container = (r - l) * Math.min(heights[l], heights[r]);
    max = Math.max(max, container);
    (heights[l] < heights[r]) ? l++ : r--
  }
  return max;
  // Time Complexity: O(n)
  // Space Complexity: O(1)
};