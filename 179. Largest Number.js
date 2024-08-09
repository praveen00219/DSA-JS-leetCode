var largestNumber = function (nums) {
  let numSplit = num.toString().split("");
  let numSort = numSplit.sort((a, b) => a - b);
  let numReverse = numSort.reverse();
  let numJoin = numReverse.join("");

  let result = "";

  for (let i = 0; i < numJoin.length; i++) {
    if (
      numJoin[i] == 0 ||
      numJoin[i] == 1 ||
      numJoin[i] == 2 ||
      numJoin[i] == 3 ||
      numJoin[i] == 4 ||
      numJoin[i] == 5 ||
      numJoin[i] == 6 ||
      numJoin[i] == 7 ||
      numJoin[i] == 8 ||
      numJoin[i] == 9
    ) {
      result += numJoin[i];
    }
  }

  console.log(numSplit);
  console.log(numSort);
  console.log(numReverse);
  console.log(numJoin);
  console.log(result);

  let numPos2 = [];

  //     for (let i = 0; i < numPos.length; i++) {
  //       numPos2.push(+numPos[i]);
  //     }
  //     // console.log(numPos2, "before");

  //     if (numPos2[0] !== 0) {
  //       // console.log(typeof numPos2.join(""));
  //       return numPos2.join("");
  //     }

  //     if (numPos2[0] == 0) {
  //       for (let i = 0; i < numPos2.length; i++) {
  //         if (numPos2[i] > 0) {
  //           let temp = numPos2[0];
  //           numPos2[0] = numPos2[i];
  //           numPos2[i] = temp;
  //           break;
  //         }
  //       }
  //       let output;
  //       output = numPos2.join("");
  //       console.log(typeof output);
  //       return output;
  //     }

  //   else {
  //     let result = num
  //       .toString()
  //       .split("")
  //       .sort((a, b) => b - a);

  //     if (result[result.length - 1] == "-") {
  //       result.pop();
  //       result.unshift("-");
  //     }
  //     result = result.join("");
  //     // console.log(typeof result);
  //     return result;
  //   }
};
let num = [3, 30, 34, 5, 9];
console.log(largestNumber(num));
