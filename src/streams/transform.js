import { Transform } from "node:stream";

const transform = async () => {
  const t = new Transform({
    transform(chunk, utf8, callback) {
      callback(
        null,
        `${chunk.toString().replace("\n", "").split("").reverse().join("")}\n`
      );
    },
  });
  process.stdin.pipe(t).pipe(process.stdout);
};

await transform();
