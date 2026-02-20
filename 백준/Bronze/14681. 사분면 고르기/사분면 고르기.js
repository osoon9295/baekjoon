const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const solution = function solution(input) {
  const [x, y] = input
    .trim()
    .split('\n')
    .map(v => Number(v));

  if (x > 0) {
    if (y > 0) {
      return '1';
    }
    return '4';
  }
  if (y > 0) {
    return '2';
  }
  return '3';
};

const result = solution(input);
if (result !== undefined) {
  console.log(result);
}
