import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: "404.html",
			precompress: false,
			strict: true
		}),
		paths: {
			base: ""
		}
	}
}
