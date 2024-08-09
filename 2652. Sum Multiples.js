var sumOfMultiples = function (n) {
  let res = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      res = res + i;
    }
  }
  return res;
  //   console.log("res :", res);
};
sumOfMultiples(10);

// output arr = [0, 3, 5, 6, 7, 9, 10] = sum = 40
