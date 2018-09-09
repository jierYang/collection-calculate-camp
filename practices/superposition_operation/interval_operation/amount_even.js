'use strict';

function amount_even(collection) {
  return collection.filter(a=>a%2==0).reduce(function(prev,cur) {
    return prev + cur;
  })
}

module.exports = amount_even;
