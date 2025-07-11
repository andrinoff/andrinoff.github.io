import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

export default {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
    }),
    paths: {
      base: "",
    },
  },
  preprocess: vitePreprocess(),
};
