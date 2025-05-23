import Loader from "@/components/Loader";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Co-criar",
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	weight: ["400", "500", "700"],
});

const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["400", "500", "700"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`${inter.variable} ${poppins.variable} ${poppins.className}`}
			>
				<Suspense fallback={<Loader />}>
					<NuqsAdapter>{children}</NuqsAdapter>
				</Suspense>
			</body>
		</html>
	);
}
