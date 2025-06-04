import { MarkdownTheme, MarkdownThemeContext } from "typedoc-plugin-markdown";

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.defineTheme("minimal", MyMarkdownTheme);
}

class MyMarkdownTheme extends MarkdownTheme {
  constructor(renderer) {
    super(renderer);
    // Find the client module and filter out ElementsController from its children
    const project = this.application?.project;
    if (project) {
      const client = project.getChildByName && project.getChildByName('client');
      if (client && Array.isArray(client.children)) {
        console.log('\n[Theme Init] client children before:', client.children.map(c => c.name));
        client.children = client.children.filter(child => child.name !== 'ElementsController');
        console.log('[Theme Init] client children after:', client.children.map(c => c.name));
      }
    }
  }

  render(page, template) {
    // Filter out ElementsController section since it's @internal
    if (page.model.name === 'ElementsController') {
      console.log('\n=== ElementsController Page Model ===');
      console.log(page.model);
    }
    if (page.model.kind === 'Interface' && page.model.name === 'ElementsController') {
      return '';
    }

    // Filter out inherited members from ElementsController
    if (page.model.name === 'FeltController') {
      const elementsController = page.project.getChildByName('ElementsController');
      if (elementsController) {
        const elementsControllerMembers = new Set(elementsController.children?.map(child => child.name) || []);
        page.model.children = page.model.children?.filter(child => !elementsControllerMembers.has(child.name));
      }
    }

    // Debug: log model info for every page
    console.log('\n=== Debug Page Model ===');
    console.log('Name:', page.model.name);
    console.log('Kind:', page.model.kind);
    console.log('KindString:', page.model.kindString);
    console.log('All properties:', Object.keys(page.model));
    if (page.model.name === 'ElementsController') {
      console.log('Full model:', page.model);
    }

    return super.render(page, template);
  }

  getRenderContext(page) {
    return new MyMarkdownThemeContext(this, page, this.application.options);
  }
}

class MyMarkdownThemeContext extends MarkdownThemeContext {
  constructor(theme, page, options) {
    super(theme, page, options);
    
    // Log information about the current page
    console.log('\n=== Page Info ===');
    console.log('Page:', page.url);
    console.log('Model:', page.model.name);
    
    // Look for FeltController and log its members
    if (page.model.children) {
      const feltController = page.model.children.find(
        child => child.name === 'FeltController'
      );
      if (feltController && feltController.children) {
        console.log('\n=== FeltController Members ===');
        feltController.children.forEach(member => {
          console.log('\n  Member:', member.name);
          console.log('  Kind:', member.kindString);
          console.log('  Inherited from:', member.inheritedFrom?.name || 'Not inherited');
          console.log('  Parent:', member.parent?.name);
          console.log('  Source:', member.sources?.[0]?.fileName);
        });
      }
    }
  }
}
