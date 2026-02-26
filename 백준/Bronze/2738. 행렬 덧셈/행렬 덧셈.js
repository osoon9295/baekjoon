const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const solution = function solution(input) {
  const rength = input.trim().split('\n');
  const [a, b] = rength[0].split(' ').map(v => Number(v));

  const arrA = input
    .split('\n')
    .slice(1, 1 + a)
    .map(v => v.split(' ').map(Number));
  const arrB = input
    .split('\n')
    .slice(1 + a)
    .map(v => v.split(' ').map(Number));

  const output = [];

  for (let i = 0; i < a; i++) {
    const row = [];
    for (let j = 0; j < b; j++) {
      row.push(arrA[i][j] + arrB[i][j]);
    }
    output.push(row.join(' '));
  }

  return output.join('\n');
};

const result = solution(input);
if (result !== undefined) {
  console.log(result);
}
