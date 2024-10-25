#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, "..", "dist");
const clientFiles = fs.readdirSync(distPath).filter(file => /client\.c?js$/.test(file));

// ensure we're not accidentally depending on zod (or anything else we shouldn't be) for our client bundle
const disallowedStrings = ["zod"];
let failed = false;

for (const file of clientFiles) {
  const filePath = path.join(distPath, file);
  const content = fs.readFileSync(filePath, "utf8");

  for (const stringToFind of disallowedStrings) {
    const stringToFindRegex = new RegExp(`(.{0,20}${stringToFind}.{0,20})`, "g");
    if (content.includes(stringToFind)) {
      const occurrences = content.match(stringToFindRegex);
      if (occurrences) {
        console.error(`❌ Error: '${stringToFind}' found in ${filePath}`);
        console.error("\nOccurrences:");
        occurrences.forEach(occurrence => {
          const highlightedOccurrence = occurrence.replace(stringToFind, `\x1b[31m${stringToFind}\x1b[0m`);
          console.error(`  ${highlightedOccurrence}`);
        });
        console.error(`\nℹ️ The client bundle should not include ${stringToFind}. Please check your build configuration to ensure that the client bundle isn't importing anything it shouldn't be.`);
        failed = true;
      }
    }
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log("✅ No disallowed strings found in client bundles.");
  process.exit(0);
}
