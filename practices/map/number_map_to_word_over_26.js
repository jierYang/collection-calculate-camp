'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(a=>intToChar(a));
};

function intToChar(numberChar){
  var decade = numberChar/26;
  var unit = numberChar%26;
  var result="";
  if(decade>1){
    result+=String.fromCharCode(decade+0x60);
  }
  if(unit>0){
    result+=String.fromCharCode(numberChar%26+0x60);
  }

  return result;
}



module.exports = number_map_to_word_over_26;
