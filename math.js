function validateNumbers(...values) {
    for (const value of values) {
          if (typeof value !== 'number' || Number.isNaN(value)) {
                  throw new TypeError(`Expected a number, got ${typeof value}: ${JSON.stringify(value)}`);
          }
    }
}

function add(a, b) {
    validateNumbers(a, b);
    return a + b;
}

function subtract(a, b) {
    validateNumbers(a, b);
    return a - b;
}

function multiply(a, b) {
    validateNumbers(a, b);
    return a * b;
}

function divide(a, b) {
    validateNumbers(a, b);
    if (b === 0) {
          throw new Error('Division by zero');
    }
    return a / b;
}

function power(base, exponent) {
    validateNumbers(base, exponent);
    return Math.pow(base, exponent);
}

function sqrt(value) {
    validateNumbers(value);
    if (value < 0) {
          throw new Error('Cannot take the square root of a negative number');
    }
    return Math.sqrt(value);
}

function modulo(a, b) {
    validateNumbers(a, b);
    if (b === 0) {
          throw new Error('Modulo by zero');
    }
    return a % b;
}

module.exports = { add, subtract, multiply, divide, power, sqrt, modulo };
