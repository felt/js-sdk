// @ts-check
 
import fs from 'fs';
import util from 'util';
 
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.postRenderAsyncJobs.push(async (renderer) => {
    // The navigation JSON structure is available on the navigation object.
    console.log(util.inspect(renderer.navigation, {showHidden: false, depth: null, colors: true}))

    const navigation = renderer.navigation;
 
    // This can be parsed to something else or written straight to a file:
    fs.writeFileSync('navigation.json', JSON.stringify(navigation));
  });
}