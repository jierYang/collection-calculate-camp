'use strict';

function get_union(collection_a, collection_b) {
  return collection_a.concat(collection_b.filter(v => !collection_a.includes(v)));
}

module.exports = get_union;

