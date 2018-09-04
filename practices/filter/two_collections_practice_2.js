'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  return collection_a.filter(key => !collection_b.includes(key))
}

module.exports = choose_no_common_elements;
