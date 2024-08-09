var isWinner = function (player1, player2) {
  let score = 0;
  for (let i = 0; i < player1.length; i++) {
    let p1Score = player1[i];
    let p2Score = player2[i];
    if (player1[i - 1] == 10 || player1[i - 2] == 10) p1Score *= 2;
    if (player2[i - 1] == 10 || player2[i - 2] == 10) p2Score *= 2;
    score += p1Score - p2Score;
  }
  let result = score > 0 ? 1 : score === 0 ? 0 : 2;
  console.log("result :", result);
};
isWinner([4, 1, 7], [6, 5, 2, 3]);

//
// Input: player1 = [4,10,7,9], player2 = [6,5,2,3]
// Output: 1
// Explanation: The score of player1 is 4 + 10 + 2*7 + 2*9 = 46.
// The score of player2 is 6 + 5 + 2 + 3 = 16.
// Score of player1 is more than the score of player2, so, player1 is the winner, and the answer is 1.
