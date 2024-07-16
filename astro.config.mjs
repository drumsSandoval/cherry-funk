import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
	site: 'https://cherryfunk.band',
	integrations: [mdx(), sitemap()],
	build: {
		outDir: 'dist'
	}
})
