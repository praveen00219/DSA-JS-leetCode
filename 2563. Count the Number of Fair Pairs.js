/**
 * Input: nums = [0,1,7,4,4,5], lower = 3, upper = 6
 * Output: 6
 * Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).
 */
var countFairPairs = function (nums, lower, upper) {
  let countOutput = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (lower <= nums[i] + nums[j] && nums[i] + nums[j] <= upper && j > i) {
        console.log([i, j]);
        countOutput++;
      }
    }
  }
  console.log("output :", countOutput);
};
countFairPairs([0, 1, 7, 4, 4, 5], 3, 6);

//  ???????????????????????
