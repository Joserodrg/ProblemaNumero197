const fn1 = (xDoublePrime) => { 
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

const isVowel = (char) => "aeiouAEIOU".includes(char);

const fn2 = (xPrime) => {
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

const decodeMessage = (encryptedMessage) => {
  encryptedMessage = encryptedMessage.trim();
  if (encryptedMessage) {
    var xPrimeMessage = fn1(encryptedMessage);
    var originalMessage = fn2(xPrimeMessage);
    return encryptedMessage + ' => ' + originalMessage;
  }
  return '';
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnPaso1').onclick = () => {
    const input = document.getElementById('inputXDoublePrime').value.trim();
    const result = input ? fn1(input) : '';
    document.getElementById('outputXPrime').textContent = result ? `X'': ${input} ➔ X': ${result}` : '';
  };

  document.getElementById('btnPaso2').onclick = () => {
    const input = document.getElementById('inputXPrime').value.trim();
    const result = input ? fn2(input) : '';
    document.getElementById('outputX').textContent = result ? `X': ${input} ➔ X: ${result}` : '';
  };

  document.getElementById('btnTotal').onclick = () => {
    const input = document.getElementById('inputMsg').value.trim();
    const result = input ? decodeMessage(input) : '';
    document.getElementById('outputMsg').textContent = result ? result : '';
  };
});
