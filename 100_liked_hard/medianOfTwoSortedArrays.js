/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//https://www.nileshblog.tech/2022/07/leet-code-median-of-two-sorted-array-java-c-c-js-solution/
const findMedianSortedArrays = (nums1, nums2) => {
  // 1. Find the shorter array of the two lists and make it nums1
  // 2. Find a pivot point in nums1 (using binary search)
  // 3. pX + pY = (x + y + 1)/2, where x = len(nums1) and y = len(nums2)
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let [x, y] = [nums1.length, nums2.length];
  let [low, high] = [0, x];

  while (low <= high) {
    let pX = Math.floor((low + high) / 2);
    let pY = Math.floor((x + y + 1) / 2) - pX;

    let maxLeftX = (pX === 0) ? -Infinity : nums1[pX - 1];
    let minRightX = (pX === x) ? Infinity : nums1[pX];
    let maxLeftY = (pY === 0) ? -Infinity : nums2[pY - 1];
    let minRightY = (pY === y) ? Infinity : nums2[pY];
    // Found the required condition
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      let maxLeft = Math.max(maxLeftX, maxLeftY);
      let minRight = Math.min(minRightX, minRightY);
      // for even length
      if ((x + y) % 2 === 0) {
        return (maxLeft + minRight) / 2;
      }
      // for odd length
      else {
        return maxLeft;
      }
    }
    else if (maxLeftX > minRightY) {
      high = pX - 1;

    }
    else {
      low = pX + 1
    }
  }
}

const nums1 = [1, 2, 10, 12, 15]
const nums2 = [4, 6, 8]
// if the 2 arrays as 1 array [1, 2, 4, 6, 8, 10, 12, 15]

console.log(
  findMedianSortedArrays(nums1, nums2)
) // return 7

// Solution_2
// Same logic, but a little different in code
// https://www.youtube.com/watch?v=q6IEA26hvXc
const findMedianSortedArrays_2 = (nums1, nums2) => {
  let [A, B] = [nums1, nums2];
  const total_length = A.length + B.length;
  const total_half = Math.floor(total_length / 2)

  if (A.length > B.length) [A, B] = [B, A];

  let [l, r] = [0, A.length - 1];
  while (true) {
    let i = Math.floor((l + r) / 2) // A
    let j = total_half - i - 2 // B, -2 because we treat index, and i start from 0 and j start from 0, so -2

    let A_left = i >= 0 ? A[i] : -Infinity;
    let A_right = i + 1 < A.length ? A[i + 1] : Infinity;
    let B_left = j >= 0 ? B[j] : -Infinity;
    let B_right = j + 1 < B.length ? B[j + 1] : Infinity;

    if (A_left <= B_right && B_left <= A_right) {
      if (total_length % 2) return Math.min(A_right, B_right) // When total_length is Odd
      return (Math.max(A_left, B_left) + Math.min(A_right, B_right)) / 2 // When total_length is even
    }
    else if (A_left > B_right) {
      r = i - 1
    }
    else {
      l = i + 1
    }
  }
}

console.log(
  findMedianSortedArrays_2(nums1, nums2)
) // return 7
