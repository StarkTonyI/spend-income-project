import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/spend-income-project",
});
/*
"homepage": "https://StarkTonyI.github.io/spend-income",
export default defineConfig({
  plugins: [react()],
  base: "/spend-income-project",
  server: {
    hmr: {
      overlay: false,
    },
  },
  build: {
    sourcemap: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false,
    },
  },
});

*/