// Input: arrivalTime = 15, delayedTime = 5
// Output: 20
// Explanation: Arrival time of the train was 15:00 hours. It is delayed by 5 hours. Now it will reach at 15+5 = 20 (20:00 hours).

var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  let time = arrivalTime + delayedTime;
  let output = time >= 24 ? time - 24 : time;
  //   console.log("output :", output);
  return output;
};
findDelayedArrivalTime(15, 13);
