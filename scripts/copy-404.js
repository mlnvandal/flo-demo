import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("dist");
fs.copyFileSync(path.join(outDir, "index.html"), path.join(outDir, "404.html"));
console.log("Copied dist/index.html -> dist/404.html");

