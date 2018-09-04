'use strict';

function get_letter_interval_2(number_a, number_b) {
  var arr = new Array();

  if(number_b>number_a){

    for(var i=number_a;i<number_b;i++){
      arr.push(intToChar(i));
    }
  }
  else{
    for(var i=number_b;i>number_a;i--){
      arr.push(intToChar(i));
    }
  }

  return arr;
}



function intToChar(numberChar){
  var decade = numberChar/26;
  var unit = numberChar%26;
  var result="";
  if(decade>0){
    result+=String.fromCharCode(decade+96);
  }
  if(unit>0){
    result+=String.fromCharCode(numberChar%26+96);
  }

  return result;
}

module.exports = get_letter_interval_2;

