/**
Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */
var subsets = function (nums) {
  let result = [];
  result.push([]);

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    let len = result.length;
    for (let j = 0; j < len; j++) {
      let set1 = result[j].slice(0);
      set1.push(current);
      result.push(set1);
    }
  }
  console.log("result :", result);
  return result;
};
subsets([1, 2, 3]);
