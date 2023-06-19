import { writeFile } from "node:fs/promises";

const create = async () => {
  try {
    await writeFile("./files/fresh.txt", "I am fresh and young", {
      flag: "wx",
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
