import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import postcssPresetEnv from 'postcss-preset-env'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          logical: {
            direction: 'ltr',
          },
          stage: 0,
        }),
      ],
    },
  },
})
