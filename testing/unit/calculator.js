const Calculator = function() {

}

Calculator.prototype.addNums = function(num1, num2) {
  return num1 + num2;
}

Calculator.prototype.deductNums = function(num1, num2) {
  return num1 - num2;
}

Calculator.prototype.divideNums = function(num1, num2) {
  return num1 / num2;
}

Calculator.prototype.multiplyNums = function(num1, num2) {
  return num1 * num2;
}

Calculator.prototype.calcReminder = function(num1, num2) {
  return num1 % num2;
}

Calculator.prototype.thePowerOf = function(num1, num2) {
  return num1 ** num2;
}

Calculator.prototype.percent = function(number, percentage) {
  percentage = percentage / 100;
  return percentage * number;
}

Calculator.prototype.getPi = function(number) {
  return number * Math.PI;
}

module.exports = Calculator;
