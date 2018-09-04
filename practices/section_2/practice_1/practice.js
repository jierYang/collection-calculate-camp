function count_same_elements(collection) {
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

  return map;

}

module.exports = count_same_elements;
