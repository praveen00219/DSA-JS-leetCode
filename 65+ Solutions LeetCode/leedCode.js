/* (1.)   **************************************************************************************
1*  2*  3*  4*  5*
6*  7*  8*  9*  10*
11*  12*  13*  14*  15*
16*  17*  18*  19*  20*
21*  22*  23*  24*  25*

*/
/* 
var a = 5;
var b = 5;
function star() {
 var count = 0;
 for (let i = 1; i <= a; i++) {
   var starPr = "";

   for (let j = 1; j <= b; j++) {
     count++;
     starPr = starPr + count + "*  ";
   }

   console.log(starPr);
 }
}
star();
*/

//
//
//
//
/* (2.)   *******************************************************************************************


*  2*  *  4*  *
 6*  *  8*  *  10*
 *  12*  *  14*  *
 16*  *  18*  *  20*
 *  22*  *  24*  *

 */

/*

var a = 5;
var b = 5;
function star() {
  var count = 0;
  for (let i = 1; i <= a; i++) {
    var star1 = "";
    for (let j = 1; j <= b; j++) {
      count++;
      if (count % 2 == 0) {
        star1 = star1 + ` ${count}* `;
      } else {
        star1 = star1 + " * ";
      }
    }
    console.log(star1);
  }
}
star();

*/

//
//
//
//

/*  (3.)   *************************************************************************************

 1*   *  3*   *  5*
6*   *  8*   *  10*
11*   *  13*   *  15*
16*   *  18*   *  20*
21*   *  23*   *  25*  
*/

/* 
 
var a = 5;
var b = 5;
function starPrint() {
  var count = 0;
  for (let i = 1; i <= a; i++) {
    var star = "";

    for (let j = 1; j <= b; j++) {
      count++;
      if (i % 2 == count % 2) {
        star = star + count + "* ";
      } else {
        star = star + "  *  ";
      }
    }
    console.log(star);
  }
}
starPrint();

*/
//
//
//
//
//
/*   (4.)   ***************************************************************************************


1* 2* 3* 4* 5*
6* 7* 8* 9* 10*
11* 12* 13* 14* 15*
16* 17* 18* 19* 20*
21* 22* 23* 24* 25*

*/

/*

var a = 5;
var b = 5;
function starPrint() {
  var k = 0;
  while (k <= 20) {
    // for (let i = 0; i < a; i++) {
    var star = "";

    for (let j = 1; j <= b; j++) {
      k++;
      star = star + k + "* ";
    }

    console.log(star);
    // }
  }
}
starPrint();

*/

//
//
//
//
//
/* (5.)  without count variable use  output   ********************************************************

1*  2*  3*  4*  5*
6*  7*  8*  9*  10*
11*  12*  13*  14*  15*
16*  17*  18*  19*  20*
21*  22*  23*  24*  25*

*/

/*
var a = 5;
var b = 5;
function starPrint() {
  for (let i = 1; i <= a; i++) {
    var star = "";

    for (let j = 1; j <= b; j++) {
      star += a * i + j + "*  ";
    }
    console.log(star);
  }
}
starPrint();
*/

//
//
//
//
//
//
/* (6.)  ********************************************************************************

 *  *  *  *  *
 *  *  *  *
 *  *  *
 *  *
 *

*/
/*
var a = 5;
var b = 5;

function starPrint() {
  for (let i = 1; i <= a; i++) {
    var star = "";

    for (let j = 5; j >= i; j--) {
      star = star + " * ";
    }
    console.log(star);
  }
}
starPrint();
*/

//
//
//
//
//
/* (7.)  *******************************************************************************

 *
 *  *
 *  *  *
 *  *  *  *
 *  *  *  *  *

 * /

/*

var a = 5;
var b = 5;

function starPrint() {
  for (let i = 1; i <= a; i++) {
    var star = "";

    for (let j = 1; j <= i; j++) {
      star = star + " * ";
    }
    console.log(star);
  }
}
starPrint();

*/

//
//
//
//
/*  (8.)   **************************************************************************************

     *
    *  *
   *  *  *
  *  *  *  *
 *  *  *  *  *

*/

/*

var a = 5;
var b = 5;

function starPrint() {
  for (let i = 1; i <= a; i++) {
    var star = "";

    for (let k = 1; k <= a - i; k++) {
      star = star + " ";
    }
    for (let j = 1; j <= i; j++) {
      star = star + " * ";
    }
    console.log(star);
  }
}

starPrint();


*/
//
//
//
//

/*  (9.)    ******************************************************************************************
   
      *  *  *  *  *  *  *
     *  *  *  *  *  *  *
   *  *  *  *  *  *  *
  *  *  *  *  *  *  *


  */
/*
var a = 4;
var b = 7;

function starPrint() {
  for (let i = 1; i <= a; i++) {
    var star = "";

    for (let k = 1; k <= a - i; k++) {
      star = star + " ";
    }
    for (let j = 1; j <= b; j++) {
      star = star + " * ";
    }
    console.log(star);
  }
}

starPrint();
*/
//
//
//
//
/* (10.)   ***********************************************************************************

1  2  3  4   *
5  6  7   *  *  *
8  9   *  *  *  *  *
10   *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *

*/
/*

var a = 5;
var b = 1;

function starPrint() {
  var c = 1;
  for (let i = 1; i <= a; i++) {
    var star = "";

    for (let k = 1; k <= a - i; k++) {
      var countNumber = b++;
      var space = "";

      star = star + `${countNumber}  `;
    }
    for (let j = 1; j <= c; j++) {
      star = star + " * ";
    }
    c = c + 2;
    console.log(star);
  }
}

starPrint();
*/

//
//
//
//
//
/*   (11.)    *********************************************************************************

1  2  3   4  *  5  6  7  8
9  10 11  *  *  * 12  13 14
15 16  *  *  *  *  *  17 18
19  *  *  *  *  *  *  *  20
 *  *  *  *  *  *  *  *  *

*/

/*

var starRow = 5;
var b = 1;

function starPrint() {
  var starColum = 1;

  for (let i = 1; i <= starRow; i++) {
    var star = "";

    for (let k = 1; k <= starRow - i; k++) {
      var beforNumber = b++;
      star = star + `${beforNumber}  `;
    }

    for (let j = 1; j <= starColum; j++) {
      star = star + " * ";
    }

    for (let k = 1; k <= starRow - i; k++) {
      var afterNumber = b++;
      star = star + `${afterNumber}  `;
    }

    starColum = starColum + 2;
    console.log(star);
  }
}

starPrint();

*/

//
//
//
//
/*  (12.) => two sum    *****************************************************************************
  Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
  
  @param {number[]} nums
  @param {number} target
  @return {number[]}
 */

/*
  
var twoSum = function (nums, target) {
  var arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        // return [i, j];
        // arr.push(i, j);
        console.log([i, j]);
      }
      break;
    }
  }
};

twoSum([8, 4, 5, 2], 6);

*/

