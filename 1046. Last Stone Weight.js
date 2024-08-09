/**
 *
 * Input: stones = [2,7,4,1,8,1]
 * Output: 1
*  Explanation:
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
 */

var lastStoneWeight = function (stones) {
  if (stones.length < 2) return stones;
  stones.sort((a, b) => a - b);
  let a = stones.pop();
  let b = stones.pop();
  stones.push(Math.abs(a - b));
  // return lastStoneWeight(stones);
  console.log(lastStoneWeight(stones));
};

lastStoneWeight([2, 7, 4, 1, 8, 1]);
