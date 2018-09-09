'use strict';
var calculate_average = function(collection){
  var res = collection.filter(a=>a%2==0);
  return res.reduce((acc, val) => acc + val, 0)/res.length;
};
module.exports = calculate_average;
