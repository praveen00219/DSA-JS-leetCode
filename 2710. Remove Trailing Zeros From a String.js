// Input: num = "51230100"
// Output: "512301"
// Explanation: Integer "51230100" has 2 trailing zeros, we remove them and return integer "512301".

var removeTrailingZeros = function (num) {
  let output = num.replace(/0+$/, "");

  return output;
};
removeTrailingZeros("251708600");
