// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
var strStr = function (haystack, needle) {
  let check = haystack.includes(needle);
  // if (check) {
  //   for (let i = 0; i < haystack.length; i++) {
  //     if (haystack[i] == needle[i]) {
  //       // return i;
  //       console.log("check :", check);
  //       console.log(i);
  //     }
  //   }
  // } else {
  //   console.log(-1);
  //   return -1;
  // }
  //
  //     >>>>>>>>> or   2nd solution
  console.log("index :", haystack.indexOf(needle));
};
strStr("sadhellosad", "sad");
