const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const solution = function solution(input) {
  const [a, b] = input.split('\n');
  const [length, x] = a.split(' ');
  const arr = b.split(' ').map(v => Number(v));
  const output = [];

  for (let i = 0; i < length; i++) {
    if (arr[i] < x) {
      output.push(arr[i]);
    }
  }

  return output.join(' ');
};

const result = solution(input);
if (result !== undefined) {
  console.log(result);
}
