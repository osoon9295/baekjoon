const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const solution = function solution(input) {
  let output = '';
  const n = Number(input.trim());
  for (let i = 1; i <= n; i++) {
    output += `${i}\n`;
  }
  return output.trim();
};

const result = solution(input);
if (result !== undefined) {
  console.log(result);
}
