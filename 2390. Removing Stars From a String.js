var removeStars = function (s) {
  let strArr = [];
  for (const char of s) {
    if (char == "*") {
      let a = strArr.pop();
      console.log(":", char, a);
    } else {
      strArr.push(char);
      console.log("2", char);
    }
  }
  //   return strArr.join("");
  console.log("result", strArr.join(""));
};
removeStars("leet**cod*e");
// removeStars("erase*****");

//
//
// >>>>> >> 2nd solution- one line answer >>>>>>>>
//
// const removeStars = (s, r = []) =>
//   s.split``.forEach((char) => (char == `*` ? r.pop() : r.push(char))) ||
//   r.join``;
// removeStars("leet**cod*e");
