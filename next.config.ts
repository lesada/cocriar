import { routes } from "@/routes";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async rewrites() {
		return routes;
	},
};

export default nextConfig;
