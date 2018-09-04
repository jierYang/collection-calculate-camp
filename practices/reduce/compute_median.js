'use strict';

function compute_median(collection) {
  var median = 0,
    numsLen = collection.length;
  collection.sort();
  if (numsLen % 2 === 0) { // is even
    median = (collection[numsLen / 2 - 1] + collection[numsLen / 2]) / 2;
  }

  else {
    median = collection[(numsLen - 1) / 2];
  }
  return median;
}

module.exports = compute_median;


