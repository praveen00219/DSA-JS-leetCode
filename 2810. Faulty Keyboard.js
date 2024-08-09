var finalString = function (s) {
  let sArr = s.split("");
  let output = [];

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "i") {
      output.reverse();
      continue;
    }
    output.push(sArr[i]);
  }
  console.log("output :", output.join(""));
};
finalString("string");
