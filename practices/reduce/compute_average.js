'use strict';

function compute_average(collection) {
  return collection.reduce((acc, val) => acc + val, 0)/collection.length;
}

module.exports = compute_average;

