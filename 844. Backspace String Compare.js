/**
 * Input: s = "ab#c", t = "ad#c"
 * Output: true
 * Explanation: Both s and t become "ac".
 */
var backspaceCompare = function (s, t) {
  let sArr = [];
  for (let char of s) {
    if (char === "#") {
      sArr.pop();
    } else {
      sArr.push(char);
    }
  }
  let s1 = sArr.join("");

  let tArr = [];
  for (let char of t) {
    if (char === "#") {
      tArr.pop();
    } else {
      tArr.push(char);
    }
  }
  let t1 = tArr.join("");

  console.log("result :", s1 === t1, s1, t1);
};
backspaceCompare("ab#c", "ad#c");
