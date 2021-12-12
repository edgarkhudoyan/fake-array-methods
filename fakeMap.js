'use strict';

let nums = [2, 13, 24, 56, 89];

nums.forEach(function (el, i) {
  nums[i] = el * 2;
});

console.log(nums);
