import { defineConfig } from 'vite';

// Simple Vite config without plugin-react to avoid ESM-only plugin loading issues.
export default defineConfig({
  root: '.',
});
