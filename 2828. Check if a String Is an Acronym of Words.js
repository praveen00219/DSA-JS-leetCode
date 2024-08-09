/**
 * Input: words = ["alice","bob","charlie"], s = "abc"
 * Output: true
 * Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym.
 */
var isAcronym = function (words, s) {
  let firstWord = "";
  for (let i = 0; i < words.length; i++) {
    firstWord += words[i][0];
  }
  return s === firstWord;
  //   console.log("output :", s === firstWord);
};
isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy");
