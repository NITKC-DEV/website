/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.GITHUB_PAGES ? "NITKC22s.github.io" : "./",
    plugins: [react()],
    build: {
        outDir: "dist",
    },
});
