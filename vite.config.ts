import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

export default defineConfig({
	plugins: [react()],
	css: {
		modules: {
			localsConvention: "camelCaseOnly",
		},
		
		preprocessorOptions: {
			scss: {
				api: "modern-compiler", // Позволяет переключать используемый API SASS
			},
		},
	},

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src/"),
			"@app": path.resolve(__dirname, "./src/app/")
		}
	}
});