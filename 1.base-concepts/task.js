'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4 * a * c;
  if (discriminant < 0) {
    arr;
  } else if (discriminant == 0) {
    arr[0] = -b / (2 * a);
  } else {
    arr[0] = (- b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (- b - Math.sqrt(discriminant)) / (2 * a);
  }
  return arr;
};

function calculateTotalMortgage(percent, contribution, amount, date) {
if (isNaN(percent) && typeof (percent) === 'string') {
  return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
} else if (isNaN(contribution) && typeof (contribution) === 'string') {
  return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
} else if (isNaN(amount) && typeof (amount) === 'string') {
  return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
}
const month = new Date().getMonth();
const year = new Date().getFullYear();
const creditYears = date.getFullYear() - year;
const creditMonths = creditYears * 12 - month + date.getMonth();
const creditPercent = (percent / 100) / 12;
const creditSum = amount - contribution;
const payment = creditSum * (creditPercent + (creditPercent / (((1 + creditPercent) ** creditMonths) - 1)));
const totalAmount = (payment * creditMonths).toFixed(2);
console.log(totalAmount);
return Number(totalAmount);
};