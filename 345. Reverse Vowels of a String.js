var reverseVowels = function (s) {
  let vowelArr = [];
  let sArr = s.split("");

  for (let i = sArr.length - 1; i >= 0; i--) {
    if (
      sArr[i] === "a" ||
      sArr[i] === "e" ||
      sArr[i] === "i" ||
      sArr[i] === "o" ||
      sArr[i] === "u"
    ) {
      vowelArr.push(sArr[i]);
    }
  }
  let output = [];
  let count = 0;
  for (let i = 0; i < sArr.length; i++) {
    if (
      sArr[i] === "a" ||
      sArr[i] === "e" ||
      sArr[i] === "i" ||
      sArr[i] === "o" ||
      sArr[i] === "u"
    ) {
      output.push(vowelArr[count]);
      count++;
      continue;
    }
    output.push(sArr[i]);
  }
  console.log("output :", output.join(""));
};
reverseVowels("leetcode");
