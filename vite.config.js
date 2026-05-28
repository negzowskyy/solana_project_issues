import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // To definiuje zmienną globalną process.env dla przeglądarki
    'process.env': {}
  }
});