'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(a=>a%2!=0).map(a=>a*3+5).reduce(function(prev,cur) {
    return prev + cur;
  })

}

module.exports = hybrid_operation_to_uneven;

