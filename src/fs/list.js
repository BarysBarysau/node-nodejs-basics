import { readdir } from "node:fs/promises";

const list = async () => {
  try {
    let listed = await readdir("./files");
    console.log(listed);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
