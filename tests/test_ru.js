const test = require('ava');
import n2words from '../dist/n2words';

const testCasesRussian = [
  [0, 'ноль'],
  [1, 'один'],
  [2, 'два'],
  [3, 'три'],
  [11, 'одиннадцать'],
  [12, 'двенадцать'],
  [16, 'шестнадцать'],
  [19, 'девятнадцать'],
  [20, 'двадцать'],
  [21, 'двадцать один'],
  [26, 'двадцать шесть'],
  [28, 'двадцать восемь'],
  [30, 'тридцать'],
  [31, 'тридцать один'],
  [40, 'сорок'],
  [44, 'сорок четыре'],
  [50, 'пятьдесят'],
  [55, 'пятьдесят пять'],
  [60, 'шестьдесят'],
  [67, 'шестьдесят семь'],
  [70, 'семьдесят'],
  [79, 'семьдесят девять'],
  [89, 'восемьдесят девять'],
  [95, 'девяносто пять'],
  [100, 'сто'],
  [101, 'сто один'],
  [199, 'сто девяносто девять'],
  [203, 'двести три'],
  [287, 'двести восемьдесят семь'],
  [356, 'триста пятьдесят шесть'],
  [400, 'четыреста'],
  [434, 'четыреста тридцать четыре'],
  [578, 'пятьсот семьдесят восемь'],
  [689, 'шестьсот восемьдесят девять'],
  [729, 'семьсот двадцать девять'],
  [894, 'восемьсот девяносто четыре'],
  [999, 'девятьсот девяносто девять'],
  [1000, 'одна тысяча'],
  [1001, 'одна тысяча один'],
  [1097, 'одна тысяча девяносто семь'],
  [1104, 'одна тысяча сто четыре'],
  [1243, 'одна тысяча двести сорок три'],
  [2385, 'две тысячи триста восемьдесят пять'],
  [3766, 'три тысячи семьсот шестьдесят шесть'],
  [4196, 'четыре тысячи сто девяносто шесть'],
  [5846, 'пять тысяч восемьсот сорок шесть'],
  [6459, 'шесть тысяч четыреста пятьдесят девять'],
  [7232, 'семь тысяч двести тридцать два'],
  [8569, 'восемь тысяч пятьсот шестьдесят девять'],
  [9539, 'девять тысяч пятьсот тридцать девять'],
  [1000000, 'один миллион'],
  [1000001, 'один миллион один'],
  [4000000, 'четыре миллиона'],
  [10000000000000, 'десять триллионов'],
  [100000000000000, 'сто триллионов'],
  [1000000000000000000, 'один квинтиллион']
]


test('Russian', t => {
  for (let i = 0; i < testCasesRussian.length; i++) {
    t.is(n2words(testCasesRussian[i][0], { lang: 'ru' }), testCasesRussian[i][1])
  }
});
