'use strict';
let nums = [1, 3, 4, 6, 75, 22];

let fakeFilter = function (arr) {
  let newArr = [];
  let index = 0;
  arr.forEach(function (el) {
    if (el % 2 === 0) {
      newArr[index] = el;
      index += 1;
    }
  });

  return newArr;
};

console.log(fakeFilter(nums));
