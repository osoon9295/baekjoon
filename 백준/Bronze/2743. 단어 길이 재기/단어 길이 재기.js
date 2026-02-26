const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const solution = function solution(input) {
  return input.length;
};

const result = solution(input);
if (result !== undefined) {
  console.log(result);
}
