'use strict';

function hybrid_operation(collection) {
  return  collection.map(a=>a*3+2).reduce(function(prev,cur){
    return prev + cur
  });
}

module.exports = hybrid_operation;

