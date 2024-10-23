import { MarkdownTheme, MarkdownThemeContext } from "typedoc-plugin-markdown";

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.defineTheme("customTheme", MyMarkdownTheme);

  // adding a separator ensures that gitbook doesn't mark any page that begins with say "## Properties" as
  // having the title Properties in the sidebar.
  app.renderer.markdownHooks.on("page.begin", () => `***\n`);
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
