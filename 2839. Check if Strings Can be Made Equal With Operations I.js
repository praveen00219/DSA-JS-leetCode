/**
Example 1:

Input: s1 = "abcd", s2 = "cdab"
Output: true
Explanation: We can do the following operations on s1:
- Choose the indices i = 0, j = 2. The resulting string is s1 = "cbad".
- Choose the indices i = 1, j = 3. The resulting string is s1 = "cdab" = s2.
 */
var canBeEqual = function (s1, s2) {
  console.log(
    ((s1[0] == s2[0] && s1[2] == s2[2]) ||
      (s1[0] == s2[2] && s1[2] == s2[0])) &&
      ((s1[1] == s2[1] && s1[3] == s2[3]) || (s1[1] == s2[3] && s1[3] == s2[1]))
  );
};
canBeEqual("abcd", "cdab");
