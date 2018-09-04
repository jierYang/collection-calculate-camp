'use strict';

function get_integer_interval_2(number_a, number_b) {

  var range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

  var rangeDcrease = (start, end) => [...Array(start - end + 1)].map((_, i) => start - i);

  var arrays = number_a < number_b ? range(number_a, number_b) : rangeDcrease(number_a, number_b);

  return arrays.filter(number => number === 0 || !!(number && !(number % 2)));
}

module.exports = get_integer_interval_2;