//
//
//
//
/*  (13.)  palindrome ******************************************************************************************************

check the string for palindrome : if it is palindrome then print true , other-wise false -------

*/
/*

var isPalindrome = function (x) {
  var p = x.toString().split("").reverse().join("");

  if (x == p) {
    // return true;
    console.log(true);
  } else {
    // return false;
    console.log(false);
  }
};

isPalindrome("aalalaa");
*/

//
//
//
//
//
/*  (14.) palindrome By Loop    *************************************************************************************************************************

check the palindrome in string useing For-loop : if it is palindrome then print true , other-wise false -------

*/
/*

var palindrome = true;

var isPalindrome = function (x) {
  for (let i = 0; i <= x.length; i++) {
    if (x[i] !== x[x.length - 1 - i]) {
      palindrome = false;
      break;
    }
  }
  console.log(palindrome);
};

isPalindrome("naman");

*/
//
//
//
//
/* (15.)   twoSum => from LeetCode     ***********************************************************************
 */
/*

var twoSum = function (nums, target) {
  var arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        console.log([i, j]);
      }
    }
    break;
  }
};

twoSum([2, 5, 3, 2, 7], 9);
*/

//
//
//
//
//
//
/* (16.) ---- Merge Two Sorted Lists = leetCode   *****************************************************************

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
        Input:     list1 = [1,2,4],       
                   list2 = [1,3,4]

        Output: [1,1,2,3,4,4]

 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
/*
  var mergeTwoLists = function (list1, list2) {
     var result = [];

     if (list1.length == 0) {
        console.log(list2, "=>  List2");

     } else if (list2.length == 0) {
        console.log(list1, "=>  List1");
     }
     while (list1.length || list2.length) {
       var output = list1[0] < list2[0] ? list1.shift() : list2.shift();
        result.push(output);
     }
    console.log(result, "=>  Merge List");
  };
  mergeTwoLists([1, 1, 4], [2, 3, 6]);
*/

//
//
//
//
//
//
//

/*  (17.)    Remove Duplicates from Sorted Array  *******************************************************************

/*
 * @param {number[]} nums
 * @return {number}
 */

/*

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j >= i + 1; j--) {
      if (nums[i] == nums[j]) {
        nums.splice(j, 1);
      }
    }
  }
  console.log(nums);
};
removeDuplicates([1, 2, 1]);

*/
//
//
//
//
//
//
//
/*  (18.)   Remove Element *************************************************************************

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 
* Example 1:

  Input:         nums = [3,2,2,3], 
               val = 3

  Output:        2, nums = [2,2,_,_]

Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/
/* Answer -->>

var removeElement = function (nums, val) {
  // for (let i = 0; i < nums.length; i++) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] == val) {
      nums.splice(i, 1);
    }
  }
  console.log(nums);
};
removeElement([4, 4, 4, 4], 4);

*/

/* (19.)   Longest Common Prefix   *************************************************************************

        Example 1:

                      Input: strs = ["flower","flow","flight"]
                      Output: "fl"
        
        Example 2:

                      Input: strs = ["dog","racecar","car"]
                      Output: ""
                 Explanation: There is no common prefix among the input strings.
 
*/
/*

var longestCommonPrefix = function (strs) {
  //   var strsSplit = strs.toString().split("");
  //   for (let i = 0; i < strsSplit.length; i++) {
  //     if (strsSplit[i] !== strsSplit[strsSplit.length - 1]) {
  //       var newStrs = strsSplit.splice(i, 1);
  //     }
  //   }
  //   console.log(newStrs);
  // };
  var result = "";
  for (let i = 0; i < strs.length; i++) {
    for (let j of strs) {
      if (j[i] !== strs[0][i]) {
        var result2 = j.slice(0, i);
        // result = result.concat(result2);
        result = result + result2;
      }
    }
  }
  console.log(result);
};
longestCommonPrefix(["flower", "flow", "flight"]);

*/

//
//
//
//
//
//
/* (20.)  valid parenthises   **********************##################******************************
/*
var isValid = function (s) {
  var newS = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      newS.push(s[i]);
    }
    if (
      (s[i] == ")" && newS[newS.length - 1] == "(") ||
      (s[i] == "}" && newS[newS.length - 1] == "{") ||
      (s[i] == "]" && newS[newS.length - 1] == "]")
    ) {
      newS.pop();
      // return true;
      console.log(true);
    } else {
      // return false;
      console.log(false);
    }
  }
};

isValid("(){}[]");
*/
//
//
//
//
//
//

/* (21.)   searchInsert  *****************************************************************

*/
/*

/* (22.)   Length of last word in string      ********************************************************************
 */
/*
var lengthOfLastWord = function (s) {
  s = s.trim();
  var lastWord = "";
  var i = s.length - 1;
  while (s[i] != " ") {
    lastWord = lastWord + s[i];

    // console.log(s[i]);
    i--;
  }
  console.log(lastWord);

  console.log(lastWord.length);
};
lengthOfLastWord("world ramesh   ");

*/
//
//
//
//
/*  (23.) plus one in last of array  *****************************************************************************************************************
 */
/*
const plusOne = (digits) => {

  digits[digits.length - 1]++;

  for (let i = digits.length - 1; i > 0 && digits[i] === 10; i--) {
    digits[i] = 0;
    digits[i - 1]++;
  }
  if (digits[0] === 10) {
    digits[0] = 0;
    digits.unshift(1);
  }
  // return digits;
  console.log(digits);
};

plusOne([9, 9, 9]);

*/
//
//
//
//
//
//
/*  (24.)   Sqrt(x)    ************************************************************************************************************
 */
/*
var mySqrt = function (x) {
  // // var a = x;
  // console.log(typeof x);
  // var b ;
  // x = b * b;
  // console.log(b);

  let result = 1;
  while (result * result <= x) {
    result++;
  }
  // return result - 1;
  console.log(result - 1);
};

mySqrt(49);
*/
//
//
//
//
//
//

/*  (25.)    Climbing Stairs    ***************************************************************************************
 */
/*
var climbStairs = function (n) {
  var step = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    step[i] = step[i - 1] + step[i - 2];
  }
  return step[n];
  console.log(step[n]);
};
climbStairs(5);
*/
//
//
//
//
//
//
/*  (26.)    Remove Duplicates from Sorted List  ********************************************************************************
 */
/*
var deleteDuplicates = function (head) {
  for (let i = 0; i < head.length; i++) {
    for (let j = i + 1; j < head.length; j++){
      if (head[i] == head[j]) {
        head.splice(j, 1);
      }
    }
  }
  console.log(head);
};
// deleteDuplicates([1, , 1, 2, 3, 3]);
deleteDuplicates([1, 1, 2, 3, 3]);

*/
//
//
//
//
//
//
//
/*  (27.)  Merge Sorted Array   ***************************************************************************************************
 */

