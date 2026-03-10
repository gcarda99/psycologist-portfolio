import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => ({
    plugins: [
        react(),
        // Genera file .gz (Gzip)
        compression({
            algorithm: 'gzip',
            ext: '.gz',
            threshold: 1024,
        }),
        // Genera file .br (Brotli) — compressione migliore
        compression({
            algorithm: 'brotliCompress',
            ext: '.br',
            threshold: 1024,
        }),
    ],
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
        target: 'esnext',
        cssCodeSplit: true,
        chunkSizeWarningLimit: 600,
        rollupOptions: {
            output: {
                manualChunks: {
                    'vendor-react': ['react', 'react-dom', 'react-router-dom'],
                    'vendor-mui':   ['@mui/material', '@mui/icons-material'],
                    'vendor-motion': ['framer-motion'],
                    // 'vendor-icons': ['react-icons'] rimosso — Rollup ora fa
                    // tree-shaking sui singoli import (es. react-icons/fa6)
                    // includendo solo le icone effettivamente usate
                },
            },
        },
    },
}));
