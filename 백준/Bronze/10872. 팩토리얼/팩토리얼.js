const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const solution = function solution(input) {
  let output = input;

  if (Number(input) === 0) return 1;

  for (let i = input - 1; i > 0; i--) {
    output *= i;
  }

  return output;
};

const result = solution(input);
if (result !== undefined) {
  console.log(result);
}
