'use strict';
let fakeForEach = function (arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
};

fakeForEach([1, 5, 7, 8, 9], function (el) {
  console.log(el);
});
