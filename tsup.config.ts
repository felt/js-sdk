import fs from "fs";
import path from "path";
import { defineConfig } from "tsup";

const files = fs.readdirSync("./").filter(isCopiedTargetFile);
for (const file of files) {
  fs.unlinkSync(path.join(".", file));
}

export default defineConfig({
  entryPoints: ["src/client.ts", "src/handler.ts"],
  format: ["cjs", "esm"],
  external: ["zod"],

  dts: true,
  outDir: "dist",

  minify: true,

  clean: true,
});

// move the files to the root for node 10 support (really just to make attw happy)
// onSuccess cannot be used because it runs before the types are generated.
process.on("exit", () => {
  const files = fs.readdirSync("./dist").filter(isDesiredSourceFile);
  for (const file of files) {
    fs.copyFileSync(path.join("dist", file), file.replace(".cjs", ".js"));
  }
});

/**
 * Selects the files that are in the bundle that need to be copied to the root
 * in order to satisfy Node 10 support. This is necessary because the attw
 * package is not able to opt out of checking the Node 10 compatibility,
 * so we just do this to satisfy it.
 *
 * In general, no one should want Node 10 support - this is a library intended
 * to work in a browser environment.
 */
function isDesiredSourceFile(file: string) {
  return (
    file.endsWith("handler.d.ts") ||
    file.endsWith("handler.cjs") ||
    (file.endsWith(".d.ts") && file.includes("types-"))
  );
}

function isCopiedTargetFile(file: string) {
  return isDesiredSourceFile(file) || file.endsWith("handler.js");
}
