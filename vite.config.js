import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: ['src/**/*.js', 'src/**/*.jsx'],
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  server: {
    port: 8080,
    host: true,
    strictPort: true,
  },
  build: {
    outDir: 'build',
  },
});
