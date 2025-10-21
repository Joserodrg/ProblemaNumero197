const isVowel = (char) => "aeiouAEIOU".includes(char);

export const fn2 = (xPrime) => {
  var finalResult = '';
  var nonVowelSequence = '';
  for (var i = 0; i < xPrime.length; i++) {
    var char = xPrime[i];
    if (isVowel(char)) {
      if (nonVowelSequence.length > 0) {
        finalResult += nonVowelSequence.split('').reverse().join('');
        nonVowelSequence = '';
      }
      finalResult += char;
    } else {
      nonVowelSequence += char;
    }
  }
  if (nonVowelSequence.length > 0) {
    finalResult += nonVowelSequence.split('').reverse().join('');
  }
  return finalResult;
};