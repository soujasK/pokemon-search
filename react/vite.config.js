import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The deployed site serves this app under /react/ (vanilla lives under /vanilla/)
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/react/' : '/',
}));
