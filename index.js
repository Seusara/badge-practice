const { add, multiply } = require('./math');

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('World'));
console.log(`2 + 3 = ${add(2, 3)}`);
console.log(`2 * 3 = ${multiply(2, 3)}`);

module.exports = { greet };
