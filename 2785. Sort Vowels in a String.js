/**
 * Input: s = "lEetcOde"
 * Output: "lEOtcede"
 * Explanation: 'E', 'O', and 'e' are the vowels in s; 'l', 't', 'c', and 'd' are all consonants. The vowels are sorted according to their ASCII values, and the consonants remain in the same places.
 **/

var sortVowels = function (s) {
  let sArr = s.split("");
  let vowels = s.match(/[aeiou]/gi).sort();
  let tempCount = 0;
  for (let i = 0; i < sArr.length; i++) {
    if (
      sArr[i] == "a" ||
      sArr[i] == "e" ||
      sArr[i] == "i" ||
      sArr[i] == "o" ||
      sArr[i] == "u" ||
      sArr[i] == "A" ||
      sArr[i] == "E" ||
      sArr[i] == "I" ||
      sArr[i] == "O" ||
      sArr[i] == "U"
    ) {
      sArr[i] = vowels[tempCount];
      tempCount++;
    }
  }
  console.log("first", sArr.join(""));
};
sortVowels("lEetcOdE");
