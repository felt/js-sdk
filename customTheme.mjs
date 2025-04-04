import { MarkdownTheme, MarkdownThemeContext } from "typedoc-plugin-markdown";

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.defineTheme("customTheme", MyMarkdownTheme);

  // adding a separator ensures that gitbook doesn't mark any page that begins with say "## Properties" as
  // having the title Properties in the sidebar.
  app.renderer.markdownHooks.on("page.begin", ({ page }) => {
    // Don't add a separator to the main page, so we can control the title shown in gitbook
    if (page.filename.endsWith("/docs/README.md")) {
      return;
    }
    return `***\n`;
  });
}

class MyMarkdownTheme extends MarkdownTheme {
  render(page, template) {
    const defaultValue = super.render(page, template);
    if (
      page.filename.endsWith("CHANGELOG.md") ||
      page.filename.endsWith("docs/README.md")
    ) {
      return defaultValue;
    } else {
      return defaultValue.replace(/^##/gm, "#").replace(/^##/gm, "#");;
    }
  }

  getRenderContext(page) {
    return new MyMarkdownThemeContext(this, page, this.application.options);
  }

  // this puts all the docs just inside their module directory, not nested for types, interfaces, etc.
  // getTemplateMapping(kind) {
  //   const prev = super.getTemplateMapping(kind);
  //   if (!prev) return prev;
  //   prev.directory = ".";

  //   return prev;
  // }
}

class MyMarkdownThemeContext extends MarkdownThemeContext {
  _oldPartials = this.partials;

  // customise partials
  partials = {
    ...this.partials,
    hierarchy: (model, options) => {
      if (model.types[0].qualifiedName.endsWith("Controller")) {
        return this._oldPartials.hierarchy(model, options);
      }
    },
    inheritance: () => {},
  };
}
