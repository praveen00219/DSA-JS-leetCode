/**
* Input: s = "abbaca"
* Output: "ca"
* Explanation:
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
*/
var removeDuplicates = function (s) {
  const stack = [];

  for (const char of s) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
  }
  console.log("first : ", stack.join(""));
};
removeDuplicates("abbaca");
