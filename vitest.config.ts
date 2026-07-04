import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import viteReact from '@vitejs/plugin-react'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  tanstackStart({
      // Configure for test environment
      //routesDirectory: './src/routes',
      //generatedRouteTree: './src/routeTree.gen.ts',
      //disableLogging: true,
    }),
    viteReact(),
],
  test: {
    projects: [
      {
        test: {
          include: [
            '**/*.unit.test.ts?(x)',
          ],
          name: 'unit',
          environment: 'node',
        },
      },
      {
        test: {
          include: [
            '**/*.browser.test.ts?(x)',
          ],
          name: 'browser',
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [
              { browser: 'chromium' },
            ],
          },
        },
      },
    ],
  },
})
