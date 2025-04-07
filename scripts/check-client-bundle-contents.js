#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, "..", "dist");
const clientFiles = fs.readdirSync(distPath).filter(file => /client\.c?js$/.test(file));

// ensure we're not accidentally depending on zod (or anything else we shouldn't be) for our client bundle
const disalloweds = [
  {
    name: "import statement",
    match: () => /import\s*{.*}\s*from\s*".*";/g,
    highlight: () => /(.{0,20}import\s*{.*}\s*from\s*".*";.{0,20})/g,
    description: "The client bundle should not contain import statements. This probably means you have something shared between the client and server that shouldn't be."
  },
  {
    name: "zod",
    match: () => /zod/g,
    highlight: () => /(.{0,20}zod.{0,20})/g,
    description: "The client bundle should not include zod. Please check your build configuration to ensure that the client bundle isn't importing anything it shouldn't be."
  },
];
let failed = false;

for (const file of clientFiles) {
  const filePath = path.join(distPath, file);
  const content = fs.readFileSync(filePath, "utf8");

  for (const {name, match, highlight, description} of disalloweds) {
    const matchRegex = match();
    const highlightRegex = highlight();
    
    if (content.match(matchRegex)) {
      const occurrences = content.match(highlightRegex);
      if (occurrences) {
        console.error(`❌ Error: '${name}' found in ${filePath}`);
        console.error("\nOccurrences:");
        occurrences.forEach(occurrence => {
          const highlightedOccurrence = occurrence.replace(matchRegex, `\x1b[31m$&\x1b[0m`);
          console.error(`  ${highlightedOccurrence}`);
        });
        console.error(`\nℹ️ ${description}`);
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
