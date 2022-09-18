import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import compress from 'astro-compress';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), sitemap(), mdx(), image(), compress({ img: false })],
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
  vite: {
    ssr: {
      external: ["svgo"],
	  noExternal: ['sharp'],
    },
  },
});