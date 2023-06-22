/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    base: "https://nitkc22s.pages.dev/",
    plugins: [react()],
    build: {
        outDir: "dist",
    },
});
