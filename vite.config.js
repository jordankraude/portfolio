import { resolve } from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const projectRoot = import.meta.dirname;

export default defineConfig({
  plugins: [svelte({ configFile: resolve(projectRoot, "svelte.config.js") })],
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        // login: resolve(__dirname, "src/login/index.html"),
        main: resolve(projectRoot, "src/index.html"),
        // cart: resolve(__dirname, "src/cart/index.html"),
        game: resolve(projectRoot, "src/gamepage/index.html"),
        gameSub: resolve(projectRoot, "src/gamepage/games/index.html"),
        store: resolve(projectRoot, "src/store/index.html"),
        graphicDesign: resolve(projectRoot, "src/graphic-designs/index.html"),
        schoolProjects: resolve(projectRoot, "src/school-projects/index.html"),
        // checkout: resolve(__dirname, "src/checkout/index.html"),
        // product: resolve(__dirname, "src/product_pages/index.html"),
        // productlist: resolve(__dirname, "src/product-list/index.html"),
        // orders: resolve(__dirname, "src/orders/index.html")
      },
    },
  },
});
