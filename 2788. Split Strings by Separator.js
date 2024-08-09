/**
 * Input: words = ["one.two.three","four.five","six"], separator = "."
 * Output: ["one","two","three","four","five","six"]
 * Explanation: In this example we split as follows:

  "one.two.three" splits into "one", "two", "three"
  "four.five" splits into "four", "five"
  "six" splits into "six"

 Hence, the resulting array is ["one","two","three","four","five","six"].
 */
// var splitWordsBySeparator = function (words, separator) {
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].includes(separator)) {
//       words[i].split("").splice(words[i].indexOf(separator), 1).join("");
//       console.log("first ::");
//     }
//   }
//   console.log("words :", words);
// };
// splitWordsBySeparator(["one.two.three", "four.five", "six"], ".");

//
//
//
var splitWordsBySeparator = function (words, separator) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(separator)) {
      for (let j = 0; j < words[i].length; j++) {
        if (words[i][j] === separator) {
          console.log("first :", words[i]);
        }
      }
    }
  }
  console.log("words :", words);
};
splitWordsBySeparator(["one.two.three", "four.five", "six"], ".");

//  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
