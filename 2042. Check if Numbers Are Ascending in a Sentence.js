var areNumbersAscending = function (s) {
  let nums = s.match(/\d+/g);

  let numArr = [];
  for (let i = 0; i < nums.length; i++) {
    numArr.push(+nums[i]);
  }
  console.log(numArr);

  let sortNumArr = numArr.sort((a, b) => b - a);
  let reverseNumArr = numArr.reverse();

  console.log(sortNumArr);
  console.log(reverseNumArr);
};

// areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles");
areNumbersAscending(
  "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"
);
