import { mkdir } from "node:fs/promises";
import { readdir } from "node:fs/promises";
import { cp } from "node:fs";

const copy = async () => {
  try {
    await mkdir("./files_copy");
  } catch (err) {
    throw new Error("FS operation failed");
  }
  const files = await readdir("./files");
  for (let file of files) {
    cp(`./files/${file}`, `./files_copy/${file}`, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

await copy();
