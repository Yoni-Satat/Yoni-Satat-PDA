var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should start on zero', function() {
    assert.strictEqual(calculator.runningTotal, 0);
  });

  it('should add a number', function() {
    calculator.add(10);
    assert.strictEqual(calculator.runningTotal, 10);
  });

  it('should subtract a number', function() {
    calculator.add(20);
    calculator.operatorClick('+');
    calculator.subtract(5);
    assert.strictEqual(calculator.runningTotal, 15);
  });

  it('should multiply', function() {
    calculator.add(1);
    calculator.operatorClick('+');
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 5);
  });

  it('should divide', function() {
    calculator.add(10);
    calculator.operatorClick('+');
    calculator.divide(2);
    assert.strictEqual(calculator.runningTotal, 5);
  });

  it('should know which number was clicked', function() {
    calculator.numberClick(2)
    assert.strictEqual(calculator.runningTotal, 2);
  });

  it('should know which operator was clicked', function() {
    calculator.operatorClick('+')
    assert.strictEqual(calculator.previousOperator, '+');
  });

  it('should clear the screen from previews results', function() {
    calculator.add(10);
    assert.strictEqual(calculator.runningTotal, 10);
    calculator.clearClick()
    assert.strictEqual(calculator.runningTotal, 0);
  });

});
