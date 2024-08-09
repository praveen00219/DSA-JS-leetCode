var distinctAverages = function (nums) {
  let sortNums = nums.sort((a, b) => a - b);
  let avrArr = [];
  for (let i = 0; i < sortNums.length; i++) {
    let min = sortNums.shift();
    let max = sortNums.pop();
    var averageIs = (min + max) / 2;
    avrArr.push(averageIs);
    i = 0;
  }
  //   console.log(avrArr);
  for (let i = 0; i < avrArr.length; i++) {
    for (let j = avrArr.length - 1; j >= i + 1; j--) {
      if (avrArr[i] == avrArr[j]) {
        avrArr.splice(j, 1);
      }
    }
  }

  console.log(avrArr, "aftr");
};
// distinctAverages([1, 100]);
distinctAverages([4, 1, 4, 0, 3, 5]);
// distinctAverages([9, 5, 7, 8, 7, 9, 8, 2, 0, 7]);
