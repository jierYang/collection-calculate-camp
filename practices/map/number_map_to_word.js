'use strict';
var number_map_to_word = function(collection){
  return collection.map(a=>String.fromCharCode(a+0x60));
};

module.exports = number_map_to_word;
