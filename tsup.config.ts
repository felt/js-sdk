import fs from "fs";
import path from "path";
import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/client.ts", "src/handler.ts"],
  format: ["cjs", "esm"],
  external: ["zod"],

  dts: true,
  outDir: "dist",

  clean: true,
});

// move the files to the root for node 10 support ()
process.on("exit", () => {
  const files = fs.readdirSync("./dist");
  console.log(files);
  for (const file of files) {
    if (
      file.endsWith("handler.d.ts") ||
      file.endsWith("handler.js") ||
      (file.endsWith(".d.ts") && file.includes("types-"))
    ) {
      fs.copyFileSync(path.join("dist", file), file);
    }
  }
  console.log("Type declaration files copied to root directory.");
});
