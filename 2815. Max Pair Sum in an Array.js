/**
 * Input: nums = [51,71,17,24,42]
 * Output: 88
 * Explanation:
     For i = 1 and j = 2, nums[i] and nums[j] have equal maximum digits with a pair sum of 71 + 17 = 88. 
     For i = 3 and j = 4, nums[i] and nums[j] have equal maximum digits with a pair sum of 24 + 42 = 66.
   It can be shown that there are no other pairs with equal maximum digits, so the answer is 88.
 */
var maxSum = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    // nums[i] = nums[i] + "";   << convert number to string
    let str = nums[i].toString().split("").reverse().join("");
    console.log("first :", str);
  }
};
maxSum([51, 71, 17, 24, 42]);

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
