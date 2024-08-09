var rankTeams = function (votes) {
  let obj = {};

  for (let i of votes) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }
  let entri = Object.entries(obj);

  let arr = entri.flat();
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[i] < arr[j]) {
        console.log(arr.indexOf(arr[i]) - 1, "result");
      } else if (arr[i] > arr[j]) {
        console.log(arr.indexOf(arr[i]) - 1);
      }
    }
  }
};
rankTeams(["ABC", "ACB", "ABC", "ACB", "ACB"]);
