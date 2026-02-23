const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const solution = function solution(input) {
  const arr = input.split('\n');
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    const [a, b] = arr[i].split(' ').map(v => Number(v));

    if (a === 0 && b === 0) break;
    output.push(String(a + b));
  }
  return output.join('\n');
};

const result = solution(input);
if (result !== undefined) {
  console.log(result);
}
