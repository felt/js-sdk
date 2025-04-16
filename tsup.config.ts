import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/client.ts", "src/handler.ts"],
  format: ["cjs", "esm"],
  external: ["zod"],

  dts: true,
  outDir: "dist",

  minify: true,

  clean: true,
});
