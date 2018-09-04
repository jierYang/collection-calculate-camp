'use strict';

function even_to_letter(collection) {
  return collection.filter(a=>a%2==0).map(a=>String.fromCharCode(a+0x60));
}

module.exports = even_to_letter;
