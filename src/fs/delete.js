import { open } from "node:fs/promises";
import { unlinkSync } from "node:fs";

const remove = async () => {
  try {
    await open("./files/fileToRemove.txt", "r");
  } catch (err) {
    throw new Error("FS operation failed");
  }
  unlinkSync("./files/fileToRemove.txt");
};

await remove();
