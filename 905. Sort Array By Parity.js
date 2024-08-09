/*
    Input: nums = [3,1,2,4]
    Output: [2,4,3,1]
    Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted. 
*/

var sortArrayByParity = function (nums) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      output.push(nums[i]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      output.push(nums[i]);
    }
  }
  console.log("output :", output);
};
sortArrayByParity([3, 1, 2, 4]);
