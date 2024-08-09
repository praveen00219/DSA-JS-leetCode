var maximizeSum = function (nums, k) {
  let max = Math.max(...nums);
  let output = max;

  for (let i = 1; i < k; i++) {
    output = output + max + i;
  }
  console.log("output :", output);
};
maximizeSum([1, 2, 3, 4, 5], 3);

// Input: (nums = [1, 2, 3, 4, 5]), (k = 3);
// Output: 18;
