'use strict';
// const arr = [1, 3, 5, 7, 25];

// const fakeReduce = function (array, callback, initialValue) {
//   const hasInitial = initialValue !== undefined;

//   const step = hasInitial ? 0 : 1;
//   let aggregator = hasInitial ? initialValue : array[0];

//   array.forEach((el) => (aggregator = callback(aggregator, el, step, array)));

//   return aggregator;
// };

// console.log(
//   fakeReduce(arr, (acc, item, idx) => {
//     acc += item;
//     return acc;
//   })
// );

function fakeReduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}
