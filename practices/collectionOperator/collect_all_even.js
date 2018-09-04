'use strict';

function collect_all_even(collection) {
  return collection.filter(number =>  number === 0 || !!(number && !(number%2)));
}

module.exports = collect_all_even;
