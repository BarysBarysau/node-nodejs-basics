import { readFile } from "node:fs/promises";

const read = async () => {
  try {
    const content = await readFile(
      "./files/fileToRead.txt",
      { encoding: "utf8" },
      { flag: "r" }
    );
    console.log(content);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