// var merge = function (nums1, m, nums2, n) {
//   var result = [];

//   // if (m == 0) {
//   //   // result.push(nums2);
//   //   console.log(nums2, "=>  nums2");
//   // } else if (n == 0) {
//   //   // result.push(nums1);
//   //   console.log(nums1, "=>  nums1");
//   // }
//   while (nums1.length || nums2.length) {
//     if (nums1[0] == 0) nums1.splice(nums1[0]);
//     var output = nums1[0] <= nums2[0] ? nums1.shift() : nums2.shift();
//     result.push(output);
//   }
//   console.log(result, "=>  Merge List");
// };
// merge([1, 0], 3, [2], 3);
// // merge([1], 1, [0], 0);

//
//
//
//
//
//
//
/* (30.)  SameTree *************###############################################
 */
/*

var isSameTree = function (p, q) {
  let output = "";
  // let abc = [];
  // console.log(typeof abc, "abc");
  let i = 0;
  let j = 0;
  while (p.length && q.length) {
    if (
      (p[i] != "null" && q[j] == "null") ||
      (q[j] != "null" && p[i] == "null") ||
      p.val != q.val
    ) {
      output = false;
      console.log(output, "null");
    }
    if (p[i] == q[j] || (p[i] == "[]" && q[j] == "[]")) {
      output = true;
    }
    if (p[i] != q[j] || q[j] != p[i]) {
      output = false;
    }
    i++;
    j++;
  }
  console.log(output, "output");
};
isSameTree([1, 2], [1, null, 2]);

*/
//
//
//
//
//
//
//
/*  (28.)    Single Number  *****************************************************************
 */
/*
const singleNumber = (nums) => {
  let storeObj = {};

  for (let i = 0; i < nums.length; i++) {
    storeObj[nums[i]] = (storeObj[nums[i]] || 0) + 1;
  }

  for (let key in storeObj) {
    if (storeObj[key] === 1) {
      return key;
    }
  }
};
*/
//
//
//
//
//
//
//
/*  (29.)  Count the Digits That Divide a Number *******************************************************
 */
/*
let num = 7;
var countDigits = function (num) {
  let val = num;
  let numStr = "" + num;
  // console.log(numStr, typeof numStr);
  // let numArr = numStr.split("");
  // console.log(numArr);
  // let setval = [...new Set(numArr)];
  console.log(setval);
  let count = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (num % numStr[i] == 0) {
      count++;
    }
  }
  return count;
};
console.log(countDigits(num));
*/
//
//
//
//
//
//
//
//
//
/*  (30.)  Count number in Array  ***********************************************************************
 */
/*
let arr = [1, 2, 2, 2, 4, 4, 4, 5, 6, 6, 6];
let obj = {};
for (let elm of arr) {
  // obj[elm] = (obj[elm] || 0) + 1;
  if (!obj[elm]) {
    obj[elm] = 1;
  } else {
    obj[elm]++;
  }
}
console.log(obj);
let val = Object.values(obj);
let keya = Object.keys(obj);
console.log(val);
console.log(keya);
*/
//
//
//
//
//
//
//
//
/* (31.)  Valid Palindrome  *********************************************************************************
 */
/*
var isPalindrome = function (s) {
  let spaceRemove = s.replace(/[^A-Z0-9]+/gi, "").toUpperCase();
  console.log(spaceRemove);
  let palindrome = spaceRemove.toString().split("").reverse().join("");
  if (spaceRemove == palindrome) {
    s = true;
  } else {
    s = false;
  }
  console.log(s);
};
isPalindrome("A man, a plan, a canal: Panama!");
*/
//
//
//
//
//
//
//
//
//
/* (32.)   Excel Sheet Column Title - 168. *****************######################************************************************
 */
// var convertToTitle = function (columnNumber) {
//   let nums = 0;
//   for (let i = 0; i < columnNumber.length; i++) {
//     nums++;
//     nums = nums * 26 + (columnNumber.charCodeAt(i) - 64);
//   }
//   console.log(nums);
// };
// convertToTitle(701);

//
//
//
//
//
//
//
/*  (33.)  Happy Number  (202)   *********************************************************************************
 */
/*

const isHappy = (n) => {
  let temp = n;
  
  for (let i = 0; i < 10000; i++) {
    let str = String(temp);
    let sum = 0;

    for (let j = 0; j < str.length; j++) {
      let num = +str[j];
      let square = num * num;
      sum += square;
    }
    if (sum === 1) return true;
    temp = sum;
  }
  return false;
};
isHappy(91);

*/
//
//
//
//
//
//
//
//
//
//
/*  (34.)     Contains Duplicate  (217)   *****************************************************************************************
 */
/*
var containsDuplicate = function (nums) {
  let duplicate = {};
  for (let i = 0; i < nums.length; i++) {
    if (duplicate[nums[i]] !== undefined) {
      return true;
    }
    duplicate[nums[i]] = true;
  }
  return false;
};

containsDuplicate([1, 2, 3, 1]);
// containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8]);
// containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
*/
//
//
//
//
//
//
//
//
/*  (35.)    Isomorphic Strings  (205)   **************************************************************************
 */
/*
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let objS = {};
  let objT = {};
  for (let i = 0; i < s.length; i++) {
    if (objS[s[i]] !== objT[t[i]]) {
      // return false;
      console.log(false);
    }

    objS[s[i]] = i;
    objT[t[i]] = i;
    console.log(objS[s[i]], "objS");
    console.log(objT[t[i]], "objTTTT");
  }
  console.log(true);
  // return true;
};
isIsomorphic("bbbaaaba", "aaabbbba");
          
            orrrr  ==>>

// var isIsomorphic = function (s, t) {
//   let newS = s
//     .replace(/[^A-Z0-9]+/gi, "")
//     .toUpperCase()
//     .toString()
//     .split("");
//   let newT = t
//     .replace(/[^A-Z0-9]+/gi, "")
//     .toUpperCase()
//     .toString()
//     .split("");

//   console.log(newS, newT);

//   let objS = {};
//   let objT = {};
//   let resultT = 0;
//   let resultS = 0;

//   for (let elm of newS) {
//     objS[elm] = (objS[elm] || 0) + 1;
//   }
//   let valS = Object.values(objS);
//   console.log(valS);
//   //
//   for (let elm of newT) {
//     objT[elm] = (objT[elm] || 0) + 1;
//   }
//   let valT = Object.values(objT);
//   console.log(valT);
//   for (let i = 0; i < valS.length; i++) {
//     resultS = resultS + i;
//   }
//   for (let j = 0; j < valT.length; j++) {
//     resultT = resultT + j;
//   }
//   if (resultS == resultT) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// isIsomorphic("bbbaaaba", "aaabbbba");
*/
//
//
//
//
//
//
//
/*  (36.)   Add Strings  (415)     ******************************************************************
 */
