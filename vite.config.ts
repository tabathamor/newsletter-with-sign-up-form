import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'; // Import the new Vite plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- Add this here
  ],
  // ⚠️ Remove any 'css: { postcss: { ... } }' block or manual PostCSS config!
});