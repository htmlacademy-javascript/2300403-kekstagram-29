// Функция для проверки длины строки.
function lengthCheck (string, length) {
  const stringProtector = String(string);
  if (stringProtector.length <= length) {
    return true;
  }
  return false;
}
lengthCheck();

// Функция для проверки, является ли строка палиндромом.
function palindrome (string) {
  const clearString = string.replaceAll(' ', '');
  const lowerString = clearString.toLowerCase();
  let newString = '';
  for (let stringCycle = lowerString.length - 1; stringCycle >= 0 ; stringCycle--) {
    newString += lowerString[stringCycle];
  }
  if (newString === lowerString) {
    return true;
  }
  return false;
}
palindrome('Довод довод');

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
function numberExtractor (string) {
  const stringProtector = string.toString();
  let numberString = '';
  for (let stringBrute = 0; stringBrute <= stringProtector.length - 1; stringBrute++) {
    const symbolCheck = parseInt(stringProtector[stringBrute], 10);
    if (!isNaN(symbolCheck)) {
      numberString += stringProtector[stringBrute];
    }
  }
  if (numberString === '') {
    return NaN;
  } else {
    return numberString;
  }
}
numberExtractor('Д0В0Д');
