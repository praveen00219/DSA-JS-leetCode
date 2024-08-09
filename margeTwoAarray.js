var sortArrayByParityII = function (nums) {
  let oddArr = [];
  let evenArr = [];
  let finalArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenArr.push(nums[i]);
    } else {
      oddArr.push(nums[i]);
    }
  }
  console.log(oddArr);
  //   let oddSort = oddArr.sort((a,b) => b-a);
  //   let evenSort = evenArr.sort((a,b) => a-b);

  for (let i = 0; i < evenArr.length; i++) {
    finalArr.push(evenArr[i]);
    finalArr.push(oddArr[i]);
  }

  return finalArr;
};
let nums = [4, 2, 5, 7];
console.log(sortArrayByParityII(nums));
