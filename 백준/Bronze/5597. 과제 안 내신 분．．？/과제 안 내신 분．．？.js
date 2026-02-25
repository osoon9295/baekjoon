const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const solution = function solution(input) {
  const total = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30,
  ];

  const arr = input.split('\n');

  for (let i = 0; i < arr.length; i++) {
    total[arr[i]] = 0;
  }

  const output = total.filter(v => v !== 0);

  return output.join('\n');
};

const result = solution(input);
if (result !== undefined) {
  console.log(result);
}
