'use strict';

function compute_median(collection) {

  let numsLen = collection.length;
  collection = collection.sort((a, b) => a - b);
  return  (numsLen % 2 === 0) ?
   (collection[numsLen / 2 - 1] + collection[numsLen / 2]) / 2: collection[Math.floor(numsLen / 2)];
}

module.exports = compute_median;


