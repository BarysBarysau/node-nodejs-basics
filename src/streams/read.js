import { finished } from "node:stream/promises";
import { createReadStream } from "node:fs";
const rs = createReadStream("./files/fileToRead.txt");
const read = async () => {
  try {
    rs.on("data", (data) => {
      process.stdout.write(data);
    });
    await finished(rs);
  } catch (err) {
    console.error(err);
  }
};

await read();
