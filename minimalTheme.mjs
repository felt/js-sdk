import { MarkdownTheme, MarkdownThemeContext } from "typedoc-plugin-markdown";

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.defineTheme("customTheme", MyMarkdownTheme);
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
      // Remove extra newlines and simplify headers
      return defaultValue
        .replace(/^##/gm, "#")
        .replace(/\n{3,}/g, "\n\n")
        .replace(/\*\*\*\n/g, "");
    }
  }

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
  _oldPartials = this.partials;

  // customise partials
  partials = {
    ...this.partials,
    // Simplify hierarchy display
    hierarchy: (model, options) => {
      if (model.types[0].qualifiedName.endsWith("Controller")) {
        return this._oldPartials.hierarchy(model, options);
      }
    },
    // Remove inheritance section
    inheritance: () => {},
    // Simplify property display
    property: (model, options) => {
      const defaultValue = this._oldPartials.property(model, options);
      if (!defaultValue) return defaultValue;
      
      // Remove redundant property descriptions and simplify format
      return defaultValue
        .replace(/>\s*\*\*([^*]+)\*\*:\s*`([^`]+)`/g, "**$1**: `$2`")
        .replace(/\n{3,}/g, "\n\n")
        .replace(/\*\*\*\n/g, "");
    },
    // Simplify type display
    type: (model, options) => {
      const defaultValue = this._oldPartials.type(model, options);
      if (!defaultValue) return defaultValue;
      
      return defaultValue
        .replace(/\n{3,}/g, "\n\n")
        .replace(/\*\*\*\n/g, "");
    }
  };
}
