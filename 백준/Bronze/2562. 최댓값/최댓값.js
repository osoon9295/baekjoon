const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const __lines = [];
rl.on("line", (line) => __lines.push(line));
rl.on("close", () => {
  const input = __lines.join('\n').trim();

  const solution = (input) => {
    const nums = input
      .trim()
      .split("\n")
      .map((v) => Number(v));

    let output = [];
    const max = Math.max(...nums);
    output.push(max);
    output.push(nums.indexOf(max) + 1);
    return output.join("\n");
  };

  const __result = solution(input);
  if (__result !== undefined) {
    if (Array.isArray(__result)) console.log(__result.join('\n'));
    else console.log(String(__result));
  }
  process.exit();
});