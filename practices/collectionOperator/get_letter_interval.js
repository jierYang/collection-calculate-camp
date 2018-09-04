'use strict';

function get_letter_interval(number_a, number_b) {
  var range = (start, end) => [...Array(end - start + 1)].map((_, i) => String.fromCharCode(96+start + i));

  var rangeDcrease = (start, end) => [...Array(start - end + 1)].map((_, i) => String.fromCharCode(96+start - i));

  return number_a < number_b ? range(number_a, number_b) : rangeDcrease(number_a, number_b);
}

module.exports = get_letter_interval;
