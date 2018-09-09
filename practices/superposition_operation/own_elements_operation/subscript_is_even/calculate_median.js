'use strict';
var calculate_median = function(collection){
  collection = collection.filter(a=>a%2==0);
  var median = 0,
    numsLen = collection.length;
  collection.sort();
  if (numsLen % 2 === 0) {
    median = (collection[numsLen / 2 - 1] + collection[numsLen / 2]) / 2;
  }

  else {
    median = collection[(numsLen - 1) / 2];
  }
  return median;
};
module.exports = calculate_median;
