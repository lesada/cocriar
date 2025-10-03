import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { NuqsTestingAdapter } from "nuqs/adapters/testing";

const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	});

export function renderWithClient(
	ui: React.ReactElement,
	searchParams?: string | Record<string, string> | URLSearchParams | undefined,
) {
	const testQueryClient = createTestQueryClient();
	const Wrapper = ({ children }: { children: React.ReactNode }) => {
		if (searchParams) {
			return (
				<QueryClientProvider client={testQueryClient}>
					<NuqsTestingAdapter searchParams={searchParams}>
						{children}
					</NuqsTestingAdapter>
				</QueryClientProvider>
			);
		}
		return (
			<QueryClientProvider client={testQueryClient}>
				{children}
			</QueryClientProvider>
		);
	};

	const { rerender, ...result } = render(ui, { wrapper: Wrapper });
	return {
		...result,
		rerender: (rerenderUi: React.ReactElement) => rerender(rerenderUi),
	};
}

export function createWrapper() {
	const testQueryClient = createTestQueryClient();
	return ({ children }: { children: React.ReactNode }) => (
		<QueryClientProvider client={testQueryClient}>
			{children}
		</QueryClientProvider>
	);
}
