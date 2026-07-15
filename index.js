const { add, multiply, divide } = require('./math');

function greet(name) {
  return `Hello, ${name}!`;
}

const name = process.argv[2] || 'World';

console.log(greet(name));
console.log(`2 + 3 = ${add(2, 3)}`);
console.log(`2 * 3 = ${multiply(2, 3)}`);

try {
  console.log(`10 / 0 = ${divide(10, 0)}`);
} catch (err) {
  console.error(`Could not divide: ${err.message}`);
}

module.exports = { greet };
