import * as zlib from "node:zlib";
import { pipeline } from "node:stream/promises";
import * as fs from "node:fs";
const source = fs.createReadStream("./files/archive.gz");
const destination = fs.createWriteStream("./files/fileToCompress.txt");

const decompress = async () => {
  try {
    pipeline(
      source,
      zlib.createGunzip({
        finishFlush: zlib.constants.Z_SYNC_FLUSH,
      }),
      destination
    );
  } catch (err) {
    throw err;
  }
};

await decompress();
