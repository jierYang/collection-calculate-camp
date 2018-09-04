'use strict';

function double_to_one(collection) {
  return [...new Set([].concat.apply([], collection))];
}

module.exports = double_to_one;
