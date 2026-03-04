import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
    plugins: [react()],
    esbuild: {
        loader: 'jsx',
        include: ['src/**/*.js', 'src/**/*.jsx'],
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: { '.js': 'jsx' },
        },
    },

    server: {
        port: 8080,
        host: true,
        strictPort: true,
        allowedHosts: true,
    },

    build: {
        outDir: 'build',
        sourcemap: false,
        minify: 'esbuild',
        rollupOptions: {
            output: {
                manualChunks: {
                    'vendor-react':  ['react', 'react-dom', 'react-router-dom'],
                    'vendor-mui':    ['@mui/material', '@mui/icons-material', '@mui/styles'],
                    'vendor-motion': ['framer-motion'],
                    'vendor-icons':  ['react-icons'],
                },
            },
        },
    },
}));
