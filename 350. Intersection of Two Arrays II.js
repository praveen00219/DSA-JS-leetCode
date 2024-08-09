var intersect = function (nums1, nums2) {
  let out = [];
  let i = 0;
  let j = 0;
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      out.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else if (nums2[j] > nums1[i]) {
      i++;
    }
  }
  return out;
};
// intersect([4, 9, 5], [9, 4, 9, 8, 4]);
// intersect([1, 2], [2, 1]);
intersect(
  [
    43, 85, 49, 2, 83, 2, 39, 99, 15, 70, 39, 27, 71, 3, 88, 5, 19, 5, 68, 34,
    7, 41, 84, 2, 13, 85, 12, 54, 7, 9, 13, 19, 92,
  ],
  [
    10, 8, 53, 63, 58, 83, 26, 10, 58, 3, 61, 56, 55, 38, 81, 29, 69, 55, 86,
    23, 91, 44, 9, 98, 41, 48, 41, 16, 42, 72, 6, 4, 2, 81, 42, 84, 4, 13,
  ]
);
// intersect([1, 2, 2, 1], [2, 2]);
