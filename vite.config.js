/*
 * @Descripttion: 
 * @version: 
 * @Author: houqiangxie
 * @Date: 2025-03-08 06:56:58
 * @LastEditors: houqiangxie
 * @LastEditTime: 2025-03-08 12:54:50
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['@popperjs/core']
  },
  alias: {
    '@popperjs/core': '@popperjs/core/lib/index.js' // 强制用 ESM 版本
  }
})
