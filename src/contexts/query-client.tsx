"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

const queryClient = new QueryClient();

export function QueryProvider({ children }: { children: ReactNode }) {
	console.log(process.env.NEXT_PUBLIC_API_MOCKING);
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
