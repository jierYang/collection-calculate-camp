'use strict';

function average_to_letter(collection) {
  return String.fromCharCode(collection.reduce((acc, val) => acc + val, 0)/collection.length+1+0x60);
}

module.exports = average_to_letter;

