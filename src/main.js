import { fn1 } from './functions/fn1.js';
import { fn2 } from './functions/fn2.js';

const decodeMessage = (encryptedMessage) =>{
  encryptedMessage = encryptedMessage.trim();
  if (encryptedMessage) {
    var xPrimeMessage = fn1(encryptedMessage);
    var originalMessage = fn2(xPrimeMessage);
    return encryptedMessage + ' => ' + originalMessage;
  }
  return '';
};

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