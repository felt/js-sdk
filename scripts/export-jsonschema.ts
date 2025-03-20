#!/usr/bin/env tsx

import {
  extendZodWithOpenApi,
  OpenApiGeneratorV3,
} from "@asteasolutions/zod-to-openapi";
import { mkdir, readdir, unlink, writeFile } from "fs/promises";
import { join } from "path";
import { parseArgs } from "util";
import { z } from "zod";
import {
  ElementCreateSchema,
  ElementReadSchema,
  ElementUpdateSchema,
} from "../src/modules/elements/types";

extendZodWithOpenApi(z);

/**
 * Add any additional schemas here that will form part of the OpenAPI components/schemas
 * section. The keys will be the names of the schemas.
 */
const schemas = {
  ElementCreate: ElementCreateSchema,
  ElementRead: ElementReadSchema,
  ElementUpdate: ElementUpdateSchema,
};

async function main() {
  const { values } = parseArgs({
    options: {
      clean: {
        type: "boolean",
      },
      outDir: {
        type: "string",
      },
    },
  });

  if (!values.outDir) {
    console.error("Error: --outDir is required");
    console.error("Usage: tsx export-jsonschema.ts --outDir <dir> [--clean]");
    process.exit(1);
  }

  const outputDir = values.outDir as string;
  const clean = values.clean ?? false;

  // Create output directory if it doesn't exist
  await mkdir(outputDir, { recursive: true });

  // Clean existing schema files if --clean flag is passed
  if (clean) {
    await cleanDirectory(outputDir);
  }

  // Create OpenAPI-style schema structure
  const openApiSchema = Object.entries(schemas).map(([key, schema]) =>
    schema.openapi(key),
  );
  const generator = new OpenApiGeneratorV3(openApiSchema);

  const components = generator.generateComponents();

  // Write the combined schema to a single file
  const filePath = join(outputDir, "schemas.json");
  await writeFile(filePath, JSON.stringify(components, null, 2));
  console.log(`Wrote schemas to ${filePath}`);
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});

async function cleanDirectory(dir: string) {
  try {
    const files = await readdir(dir);
    for (const file of files) {
      if (file.endsWith(".schema.json")) {
        await unlink(join(dir, file));
        console.log(`Removed ${file}`);
      }
    }
  } catch (error) {
    // Directory doesn't exist yet, that's fine
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      throw error;
    }
  }
}
