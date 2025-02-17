import { fileURLToPath } from "url";
import { dirname, sep } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { release, version } from "node:os";
import { createServer } from "node:http";
import "./files/c.js";
import * as unknownObject1 from "./files/a.json" assert { type: "json" };
import * as unknownObject2 from "./files/b.json" assert { type: "json" };

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = unknownObject1;
} else {
  unknownObject = unknownObject2;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default {
  unknownObject,
  myServer,
};