/*
// var addStrings = function (num1, num2) {
//   let sum = +num1 + +num2;
//   let result = "" + sum;
//   console.log(result);
// };
var addStrings = function (num1, num2) {
  let sum = BigInt(num1) + BigInt(num2);
  let result = "" + sum;
  console.log(result);
};
addStrings((num1 = "40"), (num2 = "52"));
*/
//
//
//
//
//
//
/*  (37.)   Best Time to Buy and Sell Stock  (121)  **********************************************************
 */
// solution 3 type ==>
//
// var maxProfit = function (prices) {
//   let mini = prices[0];
//   for (let i = 0; i < prices.length; i++) {
//     if (mini > prices[i]) {
//       mini = prices[i];
//     }
//   }
//   let arr = prices.splice(prices.indexOf(mini));
//   arr = arr.sort(function (a, b) {
//     return a - b;
//   });
//   let profit = arr[arr.length - 1] - arr[0];
//   console.log(arr);
//   console.log(profit);
// };
// maxProfit([2, 4, 1]);

//
//
//

/*
var maxProfit = function (prices) {
  let profit = [];

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      profit.push(prices[j] - prices[i]);
    }
  }
  console.log(profit, "profit");
  let max = profit[0];

  for (let i = 0; i < profit.length; i++) {
    if (max < profit[i]) {
      max = profit[i];
    }
  }

  console.log(max, "max Profit");
};

maxProfit([12, 3, 2, 1, 4, 5, 11, 7]);
*/
//
//
//
/*
var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > 0) {
        if (profit < prices[j] - prices[i]) {
          profit = prices[j] - prices[i];
        }
      }
    }
  }
  console.log(profit, "max Profit");
  return profit;
};

maxProfit([12, 3, 2, 1, 4, 5, 11, 7]);
*/
//
//
//
//
//
//
//
//
//
/*  (38.)  Add Digits  (258)  *********************************************************************
 */
// solution 2 type ==>>
//
// var addDigits = function (num) {
//   let arr = num.toString().split("");
//   while (arr.length != 1) {
//     let sum = arr.reduce((a, b) => Number(a) + Number(b), 0);
//     arr = sum.toString().split("");
//   }
//   console.log(Number(arr[0]));
// };
// addDigits(99);

//
//
//
//
// var addDigits = function (num) {
// for (let i = 0; i < arr.length; i++) {
//   num1 = +num1 + +arr[i];
// }
// arr = num1.toString().split("");
// num1 = 0;
// for (let i = 0; i < arr.length; i++) {
//   num1 = +num1 + +arr[i];
// }
// arr = num1.toString().split("");
// num1 = 0;
// for (let i = 0; i < arr.length; i++) {
//   num1 = +num1 + +arr[i];
// }
// console.log(arr);
// console.log(num1);
// }

// addDigits(99);
//
//
//
//
//
//
//
//
//
/*  (39.)  Third Maximum Number  (414)  *****************************************************************************************************************************
 */
/*
var thirdMax = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  console.log(nums, "before");

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j >= i + 1; j--) {
      if (nums[i] == nums[j]) {
        nums.splice(j, 1);
      }
    }
  }
  console.log(nums, "after");

  let thirdMaxElm = nums[nums.length - 3];
  if (thirdMaxElm == undefined) {
    thirdMaxElm = nums[nums.length - 1];
  } else if (nums[nums.length - 2] == undefined) {
    thirdMaxElm = nums[nums.length - 1];
  } else if (nums[nums.length - 1] == undefined) {
    thirdMaxElm = 0;
  }

  console.log(thirdMaxElm);
};
thirdMax([2, 2, 2, 1]);
*/
//
//
//
//
//
//
//
//
//
/*  (40.)  Summary Ranges  (228) ****************************************************************************************
 */
/*
var summaryRanges = function (nums) {
<!-- first we saprate renge in array and put in new array -->
  let arr = [];
  let renge = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      arr.push(nums[i]);
    } else if (nums[i] + 1 !== nums[i + 1]) {
      arr.push(nums[i]);
      renge.push(arr);
      arr = [];
    } else {
      renge.push(nums[i]);
    }
  }
  console.log(renge, "sparated in new array");

<!-- now we put a range sign in new range`s array -->

  for (let j = 0; j < renge.length; j++) {
    if (renge[j].length > 1) {
      renge[j] = renge[j][0] + "->" + renge[j][renge[j].length - 1];
    } else if ((renge[j].length = 1)) {
      renge[j] = `${renge[j]}`;
    }

  }
  return renge;
  console.log(renge, "rengeee");
};
<!--Ans==> Hence we got that ranged array  -->
*/
//
//
// /
//
//
//
//
//
//
//

/*  (41.)  Longest Palindrome   (409)   *************************************************************************************
 */
// var longestPalindrome = function (s) {
//   s = s.split("").sort();
//   let palindrome = 0;
//   for (let i = 0; i < s.length; i++) {
//     let indexFirst = s.indexOf(s[i]);
//     let indexLast = s.lastIndexOf(s[i]);
//   }
// };
// longestPalindrome("abccccdd");
//
//
//
//
//
//
//
//
//
/* ---Resolve ==>>>> (22.)   Length of last word in string      *********************************************************************
 */
/*
var lengthOfLastWord = function (s) {
  s = s.trim(); 
  var lastWord = "";
  var i = s.length - 1;
  while (s[i] != " ") {
    lastWord = lastWord + s[i];

    // console.log(s[i]);
    i--;
  }
  console.log(lastWord);

  console.log(lastWord.length);
};
lengthOfLastWord("world ramesh   ");
*/
//
//
//
//
//
//
//
//
//
//
/*  (42.)   Power of Two (231)  *******************************************************************************
 */
// 2 Type Solution  ==================>>>>>>>>>>
/*

   var isPowerOfTwo = function (n) {
  
     let num = 2;

     let twoPowerArr = [1];
     let result = false;
     for (let i = 1; i <= n / 3 + 1; i++) {
        var twoPower = 1;
        for (let j = 1; j <= i; j++) {
           twoPower = twoPower * num;
        }
       twoPowerArr.push(twoPower);
     }
    console.log(twoPowerArr, "TwoPowerArr");
    for (let k = 0; k < twoPowerArr.length; k++) {
       if (twoPowerArr[k] == n) {
         result = true;
        }
     }
     console.log(result);
  };
  isPowerOfTwo(27);

// repeatedSubstringPattern("abcabcabcabc");
*/
//
//
//
//
//
//
// 2nd Solution  ================>>>>>>>>>>
/*
  var isPowerOfTwo = function (n) {
    if (n < 1) {
      console.log(false);
    }
    if (n == 1) {
      console.log(true);
    }
    if (n % 2 == 1) {
      console.log(false);
    }
    console.log(isPowerOfTwo(n / 2));
  };
  isPowerOfTwo(16);
  */

