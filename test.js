const assert = require('assert');
const { greet } = require('./index');
const { add, subtract, multiply, divide, power, sqrt } = require('./math');

assert.strictEqual(greet('Test'), 'Hello, Test!');
assert.strictEqual(add(2, 3), 5);
assert.strictEqual(subtract(5, 2), 3);
assert.strictEqual(multiply(4, 3), 12);
assert.strictEqual(divide(10, 2), 5);
assert.throws(() => divide(1, 0), /Division by zero/);

// Negative numbers
assert.strictEqual(add(-2, -3), -5);
assert.strictEqual(subtract(-5, 2), -7);
assert.strictEqual(multiply(-4, 3), -12);
assert.strictEqual(divide(-10, 2), -5);

// Decimals
assert.strictEqual(add(0.1, 0.2).toFixed(1), '0.3');
assert.strictEqual(multiply(1.5, 2), 3);
assert.strictEqual(divide(7.5, 2.5), 3);

// power / sqrt
assert.strictEqual(power(2, 10), 1024);
assert.strictEqual(power(5, 0), 1);
assert.strictEqual(sqrt(81), 9);
assert.throws(() => sqrt(-1), /Cannot take the square root of a negative number/);

console.log('All tests passed.');
