var getLucky = function (s, k) {
  let abcd = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let arr = s.split("");
  console.log(arr);
  let sum = 0;
  let val = Object.values(abcd);
  let keya = Object.keys(abcd);
  for (let j = 0; j < arr.length; j++) {
    let count = 0;
    for (let i = 0; i < keya.length; i++) {
      count++;
      if (arr[j] == keya[i]) {
        sum += count;
        //   console.log(keya[i]);
      }
    }
  }
  console.log(sum, "sum");
};
// getLucky("iiii", 1);
getLucky("leetcode", 2);

//

// let abcd;

// for ( let i = 0; abcd = ''; ++i < 26) {
//     abcd += i.toString(26);
// }
// console.log(abcd);
