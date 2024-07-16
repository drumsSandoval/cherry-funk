import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import staticSite from '@astrojs/static-site'

export default defineConfig({
	site: 'https://cherryfunk.band',
	integrations: [mdx(), sitemap(), staticSite()],
	build: {
		outDir: 'dist'
	}
})
