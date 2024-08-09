/**
* Input: nums = [-1,1,2,3,1], target = 2
* Output: 3
* Explanation: There are 3 pairs of indices that satisfy the conditions in the statement:
     - (0, 1) since 0 < 1 and nums[0] + nums[1] = 0 < target
     - (0, 2) since 0 < 2 and nums[0] + nums[2] = 1 < target
     - (0, 4) since 0 < 4 and nums[0] + nums[4] = 0 < target

  Note that (0, 3) is not counted since nums[0] + nums[3] is not strictly less than the target.

 */
var countPairs = function (nums, target) {
  let countOutput = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target && j > i) {
        countOutput++;
      }
    }
  }
  console.log("output :", countOutput);
};
countPairs([-1, 1, 2, 3, 1], 2);
