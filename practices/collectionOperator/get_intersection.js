'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter(value => -1 !== collection_a.indexOf(value));
}

module.exports = get_intersection;
