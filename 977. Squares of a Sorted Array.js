// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

var sortedSquares = function (nums) {
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    let squr = nums[i] * nums[i];
    output.push(squr);
  }
  output.sort((a, b) => a - b);

  console.log("output :", output);
};
sortedSquares([-4, -1, 0, 3, 10]);
