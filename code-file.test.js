const multiply = require('./code-file');

/* test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
}); */

test('adds 1 + 2 to equal 3', multiplyTest)
function multiplyTest() {
  expect(multiply(2, 2)).toBe(11);
};