//
//
//
//
//
//
//
//
//
//
/*  (43.)   Power of Three (326)  *******************************************************************************
 */
/*
   var isPowerOfThree = function (n) {
  
     let num = 3;

     let threePowerArr = [1];
     let result = false;
     for (let i = 1; i <= n / 3 + 1; i++) {
        var threePower = 1;
        for (let j = 1; j <= i; j++) {
           threePower = threePower * num;
        }
       threePowerArr.push(threePower);
     }
    console.log(threePowerArr, "threePowe Arr");
    for (let k = 0; k < threePowerArr.length; k++) {
       if (threePowerArr[k] == n) {
         result = true;
        }
     }
     console.log(result);
  };
  isPowerOfThree(27);

// repeatedSubstringPattern("abcabcabcabc");
*/
//
//
//
//
//
//
//
//
/*  (44.)   Power of Four (342)  *******************************************************************************
 */
//    2 Types Solutions  ===============>>>>>>>>>>>>>>>
/*
var isPowerOfFour = function (n) {
  
     let num = 4;

     let fourPowerArr = [1];
     let result = false;
     for (let i = 1; i <= n / 3 + 1; i++) {
        var fourPower = 1;
        for (let j = 1; j <= i; j++) {
          fourPower = fourPower * num;
        }
       fourPowerArr.push(fourPower);
     }
    // console.log(fourPowerArr, "fourPower Arr");
    for (let k = 0; k < fourPowerArr.length; k++) {
       if (fourPowerArr[k] == n) {
         result = true;
        }
     }
    //  console.log(result);
    return result
  };
 isPowerOfFour(27);
 */
//
//
//
//
//
// 2nd Solution  =============>>>>>>>>>>
/*
  var isPowerOfFour = function (n) {
    if (n < 1) {
      console.log(false);
    }
    if (n == 1) {
      console.log(true);
    }
    if (n % 4 == 1) {
      console.log(false);
    }
    console.log(isPowerOfFour(n / 4));
  };
  isPowerOfFour(16);
  */

//
//
//
//
//
//
//
//
//
//
//
/*  (45.)  Ugly number   (263)  **********************************************************************************************
 */
/*
var isUgly = function (n) {
  if (n == 1) {
    console.log(true, "1");
  } else if (n == 0) {
    console.log(false);
  }

//  note :: 
    // check n is devidable by 2,3,5 untill n==1 , 
    // when n==1 then result come out true, otherwise 
    // result will be false  ===>>>> 

  while (n != 1) {
    if (n % 2 == 0) {
      n = n / 2;
    } else if (n % 3 == 0) {
      n = n / 3;
    } else if (n % 5 == 0) {
      n = n / 5;
    } else {
      console.log(false);
    }
  }
  console.log(true);
};
isUgly(14);

*/
//
//
//
//
//
//
//
//
//
//
//
//
/*  (46.)  Missing Number  (268)   ***************************************************************************************
 */
/*
var missingNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i != nums[i]) {
      // return i
      console.log(i);
    }
  }
  console.log(nums.length, "length");
  // return nums.length;
};
missingNumber([0, 1, 3]);
*/
//
//
//
//
//
//
//
//
//
//
/*  (47.)   Reverse Vowels of a String  (345)   **************************************************************************************************
 */
/*
var myAtoi = function (s) {
  let numText = s.match(/(^( +?|)\d+|(^( +?|)(-|\+)\d+))/);

  let num = parseInt(numText);

  if (num < (-2) ** 31) {
    num = (-2) ** 31;
  } else if (num > 2 ** 31 - 1) {
    num = 2 ** 31 - 1;
  }
  let output = isNaN(num) ? 0 : num;
  console.log(output);
};
myAtoi("words and 987");

*/
//
//
//
//
//
//
//
//
//
//
//
//
/*  (50.)  Add Two Numbers   (2)  ****************XXXXXXXXXXXXXXXXXXXXX******************************************************************************
 */
/*
var addTwoNumbers = function (l1, l2) {
  l1.toString().split("").reverse();
  l2.toString().split("").reverse();

  let li1 = l1.join("");
  let li2 = l2.join("");

  // console.log(li1, "lst1");
  // console.log(li2, "lst2");

  let list1 = "";
  let list2 = "";

  for (let i = li1.length - 1; i >= 0; i--) {
    list1 = list1 + li1[i];
  }
  console.log(list1);
  for (let j = li2.length - 1; j >= 0; j--) {
    list2 = list2 + li2[j];
  }
  console.log(list2);

  let ouput = [];
  ouput = +list1 + +list2;
  ouput = ouput.toString().split("");
  console.log(ouput, "output");
};
// addTwoNumbers([9, 4, 7], [5, 6, 4]);
addTwoNumbers([9, 9, 9, 9], [9, 9, 9, 9]);
*/
//
//
//   2nd solution  ====>>>>>>>>>>

/*
  let output = [];
  let carry = 0;
  let i = 0;
  let j = 0;
  // let sum = 0;

  while (i < l1.length && j < l2.length) {
    let sum = l1[i] + l2[j] + carry;
    if (sum >= 10 && l1[i] == l1[l1.length - 1] && l2[j] == l2[l2.length - 1]) {
      let drop = sum % 10;
      let lastElm = (sum - drop) / 10;
      carry = lastElm;
      output.push(carry);
      output.push(drop);
      carry = 0;
      drop = 0;
    }
    if (sum >= 10 && l1[i] != l1[l1.length - 1] && l2[j] != l2[l2.length - 1]) {
      let drop = sum % 10;
      output.push(drop);
      drop = (sum - drop) / 10;
      carry = drop;
    } else if (sum <= 9) {
      output.push(sum);
      carry = 0;
    }
    i++;
    j++;
  }
  console.log(output);
};
addTwoNumbers([9, 9, 9, 9], [9, 9, 9, 9]);
// addTwoNumbers([9, 4, 7], [5, 6, 4]);
*/
//
//
//
//
//
//
//
//
//
//
/*  (51.)    Three Sum  (15) ********************************************************************************************
 */
/*
var threeSum = function (nums) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];

        if (sum == 0) {
          var sumArr = [];
          sumArr.push(nums[k], nums[i], nums[j]);
        }
      }
    }
    // console.log(nums[i], "nums[i]");
    output.push(sumArr);
    if (nums[i] == "0") {
      output = nums;
    }
  }
  for (let m = 0; m < output.length; m++) {
    for (let n = m + 1; n < output.length; n++) {
      if (output[m] == output[n]) {
        output.pop();
        output.pop();
      }
    }
  }
  console.log(output);
  // return output
};
// threeSum([-1, 0, 1, 2, -1, -4]);
threeSum([0, 0, 0, 0]);
// threeSum([0, 1, 1]);
*/

