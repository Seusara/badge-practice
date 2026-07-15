const assert = require('assert');
const { greet } = require('./index');
const { add, subtract, multiply, divide } = require('./math');

assert.strictEqual(greet('Test'), 'Hello, Test!');
assert.strictEqual(add(2, 3), 5);
assert.strictEqual(subtract(5, 2), 3);
assert.strictEqual(multiply(4, 3), 12);
assert.strictEqual(divide(10, 2), 5);
assert.throws(() => divide(1, 0), /Division by zero/);

console.log('All tests passed.');
