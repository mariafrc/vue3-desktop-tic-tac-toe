import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.ELECTRON == "true" ? './' : ".",
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar()
  ],
  server: {
    port: 8081,
  },
  build: { outDir: "dist_vue" }
})