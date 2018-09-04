'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var arr = new Array();
  for (var a = 0; a < collection_a.length; a++) {
    for (var b = 0; b < collection_b.length; b++) {
      if (collection_a[a] % collection_b[b] == 0) {
        arr.push(collection_a[a]);
      }
    }
  }
  return arr;
}

module.exports = choose_divisible_integer;
