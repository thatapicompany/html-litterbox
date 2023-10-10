// vite.config.js
import * as path from "path";
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        outDir: path.resolve(__dirname, '../../dist'),
    }
})