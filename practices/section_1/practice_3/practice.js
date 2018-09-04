function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(value => -1 !== object_b.value.indexOf(value));
}

module.exports = collect_same_elements;
