import { resolve } from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        login: resolve(__dirname, "src/login/index.html"),
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        game: resolve(__dirname, "src/gamepage/index.html"),
        gameSub: resolve(__dirname, "src/gamepage/games/index.html"),
        store: resolve(__dirname, "src/store/index.html"),
        graphicDesign: resolve(__dirname, "src/graphic-designs/index.html"),
        schoolProjects: resolve(__dirname, "src/school-projects/index.html"),
        // checkout: resolve(__dirname, "src/checkout/index.html"),
        // product: resolve(__dirname, "src/product_pages/index.html"),
        // productlist: resolve(__dirname, "src/product-list/index.html"),
        // orders: resolve(__dirname, "src/orders/index.html")
      },
    },
  },
});
