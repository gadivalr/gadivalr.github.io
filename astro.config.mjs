// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
// import rehypeToc from 'rehype-toc';
// https://astro.build/config
export default defineConfig({
	site: 'https://gadivalr.github.io/',
  //base: '/gadivalr.github.io',
	integrations: [mdx(), sitemap()],
	markdown: {
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [rehypeKatex, rehypeRaw],
  },
});




