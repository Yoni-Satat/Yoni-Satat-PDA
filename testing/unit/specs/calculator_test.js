const Calculator = require('../calculator.js');
const assert = require('assert');

describe('Calculator', function() {
  let calculator;
  beforeEach(function() {
    calculator = new Calculator();
  });

  it('should be able to add numbers', function() {
    assert.strictEqual(calculator.addNums(1, 1), 2);
  });

  it('should be able to deduct numbers', function() {
    assert.strictEqual(calculator.deductNums(1, 1), 0);
  });

  it('should be able to divide numbers', function() {
    assert.strictEqual(calculator.divideNums(10, 5), 2);
  });

  it('should should be able to multiply numbers', function() {
    assert.strictEqual(calculator.multiplyNums(3, 3), 9);
  });

  it('should be able to return the reminder of 1 number divided by another', function() {
    assert.strictEqual(calculator.calcReminder(10, 3), 1);
  });

  it('should be able to calculate a number to power of', function() {
    assert.strictEqual(calculator.thePowerOf(3, 3), 27);
  });

  it('should be able to calculate 25% of 40', function() {
    assert.strictEqual(calculator.percent(40, 25), 10);
  });

  it('should be able to calculate PI', function() {
    assert.strictEqual(calculator.getPi(2), 6.283185307179586);
  });
});
