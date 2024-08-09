var smallestNumber = function (num) {
  if (num >= 0) {
    let numPos = num
      .toString()
      .split("")
      .sort((a, b) => a - b);

    let numPos2 = [];

    for (let i = 0; i < numPos.length; i++) {
      numPos2.push(+numPos[i]);
    }
    // console.log(numPos2, "before");

    if (numPos2[0] !== 0) {
      // console.log(typeof numPos2.join(""));
      return Number(numPos2.join(""));
    }

    if (numPos2[0] == 0) {
      for (let i = 0; i < numPos2.length; i++) {
        if (numPos2[i] > 0) {
          let temp = numPos2[0];
          numPos2[0] = numPos2[i];
          numPos2[i] = temp;
          break;
        }
      }
      let output;
      output = numPos2.join("");
      console.log(typeof output);
      return Number(output);
    }
  } else {
    let result = num
      .toString()
      .split("")
      .sort((a, b) => b - a);

    if (result[result.length - 1] == "-") {
      result.pop();
      result.unshift("-");
    }
    result = result.join("");
    // console.log(typeof result);
    return Number(result);
  }
};
let num = 63;
console.log(smallestNumber(num));