//
//
//
//
//
//
//
//
//
//
//

/*  (52.)   4Sum  (18)   *******XXXXXXXXXXXXXXXXXXXXXXX*********************************************************************************
 */
/*
var fourSum = function (nums, target) {
  let output = [];
  let a = 0;
  let b = a + 1;
  let c = b + 1;
  let d = c + 1;
  while (nums[a] + nums[b] + nums[c] + nums[d] == target) {
    let sum = nums[a] + nums[b] + nums[c] + nums[d];
    if (sum == target) {
      var sumArr = [];
      sumArr.push(nums[c], nums[b], nums[d], nums[a]);
    }
    a++;
    b++;
    c++;
    d++;
  }
  output.push(sumArr);
  console.log(output);
};
fourSum([1, 0, -1, 0, -2, 2], 0);
*/
//
//
//
//
//
//
//
//
//
// //
//
//
//
//
//
/*  (53.)  Find Minimum in Rotated Sorted Array  (153) **********************************************************************************
 */
/*
var findMin = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  console.log(nums[0]);
};
findMin([3, 4, 5, 1, 2]);
*/

//
//
//
//
//
//
//
//
//
/*  (54.)  Find Minimum in Rotated Sorted Array  (154) **********************************************************************************
 */
/*
var findMin = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  console.log(nums[0]);
};
findMin([3, 4, 5, 1, 2]);
*/
//
//
//
//
//
//
//
//
//
/*  (55.)   Maximum Count of Positive Integer and Negative Integer  (2529)  *************************************************************************************
 */
/*
var maximumCount = function (nums) {
  let pos = 0;
  let neg = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      pos++;
    } else if (nums[i] < 0) {
      neg++;
    }
  }
  if (pos > neg) {
    console.log(pos);
  } else if (pos < neg) {
    console.log(neg);
  } else {
    console.log(pos);
  }
};
maximumCount([-5, -4, -3, -2, -1, 0, 0, 1, 2, 4]);
*/
//
//
//
//
//
//
//
//
//
//
/*  (56.)  Difference Between Element Sum and Digit Sum of an Array  (2535)  ***********************************************************************************************
 */
/*
var differenceOfSum = function (nums) {
  let sumEle = 0;
  for (let i = 0; i < nums.length; i++) {
    sumEle = sumEle + nums[i];
  }
  let sumDigit = 0;
  let nums1 = nums.join("").split("");
  for (let j = 0; j < nums1.length; j++) {
    sumDigit += parseInt(+nums1[j]);
  }
  let difference = sumEle - sumDigit;
  console.log(difference);
};
differenceOfSum([1, 15, 6, 3]);
*/
//
//
//
//
//
//
//
//
//

/*  (57.)  Count Negative Numbers in a Sorted Matrix   (1351)  ******************************************************************************************
 */
/*

var countNegatives = function (grid) {
  let arr = [];
  let neg = 0;
  for (let element of grid) {
    arr.push(...element);
  }
  console.log(arr);
  for (let elem of arr) {
    if (elem < 0) {
      neg++;
    }
  }
  // return neg;
  console.log(neg);
};
countNegatives([[4, -1],[3, 2, -1],[1, -1, -2],[-1,-2, -3]]);

*/
//
//
//
//
//
//
//
//
//
/*  (58.)  Search in Rotated Sorted Array II  (81)  binary search ****************************************************************************************
 */
/*
var search = function (nums, target) {
  let arr = nums.sort(function (a, b) {
    return a - b;
  });
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] == target) {
      return true;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};
search([4, 5, 6, 7, 8, 8, 1, 2], 8);

*/
//
//
//
//
//
//
//
//
/*  (59.)  Median of Two Sorted Arrays  (4)   ******************************************************************************

*/
// var findMedianSortedArrays = function (nums1, nums2) {
//   let nums = [...nums1, ...nums2];
//   nums.sort(function (a, b) {
//     return a - b;
//   });
//   while (nums.length == 2) {
//     if (nums.length % 2 == 0) {
//       nums.shift();
//       nums.pop();
//     }
//   }
//   console.log(nums);
//   // let output = (nums[0] + nums[nums.length - 1]) / 2;
//   // console.log(output);
// };
// findMedianSortedArrays([1, 3], [2, 7]);
//
//
//
//
//
//
//
//
//
/*  (60.)   Find First and Last Position of Element in Sorted Array  (34)  *****************************************************************************************
 */
/*
var searchRange = function (nums, target) {
  let output = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      output[0] = i;
      break;
    }
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] === target) {
      output[1] = j;
      break;
    }
  }
  return output;
};
searchRange([5, 7, 7, 8, 8, 10], 8);
*/
//
//
//
//
//
//
//
//
//
//
//
/*  (61.)   Alternating Digit Sum   (2544)  ******************************************************************************************************
 */
/*
var alternateDigitSum = function (n) {
  let sumPosi = 0;
  let sumNeg = 0;
  let arr = n.toString().split("");

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      sumPosi += +arr[i];
    } else {
      sumNeg += +arr[i];
    }
  }
  let alternateSum = sumPosi - sumNeg;
  return alternateSum;
};

*/
//
//
//
//
//
//
//
//
//
//
/*  (62.)  Median of Two Sorted Arrays  (4)  *******************************************************************************
 */
/*
var findMedianSortedArrays = function (nums1, nums2) {
  let numsMerge = [...nums1, ...nums2];

  let nums = numsMerge.sort(function (a, b) {
    return a - b;
  });
  var mid = 0;

  if (nums.length % 2 == 0) {
    mid = [nums[[nums.length / 2] - 1] + nums[nums.length / 2]] / 2;
  } else if (nums.length % 2 != 0) {
    mid = nums[[nums.length - 1] / 2];
  }
  //   console.log(mid);
  return mid;
};

// findMedianSortedArrays([1, 3], [2, 3, 4, 5]);
findMedianSortedArrays([1, 3], [4]);

*/

//
//
//
//
//
//
//
//
//
//
//
/*  (63.)  . Reverse Integer  (7)  **************************************************************************************************
 */
/*
var reverse = function (x) {
  let result = x.toString().split("").reverse();

  for (let i = 0; i < result.length; i++) {
    if (result[0] == "0") {
      result.shift();
    }
  }

  if (result[result.length - 1] == "-") {
    result.pop();
    result.unshift("-");
  }
  result = result.join("");
  if (result <= -2147483651 || result >= 2147483651) {
    return 0;
  }
  // return result;
  console.log(result);
};
// reverse(-124000);
reverse(1534236469);
*/
//
//
//
//
//
//
//
//
//
//
//
/*  (64.)   First Unique Character in a String  (387)  ***************************************************************************************************************************
 */

