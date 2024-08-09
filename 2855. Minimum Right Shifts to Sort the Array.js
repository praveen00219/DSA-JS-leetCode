/*
Example 1.
    Input: nums = [3,4,5,1,2]
    Output: 2
    Explanation:
        After the first right shift, nums = [2,3,4,5,1].
        After the second right shift, nums = [1,2,3,4,5].
        Now nums is sorted; therefore the answer is 2.

*/

var minimumRightShifts = function (nums) {
  let sorted = [...nums].sort((a, b) => a - b).join("");
  let maxTry = nums.length;
  let count = 0;
  while (maxTry >= 0) {
    console.log(sorted, nums);
    if (sorted == nums.join("")) return count;
    nums.unshift(nums.pop());
    count++;
    maxTry--;
  }
  return -1;
};
minimumRightShifts([3, 4, 5, 1, 2]);

// X X X XXXXXXXXXXXXXXXXXXXXXXXX;
