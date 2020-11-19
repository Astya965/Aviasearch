/**
   * Согласование существительных с числительными
   * @param {Number} number - числительное в виде числа
   * @param {Object} dictionary - словарь с возможными вариантами существительных
   * @return {String} Подходящее существительное
   */
  export const connectNounAndNumral = function (number, dictionary) {
    var tens = Math.abs(number) % 100;
    var units = number % 10;
    if (tens > 10 && tens < 20) {
      return dictionary.other;
    }
    if (units > 1 && units < 5) {
      return dictionary.few;
    }
    if (units === 1) {
      return dictionary.one;
    }
    return dictionary.other;
  };
