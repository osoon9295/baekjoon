const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const solution = function solution(input) {
  const year = Number(input.trim());

  if (year % 400 === 0) {
    return 1;
  }
  if (year % 4 === 0) {
    if (year % 100 !== 0) {
      return 1;
    }
    return 0;
  }

  return 0;
};

const result = solution(input);
if (result !== undefined) {
  console.log(result);
}
