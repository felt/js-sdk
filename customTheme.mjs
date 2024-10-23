import fs from "fs";
import path from "path";
import { MarkdownTheme, MarkdownThemeContext } from "typedoc-plugin-markdown";

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.defineTheme("customTheme", MyMarkdownTheme);

  // adding a separator ensures that gitbook doesn't mark any page that begins with say "## Properties" as
  // having the title Properties in the sidebar.
  app.renderer.markdownHooks.on("page.begin", () => `***\n`);

  // remove the root level readme.md
  app.renderer.on("endRender", ({ outputDirectory }) => {
    try {
      const readmePath = path.join(outputDirectory, "README.md");

      if (fs.existsSync(readmePath)) {
        let content = fs.readFileSync(readmePath, "utf8");
        content = content.replace(/\/README\.md/g, "");
        fs.writeFileSync(readmePath, content, "utf8");
      }
    } catch (error) {
      console.error("Error processing README.md:", error);
    }
  });
}

class MyMarkdownTheme extends MarkdownTheme {
  getRenderContext(page) {
    return new MyMarkdownThemeContext(this, page, this.application.options);
  }

  // this puts all the docs just inside their module directory, not nested for types, interfaces, etc.
  getTemplateMapping(kind) {
    const prev = super.getTemplateMapping(kind);
    if (!prev) return prev;
    prev.directory = ".";

    return prev;
  }
}

class MyMarkdownThemeContext extends MarkdownThemeContext {
  // customise partials
  partials = {
    ...this.partials,
    hierarchy: () => {},
    inheritance: () => {},
  };
}
