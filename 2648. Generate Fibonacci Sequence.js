/**
 *
 *
Output: [0,1,1,2,3]
Explanation:
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3} callCount
 */

//

// var fibGenerator = function (callCount) {
//   // let fibonacci_Arr = [0, 1];
//   let arr = [];

//   for (let i = 0; i < callCount; i++) {
//     if (arr.length >= 2) {
//       arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//     } else {
//       arr.push(i);
//     }
//   }
//   console.log("Arr :", arr);
// };
// fibGenerator(8);

//
//
// >>>>>>>>> 2nd solution >>>

var fibGenerator = function* (callCount) {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;

    [current, next] = [next, current + next];
  }
};

/**Notes :: > yield keyword is used to resume or pause a generator function asynchronously.
 *  A generator function is just like a normal function
 * but the difference is that whenever the function is returning any value,
 *  it does it with the help of ‘yield’ keyword instead of return it.
 *  Yield can’t be called from nested functions or from callbacks.
 *  */
