'use strict';

const rangeOdd = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2) result.push(i)
  }
  return result
};
;
module.exports = { rangeOdd };
