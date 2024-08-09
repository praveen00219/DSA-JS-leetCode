// var reverseOnlyLetters = function (s) {
//   let sArr = s.split("");
//   let sa = s.split("-").join("");
//   let sRever = sa.split("").reverse();
//   let count = 0;
//   for (let i = 0; i < sArr.length; i++) {
//     if (sArr[i] === "-") {
//       continue;
//     }
//     sArr[i] = sRever[count];
//     count++;
//   }

//   console.log("sArr :", sArr.join(""));
// };
// reverseOnlyLetters("a-bc-dEf-ghIj");

//
// This above solution is also correct but not for every condition.so here is another solution =>>>
//

var reverseOnlyLetters = function (s) {
  let sArr = s.split("");
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (!sArr[i].match(/[a-zA-Z]/i)) {
      i++;
    } else if (!sArr[j].match(/[a-zA-Z]/i)) {
      j--;
    } else {
      [sArr[i], sArr[j]] = [sArr[j], sArr[i]];
      i++;
      j--;
    }
  }

  console.log("sArr :", sArr.join(""));
};
reverseOnlyLetters("a-bc-dEf-ghIj");
