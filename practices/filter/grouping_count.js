'use strict';

function grouping_count(collection) {
  var map = {};
  for(var i = 0;i<collection.length;i++){
    var s = collection[i];
    var r = map[s];
    if(r){
      map[s] +=1;
    }else{
      map[s] = 1;
    }
  }
  // return collection.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map());
}

module.exports = grouping_count;
