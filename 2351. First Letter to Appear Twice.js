var repeatedCharacter = function (s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      return s[i];
    }
  }
};
repeatedCharacter("abccbaacz");
