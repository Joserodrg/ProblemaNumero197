export const fn1 = (xDoublePrime) => { 
  var result = new Array(xDoublePrime.length);
  var left = 0;
  var right = xDoublePrime.length - 1;
  for (var i = 0; i < xDoublePrime.length; i++) {
    if (i % 2 === 0) {
      result[left] = xDoublePrime[i];
      left++;
    } else {
      result[right] = xDoublePrime[i];
      right--;
    }
  }
  return result.join('');
};
