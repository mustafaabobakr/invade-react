import * as React from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	});

export function renderWithClient(ui: React.ReactElement) {
	const testQueryClient = createTestQueryClient();

	return render(<QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>);
}
export function createWrapper() {
	const testQueryClient = createTestQueryClient();

	return ({ children }: { children: React.ReactNode }) => (
		<QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
	);
}
