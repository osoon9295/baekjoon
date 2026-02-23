const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const solution = function solution(input) {
  const output = [];

  for (let i = 1; i <= 9; i++) {
    output.push(`${input} * ${i} = ${input * i}`);
  }

  return output.join('\n');
};

const result = solution(input);
if (result !== undefined) {
  console.log(result);
}
