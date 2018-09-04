'use strict';

function choose_even(collection) {
  return collection.filter(number =>  number === 0 || !!(number && !(number%2)));
}

module.exports = choose_even;
