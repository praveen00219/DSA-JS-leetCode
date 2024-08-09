var countEven = function (num) {
  let numArr = [];
  for (i = 1; i <= num; i++) {
    numArr.push(i);
  }
  let numSpltArr = [];
  for (i = 0; i < numArr.length; i++) {
    let numsplt = numArr[i].toString().split("");
    numSpltArr.push(numsplt);
  }
  //   console.log(numSpltArr);

  let numEven = [];
  for (let i = 0; i < numSpltArr.length; i++) {
    var numSArr = numSpltArr[i];

    if (numSArr.length == 1 && numSArr[0] % 2 == 0) {
      numEven.push(numSArr[0]);
    }
    if (numSArr.length > 1) {
      let sum = 0;

      for (let j = 0; j < numSArr.length; j++) {
        sum += +numSArr[j];
      }

      //   console.log(sum, "sum");
      if (sum % 2 == 0) {
        numEven.push(sum);
      }
    }
  }
  console.log(numEven, numEven.length);
};
countEven(4);
