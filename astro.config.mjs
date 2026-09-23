import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Testing Mode Base Path for GitHub Pages (https://AdnanHisham7.github.io/lancox-uae/)
// When switching to custom domain (e.g. lancoxuae.com), set BASE_PATH to '' or '/'
const BASE_PATH = '/lancox-uae';

function prefixBasePlugin(base) {
  return {
    name: 'prefix-base-plugin',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        if (!base || base === '/' || base === '') return;
        const cleanBase = base.replace(/\/$/, '');
        const baseName = cleanBase.replace(/^\//, '');
        const distPath = fileURLToPath(dir);

        function walk(currentDir) {
          const entries = fs.readdirSync(currentDir, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = path.join(currentDir, entry.name);
            if (entry.isDirectory()) {
              walk(fullPath);
            } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.xml'))) {
              let content = fs.readFileSync(fullPath, 'utf8');

              // Rewrite href="/..." (skip protocol-relative href="//..." and already prefixed href="/lancox-uae...")
              content = content.replace(/href="\/([^"]*)"/g, (match, p1) => {
                if (p1.startsWith('/') || p1.startsWith(`${baseName}/`) || p1 === baseName) return match;
                return `href="${cleanBase}/${p1}"`;
              });

              // Rewrite src="/..." (skip protocol-relative src="//..." and already prefixed src="/lancox-uae...")
              content = content.replace(/src="\/([^"]*)"/g, (match, p1) => {
                if (p1.startsWith('/') || p1.startsWith(`${baseName}/`) || p1 === baseName) return match;
                return `src="${cleanBase}/${p1}"`;
              });

              fs.writeFileSync(fullPath, content, 'utf8');
            }
          }
        }

        walk(distPath);
        console.log(`[prefix-base-plugin] Rewrote absolute href and src with base "${cleanBase}" across dist files.`);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://AdnanHisham7.github.io',
  base: BASE_PATH,
  output: 'static',
  trailingSlash: 'always',

  vite: {
    server: {
      allowedHosts: true,
    },
  },

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
    prefixBasePlugin(BASE_PATH),
  ],
});