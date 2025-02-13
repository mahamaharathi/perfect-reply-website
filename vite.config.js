import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import markdown from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    react(),
    markdown({
      mode: ['html'],
      markdownIt: {
        html: true,
        linkify: true,
        typographer: true
      }
    })
  ],
  base: '/perfect-reply-website/',
  // Add this to handle client-side routing
  server: {
    historyApiFallback: true
  }
});