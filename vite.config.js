import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import postcss from 'postcss'
import postcssPresetEnv from 'postcss-preset-env'
// import postcssNesting from 'postcss-nesting'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 0,
          features: {
            'nesting-rules': true,
          },
        }),
        // postcssNesting(),
      ],
    },
  },
})
