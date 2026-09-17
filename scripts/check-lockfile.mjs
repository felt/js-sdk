// `changeset version` bumps package.json but not package-lock.json, which
// carries its own copy of the root version. The release script syncs the two;
// this check catches any other path that lets them drift.
import { readFileSync } from "node:fs";

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const lock = JSON.parse(readFileSync("package-lock.json", "utf8"));

const lockVersions = [lock.version, lock.packages?.[""]?.version];
const mismatched = lockVersions.filter((v) => v !== pkg.version);

if (mismatched.length) {
  console.error(
    `Error: package-lock.json is at ${mismatched[0]} but package.json is at ${pkg.version}.`,
  );
  console.error("Run: npm install --package-lock-only");
  process.exit(1);
}

console.log(`package-lock.json matches package.json (${pkg.version}).`);
