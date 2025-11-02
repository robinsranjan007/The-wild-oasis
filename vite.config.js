import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnError: false, // ✅ prevents app from crashing on lint errors
      emitWarning: true,  // show warnings
      emitError: false,   // don’t block build
    }),
  ],
  server: {
    hmr: {
      overlay: false, // ✅ hides red overlay in browser
    },
  },
});
