'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce(function(prev,cur){
    return prev + cur
  });
}

module.exports = calculate_elements_sum;

