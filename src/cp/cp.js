import * as cp from "node:child_process";
const childInTime = cp.spawn("node", ["./files/script.js"]);
import "./files/script.js";

const spawnChildProcess = async (args) => {
  try {
    for (const item of args) {
      childInTime.stdin.write(item);
    }
    childInTime.stdout.pipe(process.stdout);
  } catch (err) {
    throw err;
  }
};

spawnChildProcess(["me", "you", "foo", "bar"]);
