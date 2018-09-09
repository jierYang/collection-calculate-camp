'use strict';

function median_to_letter(collection) {
  let median = 0;
  let numsLen = collection.length;

  collection = collection.sort(((a, b) => a - b));

  if (numsLen % 2 === 1) { // is even
    median = collection[(numsLen) / 2];
  }

  else {
    median = (collection[numsLen / 2 ] + collection[numsLen / 2 +1]) / 2;
  }

  let result = '';
  do {
    median -= 1;
    result = String.fromCharCode(97 + (median % 26)) + result;
    median = Math.floor(median / 26);
  } while(median > 0);

  return result;
}

module.exports = median_to_letter;
