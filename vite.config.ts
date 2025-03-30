import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Try to load the component tagger only if it's available
  let componentTagger;
  try {
    componentTagger = require("lovable-tagger").componentTagger;
  } catch (e) {
    // If the package is not available, just log it and continue
    console.log("Lovable tagger not available, skipping.");
  }

  return {
    server: {
      host: "::",
      port: 8080,
      headers: {
        'Cross-Origin-Embedder-Policy': 'require-corp',
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Resource-Policy': 'same-origin',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
      }
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger ? componentTagger() : null,
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: '/', // Setting base to root for GitHub Pages
    css: {
      postcss: './postcss.config.js',
    }
  };
});
