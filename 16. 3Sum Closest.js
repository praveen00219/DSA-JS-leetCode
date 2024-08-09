/**
 @Example 1:

    Input: nums = [-1,2,1,-4], target = 1
    Output: 2
    Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */
var threeSumClosest = function (nums, target) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (nums[i] == target) {
      break;
    }
  }
  console.log("sum :", sum);
};
threeSumClosest([-1, 2, 1, -4], 1);
