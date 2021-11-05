/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

// LeetCode solution - 100% faster
var compareVersion = function (version1, version2) {
  let nums1 = version1.split(".");
  let nums2 = version2.split(".");
  let n1 = nums1.length, n2 = nums2.length;
  // Compare versions
  let i1, i2;
  for (let i = 0; i < Math.max(n1, n2); i++) {
    i1 = i < n1 ? Number(nums1[i]) : 0;
    i2 = i < n2 ? Number(nums2[i]) : 0;
    if (i1 != i2) return i1 > i2 ? 1 : -1;

  }
  return 0;
};