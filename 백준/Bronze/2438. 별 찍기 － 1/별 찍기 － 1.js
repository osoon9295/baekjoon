const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const solution = function solution(input) {
  const output = [];

  for (let i = 1; i <= input; i++) {
    output.push(`${'*'.repeat(i)}\n`);
  }

  return output.join('').trim();
};

const result = solution(input);
if (result !== undefined) {
  console.log(result);
}
