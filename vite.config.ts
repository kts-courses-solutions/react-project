import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: process.env.NODE_ENV === 'production' ? '/kts-react-project/' : '/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
