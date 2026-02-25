const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const solution = function solution(input) {
  const [a, b, c] = input.split('\n');
  const arr = b.split(' ');
  let output = 0;

  for (let i = 0; i < a; i++) {
    if (arr[i] === c) output++;
  }
  return output;
};

const result = solution(input);
if (result !== undefined) {
  console.log(result);
}
