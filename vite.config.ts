/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    css: false,
    reporters: ['html'],
    coverage: {
      enabled: true,
      reportOnFailure: true,
      all: false,
      clean: true,
      cleanOnRerun: true,
      reportsDirectory: './html/coverage',
      provider: 'v8',

      reporter: ['html'],
      thresholds: {
        functions: 90,
        branches: 90,
        lines: 90
      }
    }
  },
})
