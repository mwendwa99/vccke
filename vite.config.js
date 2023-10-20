import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@Navbar": "/src/components/Navbar/Navbar.jsx",
      "@Button": "/src/components/Button/Button.jsx",
      Pages: "/src/pages",
      Utils: "/src/utils",
      Images: "/src/assets/images",
      Icons: "/src/assets/icons",
      Hooks: "/src/hooks",
      Context: "/src/context",
    },
  },
});
