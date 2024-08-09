var addToArrayForm = function (num, k) {
  let strNum = "";

  for (let i = 0; i < num.length; i++) {
    strNum += num[i];
  }
  console.log(strNum);

  let numNum = +strNum;
  let sum = numNum + k;
  let splitt = sum.toString().split("");

  let result = [];
  for (let i = 0; i < splitt.length; i++) {
    result.push(Number(splitt[i]));
  }
  console.log(result);
};
addToArrayForm(
  [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
  516
);

//
//
//
//
//
//
//
// --------  if(length <=10**4) .....>>>  right solution ===>>>

var addToArrayForm = function (num, k) {
  let numToNum = BigInt(num.join("")) + BigInt(k);

  return numToNum.toString().split("").map(Number);
};
