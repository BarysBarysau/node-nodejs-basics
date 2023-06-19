import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const calculateHash = async () => {
  try {
    const content = await readFile("./files/fileToCalculateHashFor.txt");
    console.log(createHash("sha3-256").update(content).digest("hex"));
  } catch (err) {
    throw err;
  }
};

await calculateHash();
