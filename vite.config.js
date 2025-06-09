// vite.config.js
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'


export default defineConfig({
  base: '/', // replace with your repo name
  plugins: [svelte()],
  
})