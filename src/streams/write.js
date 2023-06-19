import { createWriteStream } from "node:fs";
import { finished } from "node:stream/promises";
const ws = createWriteStream("./files/fileToWrite.txt");

const write = async () => {
  try {
    process.stdin.on("data", (data) => {
      ws.write(data);
    });
    await finished(ws);
  } catch (err) {
    throw err;
  }
};

await write();
