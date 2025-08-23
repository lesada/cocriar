"use client";

import { initMocks } from "@/api/mocks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

const queryClient = new QueryClient();

export function QueryProvider({ children }: { children: ReactNode }) {
	if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
		initMocks();
	}
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
