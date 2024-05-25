import { QueryClient } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export default function initReactQuery() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				// FIXME: update according to the business requirements.
				staleTime: Number.POSITIVE_INFINITY,
				gcTime: Number.POSITIVE_INFINITY,
			},
		},
	});

	const persister = createSyncStoragePersister({
		storage: typeof window !== "undefined" ? window.localStorage : undefined,
	});
	persistQueryClient({
		queryClient,
		persister: persister,
		maxAge: Number.POSITIVE_INFINITY,
		hydrateOptions: {
			defaultOptions: {
				queries: {
					gcTime: Number.POSITIVE_INFINITY,
				},
			},
		},
	});

	return { queryClient, persister };
}
