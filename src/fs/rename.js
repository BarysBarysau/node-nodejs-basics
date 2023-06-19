import { open } from "node:fs/promises";
import { rename } from "node:fs/promises";

const renamed = async () => {
  Promise.resolve(open("./files/properFilename.md", "r"))
    .then(() => {
      throw new Error("FS operation failed");
    })
    .catch(async () => {
      try {
        await Promise.all([
          open("./files/wrongFilename.txt", "r"),
          rename("./files/wrongFilename.txt", "./files/properFilename.md"),
        ]);
      } catch (err) {
        throw new Error("FS operation failed");
      }
    });
};

await renamed();
