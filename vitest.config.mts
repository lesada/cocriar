import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [tsconfigPaths(), react()],
	test: {
		environment: "jsdom",
		coverage: {
			reporter: ["text", "lcov"],
			reportsDirectory: "./coverage",
		},
		setupFiles: ["./src/_tests/vitest.setup.ts"],
	},
});
