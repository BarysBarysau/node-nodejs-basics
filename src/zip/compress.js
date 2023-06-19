import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
const source = createReadStream("./files/fileToCompress.txt");
const destination = createWriteStream("./files/archive.gz");
const gzip = createGzip();

const compress = async () => {
  try {
    pipeline(source, gzip, destination);
  } catch (err) {
    throw err;
  }
};

await compress();
