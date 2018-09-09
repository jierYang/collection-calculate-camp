'use strict';

function average_uneven(collection) {
  var odd = collection.filter(a=>a%2==1);
  return odd.reduce((acc, val) => acc + val, 0)/odd.length;
}

module.exports = average_uneven;
