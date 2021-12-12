'use strict';

let nums = [2, 13, 24, 56, 89];

// nums.forEach(function (el, i) {
//   nums[i] = el * 2;
// });

// console.log(nums);

let fakeMap = function (arr) {
  let newArr = [];
  let index = 0;
  arr.forEach(function (el) {
    newArr[index] = el * 2;
    index += 1;
  });

  return newArr;
};

console.log(fakeMap(nums));
console.log(nums); // nums remains unchanged
