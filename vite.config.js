import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginNode } from "vite-plugin-node";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/Painel/",
  plugins: [
    react(),
    // ...VitePluginNode({
    //   adapter: "express",
    //   appPath: "./src/lib/server.ts",
    // }),
  ],
});
