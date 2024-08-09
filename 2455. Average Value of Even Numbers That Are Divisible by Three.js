var averageValue = function (nums) {
  let sum = 0;
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0 && nums[i] % 3 == 0) {
      sum += nums[i];
      n++;
    }
  }
  return sum == 0 ? sum : parseInt(sum / n);
};
// averageValue([1, 3, 6, 10, 12, 15]);
// averageValue([1, 2, 4, 7, 10]);
