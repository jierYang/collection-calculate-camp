function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(value => -1 !== collection_b[0].indexOf(value));
}

module.exports = collect_same_elements;
