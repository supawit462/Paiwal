import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' so the built site works from any folder on the host (e.g. httpdocs/)
export default defineConfig({ plugins: [react()], base: './' });
