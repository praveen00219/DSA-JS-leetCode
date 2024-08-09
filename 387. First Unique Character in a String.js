var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      console.log(i);
      //  return i;
    }
  }
  return -1;
};
// firstUniqChar("aabb");
firstUniqChar("dddccdbba");
// firstUniqChar("praveen");
