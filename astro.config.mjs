import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), sitemap(), mdx()],
  output: "server",
  adapter: cloudflare(),
	markdown: {
		syntaxHighlight: false,
		rehypePlugins: [
			'rehype-slug',
			'rehype-autolink-headings',
			'rehype-code-titles',
			'rehype-prism',
		],
	},
  vite: {},
});