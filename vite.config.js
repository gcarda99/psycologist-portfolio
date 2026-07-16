import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig(({isSsrBuild}) => ({
    define: {
        __BUILD_YEAR__: JSON.stringify(new Date().getUTCFullYear()),
    },
    plugins: [
        react(),
        ...(!isSsrBuild ? [
            compression({
                algorithm: 'gzip',
                ext: '.gz',
                threshold: 1024,
            }),
            compression({
                algorithm: 'brotliCompress',
                ext: '.br',
                threshold: 1024,
            }),
        ] : []),
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

    ssr: {
        noExternal: [/^@mui\//, /^@emotion\//, 'react-helmet-async'],
    },

    build: {
        outDir: 'build',
        sourcemap: false,
        minify: 'esbuild',
        target: 'esnext',
        cssCodeSplit: true,
        chunkSizeWarningLimit: 600,
        rollupOptions: !isSsrBuild ? {
            output: {
                manualChunks: {
                    'vendor-react': ['react', 'react-dom', 'react-router-dom'],
                    'vendor-mui':   ['@mui/material', '@mui/icons-material'],
                    'vendor-motion': ['framer-motion'],
                },
            },
        } : undefined,
    },
}));
