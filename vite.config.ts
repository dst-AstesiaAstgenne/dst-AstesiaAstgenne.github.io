import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'  // 需要引入 Node 的 path

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  base: '/',  // 如果是项目页，用户主页可写 '/'
  build: {
    outDir: 'docs'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // 这里设置 @ 指向 src
    },
  },
})
