var findTheArrayConcVal = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let concateNums = "";
    concateNums += nums.shift();
    concateNums += nums.pop();

    result += Number(concateNums);

    if (nums.length == 1) {
      result += nums[0];
    }
    `  `;
    i = 0;
  }

  console.log(result, "result");
};
// findTheArrayConcVal([
//   1, 78, 27, 48, 14, 86, 79, 68, 77, 20, 57, 21, 18, 67, 5, 51, 70, 85, 47, 56,
//   22, 79, 41, 8, 39, 81, 59, 74, 14, 45, 49, 15, 10, 28,
// ]);

findTheArrayConcVal([
  14, 6, 20, 95, 33, 37, 9, 49, 94, 80, 1, 33, 2, 18, 68, 97, 78, 52, 62, 63,
  48, 15, 78, 35, 13, 14, 94, 4, 95, 62, 4, 74, 78, 43, 57, 1, 17, 30, 23, 98,
]);