// var firstUniqChar = function (s) {
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j < s.length; j++) {
//       if (s[i] != s[j]) {
//         console.log(i);
//       }
//     }
//     break;
//   }
// };
// firstUniqChar("eetcode");

//
//
//
//
//
/*  (65.)   First Unique Character in a String  (387)   ***************************************************************************************************************
 */
/*
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

// firstUniqChar("leetcode");
*/
//
//
//
//
//
//
//
//
//
//
//
/* (65.)  Maximum Value of a String in an Array  (2496)  **********************************************************************************************
 */
/*
var maximumValue = function (strs) {
  let max = 0;
  for (let i = 0; i < strs.length; i++) {
    if (/^\d+$/.test(strs[i])) {
      toNumber = parseInt(strs[i]);
    } else {
      toNumber = strs[i].length;
    }
    if (toNumber > max) {
      max = toNumber;
    }
  }
  console.log(max);
};
maximumValue(["alic3", "bob", "3", "4", "r00000"]);
*/
//
//
//
//
//
//
//
//
//
//
/*  (66.)  sort colors (75)  ************************************************************************************************************************************

 */
/*
var sortColors = function(nums) {
    nums.sort(function(a,b){return a-b})
};
sortColors([0,2,0,1,2])

 */
//
//
//
//
//
//
//
//
//
/*  Java-script class   ******************************************************************************************************
 */
/*
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    console.log(date.getFullYear() - this.year);
  }
}

let myCar = new Car("Ford", 2014);
let carV = "My car is " + myCar.age() + " years old.";
*/

//
//
//
//
//
//
//
//
/*  Stack with class in Java-script     *************************************************************************************
 */
/*
class stack {
  item = [];
  constructor(size) {
    this.maxSize = size;
    this.currentSize = this.item.length;
  }
  push(newVal) {
    if (this.currentSize >= this.maxSize) {
      console.log("stack is full");
    } else {
      this.item[this.currentSize] = newVal;
      this.currentSize++;
    }
  }
  pop() {
    if (this.currentSize > 0) {
      this.currentSize--;
      this.item.length = this.currentSize;
    } else {
      console.log("stack is already Empty");
    }
  }
  show() {
    console.log(this.item);
  }
}

nums = new stack(5);

nums.push("Shyam");
nums.push("Ram");
nums.push("Namam");

nums.pop()

nums.push("Ramesh");
nums.push("Rakesh");

nums.show();

nums.push("Raju");

nums.show();


*/
//
//
//
//
//
//
//
//
//
/*  (67.) Sort Array By Parity   (922)   ***************************************************************************************************************
 */
/*
var sortArrayByParity = function (nums) {
  let res = [];
  for (let i of nums) {
    if (i % 2 == 0) {
      res.unshift(i);
    } else {
      res.push(i);
    }
  }
  // return res;
  console.log(res);
};
sortArrayByParity([3, 1, 2, 4]);
*/
//
//
//
//
//
//
//
//
//
//
/*  (68.)   Sort Even Odd   *******************************************************************************************
 */
/*
var sortEvenOdd = function (nums) {
  let oddArr = [];
  let evenArr = [];
  let finalArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      evenArr.push(nums[i]);
    } else {
      oddArr.push(nums[i]);
    }
  }

  let oddSort = oddArr.sort((a, b) => b - a);
  let evenSort = evenArr.sort((a, b) => a - b);

  for (let i = 0; i < oddArr.length; i++) {
    finalArr.push(evenSort[i]);
    finalArr.push(oddSort[i]);
  }

  if (evenSort.length > oddSort.length) {
    finalArr.push(evenSort[evenSort.length - 1]);
  }

  console.log(finalArr);
  // return finalArr;
};
sortEvenOdd([4, 1, 2, 3]);
*/
//
//
//
//
//
//
//
//
//
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//
// var sortArrayByParityII = function (nums) {
//   let boundary = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       [nums[boundary], nums[i]] = [nums[boundary], nums[i]];
//       boundary++;
//     }
//   }
//   // return nums;
//   console.log(nums);
// };

// sortArrayByParityII([3, 1, 2, 4]);
// //
//
//
//
//
//

//
//

/*   ----- Promise  JS   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

         Promise Example :

               waiting for TimeOut      Example :  Using Callback

               */
// setTimeout(function () {
//   myFunction("this is JS");
// }, 3000);
// function myFunction(Value) {
//   console.log(Value);
// }
//
//
//
//
//
//
//
//
//   ----- Promise  JS   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let myPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("this is JS");
//   }, 3000);
// });
// myPromise.then(function (Value) {
//   console.log(Value);
// });
//
//
//
//
//
//
//
//
//
//
//
//
// ---- Get Hobbies  to Name   ---Promise --- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// console.log("start");

// function getName(name) {
//   return new promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Inside Name SetTime");
//     }, 2000);
//   });
// }

// function getHobbies(name) {
//   return new promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Inside Hobbies SetTime");
//     }, 4000);
//   });
// }

// getName("Rahul Sharma")
//   .then((nm) => getHobbies(nm))
//   .then((hobby) => console.log(hobby));

// console.log("End");
//
//
//
//
//
//
//
//
//
//    ------ Async  /  Await   JS ----- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// async function weather() {
//   let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("32 Degree");
//     }, 5000);
//   });

//   let bengloreWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27 Degree");
//     }, 7000);
//   });

//   console.log("   Please Wait ...! , Delhi Weather Fetching ... ");

//   let delhiW = await delhiWeather;
//   console.log("       Delhi Weather is :" + delhiW);

//   console.log("   Please Wait ...! , Benglore Weather Fetching ...");

//   let bengW = await bengloreWeather;
//   console.log("       Benglore Weather is :" + bengW);

//   return [delhiW, bengW];
// }

// console.log("Welcome to Weather control room");
// let a = weather();
// a.then((value) => {
//   console.log(value);
// });

// // console.log("  Thank You !");
//
//
//
//
//
//
//
//
//
//
//
/*  (69.)  Separate the Digits in an Array  (2553)  ************************************************************************************************************************************************************
 */
/*
var separateDigits = function (nums) {
  let joint = nums.toString().split("");

  let output = [];
  for (let i = 0; i < joint.length; i++) {
    if (
      joint[i] == "0" ||
      joint[i] == "1" ||
      joint[i] == "2" ||
      joint[i] == "3" ||
      joint[i] == "4" ||
      joint[i] == "5" ||
      joint[i] == "6" ||
      joint[i] == "7" ||
      joint[i] == "8" ||
      joint[i] == "9"
    ) {
      let jointNum = +joint[i];
      output.push(jointNum);
    }
  }
  console.log(output);
};
separateDigits([13, 25, 83, 77]);
*/
//
//
//
//
//
//
//
//
//
//
/*  (70.) Count Integers With Even Digit Sum  (2180)   ****************************************************************************************************************
 */
/*
var countEven = function (num) {
  let numArr = [];
  for (i = 1; i <= num; i++) {
    numArr.push(i);
  }
  let numSpltArr = [];
  for (i = 0; i < numArr.length; i++) {
    let numsplt = numArr[i].toString().split("");
    numSpltArr.push(numsplt);
  }
  //   console.log(numSpltArr);

  let numEven = [];
  for (let i = 0; i < numSpltArr.length; i++) {
    var numSArr = numSpltArr[i];

    if (numSArr.length == 1 && numSArr[0] % 2 == 0) {
      numEven.push(numSArr[0]);
    }
    if (numSArr.length > 1) {
      let sum = 0;

      for (let j = 0; j < numSArr.length; j++) {
        sum += +numSArr[j];
      }

      //   console.log(sum, "sum");
      if (sum % 2 == 0) {
        numEven.push(sum);
      }
    }
  }
  //   console.log(numEven, numEven.length);
  return numEven.length;
};
// countEven(4);

// countEven(4);
*/
//
//
//
//
//
//
//
//
//
/*  (71.)   .... (345)   **************************************************************************************************
 */
/*
var myAtoi = function (s) {
  let numText = s.match(/(^( +?|)\d+|(^( +?|)(-|\+)\d+))/);

  let num = parseInt(numText);

  if (num < (-2) ** 31) {
    num = (-2) ** 31;
  } else if (num > 2 ** 31 - 1) {
    num = 2 ** 31 - 1;
  }
  let output = isNaN(num) ? 0 : num;
  console.log(output);
};
myAtoi("words and 987");

*/
//
//
//
//
//
//
//
//
//
//
//
/*  (72.)  Smallest Value of the Rearranged Number    (2165.)  ***************************************************************************************************************************
 */
/*
var smallestNumber = function (num) {
  if (num >= 0) {
    let numPos = num.toString().split("").sort((a, b) => a - b);

    let numPos2 = [];
      var output;

    for (let i = 0; i < numPos.length; i++) {
      numPos2.push(Number(numPos[i]));
    }

       if (numPos2[0] !== 0) {
           output = Number(numPos2.join(""))
      
      return output ;
    }

      if (numPos2[0] == 0) {
      for (let i = 0; i < numPos2.length; i++) {
        if (numPos2[i] > 0) {
          let temp = numPos2[0];
          numPos2[0] = numPos2[i];
          numPos2[i] = temp;
          break;
        }
      }
      output = numPos2.join("");
      return Number(output);
    }
  } else {
    let result = num
      .toString()
      .split("")
      .sort((a, b) => b - a);

    if (result[result.length - 1] == "-") {
      result.pop();
      result.unshift("-");
    }
    result = result.join("");
    return Number(result);
  }
};
let num = 270;
console.log(smallestNumber(num));

*/

//
// \
//
//
//
//
//
//
//
//
//
//
/*  (73.)  989. Add to Array-Form of Integer  ***********************************************************************************************************
 */
/*
var addToArrayForm = function (num, k) {
  let numToNum = BigInt(num.join("")) + BigInt(k);

  return numToNum.toString().split("").map(Number);
};
addToArrayForm(
  [1, 2, 6, 3, 0, 7, 1, 7, 1, 9], 516 )
*/
//
//
//
//
//
//
//
//
//
//
//
/*  (74.)   922. Sort Array By Parity II  ***********************************************************************************************************
 */
/*
var sortArrayByParityII = function (nums) {
  let oddArr = [];
  let evenArr = [];
  let finalArr = [];

  for(let i=0; i<nums.length; i++){
      if(nums[i]%2 === 0){
          evenArr.push(nums[i])
      }else{
          oddArr.push(nums[i])
      }
  }
//   let oddSort = oddArr.sort((a,b) => b-a);
//   let evenSort = evenArr.sort((a,b) => a-b);
  
   for(let i =0; i< evenArr.length; i++){
      finalArr.push(evenArr[i]);
      finalArr.push(oddArr[i]);
      
   }
   
   return finalArr
};

sortArrayByParityII([3, 1, 2, 4]);
*/

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/*  (75.)   2180. Count Integers With Even Digit Sum   ...***************************************************************************************************************************
 */
/*
var countEven = function (num) {
  let numArr = [];
  for (i = 1; i <= num; i++) {
    numArr.push(i);
  }
  let numSpltArr = [];
  for (i = 0; i < numArr.length; i++) {
    let numsplt = numArr[i].toString().split("");
    numSpltArr.push(numsplt);
  }

  let numEven = [];
  for (let i = 0; i < numSpltArr.length; i++) {
    var numSArr = numSpltArr[i];

    if (numSArr.length == 1 && numSArr[0] % 2 == 0) {
      numEven.push(numSArr[0]);
    }
    if (numSArr.length > 1) {
      let sum = 0;

      for (let j = 0; j < numSArr.length; j++) {
        sum += +numSArr[j];
      }

      if (sum % 2 == 0) {
        numEven.push(sum);
      }
    }
  }
  console.log(numEven, numEven.length);
};
countEven(4);
*/
//
//
//
//
//
//
//
//
//
//
//
/*  (76.)  Minimum Common Value  (2540)  ***********************************************************************************************************
 */
/*
var getCommon = function (nums1, nums2) {
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] == nums2[j]) {
      return nums1[i];
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return -1;
};
getCommon([1, 2, 3, 4], [2, 3, 5]);

// output=2 
// becouse 2 is smalest common value of two arrays
*/
//
//
//
//
//
//
// /
//
//
//

//
//
// var isNumber = function (s) {
//   let num1 = s.match(/(^( +?|)\d+|(^( +?|)(-|\+)\d+))/);
//   //  let num = s.match(/\d+\.\d+/g)
//   let num = parseFloat(num1);
//   console.log(num);
//   if (num < (-2) ** 31) {
//     num = (-2) ** 31;
//   } else if (num > 2 ** 31 - 1) {
//     num = 2 ** 31 - 1;
//   }

//   let output = isNaN(num) ? false : true;
//   console.log(output);
// };

// isNumber(".1");

//
//
//
//

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/*
 */
var areNumbersAscending = function (s) {
  let nums = s.match(/\d+/g);

  let checkNumArr = [];
  for (let i = 0; i < nums.length; i++) {
    let intNums = +nums[i];
    checkNumArr.push(intNums);
  }
  console.log(checkNumArr);

  let checkEqval = checkNumArr.sort((a, b) => a - b);
  for (let i = 0; i < checkNumArr.length; i++) {
    if (checkNumArr[i] == checkNumArr[i + 1] || checkNumArr !== checkEqval) {
      console.log(false);
      break;
    }
    console.log(true);
  }
};
// areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles");
areNumbersAscending("hello world 5 x 5");
