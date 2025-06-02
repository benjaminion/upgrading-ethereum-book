// @ts-check
import { defineConfig } from 'astro/config';
import { metadata, searchOptions } from './src/include/SiteConfig.js';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import Prism from 'prismjs';

// Custom integrations
import myBuildChecks from './integrations/my_build_checks';
import myAutoLinkHeadings from './integrations/my_autolink_headings';
import mySvgInline from './integrations/my_svg_inline';
import mySearchIndex from './integrations/my_search_index';
import myAddTooltips from './integrations/my_add_tooltips';
import myFixupLinks from './integrations/my_fixup_links';
import myCleanupHtml from './integrations/my_cleanup_html';
import myHtaccess from './integrations/my_htaccess';

Prism.languages.none = Prism.languages.text;
Prism.languages.code = Prism.languages.text;

const basePath = '/' + metadata.version;

export default defineConfig({
  base: basePath,
  integrations: [
    myBuildChecks(),
    myAutoLinkHeadings({ exclude: 'h1, .no-anchor' }),
    mySvgInline({ filePath: 'src/', cachePath: 'src/cache/' }),
    mySearchIndex(searchOptions),
    myAddTooltips({ constantsFile: 'src/include/constants.json' }),
    myFixupLinks(),
    myCleanupHtml(),
    myHtaccess(basePath),
  ],
  markdown: {
    syntaxHighlight: 'prism',
    smartypants: false,
    remarkRehype: { clobberPrefix: '' }, // This is ok as we trust the markdown
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeRaw, // Insert HTML embedded in MD files into the AST rather than as raw strings
      [rehypeKatex, {}],
    ],
  },
});
