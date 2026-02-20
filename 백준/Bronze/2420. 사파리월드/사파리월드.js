const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const solution = function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(v => Number(v));

  return Math.abs(a - b);
};

const result = solution(input);
if (result !== undefined) {
  console.log(result);
}
